// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext as Client } from "../index.js";
import { commonCloudErrorDeserializer } from "../../models/common/models.js";
import {
  ComputeProximityPlacementGroup,
  computeProximityPlacementGroupSerializer,
  computeProximityPlacementGroupDeserializer,
  ComputeProximityPlacementGroupUpdate,
  computeProximityPlacementGroupUpdateSerializer,
  _ComputeProximityPlacementGroupListResult,
  _computeProximityPlacementGroupListResultDeserializer,
} from "../../models/compute/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  ProximityPlacementGroupsListBySubscriptionOptionalParams,
  ProximityPlacementGroupsListByResourceGroupOptionalParams,
  ProximityPlacementGroupsDeleteOptionalParams,
  ProximityPlacementGroupsUpdateOptionalParams,
  ProximityPlacementGroupsCreateOrUpdateOptionalParams,
  ProximityPlacementGroupsGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listBySubscriptionSend(
  context: Client,
  options: ProximityPlacementGroupsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/proximityPlacementGroups{?api%2Dversion}",
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
): Promise<_ComputeProximityPlacementGroupListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return _computeProximityPlacementGroupListResultDeserializer(result.body);
}

/** Lists all proximity placement groups in a subscription. */
export function listBySubscription(
  context: Client,
  options: ProximityPlacementGroupsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ComputeProximityPlacementGroup> {
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
  options: ProximityPlacementGroupsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups{?api%2Dversion}",
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
): Promise<_ComputeProximityPlacementGroupListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return _computeProximityPlacementGroupListResultDeserializer(result.body);
}

/** Lists all proximity placement groups in a resource group. */
export function listByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: ProximityPlacementGroupsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ComputeProximityPlacementGroup> {
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
  proximityPlacementGroupName: string,
  options: ProximityPlacementGroupsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups/{proximityPlacementGroupName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      proximityPlacementGroupName: proximityPlacementGroupName,
      "api%2Dversion": "2025-04-01",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a proximity placement group. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  resourceGroupName: string,
  proximityPlacementGroupName: string,
  options: ProximityPlacementGroupsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(
    context,
    resourceGroupName,
    proximityPlacementGroupName,
    options,
  );
  return _$deleteDeserialize(result);
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  proximityPlacementGroupName: string,
  parameters: ComputeProximityPlacementGroupUpdate,
  options: ProximityPlacementGroupsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups/{proximityPlacementGroupName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      proximityPlacementGroupName: proximityPlacementGroupName,
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
      body: computeProximityPlacementGroupUpdateSerializer(parameters),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeProximityPlacementGroup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeProximityPlacementGroupDeserializer(result.body);
}

/** Update a proximity placement group. */
export async function update(
  context: Client,
  resourceGroupName: string,
  proximityPlacementGroupName: string,
  parameters: ComputeProximityPlacementGroupUpdate,
  options: ProximityPlacementGroupsUpdateOptionalParams = { requestOptions: {} },
): Promise<ComputeProximityPlacementGroup> {
  const result = await _updateSend(
    context,
    resourceGroupName,
    proximityPlacementGroupName,
    parameters,
    options,
  );
  return _updateDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  proximityPlacementGroupName: string,
  parameters: ComputeProximityPlacementGroup,
  options: ProximityPlacementGroupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups/{proximityPlacementGroupName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      proximityPlacementGroupName: proximityPlacementGroupName,
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
      body: computeProximityPlacementGroupSerializer(parameters),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeProximityPlacementGroup> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeProximityPlacementGroupDeserializer(result.body);
}

/** Create or update a proximity placement group. */
export async function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  proximityPlacementGroupName: string,
  parameters: ComputeProximityPlacementGroup,
  options: ProximityPlacementGroupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<ComputeProximityPlacementGroup> {
  const result = await _createOrUpdateSend(
    context,
    resourceGroupName,
    proximityPlacementGroupName,
    parameters,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  proximityPlacementGroupName: string,
  options: ProximityPlacementGroupsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups/{proximityPlacementGroupName}{?api%2Dversion,includeColocationStatus}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      proximityPlacementGroupName: proximityPlacementGroupName,
      "api%2Dversion": "2025-04-01",
      includeColocationStatus: options?.includeColocationStatus,
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
): Promise<ComputeProximityPlacementGroup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeProximityPlacementGroupDeserializer(result.body);
}

/** Retrieves information about a proximity placement group . */
export async function get(
  context: Client,
  resourceGroupName: string,
  proximityPlacementGroupName: string,
  options: ProximityPlacementGroupsGetOptionalParams = { requestOptions: {} },
): Promise<ComputeProximityPlacementGroup> {
  const result = await _getSend(context, resourceGroupName, proximityPlacementGroupName, options);
  return _getDeserialize(result);
}
