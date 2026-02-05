// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import {
  list,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/galleries/operations.js";
import {
  GalleriesListOptionalParams,
  GalleriesListByResourceGroupOptionalParams,
  GalleriesDeleteOptionalParams,
  GalleriesUpdateOptionalParams,
  GalleriesCreateOrUpdateOptionalParams,
  GalleriesGetOptionalParams,
} from "../../api/galleries/options.js";
import {
  ComputeGalleryGallery,
  ComputeGalleryGalleryUpdate,
} from "../../models/computeGallery/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Galleries operations. */
export interface GalleriesOperations {
  /** List galleries under a subscription. */
  list: (
    options?: GalleriesListOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeGalleryGallery>;
  /** List galleries under a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: GalleriesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeGalleryGallery>;
  /** Delete a Shared Image Gallery. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    galleryName: string,
    options?: GalleriesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a Shared Image Gallery. */
  update: (
    resourceGroupName: string,
    galleryName: string,
    gallery: ComputeGalleryGalleryUpdate,
    options?: GalleriesUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeGalleryGallery>, ComputeGalleryGallery>;
  /** Create or update a Shared Image Gallery. */
  createOrUpdate: (
    resourceGroupName: string,
    galleryName: string,
    gallery: ComputeGalleryGallery,
    options?: GalleriesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeGalleryGallery>, ComputeGalleryGallery>;
  /** Retrieves information about a Shared Image Gallery. */
  get: (
    resourceGroupName: string,
    galleryName: string,
    options?: GalleriesGetOptionalParams,
  ) => Promise<ComputeGalleryGallery>;
}

function _getGalleries(context: ComputeContext) {
  return {
    list: (options?: GalleriesListOptionalParams) => list(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: GalleriesListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      galleryName: string,
      options?: GalleriesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, galleryName, options),
    update: (
      resourceGroupName: string,
      galleryName: string,
      gallery: ComputeGalleryGalleryUpdate,
      options?: GalleriesUpdateOptionalParams,
    ) => update(context, resourceGroupName, galleryName, gallery, options),
    createOrUpdate: (
      resourceGroupName: string,
      galleryName: string,
      gallery: ComputeGalleryGallery,
      options?: GalleriesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, galleryName, gallery, options),
    get: (resourceGroupName: string, galleryName: string, options?: GalleriesGetOptionalParams) =>
      get(context, resourceGroupName, galleryName, options),
  };
}

export function _getGalleriesOperations(context: ComputeContext): GalleriesOperations {
  return {
    ..._getGalleries(context),
  };
}
