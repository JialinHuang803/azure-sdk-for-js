// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import {
  listByGallery,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/galleryScripts/operations.js";
import {
  GalleryScriptsListByGalleryOptionalParams,
  GalleryScriptsDeleteOptionalParams,
  GalleryScriptsUpdateOptionalParams,
  GalleryScriptsCreateOrUpdateOptionalParams,
  GalleryScriptsGetOptionalParams,
} from "../../api/galleryScripts/options.js";
import {
  ComputeGalleryGalleryScript,
  ComputeGalleryGalleryScriptUpdate,
} from "../../models/computeGallery/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a GalleryScripts operations. */
export interface GalleryScriptsOperations {
  /** List gallery Script Definitions in a gallery. */
  listByGallery: (
    resourceGroupName: string,
    galleryName: string,
    options?: GalleryScriptsListByGalleryOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeGalleryGalleryScript>;
  /** Delete a gallery Script Definition. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    galleryName: string,
    galleryScriptName: string,
    options?: GalleryScriptsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a gallery Script Definition. */
  update: (
    resourceGroupName: string,
    galleryName: string,
    galleryScriptName: string,
    galleryScript: ComputeGalleryGalleryScriptUpdate,
    options?: GalleryScriptsUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create or update a Gallery Script Definition. Gallery scripts allow the storage, sharing and reuse of common scripts */
  createOrUpdate: (
    resourceGroupName: string,
    galleryName: string,
    galleryScriptName: string,
    galleryScript: ComputeGalleryGalleryScript,
    options?: GalleryScriptsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Retrieves information about a gallery script definition. */
  get: (
    resourceGroupName: string,
    galleryName: string,
    galleryScriptName: string,
    options?: GalleryScriptsGetOptionalParams,
  ) => Promise<ComputeGalleryGalleryScript>;
}

function _getGalleryScripts(context: ComputeContext) {
  return {
    listByGallery: (
      resourceGroupName: string,
      galleryName: string,
      options?: GalleryScriptsListByGalleryOptionalParams,
    ) => listByGallery(context, resourceGroupName, galleryName, options),
    delete: (
      resourceGroupName: string,
      galleryName: string,
      galleryScriptName: string,
      options?: GalleryScriptsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, galleryName, galleryScriptName, options),
    update: (
      resourceGroupName: string,
      galleryName: string,
      galleryScriptName: string,
      galleryScript: ComputeGalleryGalleryScriptUpdate,
      options?: GalleryScriptsUpdateOptionalParams,
    ) => update(context, resourceGroupName, galleryName, galleryScriptName, galleryScript, options),
    createOrUpdate: (
      resourceGroupName: string,
      galleryName: string,
      galleryScriptName: string,
      galleryScript: ComputeGalleryGalleryScript,
      options?: GalleryScriptsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        galleryName,
        galleryScriptName,
        galleryScript,
        options,
      ),
    get: (
      resourceGroupName: string,
      galleryName: string,
      galleryScriptName: string,
      options?: GalleryScriptsGetOptionalParams,
    ) => get(context, resourceGroupName, galleryName, galleryScriptName, options),
  };
}

export function _getGalleryScriptsOperations(context: ComputeContext): GalleryScriptsOperations {
  return {
    ..._getGalleryScripts(context),
  };
}
