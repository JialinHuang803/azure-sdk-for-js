// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext as Client } from "../index.js";
import { commonCloudErrorDeserializer } from "../../models/common/models.js";
import {
  ComputeGallerySharingUpdate,
  computeGallerySharingUpdateSerializer,
  computeGallerySharingUpdateDeserializer,
} from "../../models/computeGallery/models.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { GallerySharingProfileUpdateOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  sharingUpdate: ComputeGallerySharingUpdate,
  options: GallerySharingProfileUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/share{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      galleryName: galleryName,
      "api%2Dversion": "2025-03-03",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: computeGallerySharingUpdateSerializer(sharingUpdate),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeGallerySharingUpdate> {
  const expectedStatuses = ["200", "202", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeGallerySharingUpdateDeserializer(result.body);
}

/** Update sharing profile of a gallery. */
export function update(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  sharingUpdate: ComputeGallerySharingUpdate,
  options: GallerySharingProfileUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ComputeGallerySharingUpdate>, ComputeGallerySharingUpdate> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(context, resourceGroupName, galleryName, sharingUpdate, options),
    resourceLocationConfig: "location",
    apiVersion: "2025-03-03",
  }) as PollerLike<OperationState<ComputeGallerySharingUpdate>, ComputeGallerySharingUpdate>;
}
