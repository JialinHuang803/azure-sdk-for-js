// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import {
  listByLocation,
  scaleOut,
  start,
  listSkus,
  setOrchestrationServiceState,
  restart,
  reimageAll,
  reimage,
  redeploy,
  reapply,
  powerOff,
  performMaintenance,
  getOSUpgradeHistory,
  updateInstances,
  getInstanceView,
  forceRecoveryServiceFabricPlatformUpdateDomainWalk,
  deleteInstances,
  deallocate,
  convertToSinglePlacementGroup,
  approveRollingUpgrade,
  listAll,
  list,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/virtualMachineScaleSets/operations.js";
import {
  VirtualMachineScaleSetsListByLocationOptionalParams,
  VirtualMachineScaleSetsScaleOutOptionalParams,
  VirtualMachineScaleSetsStartOptionalParams,
  VirtualMachineScaleSetsListSkusOptionalParams,
  VirtualMachineScaleSetsSetOrchestrationServiceStateOptionalParams,
  VirtualMachineScaleSetsRestartOptionalParams,
  VirtualMachineScaleSetsReimageAllOptionalParams,
  VirtualMachineScaleSetsReimageOptionalParams,
  VirtualMachineScaleSetsRedeployOptionalParams,
  VirtualMachineScaleSetsReapplyOptionalParams,
  VirtualMachineScaleSetsPowerOffOptionalParams,
  VirtualMachineScaleSetsPerformMaintenanceOptionalParams,
  VirtualMachineScaleSetsGetOSUpgradeHistoryOptionalParams,
  VirtualMachineScaleSetsUpdateInstancesOptionalParams,
  VirtualMachineScaleSetsGetInstanceViewOptionalParams,
  VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkOptionalParams,
  VirtualMachineScaleSetsDeleteInstancesOptionalParams,
  VirtualMachineScaleSetsDeallocateOptionalParams,
  VirtualMachineScaleSetsConvertToSinglePlacementGroupOptionalParams,
  VirtualMachineScaleSetsApproveRollingUpgradeOptionalParams,
  VirtualMachineScaleSetsListAllOptionalParams,
  VirtualMachineScaleSetsListOptionalParams,
  VirtualMachineScaleSetsDeleteOptionalParams,
  VirtualMachineScaleSetsUpdateOptionalParams,
  VirtualMachineScaleSetsCreateOrUpdateOptionalParams,
  VirtualMachineScaleSetsGetOptionalParams,
} from "../../api/virtualMachineScaleSets/options.js";
import {
  ComputeVirtualMachineScaleSet,
  ComputeVirtualMachineScaleSetUpdate,
  ComputeVMScaleSetConvertToSinglePlacementGroupInput,
  ComputeVirtualMachineScaleSetVMInstanceRequiredIDs,
  ComputeRecoveryWalkResponse,
  ComputeVirtualMachineScaleSetInstanceView,
  ComputeUpgradeOperationHistoricalStatusInfo,
  ComputeOrchestrationServiceStateInput,
  ComputeVirtualMachineScaleSetSku,
  ComputeVMScaleSetScaleOutInput,
} from "../../models/compute/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a VirtualMachineScaleSets operations. */
export interface VirtualMachineScaleSetsOperations {
  /** Gets all the VM scale sets under the specified subscription for the specified location. */
  listByLocation: (
    location: string,
    options?: VirtualMachineScaleSetsListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeVirtualMachineScaleSet>;
  /** Scales out one or more virtual machines in a VM scale set. */
  scaleOut: (
    resourceGroupName: string,
    vmScaleSetName: string,
    parameters: ComputeVMScaleSetScaleOutInput,
    options?: VirtualMachineScaleSetsScaleOutOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Starts one or more virtual machines in a VM scale set. */
  start: (
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsStartOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Gets a list of SKUs available for your VM scale set, including the minimum and maximum VM instances allowed for each SKU. */
  listSkus: (
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsListSkusOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeVirtualMachineScaleSetSku>;
  /** Changes ServiceState property for a given service */
  setOrchestrationServiceState: (
    resourceGroupName: string,
    vmScaleSetName: string,
    parameters: ComputeOrchestrationServiceStateInput,
    options?: VirtualMachineScaleSetsSetOrchestrationServiceStateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Restarts one or more virtual machines in a VM scale set. */
  restart: (
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsRestartOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Reimages all the disks ( including data disks ) in the virtual machines in a VM scale set. This operation is only supported for managed disks. */
  reimageAll: (
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsReimageAllOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Reimages (upgrade the operating system) one or more virtual machines in a VM scale set which don't have a ephemeral OS disk, for virtual machines who have a ephemeral OS disk the virtual machine is reset to initial state. */
  reimage: (
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsReimageOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Shuts down all the virtual machines in the virtual machine scale set, moves them to a new node, and powers them back on. */
  redeploy: (
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsRedeployOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Reapplies the Virtual Machine Scale Set Virtual Machine Profile to the Virtual Machine Instances */
  reapply: (
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsReapplyOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still attached and you are getting charged for the resources. Instead, use deallocate to release resources and avoid charges. */
  powerOff: (
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsPowerOffOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Perform maintenance on one or more virtual machines in a VM scale set. Operation on instances which are not eligible for perform maintenance will be failed. Please refer to best practices for more details: https://docs.microsoft.com/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-maintenance-notifications */
  performMaintenance: (
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsPerformMaintenanceOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Gets list of OS upgrades on a VM scale set instance. */
  getOSUpgradeHistory: (
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsGetOSUpgradeHistoryOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeUpgradeOperationHistoricalStatusInfo>;
  /** Upgrades one or more virtual machines to the latest SKU set in the VM scale set model. */
  updateInstances: (
    resourceGroupName: string,
    vmScaleSetName: string,
    vmInstanceIDs: ComputeVirtualMachineScaleSetVMInstanceRequiredIDs,
    options?: VirtualMachineScaleSetsUpdateInstancesOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Gets the status of a VM scale set instance. */
  getInstanceView: (
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsGetInstanceViewOptionalParams,
  ) => Promise<ComputeVirtualMachineScaleSetInstanceView>;
  /** Manual platform update domain walk to update virtual machines in a service fabric virtual machine scale set. */
  forceRecoveryServiceFabricPlatformUpdateDomainWalk: (
    resourceGroupName: string,
    vmScaleSetName: string,
    platformUpdateDomain: number,
    options?: VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkOptionalParams,
  ) => Promise<ComputeRecoveryWalkResponse>;
  /** Deletes virtual machines in a VM scale set. */
  deleteInstances: (
    resourceGroupName: string,
    vmScaleSetName: string,
    vmInstanceIDs: ComputeVirtualMachineScaleSetVMInstanceRequiredIDs,
    options?: VirtualMachineScaleSetsDeleteInstancesOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Deallocates specific virtual machines in a VM scale set. Shuts down the virtual machines and releases the compute resources. You are not billed for the compute resources that this virtual machine scale set deallocates. */
  deallocate: (
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsDeallocateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Converts SinglePlacementGroup property to false for a existing virtual machine scale set. */
  convertToSinglePlacementGroup: (
    resourceGroupName: string,
    vmScaleSetName: string,
    parameters: ComputeVMScaleSetConvertToSinglePlacementGroupInput,
    options?: VirtualMachineScaleSetsConvertToSinglePlacementGroupOptionalParams,
  ) => Promise<void>;
  /** Approve upgrade on deferred rolling upgrades for OS disks in the virtual machines in a VM scale set. */
  approveRollingUpgrade: (
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsApproveRollingUpgradeOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Gets a list of all VM Scale Sets in the subscription, regardless of the associated resource group. Use nextLink property in the response to get the next page of VM Scale Sets. Do this till nextLink is null to fetch all the VM Scale Sets. */
  listAll: (
    options?: VirtualMachineScaleSetsListAllOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeVirtualMachineScaleSet>;
  /** Gets a list of all VM scale sets under a resource group. */
  list: (
    resourceGroupName: string,
    options?: VirtualMachineScaleSetsListOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeVirtualMachineScaleSet>;
  /** Deletes a VM scale set. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a VM scale set. */
  update: (
    resourceGroupName: string,
    vmScaleSetName: string,
    parameters: ComputeVirtualMachineScaleSetUpdate,
    options?: VirtualMachineScaleSetsUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeVirtualMachineScaleSet>, ComputeVirtualMachineScaleSet>;
  /** Create or update a VM scale set. */
  createOrUpdate: (
    resourceGroupName: string,
    vmScaleSetName: string,
    parameters: ComputeVirtualMachineScaleSet,
    options?: VirtualMachineScaleSetsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeVirtualMachineScaleSet>, ComputeVirtualMachineScaleSet>;
  /** Display information about a virtual machine scale set. */
  get: (
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsGetOptionalParams,
  ) => Promise<ComputeVirtualMachineScaleSet>;
}

function _getVirtualMachineScaleSets(context: ComputeContext) {
  return {
    listByLocation: (
      location: string,
      options?: VirtualMachineScaleSetsListByLocationOptionalParams,
    ) => listByLocation(context, location, options),
    scaleOut: (
      resourceGroupName: string,
      vmScaleSetName: string,
      parameters: ComputeVMScaleSetScaleOutInput,
      options?: VirtualMachineScaleSetsScaleOutOptionalParams,
    ) => scaleOut(context, resourceGroupName, vmScaleSetName, parameters, options),
    start: (
      resourceGroupName: string,
      vmScaleSetName: string,
      options?: VirtualMachineScaleSetsStartOptionalParams,
    ) => start(context, resourceGroupName, vmScaleSetName, options),
    listSkus: (
      resourceGroupName: string,
      vmScaleSetName: string,
      options?: VirtualMachineScaleSetsListSkusOptionalParams,
    ) => listSkus(context, resourceGroupName, vmScaleSetName, options),
    setOrchestrationServiceState: (
      resourceGroupName: string,
      vmScaleSetName: string,
      parameters: ComputeOrchestrationServiceStateInput,
      options?: VirtualMachineScaleSetsSetOrchestrationServiceStateOptionalParams,
    ) =>
      setOrchestrationServiceState(context, resourceGroupName, vmScaleSetName, parameters, options),
    restart: (
      resourceGroupName: string,
      vmScaleSetName: string,
      options?: VirtualMachineScaleSetsRestartOptionalParams,
    ) => restart(context, resourceGroupName, vmScaleSetName, options),
    reimageAll: (
      resourceGroupName: string,
      vmScaleSetName: string,
      options?: VirtualMachineScaleSetsReimageAllOptionalParams,
    ) => reimageAll(context, resourceGroupName, vmScaleSetName, options),
    reimage: (
      resourceGroupName: string,
      vmScaleSetName: string,
      options?: VirtualMachineScaleSetsReimageOptionalParams,
    ) => reimage(context, resourceGroupName, vmScaleSetName, options),
    redeploy: (
      resourceGroupName: string,
      vmScaleSetName: string,
      options?: VirtualMachineScaleSetsRedeployOptionalParams,
    ) => redeploy(context, resourceGroupName, vmScaleSetName, options),
    reapply: (
      resourceGroupName: string,
      vmScaleSetName: string,
      options?: VirtualMachineScaleSetsReapplyOptionalParams,
    ) => reapply(context, resourceGroupName, vmScaleSetName, options),
    powerOff: (
      resourceGroupName: string,
      vmScaleSetName: string,
      options?: VirtualMachineScaleSetsPowerOffOptionalParams,
    ) => powerOff(context, resourceGroupName, vmScaleSetName, options),
    performMaintenance: (
      resourceGroupName: string,
      vmScaleSetName: string,
      options?: VirtualMachineScaleSetsPerformMaintenanceOptionalParams,
    ) => performMaintenance(context, resourceGroupName, vmScaleSetName, options),
    getOSUpgradeHistory: (
      resourceGroupName: string,
      vmScaleSetName: string,
      options?: VirtualMachineScaleSetsGetOSUpgradeHistoryOptionalParams,
    ) => getOSUpgradeHistory(context, resourceGroupName, vmScaleSetName, options),
    updateInstances: (
      resourceGroupName: string,
      vmScaleSetName: string,
      vmInstanceIDs: ComputeVirtualMachineScaleSetVMInstanceRequiredIDs,
      options?: VirtualMachineScaleSetsUpdateInstancesOptionalParams,
    ) => updateInstances(context, resourceGroupName, vmScaleSetName, vmInstanceIDs, options),
    getInstanceView: (
      resourceGroupName: string,
      vmScaleSetName: string,
      options?: VirtualMachineScaleSetsGetInstanceViewOptionalParams,
    ) => getInstanceView(context, resourceGroupName, vmScaleSetName, options),
    forceRecoveryServiceFabricPlatformUpdateDomainWalk: (
      resourceGroupName: string,
      vmScaleSetName: string,
      platformUpdateDomain: number,
      options?: VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkOptionalParams,
    ) =>
      forceRecoveryServiceFabricPlatformUpdateDomainWalk(
        context,
        resourceGroupName,
        vmScaleSetName,
        platformUpdateDomain,
        options,
      ),
    deleteInstances: (
      resourceGroupName: string,
      vmScaleSetName: string,
      vmInstanceIDs: ComputeVirtualMachineScaleSetVMInstanceRequiredIDs,
      options?: VirtualMachineScaleSetsDeleteInstancesOptionalParams,
    ) => deleteInstances(context, resourceGroupName, vmScaleSetName, vmInstanceIDs, options),
    deallocate: (
      resourceGroupName: string,
      vmScaleSetName: string,
      options?: VirtualMachineScaleSetsDeallocateOptionalParams,
    ) => deallocate(context, resourceGroupName, vmScaleSetName, options),
    convertToSinglePlacementGroup: (
      resourceGroupName: string,
      vmScaleSetName: string,
      parameters: ComputeVMScaleSetConvertToSinglePlacementGroupInput,
      options?: VirtualMachineScaleSetsConvertToSinglePlacementGroupOptionalParams,
    ) =>
      convertToSinglePlacementGroup(
        context,
        resourceGroupName,
        vmScaleSetName,
        parameters,
        options,
      ),
    approveRollingUpgrade: (
      resourceGroupName: string,
      vmScaleSetName: string,
      options?: VirtualMachineScaleSetsApproveRollingUpgradeOptionalParams,
    ) => approveRollingUpgrade(context, resourceGroupName, vmScaleSetName, options),
    listAll: (options?: VirtualMachineScaleSetsListAllOptionalParams) => listAll(context, options),
    list: (resourceGroupName: string, options?: VirtualMachineScaleSetsListOptionalParams) =>
      list(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      vmScaleSetName: string,
      options?: VirtualMachineScaleSetsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, vmScaleSetName, options),
    update: (
      resourceGroupName: string,
      vmScaleSetName: string,
      parameters: ComputeVirtualMachineScaleSetUpdate,
      options?: VirtualMachineScaleSetsUpdateOptionalParams,
    ) => update(context, resourceGroupName, vmScaleSetName, parameters, options),
    createOrUpdate: (
      resourceGroupName: string,
      vmScaleSetName: string,
      parameters: ComputeVirtualMachineScaleSet,
      options?: VirtualMachineScaleSetsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, vmScaleSetName, parameters, options),
    get: (
      resourceGroupName: string,
      vmScaleSetName: string,
      options?: VirtualMachineScaleSetsGetOptionalParams,
    ) => get(context, resourceGroupName, vmScaleSetName, options),
  };
}

export function _getVirtualMachineScaleSetsOperations(
  context: ComputeContext,
): VirtualMachineScaleSetsOperations {
  return {
    ..._getVirtualMachineScaleSets(context),
  };
}
