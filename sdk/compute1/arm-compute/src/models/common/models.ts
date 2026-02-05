// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** An error response from the Compute service. */
export interface CommonCloudError {
  /** Api error. */
  error?: CommonApiError;
}

export function commonCloudErrorDeserializer(item: any): CommonCloudError {
  return {
    error: !item["error"] ? item["error"] : commonApiErrorDeserializer(item["error"]),
  };
}

/** Api error. */
export interface CommonApiError {
  /** The Api error details */
  details?: CommonApiErrorBase[];
  /** The Api inner error */
  innererror?: CommonInnerError;
  /** The error code. */
  code?: string;
  /** The target of the particular error. */
  target?: string;
  /** The error message. */
  message?: string;
}

export function commonApiErrorDeserializer(item: any): CommonApiError {
  return {
    details: !item["details"]
      ? item["details"]
      : commonApiErrorBaseArrayDeserializer(item["details"]),
    innererror: !item["innererror"]
      ? item["innererror"]
      : commonInnerErrorDeserializer(item["innererror"]),
    code: item["code"],
    target: item["target"],
    message: item["message"],
  };
}

export function commonApiErrorBaseArrayDeserializer(result: Array<CommonApiErrorBase>): any[] {
  return result.map((item) => {
    return commonApiErrorBaseDeserializer(item);
  });
}

/** Api error base. */
export interface CommonApiErrorBase {
  /** The error code. */
  code?: string;
  /** The target of the particular error. */
  target?: string;
  /** The error message. */
  message?: string;
}

export function commonApiErrorBaseDeserializer(item: any): CommonApiErrorBase {
  return {
    code: item["code"],
    target: item["target"],
    message: item["message"],
  };
}

/** Inner error details. */
export interface CommonInnerError {
  /** The exception type. */
  exceptiontype?: string;
  /** The internal error message or exception dump. */
  errordetail?: string;
}

export function commonInnerErrorDeserializer(item: any): CommonInnerError {
  return {
    exceptiontype: item["exceptiontype"],
    errordetail: item["errordetail"],
  };
}

/** model interface CommonSubResource */
export interface CommonSubResource {
  /** Resource Id */
  id?: string;
}

export function commonSubResourceSerializer(item: CommonSubResource): any {
  return { id: item["id"] };
}

export function commonSubResourceDeserializer(item: any): CommonSubResource {
  return {
    id: item["id"],
  };
}

/** This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are: **Windows,** **Linux.** */
export type CommonOperatingSystemTypes = "Windows" | "Linux";

export function commonSubResourceArraySerializer(result: Array<CommonSubResource>): any[] {
  return result.map((item) => {
    return commonSubResourceSerializer(item);
  });
}

export function commonSubResourceArrayDeserializer(result: Array<CommonSubResource>): any[] {
  return result.map((item) => {
    return commonSubResourceDeserializer(item);
  });
}

/** The type of identity used for the virtual machine scale set. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine scale set. */
export type CommonResourceIdentityType =
  | "SystemAssigned"
  | "UserAssigned"
  | "SystemAssigned, UserAssigned"
  | "None";

export function commonUserAssignedIdentitiesValueRecordSerializer(
  item: Record<string, CommonUserAssignedIdentitiesValue>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key] ? item[key] : commonUserAssignedIdentitiesValueSerializer(item[key]);
  });
  return result;
}

export function commonUserAssignedIdentitiesValueRecordDeserializer(
  item: Record<string, any>,
): Record<string, CommonUserAssignedIdentitiesValue> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key] ? item[key] : commonUserAssignedIdentitiesValueDeserializer(item[key]);
  });
  return result;
}

/** model interface CommonUserAssignedIdentitiesValue */
export interface CommonUserAssignedIdentitiesValue {
  /** The principal id of user assigned identity. */
  readonly principalId?: string;
  /** The client id of user assigned identity. */
  readonly clientId?: string;
}

export function commonUserAssignedIdentitiesValueSerializer(
  item: CommonUserAssignedIdentitiesValue,
): any {
  return item;
}

export function commonUserAssignedIdentitiesValueDeserializer(
  item: any,
): CommonUserAssignedIdentitiesValue {
  return {
    principalId: item["principalId"],
    clientId: item["clientId"],
  };
}

/** The complex type of the extended location. */
export interface CommonExtendedLocation {
  /** The name of the extended location. */
  name?: string;
  /** The type of the extended location. */
  type?: CommonExtendedLocationTypes;
}

export function commonExtendedLocationSerializer(item: CommonExtendedLocation): any {
  return { name: item["name"], type: item["type"] };
}

export function commonExtendedLocationDeserializer(item: any): CommonExtendedLocation {
  return {
    name: item["name"],
    type: item["type"],
  };
}

/** The type of extendedLocation. */
export enum KnownCommonExtendedLocationTypes {
  /** EdgeZone */
  EdgeZone = "EdgeZone",
}

/**
 * The type of extendedLocation. \
 * {@link KnownCommonExtendedLocationTypes} can be used interchangeably with CommonExtendedLocationTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **EdgeZone**
 */
export type CommonExtendedLocationTypes = string;

/** model interface CommonSubResourceReadOnly */
export interface CommonSubResourceReadOnly {
  /** Resource Id */
  readonly id?: string;
}

export function commonSubResourceReadOnlySerializer(item: CommonSubResourceReadOnly): any {
  return item;
}

export function commonSubResourceReadOnlyDeserializer(item: any): CommonSubResourceReadOnly {
  return {
    id: item["id"],
  };
}

export function commonSubResourceReadOnlyArraySerializer(
  result: Array<CommonSubResourceReadOnly>,
): any[] {
  return result.map((item) => {
    return commonSubResourceReadOnlySerializer(item);
  });
}

export function commonSubResourceReadOnlyArrayDeserializer(
  result: Array<CommonSubResourceReadOnly>,
): any[] {
  return result.map((item) => {
    return commonSubResourceReadOnlyDeserializer(item);
  });
}

/** The OS State. For managed images, use Generalized. */
export type CommonOperatingSystemStateTypes = "Generalized" | "Specialized";

/** The state of snapshot which determines the access availability of the snapshot. */
export enum KnownCommonSnapshotAccessState {
  /** Default value. */
  Unknown = "Unknown",
  /** The snapshot cannot be used for restore, copy or download to offline. */
  Pending = "Pending",
  /** The snapshot can be used for restore, copy to different region, and download to offline. */
  Available = "Available",
  /** The snapshot can be used for restoring disks with fast performance but cannot be copied or downloaded. */
  InstantAccess = "InstantAccess",
  /** The snapshot can be used for restoring disks with fast performance, copied and downloaded. */
  AvailableWithInstantAccess = "AvailableWithInstantAccess",
}

/**
 * The state of snapshot which determines the access availability of the snapshot. \
 * {@link KnownCommonSnapshotAccessState} can be used interchangeably with CommonSnapshotAccessState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Default value. \
 * **Pending**: The snapshot cannot be used for restore, copy or download to offline. \
 * **Available**: The snapshot can be used for restore, copy to different region, and download to offline. \
 * **InstantAccess**: The snapshot can be used for restoring disks with fast performance but cannot be copied or downloaded. \
 * **AvailableWithInstantAccess**: The snapshot can be used for restoring disks with fast performance, copied and downloaded.
 */
export type CommonSnapshotAccessState = string;

/** The hypervisor generation of the Virtual Machine. */
export enum KnownCommonHyperVGeneration {
  /** V1 */
  V1 = "V1",
  /** V2 */
  V2 = "V2",
}

/**
 * The hypervisor generation of the Virtual Machine. \
 * {@link KnownCommonHyperVGeneration} can be used interchangeably with CommonHyperVGeneration,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **V1** \
 * **V2**
 */
export type CommonHyperVGeneration = string;

/** CPU architecture supported by an OS disk. */
export enum KnownCommonArchitecture {
  /** x64 */
  X64 = "x64",
  /** Arm64 */
  Arm64 = "Arm64",
}

/**
 * CPU architecture supported by an OS disk. \
 * {@link KnownCommonArchitecture} can be used interchangeably with CommonArchitecture,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **x64** \
 * **Arm64**
 */
export type CommonArchitecture = string;
