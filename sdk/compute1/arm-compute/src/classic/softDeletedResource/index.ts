// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import { listByArtifactName } from "../../api/softDeletedResource/operations.js";
import { SoftDeletedResourceListByArtifactNameOptionalParams } from "../../api/softDeletedResource/options.js";
import { ComputeGalleryGallerySoftDeletedResource } from "../../models/computeGallery/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a SoftDeletedResource operations. */
export interface SoftDeletedResourceOperations {
  /** List soft-deleted resources of an artifact in the gallery, such as soft-deleted gallery image version of an image. */
  listByArtifactName: (
    resourceGroupName: string,
    galleryName: string,
    artifactType: string,
    artifactName: string,
    options?: SoftDeletedResourceListByArtifactNameOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeGalleryGallerySoftDeletedResource>;
}

function _getSoftDeletedResource(context: ComputeContext) {
  return {
    listByArtifactName: (
      resourceGroupName: string,
      galleryName: string,
      artifactType: string,
      artifactName: string,
      options?: SoftDeletedResourceListByArtifactNameOptionalParams,
    ) =>
      listByArtifactName(
        context,
        resourceGroupName,
        galleryName,
        artifactType,
        artifactName,
        options,
      ),
  };
}

export function _getSoftDeletedResourceOperations(
  context: ComputeContext,
): SoftDeletedResourceOperations {
  return {
    ..._getSoftDeletedResource(context),
  };
}
