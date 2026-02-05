// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext as Client } from "../index.js";
import { commonCloudErrorDeserializer } from "../../models/common/models.js";
import {
  ComputeCapacityReservation,
  computeCapacityReservationSerializer,
  computeCapacityReservationDeserializer,
  ComputeCapacityReservationUpdate,
  computeCapacityReservationUpdateSerializer,
  _ComputeCapacityReservationListResult,
  _computeCapacityReservationListResultDeserializer,
} from "../../models/compute/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  CapacityReservationsListByCapacityReservationGroupOptionalParams,
  CapacityReservationsDeleteOptionalParams,
  CapacityReservationsUpdateOptionalParams,
  CapacityReservationsCreateOrUpdateOptionalParams,
  CapacityReservationsGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _listByCapacityReservationGroupSend(
  context: Client,
  resourceGroupName: string,
  capacityReservationGroupName: string,
  options: CapacityReservationsListByCapacityReservationGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}/capacityReservations{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      capacityReservationGroupName: capacityReservationGroupName,
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

export async function _listByCapacityReservationGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_ComputeCapacityReservationListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return _computeCapacityReservationListResultDeserializer(result.body);
}

/** Lists all of the capacity reservations in the specified capacity reservation group. Use the nextLink property in the response to get the next page of capacity reservations. */
export function listByCapacityReservationGroup(
  context: Client,
  resourceGroupName: string,
  capacityReservationGroupName: string,
  options: CapacityReservationsListByCapacityReservationGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ComputeCapacityReservation> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByCapacityReservationGroupSend(
        context,
        resourceGroupName,
        capacityReservationGroupName,
        options,
      ),
    _listByCapacityReservationGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: "2025-04-01" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  capacityReservationGroupName: string,
  capacityReservationName: string,
  options: CapacityReservationsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}/capacityReservations/{capacityReservationName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      capacityReservationGroupName: capacityReservationGroupName,
      capacityReservationName: capacityReservationName,
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

/** The operation to delete a capacity reservation. This operation is allowed only when all the associated resources are disassociated from the capacity reservation. Please refer to https://aka.ms/CapacityReservation for more details. Note: Block capacity reservations cannot be deleted after it has been successfully allocated until the schedule end time. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  capacityReservationGroupName: string,
  capacityReservationName: string,
  options: CapacityReservationsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        resourceGroupName,
        capacityReservationGroupName,
        capacityReservationName,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: "2025-04-01",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  capacityReservationGroupName: string,
  capacityReservationName: string,
  parameters: ComputeCapacityReservationUpdate,
  options: CapacityReservationsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}/capacityReservations/{capacityReservationName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      capacityReservationGroupName: capacityReservationGroupName,
      capacityReservationName: capacityReservationName,
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
      body: computeCapacityReservationUpdateSerializer(parameters),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeCapacityReservation> {
  const expectedStatuses = ["200", "202", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeCapacityReservationDeserializer(result.body);
}

/** The operation to update a capacity reservation. */
export function update(
  context: Client,
  resourceGroupName: string,
  capacityReservationGroupName: string,
  capacityReservationName: string,
  parameters: ComputeCapacityReservationUpdate,
  options: CapacityReservationsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ComputeCapacityReservation>, ComputeCapacityReservation> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        resourceGroupName,
        capacityReservationGroupName,
        capacityReservationName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: "2025-04-01",
  }) as PollerLike<OperationState<ComputeCapacityReservation>, ComputeCapacityReservation>;
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  capacityReservationGroupName: string,
  capacityReservationName: string,
  parameters: ComputeCapacityReservation,
  options: CapacityReservationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}/capacityReservations/{capacityReservationName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      capacityReservationGroupName: capacityReservationGroupName,
      capacityReservationName: capacityReservationName,
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
      body: computeCapacityReservationSerializer(parameters),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeCapacityReservation> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeCapacityReservationDeserializer(result.body);
}

/** The operation to create or update a capacity reservation. Please note some properties can be set only during capacity reservation creation. Please refer to https://aka.ms/CapacityReservation for more details. */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  capacityReservationGroupName: string,
  capacityReservationName: string,
  parameters: ComputeCapacityReservation,
  options: CapacityReservationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ComputeCapacityReservation>, ComputeCapacityReservation> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        resourceGroupName,
        capacityReservationGroupName,
        capacityReservationName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: "2025-04-01",
  }) as PollerLike<OperationState<ComputeCapacityReservation>, ComputeCapacityReservation>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  capacityReservationGroupName: string,
  capacityReservationName: string,
  options: CapacityReservationsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}/capacityReservations/{capacityReservationName}{?api%2Dversion,%24expand}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      capacityReservationGroupName: capacityReservationGroupName,
      capacityReservationName: capacityReservationName,
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
): Promise<ComputeCapacityReservation> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeCapacityReservationDeserializer(result.body);
}

/** The operation that retrieves information about the capacity reservation. */
export async function get(
  context: Client,
  resourceGroupName: string,
  capacityReservationGroupName: string,
  capacityReservationName: string,
  options: CapacityReservationsGetOptionalParams = { requestOptions: {} },
): Promise<ComputeCapacityReservation> {
  const result = await _getSend(
    context,
    resourceGroupName,
    capacityReservationGroupName,
    capacityReservationName,
    options,
  );
  return _getDeserialize(result);
}
