// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import { list, get } from "../../api/sharedGalleryImages/operations.js";
import {
  SharedGalleryImagesListOptionalParams,
  SharedGalleryImagesGetOptionalParams,
} from "../../api/sharedGalleryImages/options.js";
import { ComputeGallerySharedGalleryImage } from "../../models/computeGallery/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a SharedGalleryImages operations. */
export interface SharedGalleryImagesOperations {
  /** List shared gallery images by subscription id or tenant id. */
  list: (
    location: string,
    galleryUniqueName: string,
    options?: SharedGalleryImagesListOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeGallerySharedGalleryImage>;
  /** Get a shared gallery image by subscription id or tenant id. */
  get: (
    location: string,
    galleryUniqueName: string,
    galleryImageName: string,
    options?: SharedGalleryImagesGetOptionalParams,
  ) => Promise<ComputeGallerySharedGalleryImage>;
}

function _getSharedGalleryImages(context: ComputeContext) {
  return {
    list: (
      location: string,
      galleryUniqueName: string,
      options?: SharedGalleryImagesListOptionalParams,
    ) => list(context, location, galleryUniqueName, options),
    get: (
      location: string,
      galleryUniqueName: string,
      galleryImageName: string,
      options?: SharedGalleryImagesGetOptionalParams,
    ) => get(context, location, galleryUniqueName, galleryImageName, options),
  };
}

export function _getSharedGalleryImagesOperations(
  context: ComputeContext,
): SharedGalleryImagesOperations {
  return {
    ..._getSharedGalleryImages(context),
  };
}
