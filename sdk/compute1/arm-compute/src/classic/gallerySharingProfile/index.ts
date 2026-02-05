// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import { update } from "../../api/gallerySharingProfile/operations.js";
import { GallerySharingProfileUpdateOptionalParams } from "../../api/gallerySharingProfile/options.js";
import { ComputeGallerySharingUpdate } from "../../models/computeGallery/models.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a GallerySharingProfile operations. */
export interface GallerySharingProfileOperations {
  /** Update sharing profile of a gallery. */
  update: (
    resourceGroupName: string,
    galleryName: string,
    sharingUpdate: ComputeGallerySharingUpdate,
    options?: GallerySharingProfileUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeGallerySharingUpdate>, ComputeGallerySharingUpdate>;
}

function _getGallerySharingProfile(context: ComputeContext) {
  return {
    update: (
      resourceGroupName: string,
      galleryName: string,
      sharingUpdate: ComputeGallerySharingUpdate,
      options?: GallerySharingProfileUpdateOptionalParams,
    ) => update(context, resourceGroupName, galleryName, sharingUpdate, options),
  };
}

export function _getGallerySharingProfileOperations(
  context: ComputeContext,
): GallerySharingProfileOperations {
  return {
    ..._getGallerySharingProfile(context),
  };
}
