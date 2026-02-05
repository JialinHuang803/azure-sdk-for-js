// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import {
  listByGallery,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/galleryInVMAccessControlProfiles/operations.js";
import {
  GalleryInVMAccessControlProfilesListByGalleryOptionalParams,
  GalleryInVMAccessControlProfilesDeleteOptionalParams,
  GalleryInVMAccessControlProfilesUpdateOptionalParams,
  GalleryInVMAccessControlProfilesCreateOrUpdateOptionalParams,
  GalleryInVMAccessControlProfilesGetOptionalParams,
} from "../../api/galleryInVMAccessControlProfiles/options.js";
import {
  ComputeGalleryGalleryInVMAccessControlProfile,
  ComputeGalleryGalleryInVMAccessControlProfileUpdate,
} from "../../models/computeGallery/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a GalleryInVMAccessControlProfiles operations. */
export interface GalleryInVMAccessControlProfilesOperations {
  /** List gallery inVMAccessControlProfiles in a gallery. */
  listByGallery: (
    resourceGroupName: string,
    galleryName: string,
    options?: GalleryInVMAccessControlProfilesListByGalleryOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeGalleryGalleryInVMAccessControlProfile>;
  /** Delete a gallery inVMAccessControlProfile. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    options?: GalleryInVMAccessControlProfilesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a gallery inVMAccessControlProfile. */
  update: (
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    galleryInVMAccessControlProfile: ComputeGalleryGalleryInVMAccessControlProfileUpdate,
    options?: GalleryInVMAccessControlProfilesUpdateOptionalParams,
  ) => PollerLike<
    OperationState<ComputeGalleryGalleryInVMAccessControlProfile>,
    ComputeGalleryGalleryInVMAccessControlProfile
  >;
  /** Create or update a gallery inVMAccessControlProfile. */
  createOrUpdate: (
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    galleryInVMAccessControlProfile: ComputeGalleryGalleryInVMAccessControlProfile,
    options?: GalleryInVMAccessControlProfilesCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<ComputeGalleryGalleryInVMAccessControlProfile>,
    ComputeGalleryGalleryInVMAccessControlProfile
  >;
  /** Retrieves information about a gallery inVMAccessControlProfile. */
  get: (
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    options?: GalleryInVMAccessControlProfilesGetOptionalParams,
  ) => Promise<ComputeGalleryGalleryInVMAccessControlProfile>;
}

function _getGalleryInVMAccessControlProfiles(context: ComputeContext) {
  return {
    listByGallery: (
      resourceGroupName: string,
      galleryName: string,
      options?: GalleryInVMAccessControlProfilesListByGalleryOptionalParams,
    ) => listByGallery(context, resourceGroupName, galleryName, options),
    delete: (
      resourceGroupName: string,
      galleryName: string,
      inVMAccessControlProfileName: string,
      options?: GalleryInVMAccessControlProfilesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, galleryName, inVMAccessControlProfileName, options),
    update: (
      resourceGroupName: string,
      galleryName: string,
      inVMAccessControlProfileName: string,
      galleryInVMAccessControlProfile: ComputeGalleryGalleryInVMAccessControlProfileUpdate,
      options?: GalleryInVMAccessControlProfilesUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        galleryName,
        inVMAccessControlProfileName,
        galleryInVMAccessControlProfile,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      galleryName: string,
      inVMAccessControlProfileName: string,
      galleryInVMAccessControlProfile: ComputeGalleryGalleryInVMAccessControlProfile,
      options?: GalleryInVMAccessControlProfilesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        galleryName,
        inVMAccessControlProfileName,
        galleryInVMAccessControlProfile,
        options,
      ),
    get: (
      resourceGroupName: string,
      galleryName: string,
      inVMAccessControlProfileName: string,
      options?: GalleryInVMAccessControlProfilesGetOptionalParams,
    ) => get(context, resourceGroupName, galleryName, inVMAccessControlProfileName, options),
  };
}

export function _getGalleryInVMAccessControlProfilesOperations(
  context: ComputeContext,
): GalleryInVMAccessControlProfilesOperations {
  return {
    ..._getGalleryInVMAccessControlProfiles(context),
  };
}
