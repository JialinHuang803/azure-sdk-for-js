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
} from "../../api/images/operations.js";
import {
  ImagesListOptionalParams,
  ImagesListByResourceGroupOptionalParams,
  ImagesDeleteOptionalParams,
  ImagesUpdateOptionalParams,
  ImagesCreateOrUpdateOptionalParams,
  ImagesGetOptionalParams,
} from "../../api/images/options.js";
import { ComputeImage, ComputeImageUpdate } from "../../models/compute/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Images operations. */
export interface ImagesOperations {
  /** Gets the list of Images in the subscription. Use nextLink property in the response to get the next page of Images. Do this till nextLink is null to fetch all the Images. */
  list: (options?: ImagesListOptionalParams) => PagedAsyncIterableIterator<ComputeImage>;
  /** Gets the list of images under a resource group. Use nextLink property in the response to get the next page of Images. Do this till nextLink is null to fetch all the Images. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: ImagesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeImage>;
  /** Deletes an Image. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    imageName: string,
    options?: ImagesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update an image. */
  update: (
    resourceGroupName: string,
    imageName: string,
    parameters: ComputeImageUpdate,
    options?: ImagesUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeImage>, ComputeImage>;
  /** Create or update an image. */
  createOrUpdate: (
    resourceGroupName: string,
    imageName: string,
    parameters: ComputeImage,
    options?: ImagesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeImage>, ComputeImage>;
  /** Gets an image. */
  get: (
    resourceGroupName: string,
    imageName: string,
    options?: ImagesGetOptionalParams,
  ) => Promise<ComputeImage>;
}

function _getImages(context: ComputeContext) {
  return {
    list: (options?: ImagesListOptionalParams) => list(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: ImagesListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (resourceGroupName: string, imageName: string, options?: ImagesDeleteOptionalParams) =>
      $delete(context, resourceGroupName, imageName, options),
    update: (
      resourceGroupName: string,
      imageName: string,
      parameters: ComputeImageUpdate,
      options?: ImagesUpdateOptionalParams,
    ) => update(context, resourceGroupName, imageName, parameters, options),
    createOrUpdate: (
      resourceGroupName: string,
      imageName: string,
      parameters: ComputeImage,
      options?: ImagesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, imageName, parameters, options),
    get: (resourceGroupName: string, imageName: string, options?: ImagesGetOptionalParams) =>
      get(context, resourceGroupName, imageName, options),
  };
}

export function _getImagesOperations(context: ComputeContext): ImagesOperations {
  return {
    ..._getImages(context),
  };
}
