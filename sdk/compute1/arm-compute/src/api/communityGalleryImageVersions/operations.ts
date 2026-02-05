// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext as Client } from "../index.js";
import { commonCloudErrorDeserializer } from "../../models/common/models.js";
import {
  ComputeGalleryCommunityGalleryImageVersion,
  computeGalleryCommunityGalleryImageVersionDeserializer,
  _ComputeGalleryCommunityGalleryImageVersionList,
  _computeGalleryCommunityGalleryImageVersionListDeserializer,
} from "../../models/computeGallery/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  CommunityGalleryImageVersionsListOptionalParams,
  CommunityGalleryImageVersionsGetOptionalParams,
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
  galleryImageName: string,
  options: CommunityGalleryImageVersionsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/communityGalleries/{publicGalleryName}/images/{galleryImageName}/versions{?api%2Dversion}",
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

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_ComputeGalleryCommunityGalleryImageVersionList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return _computeGalleryCommunityGalleryImageVersionListDeserializer(result.body);
}

/** List community gallery image versions inside an image. */
export function list(
  context: Client,
  location: string,
  publicGalleryName: string,
  galleryImageName: string,
  options: CommunityGalleryImageVersionsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ComputeGalleryCommunityGalleryImageVersion> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, location, publicGalleryName, galleryImageName, options),
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
  galleryImageVersionName: string,
  options: CommunityGalleryImageVersionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/communityGalleries/{publicGalleryName}/images/{galleryImageName}/versions/{galleryImageVersionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      publicGalleryName: publicGalleryName,
      galleryImageName: galleryImageName,
      galleryImageVersionName: galleryImageVersionName,
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
): Promise<ComputeGalleryCommunityGalleryImageVersion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeGalleryCommunityGalleryImageVersionDeserializer(result.body);
}

/** Get a community gallery image version. */
export async function get(
  context: Client,
  location: string,
  publicGalleryName: string,
  galleryImageName: string,
  galleryImageVersionName: string,
  options: CommunityGalleryImageVersionsGetOptionalParams = { requestOptions: {} },
): Promise<ComputeGalleryCommunityGalleryImageVersion> {
  const result = await _getSend(
    context,
    location,
    publicGalleryName,
    galleryImageName,
    galleryImageVersionName,
    options,
  );
  return _getDeserialize(result);
}
