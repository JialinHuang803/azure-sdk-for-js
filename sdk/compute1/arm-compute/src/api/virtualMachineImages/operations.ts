// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext as Client } from "../index.js";
import { commonCloudErrorDeserializer } from "../../models/common/models.js";
import {
  ComputeVirtualMachineImageResource,
  ComputeVirtualMachineImage,
  computeVirtualMachineImageDeserializer,
  ComputeVmImagesInEdgeZoneListResult,
  computeVmImagesInEdgeZoneListResultDeserializer,
  computeVirtualMachineImageResourceArrayDeserializer,
  computeVirtualMachineImageArrayDeserializer,
} from "../../models/compute/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  VirtualMachineImagesGetOptionalParams,
  VirtualMachineImagesListWithPropertiesOptionalParams,
  VirtualMachineImagesListOptionalParams,
  VirtualMachineImagesListSkusOptionalParams,
  VirtualMachineImagesListOffersOptionalParams,
  VirtualMachineImagesListPublishersOptionalParams,
  VirtualMachineImagesListByEdgeZoneOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getSend(
  context: Client,
  location: string,
  publisherName: string,
  offer: string,
  skus: string,
  version: string,
  options: VirtualMachineImagesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus/{skus}/versions/{version}{?api%2Dversion}",
    {
      location: location,
      publisherName: publisherName,
      offer: offer,
      skus: skus,
      version: version,
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

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeVirtualMachineImage> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeVirtualMachineImageDeserializer(result.body);
}

/** Gets a virtual machine image. */
export async function get(
  context: Client,
  location: string,
  publisherName: string,
  offer: string,
  skus: string,
  version: string,
  options: VirtualMachineImagesGetOptionalParams = { requestOptions: {} },
): Promise<ComputeVirtualMachineImage> {
  const result = await _getSend(context, location, publisherName, offer, skus, version, options);
  return _getDeserialize(result);
}

export function _listWithPropertiesSend(
  context: Client,
  location: string,
  publisherName: string,
  offer: string,
  skus: string,
  expand: string,
  options: VirtualMachineImagesListWithPropertiesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus/{skus}/versions?$expand=Properties{?api%2Dversion,%24expand,%24top,%24orderby}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      publisherName: publisherName,
      offer: offer,
      skus: skus,
      "api%2Dversion": "2025-04-01",
      "%24expand": expand,
      "%24top": options?.top,
      "%24orderby": options?.orderby,
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

export async function _listWithPropertiesDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeVirtualMachineImage[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeVirtualMachineImageArrayDeserializer(result.body);
}

export async function listWithProperties(
  context: Client,
  location: string,
  publisherName: string,
  offer: string,
  skus: string,
  expand: string,
  options: VirtualMachineImagesListWithPropertiesOptionalParams = { requestOptions: {} },
): Promise<ComputeVirtualMachineImage[]> {
  const result = await _listWithPropertiesSend(
    context,
    location,
    publisherName,
    offer,
    skus,
    expand,
    options,
  );
  return _listWithPropertiesDeserialize(result);
}

export function _listSend(
  context: Client,
  location: string,
  publisherName: string,
  offer: string,
  skus: string,
  options: VirtualMachineImagesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus/{skus}/versions{?api%2Dversion,%24expand,%24top,%24orderby}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      publisherName: publisherName,
      offer: offer,
      skus: skus,
      "api%2Dversion": "2025-04-01",
      "%24expand": options?.expand,
      "%24top": options?.top,
      "%24orderby": options?.orderby,
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
): Promise<ComputeVirtualMachineImageResource[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeVirtualMachineImageResourceArrayDeserializer(result.body);
}

/** Gets a list of all virtual machine image versions for the specified location, publisher, offer, and SKU. */
export async function list(
  context: Client,
  location: string,
  publisherName: string,
  offer: string,
  skus: string,
  options: VirtualMachineImagesListOptionalParams = { requestOptions: {} },
): Promise<ComputeVirtualMachineImageResource[]> {
  const result = await _listSend(context, location, publisherName, offer, skus, options);
  return _listDeserialize(result);
}

export function _listSkusSend(
  context: Client,
  location: string,
  publisherName: string,
  offer: string,
  options: VirtualMachineImagesListSkusOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      publisherName: publisherName,
      offer: offer,
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

export async function _listSkusDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeVirtualMachineImageResource[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeVirtualMachineImageResourceArrayDeserializer(result.body);
}

/** Gets a list of virtual machine image SKUs for the specified location, publisher, and offer. */
export async function listSkus(
  context: Client,
  location: string,
  publisherName: string,
  offer: string,
  options: VirtualMachineImagesListSkusOptionalParams = { requestOptions: {} },
): Promise<ComputeVirtualMachineImageResource[]> {
  const result = await _listSkusSend(context, location, publisherName, offer, options);
  return _listSkusDeserialize(result);
}

export function _listOffersSend(
  context: Client,
  location: string,
  publisherName: string,
  options: VirtualMachineImagesListOffersOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      publisherName: publisherName,
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

export async function _listOffersDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeVirtualMachineImageResource[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeVirtualMachineImageResourceArrayDeserializer(result.body);
}

/** Gets a list of virtual machine image offers for the specified location and publisher. */
export async function listOffers(
  context: Client,
  location: string,
  publisherName: string,
  options: VirtualMachineImagesListOffersOptionalParams = { requestOptions: {} },
): Promise<ComputeVirtualMachineImageResource[]> {
  const result = await _listOffersSend(context, location, publisherName, options);
  return _listOffersDeserialize(result);
}

export function _listPublishersSend(
  context: Client,
  location: string,
  options: VirtualMachineImagesListPublishersOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
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

export async function _listPublishersDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeVirtualMachineImageResource[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeVirtualMachineImageResourceArrayDeserializer(result.body);
}

/** Gets a list of virtual machine image publishers for the specified Azure location. */
export async function listPublishers(
  context: Client,
  location: string,
  options: VirtualMachineImagesListPublishersOptionalParams = { requestOptions: {} },
): Promise<ComputeVirtualMachineImageResource[]> {
  const result = await _listPublishersSend(context, location, options);
  return _listPublishersDeserialize(result);
}

export function _listByEdgeZoneSend(
  context: Client,
  location: string,
  edgeZone: string,
  options: VirtualMachineImagesListByEdgeZoneOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/edgeZones/{edgeZone}/vmimages{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      edgeZone: edgeZone,
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

export async function _listByEdgeZoneDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeVmImagesInEdgeZoneListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = commonCloudErrorDeserializer(result.body);
    throw error;
  }

  return computeVmImagesInEdgeZoneListResultDeserializer(result.body);
}

/** Gets a list of all virtual machine image versions for the specified edge zone */
export async function listByEdgeZone(
  context: Client,
  location: string,
  edgeZone: string,
  options: VirtualMachineImagesListByEdgeZoneOptionalParams = { requestOptions: {} },
): Promise<ComputeVmImagesInEdgeZoneListResult> {
  const result = await _listByEdgeZoneSend(context, location, edgeZone, options);
  return _listByEdgeZoneDeserialize(result);
}
