// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import {
  listPrivateEndpointConnections,
  deleteAPrivateEndpointConnection,
  updateAPrivateEndpointConnection,
  getAPrivateEndpointConnection,
  getPrivateLinkResources,
  list,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/diskAccesses/operations.js";
import {
  DiskAccessesListPrivateEndpointConnectionsOptionalParams,
  DiskAccessesDeleteAPrivateEndpointConnectionOptionalParams,
  DiskAccessesUpdateAPrivateEndpointConnectionOptionalParams,
  DiskAccessesGetAPrivateEndpointConnectionOptionalParams,
  DiskAccessesGetPrivateLinkResourcesOptionalParams,
  DiskAccessesListOptionalParams,
  DiskAccessesListByResourceGroupOptionalParams,
  DiskAccessesDeleteOptionalParams,
  DiskAccessesUpdateOptionalParams,
  DiskAccessesCreateOrUpdateOptionalParams,
  DiskAccessesGetOptionalParams,
} from "../../api/diskAccesses/options.js";
import {
  ComputeDiskDiskAccess,
  ComputeDiskPrivateEndpointConnection,
  ComputeDiskDiskAccessUpdate,
  ComputeDiskPrivateLinkResourceListResult,
} from "../../models/computeDisk/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a DiskAccesses operations. */
export interface DiskAccessesOperations {
  /** List information about private endpoint connections under a disk access resource */
  listPrivateEndpointConnections: (
    resourceGroupName: string,
    diskAccessName: string,
    options?: DiskAccessesListPrivateEndpointConnectionsOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeDiskPrivateEndpointConnection>;
  /** Deletes a private endpoint connection under a disk access resource. */
  deleteAPrivateEndpointConnection: (
    resourceGroupName: string,
    diskAccessName: string,
    privateEndpointConnectionName: string,
    options?: DiskAccessesDeleteAPrivateEndpointConnectionOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Approve or reject a private endpoint connection under disk access resource, this can't be used to create a new private endpoint connection. */
  updateAPrivateEndpointConnection: (
    resourceGroupName: string,
    diskAccessName: string,
    privateEndpointConnectionName: string,
    privateEndpointConnection: ComputeDiskPrivateEndpointConnection,
    options?: DiskAccessesUpdateAPrivateEndpointConnectionOptionalParams,
  ) => PollerLike<
    OperationState<ComputeDiskPrivateEndpointConnection>,
    ComputeDiskPrivateEndpointConnection
  >;
  /** Gets information about a private endpoint connection under a disk access resource. */
  getAPrivateEndpointConnection: (
    resourceGroupName: string,
    diskAccessName: string,
    privateEndpointConnectionName: string,
    options?: DiskAccessesGetAPrivateEndpointConnectionOptionalParams,
  ) => Promise<ComputeDiskPrivateEndpointConnection>;
  /** Gets the private link resources possible under disk access resource */
  getPrivateLinkResources: (
    resourceGroupName: string,
    diskAccessName: string,
    options?: DiskAccessesGetPrivateLinkResourcesOptionalParams,
  ) => Promise<ComputeDiskPrivateLinkResourceListResult>;
  /** Lists all the disk access resources under a subscription. */
  list: (
    options?: DiskAccessesListOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeDiskDiskAccess>;
  /** Lists all the disk access resources under a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: DiskAccessesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeDiskDiskAccess>;
  /** Deletes a disk access resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    diskAccessName: string,
    options?: DiskAccessesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates (patches) a disk access resource. */
  update: (
    resourceGroupName: string,
    diskAccessName: string,
    diskAccess: ComputeDiskDiskAccessUpdate,
    options?: DiskAccessesUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeDiskDiskAccess>, ComputeDiskDiskAccess>;
  /** Creates or updates a disk access resource */
  createOrUpdate: (
    resourceGroupName: string,
    diskAccessName: string,
    diskAccess: ComputeDiskDiskAccess,
    options?: DiskAccessesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeDiskDiskAccess>, ComputeDiskDiskAccess>;
  /** Gets information about a disk access resource. */
  get: (
    resourceGroupName: string,
    diskAccessName: string,
    options?: DiskAccessesGetOptionalParams,
  ) => Promise<ComputeDiskDiskAccess>;
}

function _getDiskAccesses(context: ComputeContext) {
  return {
    listPrivateEndpointConnections: (
      resourceGroupName: string,
      diskAccessName: string,
      options?: DiskAccessesListPrivateEndpointConnectionsOptionalParams,
    ) => listPrivateEndpointConnections(context, resourceGroupName, diskAccessName, options),
    deleteAPrivateEndpointConnection: (
      resourceGroupName: string,
      diskAccessName: string,
      privateEndpointConnectionName: string,
      options?: DiskAccessesDeleteAPrivateEndpointConnectionOptionalParams,
    ) =>
      deleteAPrivateEndpointConnection(
        context,
        resourceGroupName,
        diskAccessName,
        privateEndpointConnectionName,
        options,
      ),
    updateAPrivateEndpointConnection: (
      resourceGroupName: string,
      diskAccessName: string,
      privateEndpointConnectionName: string,
      privateEndpointConnection: ComputeDiskPrivateEndpointConnection,
      options?: DiskAccessesUpdateAPrivateEndpointConnectionOptionalParams,
    ) =>
      updateAPrivateEndpointConnection(
        context,
        resourceGroupName,
        diskAccessName,
        privateEndpointConnectionName,
        privateEndpointConnection,
        options,
      ),
    getAPrivateEndpointConnection: (
      resourceGroupName: string,
      diskAccessName: string,
      privateEndpointConnectionName: string,
      options?: DiskAccessesGetAPrivateEndpointConnectionOptionalParams,
    ) =>
      getAPrivateEndpointConnection(
        context,
        resourceGroupName,
        diskAccessName,
        privateEndpointConnectionName,
        options,
      ),
    getPrivateLinkResources: (
      resourceGroupName: string,
      diskAccessName: string,
      options?: DiskAccessesGetPrivateLinkResourcesOptionalParams,
    ) => getPrivateLinkResources(context, resourceGroupName, diskAccessName, options),
    list: (options?: DiskAccessesListOptionalParams) => list(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: DiskAccessesListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      diskAccessName: string,
      options?: DiskAccessesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, diskAccessName, options),
    update: (
      resourceGroupName: string,
      diskAccessName: string,
      diskAccess: ComputeDiskDiskAccessUpdate,
      options?: DiskAccessesUpdateOptionalParams,
    ) => update(context, resourceGroupName, diskAccessName, diskAccess, options),
    createOrUpdate: (
      resourceGroupName: string,
      diskAccessName: string,
      diskAccess: ComputeDiskDiskAccess,
      options?: DiskAccessesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, diskAccessName, diskAccess, options),
    get: (
      resourceGroupName: string,
      diskAccessName: string,
      options?: DiskAccessesGetOptionalParams,
    ) => get(context, resourceGroupName, diskAccessName, options),
  };
}

export function _getDiskAccessesOperations(context: ComputeContext): DiskAccessesOperations {
  return {
    ..._getDiskAccesses(context),
  };
}
