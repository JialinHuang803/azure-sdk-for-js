// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import {
  listAssociatedResources,
  list,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/diskEncryptionSets/operations.js";
import {
  DiskEncryptionSetsListAssociatedResourcesOptionalParams,
  DiskEncryptionSetsListOptionalParams,
  DiskEncryptionSetsListByResourceGroupOptionalParams,
  DiskEncryptionSetsDeleteOptionalParams,
  DiskEncryptionSetsUpdateOptionalParams,
  DiskEncryptionSetsCreateOrUpdateOptionalParams,
  DiskEncryptionSetsGetOptionalParams,
} from "../../api/diskEncryptionSets/options.js";
import {
  ComputeDiskDiskEncryptionSet,
  ComputeDiskDiskEncryptionSetUpdate,
} from "../../models/computeDisk/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a DiskEncryptionSets operations. */
export interface DiskEncryptionSetsOperations {
  /** Lists all resources that are encrypted with this disk encryption set. */
  listAssociatedResources: (
    resourceGroupName: string,
    diskEncryptionSetName: string,
    options?: DiskEncryptionSetsListAssociatedResourcesOptionalParams,
  ) => PagedAsyncIterableIterator<string>;
  /** Lists all the disk encryption sets under a subscription. */
  list: (
    options?: DiskEncryptionSetsListOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeDiskDiskEncryptionSet>;
  /** Lists all the disk encryption sets under a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: DiskEncryptionSetsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeDiskDiskEncryptionSet>;
  /** Deletes a disk encryption set. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    diskEncryptionSetName: string,
    options?: DiskEncryptionSetsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates (patches) a disk encryption set. */
  update: (
    resourceGroupName: string,
    diskEncryptionSetName: string,
    diskEncryptionSet: ComputeDiskDiskEncryptionSetUpdate,
    options?: DiskEncryptionSetsUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeDiskDiskEncryptionSet>, ComputeDiskDiskEncryptionSet>;
  /** Creates or updates a disk encryption set */
  createOrUpdate: (
    resourceGroupName: string,
    diskEncryptionSetName: string,
    diskEncryptionSet: ComputeDiskDiskEncryptionSet,
    options?: DiskEncryptionSetsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeDiskDiskEncryptionSet>, ComputeDiskDiskEncryptionSet>;
  /** Gets information about a disk encryption set. */
  get: (
    resourceGroupName: string,
    diskEncryptionSetName: string,
    options?: DiskEncryptionSetsGetOptionalParams,
  ) => Promise<ComputeDiskDiskEncryptionSet>;
}

function _getDiskEncryptionSets(context: ComputeContext) {
  return {
    listAssociatedResources: (
      resourceGroupName: string,
      diskEncryptionSetName: string,
      options?: DiskEncryptionSetsListAssociatedResourcesOptionalParams,
    ) => listAssociatedResources(context, resourceGroupName, diskEncryptionSetName, options),
    list: (options?: DiskEncryptionSetsListOptionalParams) => list(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: DiskEncryptionSetsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      diskEncryptionSetName: string,
      options?: DiskEncryptionSetsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, diskEncryptionSetName, options),
    update: (
      resourceGroupName: string,
      diskEncryptionSetName: string,
      diskEncryptionSet: ComputeDiskDiskEncryptionSetUpdate,
      options?: DiskEncryptionSetsUpdateOptionalParams,
    ) => update(context, resourceGroupName, diskEncryptionSetName, diskEncryptionSet, options),
    createOrUpdate: (
      resourceGroupName: string,
      diskEncryptionSetName: string,
      diskEncryptionSet: ComputeDiskDiskEncryptionSet,
      options?: DiskEncryptionSetsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(context, resourceGroupName, diskEncryptionSetName, diskEncryptionSet, options),
    get: (
      resourceGroupName: string,
      diskEncryptionSetName: string,
      options?: DiskEncryptionSetsGetOptionalParams,
    ) => get(context, resourceGroupName, diskEncryptionSetName, options),
  };
}

export function _getDiskEncryptionSetsOperations(
  context: ComputeContext,
): DiskEncryptionSetsOperations {
  return {
    ..._getDiskEncryptionSets(context),
  };
}
