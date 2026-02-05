// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext as Client } from "../index.js";
import { commonCloudErrorDeserializer } from "../../models/common/models.js";
import {
  ComputeDedicatedHostGroup,
  computeDedicatedHostGroupSerializer,
  computeDedicatedHostGroupDeserializer,
  ComputeDedicatedHostGroupUpdate,
  computeDedicatedHostGroupUpdateSerializer,
  _ComputeDedicatedHostGroupListResult,
  _computeDedicatedHostGroupListResultDeserializer,
} from "../../models/compute/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  DedicatedHostGroupsListBySubscriptionOptionalParams,
  DedicatedHostGroupsListByResourceGroupOptionalParams,
  DedicatedHostGroupsDeleteOptionalParams,
  DedicatedHostGroupsUpdateOptionalParams,
  DedicatedHostGroupsCreateOrUpdateOptionalParams,
  DedicatedHostGroupsGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listBySubscriptionSend(
  context: Client,
  options: DedicatedHostGroupsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/hostGroups{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
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

export async function _listBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_ComputeDedicatedHostGroupListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return _computeDedicatedHostGroupListResultDeserializer(result.body);
}

/** Lists all of the dedicated host groups in the subscription. Use the nextLink property in the response to get the next page of dedicated host groups. */
export function listBySubscription(
  context: Client,
  options: DedicatedHostGroupsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ComputeDedicatedHostGroup> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, options),
    _listBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: "2025-04-01" },
  );
}

export function _listByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: DedicatedHostGroupsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
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

export async function _listByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_ComputeDedicatedHostGroupListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return _computeDedicatedHostGroupListResultDeserializer(result.body);
}

/** Lists all of the dedicated host groups in the specified resource group. Use the nextLink property in the response to get the next page of dedicated host groups. */
export function listByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: DedicatedHostGroupsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ComputeDedicatedHostGroup> {
  return buildPagedAsyncIterator(
    context,
    () => _listByResourceGroupSend(context, resourceGroupName, options),
    _listByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: "2025-04-01" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  hostGroupName: string,
  options: DedicatedHostGroupsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      hostGroupName: hostGroupName,
      "api%2Dversion": "2025-04-01",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a dedicated host group. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  resourceGroupName: string,
  hostGroupName: string,
  options: DedicatedHostGroupsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, resourceGroupName, hostGroupName, options);
  return _$deleteDeserialize(result);
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  hostGroupName: string,
  parameters: ComputeDedicatedHostGroupUpdate,
  options: DedicatedHostGroupsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      hostGroupName: hostGroupName,
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
      body: computeDedicatedHostGroupUpdateSerializer(parameters),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeDedicatedHostGroup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeDedicatedHostGroupDeserializer(result.body);
}

/** Update an dedicated host group. */
export async function update(
  context: Client,
  resourceGroupName: string,
  hostGroupName: string,
  parameters: ComputeDedicatedHostGroupUpdate,
  options: DedicatedHostGroupsUpdateOptionalParams = { requestOptions: {} },
): Promise<ComputeDedicatedHostGroup> {
  const result = await _updateSend(context, resourceGroupName, hostGroupName, parameters, options);
  return _updateDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  hostGroupName: string,
  parameters: ComputeDedicatedHostGroup,
  options: DedicatedHostGroupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      hostGroupName: hostGroupName,
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
      body: computeDedicatedHostGroupSerializer(parameters),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeDedicatedHostGroup> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeDedicatedHostGroupDeserializer(result.body);
}

/** Create or update a dedicated host group. For details of Dedicated Host and Dedicated Host Groups please see [Dedicated Host Documentation] (https://go.microsoft.com/fwlink/?linkid=2082596) */
export async function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  hostGroupName: string,
  parameters: ComputeDedicatedHostGroup,
  options: DedicatedHostGroupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<ComputeDedicatedHostGroup> {
  const result = await _createOrUpdateSend(
    context,
    resourceGroupName,
    hostGroupName,
    parameters,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  hostGroupName: string,
  options: DedicatedHostGroupsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}{?api%2Dversion,%24expand}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      hostGroupName: hostGroupName,
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
): Promise<ComputeDedicatedHostGroup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeDedicatedHostGroupDeserializer(result.body);
}

/** Retrieves information about a dedicated host group. */
export async function get(
  context: Client,
  resourceGroupName: string,
  hostGroupName: string,
  options: DedicatedHostGroupsGetOptionalParams = { requestOptions: {} },
): Promise<ComputeDedicatedHostGroup> {
  const result = await _getSend(context, resourceGroupName, hostGroupName, options);
  return _getDeserialize(result);
}
