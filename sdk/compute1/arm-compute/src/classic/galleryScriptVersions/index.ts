// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import {
  listByGalleryScript,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/galleryScriptVersions/operations.js";
import {
  GalleryScriptVersionsListByGalleryScriptOptionalParams,
  GalleryScriptVersionsDeleteOptionalParams,
  GalleryScriptVersionsUpdateOptionalParams,
  GalleryScriptVersionsCreateOrUpdateOptionalParams,
  GalleryScriptVersionsGetOptionalParams,
} from "../../api/galleryScriptVersions/options.js";
import {
  ComputeGalleryGalleryScriptVersion,
  ComputeGalleryGalleryScriptVersionUpdate,
} from "../../models/computeGallery/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a GalleryScriptVersions operations. */
export interface GalleryScriptVersionsOperations {
  /** List gallery Script Versions in a gallery Script Definition. */
  listByGalleryScript: (
    resourceGroupName: string,
    galleryName: string,
    galleryScriptName: string,
    options?: GalleryScriptVersionsListByGalleryScriptOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeGalleryGalleryScriptVersion>;
  /** Delete a gallery Script Version. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    galleryName: string,
    galleryScriptName: string,
    galleryScriptVersionName: string,
    options?: GalleryScriptVersionsDeleteOptionalParams,
  ) => PollerLike<
    OperationState<ComputeGalleryGalleryScriptVersion>,
    ComputeGalleryGalleryScriptVersion
  >;
  /** Update a gallery Script Version. */
  update: (
    resourceGroupName: string,
    galleryName: string,
    galleryScriptName: string,
    galleryScriptVersionName: string,
    galleryScriptVersion: ComputeGalleryGalleryScriptVersionUpdate,
    options?: GalleryScriptVersionsUpdateOptionalParams,
  ) => PollerLike<
    OperationState<ComputeGalleryGalleryScriptVersion>,
    ComputeGalleryGalleryScriptVersion
  >;
  /** Create or update a gallery Script Version. */
  createOrUpdate: (
    resourceGroupName: string,
    galleryName: string,
    galleryScriptName: string,
    galleryScriptVersionName: string,
    galleryScriptVersion: ComputeGalleryGalleryScriptVersion,
    options?: GalleryScriptVersionsCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<ComputeGalleryGalleryScriptVersion>,
    ComputeGalleryGalleryScriptVersion
  >;
  /** Custom ArmResourceRead operation template with CloudError as Error */
  get: (
    resourceGroupName: string,
    galleryName: string,
    galleryScriptName: string,
    galleryScriptVersionName: string,
    options?: GalleryScriptVersionsGetOptionalParams,
  ) => Promise<ComputeGalleryGalleryScriptVersion>;
}

function _getGalleryScriptVersions(context: ComputeContext) {
  return {
    listByGalleryScript: (
      resourceGroupName: string,
      galleryName: string,
      galleryScriptName: string,
      options?: GalleryScriptVersionsListByGalleryScriptOptionalParams,
    ) => listByGalleryScript(context, resourceGroupName, galleryName, galleryScriptName, options),
    delete: (
      resourceGroupName: string,
      galleryName: string,
      galleryScriptName: string,
      galleryScriptVersionName: string,
      options?: GalleryScriptVersionsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        resourceGroupName,
        galleryName,
        galleryScriptName,
        galleryScriptVersionName,
        options,
      ),
    update: (
      resourceGroupName: string,
      galleryName: string,
      galleryScriptName: string,
      galleryScriptVersionName: string,
      galleryScriptVersion: ComputeGalleryGalleryScriptVersionUpdate,
      options?: GalleryScriptVersionsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        galleryName,
        galleryScriptName,
        galleryScriptVersionName,
        galleryScriptVersion,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      galleryName: string,
      galleryScriptName: string,
      galleryScriptVersionName: string,
      galleryScriptVersion: ComputeGalleryGalleryScriptVersion,
      options?: GalleryScriptVersionsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        galleryName,
        galleryScriptName,
        galleryScriptVersionName,
        galleryScriptVersion,
        options,
      ),
    get: (
      resourceGroupName: string,
      galleryName: string,
      galleryScriptName: string,
      galleryScriptVersionName: string,
      options?: GalleryScriptVersionsGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        galleryName,
        galleryScriptName,
        galleryScriptVersionName,
        options,
      ),
  };
}

export function _getGalleryScriptVersionsOperations(
  context: ComputeContext,
): GalleryScriptVersionsOperations {
  return {
    ..._getGalleryScriptVersions(context),
  };
}
