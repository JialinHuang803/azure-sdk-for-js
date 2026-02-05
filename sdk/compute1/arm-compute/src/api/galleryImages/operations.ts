// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext as Client } from "../index.js";
import { commonCloudErrorDeserializer } from "../../models/common/models.js";
import {
  ComputeGalleryGalleryImage,
  computeGalleryGalleryImageSerializer,
  computeGalleryGalleryImageDeserializer,
  ComputeGalleryGalleryImageUpdate,
  computeGalleryGalleryImageUpdateSerializer,
  _ComputeGalleryGalleryImageList,
  _computeGalleryGalleryImageListDeserializer,
} from "../../models/computeGallery/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  GalleryImagesListByGalleryOptionalParams,
  GalleryImagesDeleteOptionalParams,
  GalleryImagesUpdateOptionalParams,
  GalleryImagesCreateOrUpdateOptionalParams,
  GalleryImagesGetOptionalParams,
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
  options: GalleryImagesListByGalleryOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images{?api%2Dversion}",
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
): Promise<_ComputeGalleryGalleryImageList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return _computeGalleryGalleryImageListDeserializer(result.body);
}

/** List gallery image definitions in a gallery. */
export function listByGallery(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  options: GalleryImagesListByGalleryOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ComputeGalleryGalleryImage> {
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
  galleryImageName: string,
  options: GalleryImagesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      galleryName: galleryName,
      galleryImageName: galleryImageName,
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

/** Delete a gallery image. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryImageName: string,
  options: GalleryImagesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(context, resourceGroupName, galleryName, galleryImageName, options),
    resourceLocationConfig: "location",
    apiVersion: "2025-03-03",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryImageName: string,
  galleryImage: ComputeGalleryGalleryImageUpdate,
  options: GalleryImagesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      galleryName: galleryName,
      galleryImageName: galleryImageName,
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
      body: computeGalleryGalleryImageUpdateSerializer(galleryImage),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeGalleryGalleryImage> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeGalleryGalleryImageDeserializer(result.body);
}

/** Update a gallery image definition. */
export function update(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryImageName: string,
  galleryImage: ComputeGalleryGalleryImageUpdate,
  options: GalleryImagesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ComputeGalleryGalleryImage>, ComputeGalleryGalleryImage> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(context, resourceGroupName, galleryName, galleryImageName, galleryImage, options),
    resourceLocationConfig: "location",
    apiVersion: "2025-03-03",
  }) as PollerLike<OperationState<ComputeGalleryGalleryImage>, ComputeGalleryGalleryImage>;
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryImageName: string,
  galleryImage: ComputeGalleryGalleryImage,
  options: GalleryImagesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      galleryName: galleryName,
      galleryImageName: galleryImageName,
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
      body: computeGalleryGalleryImageSerializer(galleryImage),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeGalleryGalleryImage> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeGalleryGalleryImageDeserializer(result.body);
}

/** Create or update a gallery image definition. */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryImageName: string,
  galleryImage: ComputeGalleryGalleryImage,
  options: GalleryImagesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ComputeGalleryGalleryImage>, ComputeGalleryGalleryImage> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        resourceGroupName,
        galleryName,
        galleryImageName,
        galleryImage,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: "2025-03-03",
  }) as PollerLike<OperationState<ComputeGalleryGalleryImage>, ComputeGalleryGalleryImage>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryImageName: string,
  options: GalleryImagesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      galleryName: galleryName,
      galleryImageName: galleryImageName,
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
): Promise<ComputeGalleryGalleryImage> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeGalleryGalleryImageDeserializer(result.body);
}

/** Retrieves information about a gallery image definition. */
export async function get(
  context: Client,
  resourceGroupName: string,
  galleryName: string,
  galleryImageName: string,
  options: GalleryImagesGetOptionalParams = { requestOptions: {} },
): Promise<ComputeGalleryGalleryImage> {
  const result = await _getSend(context, resourceGroupName, galleryName, galleryImageName, options);
  return _getDeserialize(result);
}
