// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** The List Resource Skus operation response. */
export interface _ComputeSkuResourceSkusResult {
  /** The ResourceSku items on this page */
  value: ComputeSkuResourceSku[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _computeSkuResourceSkusResultDeserializer(
  item: any,
): _ComputeSkuResourceSkusResult {
  return {
    value: computeSkuResourceSkuArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeSkuResourceSkuArrayDeserializer(
  result: Array<ComputeSkuResourceSku>,
): any[] {
  return result.map((item) => {
    return computeSkuResourceSkuDeserializer(item);
  });
}

/** Describes an available Compute SKU. */
export interface ComputeSkuResourceSku {
  /** The type of resource the SKU applies to. */
  readonly resourceType?: string;
  /** The name of SKU. */
  readonly name?: string;
  /** Specifies the tier of virtual machines in a scale set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br /> **Basic** */
  readonly tier?: string;
  /** The Size of the SKU. */
  readonly size?: string;
  /** The Family of this particular SKU. */
  readonly family?: string;
  /** The Kind of resources that are supported in this SKU. */
  readonly kind?: string;
  /** Specifies the number of virtual machines in the scale set. */
  readonly capacity?: ComputeSkuResourceSkuCapacity;
  /** The set of locations that the SKU is available. */
  readonly locations?: string[];
  /** A list of locations and availability zones in those locations where the SKU is available. */
  readonly locationInfo?: ComputeSkuResourceSkuLocationInfo[];
  /** The api versions that support this SKU. */
  readonly apiVersions?: string[];
  /** Metadata for retrieving price info. */
  readonly costs?: ComputeSkuResourceSkuCosts[];
  /** A name value pair to describe the capability. */
  readonly capabilities?: ComputeSkuResourceSkuCapabilities[];
  /** The restrictions because of which SKU cannot be used. This is empty if there are no restrictions. */
  readonly restrictions?: ComputeSkuResourceSkuRestrictions[];
}

export function computeSkuResourceSkuDeserializer(item: any): ComputeSkuResourceSku {
  return {
    resourceType: item["resourceType"],
    name: item["name"],
    tier: item["tier"],
    size: item["size"],
    family: item["family"],
    kind: item["kind"],
    capacity: !item["capacity"]
      ? item["capacity"]
      : computeSkuResourceSkuCapacityDeserializer(item["capacity"]),
    locations: !item["locations"]
      ? item["locations"]
      : item["locations"].map((p: any) => {
          return p;
        }),
    locationInfo: !item["locationInfo"]
      ? item["locationInfo"]
      : computeSkuResourceSkuLocationInfoArrayDeserializer(item["locationInfo"]),
    apiVersions: !item["apiVersions"]
      ? item["apiVersions"]
      : item["apiVersions"].map((p: any) => {
          return p;
        }),
    costs: !item["costs"]
      ? item["costs"]
      : computeSkuResourceSkuCostsArrayDeserializer(item["costs"]),
    capabilities: !item["capabilities"]
      ? item["capabilities"]
      : computeSkuResourceSkuCapabilitiesArrayDeserializer(item["capabilities"]),
    restrictions: !item["restrictions"]
      ? item["restrictions"]
      : computeSkuResourceSkuRestrictionsArrayDeserializer(item["restrictions"]),
  };
}

/** Describes scaling information of a SKU. */
export interface ComputeSkuResourceSkuCapacity {
  /** The minimum capacity. */
  readonly minimum?: number;
  /** The maximum capacity that can be set. */
  readonly maximum?: number;
  /** The default capacity. */
  readonly default?: number;
  /** The scale type applicable to the sku. */
  readonly scaleType?: ComputeSkuResourceSkuCapacityScaleType;
}

export function computeSkuResourceSkuCapacityDeserializer(
  item: any,
): ComputeSkuResourceSkuCapacity {
  return {
    minimum: item["minimum"],
    maximum: item["maximum"],
    default: item["default"],
    scaleType: item["scaleType"],
  };
}

/** The scale type applicable to the sku. */
export type ComputeSkuResourceSkuCapacityScaleType = "Automatic" | "Manual" | "None";

export function computeSkuResourceSkuLocationInfoArrayDeserializer(
  result: Array<ComputeSkuResourceSkuLocationInfo>,
): any[] {
  return result.map((item) => {
    return computeSkuResourceSkuLocationInfoDeserializer(item);
  });
}

/** Describes an available Compute SKU Location Information. */
export interface ComputeSkuResourceSkuLocationInfo {
  /** Location of the SKU */
  readonly location?: string;
  /** List of availability zones where the SKU is supported. */
  readonly zones?: string[];
  /** Details of capabilities available to a SKU in specific zones. */
  readonly zoneDetails?: ComputeSkuResourceSkuZoneDetails[];
  /** The names of extended locations. */
  readonly extendedLocations?: string[];
  /** The type of the extended location. */
  readonly type?: ComputeSkuExtendedLocationType;
}

export function computeSkuResourceSkuLocationInfoDeserializer(
  item: any,
): ComputeSkuResourceSkuLocationInfo {
  return {
    location: item["location"],
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
    zoneDetails: !item["zoneDetails"]
      ? item["zoneDetails"]
      : computeSkuResourceSkuZoneDetailsArrayDeserializer(item["zoneDetails"]),
    extendedLocations: !item["extendedLocations"]
      ? item["extendedLocations"]
      : item["extendedLocations"].map((p: any) => {
          return p;
        }),
    type: item["type"],
  };
}

export function computeSkuResourceSkuZoneDetailsArrayDeserializer(
  result: Array<ComputeSkuResourceSkuZoneDetails>,
): any[] {
  return result.map((item) => {
    return computeSkuResourceSkuZoneDetailsDeserializer(item);
  });
}

/** Describes The zonal capabilities of a SKU. */
export interface ComputeSkuResourceSkuZoneDetails {
  /** The set of zones that the SKU is available in with the specified capabilities. */
  readonly name?: string[];
  /** A list of capabilities that are available for the SKU in the specified list of zones. */
  readonly capabilities?: ComputeSkuResourceSkuCapabilities[];
}

export function computeSkuResourceSkuZoneDetailsDeserializer(
  item: any,
): ComputeSkuResourceSkuZoneDetails {
  return {
    name: !item["name"]
      ? item["name"]
      : item["name"].map((p: any) => {
          return p;
        }),
    capabilities: !item["capabilities"]
      ? item["capabilities"]
      : computeSkuResourceSkuCapabilitiesArrayDeserializer(item["capabilities"]),
  };
}

export function computeSkuResourceSkuCapabilitiesArrayDeserializer(
  result: Array<ComputeSkuResourceSkuCapabilities>,
): any[] {
  return result.map((item) => {
    return computeSkuResourceSkuCapabilitiesDeserializer(item);
  });
}

/** Describes The SKU capabilities object. */
export interface ComputeSkuResourceSkuCapabilities {
  /** An invariant to describe the feature. */
  readonly name?: string;
  /** An invariant if the feature is measured by quantity. */
  readonly value?: string;
}

export function computeSkuResourceSkuCapabilitiesDeserializer(
  item: any,
): ComputeSkuResourceSkuCapabilities {
  return {
    name: item["name"],
    value: item["value"],
  };
}

/** The type of the extended location. */
export enum KnownComputeSkuExtendedLocationType {
  /** EdgeZone */
  EdgeZone = "EdgeZone",
}

/**
 * The type of the extended location. \
 * {@link KnownComputeSkuExtendedLocationType} can be used interchangeably with ComputeSkuExtendedLocationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **EdgeZone**
 */
export type ComputeSkuExtendedLocationType = string;

export function computeSkuResourceSkuCostsArrayDeserializer(
  result: Array<ComputeSkuResourceSkuCosts>,
): any[] {
  return result.map((item) => {
    return computeSkuResourceSkuCostsDeserializer(item);
  });
}

/** Describes metadata for retrieving price info. */
export interface ComputeSkuResourceSkuCosts {
  /** Used for querying price from commerce. */
  readonly meterID?: string;
  /** The multiplier is needed to extend the base metered cost. */
  readonly quantity?: number;
  /** An invariant to show the extended unit. */
  readonly extendedUnit?: string;
}

export function computeSkuResourceSkuCostsDeserializer(item: any): ComputeSkuResourceSkuCosts {
  return {
    meterID: item["meterID"],
    quantity: item["quantity"],
    extendedUnit: item["extendedUnit"],
  };
}

export function computeSkuResourceSkuRestrictionsArrayDeserializer(
  result: Array<ComputeSkuResourceSkuRestrictions>,
): any[] {
  return result.map((item) => {
    return computeSkuResourceSkuRestrictionsDeserializer(item);
  });
}

/** Describes scaling information of a SKU. */
export interface ComputeSkuResourceSkuRestrictions {
  /** The type of restrictions. */
  readonly type?: ComputeSkuResourceSkuRestrictionsType;
  /** The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted. */
  readonly values?: string[];
  /** The information about the restriction where the SKU cannot be used. */
  readonly restrictionInfo?: ComputeSkuResourceSkuRestrictionInfo;
  /** The reason for restriction. */
  readonly reasonCode?: ComputeSkuResourceSkuRestrictionsReasonCode;
}

export function computeSkuResourceSkuRestrictionsDeserializer(
  item: any,
): ComputeSkuResourceSkuRestrictions {
  return {
    type: item["type"],
    values: !item["values"]
      ? item["values"]
      : item["values"].map((p: any) => {
          return p;
        }),
    restrictionInfo: !item["restrictionInfo"]
      ? item["restrictionInfo"]
      : computeSkuResourceSkuRestrictionInfoDeserializer(item["restrictionInfo"]),
    reasonCode: item["reasonCode"],
  };
}

/** The type of restrictions. */
export type ComputeSkuResourceSkuRestrictionsType = "Location" | "Zone";

/** Describes an available Compute SKU Restriction Information. */
export interface ComputeSkuResourceSkuRestrictionInfo {
  /** Locations where the SKU is restricted */
  readonly locations?: string[];
  /** List of availability zones where the SKU is restricted. */
  readonly zones?: string[];
}

export function computeSkuResourceSkuRestrictionInfoDeserializer(
  item: any,
): ComputeSkuResourceSkuRestrictionInfo {
  return {
    locations: !item["locations"]
      ? item["locations"]
      : item["locations"].map((p: any) => {
          return p;
        }),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
  };
}

/** The reason for restriction. */
export type ComputeSkuResourceSkuRestrictionsReasonCode = "QuotaId" | "NotAvailableForSubscription";
