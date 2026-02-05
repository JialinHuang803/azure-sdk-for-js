// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import { list, get } from "../../api/sharedGalleries/operations.js";
import {
  SharedGalleriesListOptionalParams,
  SharedGalleriesGetOptionalParams,
} from "../../api/sharedGalleries/options.js";
import { ComputeGallerySharedGallery } from "../../models/computeGallery/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a SharedGalleries operations. */
export interface SharedGalleriesOperations {
  /** List shared galleries by subscription id or tenant id. */
  list: (
    location: string,
    options?: SharedGalleriesListOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeGallerySharedGallery>;
  /** Get a shared gallery by subscription id or tenant id. */
  get: (
    location: string,
    galleryUniqueName: string,
    options?: SharedGalleriesGetOptionalParams,
  ) => Promise<ComputeGallerySharedGallery>;
}

function _getSharedGalleries(context: ComputeContext) {
  return {
    list: (location: string, options?: SharedGalleriesListOptionalParams) =>
      list(context, location, options),
    get: (
      location: string,
      galleryUniqueName: string,
      options?: SharedGalleriesGetOptionalParams,
    ) => get(context, location, galleryUniqueName, options),
  };
}

export function _getSharedGalleriesOperations(context: ComputeContext): SharedGalleriesOperations {
  return {
    ..._getSharedGalleries(context),
  };
}
