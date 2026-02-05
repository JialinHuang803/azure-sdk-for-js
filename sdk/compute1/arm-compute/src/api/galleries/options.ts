// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ComputeGallerySelectPermissions,
  ComputeGalleryGalleryExpandParams,
} from "../../models/computeGallery/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface GalleriesListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GalleriesListByResourceGroupOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GalleriesDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface GalleriesUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface GalleriesCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface GalleriesGetOptionalParams extends OperationOptions {
  /** The select expression to apply on the operation. */
  select?: ComputeGallerySelectPermissions;
  /** The expand query option to apply on the operation. */
  expand?: ComputeGalleryGalleryExpandParams;
}
