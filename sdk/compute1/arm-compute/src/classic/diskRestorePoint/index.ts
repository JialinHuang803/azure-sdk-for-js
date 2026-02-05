// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import {
  revokeAccess,
  grantAccess,
  listByRestorePoint,
  get,
} from "../../api/diskRestorePoint/operations.js";
import {
  DiskRestorePointRevokeAccessOptionalParams,
  DiskRestorePointGrantAccessOptionalParams,
  DiskRestorePointListByRestorePointOptionalParams,
  DiskRestorePointGetOptionalParams,
} from "../../api/diskRestorePoint/options.js";
import {
  ComputeDiskGrantAccessData,
  ComputeDiskAccessUri,
  ComputeDiskDiskRestorePoint,
} from "../../models/computeDisk/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a DiskRestorePoint operations. */
export interface DiskRestorePointOperations {
  /** Revokes access to a diskRestorePoint. */
  revokeAccess: (
    resourceGroupName: string,
    restorePointCollectionName: string,
    vmRestorePointName: string,
    diskRestorePointName: string,
    options?: DiskRestorePointRevokeAccessOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Grants access to a diskRestorePoint. */
  grantAccess: (
    resourceGroupName: string,
    restorePointCollectionName: string,
    vmRestorePointName: string,
    diskRestorePointName: string,
    grantAccessData: ComputeDiskGrantAccessData,
    options?: DiskRestorePointGrantAccessOptionalParams,
  ) => PollerLike<OperationState<ComputeDiskAccessUri>, ComputeDiskAccessUri>;
  /** Lists diskRestorePoints under a vmRestorePoint. */
  listByRestorePoint: (
    resourceGroupName: string,
    restorePointCollectionName: string,
    vmRestorePointName: string,
    options?: DiskRestorePointListByRestorePointOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeDiskDiskRestorePoint>;
  /** Get disk restorePoint resource */
  get: (
    resourceGroupName: string,
    restorePointCollectionName: string,
    vmRestorePointName: string,
    diskRestorePointName: string,
    options?: DiskRestorePointGetOptionalParams,
  ) => Promise<ComputeDiskDiskRestorePoint>;
}

function _getDiskRestorePoint(context: ComputeContext) {
  return {
    revokeAccess: (
      resourceGroupName: string,
      restorePointCollectionName: string,
      vmRestorePointName: string,
      diskRestorePointName: string,
      options?: DiskRestorePointRevokeAccessOptionalParams,
    ) =>
      revokeAccess(
        context,
        resourceGroupName,
        restorePointCollectionName,
        vmRestorePointName,
        diskRestorePointName,
        options,
      ),
    grantAccess: (
      resourceGroupName: string,
      restorePointCollectionName: string,
      vmRestorePointName: string,
      diskRestorePointName: string,
      grantAccessData: ComputeDiskGrantAccessData,
      options?: DiskRestorePointGrantAccessOptionalParams,
    ) =>
      grantAccess(
        context,
        resourceGroupName,
        restorePointCollectionName,
        vmRestorePointName,
        diskRestorePointName,
        grantAccessData,
        options,
      ),
    listByRestorePoint: (
      resourceGroupName: string,
      restorePointCollectionName: string,
      vmRestorePointName: string,
      options?: DiskRestorePointListByRestorePointOptionalParams,
    ) =>
      listByRestorePoint(
        context,
        resourceGroupName,
        restorePointCollectionName,
        vmRestorePointName,
        options,
      ),
    get: (
      resourceGroupName: string,
      restorePointCollectionName: string,
      vmRestorePointName: string,
      diskRestorePointName: string,
      options?: DiskRestorePointGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        restorePointCollectionName,
        vmRestorePointName,
        diskRestorePointName,
        options,
      ),
  };
}

export function _getDiskRestorePointOperations(
  context: ComputeContext,
): DiskRestorePointOperations {
  return {
    ..._getDiskRestorePoint(context),
  };
}
