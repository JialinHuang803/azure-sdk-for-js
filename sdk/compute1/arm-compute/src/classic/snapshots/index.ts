// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import {
  revokeAccess,
  grantAccess,
  list,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/snapshots/operations.js";
import {
  SnapshotsRevokeAccessOptionalParams,
  SnapshotsGrantAccessOptionalParams,
  SnapshotsListOptionalParams,
  SnapshotsListByResourceGroupOptionalParams,
  SnapshotsDeleteOptionalParams,
  SnapshotsUpdateOptionalParams,
  SnapshotsCreateOrUpdateOptionalParams,
  SnapshotsGetOptionalParams,
} from "../../api/snapshots/options.js";
import {
  ComputeDiskGrantAccessData,
  ComputeDiskAccessUri,
  ComputeDiskSnapshot,
  ComputeDiskSnapshotUpdate,
} from "../../models/computeDisk/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Snapshots operations. */
export interface SnapshotsOperations {
  /** Revokes access to a snapshot. */
  revokeAccess: (
    resourceGroupName: string,
    snapshotName: string,
    options?: SnapshotsRevokeAccessOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Grants access to a snapshot. */
  grantAccess: (
    resourceGroupName: string,
    snapshotName: string,
    grantAccessData: ComputeDiskGrantAccessData,
    options?: SnapshotsGrantAccessOptionalParams,
  ) => PollerLike<OperationState<ComputeDiskAccessUri>, ComputeDiskAccessUri>;
  /** Lists snapshots under a subscription. */
  list: (options?: SnapshotsListOptionalParams) => PagedAsyncIterableIterator<ComputeDiskSnapshot>;
  /** Lists snapshots under a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: SnapshotsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeDiskSnapshot>;
  /** Deletes a snapshot. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    snapshotName: string,
    options?: SnapshotsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates (patches) a snapshot. */
  update: (
    resourceGroupName: string,
    snapshotName: string,
    snapshot: ComputeDiskSnapshotUpdate,
    options?: SnapshotsUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeDiskSnapshot>, ComputeDiskSnapshot>;
  /** Creates or updates a snapshot. */
  createOrUpdate: (
    resourceGroupName: string,
    snapshotName: string,
    snapshot: ComputeDiskSnapshot,
    options?: SnapshotsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeDiskSnapshot>, ComputeDiskSnapshot>;
  /** Gets information about a snapshot. */
  get: (
    resourceGroupName: string,
    snapshotName: string,
    options?: SnapshotsGetOptionalParams,
  ) => Promise<ComputeDiskSnapshot>;
}

function _getSnapshots(context: ComputeContext) {
  return {
    revokeAccess: (
      resourceGroupName: string,
      snapshotName: string,
      options?: SnapshotsRevokeAccessOptionalParams,
    ) => revokeAccess(context, resourceGroupName, snapshotName, options),
    grantAccess: (
      resourceGroupName: string,
      snapshotName: string,
      grantAccessData: ComputeDiskGrantAccessData,
      options?: SnapshotsGrantAccessOptionalParams,
    ) => grantAccess(context, resourceGroupName, snapshotName, grantAccessData, options),
    list: (options?: SnapshotsListOptionalParams) => list(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: SnapshotsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      snapshotName: string,
      options?: SnapshotsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, snapshotName, options),
    update: (
      resourceGroupName: string,
      snapshotName: string,
      snapshot: ComputeDiskSnapshotUpdate,
      options?: SnapshotsUpdateOptionalParams,
    ) => update(context, resourceGroupName, snapshotName, snapshot, options),
    createOrUpdate: (
      resourceGroupName: string,
      snapshotName: string,
      snapshot: ComputeDiskSnapshot,
      options?: SnapshotsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, snapshotName, snapshot, options),
    get: (resourceGroupName: string, snapshotName: string, options?: SnapshotsGetOptionalParams) =>
      get(context, resourceGroupName, snapshotName, options),
  };
}

export function _getSnapshotsOperations(context: ComputeContext): SnapshotsOperations {
  return {
    ..._getSnapshots(context),
  };
}
