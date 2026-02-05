// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import {
  listByGalleryInVMAccessControlProfile,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/galleryInVMAccessControlProfileVersions/operations.js";
import {
  GalleryInVMAccessControlProfileVersionsListByGalleryInVMAccessControlProfileOptionalParams,
  GalleryInVMAccessControlProfileVersionsDeleteOptionalParams,
  GalleryInVMAccessControlProfileVersionsUpdateOptionalParams,
  GalleryInVMAccessControlProfileVersionsCreateOrUpdateOptionalParams,
  GalleryInVMAccessControlProfileVersionsGetOptionalParams,
} from "../../api/galleryInVMAccessControlProfileVersions/options.js";
import {
  ComputeGalleryGalleryInVMAccessControlProfileVersion,
  ComputeGalleryGalleryInVMAccessControlProfileVersionUpdate,
} from "../../models/computeGallery/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a GalleryInVMAccessControlProfileVersions operations. */
export interface GalleryInVMAccessControlProfileVersionsOperations {
  /** List gallery inVMAccessControlProfile versions in a gallery inVMAccessControlProfile */
  listByGalleryInVMAccessControlProfile: (
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    options?: GalleryInVMAccessControlProfileVersionsListByGalleryInVMAccessControlProfileOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeGalleryGalleryInVMAccessControlProfileVersion>;
  /** Delete a gallery inVMAccessControlProfile version. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    inVMAccessControlProfileVersionName: string,
    options?: GalleryInVMAccessControlProfileVersionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a gallery inVMAccessControlProfile version. */
  update: (
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    inVMAccessControlProfileVersionName: string,
    galleryInVMAccessControlProfileVersion: ComputeGalleryGalleryInVMAccessControlProfileVersionUpdate,
    options?: GalleryInVMAccessControlProfileVersionsUpdateOptionalParams,
  ) => PollerLike<
    OperationState<ComputeGalleryGalleryInVMAccessControlProfileVersion>,
    ComputeGalleryGalleryInVMAccessControlProfileVersion
  >;
  /** Create or update a gallery inVMAccessControlProfile version. */
  createOrUpdate: (
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    inVMAccessControlProfileVersionName: string,
    galleryInVMAccessControlProfileVersion: ComputeGalleryGalleryInVMAccessControlProfileVersion,
    options?: GalleryInVMAccessControlProfileVersionsCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<ComputeGalleryGalleryInVMAccessControlProfileVersion>,
    ComputeGalleryGalleryInVMAccessControlProfileVersion
  >;
  /** Retrieves information about a gallery inVMAccessControlProfile version. */
  get: (
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    inVMAccessControlProfileVersionName: string,
    options?: GalleryInVMAccessControlProfileVersionsGetOptionalParams,
  ) => Promise<ComputeGalleryGalleryInVMAccessControlProfileVersion>;
}

function _getGalleryInVMAccessControlProfileVersions(context: ComputeContext) {
  return {
    listByGalleryInVMAccessControlProfile: (
      resourceGroupName: string,
      galleryName: string,
      inVMAccessControlProfileName: string,
      options?: GalleryInVMAccessControlProfileVersionsListByGalleryInVMAccessControlProfileOptionalParams,
    ) =>
      listByGalleryInVMAccessControlProfile(
        context,
        resourceGroupName,
        galleryName,
        inVMAccessControlProfileName,
        options,
      ),
    delete: (
      resourceGroupName: string,
      galleryName: string,
      inVMAccessControlProfileName: string,
      inVMAccessControlProfileVersionName: string,
      options?: GalleryInVMAccessControlProfileVersionsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        resourceGroupName,
        galleryName,
        inVMAccessControlProfileName,
        inVMAccessControlProfileVersionName,
        options,
      ),
    update: (
      resourceGroupName: string,
      galleryName: string,
      inVMAccessControlProfileName: string,
      inVMAccessControlProfileVersionName: string,
      galleryInVMAccessControlProfileVersion: ComputeGalleryGalleryInVMAccessControlProfileVersionUpdate,
      options?: GalleryInVMAccessControlProfileVersionsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        galleryName,
        inVMAccessControlProfileName,
        inVMAccessControlProfileVersionName,
        galleryInVMAccessControlProfileVersion,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      galleryName: string,
      inVMAccessControlProfileName: string,
      inVMAccessControlProfileVersionName: string,
      galleryInVMAccessControlProfileVersion: ComputeGalleryGalleryInVMAccessControlProfileVersion,
      options?: GalleryInVMAccessControlProfileVersionsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        galleryName,
        inVMAccessControlProfileName,
        inVMAccessControlProfileVersionName,
        galleryInVMAccessControlProfileVersion,
        options,
      ),
    get: (
      resourceGroupName: string,
      galleryName: string,
      inVMAccessControlProfileName: string,
      inVMAccessControlProfileVersionName: string,
      options?: GalleryInVMAccessControlProfileVersionsGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        galleryName,
        inVMAccessControlProfileName,
        inVMAccessControlProfileVersionName,
        options,
      ),
  };
}

export function _getGalleryInVMAccessControlProfileVersionsOperations(
  context: ComputeContext,
): GalleryInVMAccessControlProfileVersionsOperations {
  return {
    ..._getGalleryInVMAccessControlProfileVersions(context),
  };
}
