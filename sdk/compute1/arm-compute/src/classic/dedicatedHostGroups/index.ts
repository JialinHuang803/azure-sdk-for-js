// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import {
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/dedicatedHostGroups/operations.js";
import {
  DedicatedHostGroupsListBySubscriptionOptionalParams,
  DedicatedHostGroupsListByResourceGroupOptionalParams,
  DedicatedHostGroupsDeleteOptionalParams,
  DedicatedHostGroupsUpdateOptionalParams,
  DedicatedHostGroupsCreateOrUpdateOptionalParams,
  DedicatedHostGroupsGetOptionalParams,
} from "../../api/dedicatedHostGroups/options.js";
import {
  ComputeDedicatedHostGroup,
  ComputeDedicatedHostGroupUpdate,
} from "../../models/compute/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a DedicatedHostGroups operations. */
export interface DedicatedHostGroupsOperations {
  /** Lists all of the dedicated host groups in the subscription. Use the nextLink property in the response to get the next page of dedicated host groups. */
  listBySubscription: (
    options?: DedicatedHostGroupsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeDedicatedHostGroup>;
  /** Lists all of the dedicated host groups in the specified resource group. Use the nextLink property in the response to get the next page of dedicated host groups. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: DedicatedHostGroupsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeDedicatedHostGroup>;
  /** Delete a dedicated host group. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    hostGroupName: string,
    options?: DedicatedHostGroupsDeleteOptionalParams,
  ) => Promise<void>;
  /** Update an dedicated host group. */
  update: (
    resourceGroupName: string,
    hostGroupName: string,
    parameters: ComputeDedicatedHostGroupUpdate,
    options?: DedicatedHostGroupsUpdateOptionalParams,
  ) => Promise<ComputeDedicatedHostGroup>;
  /** Create or update a dedicated host group. For details of Dedicated Host and Dedicated Host Groups please see [Dedicated Host Documentation] (https://go.microsoft.com/fwlink/?linkid=2082596) */
  createOrUpdate: (
    resourceGroupName: string,
    hostGroupName: string,
    parameters: ComputeDedicatedHostGroup,
    options?: DedicatedHostGroupsCreateOrUpdateOptionalParams,
  ) => Promise<ComputeDedicatedHostGroup>;
  /** Retrieves information about a dedicated host group. */
  get: (
    resourceGroupName: string,
    hostGroupName: string,
    options?: DedicatedHostGroupsGetOptionalParams,
  ) => Promise<ComputeDedicatedHostGroup>;
}

function _getDedicatedHostGroups(context: ComputeContext) {
  return {
    listBySubscription: (options?: DedicatedHostGroupsListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: DedicatedHostGroupsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      hostGroupName: string,
      options?: DedicatedHostGroupsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, hostGroupName, options),
    update: (
      resourceGroupName: string,
      hostGroupName: string,
      parameters: ComputeDedicatedHostGroupUpdate,
      options?: DedicatedHostGroupsUpdateOptionalParams,
    ) => update(context, resourceGroupName, hostGroupName, parameters, options),
    createOrUpdate: (
      resourceGroupName: string,
      hostGroupName: string,
      parameters: ComputeDedicatedHostGroup,
      options?: DedicatedHostGroupsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, hostGroupName, parameters, options),
    get: (
      resourceGroupName: string,
      hostGroupName: string,
      options?: DedicatedHostGroupsGetOptionalParams,
    ) => get(context, resourceGroupName, hostGroupName, options),
  };
}

export function _getDedicatedHostGroupsOperations(
  context: ComputeContext,
): DedicatedHostGroupsOperations {
  return {
    ..._getDedicatedHostGroups(context),
  };
}
