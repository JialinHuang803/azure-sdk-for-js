// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext as Client } from "../index.js";
import { commonCloudErrorDeserializer } from "../../models/common/models.js";
import {
  ComputeGalleryGalleryScript,
  computeGalleryGalleryScriptSerializer,
  computeGalleryGalleryScriptDeserializer,
  ComputeGalleryGalleryScriptUpdate,
  computeGalleryGalleryScriptUpdateSerializer,
  _ComputeGalleryGalleryScriptList,
  _computeGalleryGalleryScriptListDeserializer,
} from "../../models/computeGallery/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  GalleryScriptsListByGalleryOptionalParams,
  GalleryScriptsDeleteOptionalParams,
  GalleryScriptsUpdateOptionalParams,
  GalleryScriptsCreateOrUpdateOptionalParams,
  GalleryScriptsGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _listByGallerySend(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  options: GalleryScriptsListByGalleryOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/scripts{?api%2Dversion}",
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
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _listByGalleryDeserialize(
  result: PathUncheckedResponse,
): Promise<_ComputeGalleryGalleryScriptList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return _computeGalleryGalleryScriptListDeserializer(result.body);
}

/** List gallery Script Definitions in a gallery. */
export function listByGallery(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  options: GalleryScriptsListByGalleryOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ComputeGalleryGalleryScript> {
  return buildPagedAsyncIterator(
    context,
    () => _listByGallerySend(context, resourceGroupName, galleryName, options),
    _listByGalleryDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: "2025-03-03" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryScriptName: string,
  options: GalleryScriptsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/scripts/{galleryScriptName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      galleryName: galleryName,
      galleryScriptName: galleryScriptName,
      "api%2Dversion": "2025-03-03",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a gallery Script Definition. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryScriptName: string,
  options: GalleryScriptsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(context, resourceGroupName, galleryName, galleryScriptName, options),
    resourceLocationConfig: "location",
    apiVersion: "2025-03-03",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryScriptName: string,
  galleryScript: ComputeGalleryGalleryScriptUpdate,
  options: GalleryScriptsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/scripts/{galleryScriptName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      galleryName: galleryName,
      galleryScriptName: galleryScriptName,
      "api%2Dversion": "2025-03-03",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: computeGalleryGalleryScriptUpdateSerializer(galleryScript),
    });
}

export async function _updateDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "202", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/** Update a gallery Script Definition. */
export function update(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryScriptName: string,
  galleryScript: ComputeGalleryGalleryScriptUpdate,
  options: GalleryScriptsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        resourceGroupName,
        galleryName,
        galleryScriptName,
        galleryScript,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: "2025-03-03",
  }) as PollerLike<OperationState<void>, void>;
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryScriptName: string,
  galleryScript: ComputeGalleryGalleryScript,
  options: GalleryScriptsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/scripts/{galleryScriptName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      galleryName: galleryName,
      galleryScriptName: galleryScriptName,
      "api%2Dversion": "2025-03-03",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: computeGalleryGalleryScriptSerializer(galleryScript),
    });
}

export async function _createOrUpdateDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/** Create or update a Gallery Script Definition. Gallery scripts allow the storage, sharing and reuse of common scripts */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryScriptName: string,
  galleryScript: ComputeGalleryGalleryScript,
  options: GalleryScriptsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        resourceGroupName,
        galleryName,
        galleryScriptName,
        galleryScript,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: "2025-03-03",
  }) as PollerLike<OperationState<void>, void>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryScriptName: string,
  options: GalleryScriptsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/scripts/{galleryScriptName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      galleryName: galleryName,
      galleryScriptName: galleryScriptName,
      "api%2Dversion": "2025-03-03",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeGalleryGalleryScript> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeGalleryGalleryScriptDeserializer(result.body);
}

/** Retrieves information about a gallery script definition. */
export async function get(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryScriptName: string,
  options: GalleryScriptsGetOptionalParams = { requestOptions: {} },
): Promise<ComputeGalleryGalleryScript> {
  const result = await _getSend(
    context,
    resourceGroupName,
    galleryName,
    galleryScriptName,
    options,
  );
  return _getDeserialize(result);
}
