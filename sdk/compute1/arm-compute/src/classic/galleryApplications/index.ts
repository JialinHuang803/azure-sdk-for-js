// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import {
  listByGallery,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/galleryApplications/operations.js";
import {
  GalleryApplicationsListByGalleryOptionalParams,
  GalleryApplicationsDeleteOptionalParams,
  GalleryApplicationsUpdateOptionalParams,
  GalleryApplicationsCreateOrUpdateOptionalParams,
  GalleryApplicationsGetOptionalParams,
} from "../../api/galleryApplications/options.js";
import {
  ComputeGalleryGalleryApplication,
  ComputeGalleryGalleryApplicationUpdate,
} from "../../models/computeGallery/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a GalleryApplications operations. */
export interface GalleryApplicationsOperations {
  /** List gallery Application Definitions in a gallery. */
  listByGallery: (
    resourceGroupName: string,
    galleryName: string,
    options?: GalleryApplicationsListByGalleryOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeGalleryGalleryApplication>;
  /** Delete a gallery Application. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    options?: GalleryApplicationsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a gallery Application Definition. */
  update: (
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplication: ComputeGalleryGalleryApplicationUpdate,
    options?: GalleryApplicationsUpdateOptionalParams,
  ) => PollerLike<
    OperationState<ComputeGalleryGalleryApplication>,
    ComputeGalleryGalleryApplication
  >;
  /** Create or update a gallery Application Definition. */
  createOrUpdate: (
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplication: ComputeGalleryGalleryApplication,
    options?: GalleryApplicationsCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<ComputeGalleryGalleryApplication>,
    ComputeGalleryGalleryApplication
  >;
  /** Retrieves information about a gallery Application Definition. */
  get: (
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    options?: GalleryApplicationsGetOptionalParams,
  ) => Promise<ComputeGalleryGalleryApplication>;
}

function _getGalleryApplications(context: ComputeContext) {
  return {
    listByGallery: (
      resourceGroupName: string,
      galleryName: string,
      options?: GalleryApplicationsListByGalleryOptionalParams,
    ) => listByGallery(context, resourceGroupName, galleryName, options),
    delete: (
      resourceGroupName: string,
      galleryName: string,
      galleryApplicationName: string,
      options?: GalleryApplicationsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, galleryName, galleryApplicationName, options),
    update: (
      resourceGroupName: string,
      galleryName: string,
      galleryApplicationName: string,
      galleryApplication: ComputeGalleryGalleryApplicationUpdate,
      options?: GalleryApplicationsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplication,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      galleryName: string,
      galleryApplicationName: string,
      galleryApplication: ComputeGalleryGalleryApplication,
      options?: GalleryApplicationsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplication,
        options,
      ),
    get: (
      resourceGroupName: string,
      galleryName: string,
      galleryApplicationName: string,
      options?: GalleryApplicationsGetOptionalParams,
    ) => get(context, resourceGroupName, galleryName, galleryApplicationName, options),
  };
}

export function _getGalleryApplicationsOperations(
  context: ComputeContext,
): GalleryApplicationsOperations {
  return {
    ..._getGalleryApplications(context),
  };
}
