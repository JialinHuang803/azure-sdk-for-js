// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext as Client } from "../index.js";
import { commonCloudErrorDeserializer } from "../../models/common/models.js";
import {
  ComputeGalleryGalleryApplication,
  computeGalleryGalleryApplicationSerializer,
  computeGalleryGalleryApplicationDeserializer,
  ComputeGalleryGalleryApplicationUpdate,
  computeGalleryGalleryApplicationUpdateSerializer,
  _ComputeGalleryGalleryApplicationList,
  _computeGalleryGalleryApplicationListDeserializer,
} from "../../models/computeGallery/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  GalleryApplicationsListByGalleryOptionalParams,
  GalleryApplicationsDeleteOptionalParams,
  GalleryApplicationsUpdateOptionalParams,
  GalleryApplicationsCreateOrUpdateOptionalParams,
  GalleryApplicationsGetOptionalParams,
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
  options: GalleryApplicationsListByGalleryOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications{?api%2Dversion}",
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
): Promise<_ComputeGalleryGalleryApplicationList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return _computeGalleryGalleryApplicationListDeserializer(result.body);
}

/** List gallery Application Definitions in a gallery. */
export function listByGallery(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  options: GalleryApplicationsListByGalleryOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ComputeGalleryGalleryApplication> {
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
  galleryApplicationName: string,
  options: GalleryApplicationsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      galleryName: galleryName,
      galleryApplicationName: galleryApplicationName,
      "api%2Dversion": "2025-03-03",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a gallery Application. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryApplicationName: string,
  options: GalleryApplicationsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(context, resourceGroupName, galleryName, galleryApplicationName, options),
    resourceLocationConfig: "location",
    apiVersion: "2025-03-03",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryApplicationName: string,
  galleryApplication: ComputeGalleryGalleryApplicationUpdate,
  options: GalleryApplicationsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      galleryName: galleryName,
      galleryApplicationName: galleryApplicationName,
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
      body: computeGalleryGalleryApplicationUpdateSerializer(galleryApplication),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeGalleryGalleryApplication> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeGalleryGalleryApplicationDeserializer(result.body);
}

/** Update a gallery Application Definition. */
export function update(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryApplicationName: string,
  galleryApplication: ComputeGalleryGalleryApplicationUpdate,
  options: GalleryApplicationsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ComputeGalleryGalleryApplication>, ComputeGalleryGalleryApplication> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplication,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: "2025-03-03",
  }) as PollerLike<
    OperationState<ComputeGalleryGalleryApplication>,
    ComputeGalleryGalleryApplication
  >;
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryApplicationName: string,
  galleryApplication: ComputeGalleryGalleryApplication,
  options: GalleryApplicationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      galleryName: galleryName,
      galleryApplicationName: galleryApplicationName,
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
      body: computeGalleryGalleryApplicationSerializer(galleryApplication),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeGalleryGalleryApplication> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeGalleryGalleryApplicationDeserializer(result.body);
}

/** Create or update a gallery Application Definition. */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryApplicationName: string,
  galleryApplication: ComputeGalleryGalleryApplication,
  options: GalleryApplicationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ComputeGalleryGalleryApplication>, ComputeGalleryGalleryApplication> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplication,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: "2025-03-03",
  }) as PollerLike<
    OperationState<ComputeGalleryGalleryApplication>,
    ComputeGalleryGalleryApplication
  >;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryApplicationName: string,
  options: GalleryApplicationsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      galleryName: galleryName,
      galleryApplicationName: galleryApplicationName,
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
): Promise<ComputeGalleryGalleryApplication> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeGalleryGalleryApplicationDeserializer(result.body);
}

/** Retrieves information about a gallery Application Definition. */
export async function get(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryApplicationName: string,
  options: GalleryApplicationsGetOptionalParams = { requestOptions: {} },
): Promise<ComputeGalleryGalleryApplication> {
  const result = await _getSend(
    context,
    resourceGroupName,
    galleryName,
    galleryApplicationName,
    options,
  );
  return _getDeserialize(result);
}
