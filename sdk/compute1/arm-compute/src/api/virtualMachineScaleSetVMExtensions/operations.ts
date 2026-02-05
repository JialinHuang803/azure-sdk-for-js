// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext as Client } from "../index.js";
import { commonCloudErrorDeserializer } from "../../models/common/models.js";
import {
  ComputeVirtualMachineScaleSetVMExtension,
  computeVirtualMachineScaleSetVMExtensionSerializer,
  computeVirtualMachineScaleSetVMExtensionDeserializer,
  ComputeVirtualMachineScaleSetVMExtensionUpdate,
  computeVirtualMachineScaleSetVMExtensionUpdateSerializer,
  ComputeVirtualMachineScaleSetVMExtensionsListResult,
  computeVirtualMachineScaleSetVMExtensionsListResultDeserializer,
} from "../../models/compute/models.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  VirtualMachineScaleSetVMExtensionsListOptionalParams,
  VirtualMachineScaleSetVMExtensionsDeleteOptionalParams,
  VirtualMachineScaleSetVMExtensionsUpdateOptionalParams,
  VirtualMachineScaleSetVMExtensionsCreateOrUpdateOptionalParams,
  VirtualMachineScaleSetVMExtensionsGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _listSend(
  context: Client,
  resourceGroupName: string,
  vmScaleSetName: string,
  instanceId: string,
  options: VirtualMachineScaleSetVMExtensionsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/extensions{?api%2Dversion,%24expand}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vmScaleSetName: vmScaleSetName,
      instanceId: instanceId,
      "api%2Dversion": "2025-04-01",
      "%24expand": options?.expand,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeVirtualMachineScaleSetVMExtensionsListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeVirtualMachineScaleSetVMExtensionsListResultDeserializer(result.body);
}

/** The operation to get all extensions of an instance in Virtual Machine Scaleset. */
export async function list(
  context: Client,
  resourceGroupName: string,
  vmScaleSetName: string,
  instanceId: string,
  options: VirtualMachineScaleSetVMExtensionsListOptionalParams = { requestOptions: {} },
): Promise<ComputeVirtualMachineScaleSetVMExtensionsListResult> {
  const result = await _listSend(context, resourceGroupName, vmScaleSetName, instanceId, options);
  return _listDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  vmScaleSetName: string,
  instanceId: string,
  vmExtensionName: string,
  options: VirtualMachineScaleSetVMExtensionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/extensions/{vmExtensionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vmScaleSetName: vmScaleSetName,
      instanceId: instanceId,
      vmExtensionName: vmExtensionName,
      "api%2Dversion": "2025-04-01",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/** The operation to delete the VMSS VM extension. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  vmScaleSetName: string,
  instanceId: string,
  vmExtensionName: string,
  options: VirtualMachineScaleSetVMExtensionsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        vmExtensionName,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: "2025-04-01",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  vmScaleSetName: string,
  instanceId: string,
  vmExtensionName: string,
  extensionParameters: ComputeVirtualMachineScaleSetVMExtensionUpdate,
  options: VirtualMachineScaleSetVMExtensionsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/extensions/{vmExtensionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vmScaleSetName: vmScaleSetName,
      instanceId: instanceId,
      vmExtensionName: vmExtensionName,
      "api%2Dversion": "2025-04-01",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: computeVirtualMachineScaleSetVMExtensionUpdateSerializer(extensionParameters),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeVirtualMachineScaleSetVMExtension> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeVirtualMachineScaleSetVMExtensionDeserializer(result.body);
}

/** The operation to update the VMSS VM extension. */
export function update(
  context: Client,
  resourceGroupName: string,
  vmScaleSetName: string,
  instanceId: string,
  vmExtensionName: string,
  extensionParameters: ComputeVirtualMachineScaleSetVMExtensionUpdate,
  options: VirtualMachineScaleSetVMExtensionsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<ComputeVirtualMachineScaleSetVMExtension>,
  ComputeVirtualMachineScaleSetVMExtension
> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        vmExtensionName,
        extensionParameters,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: "2025-04-01",
  }) as PollerLike<
    OperationState<ComputeVirtualMachineScaleSetVMExtension>,
    ComputeVirtualMachineScaleSetVMExtension
  >;
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  vmScaleSetName: string,
  instanceId: string,
  vmExtensionName: string,
  extensionParameters: ComputeVirtualMachineScaleSetVMExtension,
  options: VirtualMachineScaleSetVMExtensionsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/extensions/{vmExtensionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vmScaleSetName: vmScaleSetName,
      instanceId: instanceId,
      vmExtensionName: vmExtensionName,
      "api%2Dversion": "2025-04-01",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: computeVirtualMachineScaleSetVMExtensionSerializer(extensionParameters),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeVirtualMachineScaleSetVMExtension> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeVirtualMachineScaleSetVMExtensionDeserializer(result.body);
}

/** The operation to create or update the VMSS VM extension. */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  vmScaleSetName: string,
  instanceId: string,
  vmExtensionName: string,
  extensionParameters: ComputeVirtualMachineScaleSetVMExtension,
  options: VirtualMachineScaleSetVMExtensionsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<ComputeVirtualMachineScaleSetVMExtension>,
  ComputeVirtualMachineScaleSetVMExtension
> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        vmExtensionName,
        extensionParameters,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: "2025-04-01",
  }) as PollerLike<
    OperationState<ComputeVirtualMachineScaleSetVMExtension>,
    ComputeVirtualMachineScaleSetVMExtension
  >;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  vmScaleSetName: string,
  instanceId: string,
  vmExtensionName: string,
  options: VirtualMachineScaleSetVMExtensionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/extensions/{vmExtensionName}{?api%2Dversion,%24expand}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vmScaleSetName: vmScaleSetName,
      instanceId: instanceId,
      vmExtensionName: vmExtensionName,
      "api%2Dversion": "2025-04-01",
      "%24expand": options?.expand,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeVirtualMachineScaleSetVMExtension> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeVirtualMachineScaleSetVMExtensionDeserializer(result.body);
}

/** The operation to get the VMSS VM extension. */
export async function get(
  context: Client,
  resourceGroupName: string,
  vmScaleSetName: string,
  instanceId: string,
  vmExtensionName: string,
  options: VirtualMachineScaleSetVMExtensionsGetOptionalParams = { requestOptions: {} },
): Promise<ComputeVirtualMachineScaleSetVMExtension> {
  const result = await _getSend(
    context,
    resourceGroupName,
    vmScaleSetName,
    instanceId,
    vmExtensionName,
    options,
  );
  return _getDeserialize(result);
}
