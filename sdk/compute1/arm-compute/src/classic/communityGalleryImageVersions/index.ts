// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import { list, get } from "../../api/communityGalleryImageVersions/operations.js";
import {
  CommunityGalleryImageVersionsListOptionalParams,
  CommunityGalleryImageVersionsGetOptionalParams,
} from "../../api/communityGalleryImageVersions/options.js";
import { ComputeGalleryCommunityGalleryImageVersion } from "../../models/computeGallery/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a CommunityGalleryImageVersions operations. */
export interface CommunityGalleryImageVersionsOperations {
  /** List community gallery image versions inside an image. */
  list: (
    location: string,
    publicGalleryName: string,
    galleryImageName: string,
    options?: CommunityGalleryImageVersionsListOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeGalleryCommunityGalleryImageVersion>;
  /** Get a community gallery image version. */
  get: (
    location: string,
    publicGalleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    options?: CommunityGalleryImageVersionsGetOptionalParams,
  ) => Promise<ComputeGalleryCommunityGalleryImageVersion>;
}

function _getCommunityGalleryImageVersions(context: ComputeContext) {
  return {
    list: (
      location: string,
      publicGalleryName: string,
      galleryImageName: string,
      options?: CommunityGalleryImageVersionsListOptionalParams,
    ) => list(context, location, publicGalleryName, galleryImageName, options),
    get: (
      location: string,
      publicGalleryName: string,
      galleryImageName: string,
      galleryImageVersionName: string,
      options?: CommunityGalleryImageVersionsGetOptionalParams,
    ) =>
      get(context, location, publicGalleryName, galleryImageName, galleryImageVersionName, options),
  };
}

export function _getCommunityGalleryImageVersionsOperations(
  context: ComputeContext,
): CommunityGalleryImageVersionsOperations {
  return {
    ..._getCommunityGalleryImageVersions(context),
  };
}
