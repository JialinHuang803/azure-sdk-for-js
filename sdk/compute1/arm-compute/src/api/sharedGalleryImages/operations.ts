// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext as Client } from "../index.js";
import { commonCloudErrorDeserializer } from "../../models/common/models.js";
import {
  ComputeGallerySharedGalleryImage,
  computeGallerySharedGalleryImageDeserializer,
  _ComputeGallerySharedGalleryImageList,
  _computeGallerySharedGalleryImageListDeserializer,
} from "../../models/computeGallery/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  SharedGalleryImagesListOptionalParams,
  SharedGalleryImagesGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listSend(
  context: Client,
  location: string,
  galleryUniqueName: string,
  options: SharedGalleryImagesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/sharedGalleries/{galleryUniqueName}/images{?api%2Dversion,sharedTo}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      galleryUniqueName: galleryUniqueName,
      "api%2Dversion": "2025-03-03",
      sharedTo: options?.sharedTo,
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
): Promise<_ComputeGallerySharedGalleryImageList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return _computeGallerySharedGalleryImageListDeserializer(result.body);
}

/** List shared gallery images by subscription id or tenant id. */
export function list(
  context: Client,
  location: string,
  galleryUniqueName: string,
  options: SharedGalleryImagesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ComputeGallerySharedGalleryImage> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, location, galleryUniqueName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: "2025-03-03" },
  );
}

export function _getSend(
  context: Client,
  location: string,
  galleryUniqueName: string,
  galleryImageName: string,
  options: SharedGalleryImagesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/sharedGalleries/{galleryUniqueName}/images/{galleryImageName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      galleryUniqueName: galleryUniqueName,
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
): Promise<ComputeGallerySharedGalleryImage> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeGallerySharedGalleryImageDeserializer(result.body);
}

/** Get a shared gallery image by subscription id or tenant id. */
export async function get(
  context: Client,
  location: string,
  galleryUniqueName: string,
  galleryImageName: string,
  options: SharedGalleryImagesGetOptionalParams = { requestOptions: {} },
): Promise<ComputeGallerySharedGalleryImage> {
  const result = await _getSend(context, location, galleryUniqueName, galleryImageName, options);
  return _getDeserialize(result);
}
