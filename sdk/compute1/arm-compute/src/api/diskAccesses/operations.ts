// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext as Client } from "../index.js";
import { commonCloudErrorDeserializer } from "../../models/common/models.js";
import {
  ComputeDiskDiskAccess,
  computeDiskDiskAccessSerializer,
  computeDiskDiskAccessDeserializer,
  ComputeDiskPrivateEndpointConnection,
  computeDiskPrivateEndpointConnectionSerializer,
  computeDiskPrivateEndpointConnectionDeserializer,
  ComputeDiskDiskAccessUpdate,
  computeDiskDiskAccessUpdateSerializer,
  _ComputeDiskDiskAccessList,
  _computeDiskDiskAccessListDeserializer,
  ComputeDiskPrivateLinkResourceListResult,
  computeDiskPrivateLinkResourceListResultDeserializer,
  _ComputeDiskPrivateEndpointConnectionListResult,
  _computeDiskPrivateEndpointConnectionListResultDeserializer,
} from "../../models/computeDisk/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  DiskAccessesListPrivateEndpointConnectionsOptionalParams,
  DiskAccessesDeleteAPrivateEndpointConnectionOptionalParams,
  DiskAccessesUpdateAPrivateEndpointConnectionOptionalParams,
  DiskAccessesGetAPrivateEndpointConnectionOptionalParams,
  DiskAccessesGetPrivateLinkResourcesOptionalParams,
  DiskAccessesListOptionalParams,
  DiskAccessesListByResourceGroupOptionalParams,
  DiskAccessesDeleteOptionalParams,
  DiskAccessesUpdateOptionalParams,
  DiskAccessesCreateOrUpdateOptionalParams,
  DiskAccessesGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _listPrivateEndpointConnectionsSend(
  context: Client,
  resourceGroupName: string,
  diskAccessName: string,
  options: DiskAccessesListPrivateEndpointConnectionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}/privateEndpointConnections{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      diskAccessName: diskAccessName,
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

export async function _listPrivateEndpointConnectionsDeserialize(
  result: PathUncheckedResponse,
): Promise<_ComputeDiskPrivateEndpointConnectionListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return _computeDiskPrivateEndpointConnectionListResultDeserializer(result.body);
}

/** List information about private endpoint connections under a disk access resource */
export function listPrivateEndpointConnections(
  context: Client,
  resourceGroupName: string,
  diskAccessName: string,
  options: DiskAccessesListPrivateEndpointConnectionsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ComputeDiskPrivateEndpointConnection> {
  return buildPagedAsyncIterator(
    context,
    () => _listPrivateEndpointConnectionsSend(context, resourceGroupName, diskAccessName, options),
    _listPrivateEndpointConnectionsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: "2025-01-02" },
  );
}

export function _deleteAPrivateEndpointConnectionSend(
  context: Client,
  resourceGroupName: string,
  diskAccessName: string,
  privateEndpointConnectionName: string,
  options: DiskAccessesDeleteAPrivateEndpointConnectionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}/privateEndpointConnections/{privateEndpointConnectionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      diskAccessName: diskAccessName,
      privateEndpointConnectionName: privateEndpointConnectionName,
      "api%2Dversion": "2025-01-02",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteAPrivateEndpointConnectionDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes a private endpoint connection under a disk access resource. */
export function deleteAPrivateEndpointConnection(
  context: Client,
  resourceGroupName: string,
  diskAccessName: string,
  privateEndpointConnectionName: string,
  options: DiskAccessesDeleteAPrivateEndpointConnectionOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _deleteAPrivateEndpointConnectionDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _deleteAPrivateEndpointConnectionSend(
          context,
          resourceGroupName,
          diskAccessName,
          privateEndpointConnectionName,
          options,
        ),
      resourceLocationConfig: "location",
      apiVersion: "2025-01-02",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _updateAPrivateEndpointConnectionSend(
  context: Client,
  resourceGroupName: string,
  diskAccessName: string,
  privateEndpointConnectionName: string,
  privateEndpointConnection: ComputeDiskPrivateEndpointConnection,
  options: DiskAccessesUpdateAPrivateEndpointConnectionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}/privateEndpointConnections/{privateEndpointConnectionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      diskAccessName: diskAccessName,
      privateEndpointConnectionName: privateEndpointConnectionName,
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
      body: computeDiskPrivateEndpointConnectionSerializer(privateEndpointConnection),
    });
}

export async function _updateAPrivateEndpointConnectionDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeDiskPrivateEndpointConnection> {
  const expectedStatuses = ["200", "202", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeDiskPrivateEndpointConnectionDeserializer(result.body);
}

/** Approve or reject a private endpoint connection under disk access resource, this can't be used to create a new private endpoint connection. */
export function updateAPrivateEndpointConnection(
  context: Client,
  resourceGroupName: string,
  diskAccessName: string,
  privateEndpointConnectionName: string,
  privateEndpointConnection: ComputeDiskPrivateEndpointConnection,
  options: DiskAccessesUpdateAPrivateEndpointConnectionOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<ComputeDiskPrivateEndpointConnection>,
  ComputeDiskPrivateEndpointConnection
> {
  return getLongRunningPoller(
    context,
    _updateAPrivateEndpointConnectionDeserialize,
    ["200", "202", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _updateAPrivateEndpointConnectionSend(
          context,
          resourceGroupName,
          diskAccessName,
          privateEndpointConnectionName,
          privateEndpointConnection,
          options,
        ),
      resourceLocationConfig: "location",
      apiVersion: "2025-01-02",
    },
  ) as PollerLike<
    OperationState<ComputeDiskPrivateEndpointConnection>,
    ComputeDiskPrivateEndpointConnection
  >;
}

export function _getAPrivateEndpointConnectionSend(
  context: Client,
  resourceGroupName: string,
  diskAccessName: string,
  privateEndpointConnectionName: string,
  options: DiskAccessesGetAPrivateEndpointConnectionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}/privateEndpointConnections/{privateEndpointConnectionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      diskAccessName: diskAccessName,
      privateEndpointConnectionName: privateEndpointConnectionName,
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

export async function _getAPrivateEndpointConnectionDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeDiskPrivateEndpointConnection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeDiskPrivateEndpointConnectionDeserializer(result.body);
}

/** Gets information about a private endpoint connection under a disk access resource. */
export async function getAPrivateEndpointConnection(
  context: Client,
  resourceGroupName: string,
  diskAccessName: string,
  privateEndpointConnectionName: string,
  options: DiskAccessesGetAPrivateEndpointConnectionOptionalParams = { requestOptions: {} },
): Promise<ComputeDiskPrivateEndpointConnection> {
  const result = await _getAPrivateEndpointConnectionSend(
    context,
    resourceGroupName,
    diskAccessName,
    privateEndpointConnectionName,
    options,
  );
  return _getAPrivateEndpointConnectionDeserialize(result);
}

export function _getPrivateLinkResourcesSend(
  context: Client,
  resourceGroupName: string,
  diskAccessName: string,
  options: DiskAccessesGetPrivateLinkResourcesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}/privatelinkresources{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      diskAccessName: diskAccessName,
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

export async function _getPrivateLinkResourcesDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeDiskPrivateLinkResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeDiskPrivateLinkResourceListResultDeserializer(result.body);
}

/** Gets the private link resources possible under disk access resource */
export async function getPrivateLinkResources(
  context: Client,
  resourceGroupName: string,
  diskAccessName: string,
  options: DiskAccessesGetPrivateLinkResourcesOptionalParams = { requestOptions: {} },
): Promise<ComputeDiskPrivateLinkResourceListResult> {
  const result = await _getPrivateLinkResourcesSend(
    context,
    resourceGroupName,
    diskAccessName,
    options,
  );
  return _getPrivateLinkResourcesDeserialize(result);
}

export function _listSend(
  context: Client,
  options: DiskAccessesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/diskAccesses{?api%2Dversion}",
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
): Promise<_ComputeDiskDiskAccessList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return _computeDiskDiskAccessListDeserializer(result.body);
}

/** Lists all the disk access resources under a subscription. */
export function list(
  context: Client,
  options: DiskAccessesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ComputeDiskDiskAccess> {
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
  options: DiskAccessesListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses{?api%2Dversion}",
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
): Promise<_ComputeDiskDiskAccessList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return _computeDiskDiskAccessListDeserializer(result.body);
}

/** Lists all the disk access resources under a resource group. */
export function listByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: DiskAccessesListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ComputeDiskDiskAccess> {
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
  diskAccessName: string,
  options: DiskAccessesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      diskAccessName: diskAccessName,
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

/** Deletes a disk access resource. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  diskAccessName: string,
  options: DiskAccessesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _$deleteSend(context, resourceGroupName, diskAccessName, options),
    resourceLocationConfig: "location",
    apiVersion: "2025-01-02",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  diskAccessName: string,
  diskAccess: ComputeDiskDiskAccessUpdate,
  options: DiskAccessesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      diskAccessName: diskAccessName,
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
      body: computeDiskDiskAccessUpdateSerializer(diskAccess),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeDiskDiskAccess> {
  const expectedStatuses = ["200", "202", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeDiskDiskAccessDeserializer(result.body);
}

/** Updates (patches) a disk access resource. */
export function update(
  context: Client,
  resourceGroupName: string,
  diskAccessName: string,
  diskAccess: ComputeDiskDiskAccessUpdate,
  options: DiskAccessesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ComputeDiskDiskAccess>, ComputeDiskDiskAccess> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(context, resourceGroupName, diskAccessName, diskAccess, options),
    resourceLocationConfig: "location",
    apiVersion: "2025-01-02",
  }) as PollerLike<OperationState<ComputeDiskDiskAccess>, ComputeDiskDiskAccess>;
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  diskAccessName: string,
  diskAccess: ComputeDiskDiskAccess,
  options: DiskAccessesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      diskAccessName: diskAccessName,
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
      body: computeDiskDiskAccessSerializer(diskAccess),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeDiskDiskAccess> {
  const expectedStatuses = ["200", "202", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeDiskDiskAccessDeserializer(result.body);
}

/** Creates or updates a disk access resource */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  diskAccessName: string,
  diskAccess: ComputeDiskDiskAccess,
  options: DiskAccessesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ComputeDiskDiskAccess>, ComputeDiskDiskAccess> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "202", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(context, resourceGroupName, diskAccessName, diskAccess, options),
    resourceLocationConfig: "location",
    apiVersion: "2025-01-02",
  }) as PollerLike<OperationState<ComputeDiskDiskAccess>, ComputeDiskDiskAccess>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  diskAccessName: string,
  options: DiskAccessesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      diskAccessName: diskAccessName,
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
): Promise<ComputeDiskDiskAccess> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeDiskDiskAccessDeserializer(result.body);
}

/** Gets information about a disk access resource. */
export async function get(
  context: Client,
  resourceGroupName: string,
  diskAccessName: string,
  options: DiskAccessesGetOptionalParams = { requestOptions: {} },
): Promise<ComputeDiskDiskAccess> {
  const result = await _getSend(context, resourceGroupName, diskAccessName, options);
  return _getDeserialize(result);
}
