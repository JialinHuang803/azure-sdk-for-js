// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext as Client } from "../index.js";
import { commonCloudErrorDeserializer } from "../../models/common/models.js";
import {
  ComputeVirtualMachineScaleSetExtension,
  computeVirtualMachineScaleSetExtensionSerializer,
  computeVirtualMachineScaleSetExtensionDeserializer,
  ComputeVirtualMachineScaleSetExtensionUpdate,
  computeVirtualMachineScaleSetExtensionUpdateSerializer,
  _ComputeVirtualMachineScaleSetExtensionListResult,
  _computeVirtualMachineScaleSetExtensionListResultDeserializer,
} from "../../models/compute/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  VirtualMachineScaleSetExtensionsListOptionalParams,
  VirtualMachineScaleSetExtensionsDeleteOptionalParams,
  VirtualMachineScaleSetExtensionsUpdateOptionalParams,
  VirtualMachineScaleSetExtensionsCreateOrUpdateOptionalParams,
  VirtualMachineScaleSetExtensionsGetOptionalParams,
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
  options: VirtualMachineScaleSetExtensionsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vmScaleSetName: vmScaleSetName,
      "api%2Dversion": "2025-04-01",
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
): Promise<_ComputeVirtualMachineScaleSetExtensionListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return _computeVirtualMachineScaleSetExtensionListResultDeserializer(result.body);
}

/** Gets a list of all extensions in a VM scale set. */
export function list(
  context: Client,
  resourceGroupName: string,
  vmScaleSetName: string,
  options: VirtualMachineScaleSetExtensionsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ComputeVirtualMachineScaleSetExtension> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, resourceGroupName, vmScaleSetName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: "2025-04-01" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  vmScaleSetName: string,
  vmssExtensionName: string,
  options: VirtualMachineScaleSetExtensionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vmScaleSetName: vmScaleSetName,
      vmssExtensionName: vmssExtensionName,
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

/** The operation to delete the extension. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  vmScaleSetName: string,
  vmssExtensionName: string,
  options: VirtualMachineScaleSetExtensionsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(context, resourceGroupName, vmScaleSetName, vmssExtensionName, options),
    resourceLocationConfig: "location",
    apiVersion: "2025-04-01",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  vmScaleSetName: string,
  vmssExtensionName: string,
  extensionParameters: ComputeVirtualMachineScaleSetExtensionUpdate,
  options: VirtualMachineScaleSetExtensionsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vmScaleSetName: vmScaleSetName,
      vmssExtensionName: vmssExtensionName,
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
      body: computeVirtualMachineScaleSetExtensionUpdateSerializer(extensionParameters),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeVirtualMachineScaleSetExtension> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeVirtualMachineScaleSetExtensionDeserializer(result.body);
}

/** The operation to update an extension. */
export function update(
  context: Client,
  resourceGroupName: string,
  vmScaleSetName: string,
  vmssExtensionName: string,
  extensionParameters: ComputeVirtualMachineScaleSetExtensionUpdate,
  options: VirtualMachineScaleSetExtensionsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<ComputeVirtualMachineScaleSetExtension>,
  ComputeVirtualMachineScaleSetExtension
> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        resourceGroupName,
        vmScaleSetName,
        vmssExtensionName,
        extensionParameters,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: "2025-04-01",
  }) as PollerLike<
    OperationState<ComputeVirtualMachineScaleSetExtension>,
    ComputeVirtualMachineScaleSetExtension
  >;
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  vmScaleSetName: string,
  vmssExtensionName: string,
  extensionParameters: ComputeVirtualMachineScaleSetExtension,
  options: VirtualMachineScaleSetExtensionsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vmScaleSetName: vmScaleSetName,
      vmssExtensionName: vmssExtensionName,
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
      body: computeVirtualMachineScaleSetExtensionSerializer(extensionParameters),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeVirtualMachineScaleSetExtension> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeVirtualMachineScaleSetExtensionDeserializer(result.body);
}

/** The operation to create or update an extension. */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  vmScaleSetName: string,
  vmssExtensionName: string,
  extensionParameters: ComputeVirtualMachineScaleSetExtension,
  options: VirtualMachineScaleSetExtensionsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<ComputeVirtualMachineScaleSetExtension>,
  ComputeVirtualMachineScaleSetExtension
> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        resourceGroupName,
        vmScaleSetName,
        vmssExtensionName,
        extensionParameters,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: "2025-04-01",
  }) as PollerLike<
    OperationState<ComputeVirtualMachineScaleSetExtension>,
    ComputeVirtualMachineScaleSetExtension
  >;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  vmScaleSetName: string,
  vmssExtensionName: string,
  options: VirtualMachineScaleSetExtensionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName}{?api%2Dversion,%24expand}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vmScaleSetName: vmScaleSetName,
      vmssExtensionName: vmssExtensionName,
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
): Promise<ComputeVirtualMachineScaleSetExtension> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeVirtualMachineScaleSetExtensionDeserializer(result.body);
}

/** The operation to get the extension. */
export async function get(
  context: Client,
  resourceGroupName: string,
  vmScaleSetName: string,
  vmssExtensionName: string,
  options: VirtualMachineScaleSetExtensionsGetOptionalParams = { requestOptions: {} },
): Promise<ComputeVirtualMachineScaleSetExtension> {
  const result = await _getSend(
    context,
    resourceGroupName,
    vmScaleSetName,
    vmssExtensionName,
    options,
  );
  return _getDeserialize(result);
}
