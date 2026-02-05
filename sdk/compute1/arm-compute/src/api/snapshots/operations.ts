// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext as Client } from "../index.js";
import { commonCloudErrorDeserializer } from "../../models/common/models.js";
import {
  ComputeDiskGrantAccessData,
  computeDiskGrantAccessDataSerializer,
  ComputeDiskAccessUri,
  computeDiskAccessUriDeserializer,
  ComputeDiskSnapshot,
  computeDiskSnapshotSerializer,
  computeDiskSnapshotDeserializer,
  ComputeDiskSnapshotUpdate,
  computeDiskSnapshotUpdateSerializer,
  _ComputeDiskSnapshotList,
  _computeDiskSnapshotListDeserializer,
} from "../../models/computeDisk/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  SnapshotsRevokeAccessOptionalParams,
  SnapshotsGrantAccessOptionalParams,
  SnapshotsListOptionalParams,
  SnapshotsListByResourceGroupOptionalParams,
  SnapshotsDeleteOptionalParams,
  SnapshotsUpdateOptionalParams,
  SnapshotsCreateOrUpdateOptionalParams,
  SnapshotsGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _revokeAccessSend(
  context: Client,
  resourceGroupName: string,
  snapshotName: string,
  options: SnapshotsRevokeAccessOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}/endGetAccess{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      snapshotName: snapshotName,
      "api%2Dversion": "2025-01-02",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({ ...operationOptionsToRequestParameters(options) });
}

export async function _revokeAccessDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/** Revokes access to a snapshot. */
export function revokeAccess(
  context: Client,
  resourceGroupName: string,
  snapshotName: string,
  options: SnapshotsRevokeAccessOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _revokeAccessDeserialize, ["202", "200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _revokeAccessSend(context, resourceGroupName, snapshotName, options),
    resourceLocationConfig: "location",
    apiVersion: "2025-01-02",
  }) as PollerLike<OperationState<void>, void>;
}

export function _grantAccessSend(
  context: Client,
  resourceGroupName: string,
  snapshotName: string,
  grantAccessData: ComputeDiskGrantAccessData,
  options: SnapshotsGrantAccessOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}/beginGetAccess{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      snapshotName: snapshotName,
      "api%2Dversion": "2025-01-02",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: computeDiskGrantAccessDataSerializer(grantAccessData),
    });
}

export async function _grantAccessDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeDiskAccessUri> {
  const expectedStatuses = ["202", "200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeDiskAccessUriDeserializer(result.body);
}

/** Grants access to a snapshot. */
export function grantAccess(
  context: Client,
  resourceGroupName: string,
  snapshotName: string,
  grantAccessData: ComputeDiskGrantAccessData,
  options: SnapshotsGrantAccessOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ComputeDiskAccessUri>, ComputeDiskAccessUri> {
  return getLongRunningPoller(context, _grantAccessDeserialize, ["202", "200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _grantAccessSend(context, resourceGroupName, snapshotName, grantAccessData, options),
    resourceLocationConfig: "location",
    apiVersion: "2025-01-02",
  }) as PollerLike<OperationState<ComputeDiskAccessUri>, ComputeDiskAccessUri>;
}

export function _listSend(
  context: Client,
  options: SnapshotsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/snapshots{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      "api%2Dversion": "2025-01-02",
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
): Promise<_ComputeDiskSnapshotList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return _computeDiskSnapshotListDeserializer(result.body);
}

/** Lists snapshots under a subscription. */
export function list(
  context: Client,
  options: SnapshotsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ComputeDiskSnapshot> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: "2025-01-02" },
  );
}

export function _listByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: SnapshotsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      "api%2Dversion": "2025-01-02",
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
): Promise<_ComputeDiskSnapshotList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return _computeDiskSnapshotListDeserializer(result.body);
}

/** Lists snapshots under a resource group. */
export function listByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: SnapshotsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ComputeDiskSnapshot> {
  return buildPagedAsyncIterator(
    context,
    () => _listByResourceGroupSend(context, resourceGroupName, options),
    _listByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: "2025-01-02" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  snapshotName: string,
  options: SnapshotsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      snapshotName: snapshotName,
      "api%2Dversion": "2025-01-02",
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

/** Deletes a snapshot. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  snapshotName: string,
  options: SnapshotsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _$deleteSend(context, resourceGroupName, snapshotName, options),
    resourceLocationConfig: "location",
    apiVersion: "2025-01-02",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  snapshotName: string,
  snapshot: ComputeDiskSnapshotUpdate,
  options: SnapshotsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      snapshotName: snapshotName,
      "api%2Dversion": "2025-01-02",
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
      body: computeDiskSnapshotUpdateSerializer(snapshot),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeDiskSnapshot> {
  const expectedStatuses = ["200", "202", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeDiskSnapshotDeserializer(result.body);
}

/** Updates (patches) a snapshot. */
export function update(
  context: Client,
  resourceGroupName: string,
  snapshotName: string,
  snapshot: ComputeDiskSnapshotUpdate,
  options: SnapshotsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ComputeDiskSnapshot>, ComputeDiskSnapshot> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(context, resourceGroupName, snapshotName, snapshot, options),
    resourceLocationConfig: "location",
    apiVersion: "2025-01-02",
  }) as PollerLike<OperationState<ComputeDiskSnapshot>, ComputeDiskSnapshot>;
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  snapshotName: string,
  snapshot: ComputeDiskSnapshot,
  options: SnapshotsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      snapshotName: snapshotName,
      "api%2Dversion": "2025-01-02",
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
      body: computeDiskSnapshotSerializer(snapshot),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeDiskSnapshot> {
  const expectedStatuses = ["200", "202", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeDiskSnapshotDeserializer(result.body);
}

/** Creates or updates a snapshot. */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  snapshotName: string,
  snapshot: ComputeDiskSnapshot,
  options: SnapshotsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ComputeDiskSnapshot>, ComputeDiskSnapshot> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "202", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(context, resourceGroupName, snapshotName, snapshot, options),
    resourceLocationConfig: "location",
    apiVersion: "2025-01-02",
  }) as PollerLike<OperationState<ComputeDiskSnapshot>, ComputeDiskSnapshot>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  snapshotName: string,
  options: SnapshotsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      snapshotName: snapshotName,
      "api%2Dversion": "2025-01-02",
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

export async function _getDeserialize(result: PathUncheckedResponse): Promise<ComputeDiskSnapshot> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeDiskSnapshotDeserializer(result.body);
}

/** Gets information about a snapshot. */
export async function get(
  context: Client,
  resourceGroupName: string,
  snapshotName: string,
  options: SnapshotsGetOptionalParams = { requestOptions: {} },
): Promise<ComputeDiskSnapshot> {
  const result = await _getSend(context, resourceGroupName, snapshotName, options);
  return _getDeserialize(result);
}
