// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import {
  getLatest,
  cancel,
  startOSUpgrade,
  startExtensionUpgrade,
} from "../../api/virtualMachineScaleSetRollingUpgrades/operations.js";
import {
  VirtualMachineScaleSetRollingUpgradesGetLatestOptionalParams,
  VirtualMachineScaleSetRollingUpgradesCancelOptionalParams,
  VirtualMachineScaleSetRollingUpgradesStartOSUpgradeOptionalParams,
  VirtualMachineScaleSetRollingUpgradesStartExtensionUpgradeOptionalParams,
} from "../../api/virtualMachineScaleSetRollingUpgrades/options.js";
import { ComputeRollingUpgradeStatusInfo } from "../../models/compute/models.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a VirtualMachineScaleSetRollingUpgrades operations. */
export interface VirtualMachineScaleSetRollingUpgradesOperations {
  /** Gets the status of the latest virtual machine scale set rolling upgrade. */
  getLatest: (
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetRollingUpgradesGetLatestOptionalParams,
  ) => Promise<ComputeRollingUpgradeStatusInfo>;
  /** Cancels the current virtual machine scale set rolling upgrade. */
  cancel: (
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetRollingUpgradesCancelOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Starts a rolling upgrade to move all virtual machine scale set instances to the latest available Platform Image OS version. Instances which are already running the latest available OS version are not affected. */
  startOSUpgrade: (
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetRollingUpgradesStartOSUpgradeOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Starts a rolling upgrade to move all extensions for all virtual machine scale set instances to the latest available extension version. Instances which are already running the latest extension versions are not affected. */
  startExtensionUpgrade: (
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetRollingUpgradesStartExtensionUpgradeOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

function _getVirtualMachineScaleSetRollingUpgrades(context: ComputeContext) {
  return {
    getLatest: (
      resourceGroupName: string,
      vmScaleSetName: string,
      options?: VirtualMachineScaleSetRollingUpgradesGetLatestOptionalParams,
    ) => getLatest(context, resourceGroupName, vmScaleSetName, options),
    cancel: (
      resourceGroupName: string,
      vmScaleSetName: string,
      options?: VirtualMachineScaleSetRollingUpgradesCancelOptionalParams,
    ) => cancel(context, resourceGroupName, vmScaleSetName, options),
    startOSUpgrade: (
      resourceGroupName: string,
      vmScaleSetName: string,
      options?: VirtualMachineScaleSetRollingUpgradesStartOSUpgradeOptionalParams,
    ) => startOSUpgrade(context, resourceGroupName, vmScaleSetName, options),
    startExtensionUpgrade: (
      resourceGroupName: string,
      vmScaleSetName: string,
      options?: VirtualMachineScaleSetRollingUpgradesStartExtensionUpgradeOptionalParams,
    ) => startExtensionUpgrade(context, resourceGroupName, vmScaleSetName, options),
  };
}

export function _getVirtualMachineScaleSetRollingUpgradesOperations(
  context: ComputeContext,
): VirtualMachineScaleSetRollingUpgradesOperations {
  return {
    ..._getVirtualMachineScaleSetRollingUpgrades(context),
  };
}
