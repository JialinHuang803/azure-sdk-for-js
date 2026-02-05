// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext as Client } from "../index.js";
import { commonCloudErrorDeserializer } from "../../models/common/models.js";
import {
  ComputeDiskGrantAccessData,
  computeDiskGrantAccessDataSerializer,
  ComputeDiskAccessUri,
  computeDiskAccessUriDeserializer,
  ComputeDiskDiskRestorePoint,
  computeDiskDiskRestorePointDeserializer,
  _ComputeDiskDiskRestorePointList,
  _computeDiskDiskRestorePointListDeserializer,
} from "../../models/computeDisk/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  DiskRestorePointRevokeAccessOptionalParams,
  DiskRestorePointGrantAccessOptionalParams,
  DiskRestorePointListByRestorePointOptionalParams,
  DiskRestorePointGetOptionalParams,
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
  restorePointCollectionName: string,
  vmRestorePointName: string,
  diskRestorePointName: string,
  options: DiskRestorePointRevokeAccessOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{vmRestorePointName}/diskRestorePoints/{diskRestorePointName}/endGetAccess{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      restorePointCollectionName: restorePointCollectionName,
      vmRestorePointName: vmRestorePointName,
      diskRestorePointName: diskRestorePointName,
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

/** Revokes access to a diskRestorePoint. */
export function revokeAccess(
  context: Client,
  resourceGroupName: string,
  restorePointCollectionName: string,
  vmRestorePointName: string,
  diskRestorePointName: string,
  options: DiskRestorePointRevokeAccessOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _revokeAccessDeserialize, ["202", "200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _revokeAccessSend(
        context,
        resourceGroupName,
        restorePointCollectionName,
        vmRestorePointName,
        diskRestorePointName,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: "2025-01-02",
  }) as PollerLike<OperationState<void>, void>;
}

export function _grantAccessSend(
  context: Client,
  resourceGroupName: string,
  restorePointCollectionName: string,
  vmRestorePointName: string,
  diskRestorePointName: string,
  grantAccessData: ComputeDiskGrantAccessData,
  options: DiskRestorePointGrantAccessOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{vmRestorePointName}/diskRestorePoints/{diskRestorePointName}/beginGetAccess{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      restorePointCollectionName: restorePointCollectionName,
      vmRestorePointName: vmRestorePointName,
      diskRestorePointName: diskRestorePointName,
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

/** Grants access to a diskRestorePoint. */
export function grantAccess(
  context: Client,
  resourceGroupName: string,
  restorePointCollectionName: string,
  vmRestorePointName: string,
  diskRestorePointName: string,
  grantAccessData: ComputeDiskGrantAccessData,
  options: DiskRestorePointGrantAccessOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ComputeDiskAccessUri>, ComputeDiskAccessUri> {
  return getLongRunningPoller(context, _grantAccessDeserialize, ["202", "200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _grantAccessSend(
        context,
        resourceGroupName,
        restorePointCollectionName,
        vmRestorePointName,
        diskRestorePointName,
        grantAccessData,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: "2025-01-02",
  }) as PollerLike<OperationState<ComputeDiskAccessUri>, ComputeDiskAccessUri>;
}

export function _listByRestorePointSend(
  context: Client,
  resourceGroupName: string,
  restorePointCollectionName: string,
  vmRestorePointName: string,
  options: DiskRestorePointListByRestorePointOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{vmRestorePointName}/diskRestorePoints{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      restorePointCollectionName: restorePointCollectionName,
      vmRestorePointName: vmRestorePointName,
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

export async function _listByRestorePointDeserialize(
  result: PathUncheckedResponse,
): Promise<_ComputeDiskDiskRestorePointList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return _computeDiskDiskRestorePointListDeserializer(result.body);
}

/** Lists diskRestorePoints under a vmRestorePoint. */
export function listByRestorePoint(
  context: Client,
  resourceGroupName: string,
  restorePointCollectionName: string,
  vmRestorePointName: string,
  options: DiskRestorePointListByRestorePointOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ComputeDiskDiskRestorePoint> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByRestorePointSend(
        context,
        resourceGroupName,
        restorePointCollectionName,
        vmRestorePointName,
        options,
      ),
    _listByRestorePointDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: "2025-01-02" },
  );
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  restorePointCollectionName: string,
  vmRestorePointName: string,
  diskRestorePointName: string,
  options: DiskRestorePointGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{vmRestorePointName}/diskRestorePoints/{diskRestorePointName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      restorePointCollectionName: restorePointCollectionName,
      vmRestorePointName: vmRestorePointName,
      diskRestorePointName: diskRestorePointName,
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

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeDiskDiskRestorePoint> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeDiskDiskRestorePointDeserializer(result.body);
}

/** Get disk restorePoint resource */
export async function get(
  context: Client,
  resourceGroupName: string,
  restorePointCollectionName: string,
  vmRestorePointName: string,
  diskRestorePointName: string,
  options: DiskRestorePointGetOptionalParams = { requestOptions: {} },
): Promise<ComputeDiskDiskRestorePoint> {
  const result = await _getSend(
    context,
    resourceGroupName,
    restorePointCollectionName,
    vmRestorePointName,
    diskRestorePointName,
    options,
  );
  return _getDeserialize(result);
}
