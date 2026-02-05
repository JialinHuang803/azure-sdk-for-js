// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import {
  listByGalleryApplication,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/galleryApplicationVersions/operations.js";
import {
  GalleryApplicationVersionsListByGalleryApplicationOptionalParams,
  GalleryApplicationVersionsDeleteOptionalParams,
  GalleryApplicationVersionsUpdateOptionalParams,
  GalleryApplicationVersionsCreateOrUpdateOptionalParams,
  GalleryApplicationVersionsGetOptionalParams,
} from "../../api/galleryApplicationVersions/options.js";
import {
  ComputeGalleryGalleryApplicationVersion,
  ComputeGalleryGalleryApplicationVersionUpdate,
} from "../../models/computeGallery/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a GalleryApplicationVersions operations. */
export interface GalleryApplicationVersionsOperations {
  /** List gallery Application Versions in a gallery Application Definition. */
  listByGalleryApplication: (
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    options?: GalleryApplicationVersionsListByGalleryApplicationOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeGalleryGalleryApplicationVersion>;
  /** Delete a gallery Application Version. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    options?: GalleryApplicationVersionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a gallery Application Version. */
  update: (
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    galleryApplicationVersion: ComputeGalleryGalleryApplicationVersionUpdate,
    options?: GalleryApplicationVersionsUpdateOptionalParams,
  ) => PollerLike<
    OperationState<ComputeGalleryGalleryApplicationVersion>,
    ComputeGalleryGalleryApplicationVersion
  >;
  /** Create or update a gallery Application Version. */
  createOrUpdate: (
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    galleryApplicationVersion: ComputeGalleryGalleryApplicationVersion,
    options?: GalleryApplicationVersionsCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<ComputeGalleryGalleryApplicationVersion>,
    ComputeGalleryGalleryApplicationVersion
  >;
  /** Retrieves information about a gallery Application Version. */
  get: (
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    options?: GalleryApplicationVersionsGetOptionalParams,
  ) => Promise<ComputeGalleryGalleryApplicationVersion>;
}

function _getGalleryApplicationVersions(context: ComputeContext) {
  return {
    listByGalleryApplication: (
      resourceGroupName: string,
      galleryName: string,
      galleryApplicationName: string,
      options?: GalleryApplicationVersionsListByGalleryApplicationOptionalParams,
    ) =>
      listByGalleryApplication(
        context,
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        options,
      ),
    delete: (
      resourceGroupName: string,
      galleryName: string,
      galleryApplicationName: string,
      galleryApplicationVersionName: string,
      options?: GalleryApplicationVersionsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplicationVersionName,
        options,
      ),
    update: (
      resourceGroupName: string,
      galleryName: string,
      galleryApplicationName: string,
      galleryApplicationVersionName: string,
      galleryApplicationVersion: ComputeGalleryGalleryApplicationVersionUpdate,
      options?: GalleryApplicationVersionsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplicationVersionName,
        galleryApplicationVersion,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      galleryName: string,
      galleryApplicationName: string,
      galleryApplicationVersionName: string,
      galleryApplicationVersion: ComputeGalleryGalleryApplicationVersion,
      options?: GalleryApplicationVersionsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplicationVersionName,
        galleryApplicationVersion,
        options,
      ),
    get: (
      resourceGroupName: string,
      galleryName: string,
      galleryApplicationName: string,
      galleryApplicationVersionName: string,
      options?: GalleryApplicationVersionsGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplicationVersionName,
        options,
      ),
  };
}

export function _getGalleryApplicationVersionsOperations(
  context: ComputeContext,
): GalleryApplicationVersionsOperations {
  return {
    ..._getGalleryApplicationVersions(context),
  };
}
