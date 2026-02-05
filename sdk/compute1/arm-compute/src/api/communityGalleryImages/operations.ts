// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext as Client } from "../index.js";
import { commonCloudErrorDeserializer } from "../../models/common/models.js";
import {
  ComputeGalleryCommunityGalleryImage,
  computeGalleryCommunityGalleryImageDeserializer,
  _ComputeGalleryCommunityGalleryImageList,
  _computeGalleryCommunityGalleryImageListDeserializer,
} from "../../models/computeGallery/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  CommunityGalleryImagesListOptionalParams,
  CommunityGalleryImagesGetOptionalParams,
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
  publicGalleryName: string,
  options: CommunityGalleryImagesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/communityGalleries/{publicGalleryName}/images{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      publicGalleryName: publicGalleryName,
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
): Promise<_ComputeGalleryCommunityGalleryImageList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return _computeGalleryCommunityGalleryImageListDeserializer(result.body);
}

/** List community gallery images inside a gallery. */
export function list(
  context: Client,
  location: string,
  publicGalleryName: string,
  options: CommunityGalleryImagesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ComputeGalleryCommunityGalleryImage> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, location, publicGalleryName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: "2025-03-03" },
  );
}

export function _getSend(
  context: Client,
  location: string,
  publicGalleryName: string,
  galleryImageName: string,
  options: CommunityGalleryImagesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/communityGalleries/{publicGalleryName}/images/{galleryImageName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      publicGalleryName: publicGalleryName,
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
): Promise<ComputeGalleryCommunityGalleryImage> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeGalleryCommunityGalleryImageDeserializer(result.body);
}

/** Get a community gallery image. */
export async function get(
  context: Client,
  location: string,
  publicGalleryName: string,
  galleryImageName: string,
  options: CommunityGalleryImagesGetOptionalParams = { requestOptions: {} },
): Promise<ComputeGalleryCommunityGalleryImage> {
  const result = await _getSend(context, location, publicGalleryName, galleryImageName, options);
  return _getDeserialize(result);
}
