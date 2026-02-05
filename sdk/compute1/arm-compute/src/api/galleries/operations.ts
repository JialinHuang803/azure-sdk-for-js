// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext as Client } from "../index.js";
import { commonCloudErrorDeserializer } from "../../models/common/models.js";
import {
  ComputeGalleryGallery,
  computeGalleryGallerySerializer,
  computeGalleryGalleryDeserializer,
  ComputeGalleryGalleryUpdate,
  computeGalleryGalleryUpdateSerializer,
  _ComputeGalleryGalleryList,
  _computeGalleryGalleryListDeserializer,
} from "../../models/computeGallery/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  GalleriesListOptionalParams,
  GalleriesListByResourceGroupOptionalParams,
  GalleriesDeleteOptionalParams,
  GalleriesUpdateOptionalParams,
  GalleriesCreateOrUpdateOptionalParams,
  GalleriesGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _listSend(
  context: Client,
  options: GalleriesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/galleries{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
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

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_ComputeGalleryGalleryList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return _computeGalleryGalleryListDeserializer(result.body);
}

/** List galleries under a subscription. */
export function list(
  context: Client,
  options: GalleriesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ComputeGalleryGallery> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: "2025-03-03" },
  );
}

export function _listByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: GalleriesListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
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

export async function _listByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_ComputeGalleryGalleryList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return _computeGalleryGalleryListDeserializer(result.body);
}

/** List galleries under a resource group. */
export function listByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: GalleriesListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ComputeGalleryGallery> {
  return buildPagedAsyncIterator(
    context,
    () => _listByResourceGroupSend(context, resourceGroupName, options),
    _listByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: "2025-03-03" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  options: GalleriesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}{?api%2Dversion}",
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

/** Delete a Shared Image Gallery. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  options: GalleriesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _$deleteSend(context, resourceGroupName, galleryName, options),
    resourceLocationConfig: "location",
    apiVersion: "2025-03-03",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  gallery: ComputeGalleryGalleryUpdate,
  options: GalleriesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}{?api%2Dversion}",
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
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: computeGalleryGalleryUpdateSerializer(gallery),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeGalleryGallery> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeGalleryGalleryDeserializer(result.body);
}

/** Update a Shared Image Gallery. */
export function update(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  gallery: ComputeGalleryGalleryUpdate,
  options: GalleriesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ComputeGalleryGallery>, ComputeGalleryGallery> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(context, resourceGroupName, galleryName, gallery, options),
    resourceLocationConfig: "location",
    apiVersion: "2025-03-03",
  }) as PollerLike<OperationState<ComputeGalleryGallery>, ComputeGalleryGallery>;
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  gallery: ComputeGalleryGallery,
  options: GalleriesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}{?api%2Dversion}",
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
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: computeGalleryGallerySerializer(gallery),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeGalleryGallery> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeGalleryGalleryDeserializer(result.body);
}

/** Create or update a Shared Image Gallery. */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  gallery: ComputeGalleryGallery,
  options: GalleriesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ComputeGalleryGallery>, ComputeGalleryGallery> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(context, resourceGroupName, galleryName, gallery, options),
    resourceLocationConfig: "location",
    apiVersion: "2025-03-03",
  }) as PollerLike<OperationState<ComputeGalleryGallery>, ComputeGalleryGallery>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  options: GalleriesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}{?api%2Dversion,%24select,%24expand}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      galleryName: galleryName,
      "api%2Dversion": "2025-03-03",
      "%24select": options?.select,
      "%24expand": options?.expand,
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
): Promise<ComputeGalleryGallery> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeGalleryGalleryDeserializer(result.body);
}

/** Retrieves information about a Shared Image Gallery. */
export async function get(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  options: GalleriesGetOptionalParams = { requestOptions: {} },
): Promise<ComputeGalleryGallery> {
  const result = await _getSend(context, resourceGroupName, galleryName, options);
  return _getDeserialize(result);
}
