// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import {
  get,
  list,
  listByVirtualMachine,
  $delete,
  update,
  createOrUpdate,
  getByVirtualMachine,
} from "../../api/virtualMachineRunCommands/operations.js";
import {
  VirtualMachineRunCommandsGetOptionalParams,
  VirtualMachineRunCommandsListOptionalParams,
  VirtualMachineRunCommandsListByVirtualMachineOptionalParams,
  VirtualMachineRunCommandsDeleteOptionalParams,
  VirtualMachineRunCommandsUpdateOptionalParams,
  VirtualMachineRunCommandsCreateOrUpdateOptionalParams,
  VirtualMachineRunCommandsGetByVirtualMachineOptionalParams,
} from "../../api/virtualMachineRunCommands/options.js";
import {
  ComputeVirtualMachineRunCommand,
  ComputeVirtualMachineRunCommandUpdate,
  ComputeRunCommandDocumentBase,
  ComputeRunCommandDocument,
} from "../../models/compute/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a VirtualMachineRunCommands operations. */
export interface VirtualMachineRunCommandsOperations {
  /** Gets specific run command for a subscription in a location. */
  get: (
    location: string,
    commandId: string,
    options?: VirtualMachineRunCommandsGetOptionalParams,
  ) => Promise<ComputeRunCommandDocument>;
  /** Lists all available run commands for a subscription in a location. */
  list: (
    location: string,
    options?: VirtualMachineRunCommandsListOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeRunCommandDocumentBase>;
  /** The operation to get all run commands of a Virtual Machine. */
  listByVirtualMachine: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachineRunCommandsListByVirtualMachineOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeVirtualMachineRunCommand>;
  /** The operation to delete the run command. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    options?: VirtualMachineRunCommandsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** The operation to update the run command. */
  update: (
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    runCommand: ComputeVirtualMachineRunCommandUpdate,
    options?: VirtualMachineRunCommandsUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeVirtualMachineRunCommand>, ComputeVirtualMachineRunCommand>;
  /** The operation to create or update the run command. */
  createOrUpdate: (
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    runCommand: ComputeVirtualMachineRunCommand,
    options?: VirtualMachineRunCommandsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeVirtualMachineRunCommand>, ComputeVirtualMachineRunCommand>;
  /** The operation to get the run command. */
  getByVirtualMachine: (
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    options?: VirtualMachineRunCommandsGetByVirtualMachineOptionalParams,
  ) => Promise<ComputeVirtualMachineRunCommand>;
}

function _getVirtualMachineRunCommands(context: ComputeContext) {
  return {
    get: (
      location: string,
      commandId: string,
      options?: VirtualMachineRunCommandsGetOptionalParams,
    ) => get(context, location, commandId, options),
    list: (location: string, options?: VirtualMachineRunCommandsListOptionalParams) =>
      list(context, location, options),
    listByVirtualMachine: (
      resourceGroupName: string,
      vmName: string,
      options?: VirtualMachineRunCommandsListByVirtualMachineOptionalParams,
    ) => listByVirtualMachine(context, resourceGroupName, vmName, options),
    delete: (
      resourceGroupName: string,
      vmName: string,
      runCommandName: string,
      options?: VirtualMachineRunCommandsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, vmName, runCommandName, options),
    update: (
      resourceGroupName: string,
      vmName: string,
      runCommandName: string,
      runCommand: ComputeVirtualMachineRunCommandUpdate,
      options?: VirtualMachineRunCommandsUpdateOptionalParams,
    ) => update(context, resourceGroupName, vmName, runCommandName, runCommand, options),
    createOrUpdate: (
      resourceGroupName: string,
      vmName: string,
      runCommandName: string,
      runCommand: ComputeVirtualMachineRunCommand,
      options?: VirtualMachineRunCommandsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, vmName, runCommandName, runCommand, options),
    getByVirtualMachine: (
      resourceGroupName: string,
      vmName: string,
      runCommandName: string,
      options?: VirtualMachineRunCommandsGetByVirtualMachineOptionalParams,
    ) => getByVirtualMachine(context, resourceGroupName, vmName, runCommandName, options),
  };
}

export function _getVirtualMachineRunCommandsOperations(
  context: ComputeContext,
): VirtualMachineRunCommandsOperations {
  return {
    ..._getVirtualMachineRunCommands(context),
  };
}
