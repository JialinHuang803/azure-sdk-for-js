// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import {
  runCommand,
  start,
  retrieveBootDiagnosticsData,
  restart,
  redeploy,
  powerOff,
  performMaintenance,
  attachDetachDataDisks,
  simulateEviction,
  reimageAll,
  reimage,
  getInstanceView,
  deallocate,
  approveRollingUpgrade,
  list,
  $delete,
  update,
  get,
} from "../../api/virtualMachineScaleSetVMs/operations.js";
import {
  VirtualMachineScaleSetVMsRunCommandOptionalParams,
  VirtualMachineScaleSetVMsStartOptionalParams,
  VirtualMachineScaleSetVMsRetrieveBootDiagnosticsDataOptionalParams,
  VirtualMachineScaleSetVMsRestartOptionalParams,
  VirtualMachineScaleSetVMsRedeployOptionalParams,
  VirtualMachineScaleSetVMsPowerOffOptionalParams,
  VirtualMachineScaleSetVMsPerformMaintenanceOptionalParams,
  VirtualMachineScaleSetVMsAttachDetachDataDisksOptionalParams,
  VirtualMachineScaleSetVMsSimulateEvictionOptionalParams,
  VirtualMachineScaleSetVMsReimageAllOptionalParams,
  VirtualMachineScaleSetVMsReimageOptionalParams,
  VirtualMachineScaleSetVMsGetInstanceViewOptionalParams,
  VirtualMachineScaleSetVMsDeallocateOptionalParams,
  VirtualMachineScaleSetVMsApproveRollingUpgradeOptionalParams,
  VirtualMachineScaleSetVMsListOptionalParams,
  VirtualMachineScaleSetVMsDeleteOptionalParams,
  VirtualMachineScaleSetVMsUpdateOptionalParams,
  VirtualMachineScaleSetVMsGetOptionalParams,
} from "../../api/virtualMachineScaleSetVMs/options.js";
import {
  ComputeStorageProfile,
  ComputeAttachDetachDataDisksRequest,
  ComputeRetrieveBootDiagnosticsDataResult,
  ComputeRunCommandInput,
  ComputeRunCommandResult,
  ComputeVirtualMachineScaleSetVM,
  ComputeVirtualMachineScaleSetVMInstanceView,
} from "../../models/compute/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a VirtualMachineScaleSetVMs operations. */
export interface VirtualMachineScaleSetVMsOperations {
  /** Run command on a virtual machine in a VM scale set. */
  runCommand: (
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    parameters: ComputeRunCommandInput,
    options?: VirtualMachineScaleSetVMsRunCommandOptionalParams,
  ) => PollerLike<OperationState<ComputeRunCommandResult>, ComputeRunCommandResult>;
  /** Starts a virtual machine in a VM scale set. */
  start: (
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsStartOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** The operation to retrieve SAS URIs of boot diagnostic logs for a virtual machine in a VM scale set. */
  retrieveBootDiagnosticsData: (
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsRetrieveBootDiagnosticsDataOptionalParams,
  ) => Promise<ComputeRetrieveBootDiagnosticsDataResult>;
  /** Restarts a virtual machine in a VM scale set. */
  restart: (
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsRestartOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Shuts down the virtual machine in the virtual machine scale set, moves it to a new node, and powers it back on. */
  redeploy: (
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsRedeployOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Power off (stop) a virtual machine in a VM scale set. Note that resources are still attached and you are getting charged for the resources. Instead, use deallocate to release resources and avoid charges. */
  powerOff: (
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsPowerOffOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Performs maintenance on a virtual machine in a VM scale set. */
  performMaintenance: (
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsPerformMaintenanceOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Attach and detach data disks to/from a virtual machine in a VM scale set. */
  attachDetachDataDisks: (
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    parameters: ComputeAttachDetachDataDisksRequest,
    options?: VirtualMachineScaleSetVMsAttachDetachDataDisksOptionalParams,
  ) => PollerLike<OperationState<ComputeStorageProfile>, ComputeStorageProfile>;
  /** The operation to simulate the eviction of spot virtual machine in a VM scale set. */
  simulateEviction: (
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsSimulateEvictionOptionalParams,
  ) => Promise<void>;
  /** Allows you to re-image all the disks ( including data disks ) in the a VM scale set instance. This operation is only supported for managed disks. */
  reimageAll: (
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsReimageAllOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Reimages (upgrade the operating system) a specific virtual machine in a VM scale set. */
  reimage: (
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsReimageOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Gets the status of a virtual machine from a VM scale set. */
  getInstanceView: (
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsGetInstanceViewOptionalParams,
  ) => Promise<ComputeVirtualMachineScaleSetVMInstanceView>;
  /** Deallocates a specific virtual machine in a VM scale set. Shuts down the virtual machine and releases the compute resources it uses. You are not billed for the compute resources of this virtual machine once it is deallocated. */
  deallocate: (
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsDeallocateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Approve upgrade on deferred rolling upgrade for OS disk on a VM scale set instance. */
  approveRollingUpgrade: (
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsApproveRollingUpgradeOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Gets a list of all virtual machines in a VM scale sets. */
  list: (
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    options?: VirtualMachineScaleSetVMsListOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeVirtualMachineScaleSetVM>;
  /** Deletes a virtual machine from a VM scale set. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates a virtual machine of a VM scale set. */
  update: (
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    parameters: ComputeVirtualMachineScaleSetVM,
    options?: VirtualMachineScaleSetVMsUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeVirtualMachineScaleSetVM>, ComputeVirtualMachineScaleSetVM>;
  /** Gets a virtual machine from a VM scale set. */
  get: (
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsGetOptionalParams,
  ) => Promise<ComputeVirtualMachineScaleSetVM>;
}

function _getVirtualMachineScaleSetVMs(context: ComputeContext) {
  return {
    runCommand: (
      resourceGroupName: string,
      vmScaleSetName: string,
      instanceId: string,
      parameters: ComputeRunCommandInput,
      options?: VirtualMachineScaleSetVMsRunCommandOptionalParams,
    ) => runCommand(context, resourceGroupName, vmScaleSetName, instanceId, parameters, options),
    start: (
      resourceGroupName: string,
      vmScaleSetName: string,
      instanceId: string,
      options?: VirtualMachineScaleSetVMsStartOptionalParams,
    ) => start(context, resourceGroupName, vmScaleSetName, instanceId, options),
    retrieveBootDiagnosticsData: (
      resourceGroupName: string,
      vmScaleSetName: string,
      instanceId: string,
      options?: VirtualMachineScaleSetVMsRetrieveBootDiagnosticsDataOptionalParams,
    ) =>
      retrieveBootDiagnosticsData(context, resourceGroupName, vmScaleSetName, instanceId, options),
    restart: (
      resourceGroupName: string,
      vmScaleSetName: string,
      instanceId: string,
      options?: VirtualMachineScaleSetVMsRestartOptionalParams,
    ) => restart(context, resourceGroupName, vmScaleSetName, instanceId, options),
    redeploy: (
      resourceGroupName: string,
      vmScaleSetName: string,
      instanceId: string,
      options?: VirtualMachineScaleSetVMsRedeployOptionalParams,
    ) => redeploy(context, resourceGroupName, vmScaleSetName, instanceId, options),
    powerOff: (
      resourceGroupName: string,
      vmScaleSetName: string,
      instanceId: string,
      options?: VirtualMachineScaleSetVMsPowerOffOptionalParams,
    ) => powerOff(context, resourceGroupName, vmScaleSetName, instanceId, options),
    performMaintenance: (
      resourceGroupName: string,
      vmScaleSetName: string,
      instanceId: string,
      options?: VirtualMachineScaleSetVMsPerformMaintenanceOptionalParams,
    ) => performMaintenance(context, resourceGroupName, vmScaleSetName, instanceId, options),
    attachDetachDataDisks: (
      resourceGroupName: string,
      vmScaleSetName: string,
      instanceId: string,
      parameters: ComputeAttachDetachDataDisksRequest,
      options?: VirtualMachineScaleSetVMsAttachDetachDataDisksOptionalParams,
    ) =>
      attachDetachDataDisks(
        context,
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        parameters,
        options,
      ),
    simulateEviction: (
      resourceGroupName: string,
      vmScaleSetName: string,
      instanceId: string,
      options?: VirtualMachineScaleSetVMsSimulateEvictionOptionalParams,
    ) => simulateEviction(context, resourceGroupName, vmScaleSetName, instanceId, options),
    reimageAll: (
      resourceGroupName: string,
      vmScaleSetName: string,
      instanceId: string,
      options?: VirtualMachineScaleSetVMsReimageAllOptionalParams,
    ) => reimageAll(context, resourceGroupName, vmScaleSetName, instanceId, options),
    reimage: (
      resourceGroupName: string,
      vmScaleSetName: string,
      instanceId: string,
      options?: VirtualMachineScaleSetVMsReimageOptionalParams,
    ) => reimage(context, resourceGroupName, vmScaleSetName, instanceId, options),
    getInstanceView: (
      resourceGroupName: string,
      vmScaleSetName: string,
      instanceId: string,
      options?: VirtualMachineScaleSetVMsGetInstanceViewOptionalParams,
    ) => getInstanceView(context, resourceGroupName, vmScaleSetName, instanceId, options),
    deallocate: (
      resourceGroupName: string,
      vmScaleSetName: string,
      instanceId: string,
      options?: VirtualMachineScaleSetVMsDeallocateOptionalParams,
    ) => deallocate(context, resourceGroupName, vmScaleSetName, instanceId, options),
    approveRollingUpgrade: (
      resourceGroupName: string,
      vmScaleSetName: string,
      instanceId: string,
      options?: VirtualMachineScaleSetVMsApproveRollingUpgradeOptionalParams,
    ) => approveRollingUpgrade(context, resourceGroupName, vmScaleSetName, instanceId, options),
    list: (
      resourceGroupName: string,
      virtualMachineScaleSetName: string,
      options?: VirtualMachineScaleSetVMsListOptionalParams,
    ) => list(context, resourceGroupName, virtualMachineScaleSetName, options),
    delete: (
      resourceGroupName: string,
      vmScaleSetName: string,
      instanceId: string,
      options?: VirtualMachineScaleSetVMsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, vmScaleSetName, instanceId, options),
    update: (
      resourceGroupName: string,
      vmScaleSetName: string,
      instanceId: string,
      parameters: ComputeVirtualMachineScaleSetVM,
      options?: VirtualMachineScaleSetVMsUpdateOptionalParams,
    ) => update(context, resourceGroupName, vmScaleSetName, instanceId, parameters, options),
    get: (
      resourceGroupName: string,
      vmScaleSetName: string,
      instanceId: string,
      options?: VirtualMachineScaleSetVMsGetOptionalParams,
    ) => get(context, resourceGroupName, vmScaleSetName, instanceId, options),
  };
}

export function _getVirtualMachineScaleSetVMsOperations(
  context: ComputeContext,
): VirtualMachineScaleSetVMsOperations {
  return {
    ..._getVirtualMachineScaleSetVMs(context),
  };
}
