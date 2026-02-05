// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import {
  list,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/virtualMachineExtensions/operations.js";
import {
  VirtualMachineExtensionsListOptionalParams,
  VirtualMachineExtensionsDeleteOptionalParams,
  VirtualMachineExtensionsUpdateOptionalParams,
  VirtualMachineExtensionsCreateOrUpdateOptionalParams,
  VirtualMachineExtensionsGetOptionalParams,
} from "../../api/virtualMachineExtensions/options.js";
import {
  ComputeVirtualMachineExtension,
  ComputeVirtualMachineExtensionUpdate,
  ComputeVirtualMachineExtensionsListResult,
} from "../../models/compute/models.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a VirtualMachineExtensions operations. */
export interface VirtualMachineExtensionsOperations {
  /** The operation to get all extensions of a Virtual Machine. */
  list: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachineExtensionsListOptionalParams,
  ) => Promise<ComputeVirtualMachineExtensionsListResult>;
  /** The operation to delete the extension. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    vmName: string,
    vmExtensionName: string,
    options?: VirtualMachineExtensionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** The operation to update the extension. */
  update: (
    resourceGroupName: string,
    vmName: string,
    vmExtensionName: string,
    extensionParameters: ComputeVirtualMachineExtensionUpdate,
    options?: VirtualMachineExtensionsUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeVirtualMachineExtension>, ComputeVirtualMachineExtension>;
  /** The operation to create or update the extension. */
  createOrUpdate: (
    resourceGroupName: string,
    vmName: string,
    vmExtensionName: string,
    extensionParameters: ComputeVirtualMachineExtension,
    options?: VirtualMachineExtensionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeVirtualMachineExtension>, ComputeVirtualMachineExtension>;
  /** The operation to get the extension. */
  get: (
    resourceGroupName: string,
    vmName: string,
    vmExtensionName: string,
    options?: VirtualMachineExtensionsGetOptionalParams,
  ) => Promise<ComputeVirtualMachineExtension>;
}

function _getVirtualMachineExtensions(context: ComputeContext) {
  return {
    list: (
      resourceGroupName: string,
      vmName: string,
      options?: VirtualMachineExtensionsListOptionalParams,
    ) => list(context, resourceGroupName, vmName, options),
    delete: (
      resourceGroupName: string,
      vmName: string,
      vmExtensionName: string,
      options?: VirtualMachineExtensionsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, vmName, vmExtensionName, options),
    update: (
      resourceGroupName: string,
      vmName: string,
      vmExtensionName: string,
      extensionParameters: ComputeVirtualMachineExtensionUpdate,
      options?: VirtualMachineExtensionsUpdateOptionalParams,
    ) => update(context, resourceGroupName, vmName, vmExtensionName, extensionParameters, options),
    createOrUpdate: (
      resourceGroupName: string,
      vmName: string,
      vmExtensionName: string,
      extensionParameters: ComputeVirtualMachineExtension,
      options?: VirtualMachineExtensionsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        vmName,
        vmExtensionName,
        extensionParameters,
        options,
      ),
    get: (
      resourceGroupName: string,
      vmName: string,
      vmExtensionName: string,
      options?: VirtualMachineExtensionsGetOptionalParams,
    ) => get(context, resourceGroupName, vmName, vmExtensionName, options),
  };
}

export function _getVirtualMachineExtensionsOperations(
  context: ComputeContext,
): VirtualMachineExtensionsOperations {
  return {
    ..._getVirtualMachineExtensions(context),
  };
}
