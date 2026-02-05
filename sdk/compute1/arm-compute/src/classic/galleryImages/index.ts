// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import {
  listByGallery,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/galleryImages/operations.js";
import {
  GalleryImagesListByGalleryOptionalParams,
  GalleryImagesDeleteOptionalParams,
  GalleryImagesUpdateOptionalParams,
  GalleryImagesCreateOrUpdateOptionalParams,
  GalleryImagesGetOptionalParams,
} from "../../api/galleryImages/options.js";
import {
  ComputeGalleryGalleryImage,
  ComputeGalleryGalleryImageUpdate,
} from "../../models/computeGallery/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a GalleryImages operations. */
export interface GalleryImagesOperations {
  /** List gallery image definitions in a gallery. */
  listByGallery: (
    resourceGroupName: string,
    galleryName: string,
    options?: GalleryImagesListByGalleryOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeGalleryGalleryImage>;
  /** Delete a gallery image. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    options?: GalleryImagesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a gallery image definition. */
  update: (
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImage: ComputeGalleryGalleryImageUpdate,
    options?: GalleryImagesUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeGalleryGalleryImage>, ComputeGalleryGalleryImage>;
  /** Create or update a gallery image definition. */
  createOrUpdate: (
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImage: ComputeGalleryGalleryImage,
    options?: GalleryImagesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeGalleryGalleryImage>, ComputeGalleryGalleryImage>;
  /** Retrieves information about a gallery image definition. */
  get: (
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    options?: GalleryImagesGetOptionalParams,
  ) => Promise<ComputeGalleryGalleryImage>;
}

function _getGalleryImages(context: ComputeContext) {
  return {
    listByGallery: (
      resourceGroupName: string,
      galleryName: string,
      options?: GalleryImagesListByGalleryOptionalParams,
    ) => listByGallery(context, resourceGroupName, galleryName, options),
    delete: (
      resourceGroupName: string,
      galleryName: string,
      galleryImageName: string,
      options?: GalleryImagesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, galleryName, galleryImageName, options),
    update: (
      resourceGroupName: string,
      galleryName: string,
      galleryImageName: string,
      galleryImage: ComputeGalleryGalleryImageUpdate,
      options?: GalleryImagesUpdateOptionalParams,
    ) => update(context, resourceGroupName, galleryName, galleryImageName, galleryImage, options),
    createOrUpdate: (
      resourceGroupName: string,
      galleryName: string,
      galleryImageName: string,
      galleryImage: ComputeGalleryGalleryImage,
      options?: GalleryImagesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        galleryName,
        galleryImageName,
        galleryImage,
        options,
      ),
    get: (
      resourceGroupName: string,
      galleryName: string,
      galleryImageName: string,
      options?: GalleryImagesGetOptionalParams,
    ) => get(context, resourceGroupName, galleryName, galleryImageName, options),
  };
}

export function _getGalleryImagesOperations(context: ComputeContext): GalleryImagesOperations {
  return {
    ..._getGalleryImages(context),
  };
}
