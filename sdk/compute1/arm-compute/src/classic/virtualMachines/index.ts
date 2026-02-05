// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import {
  listByLocation,
  migrateToVMScaleSet,
  runCommand,
  listAvailableSizes,
  start,
  simulateEviction,
  retrieveBootDiagnosticsData,
  restart,
  reimage,
  redeploy,
  reapply,
  powerOff,
  performMaintenance,
  instanceView,
  installPatches,
  generalize,
  deallocate,
  convertToManagedDisks,
  capture,
  attachDetachDataDisks,
  assessPatches,
  listAll,
  list,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/virtualMachines/operations.js";
import {
  VirtualMachinesListByLocationOptionalParams,
  VirtualMachinesMigrateToVMScaleSetOptionalParams,
  VirtualMachinesRunCommandOptionalParams,
  VirtualMachinesListAvailableSizesOptionalParams,
  VirtualMachinesStartOptionalParams,
  VirtualMachinesSimulateEvictionOptionalParams,
  VirtualMachinesRetrieveBootDiagnosticsDataOptionalParams,
  VirtualMachinesRestartOptionalParams,
  VirtualMachinesReimageOptionalParams,
  VirtualMachinesRedeployOptionalParams,
  VirtualMachinesReapplyOptionalParams,
  VirtualMachinesPowerOffOptionalParams,
  VirtualMachinesPerformMaintenanceOptionalParams,
  VirtualMachinesInstanceViewOptionalParams,
  VirtualMachinesInstallPatchesOptionalParams,
  VirtualMachinesGeneralizeOptionalParams,
  VirtualMachinesDeallocateOptionalParams,
  VirtualMachinesConvertToManagedDisksOptionalParams,
  VirtualMachinesCaptureOptionalParams,
  VirtualMachinesAttachDetachDataDisksOptionalParams,
  VirtualMachinesAssessPatchesOptionalParams,
  VirtualMachinesListAllOptionalParams,
  VirtualMachinesListOptionalParams,
  VirtualMachinesDeleteOptionalParams,
  VirtualMachinesUpdateOptionalParams,
  VirtualMachinesCreateOrUpdateOptionalParams,
  VirtualMachinesGetOptionalParams,
} from "../../api/virtualMachines/options.js";
import {
  ComputeVirtualMachine,
  ComputeStorageProfile,
  ComputeVirtualMachineInstanceView,
  ComputeVirtualMachineUpdate,
  ComputeVirtualMachineAssessPatchesResult,
  ComputeAttachDetachDataDisksRequest,
  ComputeVirtualMachineCaptureParameters,
  ComputeVirtualMachineCaptureResult,
  ComputeVirtualMachineInstallPatchesParameters,
  ComputeVirtualMachineInstallPatchesResult,
  ComputeRetrieveBootDiagnosticsDataResult,
  ComputeVirtualMachineSize,
  ComputeRunCommandInput,
  ComputeRunCommandResult,
} from "../../models/compute/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a VirtualMachines operations. */
export interface VirtualMachinesOperations {
  /** Gets all the virtual machines under the specified subscription for the specified location. */
  listByLocation: (
    location: string,
    options?: VirtualMachinesListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeVirtualMachine>;
  /** Migrate a virtual machine from availability set to Flexible Virtual Machine Scale Set. */
  migrateToVMScaleSet: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesMigrateToVMScaleSetOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Run command on the VM. */
  runCommand: (
    resourceGroupName: string,
    vmName: string,
    parameters: ComputeRunCommandInput,
    options?: VirtualMachinesRunCommandOptionalParams,
  ) => PollerLike<OperationState<ComputeRunCommandResult>, ComputeRunCommandResult>;
  /** Lists all available virtual machine sizes to which the specified virtual machine can be resized. */
  listAvailableSizes: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesListAvailableSizesOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeVirtualMachineSize>;
  /** The operation to start a virtual machine. */
  start: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesStartOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** The operation to simulate the eviction of spot virtual machine. */
  simulateEviction: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesSimulateEvictionOptionalParams,
  ) => Promise<void>;
  /** The operation to retrieve SAS URIs for a virtual machine's boot diagnostic logs. */
  retrieveBootDiagnosticsData: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesRetrieveBootDiagnosticsDataOptionalParams,
  ) => Promise<ComputeRetrieveBootDiagnosticsDataResult>;
  /** The operation to restart a virtual machine. */
  restart: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesRestartOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Reimages (upgrade the operating system) a virtual machine which don't have a ephemeral OS disk, for virtual machines who have a ephemeral OS disk the virtual machine is reset to initial state. NOTE: The retaining of old OS disk depends on the value of deleteOption of OS disk. If deleteOption is detach, the old OS disk will be preserved after reimage. If deleteOption is delete, the old OS disk will be deleted after reimage. The deleteOption of the OS disk should be updated accordingly before performing the reimage. */
  reimage: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesReimageOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Shuts down the virtual machine, moves it to a new node, and powers it back on. */
  redeploy: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesRedeployOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** The operation to reapply a virtual machine's state. */
  reapply: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesReapplyOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** The operation to power off (stop) a virtual machine. The virtual machine can be restarted with the same provisioned resources. You are still charged for this virtual machine. */
  powerOff: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesPowerOffOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** The operation to perform maintenance on a virtual machine. */
  performMaintenance: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesPerformMaintenanceOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Retrieves information about the run-time state of a virtual machine. */
  instanceView: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesInstanceViewOptionalParams,
  ) => Promise<ComputeVirtualMachineInstanceView>;
  /** Installs patches on the VM. */
  installPatches: (
    resourceGroupName: string,
    vmName: string,
    installPatchesInput: ComputeVirtualMachineInstallPatchesParameters,
    options?: VirtualMachinesInstallPatchesOptionalParams,
  ) => PollerLike<
    OperationState<ComputeVirtualMachineInstallPatchesResult>,
    ComputeVirtualMachineInstallPatchesResult
  >;
  /** Sets the OS state of the virtual machine to generalized. It is recommended to sysprep the virtual machine before performing this operation. For Windows, please refer to [Create a managed image of a generalized VM in Azure](https://docs.microsoft.com/azure/virtual-machines/windows/capture-image-resource). For Linux, please refer to [How to create an image of a virtual machine or VHD](https://docs.microsoft.com/azure/virtual-machines/linux/capture-image). */
  generalize: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesGeneralizeOptionalParams,
  ) => Promise<void>;
  /** Shuts down the virtual machine and releases the compute resources. You are not billed for the compute resources that this virtual machine uses. */
  deallocate: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesDeallocateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Converts virtual machine disks from blob-based to managed disks. Virtual machine must be stop-deallocated before invoking this operation. */
  convertToManagedDisks: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesConvertToManagedDisksOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Captures the VM by copying virtual hard disks of the VM and outputs a template that can be used to create similar VMs. */
  capture: (
    resourceGroupName: string,
    vmName: string,
    parameters: ComputeVirtualMachineCaptureParameters,
    options?: VirtualMachinesCaptureOptionalParams,
  ) => PollerLike<
    OperationState<ComputeVirtualMachineCaptureResult>,
    ComputeVirtualMachineCaptureResult
  >;
  /** Attach and detach data disks to/from the virtual machine. */
  attachDetachDataDisks: (
    resourceGroupName: string,
    vmName: string,
    parameters: ComputeAttachDetachDataDisksRequest,
    options?: VirtualMachinesAttachDetachDataDisksOptionalParams,
  ) => PollerLike<OperationState<ComputeStorageProfile>, ComputeStorageProfile>;
  /** Assess patches on the VM. */
  assessPatches: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesAssessPatchesOptionalParams,
  ) => PollerLike<
    OperationState<ComputeVirtualMachineAssessPatchesResult>,
    ComputeVirtualMachineAssessPatchesResult
  >;
  /** Lists all of the virtual machines in the specified subscription. Use the nextLink property in the response to get the next page of virtual machines. */
  listAll: (
    options?: VirtualMachinesListAllOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeVirtualMachine>;
  /** Lists all of the virtual machines in the specified resource group. Use the nextLink property in the response to get the next page of virtual machines. */
  list: (
    resourceGroupName: string,
    options?: VirtualMachinesListOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeVirtualMachine>;
  /** The operation to delete a virtual machine. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** The operation to update a virtual machine. */
  update: (
    resourceGroupName: string,
    vmName: string,
    parameters: ComputeVirtualMachineUpdate,
    options?: VirtualMachinesUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeVirtualMachine>, ComputeVirtualMachine>;
  /** The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation. */
  createOrUpdate: (
    resourceGroupName: string,
    vmName: string,
    parameters: ComputeVirtualMachine,
    options?: VirtualMachinesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeVirtualMachine>, ComputeVirtualMachine>;
  /** Retrieves information about the model view or the instance view of a virtual machine. */
  get: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesGetOptionalParams,
  ) => Promise<ComputeVirtualMachine>;
}

function _getVirtualMachines(context: ComputeContext) {
  return {
    listByLocation: (location: string, options?: VirtualMachinesListByLocationOptionalParams) =>
      listByLocation(context, location, options),
    migrateToVMScaleSet: (
      resourceGroupName: string,
      vmName: string,
      options?: VirtualMachinesMigrateToVMScaleSetOptionalParams,
    ) => migrateToVMScaleSet(context, resourceGroupName, vmName, options),
    runCommand: (
      resourceGroupName: string,
      vmName: string,
      parameters: ComputeRunCommandInput,
      options?: VirtualMachinesRunCommandOptionalParams,
    ) => runCommand(context, resourceGroupName, vmName, parameters, options),
    listAvailableSizes: (
      resourceGroupName: string,
      vmName: string,
      options?: VirtualMachinesListAvailableSizesOptionalParams,
    ) => listAvailableSizes(context, resourceGroupName, vmName, options),
    start: (
      resourceGroupName: string,
      vmName: string,
      options?: VirtualMachinesStartOptionalParams,
    ) => start(context, resourceGroupName, vmName, options),
    simulateEviction: (
      resourceGroupName: string,
      vmName: string,
      options?: VirtualMachinesSimulateEvictionOptionalParams,
    ) => simulateEviction(context, resourceGroupName, vmName, options),
    retrieveBootDiagnosticsData: (
      resourceGroupName: string,
      vmName: string,
      options?: VirtualMachinesRetrieveBootDiagnosticsDataOptionalParams,
    ) => retrieveBootDiagnosticsData(context, resourceGroupName, vmName, options),
    restart: (
      resourceGroupName: string,
      vmName: string,
      options?: VirtualMachinesRestartOptionalParams,
    ) => restart(context, resourceGroupName, vmName, options),
    reimage: (
      resourceGroupName: string,
      vmName: string,
      options?: VirtualMachinesReimageOptionalParams,
    ) => reimage(context, resourceGroupName, vmName, options),
    redeploy: (
      resourceGroupName: string,
      vmName: string,
      options?: VirtualMachinesRedeployOptionalParams,
    ) => redeploy(context, resourceGroupName, vmName, options),
    reapply: (
      resourceGroupName: string,
      vmName: string,
      options?: VirtualMachinesReapplyOptionalParams,
    ) => reapply(context, resourceGroupName, vmName, options),
    powerOff: (
      resourceGroupName: string,
      vmName: string,
      options?: VirtualMachinesPowerOffOptionalParams,
    ) => powerOff(context, resourceGroupName, vmName, options),
    performMaintenance: (
      resourceGroupName: string,
      vmName: string,
      options?: VirtualMachinesPerformMaintenanceOptionalParams,
    ) => performMaintenance(context, resourceGroupName, vmName, options),
    instanceView: (
      resourceGroupName: string,
      vmName: string,
      options?: VirtualMachinesInstanceViewOptionalParams,
    ) => instanceView(context, resourceGroupName, vmName, options),
    installPatches: (
      resourceGroupName: string,
      vmName: string,
      installPatchesInput: ComputeVirtualMachineInstallPatchesParameters,
      options?: VirtualMachinesInstallPatchesOptionalParams,
    ) => installPatches(context, resourceGroupName, vmName, installPatchesInput, options),
    generalize: (
      resourceGroupName: string,
      vmName: string,
      options?: VirtualMachinesGeneralizeOptionalParams,
    ) => generalize(context, resourceGroupName, vmName, options),
    deallocate: (
      resourceGroupName: string,
      vmName: string,
      options?: VirtualMachinesDeallocateOptionalParams,
    ) => deallocate(context, resourceGroupName, vmName, options),
    convertToManagedDisks: (
      resourceGroupName: string,
      vmName: string,
      options?: VirtualMachinesConvertToManagedDisksOptionalParams,
    ) => convertToManagedDisks(context, resourceGroupName, vmName, options),
    capture: (
      resourceGroupName: string,
      vmName: string,
      parameters: ComputeVirtualMachineCaptureParameters,
      options?: VirtualMachinesCaptureOptionalParams,
    ) => capture(context, resourceGroupName, vmName, parameters, options),
    attachDetachDataDisks: (
      resourceGroupName: string,
      vmName: string,
      parameters: ComputeAttachDetachDataDisksRequest,
      options?: VirtualMachinesAttachDetachDataDisksOptionalParams,
    ) => attachDetachDataDisks(context, resourceGroupName, vmName, parameters, options),
    assessPatches: (
      resourceGroupName: string,
      vmName: string,
      options?: VirtualMachinesAssessPatchesOptionalParams,
    ) => assessPatches(context, resourceGroupName, vmName, options),
    listAll: (options?: VirtualMachinesListAllOptionalParams) => listAll(context, options),
    list: (resourceGroupName: string, options?: VirtualMachinesListOptionalParams) =>
      list(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      vmName: string,
      options?: VirtualMachinesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, vmName, options),
    update: (
      resourceGroupName: string,
      vmName: string,
      parameters: ComputeVirtualMachineUpdate,
      options?: VirtualMachinesUpdateOptionalParams,
    ) => update(context, resourceGroupName, vmName, parameters, options),
    createOrUpdate: (
      resourceGroupName: string,
      vmName: string,
      parameters: ComputeVirtualMachine,
      options?: VirtualMachinesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, vmName, parameters, options),
    get: (resourceGroupName: string, vmName: string, options?: VirtualMachinesGetOptionalParams) =>
      get(context, resourceGroupName, vmName, options),
  };
}

export function _getVirtualMachinesOperations(context: ComputeContext): VirtualMachinesOperations {
  return {
    ..._getVirtualMachines(context),
  };
}
