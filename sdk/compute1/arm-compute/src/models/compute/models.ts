// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { areAllPropsUndefined } from "../../static-helpers/serialization/check-prop-undefined.js";
import {
  CommonApiError,
  commonApiErrorDeserializer,
  CommonSubResource,
  commonSubResourceSerializer,
  commonSubResourceDeserializer,
  CommonOperatingSystemTypes,
  commonSubResourceArraySerializer,
  commonSubResourceArrayDeserializer,
  CommonResourceIdentityType,
  commonUserAssignedIdentitiesValueRecordSerializer,
  commonUserAssignedIdentitiesValueRecordDeserializer,
  CommonUserAssignedIdentitiesValue,
  CommonExtendedLocation,
  commonExtendedLocationSerializer,
  commonExtendedLocationDeserializer,
  CommonSubResourceReadOnly,
  commonSubResourceReadOnlyArrayDeserializer,
  CommonOperatingSystemStateTypes,
  CommonSnapshotAccessState,
  CommonHyperVGeneration,
} from "../common/models.js";
import { TrackedResource, systemDataDeserializer, ProxyResource } from "../models.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Describes a Virtual Machine Scale Set. */
export interface ComputeVirtualMachineScaleSet extends TrackedResource {
  /** The virtual machine scale set sku. */
  sku?: ComputeSku;
  /** Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**. */
  plan?: ComputePlan;
  /** The identity of the virtual machine scale set, if configured. */
  identity?: ComputeVirtualMachineScaleSetIdentity;
  /** The availability zones. */
  zones?: string[];
  /** The extended location of the Virtual Machine Scale Set. */
  extendedLocation?: CommonExtendedLocation;
  /** Etag is property returned in Create/Update/Get response of the VMSS, so that customer can supply it in the header to ensure optimistic updates */
  readonly etag?: string;
  /** Placement section specifies the user-defined constraints for virtual machine scale set hardware placement. This property cannot be changed once VMSS is provisioned. Minimum api-version: 2025-04-01. */
  placement?: ComputePlacement;
  /** The upgrade policy. */
  upgradePolicy?: ComputeUpgradePolicy;
  /** The ScheduledEventsPolicy. */
  scheduledEventsPolicy?: ComputeScheduledEventsPolicy;
  /** Policy for automatic repairs. */
  automaticRepairsPolicy?: ComputeAutomaticRepairsPolicy;
  /** The virtual machine profile. */
  virtualMachineProfile?: ComputeVirtualMachineScaleSetVMProfile;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: string;
  /** Specifies whether the Virtual Machine Scale Set should be overprovisioned. */
  overprovision?: boolean;
  /** When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs. */
  doNotRunExtensionsOnOverprovisionedVMs?: boolean;
  /** Specifies the ID which uniquely identifies a Virtual Machine Scale Set. */
  readonly uniqueId?: string;
  /** When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true. */
  singlePlacementGroup?: boolean;
  /** Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage. zoneBalance property can only be set if the zones property of the scale set contains more than one zone. If there are no zones or only one zone specified, then zoneBalance property should not be set. */
  zoneBalance?: boolean;
  /** Fault Domain count for each placement group. */
  platformFaultDomainCount?: number;
  /** Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. Minimum api-version: 2018-04-01. */
  proximityPlacementGroup?: CommonSubResource;
  /** Specifies information about the dedicated host group that the virtual machine scale set resides in. Minimum api-version: 2020-06-01. */
  hostGroup?: CommonSubResource;
  /** Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type. */
  additionalCapabilities?: ComputeAdditionalCapabilities;
  /** Specifies the policies applied when scaling in Virtual Machines in the Virtual Machine Scale Set. */
  scaleInPolicy?: ComputeScaleInPolicy;
  /** Specifies the orchestration mode for the virtual machine scale set. */
  orchestrationMode?: ComputeOrchestrationMode;
  /** Specifies the Spot Restore properties for the virtual machine scale set. */
  spotRestorePolicy?: ComputeSpotRestorePolicy;
  /** Specifies the desired targets for mixing Spot and Regular priority VMs within the same VMSS Flex instance. */
  priorityMixPolicy?: ComputePriorityMixPolicy;
  /** Specifies the time at which the Virtual Machine Scale Set resource was created. Minimum api-version: 2021-11-01. */
  readonly timeCreated?: Date;
  /** Optional property which must either be set to True or omitted. */
  constrainedMaximumCapacity?: boolean;
  /** Policy for Resiliency */
  resiliencyPolicy?: ComputeResiliencyPolicy;
  /** Specifies the align mode between Virtual Machine Scale Set compute and storage Fault Domain count. */
  zonalPlatformFaultDomainAlignMode?: ComputeZonalPlatformFaultDomainAlignMode;
  /** Specifies the sku profile for the virtual machine scale set. */
  skuProfile?: ComputeSkuProfile;
  /** Specifies the high speed interconnect placement for the virtual machine scale set. */
  highSpeedInterconnectPlacement?: ComputeHighSpeedInterconnectPlacement;
}

export function computeVirtualMachineScaleSetSerializer(item: ComputeVirtualMachineScaleSet): any {
  return {
    tags: item["tags"],
    location: item["location"],
    sku: !item["sku"] ? item["sku"] : computeSkuSerializer(item["sku"]),
    plan: !item["plan"] ? item["plan"] : computePlanSerializer(item["plan"]),
    properties: areAllPropsUndefined(item, [
      "upgradePolicy",
      "scheduledEventsPolicy",
      "automaticRepairsPolicy",
      "virtualMachineProfile",
      "overprovision",
      "doNotRunExtensionsOnOverprovisionedVMs",
      "singlePlacementGroup",
      "zoneBalance",
      "platformFaultDomainCount",
      "proximityPlacementGroup",
      "hostGroup",
      "additionalCapabilities",
      "scaleInPolicy",
      "orchestrationMode",
      "spotRestorePolicy",
      "priorityMixPolicy",
      "constrainedMaximumCapacity",
      "resiliencyPolicy",
      "zonalPlatformFaultDomainAlignMode",
      "skuProfile",
      "highSpeedInterconnectPlacement",
    ])
      ? undefined
      : _virtualMachineScaleSetPropertiesSerializer(item),
    identity: !item["identity"]
      ? item["identity"]
      : computeVirtualMachineScaleSetIdentitySerializer(item["identity"]),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
    extendedLocation: !item["extendedLocation"]
      ? item["extendedLocation"]
      : commonExtendedLocationSerializer(item["extendedLocation"]),
    placement: !item["placement"]
      ? item["placement"]
      : computePlacementSerializer(item["placement"]),
  };
}

export function computeVirtualMachineScaleSetDeserializer(
  item: any,
): ComputeVirtualMachineScaleSet {
  return {
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    sku: !item["sku"] ? item["sku"] : computeSkuDeserializer(item["sku"]),
    plan: !item["plan"] ? item["plan"] : computePlanDeserializer(item["plan"]),
    ...(!item["properties"]
      ? item["properties"]
      : _virtualMachineScaleSetPropertiesDeserializer(item["properties"])),
    identity: !item["identity"]
      ? item["identity"]
      : computeVirtualMachineScaleSetIdentityDeserializer(item["identity"]),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
    extendedLocation: !item["extendedLocation"]
      ? item["extendedLocation"]
      : commonExtendedLocationDeserializer(item["extendedLocation"]),
    etag: item["etag"],
    placement: !item["placement"]
      ? item["placement"]
      : computePlacementDeserializer(item["placement"]),
  };
}

/** Describes a virtual machine scale set sku. NOTE: If the new VM SKU is not supported on the hardware the scale set is currently on, you need to deallocate the VMs in the scale set before you modify the SKU name. */
export interface ComputeSku {
  /** The sku name. */
  name?: string;
  /** Specifies the tier of virtual machines in a scale set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br /> **Basic** */
  tier?: string;
  /** Specifies the number of virtual machines in the scale set. */
  capacity?: number;
}

export function computeSkuSerializer(item: ComputeSku): any {
  return { name: item["name"], tier: item["tier"], capacity: item["capacity"] };
}

export function computeSkuDeserializer(item: any): ComputeSku {
  return {
    name: item["name"],
    tier: item["tier"],
    capacity: item["capacity"],
  };
}

/** Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**. */
export interface ComputePlan {
  /** The plan ID. */
  name?: string;
  /** The publisher ID. */
  publisher?: string;
  /** Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element. */
  product?: string;
  /** The promotion code. */
  promotionCode?: string;
}

export function computePlanSerializer(item: ComputePlan): any {
  return {
    name: item["name"],
    publisher: item["publisher"],
    product: item["product"],
    promotionCode: item["promotionCode"],
  };
}

export function computePlanDeserializer(item: any): ComputePlan {
  return {
    name: item["name"],
    publisher: item["publisher"],
    product: item["product"],
    promotionCode: item["promotionCode"],
  };
}

/** Describes the properties of a Virtual Machine Scale Set. */
export interface ComputeVirtualMachineScaleSetProperties {
  /** The upgrade policy. */
  upgradePolicy?: ComputeUpgradePolicy;
  /** The ScheduledEventsPolicy. */
  scheduledEventsPolicy?: ComputeScheduledEventsPolicy;
  /** Policy for automatic repairs. */
  automaticRepairsPolicy?: ComputeAutomaticRepairsPolicy;
  /** The virtual machine profile. */
  virtualMachineProfile?: ComputeVirtualMachineScaleSetVMProfile;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: string;
  /** Specifies whether the Virtual Machine Scale Set should be overprovisioned. */
  overprovision?: boolean;
  /** When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs. */
  doNotRunExtensionsOnOverprovisionedVMs?: boolean;
  /** Specifies the ID which uniquely identifies a Virtual Machine Scale Set. */
  readonly uniqueId?: string;
  /** When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true. */
  singlePlacementGroup?: boolean;
  /** Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage. zoneBalance property can only be set if the zones property of the scale set contains more than one zone. If there are no zones or only one zone specified, then zoneBalance property should not be set. */
  zoneBalance?: boolean;
  /** Fault Domain count for each placement group. */
  platformFaultDomainCount?: number;
  /** Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. Minimum api-version: 2018-04-01. */
  proximityPlacementGroup?: CommonSubResource;
  /** Specifies information about the dedicated host group that the virtual machine scale set resides in. Minimum api-version: 2020-06-01. */
  hostGroup?: CommonSubResource;
  /** Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type. */
  additionalCapabilities?: ComputeAdditionalCapabilities;
  /** Specifies the policies applied when scaling in Virtual Machines in the Virtual Machine Scale Set. */
  scaleInPolicy?: ComputeScaleInPolicy;
  /** Specifies the orchestration mode for the virtual machine scale set. */
  orchestrationMode?: ComputeOrchestrationMode;
  /** Specifies the Spot Restore properties for the virtual machine scale set. */
  spotRestorePolicy?: ComputeSpotRestorePolicy;
  /** Specifies the desired targets for mixing Spot and Regular priority VMs within the same VMSS Flex instance. */
  priorityMixPolicy?: ComputePriorityMixPolicy;
  /** Specifies the time at which the Virtual Machine Scale Set resource was created. Minimum api-version: 2021-11-01. */
  readonly timeCreated?: Date;
  /** Optional property which must either be set to True or omitted. */
  constrainedMaximumCapacity?: boolean;
  /** Policy for Resiliency */
  resiliencyPolicy?: ComputeResiliencyPolicy;
  /** Specifies the align mode between Virtual Machine Scale Set compute and storage Fault Domain count. */
  zonalPlatformFaultDomainAlignMode?: ComputeZonalPlatformFaultDomainAlignMode;
  /** Specifies the sku profile for the virtual machine scale set. */
  skuProfile?: ComputeSkuProfile;
  /** Specifies the high speed interconnect placement for the virtual machine scale set. */
  highSpeedInterconnectPlacement?: ComputeHighSpeedInterconnectPlacement;
}

export function computeVirtualMachineScaleSetPropertiesSerializer(
  item: ComputeVirtualMachineScaleSetProperties,
): any {
  return {
    upgradePolicy: !item["upgradePolicy"]
      ? item["upgradePolicy"]
      : computeUpgradePolicySerializer(item["upgradePolicy"]),
    scheduledEventsPolicy: !item["scheduledEventsPolicy"]
      ? item["scheduledEventsPolicy"]
      : computeScheduledEventsPolicySerializer(item["scheduledEventsPolicy"]),
    automaticRepairsPolicy: !item["automaticRepairsPolicy"]
      ? item["automaticRepairsPolicy"]
      : computeAutomaticRepairsPolicySerializer(item["automaticRepairsPolicy"]),
    virtualMachineProfile: !item["virtualMachineProfile"]
      ? item["virtualMachineProfile"]
      : computeVirtualMachineScaleSetVMProfileSerializer(item["virtualMachineProfile"]),
    overprovision: item["overprovision"],
    doNotRunExtensionsOnOverprovisionedVMs: item["doNotRunExtensionsOnOverprovisionedVMs"],
    singlePlacementGroup: item["singlePlacementGroup"],
    zoneBalance: item["zoneBalance"],
    platformFaultDomainCount: item["platformFaultDomainCount"],
    proximityPlacementGroup: !item["proximityPlacementGroup"]
      ? item["proximityPlacementGroup"]
      : commonSubResourceSerializer(item["proximityPlacementGroup"]),
    hostGroup: !item["hostGroup"]
      ? item["hostGroup"]
      : commonSubResourceSerializer(item["hostGroup"]),
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeAdditionalCapabilitiesSerializer(item["additionalCapabilities"]),
    scaleInPolicy: !item["scaleInPolicy"]
      ? item["scaleInPolicy"]
      : computeScaleInPolicySerializer(item["scaleInPolicy"]),
    orchestrationMode: item["orchestrationMode"],
    spotRestorePolicy: !item["spotRestorePolicy"]
      ? item["spotRestorePolicy"]
      : computeSpotRestorePolicySerializer(item["spotRestorePolicy"]),
    priorityMixPolicy: !item["priorityMixPolicy"]
      ? item["priorityMixPolicy"]
      : computePriorityMixPolicySerializer(item["priorityMixPolicy"]),
    constrainedMaximumCapacity: item["constrainedMaximumCapacity"],
    resiliencyPolicy: !item["resiliencyPolicy"]
      ? item["resiliencyPolicy"]
      : computeResiliencyPolicySerializer(item["resiliencyPolicy"]),
    zonalPlatformFaultDomainAlignMode: item["zonalPlatformFaultDomainAlignMode"],
    skuProfile: !item["skuProfile"]
      ? item["skuProfile"]
      : computeSkuProfileSerializer(item["skuProfile"]),
    highSpeedInterconnectPlacement: item["highSpeedInterconnectPlacement"],
  };
}

export function computeVirtualMachineScaleSetPropertiesDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetProperties {
  return {
    upgradePolicy: !item["upgradePolicy"]
      ? item["upgradePolicy"]
      : computeUpgradePolicyDeserializer(item["upgradePolicy"]),
    scheduledEventsPolicy: !item["scheduledEventsPolicy"]
      ? item["scheduledEventsPolicy"]
      : computeScheduledEventsPolicyDeserializer(item["scheduledEventsPolicy"]),
    automaticRepairsPolicy: !item["automaticRepairsPolicy"]
      ? item["automaticRepairsPolicy"]
      : computeAutomaticRepairsPolicyDeserializer(item["automaticRepairsPolicy"]),
    virtualMachineProfile: !item["virtualMachineProfile"]
      ? item["virtualMachineProfile"]
      : computeVirtualMachineScaleSetVMProfileDeserializer(item["virtualMachineProfile"]),
    provisioningState: item["provisioningState"],
    overprovision: item["overprovision"],
    doNotRunExtensionsOnOverprovisionedVMs: item["doNotRunExtensionsOnOverprovisionedVMs"],
    uniqueId: item["uniqueId"],
    singlePlacementGroup: item["singlePlacementGroup"],
    zoneBalance: item["zoneBalance"],
    platformFaultDomainCount: item["platformFaultDomainCount"],
    proximityPlacementGroup: !item["proximityPlacementGroup"]
      ? item["proximityPlacementGroup"]
      : commonSubResourceDeserializer(item["proximityPlacementGroup"]),
    hostGroup: !item["hostGroup"]
      ? item["hostGroup"]
      : commonSubResourceDeserializer(item["hostGroup"]),
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeAdditionalCapabilitiesDeserializer(item["additionalCapabilities"]),
    scaleInPolicy: !item["scaleInPolicy"]
      ? item["scaleInPolicy"]
      : computeScaleInPolicyDeserializer(item["scaleInPolicy"]),
    orchestrationMode: item["orchestrationMode"],
    spotRestorePolicy: !item["spotRestorePolicy"]
      ? item["spotRestorePolicy"]
      : computeSpotRestorePolicyDeserializer(item["spotRestorePolicy"]),
    priorityMixPolicy: !item["priorityMixPolicy"]
      ? item["priorityMixPolicy"]
      : computePriorityMixPolicyDeserializer(item["priorityMixPolicy"]),
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
    constrainedMaximumCapacity: item["constrainedMaximumCapacity"],
    resiliencyPolicy: !item["resiliencyPolicy"]
      ? item["resiliencyPolicy"]
      : computeResiliencyPolicyDeserializer(item["resiliencyPolicy"]),
    zonalPlatformFaultDomainAlignMode: item["zonalPlatformFaultDomainAlignMode"],
    skuProfile: !item["skuProfile"]
      ? item["skuProfile"]
      : computeSkuProfileDeserializer(item["skuProfile"]),
    highSpeedInterconnectPlacement: item["highSpeedInterconnectPlacement"],
  };
}

/** Describes an upgrade policy - automatic, manual, or rolling. */
export interface ComputeUpgradePolicy {
  /** Specifies the mode of an upgrade to virtual machines in the scale set.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.<br /><br /> **Automatic** - All virtual machines in the scale set are  automatically updated at the same time. */
  mode?: ComputeUpgradeMode;
  /** The configuration parameters used while performing a rolling upgrade. */
  rollingUpgradePolicy?: ComputeRollingUpgradePolicy;
  /** Configuration parameters used for performing automatic OS Upgrade. */
  automaticOSUpgradePolicy?: ComputeAutomaticOSUpgradePolicy;
}

export function computeUpgradePolicySerializer(item: ComputeUpgradePolicy): any {
  return {
    mode: item["mode"],
    rollingUpgradePolicy: !item["rollingUpgradePolicy"]
      ? item["rollingUpgradePolicy"]
      : computeRollingUpgradePolicySerializer(item["rollingUpgradePolicy"]),
    automaticOSUpgradePolicy: !item["automaticOSUpgradePolicy"]
      ? item["automaticOSUpgradePolicy"]
      : computeAutomaticOSUpgradePolicySerializer(item["automaticOSUpgradePolicy"]),
  };
}

export function computeUpgradePolicyDeserializer(item: any): ComputeUpgradePolicy {
  return {
    mode: item["mode"],
    rollingUpgradePolicy: !item["rollingUpgradePolicy"]
      ? item["rollingUpgradePolicy"]
      : computeRollingUpgradePolicyDeserializer(item["rollingUpgradePolicy"]),
    automaticOSUpgradePolicy: !item["automaticOSUpgradePolicy"]
      ? item["automaticOSUpgradePolicy"]
      : computeAutomaticOSUpgradePolicyDeserializer(item["automaticOSUpgradePolicy"]),
  };
}

/** Specifies the mode of an upgrade to virtual machines in the scale set.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.<br /><br /> **Automatic** - All virtual machines in the scale set are  automatically updated at the same time. */
export type ComputeUpgradeMode = "Automatic" | "Manual" | "Rolling";

/** The configuration parameters used while performing a rolling upgrade. */
export interface ComputeRollingUpgradePolicy {
  /** The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. The default value for this parameter is 20%. */
  maxBatchInstancePercent?: number;
  /** The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. The default value for this parameter is 20%. */
  maxUnhealthyInstancePercent?: number;
  /** The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. The default value for this parameter is 20%. */
  maxUnhealthyUpgradedInstancePercent?: number;
  /** The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format. The default value is 0 seconds (PT0S). */
  pauseTimeBetweenBatches?: string;
  /** Allow VMSS to ignore AZ boundaries when constructing upgrade batches. Take into consideration the Update Domain and maxBatchInstancePercent to determine the batch size. */
  enableCrossZoneUpgrade?: boolean;
  /** Upgrade all unhealthy instances in a scale set before any healthy instances. */
  prioritizeUnhealthyInstances?: boolean;
  /** Rollback failed instances to previous model if the Rolling Upgrade policy is violated. */
  rollbackFailedInstancesOnPolicyBreach?: boolean;
  /** Create new virtual machines to upgrade the scale set, rather than updating the existing virtual machines. Existing virtual machines will be deleted once the new virtual machines are created for each batch. */
  maxSurge?: boolean;
}

export function computeRollingUpgradePolicySerializer(item: ComputeRollingUpgradePolicy): any {
  return {
    maxBatchInstancePercent: item["maxBatchInstancePercent"],
    maxUnhealthyInstancePercent: item["maxUnhealthyInstancePercent"],
    maxUnhealthyUpgradedInstancePercent: item["maxUnhealthyUpgradedInstancePercent"],
    pauseTimeBetweenBatches: item["pauseTimeBetweenBatches"],
    enableCrossZoneUpgrade: item["enableCrossZoneUpgrade"],
    prioritizeUnhealthyInstances: item["prioritizeUnhealthyInstances"],
    rollbackFailedInstancesOnPolicyBreach: item["rollbackFailedInstancesOnPolicyBreach"],
    maxSurge: item["maxSurge"],
  };
}

export function computeRollingUpgradePolicyDeserializer(item: any): ComputeRollingUpgradePolicy {
  return {
    maxBatchInstancePercent: item["maxBatchInstancePercent"],
    maxUnhealthyInstancePercent: item["maxUnhealthyInstancePercent"],
    maxUnhealthyUpgradedInstancePercent: item["maxUnhealthyUpgradedInstancePercent"],
    pauseTimeBetweenBatches: item["pauseTimeBetweenBatches"],
    enableCrossZoneUpgrade: item["enableCrossZoneUpgrade"],
    prioritizeUnhealthyInstances: item["prioritizeUnhealthyInstances"],
    rollbackFailedInstancesOnPolicyBreach: item["rollbackFailedInstancesOnPolicyBreach"],
    maxSurge: item["maxSurge"],
  };
}

/** The configuration parameters used for performing automatic OS upgrade. */
export interface ComputeAutomaticOSUpgradePolicy {
  /** Indicates whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the OS image becomes available. Default value is false. If this is set to true for Windows based scale sets, [enableAutomaticUpdates](https://docs.microsoft.com/dotnet/api/microsoft.azure.management.compute.models.windowsconfiguration.enableautomaticupdates?view=azure-dotnet) is automatically set to false and cannot be set to true. */
  enableAutomaticOSUpgrade?: boolean;
  /** Whether OS image rollback feature should be disabled. Default value is false. */
  disableAutomaticRollback?: boolean;
  /** Indicates whether rolling upgrade policy should be used during Auto OS Upgrade. Default value is false. Auto OS Upgrade will fallback to the default policy if no policy is defined on the VMSS. */
  useRollingUpgradePolicy?: boolean;
  /** Indicates whether Auto OS Upgrade should undergo deferral. Deferred OS upgrades will send advanced notifications on a per-VM basis that an OS upgrade from rolling upgrades is incoming, via the IMDS tag 'Platform.PendingOSUpgrade'. The upgrade then defers until the upgrade is approved via an ApproveRollingUpgrade call. */
  osRollingUpgradeDeferral?: boolean;
}

export function computeAutomaticOSUpgradePolicySerializer(
  item: ComputeAutomaticOSUpgradePolicy,
): any {
  return {
    enableAutomaticOSUpgrade: item["enableAutomaticOSUpgrade"],
    disableAutomaticRollback: item["disableAutomaticRollback"],
    useRollingUpgradePolicy: item["useRollingUpgradePolicy"],
    osRollingUpgradeDeferral: item["osRollingUpgradeDeferral"],
  };
}

export function computeAutomaticOSUpgradePolicyDeserializer(
  item: any,
): ComputeAutomaticOSUpgradePolicy {
  return {
    enableAutomaticOSUpgrade: item["enableAutomaticOSUpgrade"],
    disableAutomaticRollback: item["disableAutomaticRollback"],
    useRollingUpgradePolicy: item["useRollingUpgradePolicy"],
    osRollingUpgradeDeferral: item["osRollingUpgradeDeferral"],
  };
}

/** Specifies Redeploy, Reboot and ScheduledEventsAdditionalPublishingTargets Scheduled Event related configurations. */
export interface ComputeScheduledEventsPolicy {
  /** The configuration parameters used while creating userInitiatedRedeploy scheduled event setting creation. */
  userInitiatedRedeploy?: ComputeUserInitiatedRedeploy;
  /** The configuration parameters used while creating userInitiatedReboot scheduled event setting creation. */
  userInitiatedReboot?: ComputeUserInitiatedReboot;
  /** The configuration parameters used while publishing scheduledEventsAdditionalPublishingTargets. */
  scheduledEventsAdditionalPublishingTargets?: ComputeScheduledEventsAdditionalPublishingTargets;
  /** The configuration parameters used while creating AllInstancesDown scheduled event setting creation. */
  allInstancesDown?: ComputeAllInstancesDown;
}

export function computeScheduledEventsPolicySerializer(item: ComputeScheduledEventsPolicy): any {
  return {
    userInitiatedRedeploy: !item["userInitiatedRedeploy"]
      ? item["userInitiatedRedeploy"]
      : computeUserInitiatedRedeploySerializer(item["userInitiatedRedeploy"]),
    userInitiatedReboot: !item["userInitiatedReboot"]
      ? item["userInitiatedReboot"]
      : computeUserInitiatedRebootSerializer(item["userInitiatedReboot"]),
    scheduledEventsAdditionalPublishingTargets: !item["scheduledEventsAdditionalPublishingTargets"]
      ? item["scheduledEventsAdditionalPublishingTargets"]
      : computeScheduledEventsAdditionalPublishingTargetsSerializer(
          item["scheduledEventsAdditionalPublishingTargets"],
        ),
    allInstancesDown: !item["allInstancesDown"]
      ? item["allInstancesDown"]
      : computeAllInstancesDownSerializer(item["allInstancesDown"]),
  };
}

export function computeScheduledEventsPolicyDeserializer(item: any): ComputeScheduledEventsPolicy {
  return {
    userInitiatedRedeploy: !item["userInitiatedRedeploy"]
      ? item["userInitiatedRedeploy"]
      : computeUserInitiatedRedeployDeserializer(item["userInitiatedRedeploy"]),
    userInitiatedReboot: !item["userInitiatedReboot"]
      ? item["userInitiatedReboot"]
      : computeUserInitiatedRebootDeserializer(item["userInitiatedReboot"]),
    scheduledEventsAdditionalPublishingTargets: !item["scheduledEventsAdditionalPublishingTargets"]
      ? item["scheduledEventsAdditionalPublishingTargets"]
      : computeScheduledEventsAdditionalPublishingTargetsDeserializer(
          item["scheduledEventsAdditionalPublishingTargets"],
        ),
    allInstancesDown: !item["allInstancesDown"]
      ? item["allInstancesDown"]
      : computeAllInstancesDownDeserializer(item["allInstancesDown"]),
  };
}

/** Specifies Redeploy related Scheduled Event related configurations. */
export interface ComputeUserInitiatedRedeploy {
  /** Specifies Redeploy Scheduled Event related configurations. */
  automaticallyApprove?: boolean;
}

export function computeUserInitiatedRedeploySerializer(item: ComputeUserInitiatedRedeploy): any {
  return { automaticallyApprove: item["automaticallyApprove"] };
}

export function computeUserInitiatedRedeployDeserializer(item: any): ComputeUserInitiatedRedeploy {
  return {
    automaticallyApprove: item["automaticallyApprove"],
  };
}

/** Specifies Reboot related Scheduled Event related configurations. */
export interface ComputeUserInitiatedReboot {
  /** Specifies Reboot Scheduled Event related configurations. */
  automaticallyApprove?: boolean;
}

export function computeUserInitiatedRebootSerializer(item: ComputeUserInitiatedReboot): any {
  return { automaticallyApprove: item["automaticallyApprove"] };
}

export function computeUserInitiatedRebootDeserializer(item: any): ComputeUserInitiatedReboot {
  return {
    automaticallyApprove: item["automaticallyApprove"],
  };
}

/** model interface ComputeScheduledEventsAdditionalPublishingTargets */
export interface ComputeScheduledEventsAdditionalPublishingTargets {
  /** The configuration parameters used while creating eventGridAndResourceGraph Scheduled Event setting. */
  eventGridAndResourceGraph?: ComputeEventGridAndResourceGraph;
}

export function computeScheduledEventsAdditionalPublishingTargetsSerializer(
  item: ComputeScheduledEventsAdditionalPublishingTargets,
): any {
  return {
    eventGridAndResourceGraph: !item["eventGridAndResourceGraph"]
      ? item["eventGridAndResourceGraph"]
      : computeEventGridAndResourceGraphSerializer(item["eventGridAndResourceGraph"]),
  };
}

export function computeScheduledEventsAdditionalPublishingTargetsDeserializer(
  item: any,
): ComputeScheduledEventsAdditionalPublishingTargets {
  return {
    eventGridAndResourceGraph: !item["eventGridAndResourceGraph"]
      ? item["eventGridAndResourceGraph"]
      : computeEventGridAndResourceGraphDeserializer(item["eventGridAndResourceGraph"]),
  };
}

/** Specifies eventGridAndResourceGraph related Scheduled Event related configurations. */
export interface ComputeEventGridAndResourceGraph {
  /** Specifies if event grid and resource graph is enabled for Scheduled event related configurations. */
  enable?: boolean;
  /** Specifies the api-version to determine which Scheduled Events configuration schema version will be delivered. */
  scheduledEventsApiVersion?: string;
}

export function computeEventGridAndResourceGraphSerializer(
  item: ComputeEventGridAndResourceGraph,
): any {
  return { enable: item["enable"], scheduledEventsApiVersion: item["scheduledEventsApiVersion"] };
}

export function computeEventGridAndResourceGraphDeserializer(
  item: any,
): ComputeEventGridAndResourceGraph {
  return {
    enable: item["enable"],
    scheduledEventsApiVersion: item["scheduledEventsApiVersion"],
  };
}

/** Specifies if Scheduled Events should be auto-approved when all instances are down. */
export interface ComputeAllInstancesDown {
  /**
   * Specifies if Scheduled Events should be auto-approved when all instances are down.
   * its default value is true
   */
  automaticallyApprove?: boolean;
}

export function computeAllInstancesDownSerializer(item: ComputeAllInstancesDown): any {
  return { automaticallyApprove: item["automaticallyApprove"] };
}

export function computeAllInstancesDownDeserializer(item: any): ComputeAllInstancesDown {
  return {
    automaticallyApprove: item["automaticallyApprove"],
  };
}

/** Specifies the configuration parameters for automatic repairs on the virtual machine scale set. */
export interface ComputeAutomaticRepairsPolicy {
  /** Specifies whether automatic repairs should be enabled on the virtual machine scale set. The default value is false. */
  enabled?: boolean;
  /** The amount of time for which automatic repairs are suspended due to a state change on VM. The grace time starts after the state change has completed. This helps avoid premature or accidental repairs. The time duration should be specified in ISO 8601 format. The minimum allowed grace period is 10 minutes (PT10M), which is also the default value. The maximum allowed grace period is 90 minutes (PT90M). */
  gracePeriod?: string;
  /** Type of repair action (replace, restart, reimage) that will be used for repairing unhealthy virtual machines in the scale set. Default value is replace. */
  repairAction?: ComputeRepairAction;
}

export function computeAutomaticRepairsPolicySerializer(item: ComputeAutomaticRepairsPolicy): any {
  return {
    enabled: item["enabled"],
    gracePeriod: item["gracePeriod"],
    repairAction: item["repairAction"],
  };
}

export function computeAutomaticRepairsPolicyDeserializer(
  item: any,
): ComputeAutomaticRepairsPolicy {
  return {
    enabled: item["enabled"],
    gracePeriod: item["gracePeriod"],
    repairAction: item["repairAction"],
  };
}

/** Type of repair action (replace, restart, reimage) that will be used for repairing unhealthy virtual machines in the scale set. Default value is replace. */
export enum KnownComputeRepairAction {
  /** Replace */
  Replace = "Replace",
  /** Restart */
  Restart = "Restart",
  /** Reimage */
  Reimage = "Reimage",
}

/**
 * Type of repair action (replace, restart, reimage) that will be used for repairing unhealthy virtual machines in the scale set. Default value is replace. \
 * {@link KnownComputeRepairAction} can be used interchangeably with ComputeRepairAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Replace** \
 * **Restart** \
 * **Reimage**
 */
export type ComputeRepairAction = string;

/** Describes a virtual machine scale set virtual machine profile. */
export interface ComputeVirtualMachineScaleSetVMProfile {
  /** Specifies the operating system settings for the virtual machines in the scale set. */
  osProfile?: ComputeVirtualMachineScaleSetOSProfile;
  /** Specifies the storage settings for the virtual machine disks. */
  storageProfile?: ComputeVirtualMachineScaleSetStorageProfile;
  /** Specifies properties of the network interfaces of the virtual machines in the scale set. */
  networkProfile?: ComputeVirtualMachineScaleSetNetworkProfile;
  /** Specifies the Security related profile settings for the virtual machines in the scale set. */
  securityProfile?: ComputeSecurityProfile;
  /** Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15. */
  diagnosticsProfile?: ComputeDiagnosticsProfile;
  /** Specifies a collection of settings for extensions installed on virtual machines in the scale set. */
  extensionProfile?: ComputeVirtualMachineScaleSetExtensionProfile;
  /** Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15 */
  licenseType?: string;
  /** Specifies the priority for the virtual machines in the scale set. Minimum api-version: 2017-10-30-preview. */
  priority?: ComputeVirtualMachinePriorityTypes;
  /** Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. For Azure Spot virtual machines, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2019-03-01. For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview. */
  evictionPolicy?: ComputeVirtualMachineEvictionPolicyTypes;
  /** Specifies the billing related details of a Azure Spot VMSS. Minimum api-version: 2019-03-01. */
  billingProfile?: ComputeBillingProfile;
  /** Specifies Scheduled Event related configurations. */
  scheduledEventsProfile?: ComputeScheduledEventsProfile;
  /** UserData for the virtual machines in the scale set, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum api-version: 2021-03-01. */
  userData?: string;
  /** Specifies the capacity reservation related details of a scale set. Minimum api-version: 2021-04-01. */
  capacityReservation?: ComputeCapacityReservationProfile;
  /** Specifies the gallery applications that should be made available to the VM/VMSS */
  applicationProfile?: ComputeApplicationProfile;
  /** Specifies the hardware profile related details of a scale set. Minimum api-version: 2021-11-01. */
  hardwareProfile?: ComputeVirtualMachineScaleSetHardwareProfile;
  /** Specifies the service artifact reference id used to set same image version for all virtual machines in the scale set when using 'latest' image version. Minimum api-version: 2022-11-01 */
  serviceArtifactReference?: ComputeServiceArtifactReference;
  /** Specifies the security posture to be used in the scale set. Minimum api-version: 2023-03-01 */
  securityPostureReference?: ComputeSecurityPostureReference;
  /** Specifies the time in which this VM profile for the Virtual Machine Scale Set was created. This value will be added to VMSS Flex VM tags when creating/updating the VMSS VM Profile. Minimum API version for this property is 2023-09-01. */
  readonly timeCreated?: Date;
}

export function computeVirtualMachineScaleSetVMProfileSerializer(
  item: ComputeVirtualMachineScaleSetVMProfile,
): any {
  return {
    osProfile: !item["osProfile"]
      ? item["osProfile"]
      : computeVirtualMachineScaleSetOSProfileSerializer(item["osProfile"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeVirtualMachineScaleSetStorageProfileSerializer(item["storageProfile"]),
    networkProfile: !item["networkProfile"]
      ? item["networkProfile"]
      : computeVirtualMachineScaleSetNetworkProfileSerializer(item["networkProfile"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeSecurityProfileSerializer(item["securityProfile"]),
    diagnosticsProfile: !item["diagnosticsProfile"]
      ? item["diagnosticsProfile"]
      : computeDiagnosticsProfileSerializer(item["diagnosticsProfile"]),
    extensionProfile: !item["extensionProfile"]
      ? item["extensionProfile"]
      : computeVirtualMachineScaleSetExtensionProfileSerializer(item["extensionProfile"]),
    licenseType: item["licenseType"],
    priority: item["priority"],
    evictionPolicy: item["evictionPolicy"],
    billingProfile: !item["billingProfile"]
      ? item["billingProfile"]
      : computeBillingProfileSerializer(item["billingProfile"]),
    scheduledEventsProfile: !item["scheduledEventsProfile"]
      ? item["scheduledEventsProfile"]
      : computeScheduledEventsProfileSerializer(item["scheduledEventsProfile"]),
    userData: item["userData"],
    capacityReservation: !item["capacityReservation"]
      ? item["capacityReservation"]
      : computeCapacityReservationProfileSerializer(item["capacityReservation"]),
    applicationProfile: !item["applicationProfile"]
      ? item["applicationProfile"]
      : computeApplicationProfileSerializer(item["applicationProfile"]),
    hardwareProfile: !item["hardwareProfile"]
      ? item["hardwareProfile"]
      : computeVirtualMachineScaleSetHardwareProfileSerializer(item["hardwareProfile"]),
    serviceArtifactReference: !item["serviceArtifactReference"]
      ? item["serviceArtifactReference"]
      : computeServiceArtifactReferenceSerializer(item["serviceArtifactReference"]),
    securityPostureReference: !item["securityPostureReference"]
      ? item["securityPostureReference"]
      : computeSecurityPostureReferenceSerializer(item["securityPostureReference"]),
  };
}

export function computeVirtualMachineScaleSetVMProfileDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetVMProfile {
  return {
    osProfile: !item["osProfile"]
      ? item["osProfile"]
      : computeVirtualMachineScaleSetOSProfileDeserializer(item["osProfile"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeVirtualMachineScaleSetStorageProfileDeserializer(item["storageProfile"]),
    networkProfile: !item["networkProfile"]
      ? item["networkProfile"]
      : computeVirtualMachineScaleSetNetworkProfileDeserializer(item["networkProfile"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeSecurityProfileDeserializer(item["securityProfile"]),
    diagnosticsProfile: !item["diagnosticsProfile"]
      ? item["diagnosticsProfile"]
      : computeDiagnosticsProfileDeserializer(item["diagnosticsProfile"]),
    extensionProfile: !item["extensionProfile"]
      ? item["extensionProfile"]
      : computeVirtualMachineScaleSetExtensionProfileDeserializer(item["extensionProfile"]),
    licenseType: item["licenseType"],
    priority: item["priority"],
    evictionPolicy: item["evictionPolicy"],
    billingProfile: !item["billingProfile"]
      ? item["billingProfile"]
      : computeBillingProfileDeserializer(item["billingProfile"]),
    scheduledEventsProfile: !item["scheduledEventsProfile"]
      ? item["scheduledEventsProfile"]
      : computeScheduledEventsProfileDeserializer(item["scheduledEventsProfile"]),
    userData: item["userData"],
    capacityReservation: !item["capacityReservation"]
      ? item["capacityReservation"]
      : computeCapacityReservationProfileDeserializer(item["capacityReservation"]),
    applicationProfile: !item["applicationProfile"]
      ? item["applicationProfile"]
      : computeApplicationProfileDeserializer(item["applicationProfile"]),
    hardwareProfile: !item["hardwareProfile"]
      ? item["hardwareProfile"]
      : computeVirtualMachineScaleSetHardwareProfileDeserializer(item["hardwareProfile"]),
    serviceArtifactReference: !item["serviceArtifactReference"]
      ? item["serviceArtifactReference"]
      : computeServiceArtifactReferenceDeserializer(item["serviceArtifactReference"]),
    securityPostureReference: !item["securityPostureReference"]
      ? item["securityPostureReference"]
      : computeSecurityPostureReferenceDeserializer(item["securityPostureReference"]),
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
  };
}

/** Describes a virtual machine scale set OS profile. */
export interface ComputeVirtualMachineScaleSetOSProfile {
  /** Specifies the computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 15 characters long. */
  computerNamePrefix?: string;
  /** Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters */
  adminUsername?: string;
  /** Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/reset-rdp) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection) */
  adminPassword?: string;
  /** Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. For using cloud-init for your VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/linux/using-cloud-init) */
  customData?: string;
  /** Specifies Windows operating system settings on the virtual machine. */
  windowsConfiguration?: ComputeWindowsConfiguration;
  /** Specifies the Linux operating system settings on the virtual machine. For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/linux/endorsed-distros). */
  linuxConfiguration?: ComputeLinuxConfiguration;
  /** Specifies set of certificates that should be installed onto the virtual machines in the scale set. To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows). */
  secrets?: ComputeVaultSecretGroup[];
  /** Specifies whether extension operations should be allowed on the virtual machine scale set. This may only be set to False when no extensions are present on the virtual machine scale set. */
  allowExtensionOperations?: boolean;
  /** Optional property which must either be set to True or omitted. */
  requireGuestProvisionSignal?: boolean;
}

export function computeVirtualMachineScaleSetOSProfileSerializer(
  item: ComputeVirtualMachineScaleSetOSProfile,
): any {
  return {
    computerNamePrefix: item["computerNamePrefix"],
    adminUsername: item["adminUsername"],
    adminPassword: item["adminPassword"],
    customData: item["customData"],
    windowsConfiguration: !item["windowsConfiguration"]
      ? item["windowsConfiguration"]
      : computeWindowsConfigurationSerializer(item["windowsConfiguration"]),
    linuxConfiguration: !item["linuxConfiguration"]
      ? item["linuxConfiguration"]
      : computeLinuxConfigurationSerializer(item["linuxConfiguration"]),
    secrets: !item["secrets"]
      ? item["secrets"]
      : computeVaultSecretGroupArraySerializer(item["secrets"]),
    allowExtensionOperations: item["allowExtensionOperations"],
    requireGuestProvisionSignal: item["requireGuestProvisionSignal"],
  };
}

export function computeVirtualMachineScaleSetOSProfileDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetOSProfile {
  return {
    computerNamePrefix: item["computerNamePrefix"],
    adminUsername: item["adminUsername"],
    adminPassword: item["adminPassword"],
    customData: item["customData"],
    windowsConfiguration: !item["windowsConfiguration"]
      ? item["windowsConfiguration"]
      : computeWindowsConfigurationDeserializer(item["windowsConfiguration"]),
    linuxConfiguration: !item["linuxConfiguration"]
      ? item["linuxConfiguration"]
      : computeLinuxConfigurationDeserializer(item["linuxConfiguration"]),
    secrets: !item["secrets"]
      ? item["secrets"]
      : computeVaultSecretGroupArrayDeserializer(item["secrets"]),
    allowExtensionOperations: item["allowExtensionOperations"],
    requireGuestProvisionSignal: item["requireGuestProvisionSignal"],
  };
}

/** Specifies Windows operating system settings on the virtual machine. */
export interface ComputeWindowsConfiguration {
  /** Indicates whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified in the request body, it is set to true by default. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later. */
  provisionVMAgent?: boolean;
  /** Indicates whether Automatic Updates is enabled for the Windows virtual machine. Default value is true. For virtual machine scale sets, this property can be updated and updates will take effect on OS reprovisioning. */
  enableAutomaticUpdates?: boolean;
  /** Specifies the time zone of the virtual machine. e.g. "Pacific Standard Time". Possible values can be [TimeZoneInfo.Id](https://docs.microsoft.com/dotnet/api/system.timezoneinfo.id?#System_TimeZoneInfo_Id) value from time zones returned by [TimeZoneInfo.GetSystemTimeZones](https://docs.microsoft.com/dotnet/api/system.timezoneinfo.getsystemtimezones). */
  timeZone?: string;
  /** Specifies additional base-64 encoded XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup. */
  additionalUnattendContent?: ComputeAdditionalUnattendContent[];
  /** [Preview Feature] Specifies settings related to VM Guest Patching on Windows. */
  patchSettings?: ComputePatchSettings;
  /** Specifies the Windows Remote Management listeners. This enables remote Windows PowerShell. */
  winRM?: ComputeWinRMConfiguration;
  /** Indicates whether VMAgent Platform Updates are enabled for the Windows Virtual Machine. */
  readonly enableVMAgentPlatformUpdates?: boolean;
}

export function computeWindowsConfigurationSerializer(item: ComputeWindowsConfiguration): any {
  return {
    provisionVMAgent: item["provisionVMAgent"],
    enableAutomaticUpdates: item["enableAutomaticUpdates"],
    timeZone: item["timeZone"],
    additionalUnattendContent: !item["additionalUnattendContent"]
      ? item["additionalUnattendContent"]
      : computeAdditionalUnattendContentArraySerializer(item["additionalUnattendContent"]),
    patchSettings: !item["patchSettings"]
      ? item["patchSettings"]
      : computePatchSettingsSerializer(item["patchSettings"]),
    winRM: !item["winRM"] ? item["winRM"] : computeWinRMConfigurationSerializer(item["winRM"]),
  };
}

export function computeWindowsConfigurationDeserializer(item: any): ComputeWindowsConfiguration {
  return {
    provisionVMAgent: item["provisionVMAgent"],
    enableAutomaticUpdates: item["enableAutomaticUpdates"],
    timeZone: item["timeZone"],
    additionalUnattendContent: !item["additionalUnattendContent"]
      ? item["additionalUnattendContent"]
      : computeAdditionalUnattendContentArrayDeserializer(item["additionalUnattendContent"]),
    patchSettings: !item["patchSettings"]
      ? item["patchSettings"]
      : computePatchSettingsDeserializer(item["patchSettings"]),
    winRM: !item["winRM"] ? item["winRM"] : computeWinRMConfigurationDeserializer(item["winRM"]),
    enableVMAgentPlatformUpdates: item["enableVMAgentPlatformUpdates"],
  };
}

export function computeAdditionalUnattendContentArraySerializer(
  result: Array<ComputeAdditionalUnattendContent>,
): any[] {
  return result.map((item) => {
    return computeAdditionalUnattendContentSerializer(item);
  });
}

export function computeAdditionalUnattendContentArrayDeserializer(
  result: Array<ComputeAdditionalUnattendContent>,
): any[] {
  return result.map((item) => {
    return computeAdditionalUnattendContentDeserializer(item);
  });
}

/** Specifies additional XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup. Contents are defined by setting name, component name, and the pass in which the content is applied. */
export interface ComputeAdditionalUnattendContent {
  /** The pass name. Currently, the only allowable value is OobeSystem. */
  passName?: ComputePassNames;
  /** The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup. */
  componentName?: ComputeComponentNames;
  /** Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon. */
  settingName?: ComputeSettingNames;
  /** Specifies the XML formatted content that is added to the unattend.xml file for the specified path and component. The XML must be less than 4KB and must include the root element for the setting or feature that is being inserted. */
  content?: string;
}

export function computeAdditionalUnattendContentSerializer(
  item: ComputeAdditionalUnattendContent,
): any {
  return {
    passName: item["passName"],
    componentName: item["componentName"],
    settingName: item["settingName"],
    content: item["content"],
  };
}

export function computeAdditionalUnattendContentDeserializer(
  item: any,
): ComputeAdditionalUnattendContent {
  return {
    passName: item["passName"],
    componentName: item["componentName"],
    settingName: item["settingName"],
    content: item["content"],
  };
}

/** Type of ComputePassNames */
export type ComputePassNames = "OobeSystem";
/** The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup. */
export type ComputeComponentNames = "Microsoft-Windows-Shell-Setup";
/** Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon. */
export type ComputeSettingNames = "AutoLogon" | "FirstLogonCommands";

/** Specifies settings related to VM Guest Patching on Windows. */
export interface ComputePatchSettings {
  /** Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of patches to a virtual machine. You do this by applying patches manually inside the VM. In this mode, automatic updates are disabled; the property WindowsConfiguration.enableAutomaticUpdates must be false<br /><br /> **AutomaticByOS** - The virtual machine will automatically be updated by the OS. The property WindowsConfiguration.enableAutomaticUpdates must be true. <br /><br /> **AutomaticByPlatform** - the virtual machine will automatically updated by the platform. The properties provisionVMAgent and WindowsConfiguration.enableAutomaticUpdates must be true */
  patchMode?: ComputeWindowsVMGuestPatchMode;
  /** Enables customers to patch their Azure VMs without requiring a reboot. For enableHotpatching, the 'provisionVMAgent' must be set to true and 'patchMode' must be set to 'AutomaticByPlatform'. */
  enableHotpatching?: boolean;
  /** Specifies the mode of VM Guest patch assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine.<br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true. */
  assessmentMode?: ComputeWindowsPatchAssessmentMode;
  /** Specifies additional settings for patch mode AutomaticByPlatform in VM Guest Patching on Windows. */
  automaticByPlatformSettings?: ComputeWindowsVMGuestPatchAutomaticByPlatformSettings;
}

export function computePatchSettingsSerializer(item: ComputePatchSettings): any {
  return {
    patchMode: item["patchMode"],
    enableHotpatching: item["enableHotpatching"],
    assessmentMode: item["assessmentMode"],
    automaticByPlatformSettings: !item["automaticByPlatformSettings"]
      ? item["automaticByPlatformSettings"]
      : computeWindowsVMGuestPatchAutomaticByPlatformSettingsSerializer(
          item["automaticByPlatformSettings"],
        ),
  };
}

export function computePatchSettingsDeserializer(item: any): ComputePatchSettings {
  return {
    patchMode: item["patchMode"],
    enableHotpatching: item["enableHotpatching"],
    assessmentMode: item["assessmentMode"],
    automaticByPlatformSettings: !item["automaticByPlatformSettings"]
      ? item["automaticByPlatformSettings"]
      : computeWindowsVMGuestPatchAutomaticByPlatformSettingsDeserializer(
          item["automaticByPlatformSettings"],
        ),
  };
}

/** Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of patches to a virtual machine. You do this by applying patches manually inside the VM. In this mode, automatic updates are disabled; the property WindowsConfiguration.enableAutomaticUpdates must be false<br /><br /> **AutomaticByOS** - The virtual machine will automatically be updated by the OS. The property WindowsConfiguration.enableAutomaticUpdates must be true. <br /><br /> **AutomaticByPlatform** - the virtual machine will automatically updated by the platform. The properties provisionVMAgent and WindowsConfiguration.enableAutomaticUpdates must be true */
export enum KnownComputeWindowsVMGuestPatchMode {
  /** Manual */
  Manual = "Manual",
  /** AutomaticByOS */
  AutomaticByOS = "AutomaticByOS",
  /** AutomaticByPlatform */
  AutomaticByPlatform = "AutomaticByPlatform",
}

/**
 * Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of patches to a virtual machine. You do this by applying patches manually inside the VM. In this mode, automatic updates are disabled; the property WindowsConfiguration.enableAutomaticUpdates must be false<br /><br /> **AutomaticByOS** - The virtual machine will automatically be updated by the OS. The property WindowsConfiguration.enableAutomaticUpdates must be true. <br /><br /> **AutomaticByPlatform** - the virtual machine will automatically updated by the platform. The properties provisionVMAgent and WindowsConfiguration.enableAutomaticUpdates must be true \
 * {@link KnownComputeWindowsVMGuestPatchMode} can be used interchangeably with ComputeWindowsVMGuestPatchMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Manual** \
 * **AutomaticByOS** \
 * **AutomaticByPlatform**
 */
export type ComputeWindowsVMGuestPatchMode = string;

/** Specifies the mode of VM Guest patch assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine.<br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true. */
export enum KnownComputeWindowsPatchAssessmentMode {
  /** ImageDefault */
  ImageDefault = "ImageDefault",
  /** AutomaticByPlatform */
  AutomaticByPlatform = "AutomaticByPlatform",
}

/**
 * Specifies the mode of VM Guest patch assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine.<br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true. \
 * {@link KnownComputeWindowsPatchAssessmentMode} can be used interchangeably with ComputeWindowsPatchAssessmentMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ImageDefault** \
 * **AutomaticByPlatform**
 */
export type ComputeWindowsPatchAssessmentMode = string;

/** Specifies additional settings to be applied when patch mode AutomaticByPlatform is selected in Windows patch settings. */
export interface ComputeWindowsVMGuestPatchAutomaticByPlatformSettings {
  /** Specifies the reboot setting for all AutomaticByPlatform patch installation operations. */
  rebootSetting?: ComputeWindowsVMGuestPatchAutomaticByPlatformRebootSetting;
  /** Enables customer to schedule patching without accidental upgrades */
  bypassPlatformSafetyChecksOnUserSchedule?: boolean;
}

export function computeWindowsVMGuestPatchAutomaticByPlatformSettingsSerializer(
  item: ComputeWindowsVMGuestPatchAutomaticByPlatformSettings,
): any {
  return {
    rebootSetting: item["rebootSetting"],
    bypassPlatformSafetyChecksOnUserSchedule: item["bypassPlatformSafetyChecksOnUserSchedule"],
  };
}

export function computeWindowsVMGuestPatchAutomaticByPlatformSettingsDeserializer(
  item: any,
): ComputeWindowsVMGuestPatchAutomaticByPlatformSettings {
  return {
    rebootSetting: item["rebootSetting"],
    bypassPlatformSafetyChecksOnUserSchedule: item["bypassPlatformSafetyChecksOnUserSchedule"],
  };
}

/** Specifies the reboot setting for all AutomaticByPlatform patch installation operations. */
export enum KnownComputeWindowsVMGuestPatchAutomaticByPlatformRebootSetting {
  /** Unknown */
  Unknown = "Unknown",
  /** IfRequired */
  IfRequired = "IfRequired",
  /** Never */
  Never = "Never",
  /** Always */
  Always = "Always",
}

/**
 * Specifies the reboot setting for all AutomaticByPlatform patch installation operations. \
 * {@link KnownComputeWindowsVMGuestPatchAutomaticByPlatformRebootSetting} can be used interchangeably with ComputeWindowsVMGuestPatchAutomaticByPlatformRebootSetting,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **IfRequired** \
 * **Never** \
 * **Always**
 */
export type ComputeWindowsVMGuestPatchAutomaticByPlatformRebootSetting = string;

/** Describes Windows Remote Management configuration of the VM */
export interface ComputeWinRMConfiguration {
  /** The list of Windows Remote Management listeners */
  listeners?: ComputeWinRMListener[];
}

export function computeWinRMConfigurationSerializer(item: ComputeWinRMConfiguration): any {
  return {
    listeners: !item["listeners"]
      ? item["listeners"]
      : computeWinRMListenerArraySerializer(item["listeners"]),
  };
}

export function computeWinRMConfigurationDeserializer(item: any): ComputeWinRMConfiguration {
  return {
    listeners: !item["listeners"]
      ? item["listeners"]
      : computeWinRMListenerArrayDeserializer(item["listeners"]),
  };
}

export function computeWinRMListenerArraySerializer(result: Array<ComputeWinRMListener>): any[] {
  return result.map((item) => {
    return computeWinRMListenerSerializer(item);
  });
}

export function computeWinRMListenerArrayDeserializer(result: Array<ComputeWinRMListener>): any[] {
  return result.map((item) => {
    return computeWinRMListenerDeserializer(item);
  });
}

/** Describes Protocol and thumbprint of Windows Remote Management listener */
export interface ComputeWinRMListener {
  /** Specifies the protocol of WinRM listener. Possible values are: **http,** **https.** */
  protocol?: ComputeProtocolTypes;
  /** This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} <br> To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows). */
  certificateUrl?: string;
}

export function computeWinRMListenerSerializer(item: ComputeWinRMListener): any {
  return { protocol: item["protocol"], certificateUrl: item["certificateUrl"] };
}

export function computeWinRMListenerDeserializer(item: any): ComputeWinRMListener {
  return {
    protocol: item["protocol"],
    certificateUrl: item["certificateUrl"],
  };
}

/** Specifies the protocol of WinRM listener. Possible values are: **http,** **https.** */
export type ComputeProtocolTypes = "Http" | "Https";

/** Specifies the Linux operating system settings on the virtual machine. For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/linux/endorsed-distros). */
export interface ComputeLinuxConfiguration {
  /** Specifies whether password authentication should be disabled. */
  disablePasswordAuthentication?: boolean;
  /** Specifies the ssh key configuration for a Linux OS. */
  ssh?: ComputeSshConfiguration;
  /** Indicates whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified in the request body, default behavior is to set it to true. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later. */
  provisionVMAgent?: boolean;
  /** [Preview Feature] Specifies settings related to VM Guest Patching on Linux. */
  patchSettings?: ComputeLinuxPatchSettings;
  /** Indicates whether VMAgent Platform Updates is enabled for the Linux virtual machine. Default value is false. */
  enableVMAgentPlatformUpdates?: boolean;
}

export function computeLinuxConfigurationSerializer(item: ComputeLinuxConfiguration): any {
  return {
    disablePasswordAuthentication: item["disablePasswordAuthentication"],
    ssh: !item["ssh"] ? item["ssh"] : computeSshConfigurationSerializer(item["ssh"]),
    provisionVMAgent: item["provisionVMAgent"],
    patchSettings: !item["patchSettings"]
      ? item["patchSettings"]
      : computeLinuxPatchSettingsSerializer(item["patchSettings"]),
    enableVMAgentPlatformUpdates: item["enableVMAgentPlatformUpdates"],
  };
}

export function computeLinuxConfigurationDeserializer(item: any): ComputeLinuxConfiguration {
  return {
    disablePasswordAuthentication: item["disablePasswordAuthentication"],
    ssh: !item["ssh"] ? item["ssh"] : computeSshConfigurationDeserializer(item["ssh"]),
    provisionVMAgent: item["provisionVMAgent"],
    patchSettings: !item["patchSettings"]
      ? item["patchSettings"]
      : computeLinuxPatchSettingsDeserializer(item["patchSettings"]),
    enableVMAgentPlatformUpdates: item["enableVMAgentPlatformUpdates"],
  };
}

/** SSH configuration for Linux based VMs running on Azure */
export interface ComputeSshConfiguration {
  /** The list of SSH public keys used to authenticate with linux based VMs. */
  publicKeys?: ComputeSshPublicKey[];
}

export function computeSshConfigurationSerializer(item: ComputeSshConfiguration): any {
  return {
    publicKeys: !item["publicKeys"]
      ? item["publicKeys"]
      : computeSshPublicKeyArraySerializer(item["publicKeys"]),
  };
}

export function computeSshConfigurationDeserializer(item: any): ComputeSshConfiguration {
  return {
    publicKeys: !item["publicKeys"]
      ? item["publicKeys"]
      : computeSshPublicKeyArrayDeserializer(item["publicKeys"]),
  };
}

export function computeSshPublicKeyArraySerializer(result: Array<ComputeSshPublicKey>): any[] {
  return result.map((item) => {
    return computeSshPublicKeySerializer(item);
  });
}

export function computeSshPublicKeyArrayDeserializer(result: Array<ComputeSshPublicKey>): any[] {
  return result.map((item) => {
    return computeSshPublicKeyDeserializer(item);
  });
}

/** Contains information about SSH certificate public key and the path on the Linux VM where the public key is placed. */
export interface ComputeSshPublicKey {
  /** Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys */
  path?: string;
  /** SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure]https://docs.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed). */
  keyData?: string;
}

export function computeSshPublicKeySerializer(item: ComputeSshPublicKey): any {
  return { path: item["path"], keyData: item["keyData"] };
}

export function computeSshPublicKeyDeserializer(item: any): ComputeSshPublicKey {
  return {
    path: item["path"],
    keyData: item["keyData"],
  };
}

/** Specifies settings related to VM Guest Patching on Linux. */
export interface ComputeLinuxPatchSettings {
  /** Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - The virtual machine's default patching configuration is used. <br /><br /> **AutomaticByPlatform** - The virtual machine will be automatically updated by the platform. The property provisionVMAgent must be true */
  patchMode?: ComputeLinuxVMGuestPatchMode;
  /** Specifies the mode of VM Guest Patch Assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine. <br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true. */
  assessmentMode?: ComputeLinuxPatchAssessmentMode;
  /** Specifies additional settings for patch mode AutomaticByPlatform in VM Guest Patching on Linux. */
  automaticByPlatformSettings?: ComputeLinuxVMGuestPatchAutomaticByPlatformSettings;
}

export function computeLinuxPatchSettingsSerializer(item: ComputeLinuxPatchSettings): any {
  return {
    patchMode: item["patchMode"],
    assessmentMode: item["assessmentMode"],
    automaticByPlatformSettings: !item["automaticByPlatformSettings"]
      ? item["automaticByPlatformSettings"]
      : computeLinuxVMGuestPatchAutomaticByPlatformSettingsSerializer(
          item["automaticByPlatformSettings"],
        ),
  };
}

export function computeLinuxPatchSettingsDeserializer(item: any): ComputeLinuxPatchSettings {
  return {
    patchMode: item["patchMode"],
    assessmentMode: item["assessmentMode"],
    automaticByPlatformSettings: !item["automaticByPlatformSettings"]
      ? item["automaticByPlatformSettings"]
      : computeLinuxVMGuestPatchAutomaticByPlatformSettingsDeserializer(
          item["automaticByPlatformSettings"],
        ),
  };
}

/** Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - The virtual machine's default patching configuration is used. <br /><br /> **AutomaticByPlatform** - The virtual machine will be automatically updated by the platform. The property provisionVMAgent must be true */
export enum KnownComputeLinuxVMGuestPatchMode {
  /** ImageDefault */
  ImageDefault = "ImageDefault",
  /** AutomaticByPlatform */
  AutomaticByPlatform = "AutomaticByPlatform",
}

/**
 * Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - The virtual machine's default patching configuration is used. <br /><br /> **AutomaticByPlatform** - The virtual machine will be automatically updated by the platform. The property provisionVMAgent must be true \
 * {@link KnownComputeLinuxVMGuestPatchMode} can be used interchangeably with ComputeLinuxVMGuestPatchMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ImageDefault** \
 * **AutomaticByPlatform**
 */
export type ComputeLinuxVMGuestPatchMode = string;

/** Specifies the mode of VM Guest Patch Assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine. <br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true. */
export enum KnownComputeLinuxPatchAssessmentMode {
  /** ImageDefault */
  ImageDefault = "ImageDefault",
  /** AutomaticByPlatform */
  AutomaticByPlatform = "AutomaticByPlatform",
}

/**
 * Specifies the mode of VM Guest Patch Assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine. <br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true. \
 * {@link KnownComputeLinuxPatchAssessmentMode} can be used interchangeably with ComputeLinuxPatchAssessmentMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ImageDefault** \
 * **AutomaticByPlatform**
 */
export type ComputeLinuxPatchAssessmentMode = string;

/** Specifies additional settings to be applied when patch mode AutomaticByPlatform is selected in Linux patch settings. */
export interface ComputeLinuxVMGuestPatchAutomaticByPlatformSettings {
  /** Specifies the reboot setting for all AutomaticByPlatform patch installation operations. */
  rebootSetting?: ComputeLinuxVMGuestPatchAutomaticByPlatformRebootSetting;
  /** Enables customer to schedule patching without accidental upgrades */
  bypassPlatformSafetyChecksOnUserSchedule?: boolean;
}

export function computeLinuxVMGuestPatchAutomaticByPlatformSettingsSerializer(
  item: ComputeLinuxVMGuestPatchAutomaticByPlatformSettings,
): any {
  return {
    rebootSetting: item["rebootSetting"],
    bypassPlatformSafetyChecksOnUserSchedule: item["bypassPlatformSafetyChecksOnUserSchedule"],
  };
}

export function computeLinuxVMGuestPatchAutomaticByPlatformSettingsDeserializer(
  item: any,
): ComputeLinuxVMGuestPatchAutomaticByPlatformSettings {
  return {
    rebootSetting: item["rebootSetting"],
    bypassPlatformSafetyChecksOnUserSchedule: item["bypassPlatformSafetyChecksOnUserSchedule"],
  };
}

/** Specifies the reboot setting for all AutomaticByPlatform patch installation operations. */
export enum KnownComputeLinuxVMGuestPatchAutomaticByPlatformRebootSetting {
  /** Unknown */
  Unknown = "Unknown",
  /** IfRequired */
  IfRequired = "IfRequired",
  /** Never */
  Never = "Never",
  /** Always */
  Always = "Always",
}

/**
 * Specifies the reboot setting for all AutomaticByPlatform patch installation operations. \
 * {@link KnownComputeLinuxVMGuestPatchAutomaticByPlatformRebootSetting} can be used interchangeably with ComputeLinuxVMGuestPatchAutomaticByPlatformRebootSetting,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **IfRequired** \
 * **Never** \
 * **Always**
 */
export type ComputeLinuxVMGuestPatchAutomaticByPlatformRebootSetting = string;

export function computeVaultSecretGroupArraySerializer(
  result: Array<ComputeVaultSecretGroup>,
): any[] {
  return result.map((item) => {
    return computeVaultSecretGroupSerializer(item);
  });
}

export function computeVaultSecretGroupArrayDeserializer(
  result: Array<ComputeVaultSecretGroup>,
): any[] {
  return result.map((item) => {
    return computeVaultSecretGroupDeserializer(item);
  });
}

/** Describes a set of certificates which are all in the same Key Vault. */
export interface ComputeVaultSecretGroup {
  /** The relative URL of the Key Vault containing all of the certificates in VaultCertificates. */
  sourceVault?: CommonSubResource;
  /** The list of key vault references in SourceVault which contain certificates. */
  vaultCertificates?: ComputeVaultCertificate[];
}

export function computeVaultSecretGroupSerializer(item: ComputeVaultSecretGroup): any {
  return {
    sourceVault: !item["sourceVault"]
      ? item["sourceVault"]
      : commonSubResourceSerializer(item["sourceVault"]),
    vaultCertificates: !item["vaultCertificates"]
      ? item["vaultCertificates"]
      : computeVaultCertificateArraySerializer(item["vaultCertificates"]),
  };
}

export function computeVaultSecretGroupDeserializer(item: any): ComputeVaultSecretGroup {
  return {
    sourceVault: !item["sourceVault"]
      ? item["sourceVault"]
      : commonSubResourceDeserializer(item["sourceVault"]),
    vaultCertificates: !item["vaultCertificates"]
      ? item["vaultCertificates"]
      : computeVaultCertificateArrayDeserializer(item["vaultCertificates"]),
  };
}

export function computeVaultCertificateArraySerializer(
  result: Array<ComputeVaultCertificate>,
): any[] {
  return result.map((item) => {
    return computeVaultCertificateSerializer(item);
  });
}

export function computeVaultCertificateArrayDeserializer(
  result: Array<ComputeVaultCertificate>,
): any[] {
  return result.map((item) => {
    return computeVaultCertificateDeserializer(item);
  });
}

/** Describes a single certificate reference in a Key Vault, and where the certificate should reside on the VM. */
export interface ComputeVaultCertificate {
  /** This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} <br> To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows). */
  certificateUrl?: string;
  /** For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name &lt;UppercaseThumbprint&gt;.crt for the X509 certificate file and &lt;UppercaseThumbprint&gt;.prv for private key. Both of these files are .pem formatted. */
  certificateStore?: string;
}

export function computeVaultCertificateSerializer(item: ComputeVaultCertificate): any {
  return { certificateUrl: item["certificateUrl"], certificateStore: item["certificateStore"] };
}

export function computeVaultCertificateDeserializer(item: any): ComputeVaultCertificate {
  return {
    certificateUrl: item["certificateUrl"],
    certificateStore: item["certificateStore"],
  };
}

/** Describes a virtual machine scale set storage profile. */
export interface ComputeVirtualMachineScaleSetStorageProfile {
  /** Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. */
  imageReference?: ComputeImageReference;
  /** Specifies information about the operating system disk used by the virtual machines in the scale set. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview). */
  osDisk?: ComputeVirtualMachineScaleSetOSDisk;
  /** Specifies the parameters that are used to add data disks to the virtual machines in the scale set. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview). */
  dataDisks?: ComputeVirtualMachineScaleSetDataDisk[];
  /** Specifies the disk controller type configured for the virtual machines in the scale set. Minimum api-version: 2022-08-01 */
  diskControllerType?: ComputeDiskControllerTypes;
}

export function computeVirtualMachineScaleSetStorageProfileSerializer(
  item: ComputeVirtualMachineScaleSetStorageProfile,
): any {
  return {
    imageReference: !item["imageReference"]
      ? item["imageReference"]
      : computeImageReferenceSerializer(item["imageReference"]),
    osDisk: !item["osDisk"]
      ? item["osDisk"]
      : computeVirtualMachineScaleSetOSDiskSerializer(item["osDisk"]),
    dataDisks: !item["dataDisks"]
      ? item["dataDisks"]
      : computeVirtualMachineScaleSetDataDiskArraySerializer(item["dataDisks"]),
    diskControllerType: item["diskControllerType"],
  };
}

export function computeVirtualMachineScaleSetStorageProfileDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetStorageProfile {
  return {
    imageReference: !item["imageReference"]
      ? item["imageReference"]
      : computeImageReferenceDeserializer(item["imageReference"]),
    osDisk: !item["osDisk"]
      ? item["osDisk"]
      : computeVirtualMachineScaleSetOSDiskDeserializer(item["osDisk"]),
    dataDisks: !item["dataDisks"]
      ? item["dataDisks"]
      : computeVirtualMachineScaleSetDataDiskArrayDeserializer(item["dataDisks"]),
    diskControllerType: item["diskControllerType"],
  };
}

/** Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. NOTE: Image reference publisher and offer can only be set when you create the scale set. */
export interface ComputeImageReference extends CommonSubResource {
  /** The image publisher. */
  publisher?: string;
  /** Specifies the offer of the platform image or marketplace image used to create the virtual machine. */
  offer?: string;
  /** The image SKU. */
  sku?: string;
  /** Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available. Please do not use field 'version' for gallery image deployment, gallery image should always use 'id' field for deployment, to use 'latest' version of gallery image, just set '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{imageName}' in the 'id' field without version input. */
  version?: string;
  /** Specifies in decimal numbers, the version of platform image or marketplace image used to create the virtual machine. This readonly field differs from 'version', only if the value specified in 'version' field is 'latest'. */
  readonly exactVersion?: string;
  /** Specified the shared gallery image unique id for vm deployment. This can be fetched from shared gallery image GET call. */
  sharedGalleryImageId?: string;
  /** Specified the community gallery image unique id for vm deployment. This can be fetched from community gallery image GET call. */
  communityGalleryImageId?: string;
}

export function computeImageReferenceSerializer(item: ComputeImageReference): any {
  return {
    id: item["id"],
    publisher: item["publisher"],
    offer: item["offer"],
    sku: item["sku"],
    version: item["version"],
    sharedGalleryImageId: item["sharedGalleryImageId"],
    communityGalleryImageId: item["communityGalleryImageId"],
  };
}

export function computeImageReferenceDeserializer(item: any): ComputeImageReference {
  return {
    id: item["id"],
    publisher: item["publisher"],
    offer: item["offer"],
    sku: item["sku"],
    version: item["version"],
    exactVersion: item["exactVersion"],
    sharedGalleryImageId: item["sharedGalleryImageId"],
    communityGalleryImageId: item["communityGalleryImageId"],
  };
}

/** Describes a virtual machine scale set operating system disk. */
export interface ComputeVirtualMachineScaleSetOSDisk {
  /** The disk name. */
  name?: string;
  /** Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The default values are: **None for Standard storage. ReadOnly for Premium storage.** */
  caching?: ComputeCachingTypes;
  /** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
  writeAcceleratorEnabled?: boolean;
  /** Specifies how the virtual machines in the scale set should be created. The only allowed value is: **FromImage.** This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described. */
  createOption: ComputeDiskCreateOptionTypes;
  /** Specifies the ephemeral disk Settings for the operating system disk used by the virtual machine scale set. */
  diffDiskSettings?: ComputeDiffDiskSettings;
  /** Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023. */
  diskSizeGB?: number;
  /** This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are: **Windows,** **Linux.** */
  osType?: CommonOperatingSystemTypes;
  /** Specifies information about the unmanaged user image to base the scale set on. */
  image?: ComputeVirtualHardDisk;
  /** Specifies the container urls that are used to store operating system disks for the scale set. */
  vhdContainers?: string[];
  /** The managed disk parameters. */
  managedDisk?: ComputeVirtualMachineScaleSetManagedDiskParameters;
  /** Specifies whether OS Disk should be deleted or detached upon VMSS Flex deletion (This feature is available for VMSS with Flexible OrchestrationMode only). <br><br> Possible values: <br><br> **Delete** If this value is used, the OS disk is deleted when VMSS Flex VM is deleted.<br><br> **Detach** If this value is used, the OS disk is retained after VMSS Flex VM is deleted. <br><br> The default value is set to **Delete**. For an Ephemeral OS Disk, the default value is set to **Delete**. User cannot change the delete option for Ephemeral OS Disk. */
  deleteOption?: ComputeDiskDeleteOptionTypes;
}

export function computeVirtualMachineScaleSetOSDiskSerializer(
  item: ComputeVirtualMachineScaleSetOSDisk,
): any {
  return {
    name: item["name"],
    caching: item["caching"],
    writeAcceleratorEnabled: item["writeAcceleratorEnabled"],
    createOption: item["createOption"],
    diffDiskSettings: !item["diffDiskSettings"]
      ? item["diffDiskSettings"]
      : computeDiffDiskSettingsSerializer(item["diffDiskSettings"]),
    diskSizeGB: item["diskSizeGB"],
    osType: item["osType"],
    image: !item["image"] ? item["image"] : computeVirtualHardDiskSerializer(item["image"]),
    vhdContainers: !item["vhdContainers"]
      ? item["vhdContainers"]
      : item["vhdContainers"].map((p: any) => {
          return p;
        }),
    managedDisk: !item["managedDisk"]
      ? item["managedDisk"]
      : computeVirtualMachineScaleSetManagedDiskParametersSerializer(item["managedDisk"]),
    deleteOption: item["deleteOption"],
  };
}

export function computeVirtualMachineScaleSetOSDiskDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetOSDisk {
  return {
    name: item["name"],
    caching: item["caching"],
    writeAcceleratorEnabled: item["writeAcceleratorEnabled"],
    createOption: item["createOption"],
    diffDiskSettings: !item["diffDiskSettings"]
      ? item["diffDiskSettings"]
      : computeDiffDiskSettingsDeserializer(item["diffDiskSettings"]),
    diskSizeGB: item["diskSizeGB"],
    osType: item["osType"],
    image: !item["image"] ? item["image"] : computeVirtualHardDiskDeserializer(item["image"]),
    vhdContainers: !item["vhdContainers"]
      ? item["vhdContainers"]
      : item["vhdContainers"].map((p: any) => {
          return p;
        }),
    managedDisk: !item["managedDisk"]
      ? item["managedDisk"]
      : computeVirtualMachineScaleSetManagedDiskParametersDeserializer(item["managedDisk"]),
    deleteOption: item["deleteOption"],
  };
}

/** Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The default values are: **None for Standard storage. ReadOnly for Premium storage** */
export type ComputeCachingTypes = "None" | "ReadOnly" | "ReadWrite";

/** Specifies how the virtual machine disk should be created. Possible values are **Attach:** This value is used when you are using a specialized disk to create the virtual machine. **FromImage:** This value is used when you are using an image to create the virtual machine. If you are using a platform image, you should also use the imageReference element described above. If you are using a marketplace image, you should also use the plan element previously described. **Empty:** This value is used when creating an empty data disk. **Copy:** This value is used to create a data disk from a snapshot or another disk. **Restore:** This value is used to create a data disk from a disk restore point. */
export enum KnownComputeDiskCreateOptionTypes {
  /** FromImage */
  FromImage = "FromImage",
  /** Empty */
  Empty = "Empty",
  /** Attach */
  Attach = "Attach",
  /** Copy */
  Copy = "Copy",
  /** Restore */
  Restore = "Restore",
}

/**
 * Specifies how the virtual machine disk should be created. Possible values are **Attach:** This value is used when you are using a specialized disk to create the virtual machine. **FromImage:** This value is used when you are using an image to create the virtual machine. If you are using a platform image, you should also use the imageReference element described above. If you are using a marketplace image, you should also use the plan element previously described. **Empty:** This value is used when creating an empty data disk. **Copy:** This value is used to create a data disk from a snapshot or another disk. **Restore:** This value is used to create a data disk from a disk restore point. \
 * {@link KnownComputeDiskCreateOptionTypes} can be used interchangeably with ComputeDiskCreateOptionTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **FromImage** \
 * **Empty** \
 * **Attach** \
 * **Copy** \
 * **Restore**
 */
export type ComputeDiskCreateOptionTypes = string;

/** Describes the parameters of ephemeral disk settings that can be specified for operating system disk. **Note:** The ephemeral disk settings can only be specified for managed disk. */
export interface ComputeDiffDiskSettings {
  /** Specifies the ephemeral disk settings for operating system disk. */
  option?: ComputeDiffDiskOptions;
  /** Specifies the ephemeral disk placement for operating system disk. Possible values are: **CacheDisk,** **ResourceDisk,** **NvmeDisk.** The defaulting behavior is: **CacheDisk** if one is configured for the VM size otherwise **ResourceDisk** or **NvmeDisk** is used. Refer to the VM size documentation for Windows VM at https://docs.microsoft.com/azure/virtual-machines/windows/sizes and Linux VM at https://docs.microsoft.com/azure/virtual-machines/linux/sizes to check which VM sizes exposes a cache disk. Minimum api-version for NvmeDisk: 2024-03-01. */
  placement?: ComputeDiffDiskPlacement;
}

export function computeDiffDiskSettingsSerializer(item: ComputeDiffDiskSettings): any {
  return { option: item["option"], placement: item["placement"] };
}

export function computeDiffDiskSettingsDeserializer(item: any): ComputeDiffDiskSettings {
  return {
    option: item["option"],
    placement: item["placement"],
  };
}

/** Specifies the ephemeral disk option for operating system disk. */
export enum KnownComputeDiffDiskOptions {
  /** Local */
  Local = "Local",
}

/**
 * Specifies the ephemeral disk option for operating system disk. \
 * {@link KnownComputeDiffDiskOptions} can be used interchangeably with ComputeDiffDiskOptions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Local**
 */
export type ComputeDiffDiskOptions = string;

/** Specifies the ephemeral disk placement for operating system disk. This property can be used by user in the request to choose the location i.e, cache disk, resource disk or nvme disk space for Ephemeral OS disk provisioning. For more information on Ephemeral OS disk size requirements, please refer Ephemeral OS disk size requirements for Windows VM at https://docs.microsoft.com/azure/virtual-machines/windows/ephemeral-os-disks#size-requirements and Linux VM at https://docs.microsoft.com/azure/virtual-machines/linux/ephemeral-os-disks#size-requirements. Minimum api-version for NvmeDisk: 2024-03-01. */
export enum KnownComputeDiffDiskPlacement {
  /** CacheDisk */
  CacheDisk = "CacheDisk",
  /** ResourceDisk */
  ResourceDisk = "ResourceDisk",
  /** NvmeDisk */
  NvmeDisk = "NvmeDisk",
}

/**
 * Specifies the ephemeral disk placement for operating system disk. This property can be used by user in the request to choose the location i.e, cache disk, resource disk or nvme disk space for Ephemeral OS disk provisioning. For more information on Ephemeral OS disk size requirements, please refer Ephemeral OS disk size requirements for Windows VM at https://docs.microsoft.com/azure/virtual-machines/windows/ephemeral-os-disks#size-requirements and Linux VM at https://docs.microsoft.com/azure/virtual-machines/linux/ephemeral-os-disks#size-requirements. Minimum api-version for NvmeDisk: 2024-03-01. \
 * {@link KnownComputeDiffDiskPlacement} can be used interchangeably with ComputeDiffDiskPlacement,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **CacheDisk** \
 * **ResourceDisk** \
 * **NvmeDisk**
 */
export type ComputeDiffDiskPlacement = string;

/** Describes the uri of a disk. */
export interface ComputeVirtualHardDisk {
  /** Specifies the virtual hard disk's uri. */
  uri?: string;
}

export function computeVirtualHardDiskSerializer(item: ComputeVirtualHardDisk): any {
  return { uri: item["uri"] };
}

export function computeVirtualHardDiskDeserializer(item: any): ComputeVirtualHardDisk {
  return {
    uri: item["uri"],
  };
}

/** Describes the parameters of a ScaleSet managed disk. */
export interface ComputeVirtualMachineScaleSetManagedDiskParameters {
  /** Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk. */
  storageAccountType?: ComputeStorageAccountTypes;
  /** Specifies the customer managed disk encryption set resource id for the managed disk. */
  diskEncryptionSet?: ComputeDiskEncryptionSetParameters;
  /** Specifies the security profile for the managed disk. */
  securityProfile?: ComputeVMDiskSecurityProfile;
}

export function computeVirtualMachineScaleSetManagedDiskParametersSerializer(
  item: ComputeVirtualMachineScaleSetManagedDiskParameters,
): any {
  return {
    storageAccountType: item["storageAccountType"],
    diskEncryptionSet: !item["diskEncryptionSet"]
      ? item["diskEncryptionSet"]
      : computeDiskEncryptionSetParametersSerializer(item["diskEncryptionSet"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeVMDiskSecurityProfileSerializer(item["securityProfile"]),
  };
}

export function computeVirtualMachineScaleSetManagedDiskParametersDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetManagedDiskParameters {
  return {
    storageAccountType: item["storageAccountType"],
    diskEncryptionSet: !item["diskEncryptionSet"]
      ? item["diskEncryptionSet"]
      : computeDiskEncryptionSetParametersDeserializer(item["diskEncryptionSet"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeVMDiskSecurityProfileDeserializer(item["securityProfile"]),
  };
}

/** Specifies the storage account type for the managed disk. Managed OS disk storage account type can only be set when you create the scale set. NOTE: UltraSSD_LRS can only be used with data disks. It cannot be used with OS Disk. Standard_LRS uses Standard HDD. StandardSSD_LRS uses Standard SSD. Premium_LRS uses Premium SSD. UltraSSD_LRS uses Ultra disk. Premium_ZRS uses Premium SSD zone redundant storage. StandardSSD_ZRS uses Standard SSD zone redundant storage. For more information regarding disks supported for Windows Virtual Machines, refer to https://docs.microsoft.com/azure/virtual-machines/windows/disks-types and, for Linux Virtual Machines, refer to https://docs.microsoft.com/azure/virtual-machines/linux/disks-types */
export enum KnownComputeStorageAccountTypes {
  /** Standard_LRS */
  StandardLRS = "Standard_LRS",
  /** Premium_LRS */
  PremiumLRS = "Premium_LRS",
  /** StandardSSD_LRS */
  StandardSSDLRS = "StandardSSD_LRS",
  /** UltraSSD_LRS */
  UltraSSDLRS = "UltraSSD_LRS",
  /** Premium_ZRS */
  PremiumZRS = "Premium_ZRS",
  /** StandardSSD_ZRS */
  StandardSSDZRS = "StandardSSD_ZRS",
  /** PremiumV2_LRS */
  PremiumV2LRS = "PremiumV2_LRS",
}

/**
 * Specifies the storage account type for the managed disk. Managed OS disk storage account type can only be set when you create the scale set. NOTE: UltraSSD_LRS can only be used with data disks. It cannot be used with OS Disk. Standard_LRS uses Standard HDD. StandardSSD_LRS uses Standard SSD. Premium_LRS uses Premium SSD. UltraSSD_LRS uses Ultra disk. Premium_ZRS uses Premium SSD zone redundant storage. StandardSSD_ZRS uses Standard SSD zone redundant storage. For more information regarding disks supported for Windows Virtual Machines, refer to https://docs.microsoft.com/azure/virtual-machines/windows/disks-types and, for Linux Virtual Machines, refer to https://docs.microsoft.com/azure/virtual-machines/linux/disks-types \
 * {@link KnownComputeStorageAccountTypes} can be used interchangeably with ComputeStorageAccountTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard_LRS** \
 * **Premium_LRS** \
 * **StandardSSD_LRS** \
 * **UltraSSD_LRS** \
 * **Premium_ZRS** \
 * **StandardSSD_ZRS** \
 * **PremiumV2_LRS**
 */
export type ComputeStorageAccountTypes = string;

/** Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. **Note:** The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details. */
export interface ComputeDiskEncryptionSetParameters extends CommonSubResource {}

export function computeDiskEncryptionSetParametersSerializer(
  item: ComputeDiskEncryptionSetParameters,
): any {
  return { id: item["id"] };
}

export function computeDiskEncryptionSetParametersDeserializer(
  item: any,
): ComputeDiskEncryptionSetParameters {
  return {
    id: item["id"],
  };
}

/** Specifies the security profile settings for the managed disk. **Note:** It can only be set for Confidential VMs. */
export interface ComputeVMDiskSecurityProfile {
  /** Specifies the EncryptionType of the managed disk. It is set to DiskWithVMGuestState for encryption of the managed disk along with VMGuestState blob, VMGuestStateOnly for encryption of just the VMGuestState blob, and NonPersistedTPM for not persisting firmware state in the VMGuestState blob.. **Note:** It can be set for only Confidential VMs. */
  securityEncryptionType?: ComputeSecurityEncryptionTypes;
  /** Specifies the customer managed disk encryption set resource id for the managed disk that is used for Customer Managed Key encrypted ConfidentialVM OS Disk and VMGuest blob. */
  diskEncryptionSet?: ComputeDiskEncryptionSetParameters;
}

export function computeVMDiskSecurityProfileSerializer(item: ComputeVMDiskSecurityProfile): any {
  return {
    securityEncryptionType: item["securityEncryptionType"],
    diskEncryptionSet: !item["diskEncryptionSet"]
      ? item["diskEncryptionSet"]
      : computeDiskEncryptionSetParametersSerializer(item["diskEncryptionSet"]),
  };
}

export function computeVMDiskSecurityProfileDeserializer(item: any): ComputeVMDiskSecurityProfile {
  return {
    securityEncryptionType: item["securityEncryptionType"],
    diskEncryptionSet: !item["diskEncryptionSet"]
      ? item["diskEncryptionSet"]
      : computeDiskEncryptionSetParametersDeserializer(item["diskEncryptionSet"]),
  };
}

/** Specifies the EncryptionType of the managed disk. It is set to DiskWithVMGuestState for encryption of the managed disk along with VMGuestState blob, VMGuestStateOnly for encryption of just the VMGuestState blob, and NonPersistedTPM for not persisting firmware state in the VMGuestState blob.. **Note:** It can be set for only Confidential VMs. */
export enum KnownComputeSecurityEncryptionTypes {
  /** VMGuestStateOnly */
  VMGuestStateOnly = "VMGuestStateOnly",
  /** DiskWithVMGuestState */
  DiskWithVMGuestState = "DiskWithVMGuestState",
  /** NonPersistedTPM */
  NonPersistedTPM = "NonPersistedTPM",
}

/**
 * Specifies the EncryptionType of the managed disk. It is set to DiskWithVMGuestState for encryption of the managed disk along with VMGuestState blob, VMGuestStateOnly for encryption of just the VMGuestState blob, and NonPersistedTPM for not persisting firmware state in the VMGuestState blob.. **Note:** It can be set for only Confidential VMs. \
 * {@link KnownComputeSecurityEncryptionTypes} can be used interchangeably with ComputeSecurityEncryptionTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **VMGuestStateOnly** \
 * **DiskWithVMGuestState** \
 * **NonPersistedTPM**
 */
export type ComputeSecurityEncryptionTypes = string;

/** Specifies the behavior of the managed disk when the VM gets deleted, for example whether the managed disk is deleted or detached. Supported values are: **Delete.** If this value is used, the managed disk is deleted when VM gets deleted. **Detach.** If this value is used, the managed disk is retained after VM gets deleted. Minimum api-version: 2021-03-01. */
export enum KnownComputeDiskDeleteOptionTypes {
  /** Delete */
  Delete = "Delete",
  /** Detach */
  Detach = "Detach",
}

/**
 * Specifies the behavior of the managed disk when the VM gets deleted, for example whether the managed disk is deleted or detached. Supported values are: **Delete.** If this value is used, the managed disk is deleted when VM gets deleted. **Detach.** If this value is used, the managed disk is retained after VM gets deleted. Minimum api-version: 2021-03-01. \
 * {@link KnownComputeDiskDeleteOptionTypes} can be used interchangeably with ComputeDiskDeleteOptionTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Delete** \
 * **Detach**
 */
export type ComputeDiskDeleteOptionTypes = string;

export function computeVirtualMachineScaleSetDataDiskArraySerializer(
  result: Array<ComputeVirtualMachineScaleSetDataDisk>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineScaleSetDataDiskSerializer(item);
  });
}

export function computeVirtualMachineScaleSetDataDiskArrayDeserializer(
  result: Array<ComputeVirtualMachineScaleSetDataDisk>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineScaleSetDataDiskDeserializer(item);
  });
}

/** Describes a virtual machine scale set data disk. */
export interface ComputeVirtualMachineScaleSetDataDisk {
  /** The disk name. */
  name?: string;
  /** Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. */
  lun: number;
  /** Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The default values are: **None for Standard storage. ReadOnly for Premium storage.** */
  caching?: ComputeCachingTypes;
  /** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
  writeAcceleratorEnabled?: boolean;
  /** The create option. */
  createOption: ComputeDiskCreateOptionTypes;
  /** Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property diskSizeGB is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023. */
  diskSizeGB?: number;
  /** The managed disk parameters. */
  managedDisk?: ComputeVirtualMachineScaleSetManagedDiskParameters;
  /** Specifies the Read-Write IOPS for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB. */
  diskIopsReadWrite?: number;
  /** Specifies the bandwidth in MB per second for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB. */
  diskMBpsReadWrite?: number;
  /** Specifies whether data disk should be deleted or detached upon VMSS Flex deletion (This feature is available for VMSS with Flexible OrchestrationMode only).<br><br> Possible values: <br><br> **Delete** If this value is used, the data disk is deleted when the VMSS Flex VM is deleted.<br><br> **Detach** If this value is used, the data disk is retained after VMSS Flex VM is deleted.<br><br> The default value is set to **Delete**. */
  deleteOption?: ComputeDiskDeleteOptionTypes;
}

export function computeVirtualMachineScaleSetDataDiskSerializer(
  item: ComputeVirtualMachineScaleSetDataDisk,
): any {
  return {
    name: item["name"],
    lun: item["lun"],
    caching: item["caching"],
    writeAcceleratorEnabled: item["writeAcceleratorEnabled"],
    createOption: item["createOption"],
    diskSizeGB: item["diskSizeGB"],
    managedDisk: !item["managedDisk"]
      ? item["managedDisk"]
      : computeVirtualMachineScaleSetManagedDiskParametersSerializer(item["managedDisk"]),
    diskIOPSReadWrite: item["diskIopsReadWrite"],
    diskMBpsReadWrite: item["diskMBpsReadWrite"],
    deleteOption: item["deleteOption"],
  };
}

export function computeVirtualMachineScaleSetDataDiskDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetDataDisk {
  return {
    name: item["name"],
    lun: item["lun"],
    caching: item["caching"],
    writeAcceleratorEnabled: item["writeAcceleratorEnabled"],
    createOption: item["createOption"],
    diskSizeGB: item["diskSizeGB"],
    managedDisk: !item["managedDisk"]
      ? item["managedDisk"]
      : computeVirtualMachineScaleSetManagedDiskParametersDeserializer(item["managedDisk"]),
    diskIopsReadWrite: item["diskIOPSReadWrite"],
    diskMBpsReadWrite: item["diskMBpsReadWrite"],
    deleteOption: item["deleteOption"],
  };
}

/** Specifies the disk controller type configured for the VM and VirtualMachineScaleSet. This property is only supported for virtual machines whose operating system disk and VM sku supports Generation 2 (https://docs.microsoft.com/en-us/azure/virtual-machines/generation-2), please check the HyperVGenerations capability returned as part of VM sku capabilities in the response of Microsoft.Compute SKUs api for the region contains V2 (https://docs.microsoft.com/rest/api/compute/resourceskus/list). For more information about Disk Controller Types supported please refer to https://aka.ms/azure-diskcontrollertypes. */
export enum KnownComputeDiskControllerTypes {
  /** SCSI */
  Scsi = "SCSI",
  /** NVMe */
  NVMe = "NVMe",
}

/**
 * Specifies the disk controller type configured for the VM and VirtualMachineScaleSet. This property is only supported for virtual machines whose operating system disk and VM sku supports Generation 2 (https://docs.microsoft.com/en-us/azure/virtual-machines/generation-2), please check the HyperVGenerations capability returned as part of VM sku capabilities in the response of Microsoft.Compute SKUs api for the region contains V2 (https://docs.microsoft.com/rest/api/compute/resourceskus/list). For more information about Disk Controller Types supported please refer to https://aka.ms/azure-diskcontrollertypes. \
 * {@link KnownComputeDiskControllerTypes} can be used interchangeably with ComputeDiskControllerTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SCSI** \
 * **NVMe**
 */
export type ComputeDiskControllerTypes = string;

/** Describes a virtual machine scale set network profile. */
export interface ComputeVirtualMachineScaleSetNetworkProfile {
  /** A reference to a load balancer probe used to determine the health of an instance in the virtual machine scale set. The reference will be in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes/{probeName}'. */
  healthProbe?: ComputeApiEntityReference;
  /** The list of network configurations. */
  networkInterfaceConfigurations?: ComputeVirtualMachineScaleSetNetworkConfiguration[];
  /** specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations for Virtual Machine Scale Set with orchestration mode 'Flexible' */
  networkApiVersion?: ComputeNetworkApiVersion;
}

export function computeVirtualMachineScaleSetNetworkProfileSerializer(
  item: ComputeVirtualMachineScaleSetNetworkProfile,
): any {
  return {
    healthProbe: !item["healthProbe"]
      ? item["healthProbe"]
      : computeApiEntityReferenceSerializer(item["healthProbe"]),
    networkInterfaceConfigurations: !item["networkInterfaceConfigurations"]
      ? item["networkInterfaceConfigurations"]
      : computeVirtualMachineScaleSetNetworkConfigurationArraySerializer(
          item["networkInterfaceConfigurations"],
        ),
    networkApiVersion: item["networkApiVersion"],
  };
}

export function computeVirtualMachineScaleSetNetworkProfileDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetNetworkProfile {
  return {
    healthProbe: !item["healthProbe"]
      ? item["healthProbe"]
      : computeApiEntityReferenceDeserializer(item["healthProbe"]),
    networkInterfaceConfigurations: !item["networkInterfaceConfigurations"]
      ? item["networkInterfaceConfigurations"]
      : computeVirtualMachineScaleSetNetworkConfigurationArrayDeserializer(
          item["networkInterfaceConfigurations"],
        ),
    networkApiVersion: item["networkApiVersion"],
  };
}

/** The API entity reference. */
export interface ComputeApiEntityReference {
  /** The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/... */
  id?: string;
}

export function computeApiEntityReferenceSerializer(item: ComputeApiEntityReference): any {
  return { id: item["id"] };
}

export function computeApiEntityReferenceDeserializer(item: any): ComputeApiEntityReference {
  return {
    id: item["id"],
  };
}

export function computeVirtualMachineScaleSetNetworkConfigurationArraySerializer(
  result: Array<ComputeVirtualMachineScaleSetNetworkConfiguration>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineScaleSetNetworkConfigurationSerializer(item);
  });
}

export function computeVirtualMachineScaleSetNetworkConfigurationArrayDeserializer(
  result: Array<ComputeVirtualMachineScaleSetNetworkConfiguration>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineScaleSetNetworkConfigurationDeserializer(item);
  });
}

/** Describes a virtual machine scale set network profile's network configurations. */
export interface ComputeVirtualMachineScaleSetNetworkConfiguration {
  /** The network configuration name. */
  name: string;
  /** Resource tags applied to the networkInterface address created by this NetworkInterfaceConfiguration */
  tags?: Record<string, string>;
  /** Specifies the primary network interface in case the virtual machine has more than 1 network interface. */
  primary?: boolean;
  /** Specifies whether the network interface is accelerated networking-enabled. */
  enableAcceleratedNetworking?: boolean;
  /** Specifies whether the network interface is disabled for tcp state tracking. */
  disableTcpStateTracking?: boolean;
  /** Specifies whether the network interface is FPGA networking-enabled. */
  enableFpga?: boolean;
  /** The network security group. */
  networkSecurityGroup?: CommonSubResource;
  /** The dns settings to be applied on the network interfaces. */
  dnsSettings?: ComputeVirtualMachineScaleSetNetworkConfigurationDnsSettings;
  /** Specifies the IP configurations of the network interface. */
  ipConfigurations?: ComputeVirtualMachineScaleSetIPConfiguration[];
  /** Whether IP forwarding enabled on this NIC. */
  enableIPForwarding?: boolean;
  /** Specify what happens to the network interface when the VM is deleted */
  deleteOption?: ComputeDeleteOptions;
  /** Specifies whether the Auxiliary mode is enabled for the Network Interface resource. */
  auxiliaryMode?: ComputeNetworkInterfaceAuxiliaryMode;
  /** Specifies whether the Auxiliary sku is enabled for the Network Interface resource. */
  auxiliarySku?: ComputeNetworkInterfaceAuxiliarySku;
}

export function computeVirtualMachineScaleSetNetworkConfigurationSerializer(
  item: ComputeVirtualMachineScaleSetNetworkConfiguration,
): any {
  return {
    name: item["name"],
    properties: areAllPropsUndefined(item, [
      "primary",
      "enableAcceleratedNetworking",
      "disableTcpStateTracking",
      "enableFpga",
      "networkSecurityGroup",
      "dnsSettings",
      "ipConfigurations",
      "enableIPForwarding",
      "deleteOption",
      "auxiliaryMode",
      "auxiliarySku",
    ])
      ? undefined
      : _virtualMachineScaleSetNetworkConfigurationPropertiesSerializer(item),
    tags: item["tags"],
  };
}

export function computeVirtualMachineScaleSetNetworkConfigurationDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetNetworkConfiguration {
  return {
    name: item["name"],
    ...(!item["properties"]
      ? item["properties"]
      : _virtualMachineScaleSetNetworkConfigurationPropertiesDeserializer(item["properties"])),
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
  };
}

/** Describes a virtual machine scale set network profile's IP configuration. */
export interface ComputeVirtualMachineScaleSetNetworkConfigurationProperties {
  /** Specifies the primary network interface in case the virtual machine has more than 1 network interface. */
  primary?: boolean;
  /** Specifies whether the network interface is accelerated networking-enabled. */
  enableAcceleratedNetworking?: boolean;
  /** Specifies whether the network interface is disabled for tcp state tracking. */
  disableTcpStateTracking?: boolean;
  /** Specifies whether the network interface is FPGA networking-enabled. */
  enableFpga?: boolean;
  /** The network security group. */
  networkSecurityGroup?: CommonSubResource;
  /** The dns settings to be applied on the network interfaces. */
  dnsSettings?: ComputeVirtualMachineScaleSetNetworkConfigurationDnsSettings;
  /** Specifies the IP configurations of the network interface. */
  ipConfigurations: ComputeVirtualMachineScaleSetIPConfiguration[];
  /** Whether IP forwarding enabled on this NIC. */
  enableIPForwarding?: boolean;
  /** Specify what happens to the network interface when the VM is deleted */
  deleteOption?: ComputeDeleteOptions;
  /** Specifies whether the Auxiliary mode is enabled for the Network Interface resource. */
  auxiliaryMode?: ComputeNetworkInterfaceAuxiliaryMode;
  /** Specifies whether the Auxiliary sku is enabled for the Network Interface resource. */
  auxiliarySku?: ComputeNetworkInterfaceAuxiliarySku;
}

export function computeVirtualMachineScaleSetNetworkConfigurationPropertiesSerializer(
  item: ComputeVirtualMachineScaleSetNetworkConfigurationProperties,
): any {
  return {
    primary: item["primary"],
    enableAcceleratedNetworking: item["enableAcceleratedNetworking"],
    disableTcpStateTracking: item["disableTcpStateTracking"],
    enableFpga: item["enableFpga"],
    networkSecurityGroup: !item["networkSecurityGroup"]
      ? item["networkSecurityGroup"]
      : commonSubResourceSerializer(item["networkSecurityGroup"]),
    dnsSettings: !item["dnsSettings"]
      ? item["dnsSettings"]
      : computeVirtualMachineScaleSetNetworkConfigurationDnsSettingsSerializer(item["dnsSettings"]),
    ipConfigurations: computeVirtualMachineScaleSetIPConfigurationArraySerializer(
      item["ipConfigurations"],
    ),
    enableIPForwarding: item["enableIPForwarding"],
    deleteOption: item["deleteOption"],
    auxiliaryMode: item["auxiliaryMode"],
    auxiliarySku: item["auxiliarySku"],
  };
}

export function computeVirtualMachineScaleSetNetworkConfigurationPropertiesDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetNetworkConfigurationProperties {
  return {
    primary: item["primary"],
    enableAcceleratedNetworking: item["enableAcceleratedNetworking"],
    disableTcpStateTracking: item["disableTcpStateTracking"],
    enableFpga: item["enableFpga"],
    networkSecurityGroup: !item["networkSecurityGroup"]
      ? item["networkSecurityGroup"]
      : commonSubResourceDeserializer(item["networkSecurityGroup"]),
    dnsSettings: !item["dnsSettings"]
      ? item["dnsSettings"]
      : computeVirtualMachineScaleSetNetworkConfigurationDnsSettingsDeserializer(
          item["dnsSettings"],
        ),
    ipConfigurations: computeVirtualMachineScaleSetIPConfigurationArrayDeserializer(
      item["ipConfigurations"],
    ),
    enableIPForwarding: item["enableIPForwarding"],
    deleteOption: item["deleteOption"],
    auxiliaryMode: item["auxiliaryMode"],
    auxiliarySku: item["auxiliarySku"],
  };
}

/** Describes a virtual machines scale sets network configuration's DNS settings. */
export interface ComputeVirtualMachineScaleSetNetworkConfigurationDnsSettings {
  /** List of DNS servers IP addresses */
  dnsServers?: string[];
}

export function computeVirtualMachineScaleSetNetworkConfigurationDnsSettingsSerializer(
  item: ComputeVirtualMachineScaleSetNetworkConfigurationDnsSettings,
): any {
  return {
    dnsServers: !item["dnsServers"]
      ? item["dnsServers"]
      : item["dnsServers"].map((p: any) => {
          return p;
        }),
  };
}

export function computeVirtualMachineScaleSetNetworkConfigurationDnsSettingsDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetNetworkConfigurationDnsSettings {
  return {
    dnsServers: !item["dnsServers"]
      ? item["dnsServers"]
      : item["dnsServers"].map((p: any) => {
          return p;
        }),
  };
}

export function computeVirtualMachineScaleSetIPConfigurationArraySerializer(
  result: Array<ComputeVirtualMachineScaleSetIPConfiguration>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineScaleSetIPConfigurationSerializer(item);
  });
}

export function computeVirtualMachineScaleSetIPConfigurationArrayDeserializer(
  result: Array<ComputeVirtualMachineScaleSetIPConfiguration>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineScaleSetIPConfigurationDeserializer(item);
  });
}

/** Describes a virtual machine scale set network profile's IP configuration. */
export interface ComputeVirtualMachineScaleSetIPConfiguration {
  /** The IP configuration name. */
  name: string;
  /** Specifies the identifier of the subnet. */
  subnet?: ComputeApiEntityReference;
  /** Specifies the primary network interface in case the virtual machine has more than 1 network interface. */
  primary?: boolean;
  /** The publicIPAddressConfiguration. */
  publicIPAddressConfiguration?: ComputeVirtualMachineScaleSetPublicIPAddressConfiguration;
  /** Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'. */
  privateIPAddressVersion?: ComputeIPVersion;
  /** Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets cannot use the same application gateway. */
  applicationGatewayBackendAddressPools?: CommonSubResource[];
  /** Specifies an array of references to application security group. */
  applicationSecurityGroups?: CommonSubResource[];
  /** Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same basic sku load balancer. */
  loadBalancerBackendAddressPools?: CommonSubResource[];
  /** Specifies an array of references to inbound Nat pools of the load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same basic sku load balancer. */
  loadBalancerInboundNatPools?: CommonSubResource[];
}

export function computeVirtualMachineScaleSetIPConfigurationSerializer(
  item: ComputeVirtualMachineScaleSetIPConfiguration,
): any {
  return {
    name: item["name"],
    properties: areAllPropsUndefined(item, [
      "subnet",
      "primary",
      "publicIPAddressConfiguration",
      "privateIPAddressVersion",
      "applicationGatewayBackendAddressPools",
      "applicationSecurityGroups",
      "loadBalancerBackendAddressPools",
      "loadBalancerInboundNatPools",
    ])
      ? undefined
      : _virtualMachineScaleSetIPConfigurationPropertiesSerializer(item),
  };
}

export function computeVirtualMachineScaleSetIPConfigurationDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetIPConfiguration {
  return {
    name: item["name"],
    ...(!item["properties"]
      ? item["properties"]
      : _virtualMachineScaleSetIPConfigurationPropertiesDeserializer(item["properties"])),
  };
}

/** Describes a virtual machine scale set network profile's IP configuration properties. */
export interface ComputeVirtualMachineScaleSetIPConfigurationProperties {
  /** Specifies the identifier of the subnet. */
  subnet?: ComputeApiEntityReference;
  /** Specifies the primary network interface in case the virtual machine has more than 1 network interface. */
  primary?: boolean;
  /** The publicIPAddressConfiguration. */
  publicIPAddressConfiguration?: ComputeVirtualMachineScaleSetPublicIPAddressConfiguration;
  /** Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'. */
  privateIPAddressVersion?: ComputeIPVersion;
  /** Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets cannot use the same application gateway. */
  applicationGatewayBackendAddressPools?: CommonSubResource[];
  /** Specifies an array of references to application security group. */
  applicationSecurityGroups?: CommonSubResource[];
  /** Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same basic sku load balancer. */
  loadBalancerBackendAddressPools?: CommonSubResource[];
  /** Specifies an array of references to inbound Nat pools of the load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same basic sku load balancer. */
  loadBalancerInboundNatPools?: CommonSubResource[];
}

export function computeVirtualMachineScaleSetIPConfigurationPropertiesSerializer(
  item: ComputeVirtualMachineScaleSetIPConfigurationProperties,
): any {
  return {
    subnet: !item["subnet"] ? item["subnet"] : computeApiEntityReferenceSerializer(item["subnet"]),
    primary: item["primary"],
    publicIPAddressConfiguration: !item["publicIPAddressConfiguration"]
      ? item["publicIPAddressConfiguration"]
      : computeVirtualMachineScaleSetPublicIPAddressConfigurationSerializer(
          item["publicIPAddressConfiguration"],
        ),
    privateIPAddressVersion: item["privateIPAddressVersion"],
    applicationGatewayBackendAddressPools: !item["applicationGatewayBackendAddressPools"]
      ? item["applicationGatewayBackendAddressPools"]
      : commonSubResourceArraySerializer(item["applicationGatewayBackendAddressPools"]),
    applicationSecurityGroups: !item["applicationSecurityGroups"]
      ? item["applicationSecurityGroups"]
      : commonSubResourceArraySerializer(item["applicationSecurityGroups"]),
    loadBalancerBackendAddressPools: !item["loadBalancerBackendAddressPools"]
      ? item["loadBalancerBackendAddressPools"]
      : commonSubResourceArraySerializer(item["loadBalancerBackendAddressPools"]),
    loadBalancerInboundNatPools: !item["loadBalancerInboundNatPools"]
      ? item["loadBalancerInboundNatPools"]
      : commonSubResourceArraySerializer(item["loadBalancerInboundNatPools"]),
  };
}

export function computeVirtualMachineScaleSetIPConfigurationPropertiesDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetIPConfigurationProperties {
  return {
    subnet: !item["subnet"]
      ? item["subnet"]
      : computeApiEntityReferenceDeserializer(item["subnet"]),
    primary: item["primary"],
    publicIPAddressConfiguration: !item["publicIPAddressConfiguration"]
      ? item["publicIPAddressConfiguration"]
      : computeVirtualMachineScaleSetPublicIPAddressConfigurationDeserializer(
          item["publicIPAddressConfiguration"],
        ),
    privateIPAddressVersion: item["privateIPAddressVersion"],
    applicationGatewayBackendAddressPools: !item["applicationGatewayBackendAddressPools"]
      ? item["applicationGatewayBackendAddressPools"]
      : commonSubResourceArrayDeserializer(item["applicationGatewayBackendAddressPools"]),
    applicationSecurityGroups: !item["applicationSecurityGroups"]
      ? item["applicationSecurityGroups"]
      : commonSubResourceArrayDeserializer(item["applicationSecurityGroups"]),
    loadBalancerBackendAddressPools: !item["loadBalancerBackendAddressPools"]
      ? item["loadBalancerBackendAddressPools"]
      : commonSubResourceArrayDeserializer(item["loadBalancerBackendAddressPools"]),
    loadBalancerInboundNatPools: !item["loadBalancerInboundNatPools"]
      ? item["loadBalancerInboundNatPools"]
      : commonSubResourceArrayDeserializer(item["loadBalancerInboundNatPools"]),
  };
}

/** Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration */
export interface ComputeVirtualMachineScaleSetPublicIPAddressConfiguration {
  /** The publicIP address configuration name. */
  name: string;
  /** Describes the public IP Sku. It can only be set with OrchestrationMode as Flexible. */
  sku?: ComputePublicIPAddressSku;
  /** Resource tags applied to the publicIP address created by this PublicIPAddressConfiguration */
  tags?: Record<string, string>;
  /** The idle timeout of the public IP address. */
  idleTimeoutInMinutes?: number;
  /** The dns settings to be applied on the publicIP addresses . */
  dnsSettings?: ComputeVirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings;
  /** The list of IP tags associated with the public IP address. */
  ipTags?: ComputeVirtualMachineScaleSetIpTag[];
  /** The PublicIPPrefix from which to allocate publicIP addresses. */
  publicIPPrefix?: CommonSubResource;
  /** Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'. */
  publicIPAddressVersion?: ComputeIPVersion;
  /** Specify what happens to the public IP when the VM is deleted */
  deleteOption?: ComputeDeleteOptions;
}

export function computeVirtualMachineScaleSetPublicIPAddressConfigurationSerializer(
  item: ComputeVirtualMachineScaleSetPublicIPAddressConfiguration,
): any {
  return {
    name: item["name"],
    properties: areAllPropsUndefined(item, [
      "idleTimeoutInMinutes",
      "dnsSettings",
      "ipTags",
      "publicIPPrefix",
      "publicIPAddressVersion",
      "deleteOption",
    ])
      ? undefined
      : _virtualMachineScaleSetPublicIPAddressConfigurationPropertiesSerializer(item),
    sku: !item["sku"] ? item["sku"] : computePublicIPAddressSkuSerializer(item["sku"]),
    tags: item["tags"],
  };
}

export function computeVirtualMachineScaleSetPublicIPAddressConfigurationDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetPublicIPAddressConfiguration {
  return {
    name: item["name"],
    ...(!item["properties"]
      ? item["properties"]
      : _virtualMachineScaleSetPublicIPAddressConfigurationPropertiesDeserializer(
          item["properties"],
        )),
    sku: !item["sku"] ? item["sku"] : computePublicIPAddressSkuDeserializer(item["sku"]),
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
  };
}

/** Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration */
export interface ComputeVirtualMachineScaleSetPublicIPAddressConfigurationProperties {
  /** The idle timeout of the public IP address. */
  idleTimeoutInMinutes?: number;
  /** The dns settings to be applied on the publicIP addresses . */
  dnsSettings?: ComputeVirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings;
  /** The list of IP tags associated with the public IP address. */
  ipTags?: ComputeVirtualMachineScaleSetIpTag[];
  /** The PublicIPPrefix from which to allocate publicIP addresses. */
  publicIPPrefix?: CommonSubResource;
  /** Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'. */
  publicIPAddressVersion?: ComputeIPVersion;
  /** Specify what happens to the public IP when the VM is deleted */
  deleteOption?: ComputeDeleteOptions;
}

export function computeVirtualMachineScaleSetPublicIPAddressConfigurationPropertiesSerializer(
  item: ComputeVirtualMachineScaleSetPublicIPAddressConfigurationProperties,
): any {
  return {
    idleTimeoutInMinutes: item["idleTimeoutInMinutes"],
    dnsSettings: !item["dnsSettings"]
      ? item["dnsSettings"]
      : computeVirtualMachineScaleSetPublicIPAddressConfigurationDnsSettingsSerializer(
          item["dnsSettings"],
        ),
    ipTags: !item["ipTags"]
      ? item["ipTags"]
      : computeVirtualMachineScaleSetIpTagArraySerializer(item["ipTags"]),
    publicIPPrefix: !item["publicIPPrefix"]
      ? item["publicIPPrefix"]
      : commonSubResourceSerializer(item["publicIPPrefix"]),
    publicIPAddressVersion: item["publicIPAddressVersion"],
    deleteOption: item["deleteOption"],
  };
}

export function computeVirtualMachineScaleSetPublicIPAddressConfigurationPropertiesDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetPublicIPAddressConfigurationProperties {
  return {
    idleTimeoutInMinutes: item["idleTimeoutInMinutes"],
    dnsSettings: !item["dnsSettings"]
      ? item["dnsSettings"]
      : computeVirtualMachineScaleSetPublicIPAddressConfigurationDnsSettingsDeserializer(
          item["dnsSettings"],
        ),
    ipTags: !item["ipTags"]
      ? item["ipTags"]
      : computeVirtualMachineScaleSetIpTagArrayDeserializer(item["ipTags"]),
    publicIPPrefix: !item["publicIPPrefix"]
      ? item["publicIPPrefix"]
      : commonSubResourceDeserializer(item["publicIPPrefix"]),
    publicIPAddressVersion: item["publicIPAddressVersion"],
    deleteOption: item["deleteOption"],
  };
}

/** Describes a virtual machines scale sets network configuration's DNS settings. */
export interface ComputeVirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings {
  /** The Domain name label.The concatenation of the domain name label and vm index will be the domain name labels of the PublicIPAddress resources that will be created */
  domainNameLabel: string;
  /** The Domain name label scope.The concatenation of the hashed domain name label that generated according to the policy from domain name label scope and vm index will be the domain name labels of the PublicIPAddress resources that will be created */
  domainNameLabelScope?: ComputeDomainNameLabelScopeTypes;
}

export function computeVirtualMachineScaleSetPublicIPAddressConfigurationDnsSettingsSerializer(
  item: ComputeVirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings,
): any {
  return {
    domainNameLabel: item["domainNameLabel"],
    domainNameLabelScope: item["domainNameLabelScope"],
  };
}

export function computeVirtualMachineScaleSetPublicIPAddressConfigurationDnsSettingsDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings {
  return {
    domainNameLabel: item["domainNameLabel"],
    domainNameLabelScope: item["domainNameLabelScope"],
  };
}

/** The Domain name label scope.The concatenation of the hashed domain name label that generated according to the policy from domain name label scope and vm index will be the domain name labels of the PublicIPAddress resources that will be created */
export enum KnownComputeDomainNameLabelScopeTypes {
  /** TenantReuse */
  TenantReuse = "TenantReuse",
  /** SubscriptionReuse */
  SubscriptionReuse = "SubscriptionReuse",
  /** ResourceGroupReuse */
  ResourceGroupReuse = "ResourceGroupReuse",
  /** NoReuse */
  NoReuse = "NoReuse",
}

/**
 * The Domain name label scope.The concatenation of the hashed domain name label that generated according to the policy from domain name label scope and vm index will be the domain name labels of the PublicIPAddress resources that will be created \
 * {@link KnownComputeDomainNameLabelScopeTypes} can be used interchangeably with ComputeDomainNameLabelScopeTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **TenantReuse** \
 * **SubscriptionReuse** \
 * **ResourceGroupReuse** \
 * **NoReuse**
 */
export type ComputeDomainNameLabelScopeTypes = string;

export function computeVirtualMachineScaleSetIpTagArraySerializer(
  result: Array<ComputeVirtualMachineScaleSetIpTag>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineScaleSetIpTagSerializer(item);
  });
}

export function computeVirtualMachineScaleSetIpTagArrayDeserializer(
  result: Array<ComputeVirtualMachineScaleSetIpTag>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineScaleSetIpTagDeserializer(item);
  });
}

/** Contains the IP tag associated with the public IP address. */
export interface ComputeVirtualMachineScaleSetIpTag {
  /** IP tag type. Example: FirstPartyUsage. */
  ipTagType?: string;
  /** IP tag associated with the public IP. Example: SQL, Storage etc. */
  tag?: string;
}

export function computeVirtualMachineScaleSetIpTagSerializer(
  item: ComputeVirtualMachineScaleSetIpTag,
): any {
  return { ipTagType: item["ipTagType"], tag: item["tag"] };
}

export function computeVirtualMachineScaleSetIpTagDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetIpTag {
  return {
    ipTagType: item["ipTagType"],
    tag: item["tag"],
  };
}

/** Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'. */
export enum KnownComputeIPVersion {
  /** IPv4 */
  IPv4 = "IPv4",
  /** IPv6 */
  IPv6 = "IPv6",
}

/**
 * Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'. \
 * {@link KnownComputeIPVersion} can be used interchangeably with ComputeIPVersion,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **IPv4** \
 * **IPv6**
 */
export type ComputeIPVersion = string;

/** Specify what happens to the network interface when the VM is deleted */
export enum KnownComputeDeleteOptions {
  /** Delete */
  Delete = "Delete",
  /** Detach */
  Detach = "Detach",
}

/**
 * Specify what happens to the network interface when the VM is deleted \
 * {@link KnownComputeDeleteOptions} can be used interchangeably with ComputeDeleteOptions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Delete** \
 * **Detach**
 */
export type ComputeDeleteOptions = string;

/** Describes the public IP Sku. It can only be set with OrchestrationMode as Flexible. */
export interface ComputePublicIPAddressSku {
  /** Specify public IP sku name */
  name?: ComputePublicIPAddressSkuName;
  /** Specify public IP sku tier */
  tier?: ComputePublicIPAddressSkuTier;
}

export function computePublicIPAddressSkuSerializer(item: ComputePublicIPAddressSku): any {
  return { name: item["name"], tier: item["tier"] };
}

export function computePublicIPAddressSkuDeserializer(item: any): ComputePublicIPAddressSku {
  return {
    name: item["name"],
    tier: item["tier"],
  };
}

/** Specify public IP sku name */
export enum KnownComputePublicIPAddressSkuName {
  /** Basic */
  Basic = "Basic",
  /** Standard */
  Standard = "Standard",
}

/**
 * Specify public IP sku name \
 * {@link KnownComputePublicIPAddressSkuName} can be used interchangeably with ComputePublicIPAddressSkuName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **Standard**
 */
export type ComputePublicIPAddressSkuName = string;

/** Specify public IP sku tier */
export enum KnownComputePublicIPAddressSkuTier {
  /** Regional */
  Regional = "Regional",
  /** Global */
  Global = "Global",
}

/**
 * Specify public IP sku tier \
 * {@link KnownComputePublicIPAddressSkuTier} can be used interchangeably with ComputePublicIPAddressSkuTier,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Regional** \
 * **Global**
 */
export type ComputePublicIPAddressSkuTier = string;

/** Specifies whether the Auxiliary mode is enabled for the Network Interface resource. */
export enum KnownComputeNetworkInterfaceAuxiliaryMode {
  /** None */
  None = "None",
  /** AcceleratedConnections */
  AcceleratedConnections = "AcceleratedConnections",
  /** Floating */
  Floating = "Floating",
}

/**
 * Specifies whether the Auxiliary mode is enabled for the Network Interface resource. \
 * {@link KnownComputeNetworkInterfaceAuxiliaryMode} can be used interchangeably with ComputeNetworkInterfaceAuxiliaryMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **AcceleratedConnections** \
 * **Floating**
 */
export type ComputeNetworkInterfaceAuxiliaryMode = string;

/** Specifies whether the Auxiliary sku is enabled for the Network Interface resource. */
export enum KnownComputeNetworkInterfaceAuxiliarySku {
  /** None */
  None = "None",
  /** A1 */
  A1 = "A1",
  /** A2 */
  A2 = "A2",
  /** A4 */
  A4 = "A4",
  /** A8 */
  A8 = "A8",
}

/**
 * Specifies whether the Auxiliary sku is enabled for the Network Interface resource. \
 * {@link KnownComputeNetworkInterfaceAuxiliarySku} can be used interchangeably with ComputeNetworkInterfaceAuxiliarySku,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **A1** \
 * **A2** \
 * **A4** \
 * **A8**
 */
export type ComputeNetworkInterfaceAuxiliarySku = string;

/** specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations */
export enum KnownComputeNetworkApiVersion {
  /** 2020-11-01 */
  _20201101 = "2020-11-01",
  /** 2022-11-01 */
  _20221101 = "2022-11-01",
}

/**
 * specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations \
 * {@link KnownComputeNetworkApiVersion} can be used interchangeably with ComputeNetworkApiVersion,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **2020-11-01** \
 * **2022-11-01**
 */
export type ComputeNetworkApiVersion = string;

/** Specifies the Security profile settings for the virtual machine or virtual machine scale set. */
export interface ComputeSecurityProfile {
  /** Specifies the security settings like secure boot and vTPM used while creating the virtual machine. Minimum api-version: 2020-12-01. */
  uefiSettings?: ComputeUefiSettings;
  /** This property can be used by user in the request to enable or disable the Host Encryption for the virtual machine or virtual machine scale set. This will enable the encryption for all the disks including Resource/Temp disk at host itself. The default behavior is: The Encryption at host will be disabled unless this property is set to true for the resource. */
  encryptionAtHost?: boolean;
  /** Specifies the SecurityType of the virtual machine. It has to be set to any specified value to enable UefiSettings. The default behavior is: UefiSettings will not be enabled unless this property is set. */
  securityType?: ComputeSecurityTypes;
  /** Specifies the Managed Identity used by ADE to get access token for keyvault operations. */
  encryptionIdentity?: ComputeEncryptionIdentity;
  /** Specifies ProxyAgent settings while creating the virtual machine. Minimum api-version: 2023-09-01. */
  proxyAgentSettings?: ComputeProxyAgentSettings;
}

export function computeSecurityProfileSerializer(item: ComputeSecurityProfile): any {
  return {
    uefiSettings: !item["uefiSettings"]
      ? item["uefiSettings"]
      : computeUefiSettingsSerializer(item["uefiSettings"]),
    encryptionAtHost: item["encryptionAtHost"],
    securityType: item["securityType"],
    encryptionIdentity: !item["encryptionIdentity"]
      ? item["encryptionIdentity"]
      : computeEncryptionIdentitySerializer(item["encryptionIdentity"]),
    proxyAgentSettings: !item["proxyAgentSettings"]
      ? item["proxyAgentSettings"]
      : computeProxyAgentSettingsSerializer(item["proxyAgentSettings"]),
  };
}

export function computeSecurityProfileDeserializer(item: any): ComputeSecurityProfile {
  return {
    uefiSettings: !item["uefiSettings"]
      ? item["uefiSettings"]
      : computeUefiSettingsDeserializer(item["uefiSettings"]),
    encryptionAtHost: item["encryptionAtHost"],
    securityType: item["securityType"],
    encryptionIdentity: !item["encryptionIdentity"]
      ? item["encryptionIdentity"]
      : computeEncryptionIdentityDeserializer(item["encryptionIdentity"]),
    proxyAgentSettings: !item["proxyAgentSettings"]
      ? item["proxyAgentSettings"]
      : computeProxyAgentSettingsDeserializer(item["proxyAgentSettings"]),
  };
}

/** Specifies the security settings like secure boot and vTPM used while creating the virtual machine. Minimum api-version: 2020-12-01. */
export interface ComputeUefiSettings {
  /** Specifies whether secure boot should be enabled on the virtual machine. Minimum api-version: 2020-12-01. */
  secureBootEnabled?: boolean;
  /** Specifies whether vTPM should be enabled on the virtual machine. Minimum api-version: 2020-12-01. */
  vTpmEnabled?: boolean;
}

export function computeUefiSettingsSerializer(item: ComputeUefiSettings): any {
  return { secureBootEnabled: item["secureBootEnabled"], vTpmEnabled: item["vTpmEnabled"] };
}

export function computeUefiSettingsDeserializer(item: any): ComputeUefiSettings {
  return {
    secureBootEnabled: item["secureBootEnabled"],
    vTpmEnabled: item["vTpmEnabled"],
  };
}

/** Specifies the SecurityType of the virtual machine. It has to be set to any specified value to enable UefiSettings. The default behavior is: UefiSettings will not be enabled unless this property is set. */
export enum KnownComputeSecurityTypes {
  /** TrustedLaunch */
  TrustedLaunch = "TrustedLaunch",
  /** ConfidentialVM */
  ConfidentialVM = "ConfidentialVM",
}

/**
 * Specifies the SecurityType of the virtual machine. It has to be set to any specified value to enable UefiSettings. The default behavior is: UefiSettings will not be enabled unless this property is set. \
 * {@link KnownComputeSecurityTypes} can be used interchangeably with ComputeSecurityTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **TrustedLaunch** \
 * **ConfidentialVM**
 */
export type ComputeSecurityTypes = string;

/** Specifies the Managed Identity used by ADE to get access token for keyvault operations. */
export interface ComputeEncryptionIdentity {
  /** Specifies ARM Resource ID of one of the user identities associated with the VM. */
  userAssignedIdentityResourceId?: string;
}

export function computeEncryptionIdentitySerializer(item: ComputeEncryptionIdentity): any {
  return { userAssignedIdentityResourceId: item["userAssignedIdentityResourceId"] };
}

export function computeEncryptionIdentityDeserializer(item: any): ComputeEncryptionIdentity {
  return {
    userAssignedIdentityResourceId: item["userAssignedIdentityResourceId"],
  };
}

/** Specifies ProxyAgent settings for the virtual machine or virtual machine scale set. Minimum api-version: 2023-09-01. */
export interface ComputeProxyAgentSettings {
  /** Specifies whether ProxyAgent feature should be enabled on the virtual machine or virtual machine scale set. */
  enabled?: boolean;
  /** Specifies the mode that ProxyAgent will execute on. Warning: this property has been deprecated, please specify 'mode' under particular hostendpoint setting. */
  mode?: ComputeMode;
  /** Increase the value of this property allows users to reset the key used for securing communication channel between guest and host. */
  keyIncarnationId?: number;
  /** Specifies the Wire Server endpoint settings while creating the virtual machine or virtual machine scale set. Minimum api-version: 2024-03-01. */
  wireServer?: ComputeHostEndpointSettings;
  /** Specifies the IMDS endpoint settings while creating the virtual machine or virtual machine scale set. Minimum api-version: 2024-03-01. */
  imds?: ComputeHostEndpointSettings;
  /** Specify whether to implicitly install the ProxyAgent Extension. This option is currently applicable only for Linux Os. */
  addProxyAgentExtension?: boolean;
}

export function computeProxyAgentSettingsSerializer(item: ComputeProxyAgentSettings): any {
  return {
    enabled: item["enabled"],
    mode: item["mode"],
    keyIncarnationId: item["keyIncarnationId"],
    wireServer: !item["wireServer"]
      ? item["wireServer"]
      : computeHostEndpointSettingsSerializer(item["wireServer"]),
    imds: !item["imds"] ? item["imds"] : computeHostEndpointSettingsSerializer(item["imds"]),
    addProxyAgentExtension: item["addProxyAgentExtension"],
  };
}

export function computeProxyAgentSettingsDeserializer(item: any): ComputeProxyAgentSettings {
  return {
    enabled: item["enabled"],
    mode: item["mode"],
    keyIncarnationId: item["keyIncarnationId"],
    wireServer: !item["wireServer"]
      ? item["wireServer"]
      : computeHostEndpointSettingsDeserializer(item["wireServer"]),
    imds: !item["imds"] ? item["imds"] : computeHostEndpointSettingsDeserializer(item["imds"]),
    addProxyAgentExtension: item["addProxyAgentExtension"],
  };
}

/** Specifies the mode that ProxyAgent will execute on if the feature is enabled. ProxyAgent will start to audit or monitor but not enforce access control over requests to host endpoints in Audit mode, while in Enforce mode it will enforce access control. The default value is Enforce mode. */
export enum KnownComputeMode {
  /** Audit */
  Audit = "Audit",
  /** Enforce */
  Enforce = "Enforce",
}

/**
 * Specifies the mode that ProxyAgent will execute on if the feature is enabled. ProxyAgent will start to audit or monitor but not enforce access control over requests to host endpoints in Audit mode, while in Enforce mode it will enforce access control. The default value is Enforce mode. \
 * {@link KnownComputeMode} can be used interchangeably with ComputeMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Audit** \
 * **Enforce**
 */
export type ComputeMode = string;

/** Specifies particular host endpoint settings. */
export interface ComputeHostEndpointSettings {
  /** Specifies the execution mode. In Audit mode, the system acts as if it is enforcing the access control policy, including emitting access denial entries in the logs but it does not actually deny any requests to host endpoints. In Enforce mode, the system will enforce the access control and it is the recommended mode of operation. */
  mode?: ComputeModes;
  /** Specifies the InVMAccessControlProfileVersion resource id in the format of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/inVMAccessControlProfiles/{profile}/versions/{version} */
  inVMAccessControlProfileReferenceId?: string;
}

export function computeHostEndpointSettingsSerializer(item: ComputeHostEndpointSettings): any {
  return {
    mode: item["mode"],
    inVMAccessControlProfileReferenceId: item["inVMAccessControlProfileReferenceId"],
  };
}

export function computeHostEndpointSettingsDeserializer(item: any): ComputeHostEndpointSettings {
  return {
    mode: item["mode"],
    inVMAccessControlProfileReferenceId: item["inVMAccessControlProfileReferenceId"],
  };
}

/** Specifies the execution mode. In Audit mode, the system acts as if it is enforcing the access control policy, including emitting access denial entries in the logs but it does not actually deny any requests to host endpoints. In Enforce mode, the system will enforce the access control and it is the recommended mode of operation. */
export enum KnownComputeModes {
  /** Audit */
  Audit = "Audit",
  /** Enforce */
  Enforce = "Enforce",
  /** Disabled */
  Disabled = "Disabled",
}

/**
 * Specifies the execution mode. In Audit mode, the system acts as if it is enforcing the access control policy, including emitting access denial entries in the logs but it does not actually deny any requests to host endpoints. In Enforce mode, the system will enforce the access control and it is the recommended mode of operation. \
 * {@link KnownComputeModes} can be used interchangeably with ComputeModes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Audit** \
 * **Enforce** \
 * **Disabled**
 */
export type ComputeModes = string;

/** Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15. */
export interface ComputeDiagnosticsProfile {
  /** Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. **NOTE**: If storageUri is being specified then ensure that the storage account is in the same region and subscription as the VM. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor. */
  bootDiagnostics?: ComputeBootDiagnostics;
}

export function computeDiagnosticsProfileSerializer(item: ComputeDiagnosticsProfile): any {
  return {
    bootDiagnostics: !item["bootDiagnostics"]
      ? item["bootDiagnostics"]
      : computeBootDiagnosticsSerializer(item["bootDiagnostics"]),
  };
}

export function computeDiagnosticsProfileDeserializer(item: any): ComputeDiagnosticsProfile {
  return {
    bootDiagnostics: !item["bootDiagnostics"]
      ? item["bootDiagnostics"]
      : computeBootDiagnosticsDeserializer(item["bootDiagnostics"]),
  };
}

/** Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor. */
export interface ComputeBootDiagnostics {
  /** Whether boot diagnostics should be enabled on the Virtual Machine. */
  enabled?: boolean;
  /** Uri of the storage account to use for placing the console output and screenshot. If storageUri is not specified while enabling boot diagnostics, managed storage will be used. */
  storageUri?: string;
}

export function computeBootDiagnosticsSerializer(item: ComputeBootDiagnostics): any {
  return { enabled: item["enabled"], storageUri: item["storageUri"] };
}

export function computeBootDiagnosticsDeserializer(item: any): ComputeBootDiagnostics {
  return {
    enabled: item["enabled"],
    storageUri: item["storageUri"],
  };
}

/** Describes a virtual machine scale set extension profile. */
export interface ComputeVirtualMachineScaleSetExtensionProfile {
  /** The virtual machine scale set child extension resources. */
  extensions?: ComputeVirtualMachineScaleSetExtension[];
  /** Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). Minimum api-version: 2020-06-01. */
  extensionsTimeBudget?: string;
}

export function computeVirtualMachineScaleSetExtensionProfileSerializer(
  item: ComputeVirtualMachineScaleSetExtensionProfile,
): any {
  return {
    extensions: !item["extensions"]
      ? item["extensions"]
      : computeVirtualMachineScaleSetExtensionArraySerializer(item["extensions"]),
    extensionsTimeBudget: item["extensionsTimeBudget"],
  };
}

export function computeVirtualMachineScaleSetExtensionProfileDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetExtensionProfile {
  return {
    extensions: !item["extensions"]
      ? item["extensions"]
      : computeVirtualMachineScaleSetExtensionArrayDeserializer(item["extensions"]),
    extensionsTimeBudget: item["extensionsTimeBudget"],
  };
}

export function computeVirtualMachineScaleSetExtensionArraySerializer(
  result: Array<ComputeVirtualMachineScaleSetExtension>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineScaleSetExtensionSerializer(item);
  });
}

export function computeVirtualMachineScaleSetExtensionArrayDeserializer(
  result: Array<ComputeVirtualMachineScaleSetExtension>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineScaleSetExtensionDeserializer(item);
  });
}

/** Describes a Virtual Machine Scale Set Extension. */
export interface ComputeVirtualMachineScaleSetExtension extends CommonSubResourceReadOnly {
  /** Resource type */
  readonly type?: string;
  /** Resource name */
  name?: string;
  /** If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed. */
  forceUpdateTag?: string;
  /** The name of the extension handler publisher. */
  publisher?: string;
  /** Specifies the type of the extension; an example is "CustomScriptExtension". */
  typePropertiesType?: string;
  /** Specifies the version of the script handler. */
  typeHandlerVersion?: string;
  /** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
  autoUpgradeMinorVersion?: boolean;
  /** Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available. */
  enableAutomaticUpgrade?: boolean;
  /** Json formatted public settings for the extension. */
  settings?: any;
  /** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
  protectedSettings?: any;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: string;
  /** Collection of extension names after which this extension needs to be provisioned. */
  provisionAfterExtensions?: string[];
  /** Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false. */
  suppressFailures?: boolean;
  /** The extensions protected settings that are passed by reference, and consumed from key vault */
  protectedSettingsFromKeyVault?: ComputeKeyVaultSecretReference;
}

export function computeVirtualMachineScaleSetExtensionSerializer(
  item: ComputeVirtualMachineScaleSetExtension,
): any {
  return {
    properties: areAllPropsUndefined(item, [
      "forceUpdateTag",
      "publisher",
      "type",
      "typeHandlerVersion",
      "autoUpgradeMinorVersion",
      "enableAutomaticUpgrade",
      "settings",
      "protectedSettings",
      "provisionAfterExtensions",
      "suppressFailures",
      "protectedSettingsFromKeyVault",
    ])
      ? undefined
      : _virtualMachineScaleSetExtensionPropertiesSerializer(item),
    name: item["name"],
  };
}

export function computeVirtualMachineScaleSetExtensionDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetExtension {
  return {
    id: item["id"],
    ...(!item["properties"]
      ? item["properties"]
      : _virtualMachineScaleSetExtensionPropertiesDeserializer(item["properties"])),
    type: item["type"],
    name: item["name"],
  };
}

/** Describes the properties of a Virtual Machine Scale Set Extension. */
export interface ComputeVirtualMachineScaleSetExtensionProperties {
  /** If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed. */
  forceUpdateTag?: string;
  /** The name of the extension handler publisher. */
  publisher?: string;
  /** Specifies the type of the extension; an example is "CustomScriptExtension". */
  type?: string;
  /** Specifies the version of the script handler. */
  typeHandlerVersion?: string;
  /** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
  autoUpgradeMinorVersion?: boolean;
  /** Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available. */
  enableAutomaticUpgrade?: boolean;
  /** Json formatted public settings for the extension. */
  settings?: any;
  /** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
  protectedSettings?: any;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: string;
  /** Collection of extension names after which this extension needs to be provisioned. */
  provisionAfterExtensions?: string[];
  /** Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false. */
  suppressFailures?: boolean;
  /** The extensions protected settings that are passed by reference, and consumed from key vault */
  protectedSettingsFromKeyVault?: ComputeKeyVaultSecretReference;
}

export function computeVirtualMachineScaleSetExtensionPropertiesSerializer(
  item: ComputeVirtualMachineScaleSetExtensionProperties,
): any {
  return {
    forceUpdateTag: item["forceUpdateTag"],
    publisher: item["publisher"],
    type: item["type"],
    typeHandlerVersion: item["typeHandlerVersion"],
    autoUpgradeMinorVersion: item["autoUpgradeMinorVersion"],
    enableAutomaticUpgrade: item["enableAutomaticUpgrade"],
    settings: item["settings"],
    protectedSettings: item["protectedSettings"],
    provisionAfterExtensions: !item["provisionAfterExtensions"]
      ? item["provisionAfterExtensions"]
      : item["provisionAfterExtensions"].map((p: any) => {
          return p;
        }),
    suppressFailures: item["suppressFailures"],
    protectedSettingsFromKeyVault: !item["protectedSettingsFromKeyVault"]
      ? item["protectedSettingsFromKeyVault"]
      : computeKeyVaultSecretReferenceSerializer(item["protectedSettingsFromKeyVault"]),
  };
}

export function computeVirtualMachineScaleSetExtensionPropertiesDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetExtensionProperties {
  return {
    forceUpdateTag: item["forceUpdateTag"],
    publisher: item["publisher"],
    type: item["type"],
    typeHandlerVersion: item["typeHandlerVersion"],
    autoUpgradeMinorVersion: item["autoUpgradeMinorVersion"],
    enableAutomaticUpgrade: item["enableAutomaticUpgrade"],
    settings: item["settings"],
    protectedSettings: item["protectedSettings"],
    provisioningState: item["provisioningState"],
    provisionAfterExtensions: !item["provisionAfterExtensions"]
      ? item["provisionAfterExtensions"]
      : item["provisionAfterExtensions"].map((p: any) => {
          return p;
        }),
    suppressFailures: item["suppressFailures"],
    protectedSettingsFromKeyVault: !item["protectedSettingsFromKeyVault"]
      ? item["protectedSettingsFromKeyVault"]
      : computeKeyVaultSecretReferenceDeserializer(item["protectedSettingsFromKeyVault"]),
  };
}

/** Describes a reference to Key Vault Secret */
export interface ComputeKeyVaultSecretReference {
  /** The URL referencing a secret in a Key Vault. */
  secretUrl: string;
  /** The relative URL of the Key Vault containing the secret. */
  sourceVault: CommonSubResource;
}

export function computeKeyVaultSecretReferenceSerializer(
  item: ComputeKeyVaultSecretReference,
): any {
  return {
    secretUrl: item["secretUrl"],
    sourceVault: commonSubResourceSerializer(item["sourceVault"]),
  };
}

export function computeKeyVaultSecretReferenceDeserializer(
  item: any,
): ComputeKeyVaultSecretReference {
  return {
    secretUrl: item["secretUrl"],
    sourceVault: commonSubResourceDeserializer(item["sourceVault"]),
  };
}

/** Specifies the priority for a standalone virtual machine or the virtual machines in the scale set. 'Low' enum will be deprecated in the future, please use 'Spot' as the enum to deploy Azure Spot VM/VMSS. */
export enum KnownComputeVirtualMachinePriorityTypes {
  /** Regular */
  Regular = "Regular",
  /** Low */
  Low = "Low",
  /** Spot */
  Spot = "Spot",
}

/**
 * Specifies the priority for a standalone virtual machine or the virtual machines in the scale set. 'Low' enum will be deprecated in the future, please use 'Spot' as the enum to deploy Azure Spot VM/VMSS. \
 * {@link KnownComputeVirtualMachinePriorityTypes} can be used interchangeably with ComputeVirtualMachinePriorityTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Regular** \
 * **Low** \
 * **Spot**
 */
export type ComputeVirtualMachinePriorityTypes = string;

/** Specifies the eviction policy for the Azure Spot VM/VMSS */
export enum KnownComputeVirtualMachineEvictionPolicyTypes {
  /** Deallocate */
  Deallocate = "Deallocate",
  /** Delete */
  Delete = "Delete",
}

/**
 * Specifies the eviction policy for the Azure Spot VM/VMSS \
 * {@link KnownComputeVirtualMachineEvictionPolicyTypes} can be used interchangeably with ComputeVirtualMachineEvictionPolicyTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Deallocate** \
 * **Delete**
 */
export type ComputeVirtualMachineEvictionPolicyTypes = string;

/** Specifies the billing related details of a Azure Spot VM or VMSS. Minimum api-version: 2019-03-01. */
export interface ComputeBillingProfile {
  /** Specifies the maximum price you are willing to pay for a Azure Spot VM/VMSS. This price is in US Dollars. <br><br> This price will be compared with the current Azure Spot price for the VM size. Also, the prices are compared at the time of create/update of Azure Spot VM/VMSS and the operation will only succeed if  the maxPrice is greater than the current Azure Spot price. <br><br> The maxPrice will also be used for evicting a Azure Spot VM/VMSS if the current Azure Spot price goes beyond the maxPrice after creation of VM/VMSS. <br><br> Possible values are: <br><br> - Any decimal value greater than zero. Example: 0.01538 <br><br> -1 – indicates default price to be up-to on-demand. <br><br> You can set the maxPrice to -1 to indicate that the Azure Spot VM/VMSS should not be evicted for price reasons. Also, the default max price is -1 if it is not provided by you. <br><br>Minimum api-version: 2019-03-01. */
  maxPrice?: number;
}

export function computeBillingProfileSerializer(item: ComputeBillingProfile): any {
  return { maxPrice: item["maxPrice"] };
}

export function computeBillingProfileDeserializer(item: any): ComputeBillingProfile {
  return {
    maxPrice: item["maxPrice"],
  };
}

/** model interface ComputeScheduledEventsProfile */
export interface ComputeScheduledEventsProfile {
  /** Specifies Terminate Scheduled Event related configurations. */
  terminateNotificationProfile?: ComputeTerminateNotificationProfile;
  /** Specifies OS Image Scheduled Event related configurations. */
  osImageNotificationProfile?: ComputeOSImageNotificationProfile;
}

export function computeScheduledEventsProfileSerializer(item: ComputeScheduledEventsProfile): any {
  return {
    terminateNotificationProfile: !item["terminateNotificationProfile"]
      ? item["terminateNotificationProfile"]
      : computeTerminateNotificationProfileSerializer(item["terminateNotificationProfile"]),
    osImageNotificationProfile: !item["osImageNotificationProfile"]
      ? item["osImageNotificationProfile"]
      : computeOSImageNotificationProfileSerializer(item["osImageNotificationProfile"]),
  };
}

export function computeScheduledEventsProfileDeserializer(
  item: any,
): ComputeScheduledEventsProfile {
  return {
    terminateNotificationProfile: !item["terminateNotificationProfile"]
      ? item["terminateNotificationProfile"]
      : computeTerminateNotificationProfileDeserializer(item["terminateNotificationProfile"]),
    osImageNotificationProfile: !item["osImageNotificationProfile"]
      ? item["osImageNotificationProfile"]
      : computeOSImageNotificationProfileDeserializer(item["osImageNotificationProfile"]),
  };
}

/** model interface ComputeTerminateNotificationProfile */
export interface ComputeTerminateNotificationProfile {
  /** Configurable length of time a Virtual Machine being deleted will have to potentially approve the Terminate Scheduled Event before the event is auto approved (timed out). The configuration must be specified in ISO 8601 format, the default value is 5 minutes (PT5M) */
  notBeforeTimeout?: string;
  /** Specifies whether the Terminate Scheduled event is enabled or disabled. */
  enable?: boolean;
}

export function computeTerminateNotificationProfileSerializer(
  item: ComputeTerminateNotificationProfile,
): any {
  return { notBeforeTimeout: item["notBeforeTimeout"], enable: item["enable"] };
}

export function computeTerminateNotificationProfileDeserializer(
  item: any,
): ComputeTerminateNotificationProfile {
  return {
    notBeforeTimeout: item["notBeforeTimeout"],
    enable: item["enable"],
  };
}

/** model interface ComputeOSImageNotificationProfile */
export interface ComputeOSImageNotificationProfile {
  /** Length of time a Virtual Machine being reimaged or having its OS upgraded will have to potentially approve the OS Image Scheduled Event before the event is auto approved (timed out). The configuration is specified in ISO 8601 format, and the value must be 15 minutes (PT15M) */
  notBeforeTimeout?: string;
  /** Specifies whether the OS Image Scheduled event is enabled or disabled. */
  enable?: boolean;
}

export function computeOSImageNotificationProfileSerializer(
  item: ComputeOSImageNotificationProfile,
): any {
  return { notBeforeTimeout: item["notBeforeTimeout"], enable: item["enable"] };
}

export function computeOSImageNotificationProfileDeserializer(
  item: any,
): ComputeOSImageNotificationProfile {
  return {
    notBeforeTimeout: item["notBeforeTimeout"],
    enable: item["enable"],
  };
}

/** The parameters of a capacity reservation Profile. */
export interface ComputeCapacityReservationProfile {
  /** Specifies the capacity reservation group resource id that should be used for allocating the virtual machine or scaleset vm instances provided enough capacity has been reserved. Please refer to https://aka.ms/CapacityReservation for more details. */
  capacityReservationGroup?: CommonSubResource;
}

export function computeCapacityReservationProfileSerializer(
  item: ComputeCapacityReservationProfile,
): any {
  return {
    capacityReservationGroup: !item["capacityReservationGroup"]
      ? item["capacityReservationGroup"]
      : commonSubResourceSerializer(item["capacityReservationGroup"]),
  };
}

export function computeCapacityReservationProfileDeserializer(
  item: any,
): ComputeCapacityReservationProfile {
  return {
    capacityReservationGroup: !item["capacityReservationGroup"]
      ? item["capacityReservationGroup"]
      : commonSubResourceDeserializer(item["capacityReservationGroup"]),
  };
}

/** Contains the list of gallery applications that should be made available to the VM/VMSS */
export interface ComputeApplicationProfile {
  /** Specifies the gallery applications that should be made available to the VM/VMSS */
  galleryApplications?: ComputeVMGalleryApplication[];
}

export function computeApplicationProfileSerializer(item: ComputeApplicationProfile): any {
  return {
    galleryApplications: !item["galleryApplications"]
      ? item["galleryApplications"]
      : computeVMGalleryApplicationArraySerializer(item["galleryApplications"]),
  };
}

export function computeApplicationProfileDeserializer(item: any): ComputeApplicationProfile {
  return {
    galleryApplications: !item["galleryApplications"]
      ? item["galleryApplications"]
      : computeVMGalleryApplicationArrayDeserializer(item["galleryApplications"]),
  };
}

export function computeVMGalleryApplicationArraySerializer(
  result: Array<ComputeVMGalleryApplication>,
): any[] {
  return result.map((item) => {
    return computeVMGalleryApplicationSerializer(item);
  });
}

export function computeVMGalleryApplicationArrayDeserializer(
  result: Array<ComputeVMGalleryApplication>,
): any[] {
  return result.map((item) => {
    return computeVMGalleryApplicationDeserializer(item);
  });
}

/** Specifies the required information to reference a compute gallery application version */
export interface ComputeVMGalleryApplication {
  /** Optional, Specifies a passthrough value for more generic context. */
  tags?: string;
  /** Optional, Specifies the order in which the packages have to be installed */
  order?: number;
  /** Specifies the GalleryApplicationVersion resource id on the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{application}/versions/{version} */
  packageReferenceId: string;
  /** Optional, Specifies the uri to an azure blob that will replace the default configuration for the package if provided */
  configurationReference?: string;
  /** Optional, If true, any failure for any operation in the VmApplication will fail the deployment */
  treatFailureAsDeploymentFailure?: boolean;
  /** If set to true, when a new Gallery Application version is available in PIR/SIG, it will be automatically updated for the VM/VMSS */
  enableAutomaticUpgrade?: boolean;
}

export function computeVMGalleryApplicationSerializer(item: ComputeVMGalleryApplication): any {
  return {
    tags: item["tags"],
    order: item["order"],
    packageReferenceId: item["packageReferenceId"],
    configurationReference: item["configurationReference"],
    treatFailureAsDeploymentFailure: item["treatFailureAsDeploymentFailure"],
    enableAutomaticUpgrade: item["enableAutomaticUpgrade"],
  };
}

export function computeVMGalleryApplicationDeserializer(item: any): ComputeVMGalleryApplication {
  return {
    tags: item["tags"],
    order: item["order"],
    packageReferenceId: item["packageReferenceId"],
    configurationReference: item["configurationReference"],
    treatFailureAsDeploymentFailure: item["treatFailureAsDeploymentFailure"],
    enableAutomaticUpgrade: item["enableAutomaticUpgrade"],
  };
}

/** Specifies the hardware settings for the virtual machine scale set. */
export interface ComputeVirtualMachineScaleSetHardwareProfile {
  /** Specifies the properties for customizing the size of the virtual machine. Minimum api-version: 2021-11-01. Please follow the instructions in [VM Customization](https://aka.ms/vmcustomization) for more details. */
  vmSizeProperties?: ComputeVMSizeProperties;
}

export function computeVirtualMachineScaleSetHardwareProfileSerializer(
  item: ComputeVirtualMachineScaleSetHardwareProfile,
): any {
  return {
    vmSizeProperties: !item["vmSizeProperties"]
      ? item["vmSizeProperties"]
      : computeVMSizePropertiesSerializer(item["vmSizeProperties"]),
  };
}

export function computeVirtualMachineScaleSetHardwareProfileDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetHardwareProfile {
  return {
    vmSizeProperties: !item["vmSizeProperties"]
      ? item["vmSizeProperties"]
      : computeVMSizePropertiesDeserializer(item["vmSizeProperties"]),
  };
}

/** Specifies VM Size Property settings on the virtual machine. */
export interface ComputeVMSizeProperties {
  /** Specifies the number of vCPUs available for the VM. When this property is not specified in the request body the default behavior is to set it to the value of vCPUs available for that VM size exposed in api response of [List all available virtual machine sizes in a region](https://docs.microsoft.com/en-us/rest/api/compute/resource-skus/list). */
  vCPUsAvailable?: number;
  /** Specifies the vCPU to physical core ratio. When this property is not specified in the request body the default behavior is set to the value of vCPUsPerCore for the VM Size exposed in api response of [List all available virtual machine sizes in a region](https://docs.microsoft.com/en-us/rest/api/compute/resource-skus/list). **Setting this property to 1 also means that hyper-threading is disabled.** */
  vCPUsPerCore?: number;
}

export function computeVMSizePropertiesSerializer(item: ComputeVMSizeProperties): any {
  return { vCPUsAvailable: item["vCPUsAvailable"], vCPUsPerCore: item["vCPUsPerCore"] };
}

export function computeVMSizePropertiesDeserializer(item: any): ComputeVMSizeProperties {
  return {
    vCPUsAvailable: item["vCPUsAvailable"],
    vCPUsPerCore: item["vCPUsPerCore"],
  };
}

/** Specifies the service artifact reference id used to set same image version for all virtual machines in the scale set when using 'latest' image version. Minimum api-version: 2022-11-01 */
export interface ComputeServiceArtifactReference {
  /** The service artifact reference id in the form of /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/galleries/{galleryName}/serviceArtifacts/{serviceArtifactName}/vmArtifactsProfiles/{vmArtifactsProfilesName} */
  id?: string;
}

export function computeServiceArtifactReferenceSerializer(
  item: ComputeServiceArtifactReference,
): any {
  return { id: item["id"] };
}

export function computeServiceArtifactReferenceDeserializer(
  item: any,
): ComputeServiceArtifactReference {
  return {
    id: item["id"],
  };
}

/** Specifies the security posture to be used in the scale set. Minimum api-version: 2023-03-01 */
export interface ComputeSecurityPostureReference {
  /** The security posture reference id in the form of /CommunityGalleries/{communityGalleryName}/securityPostures/{securityPostureName}/versions/{major.minor.patch}|latest */
  id: string;
  /** The list of virtual machine extension names to exclude when applying the security posture. */
  excludeExtensions?: string[];
  /** Whether the security posture can be overridden by the user. */
  isOverridable?: boolean;
}

export function computeSecurityPostureReferenceSerializer(
  item: ComputeSecurityPostureReference,
): any {
  return {
    id: item["id"],
    excludeExtensions: !item["excludeExtensions"]
      ? item["excludeExtensions"]
      : item["excludeExtensions"].map((p: any) => {
          return p;
        }),
    isOverridable: item["isOverridable"],
  };
}

export function computeSecurityPostureReferenceDeserializer(
  item: any,
): ComputeSecurityPostureReference {
  return {
    id: item["id"],
    excludeExtensions: !item["excludeExtensions"]
      ? item["excludeExtensions"]
      : item["excludeExtensions"].map((p: any) => {
          return p;
        }),
    isOverridable: item["isOverridable"],
  };
}

/** Enables or disables a capability on the virtual machine or virtual machine scale set. */
export interface ComputeAdditionalCapabilities {
  /** The flag that enables or disables a capability to have one or more managed data disks with UltraSSD_LRS storage account type on the VM or VMSS. Managed disks with storage account type UltraSSD_LRS can be added to a virtual machine or virtual machine scale set only if this property is enabled. */
  ultraSSDEnabled?: boolean;
  /** The flag that enables or disables hibernation capability on the VM. */
  hibernationEnabled?: boolean;
  /** The flag enables the usage of FIPS 140-3 compliant cryptography on the protectedSettings of an extension. Learn more at: https://aka.ms/linuxagentfipssupport. */
  enableFips1403Encryption?: boolean;
}

export function computeAdditionalCapabilitiesSerializer(item: ComputeAdditionalCapabilities): any {
  return {
    ultraSSDEnabled: item["ultraSSDEnabled"],
    hibernationEnabled: item["hibernationEnabled"],
    enableFips1403Encryption: item["enableFips1403Encryption"],
  };
}

export function computeAdditionalCapabilitiesDeserializer(
  item: any,
): ComputeAdditionalCapabilities {
  return {
    ultraSSDEnabled: item["ultraSSDEnabled"],
    hibernationEnabled: item["hibernationEnabled"],
    enableFips1403Encryption: item["enableFips1403Encryption"],
  };
}

/** Describes a scale-in policy for a virtual machine scale set. */
export interface ComputeScaleInPolicy {
  /** The rules to be followed when scaling-in a virtual machine scale set. <br><br> Possible values are: <br><br> **Default** When a virtual machine scale set is scaled in, the scale set will first be balanced across zones if it is a zonal scale set. Then, it will be balanced across Fault Domains as far as possible. Within each Fault Domain, the virtual machines chosen for removal will be the newest ones that are not protected from scale-in. <br><br> **OldestVM** When a virtual machine scale set is being scaled-in, the oldest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the oldest virtual machines that are not protected will be chosen for removal. <br><br> **NewestVM** When a virtual machine scale set is being scaled-in, the newest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the newest virtual machines that are not protected will be chosen for removal. <br><br> */
  rules?: ComputeVirtualMachineScaleSetScaleInRules[];
  /** This property allows you to specify if virtual machines chosen for removal have to be force deleted when a virtual machine scale set is being scaled-in.(Feature in Preview) */
  forceDeletion?: boolean;
  /** This property allows you to prioritize the deletion of unhealthy and inactive VMs when a virtual machine scale set is being scaled-in.(Feature in Preview) */
  prioritizeUnhealthyVMs?: boolean;
}

export function computeScaleInPolicySerializer(item: ComputeScaleInPolicy): any {
  return {
    rules: !item["rules"]
      ? item["rules"]
      : item["rules"].map((p: any) => {
          return p;
        }),
    forceDeletion: item["forceDeletion"],
    prioritizeUnhealthyVMs: item["prioritizeUnhealthyVMs"],
  };
}

export function computeScaleInPolicyDeserializer(item: any): ComputeScaleInPolicy {
  return {
    rules: !item["rules"]
      ? item["rules"]
      : item["rules"].map((p: any) => {
          return p;
        }),
    forceDeletion: item["forceDeletion"],
    prioritizeUnhealthyVMs: item["prioritizeUnhealthyVMs"],
  };
}

/** Known values of {@link VirtualMachineScaleSetScaleInRules} that the service accepts. */
export enum KnownComputeVirtualMachineScaleSetScaleInRules {
  /** Default */
  Default = "Default",
  /** OldestVM */
  OldestVM = "OldestVM",
  /** NewestVM */
  NewestVM = "NewestVM",
}

/** Type of ComputeVirtualMachineScaleSetScaleInRules */
export type ComputeVirtualMachineScaleSetScaleInRules = string;

/** Specifies the orchestration mode for the virtual machine scale set. */
export enum KnownComputeOrchestrationMode {
  /** Uniform */
  Uniform = "Uniform",
  /** Flexible */
  Flexible = "Flexible",
}

/**
 * Specifies the orchestration mode for the virtual machine scale set. \
 * {@link KnownComputeOrchestrationMode} can be used interchangeably with ComputeOrchestrationMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Uniform** \
 * **Flexible**
 */
export type ComputeOrchestrationMode = string;

/** Specifies the Spot-Try-Restore properties for the virtual machine scale set. With this property customer can enable or disable automatic restore of the evicted Spot VMSS VM instances opportunistically based on capacity availability and pricing constraint. */
export interface ComputeSpotRestorePolicy {
  /** Enables the Spot-Try-Restore feature where evicted VMSS SPOT instances will be tried to be restored opportunistically based on capacity availability and pricing constraints */
  enabled?: boolean;
  /** Timeout value expressed as an ISO 8601 time duration after which the platform will not try to restore the VMSS SPOT instances */
  restoreTimeout?: string;
}

export function computeSpotRestorePolicySerializer(item: ComputeSpotRestorePolicy): any {
  return { enabled: item["enabled"], restoreTimeout: item["restoreTimeout"] };
}

export function computeSpotRestorePolicyDeserializer(item: any): ComputeSpotRestorePolicy {
  return {
    enabled: item["enabled"],
    restoreTimeout: item["restoreTimeout"],
  };
}

/** Specifies the target splits for Spot and Regular priority VMs within a scale set with flexible orchestration mode. With this property the customer is able to specify the base number of regular priority VMs created as the VMSS flex instance scales out and the split between Spot and Regular priority VMs after this base target has been reached. */
export interface ComputePriorityMixPolicy {
  /** The base number of regular priority VMs that will be created in this scale set as it scales out. */
  baseRegularPriorityCount?: number;
  /** The percentage of VM instances, after the base regular priority count has been reached, that are expected to use regular priority. */
  regularPriorityPercentageAboveBase?: number;
}

export function computePriorityMixPolicySerializer(item: ComputePriorityMixPolicy): any {
  return {
    baseRegularPriorityCount: item["baseRegularPriorityCount"],
    regularPriorityPercentageAboveBase: item["regularPriorityPercentageAboveBase"],
  };
}

export function computePriorityMixPolicyDeserializer(item: any): ComputePriorityMixPolicy {
  return {
    baseRegularPriorityCount: item["baseRegularPriorityCount"],
    regularPriorityPercentageAboveBase: item["regularPriorityPercentageAboveBase"],
  };
}

/** Describes an resiliency policy - AutomaticZoneRebalancingPolicy, ResilientVMCreationPolicy and/or ResilientVMDeletionPolicy. */
export interface ComputeResiliencyPolicy {
  /** The configuration parameters used while performing resilient VM creation. */
  resilientVMCreationPolicy?: ComputeResilientVMCreationPolicy;
  /** The configuration parameters used while performing resilient VM deletion. */
  resilientVMDeletionPolicy?: ComputeResilientVMDeletionPolicy;
  /** The configuration parameters used while performing automatic AZ balancing. */
  automaticZoneRebalancingPolicy?: ComputeAutomaticZoneRebalancingPolicy;
  /** The configuration parameters used while performing zone allocation. */
  zoneAllocationPolicy?: ComputeZoneAllocationPolicy;
}

export function computeResiliencyPolicySerializer(item: ComputeResiliencyPolicy): any {
  return {
    resilientVMCreationPolicy: !item["resilientVMCreationPolicy"]
      ? item["resilientVMCreationPolicy"]
      : computeResilientVMCreationPolicySerializer(item["resilientVMCreationPolicy"]),
    resilientVMDeletionPolicy: !item["resilientVMDeletionPolicy"]
      ? item["resilientVMDeletionPolicy"]
      : computeResilientVMDeletionPolicySerializer(item["resilientVMDeletionPolicy"]),
    automaticZoneRebalancingPolicy: !item["automaticZoneRebalancingPolicy"]
      ? item["automaticZoneRebalancingPolicy"]
      : computeAutomaticZoneRebalancingPolicySerializer(item["automaticZoneRebalancingPolicy"]),
    zoneAllocationPolicy: !item["zoneAllocationPolicy"]
      ? item["zoneAllocationPolicy"]
      : computeZoneAllocationPolicySerializer(item["zoneAllocationPolicy"]),
  };
}

export function computeResiliencyPolicyDeserializer(item: any): ComputeResiliencyPolicy {
  return {
    resilientVMCreationPolicy: !item["resilientVMCreationPolicy"]
      ? item["resilientVMCreationPolicy"]
      : computeResilientVMCreationPolicyDeserializer(item["resilientVMCreationPolicy"]),
    resilientVMDeletionPolicy: !item["resilientVMDeletionPolicy"]
      ? item["resilientVMDeletionPolicy"]
      : computeResilientVMDeletionPolicyDeserializer(item["resilientVMDeletionPolicy"]),
    automaticZoneRebalancingPolicy: !item["automaticZoneRebalancingPolicy"]
      ? item["automaticZoneRebalancingPolicy"]
      : computeAutomaticZoneRebalancingPolicyDeserializer(item["automaticZoneRebalancingPolicy"]),
    zoneAllocationPolicy: !item["zoneAllocationPolicy"]
      ? item["zoneAllocationPolicy"]
      : computeZoneAllocationPolicyDeserializer(item["zoneAllocationPolicy"]),
  };
}

/** The configuration parameters used while performing resilient VM creation. */
export interface ComputeResilientVMCreationPolicy {
  /** Specifies whether resilient VM creation should be enabled on the virtual machine scale set. The default value is false. */
  enabled?: boolean;
}

export function computeResilientVMCreationPolicySerializer(
  item: ComputeResilientVMCreationPolicy,
): any {
  return { enabled: item["enabled"] };
}

export function computeResilientVMCreationPolicyDeserializer(
  item: any,
): ComputeResilientVMCreationPolicy {
  return {
    enabled: item["enabled"],
  };
}

/** The configuration parameters used while performing resilient VM deletion. */
export interface ComputeResilientVMDeletionPolicy {
  /** Specifies whether resilient VM deletion should be enabled on the virtual machine scale set. The default value is false. */
  enabled?: boolean;
}

export function computeResilientVMDeletionPolicySerializer(
  item: ComputeResilientVMDeletionPolicy,
): any {
  return { enabled: item["enabled"] };
}

export function computeResilientVMDeletionPolicyDeserializer(
  item: any,
): ComputeResilientVMDeletionPolicy {
  return {
    enabled: item["enabled"],
  };
}

/** The configuration parameters used while performing automatic AZ balancing. */
export interface ComputeAutomaticZoneRebalancingPolicy {
  /** Specifies whether Automatic AZ Balancing should be enabled on the virtual machine scale set. The default value is false. */
  enabled?: boolean;
  /** Type of rebalance strategy that will be used for rebalancing virtual machines in the scale set across availability zones. Default and only supported value for now is Recreate. */
  rebalanceStrategy?: ComputeRebalanceStrategy;
  /** Type of rebalance behavior that will be used for recreating virtual machines in the scale set across availability zones. Default and only supported value for now is CreateBeforeDelete. */
  rebalanceBehavior?: ComputeRebalanceBehavior;
}

export function computeAutomaticZoneRebalancingPolicySerializer(
  item: ComputeAutomaticZoneRebalancingPolicy,
): any {
  return {
    enabled: item["enabled"],
    rebalanceStrategy: item["rebalanceStrategy"],
    rebalanceBehavior: item["rebalanceBehavior"],
  };
}

export function computeAutomaticZoneRebalancingPolicyDeserializer(
  item: any,
): ComputeAutomaticZoneRebalancingPolicy {
  return {
    enabled: item["enabled"],
    rebalanceStrategy: item["rebalanceStrategy"],
    rebalanceBehavior: item["rebalanceBehavior"],
  };
}

/** Type of rebalance strategy that will be used for rebalancing virtual machines in the scale set across availability zones. Default and only supported value for now is Recreate. */
export enum KnownComputeRebalanceStrategy {
  /** Recreate */
  Recreate = "Recreate",
}

/**
 * Type of rebalance strategy that will be used for rebalancing virtual machines in the scale set across availability zones. Default and only supported value for now is Recreate. \
 * {@link KnownComputeRebalanceStrategy} can be used interchangeably with ComputeRebalanceStrategy,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Recreate**
 */
export type ComputeRebalanceStrategy = string;

/** Type of rebalance behavior that will be used for recreating virtual machines in the scale set across availability zones. Default and only supported value for now is CreateBeforeDelete. */
export enum KnownComputeRebalanceBehavior {
  /** CreateBeforeDelete */
  CreateBeforeDelete = "CreateBeforeDelete",
}

/**
 * Type of rebalance behavior that will be used for recreating virtual machines in the scale set across availability zones. Default and only supported value for now is CreateBeforeDelete. \
 * {@link KnownComputeRebalanceBehavior} can be used interchangeably with ComputeRebalanceBehavior,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **CreateBeforeDelete**
 */
export type ComputeRebalanceBehavior = string;

/** The configuration parameters for zone allocation of a virtual machine scale set. */
export interface ComputeZoneAllocationPolicy {
  /** The maximum number of availability zones to use if the ZonePlacementPolicy is 'Auto'. If not specified, all availability zones will be used. */
  maxZoneCount?: number;
  /** The configuration parameters used to limit the number of virtual machines per availability zone in the virtual machine scale set. */
  maxInstancePercentPerZonePolicy?: ComputeMaxInstancePercentPerZonePolicy;
}

export function computeZoneAllocationPolicySerializer(item: ComputeZoneAllocationPolicy): any {
  return {
    maxZoneCount: item["maxZoneCount"],
    maxInstancePercentPerZonePolicy: !item["maxInstancePercentPerZonePolicy"]
      ? item["maxInstancePercentPerZonePolicy"]
      : computeMaxInstancePercentPerZonePolicySerializer(item["maxInstancePercentPerZonePolicy"]),
  };
}

export function computeZoneAllocationPolicyDeserializer(item: any): ComputeZoneAllocationPolicy {
  return {
    maxZoneCount: item["maxZoneCount"],
    maxInstancePercentPerZonePolicy: !item["maxInstancePercentPerZonePolicy"]
      ? item["maxInstancePercentPerZonePolicy"]
      : computeMaxInstancePercentPerZonePolicyDeserializer(item["maxInstancePercentPerZonePolicy"]),
  };
}

/** The configuration parameters used to limit the number of virtual machines per availability zone in the virtual machine scale set. */
export interface ComputeMaxInstancePercentPerZonePolicy {
  /** Specifies whether maxInstancePercentPerZonePolicy should be enabled on the virtual machine scale set. */
  enabled?: boolean;
  /** Limit on the number of instances in each zone as a percentage of the total capacity of the virtual machine scale set. */
  value?: number;
}

export function computeMaxInstancePercentPerZonePolicySerializer(
  item: ComputeMaxInstancePercentPerZonePolicy,
): any {
  return { enabled: item["enabled"], value: item["value"] };
}

export function computeMaxInstancePercentPerZonePolicyDeserializer(
  item: any,
): ComputeMaxInstancePercentPerZonePolicy {
  return {
    enabled: item["enabled"],
    value: item["value"],
  };
}

/** Specifies the align mode between Virtual Machine Scale Set compute and storage Fault Domain count. */
export enum KnownComputeZonalPlatformFaultDomainAlignMode {
  /** Aligned */
  Aligned = "Aligned",
  /** Unaligned */
  Unaligned = "Unaligned",
}

/**
 * Specifies the align mode between Virtual Machine Scale Set compute and storage Fault Domain count. \
 * {@link KnownComputeZonalPlatformFaultDomainAlignMode} can be used interchangeably with ComputeZonalPlatformFaultDomainAlignMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Aligned** \
 * **Unaligned**
 */
export type ComputeZonalPlatformFaultDomainAlignMode = string;

/** Specifies the sku profile for the virtual machine scale set. With this property the customer is able to specify a list of VM sizes and an allocation strategy. */
export interface ComputeSkuProfile {
  /** Specifies the VM sizes for the virtual machine scale set. */
  vmSizes?: ComputeSkuProfileVMSize[];
  /** Specifies the allocation strategy for the virtual machine scale set based on which the VMs will be allocated. */
  allocationStrategy?: ComputeAllocationStrategy;
}

export function computeSkuProfileSerializer(item: ComputeSkuProfile): any {
  return {
    vmSizes: !item["vmSizes"]
      ? item["vmSizes"]
      : computeSkuProfileVMSizeArraySerializer(item["vmSizes"]),
    allocationStrategy: item["allocationStrategy"],
  };
}

export function computeSkuProfileDeserializer(item: any): ComputeSkuProfile {
  return {
    vmSizes: !item["vmSizes"]
      ? item["vmSizes"]
      : computeSkuProfileVMSizeArrayDeserializer(item["vmSizes"]),
    allocationStrategy: item["allocationStrategy"],
  };
}

export function computeSkuProfileVMSizeArraySerializer(
  result: Array<ComputeSkuProfileVMSize>,
): any[] {
  return result.map((item) => {
    return computeSkuProfileVMSizeSerializer(item);
  });
}

export function computeSkuProfileVMSizeArrayDeserializer(
  result: Array<ComputeSkuProfileVMSize>,
): any[] {
  return result.map((item) => {
    return computeSkuProfileVMSizeDeserializer(item);
  });
}

/** Specifies the VM Size. */
export interface ComputeSkuProfileVMSize {
  /** Specifies the name of the VM Size. */
  name?: string;
  /** Specifies the rank (a.k.a priority) associated with the VM Size. */
  rank?: number;
}

export function computeSkuProfileVMSizeSerializer(item: ComputeSkuProfileVMSize): any {
  return { name: item["name"], rank: item["rank"] };
}

export function computeSkuProfileVMSizeDeserializer(item: any): ComputeSkuProfileVMSize {
  return {
    name: item["name"],
    rank: item["rank"],
  };
}

/** Specifies the allocation strategy for the virtual machine scale set based on which the VMs will be allocated. */
export enum KnownComputeAllocationStrategy {
  /** LowestPrice */
  LowestPrice = "LowestPrice",
  /** CapacityOptimized */
  CapacityOptimized = "CapacityOptimized",
  /** Prioritized */
  Prioritized = "Prioritized",
}

/**
 * Specifies the allocation strategy for the virtual machine scale set based on which the VMs will be allocated. \
 * {@link KnownComputeAllocationStrategy} can be used interchangeably with ComputeAllocationStrategy,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **LowestPrice** \
 * **CapacityOptimized** \
 * **Prioritized**
 */
export type ComputeAllocationStrategy = string;

/** Specifies the high speed interconnect placement for the virtual machine scale set. */
export enum KnownComputeHighSpeedInterconnectPlacement {
  /** No high speed interconnect placement */
  None = "None",
  /** Trunk high speed interconnect placement */
  Trunk = "Trunk",
}

/**
 * Specifies the high speed interconnect placement for the virtual machine scale set. \
 * {@link KnownComputeHighSpeedInterconnectPlacement} can be used interchangeably with ComputeHighSpeedInterconnectPlacement,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None**: No high speed interconnect placement \
 * **Trunk**: Trunk high speed interconnect placement
 */
export type ComputeHighSpeedInterconnectPlacement = string;

/** Identity for the virtual machine scale set. */
export interface ComputeVirtualMachineScaleSetIdentity {
  /** The principal id of virtual machine scale set identity. This property will only be provided for a system assigned identity. */
  readonly principalId?: string;
  /** The tenant id associated with the virtual machine scale set. This property will only be provided for a system assigned identity. */
  readonly tenantId?: string;
  /** The type of identity used for the virtual machine scale set. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine scale set. */
  type?: CommonResourceIdentityType;
  /** The list of user identities associated with the virtual machine scale set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
  userAssignedIdentities?: Record<string, CommonUserAssignedIdentitiesValue>;
}

export function computeVirtualMachineScaleSetIdentitySerializer(
  item: ComputeVirtualMachineScaleSetIdentity,
): any {
  return {
    type: item["type"],
    userAssignedIdentities: !item["userAssignedIdentities"]
      ? item["userAssignedIdentities"]
      : commonUserAssignedIdentitiesValueRecordSerializer(item["userAssignedIdentities"]),
  };
}

export function computeVirtualMachineScaleSetIdentityDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetIdentity {
  return {
    principalId: item["principalId"],
    tenantId: item["tenantId"],
    type: item["type"],
    userAssignedIdentities: !item["userAssignedIdentities"]
      ? item["userAssignedIdentities"]
      : commonUserAssignedIdentitiesValueRecordDeserializer(item["userAssignedIdentities"]),
  };
}

/** Describes the user-defined constraints for resource hardware placement. */
export interface ComputePlacement {
  /** Specifies the policy for resource's placement in availability zone. Possible values are: **Any** (used for Virtual Machines), **Auto** (used for Virtual Machine Scale Sets) - An availability zone will be automatically picked by system as part of resource creation. */
  zonePlacementPolicy?: ComputeZonePlacementPolicyType;
  /** This property supplements the 'zonePlacementPolicy' property. If 'zonePlacementPolicy' is set to 'Any'/'Auto', availability zone selected by the system must be present in the list of availability zones passed with 'includeZones'. If 'includeZones' is not provided, all availability zones in region will be considered for selection. */
  includeZones?: string[];
  /** This property supplements the 'zonePlacementPolicy' property. If 'zonePlacementPolicy' is set to 'Any'/'Auto', availability zone selected by the system must not be present in the list of availability zones passed with 'excludeZones'. If 'excludeZones' is not provided, all availability zones in region will be considered for selection. */
  excludeZones?: string[];
}

export function computePlacementSerializer(item: ComputePlacement): any {
  return {
    zonePlacementPolicy: item["zonePlacementPolicy"],
    includeZones: !item["includeZones"]
      ? item["includeZones"]
      : item["includeZones"].map((p: any) => {
          return p;
        }),
    excludeZones: !item["excludeZones"]
      ? item["excludeZones"]
      : item["excludeZones"].map((p: any) => {
          return p;
        }),
  };
}

export function computePlacementDeserializer(item: any): ComputePlacement {
  return {
    zonePlacementPolicy: item["zonePlacementPolicy"],
    includeZones: !item["includeZones"]
      ? item["includeZones"]
      : item["includeZones"].map((p: any) => {
          return p;
        }),
    excludeZones: !item["excludeZones"]
      ? item["excludeZones"]
      : item["excludeZones"].map((p: any) => {
          return p;
        }),
  };
}

/** Specifies the policy for resource's placement in availability zone. Possible values are: **Any** (used for Virtual Machines), **Auto** (used for Virtual Machine Scale Sets) - An availability zone will be automatically picked by system as part of resource creation. */
export enum KnownComputeZonePlacementPolicyType {
  /** Any */
  Any = "Any",
  /** Automatic zone placement in a Virtual Machine Scale Set. */
  Auto = "Auto",
}

/**
 * Specifies the policy for resource's placement in availability zone. Possible values are: **Any** (used for Virtual Machines), **Auto** (used for Virtual Machine Scale Sets) - An availability zone will be automatically picked by system as part of resource creation. \
 * {@link KnownComputeZonePlacementPolicyType} can be used interchangeably with ComputeZonePlacementPolicyType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Any** \
 * **Auto**: Automatic zone placement in a Virtual Machine Scale Set.
 */
export type ComputeZonePlacementPolicyType = string;

/** Describes a Virtual Machine Scale Set. */
export interface ComputeVirtualMachineScaleSetUpdate extends ComputeUpdateResource {
  /** The virtual machine scale set sku. */
  sku?: ComputeSku;
  /** The purchase plan when deploying a virtual machine scale set from VM Marketplace images. */
  plan?: ComputePlan;
  /** The identity of the virtual machine scale set, if configured. */
  identity?: ComputeVirtualMachineScaleSetIdentity;
  /** The virtual machine scale set zones. */
  zones?: string[];
  /** The upgrade policy. */
  upgradePolicy?: ComputeUpgradePolicy;
  /** Policy for automatic repairs. */
  automaticRepairsPolicy?: ComputeAutomaticRepairsPolicy;
  /** The virtual machine profile. */
  virtualMachineProfile?: ComputeVirtualMachineScaleSetUpdateVMProfile;
  /** Specifies whether the Virtual Machine Scale Set should be overprovisioned. */
  overprovision?: boolean;
  /** When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs. */
  doNotRunExtensionsOnOverprovisionedVMs?: boolean;
  /** When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true. */
  singlePlacementGroup?: boolean;
  /** Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type. */
  additionalCapabilities?: ComputeAdditionalCapabilities;
  /** Specifies the policies applied when scaling in Virtual Machines in the Virtual Machine Scale Set. */
  scaleInPolicy?: ComputeScaleInPolicy;
  /** Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. <br><br>Minimum api-version: 2018-04-01. */
  proximityPlacementGroup?: CommonSubResource;
  /** Specifies the desired targets for mixing Spot and Regular priority VMs within the same VMSS Flex instance. */
  priorityMixPolicy?: ComputePriorityMixPolicy;
  /** Specifies the Spot Restore properties for the virtual machine scale set. */
  spotRestorePolicy?: ComputeSpotRestorePolicy;
  /** Policy for Resiliency */
  resiliencyPolicy?: ComputeResiliencyPolicy;
  /** Specifies the align mode between Virtual Machine Scale Set compute and storage Fault Domain count. */
  zonalPlatformFaultDomainAlignMode?: ComputeZonalPlatformFaultDomainAlignMode;
  /** Specifies the sku profile for the virtual machine scale set. */
  skuProfile?: ComputeSkuProfile;
}

export function computeVirtualMachineScaleSetUpdateSerializer(
  item: ComputeVirtualMachineScaleSetUpdate,
): any {
  return {
    tags: item["tags"],
    sku: !item["sku"] ? item["sku"] : computeSkuSerializer(item["sku"]),
    plan: !item["plan"] ? item["plan"] : computePlanSerializer(item["plan"]),
    properties: areAllPropsUndefined(item, [
      "upgradePolicy",
      "automaticRepairsPolicy",
      "virtualMachineProfile",
      "overprovision",
      "doNotRunExtensionsOnOverprovisionedVMs",
      "singlePlacementGroup",
      "additionalCapabilities",
      "scaleInPolicy",
      "proximityPlacementGroup",
      "priorityMixPolicy",
      "spotRestorePolicy",
      "resiliencyPolicy",
      "zonalPlatformFaultDomainAlignMode",
      "skuProfile",
    ])
      ? undefined
      : _virtualMachineScaleSetUpdatePropertiesSerializer(item),
    identity: !item["identity"]
      ? item["identity"]
      : computeVirtualMachineScaleSetIdentitySerializer(item["identity"]),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
  };
}

/** Describes the properties of a Virtual Machine Scale Set. */
export interface ComputeVirtualMachineScaleSetUpdateProperties {
  /** The upgrade policy. */
  upgradePolicy?: ComputeUpgradePolicy;
  /** Policy for automatic repairs. */
  automaticRepairsPolicy?: ComputeAutomaticRepairsPolicy;
  /** The virtual machine profile. */
  virtualMachineProfile?: ComputeVirtualMachineScaleSetUpdateVMProfile;
  /** Specifies whether the Virtual Machine Scale Set should be overprovisioned. */
  overprovision?: boolean;
  /** When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs. */
  doNotRunExtensionsOnOverprovisionedVMs?: boolean;
  /** When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true. */
  singlePlacementGroup?: boolean;
  /** Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type. */
  additionalCapabilities?: ComputeAdditionalCapabilities;
  /** Specifies the policies applied when scaling in Virtual Machines in the Virtual Machine Scale Set. */
  scaleInPolicy?: ComputeScaleInPolicy;
  /** Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. <br><br>Minimum api-version: 2018-04-01. */
  proximityPlacementGroup?: CommonSubResource;
  /** Specifies the desired targets for mixing Spot and Regular priority VMs within the same VMSS Flex instance. */
  priorityMixPolicy?: ComputePriorityMixPolicy;
  /** Specifies the Spot Restore properties for the virtual machine scale set. */
  spotRestorePolicy?: ComputeSpotRestorePolicy;
  /** Policy for Resiliency */
  resiliencyPolicy?: ComputeResiliencyPolicy;
  /** Specifies the align mode between Virtual Machine Scale Set compute and storage Fault Domain count. */
  zonalPlatformFaultDomainAlignMode?: ComputeZonalPlatformFaultDomainAlignMode;
  /** Specifies the sku profile for the virtual machine scale set. */
  skuProfile?: ComputeSkuProfile;
}

export function computeVirtualMachineScaleSetUpdatePropertiesSerializer(
  item: ComputeVirtualMachineScaleSetUpdateProperties,
): any {
  return {
    upgradePolicy: !item["upgradePolicy"]
      ? item["upgradePolicy"]
      : computeUpgradePolicySerializer(item["upgradePolicy"]),
    automaticRepairsPolicy: !item["automaticRepairsPolicy"]
      ? item["automaticRepairsPolicy"]
      : computeAutomaticRepairsPolicySerializer(item["automaticRepairsPolicy"]),
    virtualMachineProfile: !item["virtualMachineProfile"]
      ? item["virtualMachineProfile"]
      : computeVirtualMachineScaleSetUpdateVMProfileSerializer(item["virtualMachineProfile"]),
    overprovision: item["overprovision"],
    doNotRunExtensionsOnOverprovisionedVMs: item["doNotRunExtensionsOnOverprovisionedVMs"],
    singlePlacementGroup: item["singlePlacementGroup"],
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeAdditionalCapabilitiesSerializer(item["additionalCapabilities"]),
    scaleInPolicy: !item["scaleInPolicy"]
      ? item["scaleInPolicy"]
      : computeScaleInPolicySerializer(item["scaleInPolicy"]),
    proximityPlacementGroup: !item["proximityPlacementGroup"]
      ? item["proximityPlacementGroup"]
      : commonSubResourceSerializer(item["proximityPlacementGroup"]),
    priorityMixPolicy: !item["priorityMixPolicy"]
      ? item["priorityMixPolicy"]
      : computePriorityMixPolicySerializer(item["priorityMixPolicy"]),
    spotRestorePolicy: !item["spotRestorePolicy"]
      ? item["spotRestorePolicy"]
      : computeSpotRestorePolicySerializer(item["spotRestorePolicy"]),
    resiliencyPolicy: !item["resiliencyPolicy"]
      ? item["resiliencyPolicy"]
      : computeResiliencyPolicySerializer(item["resiliencyPolicy"]),
    zonalPlatformFaultDomainAlignMode: item["zonalPlatformFaultDomainAlignMode"],
    skuProfile: !item["skuProfile"]
      ? item["skuProfile"]
      : computeSkuProfileSerializer(item["skuProfile"]),
  };
}

/** Describes a virtual machine scale set virtual machine profile. */
export interface ComputeVirtualMachineScaleSetUpdateVMProfile {
  /** The virtual machine scale set OS profile. */
  osProfile?: ComputeVirtualMachineScaleSetUpdateOSProfile;
  /** The virtual machine scale set storage profile. */
  storageProfile?: ComputeVirtualMachineScaleSetUpdateStorageProfile;
  /** The virtual machine scale set network profile. */
  networkProfile?: ComputeVirtualMachineScaleSetUpdateNetworkProfile;
  /** The virtual machine scale set security posture reference. */
  securityPostureReference?: ComputeSecurityPostureReferenceUpdate;
  /** The virtual machine scale set Security profile */
  securityProfile?: ComputeSecurityProfile;
  /** The virtual machine scale set diagnostics profile. */
  diagnosticsProfile?: ComputeDiagnosticsProfile;
  /** The virtual machine scale set extension profile. */
  extensionProfile?: ComputeVirtualMachineScaleSetExtensionProfile;
  /** The license type, which is for bring your own license scenario. */
  licenseType?: string;
  /** Specifies the billing related details of a Azure Spot VMSS. Minimum api-version: 2019-03-01. */
  billingProfile?: ComputeBillingProfile;
  /** Specifies Scheduled Event related configurations. */
  scheduledEventsProfile?: ComputeScheduledEventsProfile;
  /** UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here. <br><br>Minimum api-version: 2021-03-01 */
  userData?: string;
  /** Specifies the hardware profile related details of a scale set. Minimum api-version: 2021-11-01. */
  hardwareProfile?: ComputeVirtualMachineScaleSetHardwareProfile;
}

export function computeVirtualMachineScaleSetUpdateVMProfileSerializer(
  item: ComputeVirtualMachineScaleSetUpdateVMProfile,
): any {
  return {
    osProfile: !item["osProfile"]
      ? item["osProfile"]
      : computeVirtualMachineScaleSetUpdateOSProfileSerializer(item["osProfile"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeVirtualMachineScaleSetUpdateStorageProfileSerializer(item["storageProfile"]),
    networkProfile: !item["networkProfile"]
      ? item["networkProfile"]
      : computeVirtualMachineScaleSetUpdateNetworkProfileSerializer(item["networkProfile"]),
    securityPostureReference: !item["securityPostureReference"]
      ? item["securityPostureReference"]
      : computeSecurityPostureReferenceUpdateSerializer(item["securityPostureReference"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeSecurityProfileSerializer(item["securityProfile"]),
    diagnosticsProfile: !item["diagnosticsProfile"]
      ? item["diagnosticsProfile"]
      : computeDiagnosticsProfileSerializer(item["diagnosticsProfile"]),
    extensionProfile: !item["extensionProfile"]
      ? item["extensionProfile"]
      : computeVirtualMachineScaleSetExtensionProfileSerializer(item["extensionProfile"]),
    licenseType: item["licenseType"],
    billingProfile: !item["billingProfile"]
      ? item["billingProfile"]
      : computeBillingProfileSerializer(item["billingProfile"]),
    scheduledEventsProfile: !item["scheduledEventsProfile"]
      ? item["scheduledEventsProfile"]
      : computeScheduledEventsProfileSerializer(item["scheduledEventsProfile"]),
    userData: item["userData"],
    hardwareProfile: !item["hardwareProfile"]
      ? item["hardwareProfile"]
      : computeVirtualMachineScaleSetHardwareProfileSerializer(item["hardwareProfile"]),
  };
}

/** Describes a virtual machine scale set OS profile. */
export interface ComputeVirtualMachineScaleSetUpdateOSProfile {
  /** A base-64 encoded string of custom data. */
  customData?: string;
  /** The Windows Configuration of the OS profile. */
  windowsConfiguration?: ComputeWindowsConfiguration;
  /** The Linux Configuration of the OS profile. */
  linuxConfiguration?: ComputeLinuxConfiguration;
  /** The List of certificates for addition to the VM. */
  secrets?: ComputeVaultSecretGroup[];
}

export function computeVirtualMachineScaleSetUpdateOSProfileSerializer(
  item: ComputeVirtualMachineScaleSetUpdateOSProfile,
): any {
  return {
    customData: item["customData"],
    windowsConfiguration: !item["windowsConfiguration"]
      ? item["windowsConfiguration"]
      : computeWindowsConfigurationSerializer(item["windowsConfiguration"]),
    linuxConfiguration: !item["linuxConfiguration"]
      ? item["linuxConfiguration"]
      : computeLinuxConfigurationSerializer(item["linuxConfiguration"]),
    secrets: !item["secrets"]
      ? item["secrets"]
      : computeVaultSecretGroupArraySerializer(item["secrets"]),
  };
}

/** Describes a virtual machine scale set storage profile. */
export interface ComputeVirtualMachineScaleSetUpdateStorageProfile {
  /** The image reference. */
  imageReference?: ComputeImageReference;
  /** The OS disk. */
  osDisk?: ComputeVirtualMachineScaleSetUpdateOSDisk;
  /** The data disks. */
  dataDisks?: ComputeVirtualMachineScaleSetDataDisk[];
  /** Specifies the disk controller type configured for the virtual machines in the scale set. **Note:** You need to deallocate the virtual machines in the scale set before updating its disk controller type based on the upgrade mode configured for the scale set. Minimum api-version: 2022-08-01 */
  diskControllerType?: ComputeDiskControllerTypes;
}

export function computeVirtualMachineScaleSetUpdateStorageProfileSerializer(
  item: ComputeVirtualMachineScaleSetUpdateStorageProfile,
): any {
  return {
    imageReference: !item["imageReference"]
      ? item["imageReference"]
      : computeImageReferenceSerializer(item["imageReference"]),
    osDisk: !item["osDisk"]
      ? item["osDisk"]
      : computeVirtualMachineScaleSetUpdateOSDiskSerializer(item["osDisk"]),
    dataDisks: !item["dataDisks"]
      ? item["dataDisks"]
      : computeVirtualMachineScaleSetDataDiskArraySerializer(item["dataDisks"]),
    diskControllerType: item["diskControllerType"],
  };
}

/** Describes virtual machine scale set operating system disk Update Object. This should be used for Updating VMSS OS Disk. */
export interface ComputeVirtualMachineScaleSetUpdateOSDisk {
  /** The caching type. */
  caching?: ComputeCachingTypes;
  /** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
  writeAcceleratorEnabled?: boolean;
  /** Specifies the ephemeral disk Settings for the operating system disk used by the virtual machine scale set. */
  diffDiskSettings?: ComputeDiffDiskSettings;
  /** Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> diskSizeGB is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023 */
  diskSizeGB?: number;
  /** The Source User Image VirtualHardDisk. This VirtualHardDisk will be copied before using it to attach to the Virtual Machine. If SourceImage is provided, the destination VirtualHardDisk should not exist. */
  image?: ComputeVirtualHardDisk;
  /** The list of virtual hard disk container uris. */
  vhdContainers?: string[];
  /** The managed disk parameters. */
  managedDisk?: ComputeVirtualMachineScaleSetManagedDiskParameters;
  /** Specifies whether OS Disk should be deleted or detached upon VMSS Flex deletion (This feature is available for VMSS with Flexible OrchestrationMode only). <br><br> Possible values: <br><br> **Delete** If this value is used, the OS disk is deleted when VMSS Flex VM is deleted.<br><br> **Detach** If this value is used, the OS disk is retained after VMSS Flex VM is deleted. <br><br> The default value is set to **Delete**. For an Ephemeral OS Disk, the default value is set to **Delete**. User cannot change the delete option for Ephemeral OS Disk. */
  deleteOption?: ComputeDiskDeleteOptionTypes;
}

export function computeVirtualMachineScaleSetUpdateOSDiskSerializer(
  item: ComputeVirtualMachineScaleSetUpdateOSDisk,
): any {
  return {
    caching: item["caching"],
    writeAcceleratorEnabled: item["writeAcceleratorEnabled"],
    diffDiskSettings: !item["diffDiskSettings"]
      ? item["diffDiskSettings"]
      : computeDiffDiskSettingsSerializer(item["diffDiskSettings"]),
    diskSizeGB: item["diskSizeGB"],
    image: !item["image"] ? item["image"] : computeVirtualHardDiskSerializer(item["image"]),
    vhdContainers: !item["vhdContainers"]
      ? item["vhdContainers"]
      : item["vhdContainers"].map((p: any) => {
          return p;
        }),
    managedDisk: !item["managedDisk"]
      ? item["managedDisk"]
      : computeVirtualMachineScaleSetManagedDiskParametersSerializer(item["managedDisk"]),
    deleteOption: item["deleteOption"],
  };
}

/** Describes a virtual machine scale set network profile. */
export interface ComputeVirtualMachineScaleSetUpdateNetworkProfile {
  /** A reference to a load balancer probe used to determine the health of an instance in the virtual machine scale set. The reference will be in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes/{probeName}'. */
  healthProbe?: ComputeApiEntityReference;
  /** The list of network configurations. */
  networkInterfaceConfigurations?: ComputeVirtualMachineScaleSetUpdateNetworkConfiguration[];
  /** specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations for Virtual Machine Scale Set with orchestration mode 'Flexible' */
  networkApiVersion?: ComputeNetworkApiVersion;
}

export function computeVirtualMachineScaleSetUpdateNetworkProfileSerializer(
  item: ComputeVirtualMachineScaleSetUpdateNetworkProfile,
): any {
  return {
    healthProbe: !item["healthProbe"]
      ? item["healthProbe"]
      : computeApiEntityReferenceSerializer(item["healthProbe"]),
    networkInterfaceConfigurations: !item["networkInterfaceConfigurations"]
      ? item["networkInterfaceConfigurations"]
      : computeVirtualMachineScaleSetUpdateNetworkConfigurationArraySerializer(
          item["networkInterfaceConfigurations"],
        ),
    networkApiVersion: item["networkApiVersion"],
  };
}

export function computeVirtualMachineScaleSetUpdateNetworkConfigurationArraySerializer(
  result: Array<ComputeVirtualMachineScaleSetUpdateNetworkConfiguration>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineScaleSetUpdateNetworkConfigurationSerializer(item);
  });
}

/** Describes a virtual machine scale set network profile's network configurations. */
export interface ComputeVirtualMachineScaleSetUpdateNetworkConfiguration {
  /** The network configuration name. */
  name?: string;
  /** Resource tags applied to the networkInterface address created by this NetworkInterfaceConfiguration */
  tags?: Record<string, string>;
  /** Whether this is a primary NIC on a virtual machine. */
  primary?: boolean;
  /** Specifies whether the network interface is accelerated networking-enabled. */
  enableAcceleratedNetworking?: boolean;
  /** Specifies whether the network interface is disabled for tcp state tracking. */
  disableTcpStateTracking?: boolean;
  /** Specifies whether the network interface is FPGA networking-enabled. */
  enableFpga?: boolean;
  /** The network security group. */
  networkSecurityGroup?: CommonSubResource;
  /** The dns settings to be applied on the network interfaces. */
  dnsSettings?: ComputeVirtualMachineScaleSetNetworkConfigurationDnsSettings;
  /** The virtual machine scale set IP Configuration. */
  ipConfigurations?: ComputeVirtualMachineScaleSetUpdateIPConfiguration[];
  /** Whether IP forwarding enabled on this NIC. */
  enableIPForwarding?: boolean;
  /** Specify what happens to the network interface when the VM is deleted */
  deleteOption?: ComputeDeleteOptions;
  /** Specifies whether the Auxiliary mode is enabled for the Network Interface resource. */
  auxiliaryMode?: ComputeNetworkInterfaceAuxiliaryMode;
  /** Specifies whether the Auxiliary sku is enabled for the Network Interface resource. */
  auxiliarySku?: ComputeNetworkInterfaceAuxiliarySku;
}

export function computeVirtualMachineScaleSetUpdateNetworkConfigurationSerializer(
  item: ComputeVirtualMachineScaleSetUpdateNetworkConfiguration,
): any {
  return {
    name: item["name"],
    properties: areAllPropsUndefined(item, [
      "primary",
      "enableAcceleratedNetworking",
      "disableTcpStateTracking",
      "enableFpga",
      "networkSecurityGroup",
      "dnsSettings",
      "ipConfigurations",
      "enableIPForwarding",
      "deleteOption",
      "auxiliaryMode",
      "auxiliarySku",
    ])
      ? undefined
      : _virtualMachineScaleSetUpdateNetworkConfigurationPropertiesSerializer(item),
    tags: item["tags"],
  };
}

/** Describes a virtual machine scale set updatable network profile's IP configuration.Use this object for updating network profile's IP Configuration. */
export interface ComputeVirtualMachineScaleSetUpdateNetworkConfigurationProperties {
  /** Whether this is a primary NIC on a virtual machine. */
  primary?: boolean;
  /** Specifies whether the network interface is accelerated networking-enabled. */
  enableAcceleratedNetworking?: boolean;
  /** Specifies whether the network interface is disabled for tcp state tracking. */
  disableTcpStateTracking?: boolean;
  /** Specifies whether the network interface is FPGA networking-enabled. */
  enableFpga?: boolean;
  /** The network security group. */
  networkSecurityGroup?: CommonSubResource;
  /** The dns settings to be applied on the network interfaces. */
  dnsSettings?: ComputeVirtualMachineScaleSetNetworkConfigurationDnsSettings;
  /** The virtual machine scale set IP Configuration. */
  ipConfigurations?: ComputeVirtualMachineScaleSetUpdateIPConfiguration[];
  /** Whether IP forwarding enabled on this NIC. */
  enableIPForwarding?: boolean;
  /** Specify what happens to the network interface when the VM is deleted */
  deleteOption?: ComputeDeleteOptions;
  /** Specifies whether the Auxiliary mode is enabled for the Network Interface resource. */
  auxiliaryMode?: ComputeNetworkInterfaceAuxiliaryMode;
  /** Specifies whether the Auxiliary sku is enabled for the Network Interface resource. */
  auxiliarySku?: ComputeNetworkInterfaceAuxiliarySku;
}

export function computeVirtualMachineScaleSetUpdateNetworkConfigurationPropertiesSerializer(
  item: ComputeVirtualMachineScaleSetUpdateNetworkConfigurationProperties,
): any {
  return {
    primary: item["primary"],
    enableAcceleratedNetworking: item["enableAcceleratedNetworking"],
    disableTcpStateTracking: item["disableTcpStateTracking"],
    enableFpga: item["enableFpga"],
    networkSecurityGroup: !item["networkSecurityGroup"]
      ? item["networkSecurityGroup"]
      : commonSubResourceSerializer(item["networkSecurityGroup"]),
    dnsSettings: !item["dnsSettings"]
      ? item["dnsSettings"]
      : computeVirtualMachineScaleSetNetworkConfigurationDnsSettingsSerializer(item["dnsSettings"]),
    ipConfigurations: !item["ipConfigurations"]
      ? item["ipConfigurations"]
      : computeVirtualMachineScaleSetUpdateIPConfigurationArraySerializer(item["ipConfigurations"]),
    enableIPForwarding: item["enableIPForwarding"],
    deleteOption: item["deleteOption"],
    auxiliaryMode: item["auxiliaryMode"],
    auxiliarySku: item["auxiliarySku"],
  };
}

export function computeVirtualMachineScaleSetUpdateIPConfigurationArraySerializer(
  result: Array<ComputeVirtualMachineScaleSetUpdateIPConfiguration>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineScaleSetUpdateIPConfigurationSerializer(item);
  });
}

/** Describes a virtual machine scale set network profile's IP configuration. NOTE: The subnet of a scale set may be modified as long as the original subnet and the new subnet are in the same virtual network */
export interface ComputeVirtualMachineScaleSetUpdateIPConfiguration {
  /** The IP configuration name. */
  name?: string;
  /** The subnet. */
  subnet?: ComputeApiEntityReference;
  /** Specifies the primary IP Configuration in case the network interface has more than one IP Configuration. */
  primary?: boolean;
  /** The publicIPAddressConfiguration. */
  publicIPAddressConfiguration?: ComputeVirtualMachineScaleSetUpdatePublicIPAddressConfiguration;
  /** Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'. */
  privateIPAddressVersion?: ComputeIPVersion;
  /** The application gateway backend address pools. */
  applicationGatewayBackendAddressPools?: CommonSubResource[];
  /** Specifies an array of references to application security group. */
  applicationSecurityGroups?: CommonSubResource[];
  /** The load balancer backend address pools. */
  loadBalancerBackendAddressPools?: CommonSubResource[];
  /** The load balancer inbound nat pools. */
  loadBalancerInboundNatPools?: CommonSubResource[];
}

export function computeVirtualMachineScaleSetUpdateIPConfigurationSerializer(
  item: ComputeVirtualMachineScaleSetUpdateIPConfiguration,
): any {
  return {
    name: item["name"],
    properties: areAllPropsUndefined(item, [
      "subnet",
      "primary",
      "publicIPAddressConfiguration",
      "privateIPAddressVersion",
      "applicationGatewayBackendAddressPools",
      "applicationSecurityGroups",
      "loadBalancerBackendAddressPools",
      "loadBalancerInboundNatPools",
    ])
      ? undefined
      : _virtualMachineScaleSetUpdateIPConfigurationPropertiesSerializer(item),
  };
}

/** Describes a virtual machine scale set network profile's IP configuration properties. */
export interface ComputeVirtualMachineScaleSetUpdateIPConfigurationProperties {
  /** The subnet. */
  subnet?: ComputeApiEntityReference;
  /** Specifies the primary IP Configuration in case the network interface has more than one IP Configuration. */
  primary?: boolean;
  /** The publicIPAddressConfiguration. */
  publicIPAddressConfiguration?: ComputeVirtualMachineScaleSetUpdatePublicIPAddressConfiguration;
  /** Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'. */
  privateIPAddressVersion?: ComputeIPVersion;
  /** The application gateway backend address pools. */
  applicationGatewayBackendAddressPools?: CommonSubResource[];
  /** Specifies an array of references to application security group. */
  applicationSecurityGroups?: CommonSubResource[];
  /** The load balancer backend address pools. */
  loadBalancerBackendAddressPools?: CommonSubResource[];
  /** The load balancer inbound nat pools. */
  loadBalancerInboundNatPools?: CommonSubResource[];
}

export function computeVirtualMachineScaleSetUpdateIPConfigurationPropertiesSerializer(
  item: ComputeVirtualMachineScaleSetUpdateIPConfigurationProperties,
): any {
  return {
    subnet: !item["subnet"] ? item["subnet"] : computeApiEntityReferenceSerializer(item["subnet"]),
    primary: item["primary"],
    publicIPAddressConfiguration: !item["publicIPAddressConfiguration"]
      ? item["publicIPAddressConfiguration"]
      : computeVirtualMachineScaleSetUpdatePublicIPAddressConfigurationSerializer(
          item["publicIPAddressConfiguration"],
        ),
    privateIPAddressVersion: item["privateIPAddressVersion"],
    applicationGatewayBackendAddressPools: !item["applicationGatewayBackendAddressPools"]
      ? item["applicationGatewayBackendAddressPools"]
      : commonSubResourceArraySerializer(item["applicationGatewayBackendAddressPools"]),
    applicationSecurityGroups: !item["applicationSecurityGroups"]
      ? item["applicationSecurityGroups"]
      : commonSubResourceArraySerializer(item["applicationSecurityGroups"]),
    loadBalancerBackendAddressPools: !item["loadBalancerBackendAddressPools"]
      ? item["loadBalancerBackendAddressPools"]
      : commonSubResourceArraySerializer(item["loadBalancerBackendAddressPools"]),
    loadBalancerInboundNatPools: !item["loadBalancerInboundNatPools"]
      ? item["loadBalancerInboundNatPools"]
      : commonSubResourceArraySerializer(item["loadBalancerInboundNatPools"]),
  };
}

/** Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration */
export interface ComputeVirtualMachineScaleSetUpdatePublicIPAddressConfiguration {
  /** The publicIP address configuration name. */
  name?: string;
  /** Resource tags applied to the publicIP address created by this PublicIPAddressConfiguration */
  tags?: Record<string, string>;
  /** The idle timeout of the public IP address. */
  idleTimeoutInMinutes?: number;
  /** The dns settings to be applied on the publicIP addresses . */
  dnsSettings?: ComputeVirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings;
  /** The PublicIPPrefix from which to allocate publicIP addresses. */
  publicIPPrefix?: CommonSubResource;
  /** Specify what happens to the public IP when the VM is deleted */
  deleteOption?: ComputeDeleteOptions;
}

export function computeVirtualMachineScaleSetUpdatePublicIPAddressConfigurationSerializer(
  item: ComputeVirtualMachineScaleSetUpdatePublicIPAddressConfiguration,
): any {
  return {
    name: item["name"],
    properties: areAllPropsUndefined(item, [
      "idleTimeoutInMinutes",
      "dnsSettings",
      "publicIPPrefix",
      "deleteOption",
    ])
      ? undefined
      : _virtualMachineScaleSetUpdatePublicIPAddressConfigurationPropertiesSerializer(item),
    tags: item["tags"],
  };
}

/** Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration */
export interface ComputeVirtualMachineScaleSetUpdatePublicIPAddressConfigurationProperties {
  /** The idle timeout of the public IP address. */
  idleTimeoutInMinutes?: number;
  /** The dns settings to be applied on the publicIP addresses . */
  dnsSettings?: ComputeVirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings;
  /** The PublicIPPrefix from which to allocate publicIP addresses. */
  publicIPPrefix?: CommonSubResource;
  /** Specify what happens to the public IP when the VM is deleted */
  deleteOption?: ComputeDeleteOptions;
}

export function computeVirtualMachineScaleSetUpdatePublicIPAddressConfigurationPropertiesSerializer(
  item: ComputeVirtualMachineScaleSetUpdatePublicIPAddressConfigurationProperties,
): any {
  return {
    idleTimeoutInMinutes: item["idleTimeoutInMinutes"],
    dnsSettings: !item["dnsSettings"]
      ? item["dnsSettings"]
      : computeVirtualMachineScaleSetPublicIPAddressConfigurationDnsSettingsSerializer(
          item["dnsSettings"],
        ),
    publicIPPrefix: !item["publicIPPrefix"]
      ? item["publicIPPrefix"]
      : commonSubResourceSerializer(item["publicIPPrefix"]),
    deleteOption: item["deleteOption"],
  };
}

/** Specifies the security posture to be used in the scale set. Minimum api-version: 2023-03-01 */
export interface ComputeSecurityPostureReferenceUpdate {
  /** The security posture reference id in the form of /CommunityGalleries/{communityGalleryName}/securityPostures/{securityPostureName}/versions/{major.minor.patch}|latest */
  id?: string;
  /** The list of virtual machine extension names to exclude when applying the security posture. */
  excludeExtensions?: string[];
  /** Whether the security posture can be overridden by the user. */
  isOverridable?: boolean;
}

export function computeSecurityPostureReferenceUpdateSerializer(
  item: ComputeSecurityPostureReferenceUpdate,
): any {
  return {
    id: item["id"],
    excludeExtensions: !item["excludeExtensions"]
      ? item["excludeExtensions"]
      : item["excludeExtensions"].map((p: any) => {
          return p;
        }),
    isOverridable: item["isOverridable"],
  };
}

/** The Update Resource model definition. */
export interface ComputeUpdateResource {
  /** Resource tags */
  tags?: Record<string, string>;
}

export function computeUpdateResourceSerializer(item: ComputeUpdateResource): any {
  return { tags: item["tags"] };
}

/** The List Virtual Machine operation response. */
export interface _ComputeVirtualMachineScaleSetListResult {
  /** The list of virtual machine scale sets. */
  value: ComputeVirtualMachineScaleSet[];
  /** The uri to fetch the next page of Virtual Machine Scale Sets. Call ListNext() with this to fetch the next page of VMSS. */
  nextLink?: string;
}

export function _computeVirtualMachineScaleSetListResultDeserializer(
  item: any,
): _ComputeVirtualMachineScaleSetListResult {
  return {
    value: computeVirtualMachineScaleSetArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeVirtualMachineScaleSetArraySerializer(
  result: Array<ComputeVirtualMachineScaleSet>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineScaleSetSerializer(item);
  });
}

export function computeVirtualMachineScaleSetArrayDeserializer(
  result: Array<ComputeVirtualMachineScaleSet>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineScaleSetDeserializer(item);
  });
}

/** The List Virtual Machine operation response. */
export interface _ComputeVirtualMachineScaleSetListWithLinkResult {
  /** The list of virtual machine scale sets. */
  value: ComputeVirtualMachineScaleSet[];
  /** The uri to fetch the next page of Virtual Machine Scale Sets. Call ListNext() with this to fetch the next page of Virtual Machine Scale Sets. */
  nextLink?: string;
}

export function _computeVirtualMachineScaleSetListWithLinkResultDeserializer(
  item: any,
): _ComputeVirtualMachineScaleSetListWithLinkResult {
  return {
    value: computeVirtualMachineScaleSetArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

/** Specifies a list of virtual machine instance IDs from the VM scale set. */
export interface ComputeVirtualMachineScaleSetVMInstanceIDs {
  /** The virtual machine scale set instance ids. Omitting the virtual machine scale set instance ids will result in the operation being performed on all virtual machines in the virtual machine scale set. */
  instanceIds?: string[];
}

export function computeVirtualMachineScaleSetVMInstanceIDsSerializer(
  item: ComputeVirtualMachineScaleSetVMInstanceIDs,
): any {
  return {
    instanceIds: !item["instanceIds"]
      ? item["instanceIds"]
      : item["instanceIds"].map((p: any) => {
          return p;
        }),
  };
}

/** model interface ComputeVMScaleSetConvertToSinglePlacementGroupInput */
export interface ComputeVMScaleSetConvertToSinglePlacementGroupInput {
  /** Id of the placement group in which you want future virtual machine instances to be placed. To query placement group Id, please use Virtual Machine Scale Set VMs - Get API. If not provided, the platform will choose one with maximum number of virtual machine instances. */
  activePlacementGroupId?: string;
}

export function computeVMScaleSetConvertToSinglePlacementGroupInputSerializer(
  item: ComputeVMScaleSetConvertToSinglePlacementGroupInput,
): any {
  return { activePlacementGroupId: item["activePlacementGroupId"] };
}

/** Specifies a list of virtual machine instance IDs from the VM scale set. */
export interface ComputeVirtualMachineScaleSetVMInstanceRequiredIDs {
  /** The virtual machine scale set instance ids. */
  instanceIds: string[];
}

export function computeVirtualMachineScaleSetVMInstanceRequiredIDsSerializer(
  item: ComputeVirtualMachineScaleSetVMInstanceRequiredIDs,
): any {
  return {
    instanceIds: item["instanceIds"].map((p: any) => {
      return p;
    }),
  };
}

/** Response after calling a manual recovery walk */
export interface ComputeRecoveryWalkResponse {
  /** Whether the recovery walk was performed */
  readonly walkPerformed?: boolean;
  /** The next update domain that needs to be walked. Null means walk spanning all update domains has been completed */
  readonly nextPlatformUpdateDomain?: number;
}

export function computeRecoveryWalkResponseDeserializer(item: any): ComputeRecoveryWalkResponse {
  return {
    walkPerformed: item["walkPerformed"],
    nextPlatformUpdateDomain: item["nextPlatformUpdateDomain"],
  };
}

/** The instance view of a virtual machine scale set. */
export interface ComputeVirtualMachineScaleSetInstanceView {
  /** The instance view status summary for the virtual machine scale set. */
  readonly virtualMachine?: ComputeVirtualMachineScaleSetInstanceViewStatusesSummary;
  /** The extensions information. */
  readonly extensions?: ComputeVirtualMachineScaleSetVMExtensionsSummary[];
  /** The resource status information. */
  statuses?: ComputeInstanceViewStatus[];
  /** The orchestration services information. */
  readonly orchestrationServices?: ComputeOrchestrationServiceSummary[];
}

export function computeVirtualMachineScaleSetInstanceViewDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetInstanceView {
  return {
    virtualMachine: !item["virtualMachine"]
      ? item["virtualMachine"]
      : computeVirtualMachineScaleSetInstanceViewStatusesSummaryDeserializer(
          item["virtualMachine"],
        ),
    extensions: !item["extensions"]
      ? item["extensions"]
      : computeVirtualMachineScaleSetVMExtensionsSummaryArrayDeserializer(item["extensions"]),
    statuses: !item["statuses"]
      ? item["statuses"]
      : computeInstanceViewStatusArrayDeserializer(item["statuses"]),
    orchestrationServices: !item["orchestrationServices"]
      ? item["orchestrationServices"]
      : computeOrchestrationServiceSummaryArrayDeserializer(item["orchestrationServices"]),
  };
}

/** Instance view statuses summary for virtual machines of a virtual machine scale set. */
export interface ComputeVirtualMachineScaleSetInstanceViewStatusesSummary {
  /** The extensions information. */
  readonly statusesSummary?: ComputeVirtualMachineStatusCodeCount[];
}

export function computeVirtualMachineScaleSetInstanceViewStatusesSummaryDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetInstanceViewStatusesSummary {
  return {
    statusesSummary: !item["statusesSummary"]
      ? item["statusesSummary"]
      : computeVirtualMachineStatusCodeCountArrayDeserializer(item["statusesSummary"]),
  };
}

export function computeVirtualMachineStatusCodeCountArrayDeserializer(
  result: Array<ComputeVirtualMachineStatusCodeCount>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineStatusCodeCountDeserializer(item);
  });
}

/** The status code and count of the virtual machine scale set instance view status summary. */
export interface ComputeVirtualMachineStatusCodeCount {
  /** The instance view status code. */
  readonly code?: string;
  /** The number of instances having a particular status code. */
  readonly count?: number;
}

export function computeVirtualMachineStatusCodeCountDeserializer(
  item: any,
): ComputeVirtualMachineStatusCodeCount {
  return {
    code: item["code"],
    count: item["count"],
  };
}

export function computeVirtualMachineScaleSetVMExtensionsSummaryArrayDeserializer(
  result: Array<ComputeVirtualMachineScaleSetVMExtensionsSummary>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineScaleSetVMExtensionsSummaryDeserializer(item);
  });
}

/** Extensions summary for virtual machines of a virtual machine scale set. */
export interface ComputeVirtualMachineScaleSetVMExtensionsSummary {
  /** The extension name. */
  readonly name?: string;
  /** The extensions information. */
  readonly statusesSummary?: ComputeVirtualMachineStatusCodeCount[];
}

export function computeVirtualMachineScaleSetVMExtensionsSummaryDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetVMExtensionsSummary {
  return {
    name: item["name"],
    statusesSummary: !item["statusesSummary"]
      ? item["statusesSummary"]
      : computeVirtualMachineStatusCodeCountArrayDeserializer(item["statusesSummary"]),
  };
}

export function computeInstanceViewStatusArraySerializer(
  result: Array<ComputeInstanceViewStatus>,
): any[] {
  return result.map((item) => {
    return computeInstanceViewStatusSerializer(item);
  });
}

export function computeInstanceViewStatusArrayDeserializer(
  result: Array<ComputeInstanceViewStatus>,
): any[] {
  return result.map((item) => {
    return computeInstanceViewStatusDeserializer(item);
  });
}

/** Instance view status. */
export interface ComputeInstanceViewStatus {
  /** The status code. */
  code?: string;
  /** The level code. */
  level?: ComputeStatusLevelTypes;
  /** The short localizable label for the status. */
  displayStatus?: string;
  /** The detailed status message, including for alerts and error messages. */
  message?: string;
  /** The time of the status. */
  time?: Date;
}

export function computeInstanceViewStatusSerializer(item: ComputeInstanceViewStatus): any {
  return {
    code: item["code"],
    level: item["level"],
    displayStatus: item["displayStatus"],
    message: item["message"],
    time: !item["time"] ? item["time"] : item["time"].toISOString(),
  };
}

export function computeInstanceViewStatusDeserializer(item: any): ComputeInstanceViewStatus {
  return {
    code: item["code"],
    level: item["level"],
    displayStatus: item["displayStatus"],
    message: item["message"],
    time: !item["time"] ? item["time"] : new Date(item["time"]),
  };
}

/** The level code. */
export type ComputeStatusLevelTypes = "Info" | "Warning" | "Error";

export function computeOrchestrationServiceSummaryArrayDeserializer(
  result: Array<ComputeOrchestrationServiceSummary>,
): any[] {
  return result.map((item) => {
    return computeOrchestrationServiceSummaryDeserializer(item);
  });
}

/** Summary for an orchestration service of a virtual machine scale set. */
export interface ComputeOrchestrationServiceSummary {
  /** The name of the service. */
  readonly serviceName?: ComputeOrchestrationServiceNames;
  /** The current state of the service. */
  readonly serviceState?: ComputeOrchestrationServiceState;
  /** The latest operation status of the service. Minimum API version for this property is 2025-04-01. */
  readonly latestOperationStatus?: ComputeOrchestrationServiceOperationStatus;
  /** The last UTC time when the operation status changed. Minimum API version for this property is 2025-04-01. */
  readonly lastStatusChangeTime?: Date;
}

export function computeOrchestrationServiceSummaryDeserializer(
  item: any,
): ComputeOrchestrationServiceSummary {
  return {
    serviceName: item["serviceName"],
    serviceState: item["serviceState"],
    latestOperationStatus: item["latestOperationStatus"],
    lastStatusChangeTime: !item["lastStatusChangeTime"]
      ? item["lastStatusChangeTime"]
      : new Date(item["lastStatusChangeTime"]),
  };
}

/** The name of the service. */
export enum KnownComputeOrchestrationServiceNames {
  /** AutomaticRepairs */
  AutomaticRepairs = "AutomaticRepairs",
  /** AutomaticZoneRebalancing orchestration service. */
  AutomaticZoneRebalancing = "AutomaticZoneRebalancing",
}

/**
 * The name of the service. \
 * {@link KnownComputeOrchestrationServiceNames} can be used interchangeably with ComputeOrchestrationServiceNames,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AutomaticRepairs** \
 * **AutomaticZoneRebalancing**: AutomaticZoneRebalancing orchestration service.
 */
export type ComputeOrchestrationServiceNames = string;

/** The current state of the service. */
export enum KnownComputeOrchestrationServiceState {
  /** NotRunning */
  NotRunning = "NotRunning",
  /** Running */
  Running = "Running",
  /** Suspended */
  Suspended = "Suspended",
}

/**
 * The current state of the service. \
 * {@link KnownComputeOrchestrationServiceState} can be used interchangeably with ComputeOrchestrationServiceState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotRunning** \
 * **Running** \
 * **Suspended**
 */
export type ComputeOrchestrationServiceState = string;

/** The latest operation status of the service. */
export enum KnownComputeOrchestrationServiceOperationStatus {
  /** InProgress orchestration service operation status. */
  InProgress = "InProgress",
  /** Completed orchestration service operation status. */
  Completed = "Completed",
}

/**
 * The latest operation status of the service. \
 * {@link KnownComputeOrchestrationServiceOperationStatus} can be used interchangeably with ComputeOrchestrationServiceOperationStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **InProgress**: InProgress orchestration service operation status. \
 * **Completed**: Completed orchestration service operation status.
 */
export type ComputeOrchestrationServiceOperationStatus = string;

/** List of Virtual Machine Scale Set OS Upgrade History operation response. */
export interface _ComputeVirtualMachineScaleSetListOSUpgradeHistory {
  /** The list of OS upgrades performed on the virtual machine scale set. */
  value: ComputeUpgradeOperationHistoricalStatusInfo[];
  /** The uri to fetch the next page of OS Upgrade History. Call ListNext() with this to fetch the next page of history of upgrades. */
  nextLink?: string;
}

export function _computeVirtualMachineScaleSetListOSUpgradeHistoryDeserializer(
  item: any,
): _ComputeVirtualMachineScaleSetListOSUpgradeHistory {
  return {
    value: computeUpgradeOperationHistoricalStatusInfoArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeUpgradeOperationHistoricalStatusInfoArrayDeserializer(
  result: Array<ComputeUpgradeOperationHistoricalStatusInfo>,
): any[] {
  return result.map((item) => {
    return computeUpgradeOperationHistoricalStatusInfoDeserializer(item);
  });
}

/** Virtual Machine Scale Set OS Upgrade History operation response. */
export interface ComputeUpgradeOperationHistoricalStatusInfo {
  /** Information about the properties of the upgrade operation. */
  readonly properties?: ComputeUpgradeOperationHistoricalStatusInfoProperties;
  /** Resource type */
  readonly type?: string;
  /** Resource location */
  readonly location?: string;
}

export function computeUpgradeOperationHistoricalStatusInfoDeserializer(
  item: any,
): ComputeUpgradeOperationHistoricalStatusInfo {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : computeUpgradeOperationHistoricalStatusInfoPropertiesDeserializer(item["properties"]),
    type: item["type"],
    location: item["location"],
  };
}

/** Describes each OS upgrade on the Virtual Machine Scale Set. */
export interface ComputeUpgradeOperationHistoricalStatusInfoProperties {
  /** Information about the overall status of the upgrade operation. */
  readonly runningStatus?: ComputeUpgradeOperationHistoryStatus;
  /** Counts of the VMs in each state. */
  readonly progress?: ComputeRollingUpgradeProgressInfo;
  /** Error Details for this upgrade if there are any. */
  readonly error?: CommonApiError;
  /** Invoker of the Upgrade Operation */
  readonly startedBy?: ComputeUpgradeOperationInvoker;
  /** Image Reference details */
  readonly targetImageReference?: ComputeImageReference;
  /** Information about OS rollback if performed */
  readonly rollbackInfo?: ComputeRollbackStatusInfo;
}

export function computeUpgradeOperationHistoricalStatusInfoPropertiesDeserializer(
  item: any,
): ComputeUpgradeOperationHistoricalStatusInfoProperties {
  return {
    runningStatus: !item["runningStatus"]
      ? item["runningStatus"]
      : computeUpgradeOperationHistoryStatusDeserializer(item["runningStatus"]),
    progress: !item["progress"]
      ? item["progress"]
      : computeRollingUpgradeProgressInfoDeserializer(item["progress"]),
    error: !item["error"] ? item["error"] : commonApiErrorDeserializer(item["error"]),
    startedBy: item["startedBy"],
    targetImageReference: !item["targetImageReference"]
      ? item["targetImageReference"]
      : computeImageReferenceDeserializer(item["targetImageReference"]),
    rollbackInfo: !item["rollbackInfo"]
      ? item["rollbackInfo"]
      : computeRollbackStatusInfoDeserializer(item["rollbackInfo"]),
  };
}

/** Information about the current running state of the overall upgrade. */
export interface ComputeUpgradeOperationHistoryStatus {
  /** Code indicating the current status of the upgrade. */
  readonly code?: ComputeUpgradeState;
  /** Start time of the upgrade. */
  readonly startTime?: Date;
  /** End time of the upgrade. */
  readonly endTime?: Date;
}

export function computeUpgradeOperationHistoryStatusDeserializer(
  item: any,
): ComputeUpgradeOperationHistoryStatus {
  return {
    code: item["code"],
    startTime: !item["startTime"] ? item["startTime"] : new Date(item["startTime"]),
    endTime: !item["endTime"] ? item["endTime"] : new Date(item["endTime"]),
  };
}

/** Code indicating the current status of the upgrade. */
export type ComputeUpgradeState = "RollingForward" | "Cancelled" | "Completed" | "Faulted";

/** Information about the number of virtual machine instances in each upgrade state. */
export interface ComputeRollingUpgradeProgressInfo {
  /** The number of instances that have been successfully upgraded. */
  readonly successfulInstanceCount?: number;
  /** The number of instances that have failed to be upgraded successfully. */
  readonly failedInstanceCount?: number;
  /** The number of instances that are currently being upgraded. */
  readonly inProgressInstanceCount?: number;
  /** The number of instances that have not yet begun to be upgraded. */
  readonly pendingInstanceCount?: number;
}

export function computeRollingUpgradeProgressInfoDeserializer(
  item: any,
): ComputeRollingUpgradeProgressInfo {
  return {
    successfulInstanceCount: item["successfulInstanceCount"],
    failedInstanceCount: item["failedInstanceCount"],
    inProgressInstanceCount: item["inProgressInstanceCount"],
    pendingInstanceCount: item["pendingInstanceCount"],
  };
}

/** Invoker of the Upgrade Operation */
export type ComputeUpgradeOperationInvoker = "Unknown" | "User" | "Platform";

/** Information about rollback on failed VM instances after a OS Upgrade operation. */
export interface ComputeRollbackStatusInfo {
  /** The number of instances which have been successfully rolled back. */
  readonly successfullyRolledbackInstanceCount?: number;
  /** The number of instances which failed to rollback. */
  readonly failedRolledbackInstanceCount?: number;
  /** Error details if OS rollback failed. */
  readonly rollbackError?: CommonApiError;
}

export function computeRollbackStatusInfoDeserializer(item: any): ComputeRollbackStatusInfo {
  return {
    successfullyRolledbackInstanceCount: item["successfullyRolledbackInstanceCount"],
    failedRolledbackInstanceCount: item["failedRolledbackInstanceCount"],
    rollbackError: !item["rollbackError"]
      ? item["rollbackError"]
      : commonApiErrorDeserializer(item["rollbackError"]),
  };
}

/** Describes a Virtual Machine Scale Set VM Reimage Parameters. */
export interface ComputeVirtualMachineScaleSetReimageParameters extends ComputeVirtualMachineScaleSetVMReimageParameters {
  /** The virtual machine scale set instance ids. Omitting the virtual machine scale set instance ids will result in the operation being performed on all virtual machines in the virtual machine scale set. */
  instanceIds?: string[];
}

export function computeVirtualMachineScaleSetReimageParametersSerializer(
  item: ComputeVirtualMachineScaleSetReimageParameters,
): any {
  return {
    forceUpdateOSDiskForEphemeral: item["forceUpdateOSDiskForEphemeral"],
    tempDisk: item["tempDisk"],
    exactVersion: item["exactVersion"],
    osProfile: !item["osProfile"]
      ? item["osProfile"]
      : computeOSProfileProvisioningDataSerializer(item["osProfile"]),
    instanceIds: !item["instanceIds"]
      ? item["instanceIds"]
      : item["instanceIds"].map((p: any) => {
          return p;
        }),
  };
}

/** Describes a Virtual Machine Scale Set VM Reimage Parameters. */
export interface ComputeVirtualMachineScaleSetVMReimageParameters extends ComputeVirtualMachineReimageParameters {
  /** Parameter to force update ephemeral OS disk for a virtual machine scale set VM */
  forceUpdateOSDiskForEphemeral?: boolean;
}

export function computeVirtualMachineScaleSetVMReimageParametersSerializer(
  item: ComputeVirtualMachineScaleSetVMReimageParameters,
): any {
  return {
    tempDisk: item["tempDisk"],
    exactVersion: item["exactVersion"],
    osProfile: !item["osProfile"]
      ? item["osProfile"]
      : computeOSProfileProvisioningDataSerializer(item["osProfile"]),
    forceUpdateOSDiskForEphemeral: item["forceUpdateOSDiskForEphemeral"],
  };
}

/** Parameters for Reimaging Virtual Machine. NOTE: Virtual Machine OS disk will always be reimaged */
export interface ComputeVirtualMachineReimageParameters {
  /** Specifies whether to reimage temp disk. Default value: false. Note: This temp disk reimage parameter is only supported for VM/VMSS with Ephemeral OS disk. */
  tempDisk?: boolean;
  /** Specifies in decimal number, the version the OS disk should be reimaged to. If exact version is not provided, the OS disk is reimaged to the existing version of OS Disk. */
  exactVersion?: string;
  /** Specifies information required for reimaging the non-ephemeral OS disk. */
  osProfile?: ComputeOSProfileProvisioningData;
}

export function computeVirtualMachineReimageParametersSerializer(
  item: ComputeVirtualMachineReimageParameters,
): any {
  return {
    tempDisk: item["tempDisk"],
    exactVersion: item["exactVersion"],
    osProfile: !item["osProfile"]
      ? item["osProfile"]
      : computeOSProfileProvisioningDataSerializer(item["osProfile"]),
  };
}

/** Additional parameters for Reimaging Non-Ephemeral Virtual Machine. */
export interface ComputeOSProfileProvisioningData {
  /** Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/reset-rdp) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection) */
  adminPassword?: string;
  /** Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. **Note: Do not pass any secrets or passwords in customData property.** This property cannot be updated after the VM is created. The property customData is passed to the VM to be saved as a file, for more information see [Custom Data on Azure VMs](https://azure.microsoft.com/blog/custom-data-and-cloud-init-on-windows-azure/). If using cloud-init for your Linux VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/linux/using-cloud-init). */
  customData?: string;
}

export function computeOSProfileProvisioningDataSerializer(
  item: ComputeOSProfileProvisioningData,
): any {
  return { adminPassword: item["adminPassword"], customData: item["customData"] };
}

/** The input for OrchestrationServiceState */
export interface ComputeOrchestrationServiceStateInput {
  /** The name of the service. */
  serviceName: ComputeOrchestrationServiceNames;
  /** The action to be performed. */
  action: ComputeOrchestrationServiceStateAction;
}

export function computeOrchestrationServiceStateInputSerializer(
  item: ComputeOrchestrationServiceStateInput,
): any {
  return { serviceName: item["serviceName"], action: item["action"] };
}

/** The action to be performed. */
export enum KnownComputeOrchestrationServiceStateAction {
  /** Resume */
  Resume = "Resume",
  /** Suspend */
  Suspend = "Suspend",
}

/**
 * The action to be performed. \
 * {@link KnownComputeOrchestrationServiceStateAction} can be used interchangeably with ComputeOrchestrationServiceStateAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Resume** \
 * **Suspend**
 */
export type ComputeOrchestrationServiceStateAction = string;

/** The Virtual Machine Scale Set List Skus operation response. */
export interface _ComputeVirtualMachineScaleSetListSkusResult {
  /** The list of skus available for the virtual machine scale set. */
  value: ComputeVirtualMachineScaleSetSku[];
  /** The uri to fetch the next page of Virtual Machine Scale Set Skus. Call ListNext() with this to fetch the next page of VMSS Skus. */
  nextLink?: string;
}

export function _computeVirtualMachineScaleSetListSkusResultDeserializer(
  item: any,
): _ComputeVirtualMachineScaleSetListSkusResult {
  return {
    value: computeVirtualMachineScaleSetSkuArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeVirtualMachineScaleSetSkuArrayDeserializer(
  result: Array<ComputeVirtualMachineScaleSetSku>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineScaleSetSkuDeserializer(item);
  });
}

/** Describes an available virtual machine scale set sku. */
export interface ComputeVirtualMachineScaleSetSku {
  /** The type of resource the sku applies to. */
  readonly resourceType?: string;
  /** The Sku. */
  readonly sku?: ComputeSku;
  /** Specifies the number of virtual machines in the scale set. */
  readonly capacity?: ComputeVirtualMachineScaleSetSkuCapacity;
}

export function computeVirtualMachineScaleSetSkuDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetSku {
  return {
    resourceType: item["resourceType"],
    sku: !item["sku"] ? item["sku"] : computeSkuDeserializer(item["sku"]),
    capacity: !item["capacity"]
      ? item["capacity"]
      : computeVirtualMachineScaleSetSkuCapacityDeserializer(item["capacity"]),
  };
}

/** Describes scaling information of a sku. */
export interface ComputeVirtualMachineScaleSetSkuCapacity {
  /** The minimum capacity. */
  readonly minimum?: number;
  /** The maximum capacity that can be set. */
  readonly maximum?: number;
  /** The default capacity. */
  readonly defaultCapacity?: number;
  /** The scale type applicable to the sku. */
  readonly scaleType?: ComputeVirtualMachineScaleSetSkuScaleType;
}

export function computeVirtualMachineScaleSetSkuCapacityDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetSkuCapacity {
  return {
    minimum: item["minimum"],
    maximum: item["maximum"],
    defaultCapacity: item["defaultCapacity"],
    scaleType: item["scaleType"],
  };
}

/** The scale type applicable to the sku. */
export type ComputeVirtualMachineScaleSetSkuScaleType = "Automatic" | "None";

/** The input for ScaleOut */
export interface ComputeVMScaleSetScaleOutInput {
  /** Specifies the number of virtual machines in the scale set. */
  capacity: number;
  /** The input properties for ScaleOut */
  properties?: ComputeVMScaleSetScaleOutInputProperties;
}

export function computeVMScaleSetScaleOutInputSerializer(
  item: ComputeVMScaleSetScaleOutInput,
): any {
  return {
    capacity: item["capacity"],
    properties: !item["properties"]
      ? item["properties"]
      : computeVMScaleSetScaleOutInputPropertiesSerializer(item["properties"]),
  };
}

/** The input properties for ScaleOut */
export interface ComputeVMScaleSetScaleOutInputProperties {
  /** The zone in which the scale out is requested for the virtual machine scale set. */
  zone?: string;
}

export function computeVMScaleSetScaleOutInputPropertiesSerializer(
  item: ComputeVMScaleSetScaleOutInputProperties,
): any {
  return { zone: item["zone"] };
}

/** Describes a Virtual Machine Scale Set Extension. */
export interface ComputeVirtualMachineScaleSetExtensionUpdate extends CommonSubResourceReadOnly {
  /** The name of the extension. */
  readonly name?: string;
  /** Resource type */
  readonly type?: string;
  /** If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed. */
  forceUpdateTag?: string;
  /** The name of the extension handler publisher. */
  publisher?: string;
  /** Specifies the type of the extension; an example is "CustomScriptExtension". */
  typePropertiesType?: string;
  /** Specifies the version of the script handler. */
  typeHandlerVersion?: string;
  /** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
  autoUpgradeMinorVersion?: boolean;
  /** Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available. */
  enableAutomaticUpgrade?: boolean;
  /** Json formatted public settings for the extension. */
  settings?: any;
  /** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
  protectedSettings?: any;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: string;
  /** Collection of extension names after which this extension needs to be provisioned. */
  provisionAfterExtensions?: string[];
  /** Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false. */
  suppressFailures?: boolean;
  /** The extensions protected settings that are passed by reference, and consumed from key vault */
  protectedSettingsFromKeyVault?: ComputeKeyVaultSecretReference;
}

export function computeVirtualMachineScaleSetExtensionUpdateSerializer(
  item: ComputeVirtualMachineScaleSetExtensionUpdate,
): any {
  return {
    properties: areAllPropsUndefined(item, [
      "forceUpdateTag",
      "publisher",
      "type",
      "typeHandlerVersion",
      "autoUpgradeMinorVersion",
      "enableAutomaticUpgrade",
      "settings",
      "protectedSettings",
      "provisionAfterExtensions",
      "suppressFailures",
      "protectedSettingsFromKeyVault",
    ])
      ? undefined
      : _virtualMachineScaleSetExtensionUpdatePropertiesSerializer(item),
  };
}

/** The List VM scale set extension operation response. */
export interface _ComputeVirtualMachineScaleSetExtensionListResult {
  /** The list of VM scale set extensions. */
  value: ComputeVirtualMachineScaleSetExtension[];
  /** The uri to fetch the next page of VM scale set extensions. Call ListNext() with this to fetch the next page of VM scale set extensions. */
  nextLink?: string;
}

export function _computeVirtualMachineScaleSetExtensionListResultDeserializer(
  item: any,
): _ComputeVirtualMachineScaleSetExtensionListResult {
  return {
    value: computeVirtualMachineScaleSetExtensionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

/** Describes a VMSS VM Extension. */
export interface ComputeVirtualMachineScaleSetVMExtension extends CommonSubResourceReadOnly {
  /** The location of the extension. */
  location?: string;
  /** Resource type */
  readonly type?: string;
  /** Resource name */
  readonly name?: string;
  /** How the extension handler should be forced to update even if the extension configuration has not changed. */
  forceUpdateTag?: string;
  /** The name of the extension handler publisher. */
  publisher?: string;
  /** Specifies the type of the extension; an example is "CustomScriptExtension". */
  typePropertiesType?: string;
  /** Specifies the version of the script handler. */
  typeHandlerVersion?: string;
  /** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
  autoUpgradeMinorVersion?: boolean;
  /** Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available. */
  enableAutomaticUpgrade?: boolean;
  /** Json formatted public settings for the extension. */
  settings?: any;
  /** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
  protectedSettings?: any;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: string;
  /** The virtual machine extension instance view. */
  instanceView?: ComputeVirtualMachineExtensionInstanceView;
  /** Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false. */
  suppressFailures?: boolean;
  /** The extensions protected settings that are passed by reference, and consumed from key vault */
  protectedSettingsFromKeyVault?: ComputeKeyVaultSecretReference;
  /** Collection of extension names after which this extension needs to be provisioned. */
  provisionAfterExtensions?: string[];
}

export function computeVirtualMachineScaleSetVMExtensionSerializer(
  item: ComputeVirtualMachineScaleSetVMExtension,
): any {
  return {
    properties: areAllPropsUndefined(item, [
      "forceUpdateTag",
      "publisher",
      "type",
      "typeHandlerVersion",
      "autoUpgradeMinorVersion",
      "enableAutomaticUpgrade",
      "settings",
      "protectedSettings",
      "instanceView",
      "suppressFailures",
      "protectedSettingsFromKeyVault",
      "provisionAfterExtensions",
    ])
      ? undefined
      : _virtualMachineScaleSetVMExtensionPropertiesSerializer(item),
    location: item["location"],
  };
}

export function computeVirtualMachineScaleSetVMExtensionDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetVMExtension {
  return {
    id: item["id"],
    ...(!item["properties"]
      ? item["properties"]
      : _virtualMachineScaleSetVMExtensionPropertiesDeserializer(item["properties"])),
    location: item["location"],
    type: item["type"],
    name: item["name"],
  };
}

/** Describes the properties of a Virtual Machine Extension. */
export interface ComputeVirtualMachineExtensionProperties {
  /** How the extension handler should be forced to update even if the extension configuration has not changed. */
  forceUpdateTag?: string;
  /** The name of the extension handler publisher. */
  publisher?: string;
  /** Specifies the type of the extension; an example is "CustomScriptExtension". */
  type?: string;
  /** Specifies the version of the script handler. */
  typeHandlerVersion?: string;
  /** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
  autoUpgradeMinorVersion?: boolean;
  /** Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available. */
  enableAutomaticUpgrade?: boolean;
  /** Json formatted public settings for the extension. */
  settings?: any;
  /** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
  protectedSettings?: any;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: string;
  /** The virtual machine extension instance view. */
  instanceView?: ComputeVirtualMachineExtensionInstanceView;
  /** Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false. */
  suppressFailures?: boolean;
  /** The extensions protected settings that are passed by reference, and consumed from key vault */
  protectedSettingsFromKeyVault?: ComputeKeyVaultSecretReference;
  /** Collection of extension names after which this extension needs to be provisioned. */
  provisionAfterExtensions?: string[];
}

export function computeVirtualMachineExtensionPropertiesSerializer(
  item: ComputeVirtualMachineExtensionProperties,
): any {
  return {
    forceUpdateTag: item["forceUpdateTag"],
    publisher: item["publisher"],
    type: item["type"],
    typeHandlerVersion: item["typeHandlerVersion"],
    autoUpgradeMinorVersion: item["autoUpgradeMinorVersion"],
    enableAutomaticUpgrade: item["enableAutomaticUpgrade"],
    settings: item["settings"],
    protectedSettings: item["protectedSettings"],
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeVirtualMachineExtensionInstanceViewSerializer(item["instanceView"]),
    suppressFailures: item["suppressFailures"],
    protectedSettingsFromKeyVault: !item["protectedSettingsFromKeyVault"]
      ? item["protectedSettingsFromKeyVault"]
      : computeKeyVaultSecretReferenceSerializer(item["protectedSettingsFromKeyVault"]),
    provisionAfterExtensions: !item["provisionAfterExtensions"]
      ? item["provisionAfterExtensions"]
      : item["provisionAfterExtensions"].map((p: any) => {
          return p;
        }),
  };
}

export function computeVirtualMachineExtensionPropertiesDeserializer(
  item: any,
): ComputeVirtualMachineExtensionProperties {
  return {
    forceUpdateTag: item["forceUpdateTag"],
    publisher: item["publisher"],
    type: item["type"],
    typeHandlerVersion: item["typeHandlerVersion"],
    autoUpgradeMinorVersion: item["autoUpgradeMinorVersion"],
    enableAutomaticUpgrade: item["enableAutomaticUpgrade"],
    settings: item["settings"],
    protectedSettings: item["protectedSettings"],
    provisioningState: item["provisioningState"],
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeVirtualMachineExtensionInstanceViewDeserializer(item["instanceView"]),
    suppressFailures: item["suppressFailures"],
    protectedSettingsFromKeyVault: !item["protectedSettingsFromKeyVault"]
      ? item["protectedSettingsFromKeyVault"]
      : computeKeyVaultSecretReferenceDeserializer(item["protectedSettingsFromKeyVault"]),
    provisionAfterExtensions: !item["provisionAfterExtensions"]
      ? item["provisionAfterExtensions"]
      : item["provisionAfterExtensions"].map((p: any) => {
          return p;
        }),
  };
}

/** The instance view of a virtual machine extension. */
export interface ComputeVirtualMachineExtensionInstanceView {
  /** The virtual machine extension name. */
  name?: string;
  /** Specifies the type of the extension; an example is "CustomScriptExtension". */
  type?: string;
  /** Specifies the version of the script handler. */
  typeHandlerVersion?: string;
  /** The resource status information. */
  substatuses?: ComputeInstanceViewStatus[];
  /** The resource status information. */
  statuses?: ComputeInstanceViewStatus[];
}

export function computeVirtualMachineExtensionInstanceViewSerializer(
  item: ComputeVirtualMachineExtensionInstanceView,
): any {
  return {
    name: item["name"],
    type: item["type"],
    typeHandlerVersion: item["typeHandlerVersion"],
    substatuses: !item["substatuses"]
      ? item["substatuses"]
      : computeInstanceViewStatusArraySerializer(item["substatuses"]),
    statuses: !item["statuses"]
      ? item["statuses"]
      : computeInstanceViewStatusArraySerializer(item["statuses"]),
  };
}

export function computeVirtualMachineExtensionInstanceViewDeserializer(
  item: any,
): ComputeVirtualMachineExtensionInstanceView {
  return {
    name: item["name"],
    type: item["type"],
    typeHandlerVersion: item["typeHandlerVersion"],
    substatuses: !item["substatuses"]
      ? item["substatuses"]
      : computeInstanceViewStatusArrayDeserializer(item["substatuses"]),
    statuses: !item["statuses"]
      ? item["statuses"]
      : computeInstanceViewStatusArrayDeserializer(item["statuses"]),
  };
}

/** Describes a VMSS VM Extension. */
export interface ComputeVirtualMachineScaleSetVMExtensionUpdate extends CommonSubResourceReadOnly {
  /** The name of the extension. */
  readonly name?: string;
  /** Resource type */
  readonly type?: string;
  /** How the extension handler should be forced to update even if the extension configuration has not changed. */
  forceUpdateTag?: string;
  /** The name of the extension handler publisher. */
  publisher?: string;
  /** Specifies the type of the extension; an example is "CustomScriptExtension". */
  typePropertiesType?: string;
  /** Specifies the version of the script handler. */
  typeHandlerVersion?: string;
  /** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
  autoUpgradeMinorVersion?: boolean;
  /** Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available. */
  enableAutomaticUpgrade?: boolean;
  /** Json formatted public settings for the extension. */
  settings?: any;
  /** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
  protectedSettings?: any;
  /** Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false. */
  suppressFailures?: boolean;
  /** The extensions protected settings that are passed by reference, and consumed from key vault */
  protectedSettingsFromKeyVault?: ComputeKeyVaultSecretReference;
}

export function computeVirtualMachineScaleSetVMExtensionUpdateSerializer(
  item: ComputeVirtualMachineScaleSetVMExtensionUpdate,
): any {
  return {
    properties: areAllPropsUndefined(item, [
      "forceUpdateTag",
      "publisher",
      "type",
      "typeHandlerVersion",
      "autoUpgradeMinorVersion",
      "enableAutomaticUpgrade",
      "settings",
      "protectedSettings",
      "suppressFailures",
      "protectedSettingsFromKeyVault",
    ])
      ? undefined
      : _virtualMachineScaleSetVMExtensionUpdatePropertiesSerializer(item),
  };
}

/** Describes the properties of a Virtual Machine Extension. */
export interface ComputeVirtualMachineExtensionUpdateProperties {
  /** How the extension handler should be forced to update even if the extension configuration has not changed. */
  forceUpdateTag?: string;
  /** The name of the extension handler publisher. */
  publisher?: string;
  /** Specifies the type of the extension; an example is "CustomScriptExtension". */
  type?: string;
  /** Specifies the version of the script handler. */
  typeHandlerVersion?: string;
  /** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
  autoUpgradeMinorVersion?: boolean;
  /** Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available. */
  enableAutomaticUpgrade?: boolean;
  /** Json formatted public settings for the extension. */
  settings?: any;
  /** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
  protectedSettings?: any;
  /** Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false. */
  suppressFailures?: boolean;
  /** The extensions protected settings that are passed by reference, and consumed from key vault */
  protectedSettingsFromKeyVault?: ComputeKeyVaultSecretReference;
}

export function computeVirtualMachineExtensionUpdatePropertiesSerializer(
  item: ComputeVirtualMachineExtensionUpdateProperties,
): any {
  return {
    forceUpdateTag: item["forceUpdateTag"],
    publisher: item["publisher"],
    type: item["type"],
    typeHandlerVersion: item["typeHandlerVersion"],
    autoUpgradeMinorVersion: item["autoUpgradeMinorVersion"],
    enableAutomaticUpgrade: item["enableAutomaticUpgrade"],
    settings: item["settings"],
    protectedSettings: item["protectedSettings"],
    suppressFailures: item["suppressFailures"],
    protectedSettingsFromKeyVault: !item["protectedSettingsFromKeyVault"]
      ? item["protectedSettingsFromKeyVault"]
      : computeKeyVaultSecretReferenceSerializer(item["protectedSettingsFromKeyVault"]),
  };
}

/** The List VMSS VM Extension operation response */
export interface ComputeVirtualMachineScaleSetVMExtensionsListResult {
  /** The list of VMSS VM extensions */
  value?: ComputeVirtualMachineScaleSetVMExtension[];
}

export function computeVirtualMachineScaleSetVMExtensionsListResultDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetVMExtensionsListResult {
  return {
    value: !item["value"]
      ? item["value"]
      : computeVirtualMachineScaleSetVMExtensionArrayDeserializer(item["value"]),
  };
}

export function computeVirtualMachineScaleSetVMExtensionArraySerializer(
  result: Array<ComputeVirtualMachineScaleSetVMExtension>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineScaleSetVMExtensionSerializer(item);
  });
}

export function computeVirtualMachineScaleSetVMExtensionArrayDeserializer(
  result: Array<ComputeVirtualMachineScaleSetVMExtension>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineScaleSetVMExtensionDeserializer(item);
  });
}

/** Describes a Virtual Machine. */
export interface ComputeVirtualMachine extends TrackedResource {
  /** Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**. */
  plan?: ComputePlan;
  /** The virtual machine child extension resources. */
  readonly resources?: ComputeVirtualMachineExtension[];
  /** The identity of the virtual machine, if configured. */
  identity?: ComputeVirtualMachineIdentity;
  /** The availability zones. */
  zones?: string[];
  /** The extended location of the Virtual Machine. */
  extendedLocation?: CommonExtendedLocation;
  /** ManagedBy is set to Virtual Machine Scale Set(VMSS) flex ARM resourceID, if the VM is part of the VMSS. This property is used by platform for internal resource group delete optimization. */
  readonly managedBy?: string;
  /** Etag is property returned in Create/Update/Get response of the VM, so that customer can supply it in the header to ensure optimistic updates. */
  readonly etag?: string;
  /** Placement section specifies the user-defined constraints for virtual machine hardware placement. This property cannot be changed once VM is provisioned. Minimum api-version: 2024-11-01. */
  placement?: ComputePlacement;
  /** Specifies the hardware settings for the virtual machine. */
  hardwareProfile?: ComputeHardwareProfile;
  /** Specifies Redeploy, Reboot and ScheduledEventsAdditionalPublishingTargets Scheduled Event related configurations for the virtual machine. */
  scheduledEventsPolicy?: ComputeScheduledEventsPolicy;
  /** Specifies the storage settings for the virtual machine disks. */
  storageProfile?: ComputeStorageProfile;
  /** Specifies additional capabilities enabled or disabled on the virtual machine. */
  additionalCapabilities?: ComputeAdditionalCapabilities;
  /** Specifies the operating system settings used while creating the virtual machine. Some of the settings cannot be changed once VM is provisioned. */
  osProfile?: ComputeOSProfile;
  /** Specifies the network interfaces of the virtual machine. */
  networkProfile?: ComputeNetworkProfile;
  /** Specifies the Security related profile settings for the virtual machine. */
  securityProfile?: ComputeSecurityProfile;
  /** Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15. */
  diagnosticsProfile?: ComputeDiagnosticsProfile;
  /** Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Availability sets overview](https://docs.microsoft.com/azure/virtual-machines/availability-set-overview). For more information on Azure planned maintenance, see [Maintenance and updates for Virtual Machines in Azure](https://docs.microsoft.com/azure/virtual-machines/maintenance-and-updates). Currently, a VM can only be added to availability set at creation time. The availability set to which the VM is being added should be under the same resource group as the availability set resource. An existing VM cannot be added to an availability set. This property cannot exist along with a non-null properties.virtualMachineScaleSet reference. */
  availabilitySet?: CommonSubResource;
  /** Specifies information about the virtual machine scale set that the virtual machine should be assigned to. Virtual machines specified in the same virtual machine scale set are allocated to different nodes to maximize availability. Currently, a VM can only be added to virtual machine scale set at creation time. An existing VM cannot be added to a virtual machine scale set. This property cannot exist along with a non-null properties.availabilitySet reference. Minimum api‐version: 2019‐03‐01. */
  virtualMachineScaleSet?: CommonSubResource;
  /** Specifies information about the proximity placement group that the virtual machine should be assigned to. Minimum api-version: 2018-04-01. */
  proximityPlacementGroup?: CommonSubResource;
  /** Specifies the priority for the virtual machine. Minimum api-version: 2019-03-01 */
  priority?: ComputeVirtualMachinePriorityTypes;
  /** Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. For Azure Spot virtual machines, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2019-03-01. For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview. */
  evictionPolicy?: ComputeVirtualMachineEvictionPolicyTypes;
  /** Specifies the billing related details of a Azure Spot virtual machine. Minimum api-version: 2019-03-01. */
  billingProfile?: ComputeBillingProfile;
  /** Specifies information about the dedicated host that the virtual machine resides in. Minimum api-version: 2018-10-01. */
  host?: CommonSubResource;
  /** Specifies information about the dedicated host group that the virtual machine resides in. **Note:** User cannot specify both host and hostGroup properties. Minimum api-version: 2020-06-01. */
  hostGroup?: CommonSubResource;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: string;
  /** The virtual machine instance view. */
  readonly instanceView?: ComputeVirtualMachineInstanceView;
  /** Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15 */
  licenseType?: string;
  /** Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands. */
  readonly vmId?: string;
  /** Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). Minimum api-version: 2020-06-01. */
  extensionsTimeBudget?: string;
  /** Specifies the scale set logical fault domain into which the Virtual Machine will be created. By default, the Virtual Machine will by automatically assigned to a fault domain that best maintains balance across available fault domains. This is applicable only if the 'virtualMachineScaleSet' property of this Virtual Machine is set. The Virtual Machine Scale Set that is referenced, must have 'platformFaultDomainCount' greater than 1. This property cannot be updated once the Virtual Machine is created. Fault domain assignment can be viewed in the Virtual Machine Instance View. Minimum api‐version: 2020‐12‐01. */
  platformFaultDomain?: number;
  /** Specifies Scheduled Event related configurations. */
  scheduledEventsProfile?: ComputeScheduledEventsProfile;
  /** UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum api-version: 2021-03-01. */
  userData?: string;
  /** Specifies information about the capacity reservation that is used to allocate virtual machine. Minimum api-version: 2021-04-01. */
  capacityReservation?: ComputeCapacityReservationProfile;
  /** Specifies the gallery applications that should be made available to the VM/VMSS. */
  applicationProfile?: ComputeApplicationProfile;
  /** Specifies the time at which the Virtual Machine resource was created. Minimum api-version: 2021-11-01. */
  readonly timeCreated?: Date;
}

export function computeVirtualMachineSerializer(item: ComputeVirtualMachine): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, [
      "hardwareProfile",
      "scheduledEventsPolicy",
      "storageProfile",
      "additionalCapabilities",
      "osProfile",
      "networkProfile",
      "securityProfile",
      "diagnosticsProfile",
      "availabilitySet",
      "virtualMachineScaleSet",
      "proximityPlacementGroup",
      "priority",
      "evictionPolicy",
      "billingProfile",
      "host",
      "hostGroup",
      "licenseType",
      "extensionsTimeBudget",
      "platformFaultDomain",
      "scheduledEventsProfile",
      "userData",
      "capacityReservation",
      "applicationProfile",
    ])
      ? undefined
      : _virtualMachinePropertiesSerializer(item),
    plan: !item["plan"] ? item["plan"] : computePlanSerializer(item["plan"]),
    identity: !item["identity"]
      ? item["identity"]
      : computeVirtualMachineIdentitySerializer(item["identity"]),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
    extendedLocation: !item["extendedLocation"]
      ? item["extendedLocation"]
      : commonExtendedLocationSerializer(item["extendedLocation"]),
    placement: !item["placement"]
      ? item["placement"]
      : computePlacementSerializer(item["placement"]),
  };
}

export function computeVirtualMachineDeserializer(item: any): ComputeVirtualMachine {
  return {
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    ...(!item["properties"]
      ? item["properties"]
      : _virtualMachinePropertiesDeserializer(item["properties"])),
    plan: !item["plan"] ? item["plan"] : computePlanDeserializer(item["plan"]),
    resources: !item["resources"]
      ? item["resources"]
      : computeVirtualMachineExtensionArrayDeserializer(item["resources"]),
    identity: !item["identity"]
      ? item["identity"]
      : computeVirtualMachineIdentityDeserializer(item["identity"]),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
    extendedLocation: !item["extendedLocation"]
      ? item["extendedLocation"]
      : commonExtendedLocationDeserializer(item["extendedLocation"]),
    managedBy: item["managedBy"],
    etag: item["etag"],
    placement: !item["placement"]
      ? item["placement"]
      : computePlacementDeserializer(item["placement"]),
  };
}

/** Describes the properties of a Virtual Machine. */
export interface ComputeVirtualMachineProperties {
  /** Specifies the hardware settings for the virtual machine. */
  hardwareProfile?: ComputeHardwareProfile;
  /** Specifies Redeploy, Reboot and ScheduledEventsAdditionalPublishingTargets Scheduled Event related configurations for the virtual machine. */
  scheduledEventsPolicy?: ComputeScheduledEventsPolicy;
  /** Specifies the storage settings for the virtual machine disks. */
  storageProfile?: ComputeStorageProfile;
  /** Specifies additional capabilities enabled or disabled on the virtual machine. */
  additionalCapabilities?: ComputeAdditionalCapabilities;
  /** Specifies the operating system settings used while creating the virtual machine. Some of the settings cannot be changed once VM is provisioned. */
  osProfile?: ComputeOSProfile;
  /** Specifies the network interfaces of the virtual machine. */
  networkProfile?: ComputeNetworkProfile;
  /** Specifies the Security related profile settings for the virtual machine. */
  securityProfile?: ComputeSecurityProfile;
  /** Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15. */
  diagnosticsProfile?: ComputeDiagnosticsProfile;
  /** Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Availability sets overview](https://docs.microsoft.com/azure/virtual-machines/availability-set-overview). For more information on Azure planned maintenance, see [Maintenance and updates for Virtual Machines in Azure](https://docs.microsoft.com/azure/virtual-machines/maintenance-and-updates). Currently, a VM can only be added to availability set at creation time. The availability set to which the VM is being added should be under the same resource group as the availability set resource. An existing VM cannot be added to an availability set. This property cannot exist along with a non-null properties.virtualMachineScaleSet reference. */
  availabilitySet?: CommonSubResource;
  /** Specifies information about the virtual machine scale set that the virtual machine should be assigned to. Virtual machines specified in the same virtual machine scale set are allocated to different nodes to maximize availability. Currently, a VM can only be added to virtual machine scale set at creation time. An existing VM cannot be added to a virtual machine scale set. This property cannot exist along with a non-null properties.availabilitySet reference. Minimum api‐version: 2019‐03‐01. */
  virtualMachineScaleSet?: CommonSubResource;
  /** Specifies information about the proximity placement group that the virtual machine should be assigned to. Minimum api-version: 2018-04-01. */
  proximityPlacementGroup?: CommonSubResource;
  /** Specifies the priority for the virtual machine. Minimum api-version: 2019-03-01 */
  priority?: ComputeVirtualMachinePriorityTypes;
  /** Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. For Azure Spot virtual machines, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2019-03-01. For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview. */
  evictionPolicy?: ComputeVirtualMachineEvictionPolicyTypes;
  /** Specifies the billing related details of a Azure Spot virtual machine. Minimum api-version: 2019-03-01. */
  billingProfile?: ComputeBillingProfile;
  /** Specifies information about the dedicated host that the virtual machine resides in. Minimum api-version: 2018-10-01. */
  host?: CommonSubResource;
  /** Specifies information about the dedicated host group that the virtual machine resides in. **Note:** User cannot specify both host and hostGroup properties. Minimum api-version: 2020-06-01. */
  hostGroup?: CommonSubResource;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: string;
  /** The virtual machine instance view. */
  readonly instanceView?: ComputeVirtualMachineInstanceView;
  /** Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15 */
  licenseType?: string;
  /** Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands. */
  readonly vmId?: string;
  /** Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). Minimum api-version: 2020-06-01. */
  extensionsTimeBudget?: string;
  /** Specifies the scale set logical fault domain into which the Virtual Machine will be created. By default, the Virtual Machine will by automatically assigned to a fault domain that best maintains balance across available fault domains. This is applicable only if the 'virtualMachineScaleSet' property of this Virtual Machine is set. The Virtual Machine Scale Set that is referenced, must have 'platformFaultDomainCount' greater than 1. This property cannot be updated once the Virtual Machine is created. Fault domain assignment can be viewed in the Virtual Machine Instance View. Minimum api‐version: 2020‐12‐01. */
  platformFaultDomain?: number;
  /** Specifies Scheduled Event related configurations. */
  scheduledEventsProfile?: ComputeScheduledEventsProfile;
  /** UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum api-version: 2021-03-01. */
  userData?: string;
  /** Specifies information about the capacity reservation that is used to allocate virtual machine. Minimum api-version: 2021-04-01. */
  capacityReservation?: ComputeCapacityReservationProfile;
  /** Specifies the gallery applications that should be made available to the VM/VMSS. */
  applicationProfile?: ComputeApplicationProfile;
  /** Specifies the time at which the Virtual Machine resource was created. Minimum api-version: 2021-11-01. */
  readonly timeCreated?: Date;
}

export function computeVirtualMachinePropertiesSerializer(
  item: ComputeVirtualMachineProperties,
): any {
  return {
    hardwareProfile: !item["hardwareProfile"]
      ? item["hardwareProfile"]
      : computeHardwareProfileSerializer(item["hardwareProfile"]),
    scheduledEventsPolicy: !item["scheduledEventsPolicy"]
      ? item["scheduledEventsPolicy"]
      : computeScheduledEventsPolicySerializer(item["scheduledEventsPolicy"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeStorageProfileSerializer(item["storageProfile"]),
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeAdditionalCapabilitiesSerializer(item["additionalCapabilities"]),
    osProfile: !item["osProfile"]
      ? item["osProfile"]
      : computeOSProfileSerializer(item["osProfile"]),
    networkProfile: !item["networkProfile"]
      ? item["networkProfile"]
      : computeNetworkProfileSerializer(item["networkProfile"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeSecurityProfileSerializer(item["securityProfile"]),
    diagnosticsProfile: !item["diagnosticsProfile"]
      ? item["diagnosticsProfile"]
      : computeDiagnosticsProfileSerializer(item["diagnosticsProfile"]),
    availabilitySet: !item["availabilitySet"]
      ? item["availabilitySet"]
      : commonSubResourceSerializer(item["availabilitySet"]),
    virtualMachineScaleSet: !item["virtualMachineScaleSet"]
      ? item["virtualMachineScaleSet"]
      : commonSubResourceSerializer(item["virtualMachineScaleSet"]),
    proximityPlacementGroup: !item["proximityPlacementGroup"]
      ? item["proximityPlacementGroup"]
      : commonSubResourceSerializer(item["proximityPlacementGroup"]),
    priority: item["priority"],
    evictionPolicy: item["evictionPolicy"],
    billingProfile: !item["billingProfile"]
      ? item["billingProfile"]
      : computeBillingProfileSerializer(item["billingProfile"]),
    host: !item["host"] ? item["host"] : commonSubResourceSerializer(item["host"]),
    hostGroup: !item["hostGroup"]
      ? item["hostGroup"]
      : commonSubResourceSerializer(item["hostGroup"]),
    licenseType: item["licenseType"],
    extensionsTimeBudget: item["extensionsTimeBudget"],
    platformFaultDomain: item["platformFaultDomain"],
    scheduledEventsProfile: !item["scheduledEventsProfile"]
      ? item["scheduledEventsProfile"]
      : computeScheduledEventsProfileSerializer(item["scheduledEventsProfile"]),
    userData: item["userData"],
    capacityReservation: !item["capacityReservation"]
      ? item["capacityReservation"]
      : computeCapacityReservationProfileSerializer(item["capacityReservation"]),
    applicationProfile: !item["applicationProfile"]
      ? item["applicationProfile"]
      : computeApplicationProfileSerializer(item["applicationProfile"]),
  };
}

export function computeVirtualMachinePropertiesDeserializer(
  item: any,
): ComputeVirtualMachineProperties {
  return {
    hardwareProfile: !item["hardwareProfile"]
      ? item["hardwareProfile"]
      : computeHardwareProfileDeserializer(item["hardwareProfile"]),
    scheduledEventsPolicy: !item["scheduledEventsPolicy"]
      ? item["scheduledEventsPolicy"]
      : computeScheduledEventsPolicyDeserializer(item["scheduledEventsPolicy"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeStorageProfileDeserializer(item["storageProfile"]),
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeAdditionalCapabilitiesDeserializer(item["additionalCapabilities"]),
    osProfile: !item["osProfile"]
      ? item["osProfile"]
      : computeOSProfileDeserializer(item["osProfile"]),
    networkProfile: !item["networkProfile"]
      ? item["networkProfile"]
      : computeNetworkProfileDeserializer(item["networkProfile"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeSecurityProfileDeserializer(item["securityProfile"]),
    diagnosticsProfile: !item["diagnosticsProfile"]
      ? item["diagnosticsProfile"]
      : computeDiagnosticsProfileDeserializer(item["diagnosticsProfile"]),
    availabilitySet: !item["availabilitySet"]
      ? item["availabilitySet"]
      : commonSubResourceDeserializer(item["availabilitySet"]),
    virtualMachineScaleSet: !item["virtualMachineScaleSet"]
      ? item["virtualMachineScaleSet"]
      : commonSubResourceDeserializer(item["virtualMachineScaleSet"]),
    proximityPlacementGroup: !item["proximityPlacementGroup"]
      ? item["proximityPlacementGroup"]
      : commonSubResourceDeserializer(item["proximityPlacementGroup"]),
    priority: item["priority"],
    evictionPolicy: item["evictionPolicy"],
    billingProfile: !item["billingProfile"]
      ? item["billingProfile"]
      : computeBillingProfileDeserializer(item["billingProfile"]),
    host: !item["host"] ? item["host"] : commonSubResourceDeserializer(item["host"]),
    hostGroup: !item["hostGroup"]
      ? item["hostGroup"]
      : commonSubResourceDeserializer(item["hostGroup"]),
    provisioningState: item["provisioningState"],
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeVirtualMachineInstanceViewDeserializer(item["instanceView"]),
    licenseType: item["licenseType"],
    vmId: item["vmId"],
    extensionsTimeBudget: item["extensionsTimeBudget"],
    platformFaultDomain: item["platformFaultDomain"],
    scheduledEventsProfile: !item["scheduledEventsProfile"]
      ? item["scheduledEventsProfile"]
      : computeScheduledEventsProfileDeserializer(item["scheduledEventsProfile"]),
    userData: item["userData"],
    capacityReservation: !item["capacityReservation"]
      ? item["capacityReservation"]
      : computeCapacityReservationProfileDeserializer(item["capacityReservation"]),
    applicationProfile: !item["applicationProfile"]
      ? item["applicationProfile"]
      : computeApplicationProfileDeserializer(item["applicationProfile"]),
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
  };
}

/** Specifies the hardware settings for the virtual machine. */
export interface ComputeHardwareProfile {
  /** Specifies the size of the virtual machine. The enum data type is currently deprecated and will be removed by December 23rd 2023. The recommended way to get the list of available sizes is using these APIs: [List all available virtual machine sizes in an availability set](https://docs.microsoft.com/rest/api/compute/availabilitysets/listavailablesizes), [List all available virtual machine sizes in a region]( https://docs.microsoft.com/rest/api/compute/resourceskus/list), [List all available virtual machine sizes for resizing](https://docs.microsoft.com/rest/api/compute/virtualmachines/listavailablesizes). For more information about virtual machine sizes, see [Sizes for virtual machines](https://docs.microsoft.com/azure/virtual-machines/sizes). The available VM sizes depend on region and availability set. */
  vmSize?: ComputeVirtualMachineSizeTypes;
  /** Specifies the properties for customizing the size of the virtual machine. Minimum api-version: 2021-07-01. This feature is still in preview mode and is not supported for VirtualMachineScaleSet. Please follow the instructions in [VM Customization](https://aka.ms/vmcustomization) for more details. */
  vmSizeProperties?: ComputeVMSizeProperties;
}

export function computeHardwareProfileSerializer(item: ComputeHardwareProfile): any {
  return {
    vmSize: item["vmSize"],
    vmSizeProperties: !item["vmSizeProperties"]
      ? item["vmSizeProperties"]
      : computeVMSizePropertiesSerializer(item["vmSizeProperties"]),
  };
}

export function computeHardwareProfileDeserializer(item: any): ComputeHardwareProfile {
  return {
    vmSize: item["vmSize"],
    vmSizeProperties: !item["vmSizeProperties"]
      ? item["vmSizeProperties"]
      : computeVMSizePropertiesDeserializer(item["vmSizeProperties"]),
  };
}

/** Specifies the size of the virtual machine. The enum data type is currently deprecated and will be removed by December 23rd 2023. The recommended way to get the list of available sizes is using these APIs: [List all available virtual machine sizes in an availability set](https://docs.microsoft.com/rest/api/compute/availabilitysets/listavailablesizes), [List all available virtual machine sizes in a region]( https://docs.microsoft.com/rest/api/compute/resourceskus/list), [List all available virtual machine sizes for resizing](https://docs.microsoft.com/rest/api/compute/virtualmachines/listavailablesizes). For more information about virtual machine sizes, see [Sizes for virtual machines](https://docs.microsoft.com/azure/virtual-machines/sizes). The available VM sizes depend on region and availability set. */
export enum KnownComputeVirtualMachineSizeTypes {
  /** Basic_A0 */
  BasicA0 = "Basic_A0",
  /** Basic_A1 */
  BasicA1 = "Basic_A1",
  /** Basic_A2 */
  BasicA2 = "Basic_A2",
  /** Basic_A3 */
  BasicA3 = "Basic_A3",
  /** Basic_A4 */
  BasicA4 = "Basic_A4",
  /** Standard_A0 */
  StandardA0 = "Standard_A0",
  /** Standard_A1 */
  StandardA1 = "Standard_A1",
  /** Standard_A2 */
  StandardA2 = "Standard_A2",
  /** Standard_A3 */
  StandardA3 = "Standard_A3",
  /** Standard_A4 */
  StandardA4 = "Standard_A4",
  /** Standard_A5 */
  StandardA5 = "Standard_A5",
  /** Standard_A6 */
  StandardA6 = "Standard_A6",
  /** Standard_A7 */
  StandardA7 = "Standard_A7",
  /** Standard_A8 */
  StandardA8 = "Standard_A8",
  /** Standard_A9 */
  StandardA9 = "Standard_A9",
  /** Standard_A10 */
  StandardA10 = "Standard_A10",
  /** Standard_A11 */
  StandardA11 = "Standard_A11",
  /** Standard_A1_v2 */
  StandardA1V2 = "Standard_A1_v2",
  /** Standard_A2_v2 */
  StandardA2V2 = "Standard_A2_v2",
  /** Standard_A4_v2 */
  StandardA4V2 = "Standard_A4_v2",
  /** Standard_A8_v2 */
  StandardA8V2 = "Standard_A8_v2",
  /** Standard_A2m_v2 */
  StandardA2MV2 = "Standard_A2m_v2",
  /** Standard_A4m_v2 */
  StandardA4MV2 = "Standard_A4m_v2",
  /** Standard_A8m_v2 */
  StandardA8MV2 = "Standard_A8m_v2",
  /** Standard_B1s */
  StandardB1S = "Standard_B1s",
  /** Standard_B1ms */
  StandardB1Ms = "Standard_B1ms",
  /** Standard_B2s */
  StandardB2S = "Standard_B2s",
  /** Standard_B2ms */
  StandardB2Ms = "Standard_B2ms",
  /** Standard_B4ms */
  StandardB4Ms = "Standard_B4ms",
  /** Standard_B8ms */
  StandardB8Ms = "Standard_B8ms",
  /** Standard_D1 */
  StandardD1 = "Standard_D1",
  /** Standard_D2 */
  StandardD2 = "Standard_D2",
  /** Standard_D3 */
  StandardD3 = "Standard_D3",
  /** Standard_D4 */
  StandardD4 = "Standard_D4",
  /** Standard_D11 */
  StandardD11 = "Standard_D11",
  /** Standard_D12 */
  StandardD12 = "Standard_D12",
  /** Standard_D13 */
  StandardD13 = "Standard_D13",
  /** Standard_D14 */
  StandardD14 = "Standard_D14",
  /** Standard_D1_v2 */
  StandardD1V2 = "Standard_D1_v2",
  /** Standard_D2_v2 */
  StandardD2V2 = "Standard_D2_v2",
  /** Standard_D3_v2 */
  StandardD3V2 = "Standard_D3_v2",
  /** Standard_D4_v2 */
  StandardD4V2 = "Standard_D4_v2",
  /** Standard_D5_v2 */
  StandardD5V2 = "Standard_D5_v2",
  /** Standard_D2_v3 */
  StandardD2V3 = "Standard_D2_v3",
  /** Standard_D4_v3 */
  StandardD4V3 = "Standard_D4_v3",
  /** Standard_D8_v3 */
  StandardD8V3 = "Standard_D8_v3",
  /** Standard_D16_v3 */
  StandardD16V3 = "Standard_D16_v3",
  /** Standard_D32_v3 */
  StandardD32V3 = "Standard_D32_v3",
  /** Standard_D64_v3 */
  StandardD64V3 = "Standard_D64_v3",
  /** Standard_D2s_v3 */
  StandardD2SV3 = "Standard_D2s_v3",
  /** Standard_D4s_v3 */
  StandardD4SV3 = "Standard_D4s_v3",
  /** Standard_D8s_v3 */
  StandardD8SV3 = "Standard_D8s_v3",
  /** Standard_D16s_v3 */
  StandardD16SV3 = "Standard_D16s_v3",
  /** Standard_D32s_v3 */
  StandardD32SV3 = "Standard_D32s_v3",
  /** Standard_D64s_v3 */
  StandardD64SV3 = "Standard_D64s_v3",
  /** Standard_D11_v2 */
  StandardD11V2 = "Standard_D11_v2",
  /** Standard_D12_v2 */
  StandardD12V2 = "Standard_D12_v2",
  /** Standard_D13_v2 */
  StandardD13V2 = "Standard_D13_v2",
  /** Standard_D14_v2 */
  StandardD14V2 = "Standard_D14_v2",
  /** Standard_D15_v2 */
  StandardD15V2 = "Standard_D15_v2",
  /** Standard_DS1 */
  StandardDS1 = "Standard_DS1",
  /** Standard_DS2 */
  StandardDS2 = "Standard_DS2",
  /** Standard_DS3 */
  StandardDS3 = "Standard_DS3",
  /** Standard_DS4 */
  StandardDS4 = "Standard_DS4",
  /** Standard_DS11 */
  StandardDS11 = "Standard_DS11",
  /** Standard_DS12 */
  StandardDS12 = "Standard_DS12",
  /** Standard_DS13 */
  StandardDS13 = "Standard_DS13",
  /** Standard_DS14 */
  StandardDS14 = "Standard_DS14",
  /** Standard_DS1_v2 */
  StandardDS1V2 = "Standard_DS1_v2",
  /** Standard_DS2_v2 */
  StandardDS2V2 = "Standard_DS2_v2",
  /** Standard_DS3_v2 */
  StandardDS3V2 = "Standard_DS3_v2",
  /** Standard_DS4_v2 */
  StandardDS4V2 = "Standard_DS4_v2",
  /** Standard_DS5_v2 */
  StandardDS5V2 = "Standard_DS5_v2",
  /** Standard_DS11_v2 */
  StandardDS11V2 = "Standard_DS11_v2",
  /** Standard_DS12_v2 */
  StandardDS12V2 = "Standard_DS12_v2",
  /** Standard_DS13_v2 */
  StandardDS13V2 = "Standard_DS13_v2",
  /** Standard_DS14_v2 */
  StandardDS14V2 = "Standard_DS14_v2",
  /** Standard_DS15_v2 */
  StandardDS15V2 = "Standard_DS15_v2",
  /** Standard_DS13-4_v2 */
  StandardDS134V2 = "Standard_DS13-4_v2",
  /** Standard_DS13-2_v2 */
  StandardDS132V2 = "Standard_DS13-2_v2",
  /** Standard_DS14-8_v2 */
  StandardDS148V2 = "Standard_DS14-8_v2",
  /** Standard_DS14-4_v2 */
  StandardDS144V2 = "Standard_DS14-4_v2",
  /** Standard_E2_v3 */
  StandardE2V3 = "Standard_E2_v3",
  /** Standard_E4_v3 */
  StandardE4V3 = "Standard_E4_v3",
  /** Standard_E8_v3 */
  StandardE8V3 = "Standard_E8_v3",
  /** Standard_E16_v3 */
  StandardE16V3 = "Standard_E16_v3",
  /** Standard_E32_v3 */
  StandardE32V3 = "Standard_E32_v3",
  /** Standard_E64_v3 */
  StandardE64V3 = "Standard_E64_v3",
  /** Standard_E2s_v3 */
  StandardE2SV3 = "Standard_E2s_v3",
  /** Standard_E4s_v3 */
  StandardE4SV3 = "Standard_E4s_v3",
  /** Standard_E8s_v3 */
  StandardE8SV3 = "Standard_E8s_v3",
  /** Standard_E16s_v3 */
  StandardE16SV3 = "Standard_E16s_v3",
  /** Standard_E32s_v3 */
  StandardE32SV3 = "Standard_E32s_v3",
  /** Standard_E64s_v3 */
  StandardE64SV3 = "Standard_E64s_v3",
  /** Standard_E32-16_v3 */
  StandardE3216V3 = "Standard_E32-16_v3",
  /** Standard_E32-8s_v3 */
  StandardE328SV3 = "Standard_E32-8s_v3",
  /** Standard_E64-32s_v3 */
  StandardE6432SV3 = "Standard_E64-32s_v3",
  /** Standard_E64-16s_v3 */
  StandardE6416SV3 = "Standard_E64-16s_v3",
  /** Standard_F1 */
  StandardF1 = "Standard_F1",
  /** Standard_F2 */
  StandardF2 = "Standard_F2",
  /** Standard_F4 */
  StandardF4 = "Standard_F4",
  /** Standard_F8 */
  StandardF8 = "Standard_F8",
  /** Standard_F16 */
  StandardF16 = "Standard_F16",
  /** Standard_F1s */
  StandardF1S = "Standard_F1s",
  /** Standard_F2s */
  StandardF2S = "Standard_F2s",
  /** Standard_F4s */
  StandardF4S = "Standard_F4s",
  /** Standard_F8s */
  StandardF8S = "Standard_F8s",
  /** Standard_F16s */
  StandardF16S = "Standard_F16s",
  /** Standard_F2s_v2 */
  StandardF2SV2 = "Standard_F2s_v2",
  /** Standard_F4s_v2 */
  StandardF4SV2 = "Standard_F4s_v2",
  /** Standard_F8s_v2 */
  StandardF8SV2 = "Standard_F8s_v2",
  /** Standard_F16s_v2 */
  StandardF16SV2 = "Standard_F16s_v2",
  /** Standard_F32s_v2 */
  StandardF32SV2 = "Standard_F32s_v2",
  /** Standard_F64s_v2 */
  StandardF64SV2 = "Standard_F64s_v2",
  /** Standard_F72s_v2 */
  StandardF72SV2 = "Standard_F72s_v2",
  /** Standard_G1 */
  StandardG1 = "Standard_G1",
  /** Standard_G2 */
  StandardG2 = "Standard_G2",
  /** Standard_G3 */
  StandardG3 = "Standard_G3",
  /** Standard_G4 */
  StandardG4 = "Standard_G4",
  /** Standard_G5 */
  StandardG5 = "Standard_G5",
  /** Standard_GS1 */
  StandardGS1 = "Standard_GS1",
  /** Standard_GS2 */
  StandardGS2 = "Standard_GS2",
  /** Standard_GS3 */
  StandardGS3 = "Standard_GS3",
  /** Standard_GS4 */
  StandardGS4 = "Standard_GS4",
  /** Standard_GS5 */
  StandardGS5 = "Standard_GS5",
  /** Standard_GS4-8 */
  StandardGS48 = "Standard_GS4-8",
  /** Standard_GS4-4 */
  StandardGS44 = "Standard_GS4-4",
  /** Standard_GS5-16 */
  StandardGS516 = "Standard_GS5-16",
  /** Standard_GS5-8 */
  StandardGS58 = "Standard_GS5-8",
  /** Standard_H8 */
  StandardH8 = "Standard_H8",
  /** Standard_H16 */
  StandardH16 = "Standard_H16",
  /** Standard_H8m */
  StandardH8M = "Standard_H8m",
  /** Standard_H16m */
  StandardH16M = "Standard_H16m",
  /** Standard_H16r */
  StandardH16R = "Standard_H16r",
  /** Standard_H16mr */
  StandardH16Mr = "Standard_H16mr",
  /** Standard_L4s */
  StandardL4S = "Standard_L4s",
  /** Standard_L8s */
  StandardL8S = "Standard_L8s",
  /** Standard_L16s */
  StandardL16S = "Standard_L16s",
  /** Standard_L32s */
  StandardL32S = "Standard_L32s",
  /** Standard_M64s */
  StandardM64S = "Standard_M64s",
  /** Standard_M64ms */
  StandardM64Ms = "Standard_M64ms",
  /** Standard_M128s */
  StandardM128S = "Standard_M128s",
  /** Standard_M128ms */
  StandardM128Ms = "Standard_M128ms",
  /** Standard_M64-32ms */
  StandardM6432Ms = "Standard_M64-32ms",
  /** Standard_M64-16ms */
  StandardM6416Ms = "Standard_M64-16ms",
  /** Standard_M128-64ms */
  StandardM12864Ms = "Standard_M128-64ms",
  /** Standard_M128-32ms */
  StandardM12832Ms = "Standard_M128-32ms",
  /** Standard_NC6 */
  StandardNC6 = "Standard_NC6",
  /** Standard_NC12 */
  StandardNC12 = "Standard_NC12",
  /** Standard_NC24 */
  StandardNC24 = "Standard_NC24",
  /** Standard_NC24r */
  StandardNC24R = "Standard_NC24r",
  /** Standard_NC6s_v2 */
  StandardNC6SV2 = "Standard_NC6s_v2",
  /** Standard_NC12s_v2 */
  StandardNC12SV2 = "Standard_NC12s_v2",
  /** Standard_NC24s_v2 */
  StandardNC24SV2 = "Standard_NC24s_v2",
  /** Standard_NC24rs_v2 */
  StandardNC24RsV2 = "Standard_NC24rs_v2",
  /** Standard_NC6s_v3 */
  StandardNC6SV3 = "Standard_NC6s_v3",
  /** Standard_NC12s_v3 */
  StandardNC12SV3 = "Standard_NC12s_v3",
  /** Standard_NC24s_v3 */
  StandardNC24SV3 = "Standard_NC24s_v3",
  /** Standard_NC24rs_v3 */
  StandardNC24RsV3 = "Standard_NC24rs_v3",
  /** Standard_ND6s */
  StandardND6S = "Standard_ND6s",
  /** Standard_ND12s */
  StandardND12S = "Standard_ND12s",
  /** Standard_ND24s */
  StandardND24S = "Standard_ND24s",
  /** Standard_ND24rs */
  StandardND24Rs = "Standard_ND24rs",
  /** Standard_NV6 */
  StandardNV6 = "Standard_NV6",
  /** Standard_NV12 */
  StandardNV12 = "Standard_NV12",
  /** Standard_NV24 */
  StandardNV24 = "Standard_NV24",
}

/**
 * Specifies the size of the virtual machine. The enum data type is currently deprecated and will be removed by December 23rd 2023. The recommended way to get the list of available sizes is using these APIs: [List all available virtual machine sizes in an availability set](https://docs.microsoft.com/rest/api/compute/availabilitysets/listavailablesizes), [List all available virtual machine sizes in a region]( https://docs.microsoft.com/rest/api/compute/resourceskus/list), [List all available virtual machine sizes for resizing](https://docs.microsoft.com/rest/api/compute/virtualmachines/listavailablesizes). For more information about virtual machine sizes, see [Sizes for virtual machines](https://docs.microsoft.com/azure/virtual-machines/sizes). The available VM sizes depend on region and availability set. \
 * {@link KnownComputeVirtualMachineSizeTypes} can be used interchangeably with ComputeVirtualMachineSizeTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic_A0** \
 * **Basic_A1** \
 * **Basic_A2** \
 * **Basic_A3** \
 * **Basic_A4** \
 * **Standard_A0** \
 * **Standard_A1** \
 * **Standard_A2** \
 * **Standard_A3** \
 * **Standard_A4** \
 * **Standard_A5** \
 * **Standard_A6** \
 * **Standard_A7** \
 * **Standard_A8** \
 * **Standard_A9** \
 * **Standard_A10** \
 * **Standard_A11** \
 * **Standard_A1_v2** \
 * **Standard_A2_v2** \
 * **Standard_A4_v2** \
 * **Standard_A8_v2** \
 * **Standard_A2m_v2** \
 * **Standard_A4m_v2** \
 * **Standard_A8m_v2** \
 * **Standard_B1s** \
 * **Standard_B1ms** \
 * **Standard_B2s** \
 * **Standard_B2ms** \
 * **Standard_B4ms** \
 * **Standard_B8ms** \
 * **Standard_D1** \
 * **Standard_D2** \
 * **Standard_D3** \
 * **Standard_D4** \
 * **Standard_D11** \
 * **Standard_D12** \
 * **Standard_D13** \
 * **Standard_D14** \
 * **Standard_D1_v2** \
 * **Standard_D2_v2** \
 * **Standard_D3_v2** \
 * **Standard_D4_v2** \
 * **Standard_D5_v2** \
 * **Standard_D2_v3** \
 * **Standard_D4_v3** \
 * **Standard_D8_v3** \
 * **Standard_D16_v3** \
 * **Standard_D32_v3** \
 * **Standard_D64_v3** \
 * **Standard_D2s_v3** \
 * **Standard_D4s_v3** \
 * **Standard_D8s_v3** \
 * **Standard_D16s_v3** \
 * **Standard_D32s_v3** \
 * **Standard_D64s_v3** \
 * **Standard_D11_v2** \
 * **Standard_D12_v2** \
 * **Standard_D13_v2** \
 * **Standard_D14_v2** \
 * **Standard_D15_v2** \
 * **Standard_DS1** \
 * **Standard_DS2** \
 * **Standard_DS3** \
 * **Standard_DS4** \
 * **Standard_DS11** \
 * **Standard_DS12** \
 * **Standard_DS13** \
 * **Standard_DS14** \
 * **Standard_DS1_v2** \
 * **Standard_DS2_v2** \
 * **Standard_DS3_v2** \
 * **Standard_DS4_v2** \
 * **Standard_DS5_v2** \
 * **Standard_DS11_v2** \
 * **Standard_DS12_v2** \
 * **Standard_DS13_v2** \
 * **Standard_DS14_v2** \
 * **Standard_DS15_v2** \
 * **Standard_DS13-4_v2** \
 * **Standard_DS13-2_v2** \
 * **Standard_DS14-8_v2** \
 * **Standard_DS14-4_v2** \
 * **Standard_E2_v3** \
 * **Standard_E4_v3** \
 * **Standard_E8_v3** \
 * **Standard_E16_v3** \
 * **Standard_E32_v3** \
 * **Standard_E64_v3** \
 * **Standard_E2s_v3** \
 * **Standard_E4s_v3** \
 * **Standard_E8s_v3** \
 * **Standard_E16s_v3** \
 * **Standard_E32s_v3** \
 * **Standard_E64s_v3** \
 * **Standard_E32-16_v3** \
 * **Standard_E32-8s_v3** \
 * **Standard_E64-32s_v3** \
 * **Standard_E64-16s_v3** \
 * **Standard_F1** \
 * **Standard_F2** \
 * **Standard_F4** \
 * **Standard_F8** \
 * **Standard_F16** \
 * **Standard_F1s** \
 * **Standard_F2s** \
 * **Standard_F4s** \
 * **Standard_F8s** \
 * **Standard_F16s** \
 * **Standard_F2s_v2** \
 * **Standard_F4s_v2** \
 * **Standard_F8s_v2** \
 * **Standard_F16s_v2** \
 * **Standard_F32s_v2** \
 * **Standard_F64s_v2** \
 * **Standard_F72s_v2** \
 * **Standard_G1** \
 * **Standard_G2** \
 * **Standard_G3** \
 * **Standard_G4** \
 * **Standard_G5** \
 * **Standard_GS1** \
 * **Standard_GS2** \
 * **Standard_GS3** \
 * **Standard_GS4** \
 * **Standard_GS5** \
 * **Standard_GS4-8** \
 * **Standard_GS4-4** \
 * **Standard_GS5-16** \
 * **Standard_GS5-8** \
 * **Standard_H8** \
 * **Standard_H16** \
 * **Standard_H8m** \
 * **Standard_H16m** \
 * **Standard_H16r** \
 * **Standard_H16mr** \
 * **Standard_L4s** \
 * **Standard_L8s** \
 * **Standard_L16s** \
 * **Standard_L32s** \
 * **Standard_M64s** \
 * **Standard_M64ms** \
 * **Standard_M128s** \
 * **Standard_M128ms** \
 * **Standard_M64-32ms** \
 * **Standard_M64-16ms** \
 * **Standard_M128-64ms** \
 * **Standard_M128-32ms** \
 * **Standard_NC6** \
 * **Standard_NC12** \
 * **Standard_NC24** \
 * **Standard_NC24r** \
 * **Standard_NC6s_v2** \
 * **Standard_NC12s_v2** \
 * **Standard_NC24s_v2** \
 * **Standard_NC24rs_v2** \
 * **Standard_NC6s_v3** \
 * **Standard_NC12s_v3** \
 * **Standard_NC24s_v3** \
 * **Standard_NC24rs_v3** \
 * **Standard_ND6s** \
 * **Standard_ND12s** \
 * **Standard_ND24s** \
 * **Standard_ND24rs** \
 * **Standard_NV6** \
 * **Standard_NV12** \
 * **Standard_NV24**
 */
export type ComputeVirtualMachineSizeTypes = string;

/** Specifies the storage settings for the virtual machine disks. */
export interface ComputeStorageProfile {
  /** Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. */
  imageReference?: ComputeImageReference;
  /** Specifies information about the operating system disk used by the virtual machine. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview). */
  osDisk?: ComputeOSDisk;
  /** Specifies the parameters that are used to add a data disk to a virtual machine. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview). */
  dataDisks?: ComputeDataDisk[];
  /** Specifies the disk controller type configured for the VM. **Note:** This property will be set to the default disk controller type if not specified provided virtual machine is being created with 'hyperVGeneration' set to V2 based on the capabilities of the operating system disk and VM size from the the specified minimum api version. You need to deallocate the VM before updating its disk controller type unless you are updating the VM size in the VM configuration which implicitly deallocates and reallocates the VM. Minimum api-version: 2022-08-01. */
  diskControllerType?: ComputeDiskControllerTypes;
  /** Specifies whether the regional disks should be aligned/moved to the VM zone. This is applicable only for VMs with placement property set. Please note that this change is irreversible. Minimum api-version: 2024-11-01. */
  alignRegionalDisksToVMZone?: boolean;
}

export function computeStorageProfileSerializer(item: ComputeStorageProfile): any {
  return {
    imageReference: !item["imageReference"]
      ? item["imageReference"]
      : computeImageReferenceSerializer(item["imageReference"]),
    osDisk: !item["osDisk"] ? item["osDisk"] : computeOSDiskSerializer(item["osDisk"]),
    dataDisks: !item["dataDisks"]
      ? item["dataDisks"]
      : computeDataDiskArraySerializer(item["dataDisks"]),
    diskControllerType: item["diskControllerType"],
    alignRegionalDisksToVMZone: item["alignRegionalDisksToVMZone"],
  };
}

export function computeStorageProfileDeserializer(item: any): ComputeStorageProfile {
  return {
    imageReference: !item["imageReference"]
      ? item["imageReference"]
      : computeImageReferenceDeserializer(item["imageReference"]),
    osDisk: !item["osDisk"] ? item["osDisk"] : computeOSDiskDeserializer(item["osDisk"]),
    dataDisks: !item["dataDisks"]
      ? item["dataDisks"]
      : computeDataDiskArrayDeserializer(item["dataDisks"]),
    diskControllerType: item["diskControllerType"],
    alignRegionalDisksToVMZone: item["alignRegionalDisksToVMZone"],
  };
}

/** Specifies information about the operating system disk used by the virtual machine. For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview). */
export interface ComputeOSDisk {
  /** This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are: **Windows,** **Linux.** */
  osType?: CommonOperatingSystemTypes;
  /** Specifies the encryption settings for the OS Disk. Minimum api-version: 2015-06-15. */
  encryptionSettings?: ComputeDiskEncryptionSettings;
  /** The disk name. */
  name?: string;
  /** The virtual hard disk. */
  vhd?: ComputeVirtualHardDisk;
  /** The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist. */
  image?: ComputeVirtualHardDisk;
  /** Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The defaulting behavior is: **None for Standard storage. ReadOnly for Premium storage.** */
  caching?: ComputeCachingTypes;
  /** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
  writeAcceleratorEnabled?: boolean;
  /** Specifies the ephemeral Disk Settings for the operating system disk used by the virtual machine. */
  diffDiskSettings?: ComputeDiffDiskSettings;
  /** Specifies how the virtual machine disk should be created. Possible values are **Attach:** This value is used when you are using a specialized disk to create the virtual machine. **FromImage:** This value is used when you are using an image to create the virtual machine. If you are using a platform image, you should also use the imageReference element described above. If you are using a marketplace image, you should also use the plan element previously described. */
  createOption: ComputeDiskCreateOptionTypes;
  /** Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023. */
  diskSizeGB?: number;
  /** The managed disk parameters. */
  managedDisk?: ComputeManagedDiskParameters;
  /** Specifies whether OS Disk should be deleted or detached upon VM deletion. Possible values are: **Delete.** If this value is used, the OS disk is deleted when VM is deleted. **Detach.** If this value is used, the os disk is retained after VM is deleted. The default value is set to **Detach**. For an ephemeral OS Disk, the default value is set to **Delete**. The user cannot change the delete option for an ephemeral OS Disk. */
  deleteOption?: ComputeDiskDeleteOptionTypes;
}

export function computeOSDiskSerializer(item: ComputeOSDisk): any {
  return {
    osType: item["osType"],
    encryptionSettings: !item["encryptionSettings"]
      ? item["encryptionSettings"]
      : computeDiskEncryptionSettingsSerializer(item["encryptionSettings"]),
    name: item["name"],
    vhd: !item["vhd"] ? item["vhd"] : computeVirtualHardDiskSerializer(item["vhd"]),
    image: !item["image"] ? item["image"] : computeVirtualHardDiskSerializer(item["image"]),
    caching: item["caching"],
    writeAcceleratorEnabled: item["writeAcceleratorEnabled"],
    diffDiskSettings: !item["diffDiskSettings"]
      ? item["diffDiskSettings"]
      : computeDiffDiskSettingsSerializer(item["diffDiskSettings"]),
    createOption: item["createOption"],
    diskSizeGB: item["diskSizeGB"],
    managedDisk: !item["managedDisk"]
      ? item["managedDisk"]
      : computeManagedDiskParametersSerializer(item["managedDisk"]),
    deleteOption: item["deleteOption"],
  };
}

export function computeOSDiskDeserializer(item: any): ComputeOSDisk {
  return {
    osType: item["osType"],
    encryptionSettings: !item["encryptionSettings"]
      ? item["encryptionSettings"]
      : computeDiskEncryptionSettingsDeserializer(item["encryptionSettings"]),
    name: item["name"],
    vhd: !item["vhd"] ? item["vhd"] : computeVirtualHardDiskDeserializer(item["vhd"]),
    image: !item["image"] ? item["image"] : computeVirtualHardDiskDeserializer(item["image"]),
    caching: item["caching"],
    writeAcceleratorEnabled: item["writeAcceleratorEnabled"],
    diffDiskSettings: !item["diffDiskSettings"]
      ? item["diffDiskSettings"]
      : computeDiffDiskSettingsDeserializer(item["diffDiskSettings"]),
    createOption: item["createOption"],
    diskSizeGB: item["diskSizeGB"],
    managedDisk: !item["managedDisk"]
      ? item["managedDisk"]
      : computeManagedDiskParametersDeserializer(item["managedDisk"]),
    deleteOption: item["deleteOption"],
  };
}

/** Describes a Encryption Settings for a Disk */
export interface ComputeDiskEncryptionSettings {
  /** Specifies the location of the disk encryption key, which is a Key Vault Secret. */
  diskEncryptionKey?: ComputeKeyVaultSecretReference;
  /** Specifies the location of the key encryption key in Key Vault. */
  keyEncryptionKey?: ComputeKeyVaultKeyReference;
  /** Specifies whether disk encryption should be enabled on the virtual machine. */
  enabled?: boolean;
}

export function computeDiskEncryptionSettingsSerializer(item: ComputeDiskEncryptionSettings): any {
  return {
    diskEncryptionKey: !item["diskEncryptionKey"]
      ? item["diskEncryptionKey"]
      : computeKeyVaultSecretReferenceSerializer(item["diskEncryptionKey"]),
    keyEncryptionKey: !item["keyEncryptionKey"]
      ? item["keyEncryptionKey"]
      : computeKeyVaultKeyReferenceSerializer(item["keyEncryptionKey"]),
    enabled: item["enabled"],
  };
}

export function computeDiskEncryptionSettingsDeserializer(
  item: any,
): ComputeDiskEncryptionSettings {
  return {
    diskEncryptionKey: !item["diskEncryptionKey"]
      ? item["diskEncryptionKey"]
      : computeKeyVaultSecretReferenceDeserializer(item["diskEncryptionKey"]),
    keyEncryptionKey: !item["keyEncryptionKey"]
      ? item["keyEncryptionKey"]
      : computeKeyVaultKeyReferenceDeserializer(item["keyEncryptionKey"]),
    enabled: item["enabled"],
  };
}

/** Describes a reference to Key Vault Key */
export interface ComputeKeyVaultKeyReference {
  /** The URL referencing a key encryption key in Key Vault. */
  keyUrl: string;
  /** The relative URL of the Key Vault containing the key. */
  sourceVault: CommonSubResource;
}

export function computeKeyVaultKeyReferenceSerializer(item: ComputeKeyVaultKeyReference): any {
  return { keyUrl: item["keyUrl"], sourceVault: commonSubResourceSerializer(item["sourceVault"]) };
}

export function computeKeyVaultKeyReferenceDeserializer(item: any): ComputeKeyVaultKeyReference {
  return {
    keyUrl: item["keyUrl"],
    sourceVault: commonSubResourceDeserializer(item["sourceVault"]),
  };
}

/** The parameters of a managed disk. */
export interface ComputeManagedDiskParameters extends CommonSubResource {
  /** Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk. */
  storageAccountType?: ComputeStorageAccountTypes;
  /** Specifies the customer managed disk encryption set resource id for the managed disk. */
  diskEncryptionSet?: ComputeDiskEncryptionSetParameters;
  /** Specifies the security profile for the managed disk. */
  securityProfile?: ComputeVMDiskSecurityProfile;
}

export function computeManagedDiskParametersSerializer(item: ComputeManagedDiskParameters): any {
  return {
    id: item["id"],
    storageAccountType: item["storageAccountType"],
    diskEncryptionSet: !item["diskEncryptionSet"]
      ? item["diskEncryptionSet"]
      : computeDiskEncryptionSetParametersSerializer(item["diskEncryptionSet"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeVMDiskSecurityProfileSerializer(item["securityProfile"]),
  };
}

export function computeManagedDiskParametersDeserializer(item: any): ComputeManagedDiskParameters {
  return {
    id: item["id"],
    storageAccountType: item["storageAccountType"],
    diskEncryptionSet: !item["diskEncryptionSet"]
      ? item["diskEncryptionSet"]
      : computeDiskEncryptionSetParametersDeserializer(item["diskEncryptionSet"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeVMDiskSecurityProfileDeserializer(item["securityProfile"]),
  };
}

export function computeDataDiskArraySerializer(result: Array<ComputeDataDisk>): any[] {
  return result.map((item) => {
    return computeDataDiskSerializer(item);
  });
}

export function computeDataDiskArrayDeserializer(result: Array<ComputeDataDisk>): any[] {
  return result.map((item) => {
    return computeDataDiskDeserializer(item);
  });
}

/** Describes a data disk. */
export interface ComputeDataDisk {
  /** Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. */
  lun: number;
  /** The disk name. */
  name?: string;
  /** The virtual hard disk. */
  vhd?: ComputeVirtualHardDisk;
  /** The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist. */
  image?: ComputeVirtualHardDisk;
  /** Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The defaulting behavior is: **None for Standard storage. ReadOnly for Premium storage.** */
  caching?: ComputeCachingTypes;
  /** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
  writeAcceleratorEnabled?: boolean;
  /** Specifies how the virtual machine disk should be created. Possible values are **Attach:** This value is used when you are using a specialized disk to create the virtual machine. **FromImage:** This value is used when you are using an image to create the virtual machine data disk. If you are using a platform image, you should also use the imageReference element described above. If you are using a marketplace image, you should also use the plan element previously described. **Empty:** This value is used when creating an empty data disk. **Copy:** This value is used to create a data disk from a snapshot or another disk. **Restore:** This value is used to create a data disk from a disk restore point. */
  createOption: ComputeDiskCreateOptionTypes;
  /** Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. The property 'diskSizeGB' is the number of bytes x 1024^3 for the disk and the value cannot be larger than 1023. */
  diskSizeGB?: number;
  /** The managed disk parameters. */
  managedDisk?: ComputeManagedDiskParameters;
  /** The source resource identifier. It can be a snapshot, or disk restore point from which to create a disk. */
  sourceResource?: ComputeApiEntityReference;
  /** Specifies whether the data disk is in process of detachment from the VirtualMachine/VirtualMachineScaleset */
  toBeDetached?: boolean;
  /** Specifies the Read-Write IOPS for the managed disk when StorageAccountType is UltraSSD_LRS. */
  diskIopsReadWrite?: number;
  /** Specifies the bandwidth in MB per second for the managed disk when StorageAccountType is UltraSSD_LRS. */
  diskMBpsReadWrite?: number;
  /** Specifies the detach behavior to be used while detaching a disk or which is already in the process of detachment from the virtual machine. Supported values: **ForceDetach.** detachOption: **ForceDetach** is applicable only for managed data disks. If a previous detachment attempt of the data disk did not complete due to an unexpected failure from the virtual machine and the disk is still not released then use force-detach as a last resort option to detach the disk forcibly from the VM. All writes might not have been flushed when using this detach behavior. **This feature is still in preview**. To force-detach a data disk update toBeDetached to 'true' along with setting detachOption: 'ForceDetach'. */
  detachOption?: ComputeDiskDetachOptionTypes;
  /** Specifies whether data disk should be deleted or detached upon VM deletion. Possible values are: **Delete.** If this value is used, the data disk is deleted when VM is deleted. **Detach.** If this value is used, the data disk is retained after VM is deleted. The default value is set to **Detach**. */
  deleteOption?: ComputeDiskDeleteOptionTypes;
}

export function computeDataDiskSerializer(item: ComputeDataDisk): any {
  return {
    lun: item["lun"],
    name: item["name"],
    vhd: !item["vhd"] ? item["vhd"] : computeVirtualHardDiskSerializer(item["vhd"]),
    image: !item["image"] ? item["image"] : computeVirtualHardDiskSerializer(item["image"]),
    caching: item["caching"],
    writeAcceleratorEnabled: item["writeAcceleratorEnabled"],
    createOption: item["createOption"],
    diskSizeGB: item["diskSizeGB"],
    managedDisk: !item["managedDisk"]
      ? item["managedDisk"]
      : computeManagedDiskParametersSerializer(item["managedDisk"]),
    sourceResource: !item["sourceResource"]
      ? item["sourceResource"]
      : computeApiEntityReferenceSerializer(item["sourceResource"]),
    toBeDetached: item["toBeDetached"],
    diskIOPSReadWrite: item["diskIopsReadWrite"],
    diskMBpsReadWrite: item["diskMBpsReadWrite"],
    detachOption: item["detachOption"],
    deleteOption: item["deleteOption"],
  };
}

export function computeDataDiskDeserializer(item: any): ComputeDataDisk {
  return {
    lun: item["lun"],
    name: item["name"],
    vhd: !item["vhd"] ? item["vhd"] : computeVirtualHardDiskDeserializer(item["vhd"]),
    image: !item["image"] ? item["image"] : computeVirtualHardDiskDeserializer(item["image"]),
    caching: item["caching"],
    writeAcceleratorEnabled: item["writeAcceleratorEnabled"],
    createOption: item["createOption"],
    diskSizeGB: item["diskSizeGB"],
    managedDisk: !item["managedDisk"]
      ? item["managedDisk"]
      : computeManagedDiskParametersDeserializer(item["managedDisk"]),
    sourceResource: !item["sourceResource"]
      ? item["sourceResource"]
      : computeApiEntityReferenceDeserializer(item["sourceResource"]),
    toBeDetached: item["toBeDetached"],
    diskIopsReadWrite: item["diskIOPSReadWrite"],
    diskMBpsReadWrite: item["diskMBpsReadWrite"],
    detachOption: item["detachOption"],
    deleteOption: item["deleteOption"],
  };
}

/** Specifies the detach behavior to be used while detaching a disk or which is already in the process of detachment from the virtual machine. Supported values are: **ForceDetach.** detachOption: **ForceDetach** is applicable only for managed data disks. If a previous detachment attempt of the data disk did not complete due to an unexpected failure from the virtual machine and the disk is still not released then use force-detach as a last resort option to detach the disk forcibly from the VM. All writes might not have been flushed when using this detach behavior. **This feature is still in preview**. To force-detach a data disk update toBeDetached to 'true' along with setting detachOption: 'ForceDetach'. */
export enum KnownComputeDiskDetachOptionTypes {
  /** ForceDetach */
  ForceDetach = "ForceDetach",
}

/**
 * Specifies the detach behavior to be used while detaching a disk or which is already in the process of detachment from the virtual machine. Supported values are: **ForceDetach.** detachOption: **ForceDetach** is applicable only for managed data disks. If a previous detachment attempt of the data disk did not complete due to an unexpected failure from the virtual machine and the disk is still not released then use force-detach as a last resort option to detach the disk forcibly from the VM. All writes might not have been flushed when using this detach behavior. **This feature is still in preview**. To force-detach a data disk update toBeDetached to 'true' along with setting detachOption: 'ForceDetach'. \
 * {@link KnownComputeDiskDetachOptionTypes} can be used interchangeably with ComputeDiskDetachOptionTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ForceDetach**
 */
export type ComputeDiskDetachOptionTypes = string;

/** Specifies the operating system settings for the virtual machine. Some of the settings cannot be changed once VM is provisioned. */
export interface ComputeOSProfile {
  /** Specifies the host OS name of the virtual machine. This name cannot be updated after the VM is created. **Max-length (Windows):** 15 characters. **Max-length (Linux):** 64 characters. For naming conventions and restrictions see [Azure infrastructure services implementation guidelines](https://docs.microsoft.com/azure/azure-resource-manager/management/resource-name-rules). */
  computerName?: string;
  /** Specifies the name of the administrator account. <br><br> This property cannot be updated after the VM is created. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters. */
  adminUsername?: string;
  /** Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/reset-rdp) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection) */
  adminPassword?: string;
  /** Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. **Note: Do not pass any secrets or passwords in customData property.** This property cannot be updated after the VM is created. The property 'customData' is passed to the VM to be saved as a file, for more information see [Custom Data on Azure VMs](https://azure.microsoft.com/blog/custom-data-and-cloud-init-on-windows-azure/). For using cloud-init for your Linux VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/linux/using-cloud-init). */
  customData?: string;
  /** Specifies Windows operating system settings on the virtual machine. */
  windowsConfiguration?: ComputeWindowsConfiguration;
  /** Specifies the Linux operating system settings on the virtual machine. For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/linux/endorsed-distros). */
  linuxConfiguration?: ComputeLinuxConfiguration;
  /** Specifies set of certificates that should be installed onto the virtual machine. To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows). */
  secrets?: ComputeVaultSecretGroup[];
  /** Specifies whether extension operations should be allowed on the virtual machine. This may only be set to False when no extensions are present on the virtual machine. */
  allowExtensionOperations?: boolean;
  /** Optional property which must either be set to True or omitted. */
  requireGuestProvisionSignal?: boolean;
}

export function computeOSProfileSerializer(item: ComputeOSProfile): any {
  return {
    computerName: item["computerName"],
    adminUsername: item["adminUsername"],
    adminPassword: item["adminPassword"],
    customData: item["customData"],
    windowsConfiguration: !item["windowsConfiguration"]
      ? item["windowsConfiguration"]
      : computeWindowsConfigurationSerializer(item["windowsConfiguration"]),
    linuxConfiguration: !item["linuxConfiguration"]
      ? item["linuxConfiguration"]
      : computeLinuxConfigurationSerializer(item["linuxConfiguration"]),
    secrets: !item["secrets"]
      ? item["secrets"]
      : computeVaultSecretGroupArraySerializer(item["secrets"]),
    allowExtensionOperations: item["allowExtensionOperations"],
    requireGuestProvisionSignal: item["requireGuestProvisionSignal"],
  };
}

export function computeOSProfileDeserializer(item: any): ComputeOSProfile {
  return {
    computerName: item["computerName"],
    adminUsername: item["adminUsername"],
    adminPassword: item["adminPassword"],
    customData: item["customData"],
    windowsConfiguration: !item["windowsConfiguration"]
      ? item["windowsConfiguration"]
      : computeWindowsConfigurationDeserializer(item["windowsConfiguration"]),
    linuxConfiguration: !item["linuxConfiguration"]
      ? item["linuxConfiguration"]
      : computeLinuxConfigurationDeserializer(item["linuxConfiguration"]),
    secrets: !item["secrets"]
      ? item["secrets"]
      : computeVaultSecretGroupArrayDeserializer(item["secrets"]),
    allowExtensionOperations: item["allowExtensionOperations"],
    requireGuestProvisionSignal: item["requireGuestProvisionSignal"],
  };
}

/** Specifies the network interfaces or the networking configuration of the virtual machine. */
export interface ComputeNetworkProfile {
  /** Specifies the list of resource Ids for the network interfaces associated with the virtual machine. */
  networkInterfaces?: ComputeNetworkInterfaceReference[];
  /** specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations */
  networkApiVersion?: ComputeNetworkApiVersion;
  /** Specifies the networking configurations that will be used to create the virtual machine networking resources. */
  networkInterfaceConfigurations?: ComputeVirtualMachineNetworkInterfaceConfiguration[];
}

export function computeNetworkProfileSerializer(item: ComputeNetworkProfile): any {
  return {
    networkInterfaces: !item["networkInterfaces"]
      ? item["networkInterfaces"]
      : computeNetworkInterfaceReferenceArraySerializer(item["networkInterfaces"]),
    networkApiVersion: item["networkApiVersion"],
    networkInterfaceConfigurations: !item["networkInterfaceConfigurations"]
      ? item["networkInterfaceConfigurations"]
      : computeVirtualMachineNetworkInterfaceConfigurationArraySerializer(
          item["networkInterfaceConfigurations"],
        ),
  };
}

export function computeNetworkProfileDeserializer(item: any): ComputeNetworkProfile {
  return {
    networkInterfaces: !item["networkInterfaces"]
      ? item["networkInterfaces"]
      : computeNetworkInterfaceReferenceArrayDeserializer(item["networkInterfaces"]),
    networkApiVersion: item["networkApiVersion"],
    networkInterfaceConfigurations: !item["networkInterfaceConfigurations"]
      ? item["networkInterfaceConfigurations"]
      : computeVirtualMachineNetworkInterfaceConfigurationArrayDeserializer(
          item["networkInterfaceConfigurations"],
        ),
  };
}

export function computeNetworkInterfaceReferenceArraySerializer(
  result: Array<ComputeNetworkInterfaceReference>,
): any[] {
  return result.map((item) => {
    return computeNetworkInterfaceReferenceSerializer(item);
  });
}

export function computeNetworkInterfaceReferenceArrayDeserializer(
  result: Array<ComputeNetworkInterfaceReference>,
): any[] {
  return result.map((item) => {
    return computeNetworkInterfaceReferenceDeserializer(item);
  });
}

/** Describes a network interface reference. */
export interface ComputeNetworkInterfaceReference extends CommonSubResource {
  /** Specifies the primary network interface in case the virtual machine has more than 1 network interface. */
  primary?: boolean;
  /** Specify what happens to the network interface when the VM is deleted */
  deleteOption?: ComputeDeleteOptions;
}

export function computeNetworkInterfaceReferenceSerializer(
  item: ComputeNetworkInterfaceReference,
): any {
  return {
    id: item["id"],
    properties: areAllPropsUndefined(item, ["primary", "deleteOption"])
      ? undefined
      : _networkInterfaceReferencePropertiesSerializer(item),
  };
}

export function computeNetworkInterfaceReferenceDeserializer(
  item: any,
): ComputeNetworkInterfaceReference {
  return {
    id: item["id"],
    ...(!item["properties"]
      ? item["properties"]
      : _networkInterfaceReferencePropertiesDeserializer(item["properties"])),
  };
}

/** Describes a network interface reference properties. */
export interface ComputeNetworkInterfaceReferenceProperties {
  /** Specifies the primary network interface in case the virtual machine has more than 1 network interface. */
  primary?: boolean;
  /** Specify what happens to the network interface when the VM is deleted */
  deleteOption?: ComputeDeleteOptions;
}

export function computeNetworkInterfaceReferencePropertiesSerializer(
  item: ComputeNetworkInterfaceReferenceProperties,
): any {
  return { primary: item["primary"], deleteOption: item["deleteOption"] };
}

export function computeNetworkInterfaceReferencePropertiesDeserializer(
  item: any,
): ComputeNetworkInterfaceReferenceProperties {
  return {
    primary: item["primary"],
    deleteOption: item["deleteOption"],
  };
}

export function computeVirtualMachineNetworkInterfaceConfigurationArraySerializer(
  result: Array<ComputeVirtualMachineNetworkInterfaceConfiguration>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineNetworkInterfaceConfigurationSerializer(item);
  });
}

export function computeVirtualMachineNetworkInterfaceConfigurationArrayDeserializer(
  result: Array<ComputeVirtualMachineNetworkInterfaceConfiguration>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineNetworkInterfaceConfigurationDeserializer(item);
  });
}

/** Describes a virtual machine network interface configurations. */
export interface ComputeVirtualMachineNetworkInterfaceConfiguration {
  /** The network interface configuration name. */
  name: string;
  /** Resource tags applied to the networkInterface address created by this NetworkInterfaceConfiguration */
  tags?: Record<string, string>;
  /** Specifies the primary network interface in case the virtual machine has more than 1 network interface. */
  primary?: boolean;
  /** Specify what happens to the network interface when the VM is deleted */
  deleteOption?: ComputeDeleteOptions;
  /** Specifies whether the network interface is accelerated networking-enabled. */
  enableAcceleratedNetworking?: boolean;
  /** Specifies whether the network interface is disabled for tcp state tracking. */
  disableTcpStateTracking?: boolean;
  /** Specifies whether the network interface is FPGA networking-enabled. */
  enableFpga?: boolean;
  /** Whether IP forwarding enabled on this NIC. */
  enableIPForwarding?: boolean;
  /** The network security group. */
  networkSecurityGroup?: CommonSubResource;
  /** The dns settings to be applied on the network interfaces. */
  dnsSettings?: ComputeVirtualMachineNetworkInterfaceDnsSettingsConfiguration;
  /** Specifies the IP configurations of the network interface. */
  ipConfigurations?: ComputeVirtualMachineNetworkInterfaceIPConfiguration[];
  dscpConfiguration?: CommonSubResource;
  /** Specifies whether the Auxiliary mode is enabled for the Network Interface resource. */
  auxiliaryMode?: ComputeNetworkInterfaceAuxiliaryMode;
  /** Specifies whether the Auxiliary sku is enabled for the Network Interface resource. */
  auxiliarySku?: ComputeNetworkInterfaceAuxiliarySku;
}

export function computeVirtualMachineNetworkInterfaceConfigurationSerializer(
  item: ComputeVirtualMachineNetworkInterfaceConfiguration,
): any {
  return {
    name: item["name"],
    properties: areAllPropsUndefined(item, [
      "primary",
      "deleteOption",
      "enableAcceleratedNetworking",
      "disableTcpStateTracking",
      "enableFpga",
      "enableIPForwarding",
      "networkSecurityGroup",
      "dnsSettings",
      "ipConfigurations",
      "dscpConfiguration",
      "auxiliaryMode",
      "auxiliarySku",
    ])
      ? undefined
      : _virtualMachineNetworkInterfaceConfigurationPropertiesSerializer(item),
    tags: item["tags"],
  };
}

export function computeVirtualMachineNetworkInterfaceConfigurationDeserializer(
  item: any,
): ComputeVirtualMachineNetworkInterfaceConfiguration {
  return {
    name: item["name"],
    ...(!item["properties"]
      ? item["properties"]
      : _virtualMachineNetworkInterfaceConfigurationPropertiesDeserializer(item["properties"])),
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
  };
}

/** Describes a virtual machine network profile's IP configuration. */
export interface ComputeVirtualMachineNetworkInterfaceConfigurationProperties {
  /** Specifies the primary network interface in case the virtual machine has more than 1 network interface. */
  primary?: boolean;
  /** Specify what happens to the network interface when the VM is deleted */
  deleteOption?: ComputeDeleteOptions;
  /** Specifies whether the network interface is accelerated networking-enabled. */
  enableAcceleratedNetworking?: boolean;
  /** Specifies whether the network interface is disabled for tcp state tracking. */
  disableTcpStateTracking?: boolean;
  /** Specifies whether the network interface is FPGA networking-enabled. */
  enableFpga?: boolean;
  /** Whether IP forwarding enabled on this NIC. */
  enableIPForwarding?: boolean;
  /** The network security group. */
  networkSecurityGroup?: CommonSubResource;
  /** The dns settings to be applied on the network interfaces. */
  dnsSettings?: ComputeVirtualMachineNetworkInterfaceDnsSettingsConfiguration;
  /** Specifies the IP configurations of the network interface. */
  ipConfigurations: ComputeVirtualMachineNetworkInterfaceIPConfiguration[];
  dscpConfiguration?: CommonSubResource;
  /** Specifies whether the Auxiliary mode is enabled for the Network Interface resource. */
  auxiliaryMode?: ComputeNetworkInterfaceAuxiliaryMode;
  /** Specifies whether the Auxiliary sku is enabled for the Network Interface resource. */
  auxiliarySku?: ComputeNetworkInterfaceAuxiliarySku;
}

export function computeVirtualMachineNetworkInterfaceConfigurationPropertiesSerializer(
  item: ComputeVirtualMachineNetworkInterfaceConfigurationProperties,
): any {
  return {
    primary: item["primary"],
    deleteOption: item["deleteOption"],
    enableAcceleratedNetworking: item["enableAcceleratedNetworking"],
    disableTcpStateTracking: item["disableTcpStateTracking"],
    enableFpga: item["enableFpga"],
    enableIPForwarding: item["enableIPForwarding"],
    networkSecurityGroup: !item["networkSecurityGroup"]
      ? item["networkSecurityGroup"]
      : commonSubResourceSerializer(item["networkSecurityGroup"]),
    dnsSettings: !item["dnsSettings"]
      ? item["dnsSettings"]
      : computeVirtualMachineNetworkInterfaceDnsSettingsConfigurationSerializer(
          item["dnsSettings"],
        ),
    ipConfigurations: computeVirtualMachineNetworkInterfaceIPConfigurationArraySerializer(
      item["ipConfigurations"],
    ),
    dscpConfiguration: !item["dscpConfiguration"]
      ? item["dscpConfiguration"]
      : commonSubResourceSerializer(item["dscpConfiguration"]),
    auxiliaryMode: item["auxiliaryMode"],
    auxiliarySku: item["auxiliarySku"],
  };
}

export function computeVirtualMachineNetworkInterfaceConfigurationPropertiesDeserializer(
  item: any,
): ComputeVirtualMachineNetworkInterfaceConfigurationProperties {
  return {
    primary: item["primary"],
    deleteOption: item["deleteOption"],
    enableAcceleratedNetworking: item["enableAcceleratedNetworking"],
    disableTcpStateTracking: item["disableTcpStateTracking"],
    enableFpga: item["enableFpga"],
    enableIPForwarding: item["enableIPForwarding"],
    networkSecurityGroup: !item["networkSecurityGroup"]
      ? item["networkSecurityGroup"]
      : commonSubResourceDeserializer(item["networkSecurityGroup"]),
    dnsSettings: !item["dnsSettings"]
      ? item["dnsSettings"]
      : computeVirtualMachineNetworkInterfaceDnsSettingsConfigurationDeserializer(
          item["dnsSettings"],
        ),
    ipConfigurations: computeVirtualMachineNetworkInterfaceIPConfigurationArrayDeserializer(
      item["ipConfigurations"],
    ),
    dscpConfiguration: !item["dscpConfiguration"]
      ? item["dscpConfiguration"]
      : commonSubResourceDeserializer(item["dscpConfiguration"]),
    auxiliaryMode: item["auxiliaryMode"],
    auxiliarySku: item["auxiliarySku"],
  };
}

/** Describes a virtual machines network configuration's DNS settings. */
export interface ComputeVirtualMachineNetworkInterfaceDnsSettingsConfiguration {
  /** List of DNS servers IP addresses */
  dnsServers?: string[];
}

export function computeVirtualMachineNetworkInterfaceDnsSettingsConfigurationSerializer(
  item: ComputeVirtualMachineNetworkInterfaceDnsSettingsConfiguration,
): any {
  return {
    dnsServers: !item["dnsServers"]
      ? item["dnsServers"]
      : item["dnsServers"].map((p: any) => {
          return p;
        }),
  };
}

export function computeVirtualMachineNetworkInterfaceDnsSettingsConfigurationDeserializer(
  item: any,
): ComputeVirtualMachineNetworkInterfaceDnsSettingsConfiguration {
  return {
    dnsServers: !item["dnsServers"]
      ? item["dnsServers"]
      : item["dnsServers"].map((p: any) => {
          return p;
        }),
  };
}

export function computeVirtualMachineNetworkInterfaceIPConfigurationArraySerializer(
  result: Array<ComputeVirtualMachineNetworkInterfaceIPConfiguration>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineNetworkInterfaceIPConfigurationSerializer(item);
  });
}

export function computeVirtualMachineNetworkInterfaceIPConfigurationArrayDeserializer(
  result: Array<ComputeVirtualMachineNetworkInterfaceIPConfiguration>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineNetworkInterfaceIPConfigurationDeserializer(item);
  });
}

/** Describes a virtual machine network profile's IP configuration. */
export interface ComputeVirtualMachineNetworkInterfaceIPConfiguration {
  /** The IP configuration name. */
  name: string;
  /** Specifies the identifier of the subnet. */
  subnet?: CommonSubResource;
  /** Specifies the primary network interface in case the virtual machine has more than 1 network interface. */
  primary?: boolean;
  /** The publicIPAddressConfiguration. */
  publicIPAddressConfiguration?: ComputeVirtualMachinePublicIPAddressConfiguration;
  /** Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'. */
  privateIPAddressVersion?: ComputeIPVersions;
  /** Specifies an array of references to application security group. */
  applicationSecurityGroups?: CommonSubResource[];
  /** Specifies an array of references to backend address pools of application gateways. A virtual machine can reference backend address pools of multiple application gateways. Multiple virtual machines cannot use the same application gateway. */
  applicationGatewayBackendAddressPools?: CommonSubResource[];
  /** Specifies an array of references to backend address pools of load balancers. A virtual machine can reference backend address pools of one public and one internal load balancer. [Multiple virtual machines cannot use the same basic sku load balancer]. */
  loadBalancerBackendAddressPools?: CommonSubResource[];
}

export function computeVirtualMachineNetworkInterfaceIPConfigurationSerializer(
  item: ComputeVirtualMachineNetworkInterfaceIPConfiguration,
): any {
  return {
    name: item["name"],
    properties: areAllPropsUndefined(item, [
      "subnet",
      "primary",
      "publicIPAddressConfiguration",
      "privateIPAddressVersion",
      "applicationSecurityGroups",
      "applicationGatewayBackendAddressPools",
      "loadBalancerBackendAddressPools",
    ])
      ? undefined
      : _virtualMachineNetworkInterfaceIPConfigurationPropertiesSerializer(item),
  };
}

export function computeVirtualMachineNetworkInterfaceIPConfigurationDeserializer(
  item: any,
): ComputeVirtualMachineNetworkInterfaceIPConfiguration {
  return {
    name: item["name"],
    ...(!item["properties"]
      ? item["properties"]
      : _virtualMachineNetworkInterfaceIPConfigurationPropertiesDeserializer(item["properties"])),
  };
}

/** Describes a virtual machine network interface IP configuration properties. */
export interface ComputeVirtualMachineNetworkInterfaceIPConfigurationProperties {
  /** Specifies the identifier of the subnet. */
  subnet?: CommonSubResource;
  /** Specifies the primary network interface in case the virtual machine has more than 1 network interface. */
  primary?: boolean;
  /** The publicIPAddressConfiguration. */
  publicIPAddressConfiguration?: ComputeVirtualMachinePublicIPAddressConfiguration;
  /** Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'. */
  privateIPAddressVersion?: ComputeIPVersions;
  /** Specifies an array of references to application security group. */
  applicationSecurityGroups?: CommonSubResource[];
  /** Specifies an array of references to backend address pools of application gateways. A virtual machine can reference backend address pools of multiple application gateways. Multiple virtual machines cannot use the same application gateway. */
  applicationGatewayBackendAddressPools?: CommonSubResource[];
  /** Specifies an array of references to backend address pools of load balancers. A virtual machine can reference backend address pools of one public and one internal load balancer. [Multiple virtual machines cannot use the same basic sku load balancer]. */
  loadBalancerBackendAddressPools?: CommonSubResource[];
}

export function computeVirtualMachineNetworkInterfaceIPConfigurationPropertiesSerializer(
  item: ComputeVirtualMachineNetworkInterfaceIPConfigurationProperties,
): any {
  return {
    subnet: !item["subnet"] ? item["subnet"] : commonSubResourceSerializer(item["subnet"]),
    primary: item["primary"],
    publicIPAddressConfiguration: !item["publicIPAddressConfiguration"]
      ? item["publicIPAddressConfiguration"]
      : computeVirtualMachinePublicIPAddressConfigurationSerializer(
          item["publicIPAddressConfiguration"],
        ),
    privateIPAddressVersion: item["privateIPAddressVersion"],
    applicationSecurityGroups: !item["applicationSecurityGroups"]
      ? item["applicationSecurityGroups"]
      : commonSubResourceArraySerializer(item["applicationSecurityGroups"]),
    applicationGatewayBackendAddressPools: !item["applicationGatewayBackendAddressPools"]
      ? item["applicationGatewayBackendAddressPools"]
      : commonSubResourceArraySerializer(item["applicationGatewayBackendAddressPools"]),
    loadBalancerBackendAddressPools: !item["loadBalancerBackendAddressPools"]
      ? item["loadBalancerBackendAddressPools"]
      : commonSubResourceArraySerializer(item["loadBalancerBackendAddressPools"]),
  };
}

export function computeVirtualMachineNetworkInterfaceIPConfigurationPropertiesDeserializer(
  item: any,
): ComputeVirtualMachineNetworkInterfaceIPConfigurationProperties {
  return {
    subnet: !item["subnet"] ? item["subnet"] : commonSubResourceDeserializer(item["subnet"]),
    primary: item["primary"],
    publicIPAddressConfiguration: !item["publicIPAddressConfiguration"]
      ? item["publicIPAddressConfiguration"]
      : computeVirtualMachinePublicIPAddressConfigurationDeserializer(
          item["publicIPAddressConfiguration"],
        ),
    privateIPAddressVersion: item["privateIPAddressVersion"],
    applicationSecurityGroups: !item["applicationSecurityGroups"]
      ? item["applicationSecurityGroups"]
      : commonSubResourceArrayDeserializer(item["applicationSecurityGroups"]),
    applicationGatewayBackendAddressPools: !item["applicationGatewayBackendAddressPools"]
      ? item["applicationGatewayBackendAddressPools"]
      : commonSubResourceArrayDeserializer(item["applicationGatewayBackendAddressPools"]),
    loadBalancerBackendAddressPools: !item["loadBalancerBackendAddressPools"]
      ? item["loadBalancerBackendAddressPools"]
      : commonSubResourceArrayDeserializer(item["loadBalancerBackendAddressPools"]),
  };
}

/** Describes a virtual machines IP Configuration's PublicIPAddress configuration */
export interface ComputeVirtualMachinePublicIPAddressConfiguration {
  /** The publicIP address configuration name. */
  name: string;
  /** Describes the public IP Sku. It can only be set with OrchestrationMode as Flexible. */
  sku?: ComputePublicIPAddressSku;
  /** Resource tags applied to the publicIP address created by this PublicIPAddressConfiguration */
  tags?: Record<string, string>;
  /** The idle timeout of the public IP address. */
  idleTimeoutInMinutes?: number;
  /** Specify what happens to the public IP address when the VM is deleted */
  deleteOption?: ComputeDeleteOptions;
  /** The dns settings to be applied on the publicIP addresses . */
  dnsSettings?: ComputeVirtualMachinePublicIPAddressDnsSettingsConfiguration;
  /** The list of IP tags associated with the public IP address. */
  ipTags?: ComputeVirtualMachineIpTag[];
  /** The PublicIPPrefix from which to allocate publicIP addresses. */
  publicIPPrefix?: CommonSubResource;
  /** Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'. */
  publicIPAddressVersion?: ComputeIPVersions;
  /** Specify the public IP allocation type */
  publicIPAllocationMethod?: ComputePublicIPAllocationMethod;
}

export function computeVirtualMachinePublicIPAddressConfigurationSerializer(
  item: ComputeVirtualMachinePublicIPAddressConfiguration,
): any {
  return {
    name: item["name"],
    properties: areAllPropsUndefined(item, [
      "idleTimeoutInMinutes",
      "deleteOption",
      "dnsSettings",
      "ipTags",
      "publicIPPrefix",
      "publicIPAddressVersion",
      "publicIPAllocationMethod",
    ])
      ? undefined
      : _virtualMachinePublicIPAddressConfigurationPropertiesSerializer(item),
    sku: !item["sku"] ? item["sku"] : computePublicIPAddressSkuSerializer(item["sku"]),
    tags: item["tags"],
  };
}

export function computeVirtualMachinePublicIPAddressConfigurationDeserializer(
  item: any,
): ComputeVirtualMachinePublicIPAddressConfiguration {
  return {
    name: item["name"],
    ...(!item["properties"]
      ? item["properties"]
      : _virtualMachinePublicIPAddressConfigurationPropertiesDeserializer(item["properties"])),
    sku: !item["sku"] ? item["sku"] : computePublicIPAddressSkuDeserializer(item["sku"]),
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
  };
}

/** Describes a virtual machines IP Configuration's PublicIPAddress configuration */
export interface ComputeVirtualMachinePublicIPAddressConfigurationProperties {
  /** The idle timeout of the public IP address. */
  idleTimeoutInMinutes?: number;
  /** Specify what happens to the public IP address when the VM is deleted */
  deleteOption?: ComputeDeleteOptions;
  /** The dns settings to be applied on the publicIP addresses . */
  dnsSettings?: ComputeVirtualMachinePublicIPAddressDnsSettingsConfiguration;
  /** The list of IP tags associated with the public IP address. */
  ipTags?: ComputeVirtualMachineIpTag[];
  /** The PublicIPPrefix from which to allocate publicIP addresses. */
  publicIPPrefix?: CommonSubResource;
  /** Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'. */
  publicIPAddressVersion?: ComputeIPVersions;
  /** Specify the public IP allocation type */
  publicIPAllocationMethod?: ComputePublicIPAllocationMethod;
}

export function computeVirtualMachinePublicIPAddressConfigurationPropertiesSerializer(
  item: ComputeVirtualMachinePublicIPAddressConfigurationProperties,
): any {
  return {
    idleTimeoutInMinutes: item["idleTimeoutInMinutes"],
    deleteOption: item["deleteOption"],
    dnsSettings: !item["dnsSettings"]
      ? item["dnsSettings"]
      : computeVirtualMachinePublicIPAddressDnsSettingsConfigurationSerializer(item["dnsSettings"]),
    ipTags: !item["ipTags"]
      ? item["ipTags"]
      : computeVirtualMachineIpTagArraySerializer(item["ipTags"]),
    publicIPPrefix: !item["publicIPPrefix"]
      ? item["publicIPPrefix"]
      : commonSubResourceSerializer(item["publicIPPrefix"]),
    publicIPAddressVersion: item["publicIPAddressVersion"],
    publicIPAllocationMethod: item["publicIPAllocationMethod"],
  };
}

export function computeVirtualMachinePublicIPAddressConfigurationPropertiesDeserializer(
  item: any,
): ComputeVirtualMachinePublicIPAddressConfigurationProperties {
  return {
    idleTimeoutInMinutes: item["idleTimeoutInMinutes"],
    deleteOption: item["deleteOption"],
    dnsSettings: !item["dnsSettings"]
      ? item["dnsSettings"]
      : computeVirtualMachinePublicIPAddressDnsSettingsConfigurationDeserializer(
          item["dnsSettings"],
        ),
    ipTags: !item["ipTags"]
      ? item["ipTags"]
      : computeVirtualMachineIpTagArrayDeserializer(item["ipTags"]),
    publicIPPrefix: !item["publicIPPrefix"]
      ? item["publicIPPrefix"]
      : commonSubResourceDeserializer(item["publicIPPrefix"]),
    publicIPAddressVersion: item["publicIPAddressVersion"],
    publicIPAllocationMethod: item["publicIPAllocationMethod"],
  };
}

/** Describes a virtual machines network configuration's DNS settings. */
export interface ComputeVirtualMachinePublicIPAddressDnsSettingsConfiguration {
  /** The Domain name label prefix of the PublicIPAddress resources that will be created. The generated name label is the concatenation of the domain name label and vm network profile unique ID. */
  domainNameLabel: string;
  /** The Domain name label scope of the PublicIPAddress resources that will be created. The generated name label is the concatenation of the hashed domain name label with policy according to the domain name label scope and vm network profile unique ID. */
  domainNameLabelScope?: ComputeDomainNameLabelScopeTypes;
}

export function computeVirtualMachinePublicIPAddressDnsSettingsConfigurationSerializer(
  item: ComputeVirtualMachinePublicIPAddressDnsSettingsConfiguration,
): any {
  return {
    domainNameLabel: item["domainNameLabel"],
    domainNameLabelScope: item["domainNameLabelScope"],
  };
}

export function computeVirtualMachinePublicIPAddressDnsSettingsConfigurationDeserializer(
  item: any,
): ComputeVirtualMachinePublicIPAddressDnsSettingsConfiguration {
  return {
    domainNameLabel: item["domainNameLabel"],
    domainNameLabelScope: item["domainNameLabelScope"],
  };
}

export function computeVirtualMachineIpTagArraySerializer(
  result: Array<ComputeVirtualMachineIpTag>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineIpTagSerializer(item);
  });
}

export function computeVirtualMachineIpTagArrayDeserializer(
  result: Array<ComputeVirtualMachineIpTag>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineIpTagDeserializer(item);
  });
}

/** Contains the IP tag associated with the public IP address. */
export interface ComputeVirtualMachineIpTag {
  /** IP tag type. Example: FirstPartyUsage. */
  ipTagType?: string;
  /** IP tag associated with the public IP. Example: SQL, Storage etc. */
  tag?: string;
}

export function computeVirtualMachineIpTagSerializer(item: ComputeVirtualMachineIpTag): any {
  return { ipTagType: item["ipTagType"], tag: item["tag"] };
}

export function computeVirtualMachineIpTagDeserializer(item: any): ComputeVirtualMachineIpTag {
  return {
    ipTagType: item["ipTagType"],
    tag: item["tag"],
  };
}

/** Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'. */
export enum KnownComputeIPVersions {
  /** IPv4 */
  IPv4 = "IPv4",
  /** IPv6 */
  IPv6 = "IPv6",
}

/**
 * Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'. \
 * {@link KnownComputeIPVersions} can be used interchangeably with ComputeIPVersions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **IPv4** \
 * **IPv6**
 */
export type ComputeIPVersions = string;

/** Specify the public IP allocation type */
export enum KnownComputePublicIPAllocationMethod {
  /** Dynamic */
  Dynamic = "Dynamic",
  /** Static */
  Static = "Static",
}

/**
 * Specify the public IP allocation type \
 * {@link KnownComputePublicIPAllocationMethod} can be used interchangeably with ComputePublicIPAllocationMethod,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Dynamic** \
 * **Static**
 */
export type ComputePublicIPAllocationMethod = string;

/** The instance view of a virtual machine. */
export interface ComputeVirtualMachineInstanceView {
  /** Specifies the update domain of the virtual machine. */
  platformUpdateDomain?: number;
  /** Specifies the fault domain of the virtual machine. */
  platformFaultDomain?: number;
  /** The computer name assigned to the virtual machine. */
  computerName?: string;
  /** The Operating System running on the virtual machine. */
  osName?: string;
  /** The version of Operating System running on the virtual machine. */
  osVersion?: string;
  /** Specifies the HyperVGeneration Type associated with a resource */
  hyperVGeneration?: ComputeHyperVGenerationType;
  /** The Remote desktop certificate thumbprint. */
  rdpThumbPrint?: string;
  /** The VM Agent running on the virtual machine. */
  vmAgent?: ComputeVirtualMachineAgentInstanceView;
  /** The Maintenance Operation status on the virtual machine. */
  maintenanceRedeployStatus?: ComputeMaintenanceRedeployStatus;
  /** The virtual machine disk information. */
  disks?: ComputeDiskInstanceView[];
  /** The extensions information. */
  extensions?: ComputeVirtualMachineExtensionInstanceView[];
  /** The health status for the VM. */
  readonly vmHealth?: ComputeVirtualMachineHealthStatus;
  /** Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor. */
  bootDiagnostics?: ComputeBootDiagnosticsInstanceView;
  /** Resource id of the dedicated host, on which the virtual machine is allocated through automatic placement, when the virtual machine is associated with a dedicated host group that has automatic placement enabled. Minimum api-version: 2020-06-01. */
  readonly assignedHost?: string;
  /** The resource status information. */
  statuses?: ComputeInstanceViewStatus[];
  /** [Preview Feature] The status of virtual machine patch operations. */
  patchStatus?: ComputeVirtualMachinePatchStatus;
  /** [Preview Feature] Specifies whether the VM is currently in or out of the Standby Pool. */
  readonly isVMInStandbyPool?: boolean;
}

export function computeVirtualMachineInstanceViewDeserializer(
  item: any,
): ComputeVirtualMachineInstanceView {
  return {
    platformUpdateDomain: item["platformUpdateDomain"],
    platformFaultDomain: item["platformFaultDomain"],
    computerName: item["computerName"],
    osName: item["osName"],
    osVersion: item["osVersion"],
    hyperVGeneration: item["hyperVGeneration"],
    rdpThumbPrint: item["rdpThumbPrint"],
    vmAgent: !item["vmAgent"]
      ? item["vmAgent"]
      : computeVirtualMachineAgentInstanceViewDeserializer(item["vmAgent"]),
    maintenanceRedeployStatus: !item["maintenanceRedeployStatus"]
      ? item["maintenanceRedeployStatus"]
      : computeMaintenanceRedeployStatusDeserializer(item["maintenanceRedeployStatus"]),
    disks: !item["disks"] ? item["disks"] : computeDiskInstanceViewArrayDeserializer(item["disks"]),
    extensions: !item["extensions"]
      ? item["extensions"]
      : computeVirtualMachineExtensionInstanceViewArrayDeserializer(item["extensions"]),
    vmHealth: !item["vmHealth"]
      ? item["vmHealth"]
      : computeVirtualMachineHealthStatusDeserializer(item["vmHealth"]),
    bootDiagnostics: !item["bootDiagnostics"]
      ? item["bootDiagnostics"]
      : computeBootDiagnosticsInstanceViewDeserializer(item["bootDiagnostics"]),
    assignedHost: item["assignedHost"],
    statuses: !item["statuses"]
      ? item["statuses"]
      : computeInstanceViewStatusArrayDeserializer(item["statuses"]),
    patchStatus: !item["patchStatus"]
      ? item["patchStatus"]
      : computeVirtualMachinePatchStatusDeserializer(item["patchStatus"]),
    isVMInStandbyPool: item["isVMInStandbyPool"],
  };
}

/** Specifies the HyperVGeneration Type associated with a resource */
export enum KnownComputeHyperVGenerationType {
  /** V1 */
  V1 = "V1",
  /** V2 */
  V2 = "V2",
}

/**
 * Specifies the HyperVGeneration Type associated with a resource \
 * {@link KnownComputeHyperVGenerationType} can be used interchangeably with ComputeHyperVGenerationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **V1** \
 * **V2**
 */
export type ComputeHyperVGenerationType = string;

/** The instance view of the VM Agent running on the virtual machine. */
export interface ComputeVirtualMachineAgentInstanceView {
  /** The VM Agent full version. */
  vmAgentVersion?: string;
  /** The virtual machine extension handler instance view. */
  extensionHandlers?: ComputeVirtualMachineExtensionHandlerInstanceView[];
  /** The resource status information. */
  statuses?: ComputeInstanceViewStatus[];
}

export function computeVirtualMachineAgentInstanceViewDeserializer(
  item: any,
): ComputeVirtualMachineAgentInstanceView {
  return {
    vmAgentVersion: item["vmAgentVersion"],
    extensionHandlers: !item["extensionHandlers"]
      ? item["extensionHandlers"]
      : computeVirtualMachineExtensionHandlerInstanceViewArrayDeserializer(
          item["extensionHandlers"],
        ),
    statuses: !item["statuses"]
      ? item["statuses"]
      : computeInstanceViewStatusArrayDeserializer(item["statuses"]),
  };
}

export function computeVirtualMachineExtensionHandlerInstanceViewArrayDeserializer(
  result: Array<ComputeVirtualMachineExtensionHandlerInstanceView>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineExtensionHandlerInstanceViewDeserializer(item);
  });
}

/** The instance view of a virtual machine extension handler. */
export interface ComputeVirtualMachineExtensionHandlerInstanceView {
  /** Specifies the type of the extension; an example is "CustomScriptExtension". */
  type?: string;
  /** Specifies the version of the script handler. */
  typeHandlerVersion?: string;
  /** The extension handler status. */
  status?: ComputeInstanceViewStatus;
}

export function computeVirtualMachineExtensionHandlerInstanceViewDeserializer(
  item: any,
): ComputeVirtualMachineExtensionHandlerInstanceView {
  return {
    type: item["type"],
    typeHandlerVersion: item["typeHandlerVersion"],
    status: !item["status"]
      ? item["status"]
      : computeInstanceViewStatusDeserializer(item["status"]),
  };
}

/** Maintenance Operation Status. */
export interface ComputeMaintenanceRedeployStatus {
  /** True, if customer is allowed to perform Maintenance. */
  isCustomerInitiatedMaintenanceAllowed?: boolean;
  /** Start Time for the Pre Maintenance Window. */
  preMaintenanceWindowStartTime?: Date;
  /** End Time for the Pre Maintenance Window. */
  preMaintenanceWindowEndTime?: Date;
  /** Start Time for the Maintenance Window. */
  maintenanceWindowStartTime?: Date;
  /** End Time for the Maintenance Window. */
  maintenanceWindowEndTime?: Date;
  /** The Last Maintenance Operation Result Code. */
  lastOperationResultCode?: ComputeMaintenanceOperationResultCodeTypes;
  /** Message returned for the last Maintenance Operation. */
  lastOperationMessage?: string;
}

export function computeMaintenanceRedeployStatusDeserializer(
  item: any,
): ComputeMaintenanceRedeployStatus {
  return {
    isCustomerInitiatedMaintenanceAllowed: item["isCustomerInitiatedMaintenanceAllowed"],
    preMaintenanceWindowStartTime: !item["preMaintenanceWindowStartTime"]
      ? item["preMaintenanceWindowStartTime"]
      : new Date(item["preMaintenanceWindowStartTime"]),
    preMaintenanceWindowEndTime: !item["preMaintenanceWindowEndTime"]
      ? item["preMaintenanceWindowEndTime"]
      : new Date(item["preMaintenanceWindowEndTime"]),
    maintenanceWindowStartTime: !item["maintenanceWindowStartTime"]
      ? item["maintenanceWindowStartTime"]
      : new Date(item["maintenanceWindowStartTime"]),
    maintenanceWindowEndTime: !item["maintenanceWindowEndTime"]
      ? item["maintenanceWindowEndTime"]
      : new Date(item["maintenanceWindowEndTime"]),
    lastOperationResultCode: item["lastOperationResultCode"],
    lastOperationMessage: item["lastOperationMessage"],
  };
}

/** The Last Maintenance Operation Result Code. */
export type ComputeMaintenanceOperationResultCodeTypes =
  | "None"
  | "RetryLater"
  | "MaintenanceAborted"
  | "MaintenanceCompleted";

export function computeDiskInstanceViewArrayDeserializer(
  result: Array<ComputeDiskInstanceView>,
): any[] {
  return result.map((item) => {
    return computeDiskInstanceViewDeserializer(item);
  });
}

/** The instance view of the disk. */
export interface ComputeDiskInstanceView {
  /** The disk name. */
  name?: string;
  /** Specifies the encryption settings for the OS Disk. <br><br> Minimum api-version: 2015-06-15 */
  encryptionSettings?: ComputeDiskEncryptionSettings[];
  /** The resource status information. */
  statuses?: ComputeInstanceViewStatus[];
}

export function computeDiskInstanceViewDeserializer(item: any): ComputeDiskInstanceView {
  return {
    name: item["name"],
    encryptionSettings: !item["encryptionSettings"]
      ? item["encryptionSettings"]
      : computeDiskEncryptionSettingsArrayDeserializer(item["encryptionSettings"]),
    statuses: !item["statuses"]
      ? item["statuses"]
      : computeInstanceViewStatusArrayDeserializer(item["statuses"]),
  };
}

export function computeDiskEncryptionSettingsArraySerializer(
  result: Array<ComputeDiskEncryptionSettings>,
): any[] {
  return result.map((item) => {
    return computeDiskEncryptionSettingsSerializer(item);
  });
}

export function computeDiskEncryptionSettingsArrayDeserializer(
  result: Array<ComputeDiskEncryptionSettings>,
): any[] {
  return result.map((item) => {
    return computeDiskEncryptionSettingsDeserializer(item);
  });
}

export function computeVirtualMachineExtensionInstanceViewArraySerializer(
  result: Array<ComputeVirtualMachineExtensionInstanceView>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineExtensionInstanceViewSerializer(item);
  });
}

export function computeVirtualMachineExtensionInstanceViewArrayDeserializer(
  result: Array<ComputeVirtualMachineExtensionInstanceView>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineExtensionInstanceViewDeserializer(item);
  });
}

/** The health status of the VM. */
export interface ComputeVirtualMachineHealthStatus {
  /** The health status information for the VM. */
  readonly status?: ComputeInstanceViewStatus;
}

export function computeVirtualMachineHealthStatusDeserializer(
  item: any,
): ComputeVirtualMachineHealthStatus {
  return {
    status: !item["status"]
      ? item["status"]
      : computeInstanceViewStatusDeserializer(item["status"]),
  };
}

/** The instance view of a virtual machine boot diagnostics. */
export interface ComputeBootDiagnosticsInstanceView {
  /** The console screenshot blob URI. **Note:** This will **not** be set if boot diagnostics is currently enabled with managed storage. */
  readonly consoleScreenshotBlobUri?: string;
  /** The serial console log blob Uri. **Note:** This will **not** be set if boot diagnostics is currently enabled with managed storage. */
  readonly serialConsoleLogBlobUri?: string;
  /** The boot diagnostics status information for the VM. **Note:** It will be set only if there are errors encountered in enabling boot diagnostics. */
  readonly status?: ComputeInstanceViewStatus;
}

export function computeBootDiagnosticsInstanceViewDeserializer(
  item: any,
): ComputeBootDiagnosticsInstanceView {
  return {
    consoleScreenshotBlobUri: item["consoleScreenshotBlobUri"],
    serialConsoleLogBlobUri: item["serialConsoleLogBlobUri"],
    status: !item["status"]
      ? item["status"]
      : computeInstanceViewStatusDeserializer(item["status"]),
  };
}

/** The status of virtual machine patch operations. */
export interface ComputeVirtualMachinePatchStatus {
  /** The available patch summary of the latest assessment operation for the virtual machine. */
  availablePatchSummary?: ComputeAvailablePatchSummary;
  /** The installation summary of the latest installation operation for the virtual machine. */
  lastPatchInstallationSummary?: ComputeLastPatchInstallationSummary;
  /** The enablement status of the specified patchMode */
  readonly configurationStatuses?: ComputeInstanceViewStatus[];
}

export function computeVirtualMachinePatchStatusDeserializer(
  item: any,
): ComputeVirtualMachinePatchStatus {
  return {
    availablePatchSummary: !item["availablePatchSummary"]
      ? item["availablePatchSummary"]
      : computeAvailablePatchSummaryDeserializer(item["availablePatchSummary"]),
    lastPatchInstallationSummary: !item["lastPatchInstallationSummary"]
      ? item["lastPatchInstallationSummary"]
      : computeLastPatchInstallationSummaryDeserializer(item["lastPatchInstallationSummary"]),
    configurationStatuses: !item["configurationStatuses"]
      ? item["configurationStatuses"]
      : computeInstanceViewStatusArrayDeserializer(item["configurationStatuses"]),
  };
}

/** Describes the properties of an virtual machine instance view for available patch summary. */
export interface ComputeAvailablePatchSummary {
  /** The overall success or failure status of the operation. It remains "InProgress" until the operation completes. At that point it will become "Unknown", "Failed", "Succeeded", or "CompletedWithWarnings." */
  readonly status?: ComputePatchOperationStatus;
  /** The activity ID of the operation that produced this result. It is used to correlate across CRP and extension logs. */
  readonly assessmentActivityId?: string;
  /** The overall reboot status of the VM. It will be true when partially installed patches require a reboot to complete installation but the reboot has not yet occurred. */
  readonly rebootPending?: boolean;
  /** The number of critical or security patches that have been detected as available and not yet installed. */
  readonly criticalAndSecurityPatchCount?: number;
  /** The number of all available patches excluding critical and security. */
  readonly otherPatchCount?: number;
  /** The UTC timestamp when the operation began. */
  readonly startTime?: Date;
  /** The UTC timestamp when the operation began. */
  readonly lastModifiedTime?: Date;
  /** The errors that were encountered during execution of the operation. The details array contains the list of them. */
  readonly error?: CommonApiError;
}

export function computeAvailablePatchSummaryDeserializer(item: any): ComputeAvailablePatchSummary {
  return {
    status: item["status"],
    assessmentActivityId: item["assessmentActivityId"],
    rebootPending: item["rebootPending"],
    criticalAndSecurityPatchCount: item["criticalAndSecurityPatchCount"],
    otherPatchCount: item["otherPatchCount"],
    startTime: !item["startTime"] ? item["startTime"] : new Date(item["startTime"]),
    lastModifiedTime: !item["lastModifiedTime"]
      ? item["lastModifiedTime"]
      : new Date(item["lastModifiedTime"]),
    error: !item["error"] ? item["error"] : commonApiErrorDeserializer(item["error"]),
  };
}

/** The overall success or failure status of the operation. It remains "InProgress" until the operation completes. At that point it will become "Unknown", "Failed", "Succeeded", or "CompletedWithWarnings." */
export enum KnownComputePatchOperationStatus {
  /** Unknown */
  Unknown = "Unknown",
  /** InProgress */
  InProgress = "InProgress",
  /** Failed */
  Failed = "Failed",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** CompletedWithWarnings */
  CompletedWithWarnings = "CompletedWithWarnings",
}

/**
 * The overall success or failure status of the operation. It remains "InProgress" until the operation completes. At that point it will become "Unknown", "Failed", "Succeeded", or "CompletedWithWarnings." \
 * {@link KnownComputePatchOperationStatus} can be used interchangeably with ComputePatchOperationStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **InProgress** \
 * **Failed** \
 * **Succeeded** \
 * **CompletedWithWarnings**
 */
export type ComputePatchOperationStatus = string;

/** Describes the properties of the last installed patch summary. */
export interface ComputeLastPatchInstallationSummary {
  /** The overall success or failure status of the operation. It remains "InProgress" until the operation completes. At that point it will become "Unknown", "Failed", "Succeeded", or "CompletedWithWarnings." */
  readonly status?: ComputePatchOperationStatus;
  /** The activity ID of the operation that produced this result. It is used to correlate across CRP and extension logs. */
  readonly installationActivityId?: string;
  /** Describes whether the operation ran out of time before it completed all its intended actions */
  readonly maintenanceWindowExceeded?: boolean;
  /** The number of all available patches but not going to be installed because it didn't match a classification or inclusion list entry. */
  readonly notSelectedPatchCount?: number;
  /** The number of all available patches but excluded explicitly by a customer-specified exclusion list match. */
  readonly excludedPatchCount?: number;
  /** The number of all available patches expected to be installed over the course of the patch installation operation. */
  readonly pendingPatchCount?: number;
  /** The count of patches that successfully installed. */
  readonly installedPatchCount?: number;
  /** The count of patches that failed installation. */
  readonly failedPatchCount?: number;
  /** The UTC timestamp when the operation began. */
  readonly startTime?: Date;
  /** The UTC timestamp when the operation began. */
  readonly lastModifiedTime?: Date;
  /** The errors that were encountered during execution of the operation. The details array contains the list of them. */
  readonly error?: CommonApiError;
}

export function computeLastPatchInstallationSummaryDeserializer(
  item: any,
): ComputeLastPatchInstallationSummary {
  return {
    status: item["status"],
    installationActivityId: item["installationActivityId"],
    maintenanceWindowExceeded: item["maintenanceWindowExceeded"],
    notSelectedPatchCount: item["notSelectedPatchCount"],
    excludedPatchCount: item["excludedPatchCount"],
    pendingPatchCount: item["pendingPatchCount"],
    installedPatchCount: item["installedPatchCount"],
    failedPatchCount: item["failedPatchCount"],
    startTime: !item["startTime"] ? item["startTime"] : new Date(item["startTime"]),
    lastModifiedTime: !item["lastModifiedTime"]
      ? item["lastModifiedTime"]
      : new Date(item["lastModifiedTime"]),
    error: !item["error"] ? item["error"] : commonApiErrorDeserializer(item["error"]),
  };
}

export function computeVirtualMachineExtensionArraySerializer(
  result: Array<ComputeVirtualMachineExtension>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineExtensionSerializer(item);
  });
}

export function computeVirtualMachineExtensionArrayDeserializer(
  result: Array<ComputeVirtualMachineExtension>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineExtensionDeserializer(item);
  });
}

/** Describes a Virtual Machine Extension. */
export interface ComputeVirtualMachineExtension extends TrackedResource {
  /** How the extension handler should be forced to update even if the extension configuration has not changed. */
  forceUpdateTag?: string;
  /** The name of the extension handler publisher. */
  publisher?: string;
  /** Specifies the type of the extension; an example is "CustomScriptExtension". */
  typePropertiesType?: string;
  /** Specifies the version of the script handler. */
  typeHandlerVersion?: string;
  /** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
  autoUpgradeMinorVersion?: boolean;
  /** Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available. */
  enableAutomaticUpgrade?: boolean;
  /** Json formatted public settings for the extension. */
  settings?: any;
  /** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
  protectedSettings?: any;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: string;
  /** The virtual machine extension instance view. */
  instanceView?: ComputeVirtualMachineExtensionInstanceView;
  /** Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false. */
  suppressFailures?: boolean;
  /** The extensions protected settings that are passed by reference, and consumed from key vault */
  protectedSettingsFromKeyVault?: ComputeKeyVaultSecretReference;
  /** Collection of extension names after which this extension needs to be provisioned. */
  provisionAfterExtensions?: string[];
}

export function computeVirtualMachineExtensionSerializer(
  item: ComputeVirtualMachineExtension,
): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, [
      "forceUpdateTag",
      "publisher",
      "type",
      "typeHandlerVersion",
      "autoUpgradeMinorVersion",
      "enableAutomaticUpgrade",
      "settings",
      "protectedSettings",
      "instanceView",
      "suppressFailures",
      "protectedSettingsFromKeyVault",
      "provisionAfterExtensions",
    ])
      ? undefined
      : _virtualMachineExtensionPropertiesSerializer(item),
  };
}

export function computeVirtualMachineExtensionDeserializer(
  item: any,
): ComputeVirtualMachineExtension {
  return {
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    ...(!item["properties"]
      ? item["properties"]
      : _virtualMachineExtensionPropertiesDeserializer(item["properties"])),
  };
}

/** Identity for the virtual machine. */
export interface ComputeVirtualMachineIdentity {
  /** The principal id of virtual machine identity. This property will only be provided for a system assigned identity. */
  readonly principalId?: string;
  /** The tenant id associated with the virtual machine. This property will only be provided for a system assigned identity. */
  readonly tenantId?: string;
  /** The type of identity used for the virtual machine. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine. */
  type?: CommonResourceIdentityType;
  /** The list of user identities associated with the Virtual Machine. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
  userAssignedIdentities?: Record<string, CommonUserAssignedIdentitiesValue>;
}

export function computeVirtualMachineIdentitySerializer(item: ComputeVirtualMachineIdentity): any {
  return {
    type: item["type"],
    userAssignedIdentities: !item["userAssignedIdentities"]
      ? item["userAssignedIdentities"]
      : commonUserAssignedIdentitiesValueRecordSerializer(item["userAssignedIdentities"]),
  };
}

export function computeVirtualMachineIdentityDeserializer(
  item: any,
): ComputeVirtualMachineIdentity {
  return {
    principalId: item["principalId"],
    tenantId: item["tenantId"],
    type: item["type"],
    userAssignedIdentities: !item["userAssignedIdentities"]
      ? item["userAssignedIdentities"]
      : commonUserAssignedIdentitiesValueRecordDeserializer(item["userAssignedIdentities"]),
  };
}

/** Describes a Virtual Machine Update. */
export interface ComputeVirtualMachineUpdate extends ComputeUpdateResource {
  /** Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**. */
  plan?: ComputePlan;
  /** The identity of the virtual machine, if configured. */
  identity?: ComputeVirtualMachineIdentity;
  /** The virtual machine zones. */
  zones?: string[];
  /** Specifies the hardware settings for the virtual machine. */
  hardwareProfile?: ComputeHardwareProfile;
  /** Specifies Redeploy, Reboot and ScheduledEventsAdditionalPublishingTargets Scheduled Event related configurations for the virtual machine. */
  scheduledEventsPolicy?: ComputeScheduledEventsPolicy;
  /** Specifies the storage settings for the virtual machine disks. */
  storageProfile?: ComputeStorageProfile;
  /** Specifies additional capabilities enabled or disabled on the virtual machine. */
  additionalCapabilities?: ComputeAdditionalCapabilities;
  /** Specifies the operating system settings used while creating the virtual machine. Some of the settings cannot be changed once VM is provisioned. */
  osProfile?: ComputeOSProfile;
  /** Specifies the network interfaces of the virtual machine. */
  networkProfile?: ComputeNetworkProfile;
  /** Specifies the Security related profile settings for the virtual machine. */
  securityProfile?: ComputeSecurityProfile;
  /** Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15. */
  diagnosticsProfile?: ComputeDiagnosticsProfile;
  /** Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Availability sets overview](https://docs.microsoft.com/azure/virtual-machines/availability-set-overview). For more information on Azure planned maintenance, see [Maintenance and updates for Virtual Machines in Azure](https://docs.microsoft.com/azure/virtual-machines/maintenance-and-updates). Currently, a VM can only be added to availability set at creation time. The availability set to which the VM is being added should be under the same resource group as the availability set resource. An existing VM cannot be added to an availability set. This property cannot exist along with a non-null properties.virtualMachineScaleSet reference. */
  availabilitySet?: CommonSubResource;
  /** Specifies information about the virtual machine scale set that the virtual machine should be assigned to. Virtual machines specified in the same virtual machine scale set are allocated to different nodes to maximize availability. Currently, a VM can only be added to virtual machine scale set at creation time. An existing VM cannot be added to a virtual machine scale set. This property cannot exist along with a non-null properties.availabilitySet reference. Minimum api‐version: 2019‐03‐01. */
  virtualMachineScaleSet?: CommonSubResource;
  /** Specifies information about the proximity placement group that the virtual machine should be assigned to. Minimum api-version: 2018-04-01. */
  proximityPlacementGroup?: CommonSubResource;
  /** Specifies the priority for the virtual machine. Minimum api-version: 2019-03-01 */
  priority?: ComputeVirtualMachinePriorityTypes;
  /** Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. For Azure Spot virtual machines, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2019-03-01. For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview. */
  evictionPolicy?: ComputeVirtualMachineEvictionPolicyTypes;
  /** Specifies the billing related details of a Azure Spot virtual machine. Minimum api-version: 2019-03-01. */
  billingProfile?: ComputeBillingProfile;
  /** Specifies information about the dedicated host that the virtual machine resides in. Minimum api-version: 2018-10-01. */
  host?: CommonSubResource;
  /** Specifies information about the dedicated host group that the virtual machine resides in. **Note:** User cannot specify both host and hostGroup properties. Minimum api-version: 2020-06-01. */
  hostGroup?: CommonSubResource;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: string;
  /** The virtual machine instance view. */
  readonly instanceView?: ComputeVirtualMachineInstanceView;
  /** Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15 */
  licenseType?: string;
  /** Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands. */
  readonly vmId?: string;
  /** Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). Minimum api-version: 2020-06-01. */
  extensionsTimeBudget?: string;
  /** Specifies the scale set logical fault domain into which the Virtual Machine will be created. By default, the Virtual Machine will by automatically assigned to a fault domain that best maintains balance across available fault domains. This is applicable only if the 'virtualMachineScaleSet' property of this Virtual Machine is set. The Virtual Machine Scale Set that is referenced, must have 'platformFaultDomainCount' greater than 1. This property cannot be updated once the Virtual Machine is created. Fault domain assignment can be viewed in the Virtual Machine Instance View. Minimum api‐version: 2020‐12‐01. */
  platformFaultDomain?: number;
  /** Specifies Scheduled Event related configurations. */
  scheduledEventsProfile?: ComputeScheduledEventsProfile;
  /** UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum api-version: 2021-03-01. */
  userData?: string;
  /** Specifies information about the capacity reservation that is used to allocate virtual machine. Minimum api-version: 2021-04-01. */
  capacityReservation?: ComputeCapacityReservationProfile;
  /** Specifies the gallery applications that should be made available to the VM/VMSS. */
  applicationProfile?: ComputeApplicationProfile;
  /** Specifies the time at which the Virtual Machine resource was created. Minimum api-version: 2021-11-01. */
  readonly timeCreated?: Date;
}

export function computeVirtualMachineUpdateSerializer(item: ComputeVirtualMachineUpdate): any {
  return {
    tags: item["tags"],
    plan: !item["plan"] ? item["plan"] : computePlanSerializer(item["plan"]),
    properties: areAllPropsUndefined(item, [
      "hardwareProfile",
      "scheduledEventsPolicy",
      "storageProfile",
      "additionalCapabilities",
      "osProfile",
      "networkProfile",
      "securityProfile",
      "diagnosticsProfile",
      "availabilitySet",
      "virtualMachineScaleSet",
      "proximityPlacementGroup",
      "priority",
      "evictionPolicy",
      "billingProfile",
      "host",
      "hostGroup",
      "licenseType",
      "extensionsTimeBudget",
      "platformFaultDomain",
      "scheduledEventsProfile",
      "userData",
      "capacityReservation",
      "applicationProfile",
    ])
      ? undefined
      : _virtualMachineUpdatePropertiesSerializer(item),
    identity: !item["identity"]
      ? item["identity"]
      : computeVirtualMachineIdentitySerializer(item["identity"]),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
  };
}

/** The List Virtual Machine operation response. */
export interface _ComputeVirtualMachineListResult {
  /** The list of virtual machines. */
  value: ComputeVirtualMachine[];
  /** The URI to fetch the next page of VMs. Call ListNext() with this URI to fetch the next page of Virtual Machines. */
  nextLink?: string;
}

export function _computeVirtualMachineListResultDeserializer(
  item: any,
): _ComputeVirtualMachineListResult {
  return {
    value: computeVirtualMachineArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeVirtualMachineArraySerializer(result: Array<ComputeVirtualMachine>): any[] {
  return result.map((item) => {
    return computeVirtualMachineSerializer(item);
  });
}

export function computeVirtualMachineArrayDeserializer(
  result: Array<ComputeVirtualMachine>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineDeserializer(item);
  });
}

/** Describes the properties of an AssessPatches result. */
export interface ComputeVirtualMachineAssessPatchesResult {
  /** The overall success or failure status of the operation. It remains "InProgress" until the operation completes. At that point it will become "Unknown", "Failed", "Succeeded", or "CompletedWithWarnings." */
  readonly status?: ComputePatchOperationStatus;
  /** The activity ID of the operation that produced this result. It is used to correlate across CRP and extension logs. */
  readonly assessmentActivityId?: string;
  /** The overall reboot status of the VM. It will be true when partially installed patches require a reboot to complete installation but the reboot has not yet occurred. */
  readonly rebootPending?: boolean;
  /** The number of critical or security patches that have been detected as available and not yet installed. */
  readonly criticalAndSecurityPatchCount?: number;
  /** The number of all available patches excluding critical and security. */
  readonly otherPatchCount?: number;
  /** The UTC timestamp when the operation began. */
  readonly startDateTime?: Date;
  /** The list of patches that have been detected as available for installation. */
  readonly availablePatches?: ComputeVirtualMachineSoftwarePatchProperties[];
  /** The errors that were encountered during execution of the operation. The details array contains the list of them. */
  readonly error?: CommonApiError;
}

export function computeVirtualMachineAssessPatchesResultDeserializer(
  item: any,
): ComputeVirtualMachineAssessPatchesResult {
  return {
    status: item["status"],
    assessmentActivityId: item["assessmentActivityId"],
    rebootPending: item["rebootPending"],
    criticalAndSecurityPatchCount: item["criticalAndSecurityPatchCount"],
    otherPatchCount: item["otherPatchCount"],
    startDateTime: !item["startDateTime"] ? item["startDateTime"] : new Date(item["startDateTime"]),
    availablePatches: !item["availablePatches"]
      ? item["availablePatches"]
      : computeVirtualMachineSoftwarePatchPropertiesArrayDeserializer(item["availablePatches"]),
    error: !item["error"] ? item["error"] : commonApiErrorDeserializer(item["error"]),
  };
}

export function computeVirtualMachineSoftwarePatchPropertiesArrayDeserializer(
  result: Array<ComputeVirtualMachineSoftwarePatchProperties>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineSoftwarePatchPropertiesDeserializer(item);
  });
}

/** Describes the properties of a Virtual Machine software patch. */
export interface ComputeVirtualMachineSoftwarePatchProperties {
  /** A unique identifier for the patch. */
  readonly patchId?: string;
  /** The friendly name of the patch. */
  readonly name?: string;
  /** The version number of the patch. This property applies only to Linux patches. */
  readonly version?: string;
  /** The KBID of the patch. Only applies to Windows patches. */
  readonly kbId?: string;
  /** The classification(s) of the patch as provided by the patch publisher. */
  readonly classifications?: string[];
  /** Describes the reboot requirements of the patch. */
  readonly rebootBehavior?: ComputeVMGuestPatchRebootBehavior;
  /** The activity ID of the operation that produced this result. It is used to correlate across CRP and extension logs. */
  readonly activityId?: string;
  /** The UTC timestamp when the repository published this patch. */
  readonly publishedDate?: Date;
  /** The UTC timestamp of the last update to this patch record. */
  readonly lastModifiedDateTime?: Date;
  /** Describes the availability of a given patch. */
  readonly assessmentState?: ComputePatchAssessmentState;
}

export function computeVirtualMachineSoftwarePatchPropertiesDeserializer(
  item: any,
): ComputeVirtualMachineSoftwarePatchProperties {
  return {
    patchId: item["patchId"],
    name: item["name"],
    version: item["version"],
    kbId: item["kbId"],
    classifications: !item["classifications"]
      ? item["classifications"]
      : item["classifications"].map((p: any) => {
          return p;
        }),
    rebootBehavior: item["rebootBehavior"],
    activityId: item["activityId"],
    publishedDate: !item["publishedDate"] ? item["publishedDate"] : new Date(item["publishedDate"]),
    lastModifiedDateTime: !item["lastModifiedDateTime"]
      ? item["lastModifiedDateTime"]
      : new Date(item["lastModifiedDateTime"]),
    assessmentState: item["assessmentState"],
  };
}

/** Describes the reboot requirements of the patch. */
export enum KnownComputeVMGuestPatchRebootBehavior {
  /** Unknown */
  Unknown = "Unknown",
  /** NeverReboots */
  NeverReboots = "NeverReboots",
  /** AlwaysRequiresReboot */
  AlwaysRequiresReboot = "AlwaysRequiresReboot",
  /** CanRequestReboot */
  CanRequestReboot = "CanRequestReboot",
}

/**
 * Describes the reboot requirements of the patch. \
 * {@link KnownComputeVMGuestPatchRebootBehavior} can be used interchangeably with ComputeVMGuestPatchRebootBehavior,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **NeverReboots** \
 * **AlwaysRequiresReboot** \
 * **CanRequestReboot**
 */
export type ComputeVMGuestPatchRebootBehavior = string;

/** Describes the availability of a given patch. */
export enum KnownComputePatchAssessmentState {
  /** Unknown */
  Unknown = "Unknown",
  /** Available */
  Available = "Available",
}

/**
 * Describes the availability of a given patch. \
 * {@link KnownComputePatchAssessmentState} can be used interchangeably with ComputePatchAssessmentState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Available**
 */
export type ComputePatchAssessmentState = string;

/** Specifies the input for attaching and detaching a list of managed data disks. */
export interface ComputeAttachDetachDataDisksRequest {
  /** The list of managed data disks to be attached. */
  dataDisksToAttach?: ComputeDataDisksToAttach[];
  /** The list of managed data disks to be detached. */
  dataDisksToDetach?: ComputeDataDisksToDetach[];
}

export function computeAttachDetachDataDisksRequestSerializer(
  item: ComputeAttachDetachDataDisksRequest,
): any {
  return {
    dataDisksToAttach: !item["dataDisksToAttach"]
      ? item["dataDisksToAttach"]
      : computeDataDisksToAttachArraySerializer(item["dataDisksToAttach"]),
    dataDisksToDetach: !item["dataDisksToDetach"]
      ? item["dataDisksToDetach"]
      : computeDataDisksToDetachArraySerializer(item["dataDisksToDetach"]),
  };
}

export function computeDataDisksToAttachArraySerializer(
  result: Array<ComputeDataDisksToAttach>,
): any[] {
  return result.map((item) => {
    return computeDataDisksToAttachSerializer(item);
  });
}

/** Describes the data disk to be attached. */
export interface ComputeDataDisksToAttach {
  /** ID of the managed data disk. */
  diskId: string;
  /** The logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. If not specified, lun would be auto assigned. */
  lun?: number;
  /** Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The defaulting behavior is: **None for Standard storage. ReadOnly for Premium storage.** */
  caching?: ComputeCachingTypes;
  /** Specifies whether data disk should be deleted or detached upon VM deletion. Possible values are: **Delete.** If this value is used, the data disk is deleted when VM is deleted. **Detach.** If this value is used, the data disk is retained after VM is deleted. The default value is set to **Detach**. */
  deleteOption?: ComputeDiskDeleteOptionTypes;
  /** Specifies the customer managed disk encryption set resource id for the managed disk. */
  diskEncryptionSet?: ComputeDiskEncryptionSetParameters;
  /** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
  writeAcceleratorEnabled?: boolean;
}

export function computeDataDisksToAttachSerializer(item: ComputeDataDisksToAttach): any {
  return {
    diskId: item["diskId"],
    lun: item["lun"],
    caching: item["caching"],
    deleteOption: item["deleteOption"],
    diskEncryptionSet: !item["diskEncryptionSet"]
      ? item["diskEncryptionSet"]
      : computeDiskEncryptionSetParametersSerializer(item["diskEncryptionSet"]),
    writeAcceleratorEnabled: item["writeAcceleratorEnabled"],
  };
}

export function computeDataDisksToDetachArraySerializer(
  result: Array<ComputeDataDisksToDetach>,
): any[] {
  return result.map((item) => {
    return computeDataDisksToDetachSerializer(item);
  });
}

/** Describes the data disk to be detached. */
export interface ComputeDataDisksToDetach {
  /** ID of the managed data disk. */
  diskId: string;
  /** Supported options available for Detach of a disk from a VM. Refer to DetachOption object reference for more details. */
  detachOption?: ComputeDiskDetachOptionTypes;
}

export function computeDataDisksToDetachSerializer(item: ComputeDataDisksToDetach): any {
  return { diskId: item["diskId"], detachOption: item["detachOption"] };
}

/** Capture Virtual Machine parameters. */
export interface ComputeVirtualMachineCaptureParameters {
  /** The captured virtual hard disk's name prefix. */
  vhdPrefix: string;
  /** The destination container name. */
  destinationContainerName: string;
  /** Specifies whether to overwrite the destination virtual hard disk, in case of conflict. */
  overwriteVhds: boolean;
}

export function computeVirtualMachineCaptureParametersSerializer(
  item: ComputeVirtualMachineCaptureParameters,
): any {
  return {
    vhdPrefix: item["vhdPrefix"],
    destinationContainerName: item["destinationContainerName"],
    overwriteVhds: item["overwriteVhds"],
  };
}

/** Output of virtual machine capture operation. */
export interface ComputeVirtualMachineCaptureResult extends CommonSubResource {
  /** the schema of the captured virtual machine */
  readonly schema?: string;
  /** the version of the content */
  readonly contentVersion?: string;
  /** parameters of the captured virtual machine */
  readonly parameters?: any;
  /** a list of resource items of the captured virtual machine */
  readonly resources?: any[];
}

export function computeVirtualMachineCaptureResultDeserializer(
  item: any,
): ComputeVirtualMachineCaptureResult {
  return {
    id: item["id"],
    schema: item["$schema"],
    contentVersion: item["contentVersion"],
    parameters: item["parameters"],
    resources: !item["resources"]
      ? item["resources"]
      : item["resources"].map((p: any) => {
          return p;
        }),
  };
}

/** Input for InstallPatches as directly received by the API */
export interface ComputeVirtualMachineInstallPatchesParameters {
  /** Specifies the maximum amount of time that the operation will run. It must be an ISO 8601-compliant duration string such as PT4H (4 hours) */
  maximumDuration?: string;
  /** Defines when it is acceptable to reboot a VM during a software update operation. */
  rebootSetting: ComputeVMGuestPatchRebootSetting;
  /** Input for InstallPatches on a Windows VM, as directly received by the API */
  windowsParameters?: ComputeWindowsParameters;
  /** Input for InstallPatches on a Linux VM, as directly received by the API */
  linuxParameters?: ComputeLinuxParameters;
}

export function computeVirtualMachineInstallPatchesParametersSerializer(
  item: ComputeVirtualMachineInstallPatchesParameters,
): any {
  return {
    maximumDuration: item["maximumDuration"],
    rebootSetting: item["rebootSetting"],
    windowsParameters: !item["windowsParameters"]
      ? item["windowsParameters"]
      : computeWindowsParametersSerializer(item["windowsParameters"]),
    linuxParameters: !item["linuxParameters"]
      ? item["linuxParameters"]
      : computeLinuxParametersSerializer(item["linuxParameters"]),
  };
}

/** Defines when it is acceptable to reboot a VM during a software update operation. */
export enum KnownComputeVMGuestPatchRebootSetting {
  /** IfRequired */
  IfRequired = "IfRequired",
  /** Never */
  Never = "Never",
  /** Always */
  Always = "Always",
}

/**
 * Defines when it is acceptable to reboot a VM during a software update operation. \
 * {@link KnownComputeVMGuestPatchRebootSetting} can be used interchangeably with ComputeVMGuestPatchRebootSetting,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **IfRequired** \
 * **Never** \
 * **Always**
 */
export type ComputeVMGuestPatchRebootSetting = string;

/** Input for InstallPatches on a Windows VM, as directly received by the API */
export interface ComputeWindowsParameters {
  /** The update classifications to select when installing patches for Windows. */
  classificationsToInclude?: ComputeVMGuestPatchClassificationWindows[];
  /** Kbs to include in the patch operation */
  kbNumbersToInclude?: string[];
  /** Kbs to exclude in the patch operation */
  kbNumbersToExclude?: string[];
  /** Filters out Kbs that don't have an InstallationRebootBehavior of 'NeverReboots' when this is set to true. */
  excludeKbsRequiringReboot?: boolean;
  /** This is used to install patches that were published on or before this given max published date. */
  maxPatchPublishDate?: Date;
  /** This is used to include patches that match the given patch name masks. Alphanumeric strings and wildcard expressions consisting of * and ? are only supported as input values in the list. Null, empty and only whitespaces strings as inputs values are not supported. */
  patchNameMasksToInclude?: string[];
  /** This is used to exclude patches that match the given patch name masks. Alphanumeric strings and wildcard expressions consisting of * and ? are only supported as input values in the list. Null, empty and only whitespaces strings as inputs values are not supported. */
  patchNameMasksToExclude?: string[];
}

export function computeWindowsParametersSerializer(item: ComputeWindowsParameters): any {
  return {
    classificationsToInclude: !item["classificationsToInclude"]
      ? item["classificationsToInclude"]
      : item["classificationsToInclude"].map((p: any) => {
          return p;
        }),
    kbNumbersToInclude: !item["kbNumbersToInclude"]
      ? item["kbNumbersToInclude"]
      : item["kbNumbersToInclude"].map((p: any) => {
          return p;
        }),
    kbNumbersToExclude: !item["kbNumbersToExclude"]
      ? item["kbNumbersToExclude"]
      : item["kbNumbersToExclude"].map((p: any) => {
          return p;
        }),
    excludeKbsRequiringReboot: item["excludeKbsRequiringReboot"],
    maxPatchPublishDate: !item["maxPatchPublishDate"]
      ? item["maxPatchPublishDate"]
      : item["maxPatchPublishDate"].toISOString(),
    patchNameMasksToInclude: !item["patchNameMasksToInclude"]
      ? item["patchNameMasksToInclude"]
      : item["patchNameMasksToInclude"].map((p: any) => {
          return p;
        }),
    patchNameMasksToExclude: !item["patchNameMasksToExclude"]
      ? item["patchNameMasksToExclude"]
      : item["patchNameMasksToExclude"].map((p: any) => {
          return p;
        }),
  };
}

/** Known values of {@link VMGuestPatchClassificationWindows} that the service accepts. */
export enum KnownComputeVMGuestPatchClassificationWindows {
  /** Critical */
  Critical = "Critical",
  /** Security */
  Security = "Security",
  /** UpdateRollUp */
  UpdateRollUp = "UpdateRollUp",
  /** FeaturePack */
  FeaturePack = "FeaturePack",
  /** ServicePack */
  ServicePack = "ServicePack",
  /** Definition */
  Definition = "Definition",
  /** Tools */
  Tools = "Tools",
  /** Updates */
  Updates = "Updates",
}

/** Type of ComputeVMGuestPatchClassificationWindows */
export type ComputeVMGuestPatchClassificationWindows = string;

/** Input for InstallPatches on a Linux VM, as directly received by the API */
export interface ComputeLinuxParameters {
  /** The update classifications to select when installing patches for Linux. */
  classificationsToInclude?: ComputeVMGuestPatchClassificationLinux[];
  /** packages to include in the patch operation. Format: packageName_packageVersion */
  packageNameMasksToInclude?: string[];
  /** packages to exclude in the patch operation. Format: packageName_packageVersion */
  packageNameMasksToExclude?: string[];
  /** This is used as a maintenance run identifier for Auto VM Guest Patching in Linux. */
  maintenanceRunId?: string;
}

export function computeLinuxParametersSerializer(item: ComputeLinuxParameters): any {
  return {
    classificationsToInclude: !item["classificationsToInclude"]
      ? item["classificationsToInclude"]
      : item["classificationsToInclude"].map((p: any) => {
          return p;
        }),
    packageNameMasksToInclude: !item["packageNameMasksToInclude"]
      ? item["packageNameMasksToInclude"]
      : item["packageNameMasksToInclude"].map((p: any) => {
          return p;
        }),
    packageNameMasksToExclude: !item["packageNameMasksToExclude"]
      ? item["packageNameMasksToExclude"]
      : item["packageNameMasksToExclude"].map((p: any) => {
          return p;
        }),
    maintenanceRunId: item["maintenanceRunId"],
  };
}

/** Known values of {@link VMGuestPatchClassificationLinux} that the service accepts. */
export enum KnownComputeVMGuestPatchClassificationLinux {
  /** Critical */
  Critical = "Critical",
  /** Security */
  Security = "Security",
  /** Other */
  Other = "Other",
}

/** Type of ComputeVMGuestPatchClassificationLinux */
export type ComputeVMGuestPatchClassificationLinux = string;

/** The result summary of an installation operation. */
export interface ComputeVirtualMachineInstallPatchesResult {
  /** The overall success or failure status of the operation. It remains "InProgress" until the operation completes. At that point it will become "Failed", "Succeeded", "Unknown" or "CompletedWithWarnings." */
  readonly status?: ComputePatchOperationStatus;
  /** The activity ID of the operation that produced this result. It is used to correlate across CRP and extension logs. */
  readonly installationActivityId?: string;
  /** The reboot state of the VM following completion of the operation. */
  readonly rebootStatus?: ComputeVMGuestPatchRebootStatus;
  /** Whether the operation ran out of time before it completed all its intended actions. */
  readonly maintenanceWindowExceeded?: boolean;
  /** The number of patches that were not installed due to the user blocking their installation. */
  readonly excludedPatchCount?: number;
  /** The number of patches that were detected as available for install, but did not meet the operation's criteria. */
  readonly notSelectedPatchCount?: number;
  /** The number of patches that were identified as meeting the installation criteria, but were not able to be installed. Typically this happens when maintenanceWindowExceeded == true. */
  readonly pendingPatchCount?: number;
  /** The number of patches successfully installed. */
  readonly installedPatchCount?: number;
  /** The number of patches that could not be installed due to some issue. See errors for details. */
  readonly failedPatchCount?: number;
  /** The patches that were installed during the operation. */
  readonly patches?: ComputePatchInstallationDetail[];
  /** The UTC timestamp when the operation began. */
  readonly startDateTime?: Date;
  /** The errors that were encountered during execution of the operation. The details array contains the list of them. */
  readonly error?: CommonApiError;
}

export function computeVirtualMachineInstallPatchesResultDeserializer(
  item: any,
): ComputeVirtualMachineInstallPatchesResult {
  return {
    status: item["status"],
    installationActivityId: item["installationActivityId"],
    rebootStatus: item["rebootStatus"],
    maintenanceWindowExceeded: item["maintenanceWindowExceeded"],
    excludedPatchCount: item["excludedPatchCount"],
    notSelectedPatchCount: item["notSelectedPatchCount"],
    pendingPatchCount: item["pendingPatchCount"],
    installedPatchCount: item["installedPatchCount"],
    failedPatchCount: item["failedPatchCount"],
    patches: !item["patches"]
      ? item["patches"]
      : computePatchInstallationDetailArrayDeserializer(item["patches"]),
    startDateTime: !item["startDateTime"] ? item["startDateTime"] : new Date(item["startDateTime"]),
    error: !item["error"] ? item["error"] : commonApiErrorDeserializer(item["error"]),
  };
}

/** The reboot state of the VM following completion of the operation. */
export enum KnownComputeVMGuestPatchRebootStatus {
  /** Unknown */
  Unknown = "Unknown",
  /** NotNeeded */
  NotNeeded = "NotNeeded",
  /** Required */
  Required = "Required",
  /** Started */
  Started = "Started",
  /** Failed */
  Failed = "Failed",
  /** Completed */
  Completed = "Completed",
}

/**
 * The reboot state of the VM following completion of the operation. \
 * {@link KnownComputeVMGuestPatchRebootStatus} can be used interchangeably with ComputeVMGuestPatchRebootStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **NotNeeded** \
 * **Required** \
 * **Started** \
 * **Failed** \
 * **Completed**
 */
export type ComputeVMGuestPatchRebootStatus = string;

export function computePatchInstallationDetailArrayDeserializer(
  result: Array<ComputePatchInstallationDetail>,
): any[] {
  return result.map((item) => {
    return computePatchInstallationDetailDeserializer(item);
  });
}

/** Information about a specific patch that was encountered during an installation action. */
export interface ComputePatchInstallationDetail {
  /** A unique identifier for the patch. */
  readonly patchId?: string;
  /** The friendly name of the patch. */
  readonly name?: string;
  /** The version string of the package. It may conform to Semantic Versioning. Only applies to Linux. */
  readonly version?: string;
  /** The KBID of the patch. Only applies to Windows patches. */
  readonly kbId?: string;
  /** The classification(s) of the patch as provided by the patch publisher. */
  readonly classifications?: string[];
  /** The state of the patch after the installation operation completed. */
  readonly installationState?: ComputePatchInstallationState;
}

export function computePatchInstallationDetailDeserializer(
  item: any,
): ComputePatchInstallationDetail {
  return {
    patchId: item["patchId"],
    name: item["name"],
    version: item["version"],
    kbId: item["kbId"],
    classifications: !item["classifications"]
      ? item["classifications"]
      : item["classifications"].map((p: any) => {
          return p;
        }),
    installationState: item["installationState"],
  };
}

/** The state of the patch after the installation operation completed. */
export enum KnownComputePatchInstallationState {
  /** Unknown */
  Unknown = "Unknown",
  /** Installed */
  Installed = "Installed",
  /** Failed */
  Failed = "Failed",
  /** Excluded */
  Excluded = "Excluded",
  /** NotSelected */
  NotSelected = "NotSelected",
  /** Pending */
  Pending = "Pending",
}

/**
 * The state of the patch after the installation operation completed. \
 * {@link KnownComputePatchInstallationState} can be used interchangeably with ComputePatchInstallationState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Installed** \
 * **Failed** \
 * **Excluded** \
 * **NotSelected** \
 * **Pending**
 */
export type ComputePatchInstallationState = string;

/** The SAS URIs of the console screenshot and serial log blobs. */
export interface ComputeRetrieveBootDiagnosticsDataResult {
  /** The console screenshot blob URI */
  readonly consoleScreenshotBlobUri?: string;
  /** The serial console log blob URI. */
  readonly serialConsoleLogBlobUri?: string;
}

export function computeRetrieveBootDiagnosticsDataResultDeserializer(
  item: any,
): ComputeRetrieveBootDiagnosticsDataResult {
  return {
    consoleScreenshotBlobUri: item["consoleScreenshotBlobUri"],
    serialConsoleLogBlobUri: item["serialConsoleLogBlobUri"],
  };
}

/** The List Virtual Machine operation response. */
export interface _ComputeVirtualMachineSizeListResult {
  /** The list of virtual machine sizes. */
  value?: ComputeVirtualMachineSize[];
  /** The link to the next page of items. */
  nextLink?: string;
}

export function _computeVirtualMachineSizeListResultDeserializer(
  item: any,
): _ComputeVirtualMachineSizeListResult {
  return {
    value: !item["value"]
      ? item["value"]
      : computeVirtualMachineSizeArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeVirtualMachineSizeArrayDeserializer(
  result: Array<ComputeVirtualMachineSize>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineSizeDeserializer(item);
  });
}

/** Describes the properties of a VM size. */
export interface ComputeVirtualMachineSize {
  /** The name of the virtual machine size. */
  name?: string;
  /** The number of cores supported by the virtual machine size. For Constrained vCPU capable VM sizes, this number represents the total vCPUs of quota that the VM uses. For accurate vCPU count, please refer to https://docs.microsoft.com/azure/virtual-machines/constrained-vcpu or https://docs.microsoft.com/rest/api/compute/resourceskus/list */
  numberOfCores?: number;
  /** The OS disk size, in MB, allowed by the virtual machine size. */
  osDiskSizeInMB?: number;
  /** The resource disk size, in MB, allowed by the virtual machine size. */
  resourceDiskSizeInMB?: number;
  /** The amount of memory, in MB, supported by the virtual machine size. */
  memoryInMB?: number;
  /** The maximum number of data disks that can be attached to the virtual machine size. */
  maxDataDiskCount?: number;
}

export function computeVirtualMachineSizeDeserializer(item: any): ComputeVirtualMachineSize {
  return {
    name: item["name"],
    numberOfCores: item["numberOfCores"],
    osDiskSizeInMB: item["osDiskSizeInMB"],
    resourceDiskSizeInMB: item["resourceDiskSizeInMB"],
    memoryInMB: item["memoryInMB"],
    maxDataDiskCount: item["maxDataDiskCount"],
  };
}

/** Capture Virtual Machine parameters. */
export interface ComputeRunCommandInput {
  /** Specifies a commandId of predefined built-in script. Command IDs available for Linux are listed at https://aka.ms/RunCommandManagedLinux#available-commands, Windows at https://aka.ms/RunCommandManagedWindows#available-commands. */
  commandId: string;
  /** Optional. The script to be executed.  When this value is given, the given script will override the default script of the command. */
  script?: string[];
  /** The run command parameters. */
  parameters?: ComputeRunCommandInputParameter[];
}

export function computeRunCommandInputSerializer(item: ComputeRunCommandInput): any {
  return {
    commandId: item["commandId"],
    script: !item["script"]
      ? item["script"]
      : item["script"].map((p: any) => {
          return p;
        }),
    parameters: !item["parameters"]
      ? item["parameters"]
      : computeRunCommandInputParameterArraySerializer(item["parameters"]),
  };
}

export function computeRunCommandInputParameterArraySerializer(
  result: Array<ComputeRunCommandInputParameter>,
): any[] {
  return result.map((item) => {
    return computeRunCommandInputParameterSerializer(item);
  });
}

export function computeRunCommandInputParameterArrayDeserializer(
  result: Array<ComputeRunCommandInputParameter>,
): any[] {
  return result.map((item) => {
    return computeRunCommandInputParameterDeserializer(item);
  });
}

/** Describes the properties of a run command parameter. */
export interface ComputeRunCommandInputParameter {
  /** The run command parameter name. */
  name: string;
  /** The run command parameter value. */
  value: string;
}

export function computeRunCommandInputParameterSerializer(
  item: ComputeRunCommandInputParameter,
): any {
  return { name: item["name"], value: item["value"] };
}

export function computeRunCommandInputParameterDeserializer(
  item: any,
): ComputeRunCommandInputParameter {
  return {
    name: item["name"],
    value: item["value"],
  };
}

/** model interface ComputeRunCommandResult */
export interface ComputeRunCommandResult {
  /** Run command operation response. */
  value?: ComputeInstanceViewStatus[];
}

export function computeRunCommandResultDeserializer(item: any): ComputeRunCommandResult {
  return {
    value: !item["value"]
      ? item["value"]
      : computeInstanceViewStatusArrayDeserializer(item["value"]),
  };
}

/** The input of virtual machine migration from Availability Set to Flexible Virtual Machine Scale Set. */
export interface ComputeMigrateVMToVirtualMachineScaleSetInput {
  /** The target zone of VM migration to Flexible Virtual Machine Scale Set. */
  targetZone?: string;
  /** The target compute fault domain of VM migration to Flexible Virtual Machine Scale Set. */
  targetFaultDomain?: number;
  /** The target Virtual Machine size of VM migration to Flexible Virtual Machine Scale Set. */
  targetVMSize?: string;
}

export function computeMigrateVMToVirtualMachineScaleSetInputSerializer(
  item: ComputeMigrateVMToVirtualMachineScaleSetInput,
): any {
  return {
    targetZone: item["targetZone"],
    targetFaultDomain: item["targetFaultDomain"],
    targetVMSize: item["targetVMSize"],
  };
}

/** Describes a Virtual Machine Extension. */
export interface ComputeVirtualMachineExtensionUpdate extends ComputeUpdateResource {
  /** How the extension handler should be forced to update even if the extension configuration has not changed. */
  forceUpdateTag?: string;
  /** The name of the extension handler publisher. */
  publisher?: string;
  /** Specifies the type of the extension; an example is "CustomScriptExtension". */
  type?: string;
  /** Specifies the version of the script handler. */
  typeHandlerVersion?: string;
  /** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
  autoUpgradeMinorVersion?: boolean;
  /** Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available. */
  enableAutomaticUpgrade?: boolean;
  /** Json formatted public settings for the extension. */
  settings?: any;
  /** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
  protectedSettings?: any;
  /** Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false. */
  suppressFailures?: boolean;
  /** The extensions protected settings that are passed by reference, and consumed from key vault */
  protectedSettingsFromKeyVault?: ComputeKeyVaultSecretReference;
}

export function computeVirtualMachineExtensionUpdateSerializer(
  item: ComputeVirtualMachineExtensionUpdate,
): any {
  return {
    tags: item["tags"],
    properties: areAllPropsUndefined(item, [
      "forceUpdateTag",
      "publisher",
      "type",
      "typeHandlerVersion",
      "autoUpgradeMinorVersion",
      "enableAutomaticUpgrade",
      "settings",
      "protectedSettings",
      "suppressFailures",
      "protectedSettingsFromKeyVault",
    ])
      ? undefined
      : _virtualMachineExtensionUpdatePropertiesSerializer(item),
  };
}

/** The List Extension operation response */
export interface ComputeVirtualMachineExtensionsListResult {
  /** The list of extensions */
  value?: ComputeVirtualMachineExtension[];
}

export function computeVirtualMachineExtensionsListResultDeserializer(
  item: any,
): ComputeVirtualMachineExtensionsListResult {
  return {
    value: !item["value"]
      ? item["value"]
      : computeVirtualMachineExtensionArrayDeserializer(item["value"]),
  };
}

/** Describes a Virtual Machine Extension Image. */
export interface ComputeVirtualMachineExtensionImage extends TrackedResource {
  /** The operating system this extension supports. */
  operatingSystem?: string;
  /** The type of role (IaaS or PaaS) this extension supports. */
  computeRole?: string;
  /** The schema defined by publisher, where extension consumers should provide settings in a matching schema. */
  handlerSchema?: string;
  /** Whether the extension can be used on xRP VMScaleSets. By default existing extensions are usable on scalesets, but there might be cases where a publisher wants to explicitly indicate the extension is only enabled for CRP VMs but not VMSS. */
  vmScaleSetEnabled?: boolean;
  /** Whether the handler can support multiple extensions. */
  supportsMultipleExtensions?: boolean;
}

export function computeVirtualMachineExtensionImageDeserializer(
  item: any,
): ComputeVirtualMachineExtensionImage {
  return {
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    ...(!item["properties"]
      ? item["properties"]
      : _virtualMachineExtensionImagePropertiesDeserializer(item["properties"])),
  };
}

/** Describes the properties of a Virtual Machine Extension Image. */
export interface ComputeVirtualMachineExtensionImageProperties {
  /** The operating system this extension supports. */
  operatingSystem: string;
  /** The type of role (IaaS or PaaS) this extension supports. */
  computeRole: string;
  /** The schema defined by publisher, where extension consumers should provide settings in a matching schema. */
  handlerSchema: string;
  /** Whether the extension can be used on xRP VMScaleSets. By default existing extensions are usable on scalesets, but there might be cases where a publisher wants to explicitly indicate the extension is only enabled for CRP VMs but not VMSS. */
  vmScaleSetEnabled?: boolean;
  /** Whether the handler can support multiple extensions. */
  supportsMultipleExtensions?: boolean;
}

export function computeVirtualMachineExtensionImagePropertiesDeserializer(
  item: any,
): ComputeVirtualMachineExtensionImageProperties {
  return {
    operatingSystem: item["operatingSystem"],
    computeRole: item["computeRole"],
    handlerSchema: item["handlerSchema"],
    vmScaleSetEnabled: item["vmScaleSetEnabled"],
    supportsMultipleExtensions: item["supportsMultipleExtensions"],
  };
}

/** Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Availability sets overview](https://docs.microsoft.com/azure/virtual-machines/availability-set-overview). For more information on Azure planned maintenance, see [Maintenance and updates for Virtual Machines in Azure](https://docs.microsoft.com/azure/virtual-machines/maintenance-and-updates). Currently, a VM can only be added to an availability set at creation time. An existing VM cannot be added to an availability set. */
export interface ComputeAvailabilitySet extends TrackedResource {
  /** Sku of the availability set, only name is required to be set. See AvailabilitySetSkuTypes for possible set of values. Use 'Aligned' for virtual machines with managed disks and 'Classic' for virtual machines with unmanaged disks. Default value is 'Classic'. */
  sku?: ComputeSku;
  /** Update Domain count. */
  platformUpdateDomainCount?: number;
  /** Fault Domain count. */
  platformFaultDomainCount?: number;
  /** A list of references to all virtual machines in the availability set. */
  virtualMachines?: CommonSubResource[];
  /** Specifies information about the proximity placement group that the availability set should be assigned to. Minimum api-version: 2018-04-01. */
  proximityPlacementGroup?: CommonSubResource;
  /** The resource status information. */
  readonly statuses?: ComputeInstanceViewStatus[];
  /** Specifies Redeploy, Reboot and ScheduledEventsAdditionalPublishingTargets Scheduled Event related configurations for the availability set. */
  scheduledEventsPolicy?: ComputeScheduledEventsPolicy;
  /** Describes the migration properties on the Availability Set. */
  readonly virtualMachineScaleSetMigrationInfo?: ComputeVirtualMachineScaleSetMigrationInfo;
}

export function computeAvailabilitySetSerializer(item: ComputeAvailabilitySet): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, [
      "platformUpdateDomainCount",
      "platformFaultDomainCount",
      "virtualMachines",
      "proximityPlacementGroup",
      "scheduledEventsPolicy",
    ])
      ? undefined
      : _availabilitySetPropertiesSerializer(item),
    sku: !item["sku"] ? item["sku"] : computeSkuSerializer(item["sku"]),
  };
}

export function computeAvailabilitySetDeserializer(item: any): ComputeAvailabilitySet {
  return {
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    ...(!item["properties"]
      ? item["properties"]
      : _availabilitySetPropertiesDeserializer(item["properties"])),
    sku: !item["sku"] ? item["sku"] : computeSkuDeserializer(item["sku"]),
  };
}

/** The instance view of a resource. */
export interface ComputeAvailabilitySetProperties {
  /** Update Domain count. */
  platformUpdateDomainCount?: number;
  /** Fault Domain count. */
  platformFaultDomainCount?: number;
  /** A list of references to all virtual machines in the availability set. */
  virtualMachines?: CommonSubResource[];
  /** Specifies information about the proximity placement group that the availability set should be assigned to. Minimum api-version: 2018-04-01. */
  proximityPlacementGroup?: CommonSubResource;
  /** The resource status information. */
  readonly statuses?: ComputeInstanceViewStatus[];
  /** Specifies Redeploy, Reboot and ScheduledEventsAdditionalPublishingTargets Scheduled Event related configurations for the availability set. */
  scheduledEventsPolicy?: ComputeScheduledEventsPolicy;
  /** Describes the migration properties on the Availability Set. */
  readonly virtualMachineScaleSetMigrationInfo?: ComputeVirtualMachineScaleSetMigrationInfo;
}

export function computeAvailabilitySetPropertiesSerializer(
  item: ComputeAvailabilitySetProperties,
): any {
  return {
    platformUpdateDomainCount: item["platformUpdateDomainCount"],
    platformFaultDomainCount: item["platformFaultDomainCount"],
    virtualMachines: !item["virtualMachines"]
      ? item["virtualMachines"]
      : commonSubResourceArraySerializer(item["virtualMachines"]),
    proximityPlacementGroup: !item["proximityPlacementGroup"]
      ? item["proximityPlacementGroup"]
      : commonSubResourceSerializer(item["proximityPlacementGroup"]),
    scheduledEventsPolicy: !item["scheduledEventsPolicy"]
      ? item["scheduledEventsPolicy"]
      : computeScheduledEventsPolicySerializer(item["scheduledEventsPolicy"]),
  };
}

export function computeAvailabilitySetPropertiesDeserializer(
  item: any,
): ComputeAvailabilitySetProperties {
  return {
    platformUpdateDomainCount: item["platformUpdateDomainCount"],
    platformFaultDomainCount: item["platformFaultDomainCount"],
    virtualMachines: !item["virtualMachines"]
      ? item["virtualMachines"]
      : commonSubResourceArrayDeserializer(item["virtualMachines"]),
    proximityPlacementGroup: !item["proximityPlacementGroup"]
      ? item["proximityPlacementGroup"]
      : commonSubResourceDeserializer(item["proximityPlacementGroup"]),
    statuses: !item["statuses"]
      ? item["statuses"]
      : computeInstanceViewStatusArrayDeserializer(item["statuses"]),
    scheduledEventsPolicy: !item["scheduledEventsPolicy"]
      ? item["scheduledEventsPolicy"]
      : computeScheduledEventsPolicyDeserializer(item["scheduledEventsPolicy"]),
    virtualMachineScaleSetMigrationInfo: !item["virtualMachineScaleSetMigrationInfo"]
      ? item["virtualMachineScaleSetMigrationInfo"]
      : computeVirtualMachineScaleSetMigrationInfoDeserializer(
          item["virtualMachineScaleSetMigrationInfo"],
        ),
  };
}

/** Describes the Availability Set properties related to migration to Flexible Virtual Machine Scale Set. */
export interface ComputeVirtualMachineScaleSetMigrationInfo {
  /** Indicates the target Virtual Machine ScaleSet properties upon triggering a seamless migration without downtime of the VMs via the ConvertToVirtualMachineScaleSet API. */
  readonly defaultVirtualMachineScaleSetInfo?: ComputeDefaultVirtualMachineScaleSetInfo;
  /** Specifies the Virtual Machine Scale Set that the Availability Set is migrated to. */
  readonly migrateToVirtualMachineScaleSet?: CommonSubResource;
}

export function computeVirtualMachineScaleSetMigrationInfoDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetMigrationInfo {
  return {
    defaultVirtualMachineScaleSetInfo: !item["defaultVirtualMachineScaleSetInfo"]
      ? item["defaultVirtualMachineScaleSetInfo"]
      : computeDefaultVirtualMachineScaleSetInfoDeserializer(
          item["defaultVirtualMachineScaleSetInfo"],
        ),
    migrateToVirtualMachineScaleSet: !item["migrateToVirtualMachineScaleSet"]
      ? item["migrateToVirtualMachineScaleSet"]
      : commonSubResourceDeserializer(item["migrateToVirtualMachineScaleSet"]),
  };
}

/** Indicates the target Virtual Machine ScaleSet properties upon triggering a seamless migration without downtime of the VMs via the ConvertToVirtualMachineScaleSet API. */
export interface ComputeDefaultVirtualMachineScaleSetInfo {
  /** Indicates if the the maximum capacity of the default migrated Virtual Machine Scale Set after its migration will be constrained to a limited number of VMs. */
  readonly constrainedMaximumCapacity?: boolean;
  /** The default Virtual Machine ScaleSet Uri that the Availability Set will be moved to upon triggering a seamless migration via the ConvertToVirtualMachineScaleSet API. */
  readonly defaultVirtualMachineScaleSet?: CommonSubResource;
}

export function computeDefaultVirtualMachineScaleSetInfoDeserializer(
  item: any,
): ComputeDefaultVirtualMachineScaleSetInfo {
  return {
    constrainedMaximumCapacity: item["constrainedMaximumCapacity"],
    defaultVirtualMachineScaleSet: !item["defaultVirtualMachineScaleSet"]
      ? item["defaultVirtualMachineScaleSet"]
      : commonSubResourceDeserializer(item["defaultVirtualMachineScaleSet"]),
  };
}

/** Specifies information about the availability set that the virtual machine should be assigned to. Only tags may be updated. */
export interface ComputeAvailabilitySetUpdate extends ComputeUpdateResource {
  /** Sku of the availability set */
  sku?: ComputeSku;
  /** Update Domain count. */
  platformUpdateDomainCount?: number;
  /** Fault Domain count. */
  platformFaultDomainCount?: number;
  /** A list of references to all virtual machines in the availability set. */
  virtualMachines?: CommonSubResource[];
  /** Specifies information about the proximity placement group that the availability set should be assigned to. Minimum api-version: 2018-04-01. */
  proximityPlacementGroup?: CommonSubResource;
  /** The resource status information. */
  readonly statuses?: ComputeInstanceViewStatus[];
  /** Specifies Redeploy, Reboot and ScheduledEventsAdditionalPublishingTargets Scheduled Event related configurations for the availability set. */
  scheduledEventsPolicy?: ComputeScheduledEventsPolicy;
  /** Describes the migration properties on the Availability Set. */
  readonly virtualMachineScaleSetMigrationInfo?: ComputeVirtualMachineScaleSetMigrationInfo;
}

export function computeAvailabilitySetUpdateSerializer(item: ComputeAvailabilitySetUpdate): any {
  return {
    tags: item["tags"],
    properties: areAllPropsUndefined(item, [
      "platformUpdateDomainCount",
      "platformFaultDomainCount",
      "virtualMachines",
      "proximityPlacementGroup",
      "scheduledEventsPolicy",
    ])
      ? undefined
      : _availabilitySetUpdatePropertiesSerializer(item),
    sku: !item["sku"] ? item["sku"] : computeSkuSerializer(item["sku"]),
  };
}

/** The List Availability Set operation response. */
export interface _ComputeAvailabilitySetListResult {
  /** The list of availability sets. */
  value: ComputeAvailabilitySet[];
  /** The URI to fetch the next page of AvailabilitySets. Call ListNext() with this URI to fetch the next page of AvailabilitySets. */
  nextLink?: string;
}

export function _computeAvailabilitySetListResultDeserializer(
  item: any,
): _ComputeAvailabilitySetListResult {
  return {
    value: computeAvailabilitySetArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeAvailabilitySetArraySerializer(
  result: Array<ComputeAvailabilitySet>,
): any[] {
  return result.map((item) => {
    return computeAvailabilitySetSerializer(item);
  });
}

export function computeAvailabilitySetArrayDeserializer(
  result: Array<ComputeAvailabilitySet>,
): any[] {
  return result.map((item) => {
    return computeAvailabilitySetDeserializer(item);
  });
}

/** Describes the Virtual Machine Scale Set to migrate from Availability Set. */
export interface ComputeMigrateToVirtualMachineScaleSetInput {
  /** Specifies information about the Virtual Machine Scale Set that the Availability Set should be migrated to. Minimum api‐version: 2024‐11‐01. */
  virtualMachineScaleSetFlexible: CommonSubResource;
}

export function computeMigrateToVirtualMachineScaleSetInputSerializer(
  item: ComputeMigrateToVirtualMachineScaleSetInput,
): any {
  return {
    virtualMachineScaleSetFlexible: commonSubResourceSerializer(
      item["virtualMachineScaleSetFlexible"],
    ),
  };
}

/** Describes the Virtual Machine Scale Set to convert from Availability Set. */
export interface ComputeConvertToVirtualMachineScaleSetInput {
  /** Specifies information about the Virtual Machine Scale Set that the Availability Set should be converted to. */
  virtualMachineScaleSetName?: string;
}

export function computeConvertToVirtualMachineScaleSetInputSerializer(
  item: ComputeConvertToVirtualMachineScaleSetInput,
): any {
  return { virtualMachineScaleSetName: item["virtualMachineScaleSetName"] };
}

/** Specifies information about the proximity placement group. */
export interface ComputeProximityPlacementGroup extends TrackedResource {
  /** The availability zones. */
  zones?: string[];
  /** Specifies the type of the proximity placement group. Possible values are: **Standard** : Co-locate resources within an Azure region or Availability Zone. **Ultra** : For future use. */
  proximityPlacementGroupType?: ComputeProximityPlacementGroupType;
  /** A list of references to all virtual machines in the proximity placement group. */
  readonly virtualMachines?: ComputeSubResourceWithColocationStatus[];
  /** A list of references to all virtual machine scale sets in the proximity placement group. */
  readonly virtualMachineScaleSets?: ComputeSubResourceWithColocationStatus[];
  /** A list of references to all availability sets in the proximity placement group. */
  readonly availabilitySets?: ComputeSubResourceWithColocationStatus[];
  /** Describes colocation status of the Proximity Placement Group. */
  colocationStatus?: ComputeInstanceViewStatus;
  /** Specifies the user intent of the proximity placement group. */
  intent?: ComputeProximityPlacementGroupPropertiesIntent;
}

export function computeProximityPlacementGroupSerializer(
  item: ComputeProximityPlacementGroup,
): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, [
      "proximityPlacementGroupType",
      "colocationStatus",
      "intent",
    ])
      ? undefined
      : _proximityPlacementGroupPropertiesSerializer(item),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
  };
}

export function computeProximityPlacementGroupDeserializer(
  item: any,
): ComputeProximityPlacementGroup {
  return {
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    ...(!item["properties"]
      ? item["properties"]
      : _proximityPlacementGroupPropertiesDeserializer(item["properties"])),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
  };
}

/** Describes the properties of a Proximity Placement Group. */
export interface ComputeProximityPlacementGroupProperties {
  /** Specifies the type of the proximity placement group. Possible values are: **Standard** : Co-locate resources within an Azure region or Availability Zone. **Ultra** : For future use. */
  proximityPlacementGroupType?: ComputeProximityPlacementGroupType;
  /** A list of references to all virtual machines in the proximity placement group. */
  readonly virtualMachines?: ComputeSubResourceWithColocationStatus[];
  /** A list of references to all virtual machine scale sets in the proximity placement group. */
  readonly virtualMachineScaleSets?: ComputeSubResourceWithColocationStatus[];
  /** A list of references to all availability sets in the proximity placement group. */
  readonly availabilitySets?: ComputeSubResourceWithColocationStatus[];
  /** Describes colocation status of the Proximity Placement Group. */
  colocationStatus?: ComputeInstanceViewStatus;
  /** Specifies the user intent of the proximity placement group. */
  intent?: ComputeProximityPlacementGroupPropertiesIntent;
}

export function computeProximityPlacementGroupPropertiesSerializer(
  item: ComputeProximityPlacementGroupProperties,
): any {
  return {
    proximityPlacementGroupType: item["proximityPlacementGroupType"],
    colocationStatus: !item["colocationStatus"]
      ? item["colocationStatus"]
      : computeInstanceViewStatusSerializer(item["colocationStatus"]),
    intent: !item["intent"]
      ? item["intent"]
      : computeProximityPlacementGroupPropertiesIntentSerializer(item["intent"]),
  };
}

export function computeProximityPlacementGroupPropertiesDeserializer(
  item: any,
): ComputeProximityPlacementGroupProperties {
  return {
    proximityPlacementGroupType: item["proximityPlacementGroupType"],
    virtualMachines: !item["virtualMachines"]
      ? item["virtualMachines"]
      : computeSubResourceWithColocationStatusArrayDeserializer(item["virtualMachines"]),
    virtualMachineScaleSets: !item["virtualMachineScaleSets"]
      ? item["virtualMachineScaleSets"]
      : computeSubResourceWithColocationStatusArrayDeserializer(item["virtualMachineScaleSets"]),
    availabilitySets: !item["availabilitySets"]
      ? item["availabilitySets"]
      : computeSubResourceWithColocationStatusArrayDeserializer(item["availabilitySets"]),
    colocationStatus: !item["colocationStatus"]
      ? item["colocationStatus"]
      : computeInstanceViewStatusDeserializer(item["colocationStatus"]),
    intent: !item["intent"]
      ? item["intent"]
      : computeProximityPlacementGroupPropertiesIntentDeserializer(item["intent"]),
  };
}

/** Specifies the type of the proximity placement group. Possible values are: **Standard** : Co-locate resources within an Azure region or Availability Zone. **Ultra** : For future use. */
export enum KnownComputeProximityPlacementGroupType {
  /** Standard */
  Standard = "Standard",
  /** Ultra */
  Ultra = "Ultra",
}

/**
 * Specifies the type of the proximity placement group. Possible values are: **Standard** : Co-locate resources within an Azure region or Availability Zone. **Ultra** : For future use. \
 * {@link KnownComputeProximityPlacementGroupType} can be used interchangeably with ComputeProximityPlacementGroupType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard** \
 * **Ultra**
 */
export type ComputeProximityPlacementGroupType = string;

export function computeSubResourceWithColocationStatusArrayDeserializer(
  result: Array<ComputeSubResourceWithColocationStatus>,
): any[] {
  return result.map((item) => {
    return computeSubResourceWithColocationStatusDeserializer(item);
  });
}

/** model interface ComputeSubResourceWithColocationStatus */
export interface ComputeSubResourceWithColocationStatus extends CommonSubResource {
  /** Describes colocation status of a resource in the Proximity Placement Group. */
  colocationStatus?: ComputeInstanceViewStatus;
}

export function computeSubResourceWithColocationStatusDeserializer(
  item: any,
): ComputeSubResourceWithColocationStatus {
  return {
    id: item["id"],
    colocationStatus: !item["colocationStatus"]
      ? item["colocationStatus"]
      : computeInstanceViewStatusDeserializer(item["colocationStatus"]),
  };
}

/** Specifies the user intent of the proximity placement group. */
export interface ComputeProximityPlacementGroupPropertiesIntent {
  /** Specifies possible sizes of virtual machines that can be created in the proximity placement group. */
  vmSizes?: string[];
}

export function computeProximityPlacementGroupPropertiesIntentSerializer(
  item: ComputeProximityPlacementGroupPropertiesIntent,
): any {
  return {
    vmSizes: !item["vmSizes"]
      ? item["vmSizes"]
      : item["vmSizes"].map((p: any) => {
          return p;
        }),
  };
}

export function computeProximityPlacementGroupPropertiesIntentDeserializer(
  item: any,
): ComputeProximityPlacementGroupPropertiesIntent {
  return {
    vmSizes: !item["vmSizes"]
      ? item["vmSizes"]
      : item["vmSizes"].map((p: any) => {
          return p;
        }),
  };
}

/** Specifies information about the proximity placement group. */
export interface ComputeProximityPlacementGroupUpdate extends ComputeUpdateResource {}

export function computeProximityPlacementGroupUpdateSerializer(
  item: ComputeProximityPlacementGroupUpdate,
): any {
  return { tags: item["tags"] };
}

/** The List Proximity Placement Group operation response. */
export interface _ComputeProximityPlacementGroupListResult {
  /** The list of proximity placement groups. */
  value: ComputeProximityPlacementGroup[];
  /** The URI to fetch the next page of proximity placement groups. */
  nextLink?: string;
}

export function _computeProximityPlacementGroupListResultDeserializer(
  item: any,
): _ComputeProximityPlacementGroupListResult {
  return {
    value: computeProximityPlacementGroupArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeProximityPlacementGroupArraySerializer(
  result: Array<ComputeProximityPlacementGroup>,
): any[] {
  return result.map((item) => {
    return computeProximityPlacementGroupSerializer(item);
  });
}

export function computeProximityPlacementGroupArrayDeserializer(
  result: Array<ComputeProximityPlacementGroup>,
): any[] {
  return result.map((item) => {
    return computeProximityPlacementGroupDeserializer(item);
  });
}

/** Specifies information about the dedicated host group that the dedicated hosts should be assigned to. Currently, a dedicated host can only be added to a dedicated host group at creation time. An existing dedicated host cannot be added to another dedicated host group. */
export interface ComputeDedicatedHostGroup extends TrackedResource {
  /** The availability zones. */
  zones?: string[];
  /** Number of fault domains that the host group can span. */
  platformFaultDomainCount?: number;
  /** A list of references to all dedicated hosts in the dedicated host group. */
  readonly hosts?: CommonSubResourceReadOnly[];
  /** The dedicated host group instance view, which has the list of instance view of the dedicated hosts under the dedicated host group. */
  readonly instanceView?: ComputeDedicatedHostGroupInstanceView;
  /** Specifies whether virtual machines or virtual machine scale sets can be placed automatically on the dedicated host group. Automatic placement means resources are allocated on dedicated hosts, that are chosen by Azure, under the dedicated host group. The value is defaulted to 'false' when not provided. Minimum api-version: 2020-06-01. */
  supportAutomaticPlacement?: boolean;
  /** Enables or disables a capability on the dedicated host group. Minimum api-version: 2022-03-01. */
  additionalCapabilities?: ComputeDedicatedHostGroupPropertiesAdditionalCapabilities;
}

export function computeDedicatedHostGroupSerializer(item: ComputeDedicatedHostGroup): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, [
      "platformFaultDomainCount",
      "supportAutomaticPlacement",
      "additionalCapabilities",
    ])
      ? undefined
      : _dedicatedHostGroupPropertiesSerializer(item),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
  };
}

export function computeDedicatedHostGroupDeserializer(item: any): ComputeDedicatedHostGroup {
  return {
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    ...(!item["properties"]
      ? item["properties"]
      : _dedicatedHostGroupPropertiesDeserializer(item["properties"])),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
  };
}

/** Dedicated Host Group Properties. */
export interface ComputeDedicatedHostGroupProperties {
  /** Number of fault domains that the host group can span. */
  platformFaultDomainCount: number;
  /** A list of references to all dedicated hosts in the dedicated host group. */
  readonly hosts?: CommonSubResourceReadOnly[];
  /** The dedicated host group instance view, which has the list of instance view of the dedicated hosts under the dedicated host group. */
  readonly instanceView?: ComputeDedicatedHostGroupInstanceView;
  /** Specifies whether virtual machines or virtual machine scale sets can be placed automatically on the dedicated host group. Automatic placement means resources are allocated on dedicated hosts, that are chosen by Azure, under the dedicated host group. The value is defaulted to 'false' when not provided. Minimum api-version: 2020-06-01. */
  supportAutomaticPlacement?: boolean;
  /** Enables or disables a capability on the dedicated host group. Minimum api-version: 2022-03-01. */
  additionalCapabilities?: ComputeDedicatedHostGroupPropertiesAdditionalCapabilities;
}

export function computeDedicatedHostGroupPropertiesSerializer(
  item: ComputeDedicatedHostGroupProperties,
): any {
  return {
    platformFaultDomainCount: item["platformFaultDomainCount"],
    supportAutomaticPlacement: item["supportAutomaticPlacement"],
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeDedicatedHostGroupPropertiesAdditionalCapabilitiesSerializer(
          item["additionalCapabilities"],
        ),
  };
}

export function computeDedicatedHostGroupPropertiesDeserializer(
  item: any,
): ComputeDedicatedHostGroupProperties {
  return {
    platformFaultDomainCount: item["platformFaultDomainCount"],
    hosts: !item["hosts"]
      ? item["hosts"]
      : commonSubResourceReadOnlyArrayDeserializer(item["hosts"]),
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeDedicatedHostGroupInstanceViewDeserializer(item["instanceView"]),
    supportAutomaticPlacement: item["supportAutomaticPlacement"],
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeDedicatedHostGroupPropertiesAdditionalCapabilitiesDeserializer(
          item["additionalCapabilities"],
        ),
  };
}

/** model interface ComputeDedicatedHostGroupInstanceView */
export interface ComputeDedicatedHostGroupInstanceView {
  /** List of instance view of the dedicated hosts under the dedicated host group. */
  hosts?: ComputeDedicatedHostInstanceViewWithName[];
}

export function computeDedicatedHostGroupInstanceViewDeserializer(
  item: any,
): ComputeDedicatedHostGroupInstanceView {
  return {
    hosts: !item["hosts"]
      ? item["hosts"]
      : computeDedicatedHostInstanceViewWithNameArrayDeserializer(item["hosts"]),
  };
}

export function computeDedicatedHostInstanceViewWithNameArrayDeserializer(
  result: Array<ComputeDedicatedHostInstanceViewWithName>,
): any[] {
  return result.map((item) => {
    return computeDedicatedHostInstanceViewWithNameDeserializer(item);
  });
}

/** The instance view of a dedicated host that includes the name of the dedicated host. It is used for the response to the instance view of a dedicated host group. */
export interface ComputeDedicatedHostInstanceViewWithName extends ComputeDedicatedHostInstanceView {
  /** The name of the dedicated host. */
  readonly name?: string;
}

export function computeDedicatedHostInstanceViewWithNameDeserializer(
  item: any,
): ComputeDedicatedHostInstanceViewWithName {
  return {
    assetId: item["assetId"],
    availableCapacity: !item["availableCapacity"]
      ? item["availableCapacity"]
      : computeDedicatedHostAvailableCapacityDeserializer(item["availableCapacity"]),
    statuses: !item["statuses"]
      ? item["statuses"]
      : computeInstanceViewStatusArrayDeserializer(item["statuses"]),
    name: item["name"],
  };
}

/** Enables or disables a capability on the dedicated host group. Minimum api-version: 2022-03-01. */
export interface ComputeDedicatedHostGroupPropertiesAdditionalCapabilities {
  /** The flag that enables or disables a capability to have UltraSSD Enabled Virtual Machines on Dedicated Hosts of the Dedicated Host Group. For the Virtual Machines to be UltraSSD Enabled, UltraSSDEnabled flag for the resource needs to be set true as well. The value is defaulted to 'false' when not provided. Please refer to https://docs.microsoft.com/en-us/azure/virtual-machines/disks-enable-ultra-ssd for more details on Ultra SSD feature. **Note:** The ultraSSDEnabled setting can only be enabled for Host Groups that are created as zonal. Minimum api-version: 2022-03-01. */
  ultraSSDEnabled?: boolean;
}

export function computeDedicatedHostGroupPropertiesAdditionalCapabilitiesSerializer(
  item: ComputeDedicatedHostGroupPropertiesAdditionalCapabilities,
): any {
  return { ultraSSDEnabled: item["ultraSSDEnabled"] };
}

export function computeDedicatedHostGroupPropertiesAdditionalCapabilitiesDeserializer(
  item: any,
): ComputeDedicatedHostGroupPropertiesAdditionalCapabilities {
  return {
    ultraSSDEnabled: item["ultraSSDEnabled"],
  };
}

/** The instance view of a dedicated host. */
export interface ComputeDedicatedHostInstanceView {
  /** Specifies the unique id of the dedicated physical machine on which the dedicated host resides. */
  readonly assetId?: string;
  /** Unutilized capacity of the dedicated host. */
  availableCapacity?: ComputeDedicatedHostAvailableCapacity;
  /** The resource status information. */
  statuses?: ComputeInstanceViewStatus[];
}

export function computeDedicatedHostInstanceViewDeserializer(
  item: any,
): ComputeDedicatedHostInstanceView {
  return {
    assetId: item["assetId"],
    availableCapacity: !item["availableCapacity"]
      ? item["availableCapacity"]
      : computeDedicatedHostAvailableCapacityDeserializer(item["availableCapacity"]),
    statuses: !item["statuses"]
      ? item["statuses"]
      : computeInstanceViewStatusArrayDeserializer(item["statuses"]),
  };
}

/** Dedicated host unutilized capacity. */
export interface ComputeDedicatedHostAvailableCapacity {
  /** The unutilized capacity of the dedicated host represented in terms of each VM size that is allowed to be deployed to the dedicated host. */
  allocatableVMs?: ComputeDedicatedHostAllocatableVM[];
}

export function computeDedicatedHostAvailableCapacityDeserializer(
  item: any,
): ComputeDedicatedHostAvailableCapacity {
  return {
    allocatableVMs: !item["allocatableVMs"]
      ? item["allocatableVMs"]
      : computeDedicatedHostAllocatableVMArrayDeserializer(item["allocatableVMs"]),
  };
}

export function computeDedicatedHostAllocatableVMArrayDeserializer(
  result: Array<ComputeDedicatedHostAllocatableVM>,
): any[] {
  return result.map((item) => {
    return computeDedicatedHostAllocatableVMDeserializer(item);
  });
}

/** Represents the dedicated host unutilized capacity in terms of a specific VM size. */
export interface ComputeDedicatedHostAllocatableVM {
  /** VM size in terms of which the unutilized capacity is represented. */
  vmSize?: string;
  /** Maximum number of VMs of size vmSize that can fit in the dedicated host's remaining capacity. */
  count?: number;
}

export function computeDedicatedHostAllocatableVMDeserializer(
  item: any,
): ComputeDedicatedHostAllocatableVM {
  return {
    vmSize: item["vmSize"],
    count: item["count"],
  };
}

/** Specifies information about the dedicated host group that the dedicated host should be assigned to. Only tags may be updated. */
export interface ComputeDedicatedHostGroupUpdate extends ComputeUpdateResource {
  /** Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone. */
  zones?: string[];
  /** Number of fault domains that the host group can span. */
  platformFaultDomainCount?: number;
  /** A list of references to all dedicated hosts in the dedicated host group. */
  readonly hosts?: CommonSubResourceReadOnly[];
  /** The dedicated host group instance view, which has the list of instance view of the dedicated hosts under the dedicated host group. */
  readonly instanceView?: ComputeDedicatedHostGroupInstanceView;
  /** Specifies whether virtual machines or virtual machine scale sets can be placed automatically on the dedicated host group. Automatic placement means resources are allocated on dedicated hosts, that are chosen by Azure, under the dedicated host group. The value is defaulted to 'false' when not provided. Minimum api-version: 2020-06-01. */
  supportAutomaticPlacement?: boolean;
  /** Enables or disables a capability on the dedicated host group. Minimum api-version: 2022-03-01. */
  additionalCapabilities?: ComputeDedicatedHostGroupPropertiesAdditionalCapabilities;
}

export function computeDedicatedHostGroupUpdateSerializer(
  item: ComputeDedicatedHostGroupUpdate,
): any {
  return {
    tags: item["tags"],
    properties: areAllPropsUndefined(item, [
      "platformFaultDomainCount",
      "supportAutomaticPlacement",
      "additionalCapabilities",
    ])
      ? undefined
      : _dedicatedHostGroupUpdatePropertiesSerializer(item),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
  };
}

/** The List Dedicated Host Group with resource group response. */
export interface _ComputeDedicatedHostGroupListResult {
  /** The list of dedicated host groups. */
  value: ComputeDedicatedHostGroup[];
  /** The URI to fetch the next page of Dedicated Host Groups. Call ListNext() with this URI to fetch the next page of Dedicated Host Groups. */
  nextLink?: string;
}

export function _computeDedicatedHostGroupListResultDeserializer(
  item: any,
): _ComputeDedicatedHostGroupListResult {
  return {
    value: computeDedicatedHostGroupArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeDedicatedHostGroupArraySerializer(
  result: Array<ComputeDedicatedHostGroup>,
): any[] {
  return result.map((item) => {
    return computeDedicatedHostGroupSerializer(item);
  });
}

export function computeDedicatedHostGroupArrayDeserializer(
  result: Array<ComputeDedicatedHostGroup>,
): any[] {
  return result.map((item) => {
    return computeDedicatedHostGroupDeserializer(item);
  });
}

/** Specifies information about the Dedicated host. */
export interface ComputeDedicatedHost extends TrackedResource {
  /** SKU of the dedicated host for Hardware Generation and VM family. Only name is required to be set. List Microsoft.Compute SKUs for a list of possible values. */
  sku: ComputeSku;
  /** Fault domain of the dedicated host within a dedicated host group. */
  platformFaultDomain?: number;
  /** Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to 'true' when not provided. */
  autoReplaceOnFailure?: boolean;
  /** A unique id generated and assigned to the dedicated host by the platform. Does not change throughout the lifetime of the host. */
  readonly hostId?: string;
  /** A list of references to all virtual machines in the Dedicated Host. */
  readonly virtualMachines?: CommonSubResourceReadOnly[];
  /** Specifies the software license type that will be applied to the VMs deployed on the dedicated host. Possible values are: **None,** **Windows_Server_Hybrid,** **Windows_Server_Perpetual.** The default value is: **None.** */
  licenseType?: ComputeDedicatedHostLicenseTypes;
  /** The date when the host was first provisioned. */
  readonly provisioningTime?: Date;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: string;
  /** The dedicated host instance view. */
  readonly instanceView?: ComputeDedicatedHostInstanceView;
  /** Specifies the time at which the Dedicated Host resource was created. Minimum api-version: 2021-11-01. */
  readonly timeCreated?: Date;
}

export function computeDedicatedHostSerializer(item: ComputeDedicatedHost): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, [
      "platformFaultDomain",
      "autoReplaceOnFailure",
      "licenseType",
    ])
      ? undefined
      : _dedicatedHostPropertiesSerializer(item),
    sku: computeSkuSerializer(item["sku"]),
  };
}

export function computeDedicatedHostDeserializer(item: any): ComputeDedicatedHost {
  return {
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    ...(!item["properties"]
      ? item["properties"]
      : _dedicatedHostPropertiesDeserializer(item["properties"])),
    sku: computeSkuDeserializer(item["sku"]),
  };
}

/** Properties of the dedicated host. */
export interface ComputeDedicatedHostProperties {
  /** Fault domain of the dedicated host within a dedicated host group. */
  platformFaultDomain?: number;
  /** Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to 'true' when not provided. */
  autoReplaceOnFailure?: boolean;
  /** A unique id generated and assigned to the dedicated host by the platform. Does not change throughout the lifetime of the host. */
  readonly hostId?: string;
  /** A list of references to all virtual machines in the Dedicated Host. */
  readonly virtualMachines?: CommonSubResourceReadOnly[];
  /** Specifies the software license type that will be applied to the VMs deployed on the dedicated host. Possible values are: **None,** **Windows_Server_Hybrid,** **Windows_Server_Perpetual.** The default value is: **None.** */
  licenseType?: ComputeDedicatedHostLicenseTypes;
  /** The date when the host was first provisioned. */
  readonly provisioningTime?: Date;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: string;
  /** The dedicated host instance view. */
  readonly instanceView?: ComputeDedicatedHostInstanceView;
  /** Specifies the time at which the Dedicated Host resource was created. Minimum api-version: 2021-11-01. */
  readonly timeCreated?: Date;
}

export function computeDedicatedHostPropertiesSerializer(
  item: ComputeDedicatedHostProperties,
): any {
  return {
    platformFaultDomain: item["platformFaultDomain"],
    autoReplaceOnFailure: item["autoReplaceOnFailure"],
    licenseType: item["licenseType"],
  };
}

export function computeDedicatedHostPropertiesDeserializer(
  item: any,
): ComputeDedicatedHostProperties {
  return {
    platformFaultDomain: item["platformFaultDomain"],
    autoReplaceOnFailure: item["autoReplaceOnFailure"],
    hostId: item["hostId"],
    virtualMachines: !item["virtualMachines"]
      ? item["virtualMachines"]
      : commonSubResourceReadOnlyArrayDeserializer(item["virtualMachines"]),
    licenseType: item["licenseType"],
    provisioningTime: !item["provisioningTime"]
      ? item["provisioningTime"]
      : new Date(item["provisioningTime"]),
    provisioningState: item["provisioningState"],
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeDedicatedHostInstanceViewDeserializer(item["instanceView"]),
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
  };
}

/** Specifies the software license type that will be applied to the VMs deployed on the dedicated host. Possible values are: **None,** **Windows_Server_Hybrid,** **Windows_Server_Perpetual.** The default value is: **None.** */
export type ComputeDedicatedHostLicenseTypes =
  | "None"
  | "Windows_Server_Hybrid"
  | "Windows_Server_Perpetual";

/** Specifies information about the dedicated host. Only tags, autoReplaceOnFailure and licenseType may be updated. */
export interface ComputeDedicatedHostUpdate extends ComputeUpdateResource {
  /** [List all available dedicated host sizes for resizing] (https://docs.microsoft.com/rest/api/compute/dedicated-hosts/listavailablesizes). Resizing can be only used to scale up DedicatedHost. Only name is required to be set. */
  sku?: ComputeSku;
  /** Fault domain of the dedicated host within a dedicated host group. */
  platformFaultDomain?: number;
  /** Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to 'true' when not provided. */
  autoReplaceOnFailure?: boolean;
  /** A unique id generated and assigned to the dedicated host by the platform. Does not change throughout the lifetime of the host. */
  readonly hostId?: string;
  /** A list of references to all virtual machines in the Dedicated Host. */
  readonly virtualMachines?: CommonSubResourceReadOnly[];
  /** Specifies the software license type that will be applied to the VMs deployed on the dedicated host. Possible values are: **None,** **Windows_Server_Hybrid,** **Windows_Server_Perpetual.** The default value is: **None.** */
  licenseType?: ComputeDedicatedHostLicenseTypes;
  /** The date when the host was first provisioned. */
  readonly provisioningTime?: Date;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: string;
  /** The dedicated host instance view. */
  readonly instanceView?: ComputeDedicatedHostInstanceView;
  /** Specifies the time at which the Dedicated Host resource was created. Minimum api-version: 2021-11-01. */
  readonly timeCreated?: Date;
}

export function computeDedicatedHostUpdateSerializer(item: ComputeDedicatedHostUpdate): any {
  return {
    tags: item["tags"],
    properties: areAllPropsUndefined(item, [
      "platformFaultDomain",
      "autoReplaceOnFailure",
      "licenseType",
    ])
      ? undefined
      : _dedicatedHostUpdatePropertiesSerializer(item),
    sku: !item["sku"] ? item["sku"] : computeSkuSerializer(item["sku"]),
  };
}

/** The list dedicated host operation response. */
export interface _ComputeDedicatedHostListResult {
  /** The list of dedicated hosts. */
  value: ComputeDedicatedHost[];
  /** The URI to fetch the next page of dedicated hosts. Call ListNext() with this URI to fetch the next page of dedicated hosts. */
  nextLink?: string;
}

export function _computeDedicatedHostListResultDeserializer(
  item: any,
): _ComputeDedicatedHostListResult {
  return {
    value: computeDedicatedHostArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeDedicatedHostArraySerializer(result: Array<ComputeDedicatedHost>): any[] {
  return result.map((item) => {
    return computeDedicatedHostSerializer(item);
  });
}

export function computeDedicatedHostArrayDeserializer(result: Array<ComputeDedicatedHost>): any[] {
  return result.map((item) => {
    return computeDedicatedHostDeserializer(item);
  });
}

/** The List Dedicated Host sizes operation response. */
export interface _ComputeDedicatedHostSizeListResult {
  /** The list of dedicated host sizes. */
  value?: string[];
  /** The link to the next page of items. */
  nextLink?: string;
}

export function _computeDedicatedHostSizeListResultDeserializer(
  item: any,
): _ComputeDedicatedHostSizeListResult {
  return {
    value: !item["value"]
      ? item["value"]
      : item["value"].map((p: any) => {
          return p;
        }),
    nextLink: item["nextLink"],
  };
}

/** The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist. */
export interface ComputeImage extends TrackedResource {
  /** The extended location of the Image. */
  extendedLocation?: CommonExtendedLocation;
  /** The source virtual machine from which Image is created. */
  sourceVirtualMachine?: CommonSubResource;
  /** Specifies the storage settings for the virtual machine disks. */
  storageProfile?: ComputeImageStorageProfile;
  /** The provisioning state. */
  readonly provisioningState?: string;
  /** Specifies the HyperVGenerationType of the VirtualMachine created from the image. From API Version 2019-03-01 if the image source is a blob, then we need the user to specify the value, if the source is managed resource like disk or snapshot, we may require the user to specify the property if we cannot deduce it from the source managed resource. */
  hyperVGeneration?: ComputeHyperVGenerationTypes;
}

export function computeImageSerializer(item: ComputeImage): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, [
      "sourceVirtualMachine",
      "storageProfile",
      "hyperVGeneration",
    ])
      ? undefined
      : _imagePropertiesSerializer(item),
    extendedLocation: !item["extendedLocation"]
      ? item["extendedLocation"]
      : commonExtendedLocationSerializer(item["extendedLocation"]),
  };
}

export function computeImageDeserializer(item: any): ComputeImage {
  return {
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    ...(!item["properties"]
      ? item["properties"]
      : _imagePropertiesDeserializer(item["properties"])),
    extendedLocation: !item["extendedLocation"]
      ? item["extendedLocation"]
      : commonExtendedLocationDeserializer(item["extendedLocation"]),
  };
}

/** Describes the properties of an Image. */
export interface ComputeImageProperties {
  /** The source virtual machine from which Image is created. */
  sourceVirtualMachine?: CommonSubResource;
  /** Specifies the storage settings for the virtual machine disks. */
  storageProfile?: ComputeImageStorageProfile;
  /** The provisioning state. */
  readonly provisioningState?: string;
  /** Specifies the HyperVGenerationType of the VirtualMachine created from the image. From API Version 2019-03-01 if the image source is a blob, then we need the user to specify the value, if the source is managed resource like disk or snapshot, we may require the user to specify the property if we cannot deduce it from the source managed resource. */
  hyperVGeneration?: ComputeHyperVGenerationTypes;
}

export function computeImagePropertiesSerializer(item: ComputeImageProperties): any {
  return {
    sourceVirtualMachine: !item["sourceVirtualMachine"]
      ? item["sourceVirtualMachine"]
      : commonSubResourceSerializer(item["sourceVirtualMachine"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeImageStorageProfileSerializer(item["storageProfile"]),
    hyperVGeneration: item["hyperVGeneration"],
  };
}

export function computeImagePropertiesDeserializer(item: any): ComputeImageProperties {
  return {
    sourceVirtualMachine: !item["sourceVirtualMachine"]
      ? item["sourceVirtualMachine"]
      : commonSubResourceDeserializer(item["sourceVirtualMachine"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeImageStorageProfileDeserializer(item["storageProfile"]),
    provisioningState: item["provisioningState"],
    hyperVGeneration: item["hyperVGeneration"],
  };
}

/** Describes a storage profile. */
export interface ComputeImageStorageProfile {
  /** Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview). */
  osDisk?: ComputeImageOSDisk;
  /** Specifies the parameters that are used to add a data disk to a virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview). */
  dataDisks?: ComputeImageDataDisk[];
  /** Specifies whether an image is zone resilient or not. Default is false. Zone resilient images can be created only in regions that provide Zone Redundant Storage (ZRS). */
  zoneResilient?: boolean;
}

export function computeImageStorageProfileSerializer(item: ComputeImageStorageProfile): any {
  return {
    osDisk: !item["osDisk"] ? item["osDisk"] : computeImageOSDiskSerializer(item["osDisk"]),
    dataDisks: !item["dataDisks"]
      ? item["dataDisks"]
      : computeImageDataDiskArraySerializer(item["dataDisks"]),
    zoneResilient: item["zoneResilient"],
  };
}

export function computeImageStorageProfileDeserializer(item: any): ComputeImageStorageProfile {
  return {
    osDisk: !item["osDisk"] ? item["osDisk"] : computeImageOSDiskDeserializer(item["osDisk"]),
    dataDisks: !item["dataDisks"]
      ? item["dataDisks"]
      : computeImageDataDiskArrayDeserializer(item["dataDisks"]),
    zoneResilient: item["zoneResilient"],
  };
}

/** Describes an Operating System disk. */
export interface ComputeImageOSDisk extends ComputeImageDisk {
  /** This property allows you to specify the type of the OS that is included in the disk if creating a VM from a custom image. Possible values are: **Windows,** **Linux.** */
  osType: CommonOperatingSystemTypes;
  /** The OS State. For managed images, use Generalized. */
  osState: CommonOperatingSystemStateTypes;
}

export function computeImageOSDiskSerializer(item: ComputeImageOSDisk): any {
  return {
    snapshot: !item["snapshot"] ? item["snapshot"] : commonSubResourceSerializer(item["snapshot"]),
    managedDisk: !item["managedDisk"]
      ? item["managedDisk"]
      : commonSubResourceSerializer(item["managedDisk"]),
    blobUri: item["blobUri"],
    caching: item["caching"],
    diskSizeGB: item["diskSizeGB"],
    storageAccountType: item["storageAccountType"],
    diskEncryptionSet: !item["diskEncryptionSet"]
      ? item["diskEncryptionSet"]
      : computeDiskEncryptionSetParametersSerializer(item["diskEncryptionSet"]),
    osType: item["osType"],
    osState: item["osState"],
  };
}

export function computeImageOSDiskDeserializer(item: any): ComputeImageOSDisk {
  return {
    snapshot: !item["snapshot"]
      ? item["snapshot"]
      : commonSubResourceDeserializer(item["snapshot"]),
    managedDisk: !item["managedDisk"]
      ? item["managedDisk"]
      : commonSubResourceDeserializer(item["managedDisk"]),
    blobUri: item["blobUri"],
    caching: item["caching"],
    diskSizeGB: item["diskSizeGB"],
    storageAccountType: item["storageAccountType"],
    diskEncryptionSet: !item["diskEncryptionSet"]
      ? item["diskEncryptionSet"]
      : computeDiskEncryptionSetParametersDeserializer(item["diskEncryptionSet"]),
    osType: item["osType"],
    osState: item["osState"],
  };
}

export function computeImageDataDiskArraySerializer(result: Array<ComputeImageDataDisk>): any[] {
  return result.map((item) => {
    return computeImageDataDiskSerializer(item);
  });
}

export function computeImageDataDiskArrayDeserializer(result: Array<ComputeImageDataDisk>): any[] {
  return result.map((item) => {
    return computeImageDataDiskDeserializer(item);
  });
}

/** Describes a data disk. */
export interface ComputeImageDataDisk extends ComputeImageDisk {
  /** Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. */
  lun: number;
}

export function computeImageDataDiskSerializer(item: ComputeImageDataDisk): any {
  return {
    snapshot: !item["snapshot"] ? item["snapshot"] : commonSubResourceSerializer(item["snapshot"]),
    managedDisk: !item["managedDisk"]
      ? item["managedDisk"]
      : commonSubResourceSerializer(item["managedDisk"]),
    blobUri: item["blobUri"],
    caching: item["caching"],
    diskSizeGB: item["diskSizeGB"],
    storageAccountType: item["storageAccountType"],
    diskEncryptionSet: !item["diskEncryptionSet"]
      ? item["diskEncryptionSet"]
      : computeDiskEncryptionSetParametersSerializer(item["diskEncryptionSet"]),
    lun: item["lun"],
  };
}

export function computeImageDataDiskDeserializer(item: any): ComputeImageDataDisk {
  return {
    snapshot: !item["snapshot"]
      ? item["snapshot"]
      : commonSubResourceDeserializer(item["snapshot"]),
    managedDisk: !item["managedDisk"]
      ? item["managedDisk"]
      : commonSubResourceDeserializer(item["managedDisk"]),
    blobUri: item["blobUri"],
    caching: item["caching"],
    diskSizeGB: item["diskSizeGB"],
    storageAccountType: item["storageAccountType"],
    diskEncryptionSet: !item["diskEncryptionSet"]
      ? item["diskEncryptionSet"]
      : computeDiskEncryptionSetParametersDeserializer(item["diskEncryptionSet"]),
    lun: item["lun"],
  };
}

/** Specifies the HyperVGeneration Type */
export enum KnownComputeHyperVGenerationTypes {
  /** V1 */
  V1 = "V1",
  /** V2 */
  V2 = "V2",
}

/**
 * Specifies the HyperVGeneration Type \
 * {@link KnownComputeHyperVGenerationTypes} can be used interchangeably with ComputeHyperVGenerationTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **V1** \
 * **V2**
 */
export type ComputeHyperVGenerationTypes = string;

/** Describes a image disk. */
export interface ComputeImageDisk {
  /** The snapshot. */
  snapshot?: CommonSubResource;
  /** The managedDisk. */
  managedDisk?: CommonSubResource;
  /** The Virtual Hard Disk. */
  blobUri?: string;
  /** Specifies the caching requirements. Possible values are: **None,** **ReadOnly,** **ReadWrite.** The default values are: **None for Standard storage. ReadOnly for Premium storage.** */
  caching?: ComputeCachingTypes;
  /** Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. This value cannot be larger than 1023 GB. */
  diskSizeGB?: number;
  /** Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk. */
  storageAccountType?: ComputeStorageAccountTypes;
  /** Specifies the customer managed disk encryption set resource id for the managed image disk. */
  diskEncryptionSet?: ComputeDiskEncryptionSetParameters;
}

export function computeImageDiskSerializer(item: ComputeImageDisk): any {
  return {
    snapshot: !item["snapshot"] ? item["snapshot"] : commonSubResourceSerializer(item["snapshot"]),
    managedDisk: !item["managedDisk"]
      ? item["managedDisk"]
      : commonSubResourceSerializer(item["managedDisk"]),
    blobUri: item["blobUri"],
    caching: item["caching"],
    diskSizeGB: item["diskSizeGB"],
    storageAccountType: item["storageAccountType"],
    diskEncryptionSet: !item["diskEncryptionSet"]
      ? item["diskEncryptionSet"]
      : computeDiskEncryptionSetParametersSerializer(item["diskEncryptionSet"]),
  };
}

export function computeImageDiskDeserializer(item: any): ComputeImageDisk {
  return {
    snapshot: !item["snapshot"]
      ? item["snapshot"]
      : commonSubResourceDeserializer(item["snapshot"]),
    managedDisk: !item["managedDisk"]
      ? item["managedDisk"]
      : commonSubResourceDeserializer(item["managedDisk"]),
    blobUri: item["blobUri"],
    caching: item["caching"],
    diskSizeGB: item["diskSizeGB"],
    storageAccountType: item["storageAccountType"],
    diskEncryptionSet: !item["diskEncryptionSet"]
      ? item["diskEncryptionSet"]
      : computeDiskEncryptionSetParametersDeserializer(item["diskEncryptionSet"]),
  };
}

/** The source user image virtual hard disk. Only tags may be updated. */
export interface ComputeImageUpdate extends ComputeUpdateResource {
  /** The source virtual machine from which Image is created. */
  sourceVirtualMachine?: CommonSubResource;
  /** Specifies the storage settings for the virtual machine disks. */
  storageProfile?: ComputeImageStorageProfile;
  /** The provisioning state. */
  readonly provisioningState?: string;
  /** Specifies the HyperVGenerationType of the VirtualMachine created from the image. From API Version 2019-03-01 if the image source is a blob, then we need the user to specify the value, if the source is managed resource like disk or snapshot, we may require the user to specify the property if we cannot deduce it from the source managed resource. */
  hyperVGeneration?: ComputeHyperVGenerationTypes;
}

export function computeImageUpdateSerializer(item: ComputeImageUpdate): any {
  return {
    tags: item["tags"],
    properties: areAllPropsUndefined(item, [
      "sourceVirtualMachine",
      "storageProfile",
      "hyperVGeneration",
    ])
      ? undefined
      : _imageUpdatePropertiesSerializer(item),
  };
}

/** The List Image operation response. */
export interface _ComputeImageListResult {
  /** The list of Images */
  value: ComputeImage[];
  /** The uri to fetch the next page of Images. Call ListNext() with this to fetch the next page of Images. */
  nextLink?: string;
}

export function _computeImageListResultDeserializer(item: any): _ComputeImageListResult {
  return {
    value: computeImageArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeImageArraySerializer(result: Array<ComputeImage>): any[] {
  return result.map((item) => {
    return computeImageSerializer(item);
  });
}

export function computeImageArrayDeserializer(result: Array<ComputeImage>): any[] {
  return result.map((item) => {
    return computeImageDeserializer(item);
  });
}

/** Create or update Restore Point collection parameters. */
export interface ComputeRestorePointCollection extends TrackedResource {
  /** The properties of the source resource that this restore point collection is created from. */
  source?: ComputeRestorePointCollectionSourceProperties;
  /** The provisioning state of the restore point collection. */
  readonly provisioningState?: string;
  /** The unique id of the restore point collection. */
  readonly restorePointCollectionId?: string;
  /** A list containing all restore points created under this restore point collection. */
  readonly restorePoints?: ComputeRestorePoint[];
  /** This property determines whether instant access snapshot is enabled for restore points created under this restore point collection for Premium SSD v2 or Ultra disk. Instant access snapshot for Premium SSD v2 or Ultra disk is instantaneously available for restoring disk with fast restore performance. */
  instantAccess?: boolean;
}

export function computeRestorePointCollectionSerializer(item: ComputeRestorePointCollection): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, ["source", "instantAccess"])
      ? undefined
      : _restorePointCollectionPropertiesSerializer(item),
  };
}

export function computeRestorePointCollectionDeserializer(
  item: any,
): ComputeRestorePointCollection {
  return {
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    ...(!item["properties"]
      ? item["properties"]
      : _restorePointCollectionPropertiesDeserializer(item["properties"])),
  };
}

/** The restore point collection properties. */
export interface ComputeRestorePointCollectionProperties {
  /** The properties of the source resource that this restore point collection is created from. */
  source?: ComputeRestorePointCollectionSourceProperties;
  /** The provisioning state of the restore point collection. */
  readonly provisioningState?: string;
  /** The unique id of the restore point collection. */
  readonly restorePointCollectionId?: string;
  /** A list containing all restore points created under this restore point collection. */
  readonly restorePoints?: ComputeRestorePoint[];
  /** This property determines whether instant access snapshot is enabled for restore points created under this restore point collection for Premium SSD v2 or Ultra disk. Instant access snapshot for Premium SSD v2 or Ultra disk is instantaneously available for restoring disk with fast restore performance. */
  instantAccess?: boolean;
}

export function computeRestorePointCollectionPropertiesSerializer(
  item: ComputeRestorePointCollectionProperties,
): any {
  return {
    source: !item["source"]
      ? item["source"]
      : computeRestorePointCollectionSourcePropertiesSerializer(item["source"]),
    instantAccess: item["instantAccess"],
  };
}

export function computeRestorePointCollectionPropertiesDeserializer(
  item: any,
): ComputeRestorePointCollectionProperties {
  return {
    source: !item["source"]
      ? item["source"]
      : computeRestorePointCollectionSourcePropertiesDeserializer(item["source"]),
    provisioningState: item["provisioningState"],
    restorePointCollectionId: item["restorePointCollectionId"],
    restorePoints: !item["restorePoints"]
      ? item["restorePoints"]
      : computeRestorePointArrayDeserializer(item["restorePoints"]),
    instantAccess: item["instantAccess"],
  };
}

/** The properties of the source resource that this restore point collection is created from. */
export interface ComputeRestorePointCollectionSourceProperties {
  /** Location of the source resource used to create this restore point collection. */
  readonly location?: string;
  /** Resource Id of the source resource used to create this restore point collection */
  id?: string;
}

export function computeRestorePointCollectionSourcePropertiesSerializer(
  item: ComputeRestorePointCollectionSourceProperties,
): any {
  return { id: item["id"] };
}

export function computeRestorePointCollectionSourcePropertiesDeserializer(
  item: any,
): ComputeRestorePointCollectionSourceProperties {
  return {
    location: item["location"],
    id: item["id"],
  };
}

export function computeRestorePointArraySerializer(result: Array<ComputeRestorePoint>): any[] {
  return result.map((item) => {
    return computeRestorePointSerializer(item);
  });
}

export function computeRestorePointArrayDeserializer(result: Array<ComputeRestorePoint>): any[] {
  return result.map((item) => {
    return computeRestorePointDeserializer(item);
  });
}

/** Restore Point details. */
export interface ComputeRestorePoint extends ProxyResource {
  /** List of disk resource ids that the customer wishes to exclude from the restore point. If no disks are specified, all disks will be included. */
  excludeDisks?: ComputeApiEntityReference[];
  /** Gets the details of the VM captured at the time of the restore point creation. */
  sourceMetadata?: ComputeRestorePointSourceMetadata;
  /** Gets the provisioning state of the restore point. */
  readonly provisioningState?: string;
  /** ConsistencyMode of the RestorePoint. Can be specified in the input while creating a restore point. For now, only CrashConsistent is accepted as a valid input. Please refer to https://aka.ms/RestorePoints for more details. */
  consistencyMode?: ComputeConsistencyModeTypes;
  /** Gets the creation time of the restore point. */
  timeCreated?: Date;
  /** Resource Id of the source restore point from which a copy needs to be created. */
  sourceRestorePoint?: ComputeApiEntityReference;
  /** The restore point instance view. */
  readonly instanceView?: ComputeRestorePointInstanceView;
  /** This property determines the time in minutes the snapshot is retained as instant access for restoring Premium SSD v2 or Ultra disk with fast restore performance in this restore point. */
  instantAccessDurationMinutes?: number;
}

export function computeRestorePointSerializer(item: ComputeRestorePoint): any {
  return {
    properties: areAllPropsUndefined(item, [
      "excludeDisks",
      "sourceMetadata",
      "consistencyMode",
      "timeCreated",
      "sourceRestorePoint",
      "instantAccessDurationMinutes",
    ])
      ? undefined
      : _restorePointPropertiesSerializer(item),
  };
}

export function computeRestorePointDeserializer(item: any): ComputeRestorePoint {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    ...(!item["properties"]
      ? item["properties"]
      : _restorePointPropertiesDeserializer(item["properties"])),
  };
}

/** The restore point properties. */
export interface ComputeRestorePointProperties {
  /** List of disk resource ids that the customer wishes to exclude from the restore point. If no disks are specified, all disks will be included. */
  excludeDisks?: ComputeApiEntityReference[];
  /** Gets the details of the VM captured at the time of the restore point creation. */
  sourceMetadata?: ComputeRestorePointSourceMetadata;
  /** Gets the provisioning state of the restore point. */
  readonly provisioningState?: string;
  /** ConsistencyMode of the RestorePoint. Can be specified in the input while creating a restore point. For now, only CrashConsistent is accepted as a valid input. Please refer to https://aka.ms/RestorePoints for more details. */
  consistencyMode?: ComputeConsistencyModeTypes;
  /** Gets the creation time of the restore point. */
  timeCreated?: Date;
  /** Resource Id of the source restore point from which a copy needs to be created. */
  sourceRestorePoint?: ComputeApiEntityReference;
  /** The restore point instance view. */
  readonly instanceView?: ComputeRestorePointInstanceView;
  /** This property determines the time in minutes the snapshot is retained as instant access for restoring Premium SSD v2 or Ultra disk with fast restore performance in this restore point. */
  instantAccessDurationMinutes?: number;
}

export function computeRestorePointPropertiesSerializer(item: ComputeRestorePointProperties): any {
  return {
    excludeDisks: !item["excludeDisks"]
      ? item["excludeDisks"]
      : computeApiEntityReferenceArraySerializer(item["excludeDisks"]),
    sourceMetadata: !item["sourceMetadata"]
      ? item["sourceMetadata"]
      : computeRestorePointSourceMetadataSerializer(item["sourceMetadata"]),
    consistencyMode: item["consistencyMode"],
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : item["timeCreated"].toISOString(),
    sourceRestorePoint: !item["sourceRestorePoint"]
      ? item["sourceRestorePoint"]
      : computeApiEntityReferenceSerializer(item["sourceRestorePoint"]),
    instantAccessDurationMinutes: item["instantAccessDurationMinutes"],
  };
}

export function computeRestorePointPropertiesDeserializer(
  item: any,
): ComputeRestorePointProperties {
  return {
    excludeDisks: !item["excludeDisks"]
      ? item["excludeDisks"]
      : computeApiEntityReferenceArrayDeserializer(item["excludeDisks"]),
    sourceMetadata: !item["sourceMetadata"]
      ? item["sourceMetadata"]
      : computeRestorePointSourceMetadataDeserializer(item["sourceMetadata"]),
    provisioningState: item["provisioningState"],
    consistencyMode: item["consistencyMode"],
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
    sourceRestorePoint: !item["sourceRestorePoint"]
      ? item["sourceRestorePoint"]
      : computeApiEntityReferenceDeserializer(item["sourceRestorePoint"]),
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeRestorePointInstanceViewDeserializer(item["instanceView"]),
    instantAccessDurationMinutes: item["instantAccessDurationMinutes"],
  };
}

export function computeApiEntityReferenceArraySerializer(
  result: Array<ComputeApiEntityReference>,
): any[] {
  return result.map((item) => {
    return computeApiEntityReferenceSerializer(item);
  });
}

export function computeApiEntityReferenceArrayDeserializer(
  result: Array<ComputeApiEntityReference>,
): any[] {
  return result.map((item) => {
    return computeApiEntityReferenceDeserializer(item);
  });
}

/** Describes the properties of the Virtual Machine for which the restore point was created. The properties provided are a subset and the snapshot of the overall Virtual Machine properties captured at the time of the restore point creation. */
export interface ComputeRestorePointSourceMetadata {
  /** Gets the hardware profile. */
  readonly hardwareProfile?: ComputeHardwareProfile;
  /** Gets the storage profile. */
  storageProfile?: ComputeRestorePointSourceVMStorageProfile;
  /** Gets the OS profile. */
  readonly osProfile?: ComputeOSProfile;
  /** Gets the diagnostics profile. */
  readonly diagnosticsProfile?: ComputeDiagnosticsProfile;
  /** Gets the license type, which is for bring your own license scenario. */
  readonly licenseType?: string;
  /** Gets the virtual machine unique id. */
  readonly vmId?: string;
  /** Gets the security profile. */
  readonly securityProfile?: ComputeSecurityProfile;
  /** Location of the VM from which the restore point was created. */
  readonly location?: string;
  /** UserData associated with the source VM for which restore point is captured, which is a base-64 encoded value. */
  readonly userData?: string;
  /** HyperVGeneration of the source VM for which restore point is captured. */
  readonly hyperVGeneration?: ComputeHyperVGenerationTypes;
}

export function computeRestorePointSourceMetadataSerializer(
  item: ComputeRestorePointSourceMetadata,
): any {
  return {
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeRestorePointSourceVMStorageProfileSerializer(item["storageProfile"]),
  };
}

export function computeRestorePointSourceMetadataDeserializer(
  item: any,
): ComputeRestorePointSourceMetadata {
  return {
    hardwareProfile: !item["hardwareProfile"]
      ? item["hardwareProfile"]
      : computeHardwareProfileDeserializer(item["hardwareProfile"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeRestorePointSourceVMStorageProfileDeserializer(item["storageProfile"]),
    osProfile: !item["osProfile"]
      ? item["osProfile"]
      : computeOSProfileDeserializer(item["osProfile"]),
    diagnosticsProfile: !item["diagnosticsProfile"]
      ? item["diagnosticsProfile"]
      : computeDiagnosticsProfileDeserializer(item["diagnosticsProfile"]),
    licenseType: item["licenseType"],
    vmId: item["vmId"],
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeSecurityProfileDeserializer(item["securityProfile"]),
    location: item["location"],
    userData: item["userData"],
    hyperVGeneration: item["hyperVGeneration"],
  };
}

/** Describes the storage profile. */
export interface ComputeRestorePointSourceVMStorageProfile {
  /** Gets the OS disk of the VM captured at the time of the restore point creation. */
  osDisk?: ComputeRestorePointSourceVmosDisk;
  /** Gets the data disks of the VM captured at the time of the restore point creation. */
  dataDisks?: ComputeRestorePointSourceVMDataDisk[];
  /** Gets the disk controller type of the VM captured at the time of the restore point creation. */
  readonly diskControllerType?: ComputeDiskControllerTypes;
}

export function computeRestorePointSourceVMStorageProfileSerializer(
  item: ComputeRestorePointSourceVMStorageProfile,
): any {
  return {
    osDisk: !item["osDisk"]
      ? item["osDisk"]
      : computeRestorePointSourceVmosDiskSerializer(item["osDisk"]),
    dataDisks: !item["dataDisks"]
      ? item["dataDisks"]
      : computeRestorePointSourceVMDataDiskArraySerializer(item["dataDisks"]),
  };
}

export function computeRestorePointSourceVMStorageProfileDeserializer(
  item: any,
): ComputeRestorePointSourceVMStorageProfile {
  return {
    osDisk: !item["osDisk"]
      ? item["osDisk"]
      : computeRestorePointSourceVmosDiskDeserializer(item["osDisk"]),
    dataDisks: !item["dataDisks"]
      ? item["dataDisks"]
      : computeRestorePointSourceVMDataDiskArrayDeserializer(item["dataDisks"]),
    diskControllerType: item["diskControllerType"],
  };
}

/** Describes an Operating System disk. */
export interface ComputeRestorePointSourceVmosDisk {
  /** Gets the Operating System type. */
  readonly osType?: ComputeOperatingSystemType;
  /** Gets the disk encryption settings. */
  readonly encryptionSettings?: ComputeDiskEncryptionSettings;
  /** Gets the disk name. */
  readonly name?: string;
  /** Gets the caching type. */
  readonly caching?: ComputeCachingTypes;
  /** Gets the disk size in GB. */
  readonly diskSizeGB?: number;
  /** Gets the managed disk details */
  managedDisk?: ComputeManagedDiskParameters;
  /** Contains Disk Restore Point properties. */
  diskRestorePoint?: ComputeDiskRestorePointAttributes;
  /** Shows true if the disk is write-accelerator enabled. */
  readonly writeAcceleratorEnabled?: boolean;
}

export function computeRestorePointSourceVmosDiskSerializer(
  item: ComputeRestorePointSourceVmosDisk,
): any {
  return {
    managedDisk: !item["managedDisk"]
      ? item["managedDisk"]
      : computeManagedDiskParametersSerializer(item["managedDisk"]),
    diskRestorePoint: !item["diskRestorePoint"]
      ? item["diskRestorePoint"]
      : computeDiskRestorePointAttributesSerializer(item["diskRestorePoint"]),
  };
}

export function computeRestorePointSourceVmosDiskDeserializer(
  item: any,
): ComputeRestorePointSourceVmosDisk {
  return {
    osType: item["osType"],
    encryptionSettings: !item["encryptionSettings"]
      ? item["encryptionSettings"]
      : computeDiskEncryptionSettingsDeserializer(item["encryptionSettings"]),
    name: item["name"],
    caching: item["caching"],
    diskSizeGB: item["diskSizeGB"],
    managedDisk: !item["managedDisk"]
      ? item["managedDisk"]
      : computeManagedDiskParametersDeserializer(item["managedDisk"]),
    diskRestorePoint: !item["diskRestorePoint"]
      ? item["diskRestorePoint"]
      : computeDiskRestorePointAttributesDeserializer(item["diskRestorePoint"]),
    writeAcceleratorEnabled: item["writeAcceleratorEnabled"],
  };
}

/** Gets the Operating System type. */
export enum KnownComputeOperatingSystemType {
  /** Windows */
  Windows = "Windows",
  /** Linux */
  Linux = "Linux",
}

/**
 * Gets the Operating System type. \
 * {@link KnownComputeOperatingSystemType} can be used interchangeably with ComputeOperatingSystemType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Windows** \
 * **Linux**
 */
export type ComputeOperatingSystemType = string;

/** Disk Restore Point details. */
export interface ComputeDiskRestorePointAttributes extends CommonSubResourceReadOnly {
  /** Encryption at rest settings for disk restore point. It is an optional property that can be specified in the input while creating a restore point. */
  encryption?: ComputeRestorePointEncryption;
  /** Resource Id of the source disk restore point. */
  sourceDiskRestorePoint?: ComputeApiEntityReference;
}

export function computeDiskRestorePointAttributesSerializer(
  item: ComputeDiskRestorePointAttributes,
): any {
  return {
    encryption: !item["encryption"]
      ? item["encryption"]
      : computeRestorePointEncryptionSerializer(item["encryption"]),
    sourceDiskRestorePoint: !item["sourceDiskRestorePoint"]
      ? item["sourceDiskRestorePoint"]
      : computeApiEntityReferenceSerializer(item["sourceDiskRestorePoint"]),
  };
}

export function computeDiskRestorePointAttributesDeserializer(
  item: any,
): ComputeDiskRestorePointAttributes {
  return {
    id: item["id"],
    encryption: !item["encryption"]
      ? item["encryption"]
      : computeRestorePointEncryptionDeserializer(item["encryption"]),
    sourceDiskRestorePoint: !item["sourceDiskRestorePoint"]
      ? item["sourceDiskRestorePoint"]
      : computeApiEntityReferenceDeserializer(item["sourceDiskRestorePoint"]),
  };
}

/** Encryption at rest settings for disk restore point. It is an optional property that can be specified in the input while creating a restore point. */
export interface ComputeRestorePointEncryption {
  /** Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. **Note:** The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details. */
  diskEncryptionSet?: ComputeDiskEncryptionSetParameters;
  /** The type of key used to encrypt the data of the disk restore point. */
  type?: ComputeRestorePointEncryptionType;
}

export function computeRestorePointEncryptionSerializer(item: ComputeRestorePointEncryption): any {
  return {
    diskEncryptionSet: !item["diskEncryptionSet"]
      ? item["diskEncryptionSet"]
      : computeDiskEncryptionSetParametersSerializer(item["diskEncryptionSet"]),
    type: item["type"],
  };
}

export function computeRestorePointEncryptionDeserializer(
  item: any,
): ComputeRestorePointEncryption {
  return {
    diskEncryptionSet: !item["diskEncryptionSet"]
      ? item["diskEncryptionSet"]
      : computeDiskEncryptionSetParametersDeserializer(item["diskEncryptionSet"]),
    type: item["type"],
  };
}

/** The type of key used to encrypt the data of the disk restore point. */
export enum KnownComputeRestorePointEncryptionType {
  /** Disk Restore Point is encrypted at rest with Platform managed key. */
  EncryptionAtRestWithPlatformKey = "EncryptionAtRestWithPlatformKey",
  /** Disk Restore Point is encrypted at rest with Customer managed key that can be changed and revoked by a customer. */
  EncryptionAtRestWithCustomerKey = "EncryptionAtRestWithCustomerKey",
  /** Disk Restore Point is encrypted at rest with 2 layers of encryption. One of the keys is Customer managed and the other key is Platform managed. */
  EncryptionAtRestWithPlatformAndCustomerKeys = "EncryptionAtRestWithPlatformAndCustomerKeys",
}

/**
 * The type of key used to encrypt the data of the disk restore point. \
 * {@link KnownComputeRestorePointEncryptionType} can be used interchangeably with ComputeRestorePointEncryptionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **EncryptionAtRestWithPlatformKey**: Disk Restore Point is encrypted at rest with Platform managed key. \
 * **EncryptionAtRestWithCustomerKey**: Disk Restore Point is encrypted at rest with Customer managed key that can be changed and revoked by a customer. \
 * **EncryptionAtRestWithPlatformAndCustomerKeys**: Disk Restore Point is encrypted at rest with 2 layers of encryption. One of the keys is Customer managed and the other key is Platform managed.
 */
export type ComputeRestorePointEncryptionType = string;

export function computeRestorePointSourceVMDataDiskArraySerializer(
  result: Array<ComputeRestorePointSourceVMDataDisk>,
): any[] {
  return result.map((item) => {
    return computeRestorePointSourceVMDataDiskSerializer(item);
  });
}

export function computeRestorePointSourceVMDataDiskArrayDeserializer(
  result: Array<ComputeRestorePointSourceVMDataDisk>,
): any[] {
  return result.map((item) => {
    return computeRestorePointSourceVMDataDiskDeserializer(item);
  });
}

/** Describes a data disk. */
export interface ComputeRestorePointSourceVMDataDisk {
  /** Gets the logical unit number. */
  readonly lun?: number;
  /** Gets the disk name. */
  readonly name?: string;
  /** Gets the caching type. */
  readonly caching?: ComputeCachingTypes;
  /** Gets the initial disk size in GB for blank data disks, and the new desired size for existing OS and Data disks. */
  readonly diskSizeGB?: number;
  /** Contains the managed disk details. */
  managedDisk?: ComputeManagedDiskParameters;
  /** Contains Disk Restore Point properties. */
  diskRestorePoint?: ComputeDiskRestorePointAttributes;
  /** Shows true if the disk is write-accelerator enabled. */
  readonly writeAcceleratorEnabled?: boolean;
}

export function computeRestorePointSourceVMDataDiskSerializer(
  item: ComputeRestorePointSourceVMDataDisk,
): any {
  return {
    managedDisk: !item["managedDisk"]
      ? item["managedDisk"]
      : computeManagedDiskParametersSerializer(item["managedDisk"]),
    diskRestorePoint: !item["diskRestorePoint"]
      ? item["diskRestorePoint"]
      : computeDiskRestorePointAttributesSerializer(item["diskRestorePoint"]),
  };
}

export function computeRestorePointSourceVMDataDiskDeserializer(
  item: any,
): ComputeRestorePointSourceVMDataDisk {
  return {
    lun: item["lun"],
    name: item["name"],
    caching: item["caching"],
    diskSizeGB: item["diskSizeGB"],
    managedDisk: !item["managedDisk"]
      ? item["managedDisk"]
      : computeManagedDiskParametersDeserializer(item["managedDisk"]),
    diskRestorePoint: !item["diskRestorePoint"]
      ? item["diskRestorePoint"]
      : computeDiskRestorePointAttributesDeserializer(item["diskRestorePoint"]),
    writeAcceleratorEnabled: item["writeAcceleratorEnabled"],
  };
}

/** ConsistencyMode of the RestorePoint. Can be specified in the input while creating a restore point. For now, only CrashConsistent is accepted as a valid input. Please refer to https://aka.ms/RestorePoints for more details. */
export enum KnownComputeConsistencyModeTypes {
  /** CrashConsistent */
  CrashConsistent = "CrashConsistent",
  /** FileSystemConsistent */
  FileSystemConsistent = "FileSystemConsistent",
  /** ApplicationConsistent */
  ApplicationConsistent = "ApplicationConsistent",
}

/**
 * ConsistencyMode of the RestorePoint. Can be specified in the input while creating a restore point. For now, only CrashConsistent is accepted as a valid input. Please refer to https://aka.ms/RestorePoints for more details. \
 * {@link KnownComputeConsistencyModeTypes} can be used interchangeably with ComputeConsistencyModeTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **CrashConsistent** \
 * **FileSystemConsistent** \
 * **ApplicationConsistent**
 */
export type ComputeConsistencyModeTypes = string;

/** The instance view of a restore point. */
export interface ComputeRestorePointInstanceView {
  /** The disk restore points information. */
  diskRestorePoints?: ComputeDiskRestorePointInstanceView[];
  /** The resource status information. */
  statuses?: ComputeInstanceViewStatus[];
}

export function computeRestorePointInstanceViewDeserializer(
  item: any,
): ComputeRestorePointInstanceView {
  return {
    diskRestorePoints: !item["diskRestorePoints"]
      ? item["diskRestorePoints"]
      : computeDiskRestorePointInstanceViewArrayDeserializer(item["diskRestorePoints"]),
    statuses: !item["statuses"]
      ? item["statuses"]
      : computeInstanceViewStatusArrayDeserializer(item["statuses"]),
  };
}

export function computeDiskRestorePointInstanceViewArrayDeserializer(
  result: Array<ComputeDiskRestorePointInstanceView>,
): any[] {
  return result.map((item) => {
    return computeDiskRestorePointInstanceViewDeserializer(item);
  });
}

/** The instance view of a disk restore point. */
export interface ComputeDiskRestorePointInstanceView {
  /** Disk restore point Id. */
  id?: string;
  /** The state of snapshot which determines the access availability of the snapshot. */
  snapshotAccessState?: CommonSnapshotAccessState;
  /** The disk restore point replication status information. */
  replicationStatus?: ComputeDiskRestorePointReplicationStatus;
}

export function computeDiskRestorePointInstanceViewDeserializer(
  item: any,
): ComputeDiskRestorePointInstanceView {
  return {
    id: item["id"],
    snapshotAccessState: item["snapshotAccessState"],
    replicationStatus: !item["replicationStatus"]
      ? item["replicationStatus"]
      : computeDiskRestorePointReplicationStatusDeserializer(item["replicationStatus"]),
  };
}

/** The instance view of a disk restore point. */
export interface ComputeDiskRestorePointReplicationStatus {
  /** The resource status information. */
  status?: ComputeInstanceViewStatus;
  /** Replication completion percentage. */
  completionPercent?: number;
}

export function computeDiskRestorePointReplicationStatusDeserializer(
  item: any,
): ComputeDiskRestorePointReplicationStatus {
  return {
    status: !item["status"]
      ? item["status"]
      : computeInstanceViewStatusDeserializer(item["status"]),
    completionPercent: item["completionPercent"],
  };
}

/** Update Restore Point collection parameters. */
export interface ComputeRestorePointCollectionUpdate extends ComputeUpdateResource {
  /** The properties of the source resource that this restore point collection is created from. */
  source?: ComputeRestorePointCollectionSourceProperties;
  /** The provisioning state of the restore point collection. */
  readonly provisioningState?: string;
  /** The unique id of the restore point collection. */
  readonly restorePointCollectionId?: string;
  /** A list containing all restore points created under this restore point collection. */
  readonly restorePoints?: ComputeRestorePoint[];
  /** This property determines whether instant access snapshot is enabled for restore points created under this restore point collection for Premium SSD v2 or Ultra disk. Instant access snapshot for Premium SSD v2 or Ultra disk is instantaneously available for restoring disk with fast restore performance. */
  instantAccess?: boolean;
}

export function computeRestorePointCollectionUpdateSerializer(
  item: ComputeRestorePointCollectionUpdate,
): any {
  return {
    tags: item["tags"],
    properties: areAllPropsUndefined(item, ["source", "instantAccess"])
      ? undefined
      : _restorePointCollectionUpdatePropertiesSerializer(item),
  };
}

/** The List restore point collection operation response. */
export interface _ComputeRestorePointCollectionListResult {
  /** Gets the list of restore point collections. */
  value: ComputeRestorePointCollection[];
  /** The uri to fetch the next page of RestorePointCollections. Call ListNext() with this to fetch the next page of RestorePointCollections. */
  nextLink?: string;
}

export function _computeRestorePointCollectionListResultDeserializer(
  item: any,
): _ComputeRestorePointCollectionListResult {
  return {
    value: computeRestorePointCollectionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeRestorePointCollectionArraySerializer(
  result: Array<ComputeRestorePointCollection>,
): any[] {
  return result.map((item) => {
    return computeRestorePointCollectionSerializer(item);
  });
}

export function computeRestorePointCollectionArrayDeserializer(
  result: Array<ComputeRestorePointCollection>,
): any[] {
  return result.map((item) => {
    return computeRestorePointCollectionDeserializer(item);
  });
}

/** Specifies information about the capacity reservation group that the capacity reservations should be assigned to. Currently, a capacity reservation can only be added to a capacity reservation group at creation time. An existing capacity reservation cannot be added or moved to another capacity reservation group. */
export interface ComputeCapacityReservationGroup extends TrackedResource {
  /** The availability zones. */
  zones?: string[];
  /** A list of all capacity reservation resource ids that belong to capacity reservation group. */
  readonly capacityReservations?: CommonSubResourceReadOnly[];
  /** A list of references to all virtual machines associated to the capacity reservation group. */
  readonly virtualMachinesAssociated?: CommonSubResourceReadOnly[];
  /** The capacity reservation group instance view which has the list of instance views for all the capacity reservations that belong to the capacity reservation group. */
  readonly instanceView?: ComputeCapacityReservationGroupInstanceView;
  /** Specifies the settings to enable sharing across subscriptions for the capacity reservation group resource. The capacity reservation group resource can generally be shared across subscriptions belonging to a single Azure AAD tenant or across AAD tenants if there is a trust relationship established between the tenants.  Block capacity reservation does not support sharing across subscriptions. **Note:** Minimum api-version: 2023-09-01. Please refer to https://aka.ms/computereservationsharing for more details. */
  sharingProfile?: ComputeResourceSharingProfile;
  /** Indicates the type of capacity reservation. Allowed values are 'Block' for block capacity reservations and 'Targeted' for reservations that enable a VM to consume a specific capacity reservation when a capacity reservation group is provided. The reservation type is immutable and cannot be changed after it is assigned. */
  reservationType?: ComputeReservationType;
}

export function computeCapacityReservationGroupSerializer(
  item: ComputeCapacityReservationGroup,
): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, ["sharingProfile", "reservationType"])
      ? undefined
      : _capacityReservationGroupPropertiesSerializer(item),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
  };
}

export function computeCapacityReservationGroupDeserializer(
  item: any,
): ComputeCapacityReservationGroup {
  return {
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    ...(!item["properties"]
      ? item["properties"]
      : _capacityReservationGroupPropertiesDeserializer(item["properties"])),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
  };
}

/** capacity reservation group Properties. */
export interface ComputeCapacityReservationGroupProperties {
  /** A list of all capacity reservation resource ids that belong to capacity reservation group. */
  readonly capacityReservations?: CommonSubResourceReadOnly[];
  /** A list of references to all virtual machines associated to the capacity reservation group. */
  readonly virtualMachinesAssociated?: CommonSubResourceReadOnly[];
  /** The capacity reservation group instance view which has the list of instance views for all the capacity reservations that belong to the capacity reservation group. */
  readonly instanceView?: ComputeCapacityReservationGroupInstanceView;
  /** Specifies the settings to enable sharing across subscriptions for the capacity reservation group resource. The capacity reservation group resource can generally be shared across subscriptions belonging to a single Azure AAD tenant or across AAD tenants if there is a trust relationship established between the tenants.  Block capacity reservation does not support sharing across subscriptions. **Note:** Minimum api-version: 2023-09-01. Please refer to https://aka.ms/computereservationsharing for more details. */
  sharingProfile?: ComputeResourceSharingProfile;
  /** Indicates the type of capacity reservation. Allowed values are 'Block' for block capacity reservations and 'Targeted' for reservations that enable a VM to consume a specific capacity reservation when a capacity reservation group is provided. The reservation type is immutable and cannot be changed after it is assigned. */
  reservationType?: ComputeReservationType;
}

export function computeCapacityReservationGroupPropertiesSerializer(
  item: ComputeCapacityReservationGroupProperties,
): any {
  return {
    sharingProfile: !item["sharingProfile"]
      ? item["sharingProfile"]
      : computeResourceSharingProfileSerializer(item["sharingProfile"]),
    reservationType: item["reservationType"],
  };
}

export function computeCapacityReservationGroupPropertiesDeserializer(
  item: any,
): ComputeCapacityReservationGroupProperties {
  return {
    capacityReservations: !item["capacityReservations"]
      ? item["capacityReservations"]
      : commonSubResourceReadOnlyArrayDeserializer(item["capacityReservations"]),
    virtualMachinesAssociated: !item["virtualMachinesAssociated"]
      ? item["virtualMachinesAssociated"]
      : commonSubResourceReadOnlyArrayDeserializer(item["virtualMachinesAssociated"]),
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeCapacityReservationGroupInstanceViewDeserializer(item["instanceView"]),
    sharingProfile: !item["sharingProfile"]
      ? item["sharingProfile"]
      : computeResourceSharingProfileDeserializer(item["sharingProfile"]),
    reservationType: item["reservationType"],
  };
}

/** model interface ComputeCapacityReservationGroupInstanceView */
export interface ComputeCapacityReservationGroupInstanceView {
  /** List of instance view of the capacity reservations under the capacity reservation group. */
  readonly capacityReservations?: ComputeCapacityReservationInstanceViewWithName[];
  /** List of the subscriptions that the capacity reservation group is shared with. **Note:** Minimum api-version: 2023-09-01. Please refer to https://aka.ms/computereservationsharing for more details. */
  readonly sharedSubscriptionIds?: CommonSubResourceReadOnly[];
}

export function computeCapacityReservationGroupInstanceViewDeserializer(
  item: any,
): ComputeCapacityReservationGroupInstanceView {
  return {
    capacityReservations: !item["capacityReservations"]
      ? item["capacityReservations"]
      : computeCapacityReservationInstanceViewWithNameArrayDeserializer(
          item["capacityReservations"],
        ),
    sharedSubscriptionIds: !item["sharedSubscriptionIds"]
      ? item["sharedSubscriptionIds"]
      : commonSubResourceReadOnlyArrayDeserializer(item["sharedSubscriptionIds"]),
  };
}

export function computeCapacityReservationInstanceViewWithNameArrayDeserializer(
  result: Array<ComputeCapacityReservationInstanceViewWithName>,
): any[] {
  return result.map((item) => {
    return computeCapacityReservationInstanceViewWithNameDeserializer(item);
  });
}

/** The instance view of a capacity reservation that includes the name of the capacity reservation. It is used for the response to the instance view of a capacity reservation group. */
export interface ComputeCapacityReservationInstanceViewWithName extends ComputeCapacityReservationInstanceView {
  /** The name of the capacity reservation. */
  readonly name?: string;
}

export function computeCapacityReservationInstanceViewWithNameDeserializer(
  item: any,
): ComputeCapacityReservationInstanceViewWithName {
  return {
    utilizationInfo: !item["utilizationInfo"]
      ? item["utilizationInfo"]
      : computeCapacityReservationUtilizationDeserializer(item["utilizationInfo"]),
    statuses: !item["statuses"]
      ? item["statuses"]
      : computeInstanceViewStatusArrayDeserializer(item["statuses"]),
    name: item["name"],
  };
}

/** model interface ComputeResourceSharingProfile */
export interface ComputeResourceSharingProfile {
  /** Specifies an array of subscription resource IDs that capacity reservation group is shared with. Block Capacity Reservations does not support sharing across subscriptions. **Note:** Minimum api-version: 2023-09-01. Please refer to https://aka.ms/computereservationsharing for more details. */
  subscriptionIds?: CommonSubResource[];
}

export function computeResourceSharingProfileSerializer(item: ComputeResourceSharingProfile): any {
  return {
    subscriptionIds: !item["subscriptionIds"]
      ? item["subscriptionIds"]
      : commonSubResourceArraySerializer(item["subscriptionIds"]),
  };
}

export function computeResourceSharingProfileDeserializer(
  item: any,
): ComputeResourceSharingProfile {
  return {
    subscriptionIds: !item["subscriptionIds"]
      ? item["subscriptionIds"]
      : commonSubResourceArrayDeserializer(item["subscriptionIds"]),
  };
}

/** Indicates the type of capacity reservation. Allowed values are 'Block' for block capacity reservations and 'Targeted' for reservations that enable a VM to consume a specific capacity reservation when a capacity reservation group is provided. The reservation type is immutable and cannot be changed after it is assigned. */
export enum KnownComputeReservationType {
  /** To consume on demand allocated capacity reservation when a capacity reservation group is provided. */
  Targeted = "Targeted",
  /** To consume scheduled allocated block capacity reservation when a capacity reservation group is provided. */
  Block = "Block",
}

/**
 * Indicates the type of capacity reservation. Allowed values are 'Block' for block capacity reservations and 'Targeted' for reservations that enable a VM to consume a specific capacity reservation when a capacity reservation group is provided. The reservation type is immutable and cannot be changed after it is assigned. \
 * {@link KnownComputeReservationType} can be used interchangeably with ComputeReservationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Targeted**: To consume on demand allocated capacity reservation when a capacity reservation group is provided. \
 * **Block**: To consume scheduled allocated block capacity reservation when a capacity reservation group is provided.
 */
export type ComputeReservationType = string;

/** The instance view of a capacity reservation that provides as snapshot of the runtime properties of the capacity reservation that is managed by the platform and can change outside of control plane operations. */
export interface ComputeCapacityReservationInstanceView {
  /** Unutilized capacity of the capacity reservation. */
  utilizationInfo?: ComputeCapacityReservationUtilization;
  /** The resource status information. */
  statuses?: ComputeInstanceViewStatus[];
}

export function computeCapacityReservationInstanceViewDeserializer(
  item: any,
): ComputeCapacityReservationInstanceView {
  return {
    utilizationInfo: !item["utilizationInfo"]
      ? item["utilizationInfo"]
      : computeCapacityReservationUtilizationDeserializer(item["utilizationInfo"]),
    statuses: !item["statuses"]
      ? item["statuses"]
      : computeInstanceViewStatusArrayDeserializer(item["statuses"]),
  };
}

/** Represents the capacity reservation utilization in terms of resources allocated. */
export interface ComputeCapacityReservationUtilization {
  /** The value provides the current capacity of the VM size which was reserved successfully and for which the customer is getting billed. Minimum api-version: 2022-08-01. */
  readonly currentCapacity?: number;
  /** A list of all virtual machines resource ids allocated against the capacity reservation. */
  readonly virtualMachinesAllocated?: CommonSubResourceReadOnly[];
}

export function computeCapacityReservationUtilizationDeserializer(
  item: any,
): ComputeCapacityReservationUtilization {
  return {
    currentCapacity: item["currentCapacity"],
    virtualMachinesAllocated: !item["virtualMachinesAllocated"]
      ? item["virtualMachinesAllocated"]
      : commonSubResourceReadOnlyArrayDeserializer(item["virtualMachinesAllocated"]),
  };
}

/** Specifies information about the capacity reservation group. Only tags can be updated. */
export interface ComputeCapacityReservationGroupUpdate extends ComputeUpdateResource {
  /** A list of all capacity reservation resource ids that belong to capacity reservation group. */
  readonly capacityReservations?: CommonSubResourceReadOnly[];
  /** A list of references to all virtual machines associated to the capacity reservation group. */
  readonly virtualMachinesAssociated?: CommonSubResourceReadOnly[];
  /** The capacity reservation group instance view which has the list of instance views for all the capacity reservations that belong to the capacity reservation group. */
  readonly instanceView?: ComputeCapacityReservationGroupInstanceView;
  /** Specifies the settings to enable sharing across subscriptions for the capacity reservation group resource. The capacity reservation group resource can generally be shared across subscriptions belonging to a single Azure AAD tenant or across AAD tenants if there is a trust relationship established between the tenants.  Block capacity reservation does not support sharing across subscriptions. **Note:** Minimum api-version: 2023-09-01. Please refer to https://aka.ms/computereservationsharing for more details. */
  sharingProfile?: ComputeResourceSharingProfile;
  /** Indicates the type of capacity reservation. Allowed values are 'Block' for block capacity reservations and 'Targeted' for reservations that enable a VM to consume a specific capacity reservation when a capacity reservation group is provided. The reservation type is immutable and cannot be changed after it is assigned. */
  reservationType?: ComputeReservationType;
}

export function computeCapacityReservationGroupUpdateSerializer(
  item: ComputeCapacityReservationGroupUpdate,
): any {
  return {
    tags: item["tags"],
    properties: areAllPropsUndefined(item, ["sharingProfile", "reservationType"])
      ? undefined
      : _capacityReservationGroupUpdatePropertiesSerializer(item),
  };
}

/** The List capacity reservation group with resource group response. */
export interface _ComputeCapacityReservationGroupListResult {
  /** The list of capacity reservation groups. */
  value: ComputeCapacityReservationGroup[];
  /** The URI to fetch the next page of capacity reservation groups. Call ListNext() with this URI to fetch the next page of capacity reservation groups. */
  nextLink?: string;
}

export function _computeCapacityReservationGroupListResultDeserializer(
  item: any,
): _ComputeCapacityReservationGroupListResult {
  return {
    value: computeCapacityReservationGroupArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeCapacityReservationGroupArraySerializer(
  result: Array<ComputeCapacityReservationGroup>,
): any[] {
  return result.map((item) => {
    return computeCapacityReservationGroupSerializer(item);
  });
}

export function computeCapacityReservationGroupArrayDeserializer(
  result: Array<ComputeCapacityReservationGroup>,
): any[] {
  return result.map((item) => {
    return computeCapacityReservationGroupDeserializer(item);
  });
}

/** Specifies information about the capacity reservation. */
export interface ComputeCapacityReservation extends TrackedResource {
  /** SKU of the resource for which capacity needs be reserved. The SKU name and capacity is required to be set.  For Block capacity reservations, sku.capacity can only accept values 1, 2, 4, 8, 16, 32, 64. Currently VM Skus with the capability called 'CapacityReservationSupported' set to true are supported. When 'CapacityReservationSupported' is true, the SKU capability also specifies the 'SupportedCapacityReservationTypes', which lists the types of capacity reservations (such as Targeted or Block) that the SKU supports. Refer to List Microsoft.Compute SKUs in a region (https://docs.microsoft.com/rest/api/compute/resourceskus/list) for supported values. */
  sku: ComputeSku;
  /** The availability zones. */
  zones?: string[];
  /** A unique id generated and assigned to the capacity reservation by the platform which does not change throughout the lifetime of the resource. */
  readonly reservationId?: string;
  /** Specifies the value of fault domain count that Capacity Reservation supports for requested VM size. **Note:** The fault domain count specified for a resource (like virtual machines scale set) must be less than or equal to this value if it deploys using capacity reservation. Minimum api-version: 2022-08-01. */
  readonly platformFaultDomainCount?: number;
  /** A list of all virtual machine resource ids that are associated with the capacity reservation. */
  readonly virtualMachinesAssociated?: CommonSubResourceReadOnly[];
  /** The date time when the capacity reservation was last updated. */
  readonly provisioningTime?: Date;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: string;
  /** The Capacity reservation instance view. */
  readonly instanceView?: ComputeCapacityReservationInstanceView;
  /** Specifies the time at which the Capacity Reservation resource was created. Minimum api-version: 2021-11-01. */
  readonly timeCreated?: Date;
  /** Defines the schedule for Block-type capacity reservations. Specifies the schedule during which capacity reservation is active and VM or VMSS resource can be allocated using reservation. This property is required and only supported when the capacity reservation group type is 'Block'. The scheduleProfile, start, and end fields are immutable after creation. Minimum API version: 2025-04-01. Please refer to https://aka.ms/blockcapacityreservation for more details. */
  scheduleProfile?: ComputeScheduleProfile;
}

export function computeCapacityReservationSerializer(item: ComputeCapacityReservation): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, ["scheduleProfile"])
      ? undefined
      : _capacityReservationPropertiesSerializer(item),
    sku: computeSkuSerializer(item["sku"]),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
  };
}

export function computeCapacityReservationDeserializer(item: any): ComputeCapacityReservation {
  return {
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    ...(!item["properties"]
      ? item["properties"]
      : _capacityReservationPropertiesDeserializer(item["properties"])),
    sku: computeSkuDeserializer(item["sku"]),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
  };
}

/** Properties of the Capacity reservation. */
export interface ComputeCapacityReservationProperties {
  /** A unique id generated and assigned to the capacity reservation by the platform which does not change throughout the lifetime of the resource. */
  readonly reservationId?: string;
  /** Specifies the value of fault domain count that Capacity Reservation supports for requested VM size. **Note:** The fault domain count specified for a resource (like virtual machines scale set) must be less than or equal to this value if it deploys using capacity reservation. Minimum api-version: 2022-08-01. */
  readonly platformFaultDomainCount?: number;
  /** A list of all virtual machine resource ids that are associated with the capacity reservation. */
  readonly virtualMachinesAssociated?: CommonSubResourceReadOnly[];
  /** The date time when the capacity reservation was last updated. */
  readonly provisioningTime?: Date;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: string;
  /** The Capacity reservation instance view. */
  readonly instanceView?: ComputeCapacityReservationInstanceView;
  /** Specifies the time at which the Capacity Reservation resource was created. Minimum api-version: 2021-11-01. */
  readonly timeCreated?: Date;
  /** Defines the schedule for Block-type capacity reservations. Specifies the schedule during which capacity reservation is active and VM or VMSS resource can be allocated using reservation. This property is required and only supported when the capacity reservation group type is 'Block'. The scheduleProfile, start, and end fields are immutable after creation. Minimum API version: 2025-04-01. Please refer to https://aka.ms/blockcapacityreservation for more details. */
  scheduleProfile?: ComputeScheduleProfile;
}

export function computeCapacityReservationPropertiesSerializer(
  item: ComputeCapacityReservationProperties,
): any {
  return {
    scheduleProfile: !item["scheduleProfile"]
      ? item["scheduleProfile"]
      : computeScheduleProfileSerializer(item["scheduleProfile"]),
  };
}

export function computeCapacityReservationPropertiesDeserializer(
  item: any,
): ComputeCapacityReservationProperties {
  return {
    reservationId: item["reservationId"],
    platformFaultDomainCount: item["platformFaultDomainCount"],
    virtualMachinesAssociated: !item["virtualMachinesAssociated"]
      ? item["virtualMachinesAssociated"]
      : commonSubResourceReadOnlyArrayDeserializer(item["virtualMachinesAssociated"]),
    provisioningTime: !item["provisioningTime"]
      ? item["provisioningTime"]
      : new Date(item["provisioningTime"]),
    provisioningState: item["provisioningState"],
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeCapacityReservationInstanceViewDeserializer(item["instanceView"]),
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
    scheduleProfile: !item["scheduleProfile"]
      ? item["scheduleProfile"]
      : computeScheduleProfileDeserializer(item["scheduleProfile"]),
  };
}

/** Defines the schedule for Block-type capacity reservations. Specifies the schedule during which capacity reservation is active and VM or VMSS resource can be allocated using reservation. This property is required and only supported when the capacity reservation group type is 'Block'. The scheduleProfile, start, and end fields are immutable after creation. Minimum API version: 2025-04-01. Please refer to https://aka.ms/blockcapacityreservation for more details. */
export interface ComputeScheduleProfile {
  /** The required start date for block capacity reservations. Must be today or within 56 days in the future. For same-day scheduling, requests must be submitted before 11:30 AM UTC. Example: 2025-06-27. */
  start?: string;
  /** The required end date for block capacity reservations. Must be after the start date, with a duration of either 1–14 whole days or 3–26 whole weeks. Example: 2025-06-28. */
  end?: string;
}

export function computeScheduleProfileSerializer(item: ComputeScheduleProfile): any {
  return { start: item["start"], end: item["end"] };
}

export function computeScheduleProfileDeserializer(item: any): ComputeScheduleProfile {
  return {
    start: item["start"],
    end: item["end"],
  };
}

/** Specifies information about the capacity reservation. sku.capacity cannot be updated for Block Capacity Reservation. Tags can be update for all Capacity Reservation Types. */
export interface ComputeCapacityReservationUpdate extends ComputeUpdateResource {
  /** SKU of the resource for which capacity needs be reserved. The SKU name and capacity is required to be set. Currently VM Skus with the capability called 'CapacityReservationSupported' set to true are supported. When 'CapacityReservationSupported' is true, the SKU capability also specifies the 'SupportedCapacityReservationTypes', which lists the types of capacity reservations (such as Targeted or Block) that the SKU supports. Refer to List Microsoft.Compute SKUs in a region (https://docs.microsoft.com/rest/api/compute/resourceskus/list) for supported values. **Note:** The SKU name and capacity cannot be updated for Block capacity reservations. */
  sku?: ComputeSku;
  /** A unique id generated and assigned to the capacity reservation by the platform which does not change throughout the lifetime of the resource. */
  readonly reservationId?: string;
  /** Specifies the value of fault domain count that Capacity Reservation supports for requested VM size. **Note:** The fault domain count specified for a resource (like virtual machines scale set) must be less than or equal to this value if it deploys using capacity reservation. Minimum api-version: 2022-08-01. */
  readonly platformFaultDomainCount?: number;
  /** A list of all virtual machine resource ids that are associated with the capacity reservation. */
  readonly virtualMachinesAssociated?: CommonSubResourceReadOnly[];
  /** The date time when the capacity reservation was last updated. */
  readonly provisioningTime?: Date;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: string;
  /** The Capacity reservation instance view. */
  readonly instanceView?: ComputeCapacityReservationInstanceView;
  /** Specifies the time at which the Capacity Reservation resource was created. Minimum api-version: 2021-11-01. */
  readonly timeCreated?: Date;
  /** Defines the schedule for Block-type capacity reservations. Specifies the schedule during which capacity reservation is active and VM or VMSS resource can be allocated using reservation. This property is required and only supported when the capacity reservation group type is 'Block'. The scheduleProfile, start, and end fields are immutable after creation. Minimum API version: 2025-04-01. Please refer to https://aka.ms/blockcapacityreservation for more details. */
  scheduleProfile?: ComputeScheduleProfile;
}

export function computeCapacityReservationUpdateSerializer(
  item: ComputeCapacityReservationUpdate,
): any {
  return {
    tags: item["tags"],
    properties: areAllPropsUndefined(item, ["scheduleProfile"])
      ? undefined
      : _capacityReservationUpdatePropertiesSerializer(item),
    sku: !item["sku"] ? item["sku"] : computeSkuSerializer(item["sku"]),
  };
}

/** The list capacity reservation operation response. */
export interface _ComputeCapacityReservationListResult {
  /** The list of capacity reservations. */
  value: ComputeCapacityReservation[];
  /** The URI to fetch the next page of capacity reservations. Call ListNext() with this URI to fetch the next page of capacity reservations. */
  nextLink?: string;
}

export function _computeCapacityReservationListResultDeserializer(
  item: any,
): _ComputeCapacityReservationListResult {
  return {
    value: computeCapacityReservationArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeCapacityReservationArraySerializer(
  result: Array<ComputeCapacityReservation>,
): any[] {
  return result.map((item) => {
    return computeCapacityReservationSerializer(item);
  });
}

export function computeCapacityReservationArrayDeserializer(
  result: Array<ComputeCapacityReservation>,
): any[] {
  return result.map((item) => {
    return computeCapacityReservationDeserializer(item);
  });
}

/** Describes a Virtual Machine run command. */
export interface ComputeVirtualMachineRunCommand extends TrackedResource {
  /** The source of the run command script. */
  source?: ComputeVirtualMachineRunCommandScriptSource;
  /** The parameters used by the script. */
  parameters?: ComputeRunCommandInputParameter[];
  /** The parameters used by the script. */
  protectedParameters?: ComputeRunCommandInputParameter[];
  /** Optional. If set to true, provisioning will complete as soon as the script starts and will not wait for script to complete. */
  asyncExecution?: boolean;
  /** Specifies the user account on the VM when executing the run command. */
  runAsUser?: string;
  /** Specifies the user account password on the VM when executing the run command. */
  runAsPassword?: string;
  /** The timeout in seconds to execute the run command. */
  timeoutInSeconds?: number;
  /** Specifies the Azure storage blob where script output stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer outputBlobManagedIdentity parameter. */
  outputBlobUri?: string;
  /** Specifies the Azure storage blob where script error stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer errorBlobManagedIdentity parameter. */
  errorBlobUri?: string;
  /** User-assigned managed identity that has access to outputBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged */
  outputBlobManagedIdentity?: ComputeRunCommandManagedIdentity;
  /** User-assigned managed identity that has access to errorBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged */
  errorBlobManagedIdentity?: ComputeRunCommandManagedIdentity;
  /** The provisioning state, which only appears in the response. If treatFailureAsDeploymentFailure set to true, any failure in the script will fail the deployment and ProvisioningState will be marked as Failed. If treatFailureAsDeploymentFailure set to false, ProvisioningState would only reflect whether the run command was run or not by the extensions platform, it would not indicate whether script failed in case of script failures. See instance view of run command in case of script failures to see executionMessage, output, error: https://aka.ms/runcommandmanaged#get-execution-status-and-results */
  readonly provisioningState?: string;
  /** The virtual machine run command instance view. */
  readonly instanceView?: ComputeVirtualMachineRunCommandInstanceView;
  /** Optional. If set to true, any failure in the script will fail the deployment and ProvisioningState will be marked as Failed. If set to false, ProvisioningState would only reflect whether the run command was run or not by the extensions platform, it would not indicate whether script failed in case of script failures. See instance view of run command in case of script failures to see executionMessage, output, error: https://aka.ms/runcommandmanaged#get-execution-status-and-results */
  treatFailureAsDeploymentFailure?: boolean;
}

export function computeVirtualMachineRunCommandSerializer(
  item: ComputeVirtualMachineRunCommand,
): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, [
      "source",
      "parameters",
      "protectedParameters",
      "asyncExecution",
      "runAsUser",
      "runAsPassword",
      "timeoutInSeconds",
      "outputBlobUri",
      "errorBlobUri",
      "outputBlobManagedIdentity",
      "errorBlobManagedIdentity",
      "treatFailureAsDeploymentFailure",
    ])
      ? undefined
      : _virtualMachineRunCommandPropertiesSerializer(item),
  };
}

export function computeVirtualMachineRunCommandDeserializer(
  item: any,
): ComputeVirtualMachineRunCommand {
  return {
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    ...(!item["properties"]
      ? item["properties"]
      : _virtualMachineRunCommandPropertiesDeserializer(item["properties"])),
  };
}

/** Describes the properties of a Virtual Machine run command. */
export interface ComputeVirtualMachineRunCommandProperties {
  /** The source of the run command script. */
  source?: ComputeVirtualMachineRunCommandScriptSource;
  /** The parameters used by the script. */
  parameters?: ComputeRunCommandInputParameter[];
  /** The parameters used by the script. */
  protectedParameters?: ComputeRunCommandInputParameter[];
  /** Optional. If set to true, provisioning will complete as soon as the script starts and will not wait for script to complete. */
  asyncExecution?: boolean;
  /** Specifies the user account on the VM when executing the run command. */
  runAsUser?: string;
  /** Specifies the user account password on the VM when executing the run command. */
  runAsPassword?: string;
  /** The timeout in seconds to execute the run command. */
  timeoutInSeconds?: number;
  /** Specifies the Azure storage blob where script output stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer outputBlobManagedIdentity parameter. */
  outputBlobUri?: string;
  /** Specifies the Azure storage blob where script error stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer errorBlobManagedIdentity parameter. */
  errorBlobUri?: string;
  /** User-assigned managed identity that has access to outputBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged */
  outputBlobManagedIdentity?: ComputeRunCommandManagedIdentity;
  /** User-assigned managed identity that has access to errorBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged */
  errorBlobManagedIdentity?: ComputeRunCommandManagedIdentity;
  /** The provisioning state, which only appears in the response. If treatFailureAsDeploymentFailure set to true, any failure in the script will fail the deployment and ProvisioningState will be marked as Failed. If treatFailureAsDeploymentFailure set to false, ProvisioningState would only reflect whether the run command was run or not by the extensions platform, it would not indicate whether script failed in case of script failures. See instance view of run command in case of script failures to see executionMessage, output, error: https://aka.ms/runcommandmanaged#get-execution-status-and-results */
  readonly provisioningState?: string;
  /** The virtual machine run command instance view. */
  readonly instanceView?: ComputeVirtualMachineRunCommandInstanceView;
  /** Optional. If set to true, any failure in the script will fail the deployment and ProvisioningState will be marked as Failed. If set to false, ProvisioningState would only reflect whether the run command was run or not by the extensions platform, it would not indicate whether script failed in case of script failures. See instance view of run command in case of script failures to see executionMessage, output, error: https://aka.ms/runcommandmanaged#get-execution-status-and-results */
  treatFailureAsDeploymentFailure?: boolean;
}

export function computeVirtualMachineRunCommandPropertiesSerializer(
  item: ComputeVirtualMachineRunCommandProperties,
): any {
  return {
    source: !item["source"]
      ? item["source"]
      : computeVirtualMachineRunCommandScriptSourceSerializer(item["source"]),
    parameters: !item["parameters"]
      ? item["parameters"]
      : computeRunCommandInputParameterArraySerializer(item["parameters"]),
    protectedParameters: !item["protectedParameters"]
      ? item["protectedParameters"]
      : computeRunCommandInputParameterArraySerializer(item["protectedParameters"]),
    asyncExecution: item["asyncExecution"],
    runAsUser: item["runAsUser"],
    runAsPassword: item["runAsPassword"],
    timeoutInSeconds: item["timeoutInSeconds"],
    outputBlobUri: item["outputBlobUri"],
    errorBlobUri: item["errorBlobUri"],
    outputBlobManagedIdentity: !item["outputBlobManagedIdentity"]
      ? item["outputBlobManagedIdentity"]
      : computeRunCommandManagedIdentitySerializer(item["outputBlobManagedIdentity"]),
    errorBlobManagedIdentity: !item["errorBlobManagedIdentity"]
      ? item["errorBlobManagedIdentity"]
      : computeRunCommandManagedIdentitySerializer(item["errorBlobManagedIdentity"]),
    treatFailureAsDeploymentFailure: item["treatFailureAsDeploymentFailure"],
  };
}

export function computeVirtualMachineRunCommandPropertiesDeserializer(
  item: any,
): ComputeVirtualMachineRunCommandProperties {
  return {
    source: !item["source"]
      ? item["source"]
      : computeVirtualMachineRunCommandScriptSourceDeserializer(item["source"]),
    parameters: !item["parameters"]
      ? item["parameters"]
      : computeRunCommandInputParameterArrayDeserializer(item["parameters"]),
    protectedParameters: !item["protectedParameters"]
      ? item["protectedParameters"]
      : computeRunCommandInputParameterArrayDeserializer(item["protectedParameters"]),
    asyncExecution: item["asyncExecution"],
    runAsUser: item["runAsUser"],
    runAsPassword: item["runAsPassword"],
    timeoutInSeconds: item["timeoutInSeconds"],
    outputBlobUri: item["outputBlobUri"],
    errorBlobUri: item["errorBlobUri"],
    outputBlobManagedIdentity: !item["outputBlobManagedIdentity"]
      ? item["outputBlobManagedIdentity"]
      : computeRunCommandManagedIdentityDeserializer(item["outputBlobManagedIdentity"]),
    errorBlobManagedIdentity: !item["errorBlobManagedIdentity"]
      ? item["errorBlobManagedIdentity"]
      : computeRunCommandManagedIdentityDeserializer(item["errorBlobManagedIdentity"]),
    provisioningState: item["provisioningState"],
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeVirtualMachineRunCommandInstanceViewDeserializer(item["instanceView"]),
    treatFailureAsDeploymentFailure: item["treatFailureAsDeploymentFailure"],
  };
}

/** Describes the script sources for run command. Use only one of these script sources: script, scriptUri, commandId, galleryScriptReferenceId. */
export interface ComputeVirtualMachineRunCommandScriptSource {
  /** Specifies the script content to be executed on the VM. */
  script?: string;
  /** Specifies the script download location. It can be either SAS URI of an Azure storage blob with read access or public URI. */
  scriptUri?: string;
  /** Specifies a commandId of predefined built-in script. Command IDs available for Linux are listed at https://aka.ms/RunCommandManagedLinux#available-commands, Windows at https://aka.ms/RunCommandManagedWindows#available-commands. */
  commandId?: string;
  /** User-assigned managed identity that has access to scriptUri in case of Azure storage blob. Use an empty object in case of system-assigned identity. Make sure the Azure storage blob exists, and managed identity has been given access to blob's container with 'Storage Blob Data Reader' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged. */
  scriptUriManagedIdentity?: ComputeRunCommandManagedIdentity;
  /** Optional. Specify which shell to use for running the script. These values must match those expected by the extension. Currently supported only for Windows VMs, script uses Powershell 7 when specified. Powershell 7 must be already installed on the machine to use Powershell7 parameter value. */
  scriptShell?: ComputeScriptShellTypes;
  /** The resource ID of a Gallery Script version that needs to be executed. Example ID looks like /subscriptions/{subId}/resourceGroups/{rgName}/providers/Microsoft.Compute/galleries/{galleryName}/scripts/{scriptName}/versions/{version}. */
  galleryScriptReferenceId?: string;
}

export function computeVirtualMachineRunCommandScriptSourceSerializer(
  item: ComputeVirtualMachineRunCommandScriptSource,
): any {
  return {
    script: item["script"],
    scriptUri: item["scriptUri"],
    commandId: item["commandId"],
    scriptUriManagedIdentity: !item["scriptUriManagedIdentity"]
      ? item["scriptUriManagedIdentity"]
      : computeRunCommandManagedIdentitySerializer(item["scriptUriManagedIdentity"]),
    scriptShell: item["scriptShell"],
    galleryScriptReferenceId: item["galleryScriptReferenceId"],
  };
}

export function computeVirtualMachineRunCommandScriptSourceDeserializer(
  item: any,
): ComputeVirtualMachineRunCommandScriptSource {
  return {
    script: item["script"],
    scriptUri: item["scriptUri"],
    commandId: item["commandId"],
    scriptUriManagedIdentity: !item["scriptUriManagedIdentity"]
      ? item["scriptUriManagedIdentity"]
      : computeRunCommandManagedIdentityDeserializer(item["scriptUriManagedIdentity"]),
    scriptShell: item["scriptShell"],
    galleryScriptReferenceId: item["galleryScriptReferenceId"],
  };
}

/** Contains clientId or objectId (use only one, not both) of a user-assigned managed identity that has access to storage blob used in Run Command. Use an empty RunCommandManagedIdentity object in case of system-assigned identity. Make sure the Azure storage blob exists in case of scriptUri, and managed identity has been given access to blob's container with 'Storage Blob Data Reader' role assignment with scriptUri blob and 'Storage Blob Data Contributor' for Append blobs(outputBlobUri, errorBlobUri). In case of user assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged. */
export interface ComputeRunCommandManagedIdentity {
  /** Client Id (GUID value) of the user-assigned managed identity. ObjectId should not be used if this is provided. */
  clientId?: string;
  /** Object Id (GUID value) of the user-assigned managed identity. ClientId should not be used if this is provided. */
  objectId?: string;
}

export function computeRunCommandManagedIdentitySerializer(
  item: ComputeRunCommandManagedIdentity,
): any {
  return { clientId: item["clientId"], objectId: item["objectId"] };
}

export function computeRunCommandManagedIdentityDeserializer(
  item: any,
): ComputeRunCommandManagedIdentity {
  return {
    clientId: item["clientId"],
    objectId: item["objectId"],
  };
}

/** Script shell types. */
export enum KnownComputeScriptShellTypes {
  /** Default script shell type. */
  Default = "Default",
  /** Powershell7 script shell type. */
  Powershell7 = "Powershell7",
}

/**
 * Script shell types. \
 * {@link KnownComputeScriptShellTypes} can be used interchangeably with ComputeScriptShellTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Default**: Default script shell type. \
 * **Powershell7**: Powershell7 script shell type.
 */
export type ComputeScriptShellTypes = string;

/** The instance view of a virtual machine run command. */
export interface ComputeVirtualMachineRunCommandInstanceView {
  /** Script execution status. */
  executionState?: ComputeExecutionState;
  /** Communicate script configuration errors or execution messages. */
  executionMessage?: string;
  /** Exit code returned from script execution. */
  exitCode?: number;
  /** Script output stream. */
  output?: string;
  /** Script error stream. */
  error?: string;
  /** Script start time. */
  startTime?: Date;
  /** Script end time. */
  endTime?: Date;
  /** The resource status information. */
  statuses?: ComputeInstanceViewStatus[];
}

export function computeVirtualMachineRunCommandInstanceViewDeserializer(
  item: any,
): ComputeVirtualMachineRunCommandInstanceView {
  return {
    executionState: item["executionState"],
    executionMessage: item["executionMessage"],
    exitCode: item["exitCode"],
    output: item["output"],
    error: item["error"],
    startTime: !item["startTime"] ? item["startTime"] : new Date(item["startTime"]),
    endTime: !item["endTime"] ? item["endTime"] : new Date(item["endTime"]),
    statuses: !item["statuses"]
      ? item["statuses"]
      : computeInstanceViewStatusArrayDeserializer(item["statuses"]),
  };
}

/** Script execution status. */
export enum KnownComputeExecutionState {
  /** Unknown */
  Unknown = "Unknown",
  /** Pending */
  Pending = "Pending",
  /** Running */
  Running = "Running",
  /** Failed */
  Failed = "Failed",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** TimedOut */
  TimedOut = "TimedOut",
  /** Canceled */
  Canceled = "Canceled",
}

/**
 * Script execution status. \
 * {@link KnownComputeExecutionState} can be used interchangeably with ComputeExecutionState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Pending** \
 * **Running** \
 * **Failed** \
 * **Succeeded** \
 * **TimedOut** \
 * **Canceled**
 */
export type ComputeExecutionState = string;

/** Describes a Virtual Machine run command. */
export interface ComputeVirtualMachineRunCommandUpdate extends ComputeUpdateResource {
  /** The source of the run command script. */
  source?: ComputeVirtualMachineRunCommandScriptSource;
  /** The parameters used by the script. */
  parameters?: ComputeRunCommandInputParameter[];
  /** The parameters used by the script. */
  protectedParameters?: ComputeRunCommandInputParameter[];
  /** Optional. If set to true, provisioning will complete as soon as the script starts and will not wait for script to complete. */
  asyncExecution?: boolean;
  /** Specifies the user account on the VM when executing the run command. */
  runAsUser?: string;
  /** Specifies the user account password on the VM when executing the run command. */
  runAsPassword?: string;
  /** The timeout in seconds to execute the run command. */
  timeoutInSeconds?: number;
  /** Specifies the Azure storage blob where script output stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer outputBlobManagedIdentity parameter. */
  outputBlobUri?: string;
  /** Specifies the Azure storage blob where script error stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer errorBlobManagedIdentity parameter. */
  errorBlobUri?: string;
  /** User-assigned managed identity that has access to outputBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged */
  outputBlobManagedIdentity?: ComputeRunCommandManagedIdentity;
  /** User-assigned managed identity that has access to errorBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged */
  errorBlobManagedIdentity?: ComputeRunCommandManagedIdentity;
  /** The provisioning state, which only appears in the response. If treatFailureAsDeploymentFailure set to true, any failure in the script will fail the deployment and ProvisioningState will be marked as Failed. If treatFailureAsDeploymentFailure set to false, ProvisioningState would only reflect whether the run command was run or not by the extensions platform, it would not indicate whether script failed in case of script failures. See instance view of run command in case of script failures to see executionMessage, output, error: https://aka.ms/runcommandmanaged#get-execution-status-and-results */
  readonly provisioningState?: string;
  /** The virtual machine run command instance view. */
  readonly instanceView?: ComputeVirtualMachineRunCommandInstanceView;
  /** Optional. If set to true, any failure in the script will fail the deployment and ProvisioningState will be marked as Failed. If set to false, ProvisioningState would only reflect whether the run command was run or not by the extensions platform, it would not indicate whether script failed in case of script failures. See instance view of run command in case of script failures to see executionMessage, output, error: https://aka.ms/runcommandmanaged#get-execution-status-and-results */
  treatFailureAsDeploymentFailure?: boolean;
}

export function computeVirtualMachineRunCommandUpdateSerializer(
  item: ComputeVirtualMachineRunCommandUpdate,
): any {
  return {
    tags: item["tags"],
    properties: areAllPropsUndefined(item, [
      "source",
      "parameters",
      "protectedParameters",
      "asyncExecution",
      "runAsUser",
      "runAsPassword",
      "timeoutInSeconds",
      "outputBlobUri",
      "errorBlobUri",
      "outputBlobManagedIdentity",
      "errorBlobManagedIdentity",
      "treatFailureAsDeploymentFailure",
    ])
      ? undefined
      : _virtualMachineRunCommandUpdatePropertiesSerializer(item),
  };
}

/** The List run command operation response */
export interface _ComputeVirtualMachineRunCommandsListResult {
  /** The list of run commands. */
  value: ComputeVirtualMachineRunCommand[];
  /** The uri to fetch the next page of run commands. */
  nextLink?: string;
}

export function _computeVirtualMachineRunCommandsListResultDeserializer(
  item: any,
): _ComputeVirtualMachineRunCommandsListResult {
  return {
    value: computeVirtualMachineRunCommandArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeVirtualMachineRunCommandArraySerializer(
  result: Array<ComputeVirtualMachineRunCommand>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineRunCommandSerializer(item);
  });
}

export function computeVirtualMachineRunCommandArrayDeserializer(
  result: Array<ComputeVirtualMachineRunCommand>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineRunCommandDeserializer(item);
  });
}

/** The List Virtual Machine operation response. */
export interface _ComputeRunCommandListResult {
  /** The list of virtual machine run commands. */
  value: ComputeRunCommandDocumentBase[];
  /** The uri to fetch the next page of run commands. Call ListNext() with this to fetch the next page of run commands. */
  nextLink?: string;
}

export function _computeRunCommandListResultDeserializer(item: any): _ComputeRunCommandListResult {
  return {
    value: computeRunCommandDocumentBaseArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeRunCommandDocumentBaseArrayDeserializer(
  result: Array<ComputeRunCommandDocumentBase>,
): any[] {
  return result.map((item) => {
    return computeRunCommandDocumentBaseDeserializer(item);
  });
}

/** Describes the properties of a Run Command metadata. */
export interface ComputeRunCommandDocumentBase {
  /** The VM run command schema. */
  schema: string;
  /** The VM run command id. */
  id: string;
  /** The Operating System type. */
  osType: CommonOperatingSystemTypes;
  /** The VM run command label. */
  label: string;
  /** The VM run command description. */
  description: string;
}

export function computeRunCommandDocumentBaseDeserializer(
  item: any,
): ComputeRunCommandDocumentBase {
  return {
    schema: item["$schema"],
    id: item["id"],
    osType: item["osType"],
    label: item["label"],
    description: item["description"],
  };
}

/** Describes the properties of a Run Command. */
export interface ComputeRunCommandDocument extends ComputeRunCommandDocumentBase {
  /** The script to be executed. */
  script: string[];
  /** The parameters used by the script. */
  parameters?: ComputeRunCommandParameterDefinition[];
}

export function computeRunCommandDocumentDeserializer(item: any): ComputeRunCommandDocument {
  return {
    schema: item["$schema"],
    id: item["id"],
    osType: item["osType"],
    label: item["label"],
    description: item["description"],
    script: item["script"].map((p: any) => {
      return p;
    }),
    parameters: !item["parameters"]
      ? item["parameters"]
      : computeRunCommandParameterDefinitionArrayDeserializer(item["parameters"]),
  };
}

export function computeRunCommandParameterDefinitionArrayDeserializer(
  result: Array<ComputeRunCommandParameterDefinition>,
): any[] {
  return result.map((item) => {
    return computeRunCommandParameterDefinitionDeserializer(item);
  });
}

/** Describes the properties of a run command parameter. */
export interface ComputeRunCommandParameterDefinition {
  /** The run command parameter name. */
  name: string;
  /** The run command parameter type. */
  type: string;
  /** The run command parameter default value. */
  defaultValue?: string;
  /** The run command parameter required. */
  required?: boolean;
}

export function computeRunCommandParameterDefinitionDeserializer(
  item: any,
): ComputeRunCommandParameterDefinition {
  return {
    name: item["name"],
    type: item["type"],
    defaultValue: item["defaultValue"],
    required: item["required"],
  };
}

/** The status of the latest virtual machine scale set rolling upgrade. */
export interface ComputeRollingUpgradeStatusInfo extends TrackedResource {
  /** The rolling upgrade policies applied for this upgrade. */
  readonly policy?: ComputeRollingUpgradePolicy;
  /** Information about the current running state of the overall upgrade. */
  readonly runningStatus?: ComputeRollingUpgradeRunningStatus;
  /** Information about the number of virtual machine instances in each upgrade state. */
  readonly progress?: ComputeRollingUpgradeProgressInfo;
  /** Error details for this upgrade, if there are any. */
  readonly error?: CommonApiError;
}

export function computeRollingUpgradeStatusInfoDeserializer(
  item: any,
): ComputeRollingUpgradeStatusInfo {
  return {
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    ...(!item["properties"]
      ? item["properties"]
      : _rollingUpgradeStatusInfoPropertiesDeserializer(item["properties"])),
  };
}

/** The status of the latest virtual machine scale set rolling upgrade. */
export interface ComputeRollingUpgradeStatusInfoProperties {
  /** The rolling upgrade policies applied for this upgrade. */
  readonly policy?: ComputeRollingUpgradePolicy;
  /** Information about the current running state of the overall upgrade. */
  readonly runningStatus?: ComputeRollingUpgradeRunningStatus;
  /** Information about the number of virtual machine instances in each upgrade state. */
  readonly progress?: ComputeRollingUpgradeProgressInfo;
  /** Error details for this upgrade, if there are any. */
  readonly error?: CommonApiError;
}

export function computeRollingUpgradeStatusInfoPropertiesDeserializer(
  item: any,
): ComputeRollingUpgradeStatusInfoProperties {
  return {
    policy: !item["policy"]
      ? item["policy"]
      : computeRollingUpgradePolicyDeserializer(item["policy"]),
    runningStatus: !item["runningStatus"]
      ? item["runningStatus"]
      : computeRollingUpgradeRunningStatusDeserializer(item["runningStatus"]),
    progress: !item["progress"]
      ? item["progress"]
      : computeRollingUpgradeProgressInfoDeserializer(item["progress"]),
    error: !item["error"] ? item["error"] : commonApiErrorDeserializer(item["error"]),
  };
}

/** Information about the current running state of the overall upgrade. */
export interface ComputeRollingUpgradeRunningStatus {
  /** Code indicating the current status of the upgrade. */
  readonly code?: ComputeRollingUpgradeStatusCode;
  /** Start time of the upgrade. */
  readonly startTime?: Date;
  /** The last action performed on the rolling upgrade. */
  readonly lastAction?: ComputeRollingUpgradeActionType;
  /** Last action time of the upgrade. */
  readonly lastActionTime?: Date;
}

export function computeRollingUpgradeRunningStatusDeserializer(
  item: any,
): ComputeRollingUpgradeRunningStatus {
  return {
    code: item["code"],
    startTime: !item["startTime"] ? item["startTime"] : new Date(item["startTime"]),
    lastAction: item["lastAction"],
    lastActionTime: !item["lastActionTime"]
      ? item["lastActionTime"]
      : new Date(item["lastActionTime"]),
  };
}

/** Code indicating the current status of the upgrade. */
export type ComputeRollingUpgradeStatusCode =
  | "RollingForward"
  | "Cancelled"
  | "Completed"
  | "Faulted";
/** The last action performed on the rolling upgrade. */
export type ComputeRollingUpgradeActionType = "Start" | "Cancel";

/** Describes a virtual machine scale set virtual machine. */
export interface ComputeVirtualMachineScaleSetVM extends TrackedResource {
  /** The virtual machine instance ID. */
  readonly instanceId?: string;
  /** The virtual machine SKU. */
  readonly sku?: ComputeSku;
  /** Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**. */
  plan?: ComputePlan;
  /** The virtual machine child extension resources. */
  readonly resources?: ComputeVirtualMachineExtension[];
  /** The virtual machine zones. */
  readonly zones?: string[];
  /** The identity of the virtual machine, if configured. */
  identity?: ComputeVirtualMachineIdentity;
  /** Etag is property returned in Update/Get response of the VMSS VM, so that customer can supply it in the header to ensure optimistic updates. */
  readonly etag?: string;
  /** Specifies whether the latest model has been applied to the virtual machine. */
  readonly latestModelApplied?: boolean;
  /** Azure VM unique ID. */
  readonly vmId?: string;
  /** The virtual machine instance view. */
  readonly instanceView?: ComputeVirtualMachineScaleSetVMInstanceView;
  /** Specifies the hardware settings for the virtual machine. */
  hardwareProfile?: ComputeHardwareProfile;
  /** Specifies the resilient VM deletion status for the virtual machine. */
  resilientVMDeletionStatus?: ComputeResilientVMDeletionStatus;
  /** Specifies the storage settings for the virtual machine disks. */
  storageProfile?: ComputeStorageProfile;
  /** Specifies additional capabilities enabled or disabled on the virtual machine in the scale set. For instance: whether the virtual machine has the capability to support attaching managed data disks with UltraSSD_LRS storage account type. */
  additionalCapabilities?: ComputeAdditionalCapabilities;
  /** Specifies the operating system settings for the virtual machine. */
  osProfile?: ComputeOSProfile;
  /** Specifies the Security related profile settings for the virtual machine. */
  securityProfile?: ComputeSecurityProfile;
  /** Specifies the network interfaces of the virtual machine. */
  networkProfile?: ComputeNetworkProfile;
  /** Specifies the network profile configuration of the virtual machine. */
  networkProfileConfiguration?: ComputeVirtualMachineScaleSetVMNetworkProfileConfiguration;
  /** Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15. */
  diagnosticsProfile?: ComputeDiagnosticsProfile;
  /** Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Availability sets overview](https://docs.microsoft.com/azure/virtual-machines/availability-set-overview). For more information on Azure planned maintenance, see [Maintenance and updates for Virtual Machines in Azure](https://docs.microsoft.com/azure/virtual-machines/maintenance-and-updates). Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set. */
  availabilitySet?: CommonSubResource;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: string;
  /** Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15 */
  licenseType?: string;
  /** Specifies whether the model applied to the virtual machine is the model of the virtual machine scale set or the customized model for the virtual machine. */
  readonly modelDefinitionApplied?: string;
  /** Specifies the protection policy of the virtual machine. */
  protectionPolicy?: ComputeVirtualMachineScaleSetVMProtectionPolicy;
  /** UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum api-version: 2021-03-01 */
  userData?: string;
  /** Specifies the time at which the Virtual Machine resource was created. Minimum api-version: 2021-11-01. */
  readonly timeCreated?: Date;
}

export function computeVirtualMachineScaleSetVMSerializer(
  item: ComputeVirtualMachineScaleSetVM,
): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, [
      "hardwareProfile",
      "resilientVMDeletionStatus",
      "storageProfile",
      "additionalCapabilities",
      "osProfile",
      "securityProfile",
      "networkProfile",
      "networkProfileConfiguration",
      "diagnosticsProfile",
      "availabilitySet",
      "licenseType",
      "protectionPolicy",
      "userData",
    ])
      ? undefined
      : _virtualMachineScaleSetVMPropertiesSerializer(item),
    plan: !item["plan"] ? item["plan"] : computePlanSerializer(item["plan"]),
    identity: !item["identity"]
      ? item["identity"]
      : computeVirtualMachineIdentitySerializer(item["identity"]),
  };
}

export function computeVirtualMachineScaleSetVMDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetVM {
  return {
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    ...(!item["properties"]
      ? item["properties"]
      : _virtualMachineScaleSetVMPropertiesDeserializer(item["properties"])),
    instanceId: item["instanceId"],
    sku: !item["sku"] ? item["sku"] : computeSkuDeserializer(item["sku"]),
    plan: !item["plan"] ? item["plan"] : computePlanDeserializer(item["plan"]),
    resources: !item["resources"]
      ? item["resources"]
      : computeVirtualMachineExtensionArrayDeserializer(item["resources"]),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
    identity: !item["identity"]
      ? item["identity"]
      : computeVirtualMachineIdentityDeserializer(item["identity"]),
    etag: item["etag"],
  };
}

/** Describes the properties of a virtual machine scale set virtual machine. */
export interface ComputeVirtualMachineScaleSetVMProperties {
  /** Specifies whether the latest model has been applied to the virtual machine. */
  readonly latestModelApplied?: boolean;
  /** Azure VM unique ID. */
  readonly vmId?: string;
  /** The virtual machine instance view. */
  readonly instanceView?: ComputeVirtualMachineScaleSetVMInstanceView;
  /** Specifies the hardware settings for the virtual machine. */
  hardwareProfile?: ComputeHardwareProfile;
  /** Specifies the resilient VM deletion status for the virtual machine. */
  resilientVMDeletionStatus?: ComputeResilientVMDeletionStatus;
  /** Specifies the storage settings for the virtual machine disks. */
  storageProfile?: ComputeStorageProfile;
  /** Specifies additional capabilities enabled or disabled on the virtual machine in the scale set. For instance: whether the virtual machine has the capability to support attaching managed data disks with UltraSSD_LRS storage account type. */
  additionalCapabilities?: ComputeAdditionalCapabilities;
  /** Specifies the operating system settings for the virtual machine. */
  osProfile?: ComputeOSProfile;
  /** Specifies the Security related profile settings for the virtual machine. */
  securityProfile?: ComputeSecurityProfile;
  /** Specifies the network interfaces of the virtual machine. */
  networkProfile?: ComputeNetworkProfile;
  /** Specifies the network profile configuration of the virtual machine. */
  networkProfileConfiguration?: ComputeVirtualMachineScaleSetVMNetworkProfileConfiguration;
  /** Specifies the boot diagnostic settings state. Minimum api-version: 2015-06-15. */
  diagnosticsProfile?: ComputeDiagnosticsProfile;
  /** Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Availability sets overview](https://docs.microsoft.com/azure/virtual-machines/availability-set-overview). For more information on Azure planned maintenance, see [Maintenance and updates for Virtual Machines in Azure](https://docs.microsoft.com/azure/virtual-machines/maintenance-and-updates). Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set. */
  availabilitySet?: CommonSubResource;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: string;
  /** Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15 */
  licenseType?: string;
  /** Specifies whether the model applied to the virtual machine is the model of the virtual machine scale set or the customized model for the virtual machine. */
  readonly modelDefinitionApplied?: string;
  /** Specifies the protection policy of the virtual machine. */
  protectionPolicy?: ComputeVirtualMachineScaleSetVMProtectionPolicy;
  /** UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here. Minimum api-version: 2021-03-01 */
  userData?: string;
  /** Specifies the time at which the Virtual Machine resource was created. Minimum api-version: 2021-11-01. */
  readonly timeCreated?: Date;
}

export function computeVirtualMachineScaleSetVMPropertiesSerializer(
  item: ComputeVirtualMachineScaleSetVMProperties,
): any {
  return {
    hardwareProfile: !item["hardwareProfile"]
      ? item["hardwareProfile"]
      : computeHardwareProfileSerializer(item["hardwareProfile"]),
    resilientVMDeletionStatus: item["resilientVMDeletionStatus"],
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeStorageProfileSerializer(item["storageProfile"]),
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeAdditionalCapabilitiesSerializer(item["additionalCapabilities"]),
    osProfile: !item["osProfile"]
      ? item["osProfile"]
      : computeOSProfileSerializer(item["osProfile"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeSecurityProfileSerializer(item["securityProfile"]),
    networkProfile: !item["networkProfile"]
      ? item["networkProfile"]
      : computeNetworkProfileSerializer(item["networkProfile"]),
    networkProfileConfiguration: !item["networkProfileConfiguration"]
      ? item["networkProfileConfiguration"]
      : computeVirtualMachineScaleSetVMNetworkProfileConfigurationSerializer(
          item["networkProfileConfiguration"],
        ),
    diagnosticsProfile: !item["diagnosticsProfile"]
      ? item["diagnosticsProfile"]
      : computeDiagnosticsProfileSerializer(item["diagnosticsProfile"]),
    availabilitySet: !item["availabilitySet"]
      ? item["availabilitySet"]
      : commonSubResourceSerializer(item["availabilitySet"]),
    licenseType: item["licenseType"],
    protectionPolicy: !item["protectionPolicy"]
      ? item["protectionPolicy"]
      : computeVirtualMachineScaleSetVMProtectionPolicySerializer(item["protectionPolicy"]),
    userData: item["userData"],
  };
}

export function computeVirtualMachineScaleSetVMPropertiesDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetVMProperties {
  return {
    latestModelApplied: item["latestModelApplied"],
    vmId: item["vmId"],
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeVirtualMachineScaleSetVMInstanceViewDeserializer(item["instanceView"]),
    hardwareProfile: !item["hardwareProfile"]
      ? item["hardwareProfile"]
      : computeHardwareProfileDeserializer(item["hardwareProfile"]),
    resilientVMDeletionStatus: item["resilientVMDeletionStatus"],
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeStorageProfileDeserializer(item["storageProfile"]),
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeAdditionalCapabilitiesDeserializer(item["additionalCapabilities"]),
    osProfile: !item["osProfile"]
      ? item["osProfile"]
      : computeOSProfileDeserializer(item["osProfile"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeSecurityProfileDeserializer(item["securityProfile"]),
    networkProfile: !item["networkProfile"]
      ? item["networkProfile"]
      : computeNetworkProfileDeserializer(item["networkProfile"]),
    networkProfileConfiguration: !item["networkProfileConfiguration"]
      ? item["networkProfileConfiguration"]
      : computeVirtualMachineScaleSetVMNetworkProfileConfigurationDeserializer(
          item["networkProfileConfiguration"],
        ),
    diagnosticsProfile: !item["diagnosticsProfile"]
      ? item["diagnosticsProfile"]
      : computeDiagnosticsProfileDeserializer(item["diagnosticsProfile"]),
    availabilitySet: !item["availabilitySet"]
      ? item["availabilitySet"]
      : commonSubResourceDeserializer(item["availabilitySet"]),
    provisioningState: item["provisioningState"],
    licenseType: item["licenseType"],
    modelDefinitionApplied: item["modelDefinitionApplied"],
    protectionPolicy: !item["protectionPolicy"]
      ? item["protectionPolicy"]
      : computeVirtualMachineScaleSetVMProtectionPolicyDeserializer(item["protectionPolicy"]),
    userData: item["userData"],
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
  };
}

/** The instance view of a virtual machine scale set VM. */
export interface ComputeVirtualMachineScaleSetVMInstanceView {
  /** The Update Domain count. */
  platformUpdateDomain?: number;
  /** The Fault Domain count. */
  platformFaultDomain?: number;
  /** The Remote desktop certificate thumbprint. */
  rdpThumbPrint?: string;
  /** The VM Agent running on the virtual machine. */
  vmAgent?: ComputeVirtualMachineAgentInstanceView;
  /** The Maintenance Operation status on the virtual machine. */
  maintenanceRedeployStatus?: ComputeMaintenanceRedeployStatus;
  /** The disks information. */
  disks?: ComputeDiskInstanceView[];
  /** The extensions information. */
  extensions?: ComputeVirtualMachineExtensionInstanceView[];
  /** The health status for the VM. */
  readonly vmHealth?: ComputeVirtualMachineHealthStatus;
  /** Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. You can easily view the output of your console log. Azure also enables you to see a screenshot of the VM from the hypervisor. */
  bootDiagnostics?: ComputeBootDiagnosticsInstanceView;
  /** The resource status information. */
  statuses?: ComputeInstanceViewStatus[];
  /** Resource id of the dedicated host, on which the virtual machine is allocated through automatic placement, when the virtual machine is associated with a dedicated host group that has automatic placement enabled. Minimum api-version: 2020-06-01. */
  readonly assignedHost?: string;
  /** The placement group in which the VM is running. If the VM is deallocated it will not have a placementGroupId. */
  placementGroupId?: string;
  /** Specifies the host OS name of the virtual machine. <br><br> This name cannot be updated after the VM is created. <br><br> **Max-length (Windows):** 15 characters <br><br> **Max-length (Linux):** 64 characters. <br><br> For naming conventions and restrictions see [Azure infrastructure services implementation guidelines](https://learn.microsoft.com/previous-versions/azure/virtual-machines/linux/infrastructure-example?toc=%2Fazure%2Fvirtual-machines%2Flinux%2Ftoc.json#1-naming-conventions). */
  computerName?: string;
  /** The Operating System running on the hybrid machine. */
  osName?: string;
  /** The version of Operating System running on the hybrid machine. */
  osVersion?: string;
  /** The hypervisor generation of the Virtual Machine [V1, V2] */
  hyperVGeneration?: CommonHyperVGeneration;
}

export function computeVirtualMachineScaleSetVMInstanceViewDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetVMInstanceView {
  return {
    platformUpdateDomain: item["platformUpdateDomain"],
    platformFaultDomain: item["platformFaultDomain"],
    rdpThumbPrint: item["rdpThumbPrint"],
    vmAgent: !item["vmAgent"]
      ? item["vmAgent"]
      : computeVirtualMachineAgentInstanceViewDeserializer(item["vmAgent"]),
    maintenanceRedeployStatus: !item["maintenanceRedeployStatus"]
      ? item["maintenanceRedeployStatus"]
      : computeMaintenanceRedeployStatusDeserializer(item["maintenanceRedeployStatus"]),
    disks: !item["disks"] ? item["disks"] : computeDiskInstanceViewArrayDeserializer(item["disks"]),
    extensions: !item["extensions"]
      ? item["extensions"]
      : computeVirtualMachineExtensionInstanceViewArrayDeserializer(item["extensions"]),
    vmHealth: !item["vmHealth"]
      ? item["vmHealth"]
      : computeVirtualMachineHealthStatusDeserializer(item["vmHealth"]),
    bootDiagnostics: !item["bootDiagnostics"]
      ? item["bootDiagnostics"]
      : computeBootDiagnosticsInstanceViewDeserializer(item["bootDiagnostics"]),
    statuses: !item["statuses"]
      ? item["statuses"]
      : computeInstanceViewStatusArrayDeserializer(item["statuses"]),
    assignedHost: item["assignedHost"],
    placementGroupId: item["placementGroupId"],
    computerName: item["computerName"],
    osName: item["osName"],
    osVersion: item["osVersion"],
    hyperVGeneration: item["hyperVGeneration"],
  };
}

/** Specifies the resilient VM deletion status for the virtual machine. */
export enum KnownComputeResilientVMDeletionStatus {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled",
  /** InProgress */
  InProgress = "InProgress",
  /** Failed */
  Failed = "Failed",
}

/**
 * Specifies the resilient VM deletion status for the virtual machine. \
 * {@link KnownComputeResilientVMDeletionStatus} can be used interchangeably with ComputeResilientVMDeletionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled** \
 * **InProgress** \
 * **Failed**
 */
export type ComputeResilientVMDeletionStatus = string;

/** Describes a virtual machine scale set VM network profile. */
export interface ComputeVirtualMachineScaleSetVMNetworkProfileConfiguration {
  /** The list of network configurations. */
  networkInterfaceConfigurations?: ComputeVirtualMachineScaleSetNetworkConfiguration[];
}

export function computeVirtualMachineScaleSetVMNetworkProfileConfigurationSerializer(
  item: ComputeVirtualMachineScaleSetVMNetworkProfileConfiguration,
): any {
  return {
    networkInterfaceConfigurations: !item["networkInterfaceConfigurations"]
      ? item["networkInterfaceConfigurations"]
      : computeVirtualMachineScaleSetNetworkConfigurationArraySerializer(
          item["networkInterfaceConfigurations"],
        ),
  };
}

export function computeVirtualMachineScaleSetVMNetworkProfileConfigurationDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetVMNetworkProfileConfiguration {
  return {
    networkInterfaceConfigurations: !item["networkInterfaceConfigurations"]
      ? item["networkInterfaceConfigurations"]
      : computeVirtualMachineScaleSetNetworkConfigurationArrayDeserializer(
          item["networkInterfaceConfigurations"],
        ),
  };
}

/** The protection policy of a virtual machine scale set VM. */
export interface ComputeVirtualMachineScaleSetVMProtectionPolicy {
  /** Indicates that the virtual machine scale set VM shouldn't be considered for deletion during a scale-in operation. */
  protectFromScaleIn?: boolean;
  /** Indicates that model updates or actions (including scale-in) initiated on the virtual machine scale set should not be applied to the virtual machine scale set VM. */
  protectFromScaleSetActions?: boolean;
}

export function computeVirtualMachineScaleSetVMProtectionPolicySerializer(
  item: ComputeVirtualMachineScaleSetVMProtectionPolicy,
): any {
  return {
    protectFromScaleIn: item["protectFromScaleIn"],
    protectFromScaleSetActions: item["protectFromScaleSetActions"],
  };
}

export function computeVirtualMachineScaleSetVMProtectionPolicyDeserializer(
  item: any,
): ComputeVirtualMachineScaleSetVMProtectionPolicy {
  return {
    protectFromScaleIn: item["protectFromScaleIn"],
    protectFromScaleSetActions: item["protectFromScaleSetActions"],
  };
}

/** The List Virtual Machine Scale Set VMs operation response. */
export interface _ComputeVirtualMachineScaleSetVMListResult {
  /** The list of virtual machine scale sets VMs. */
  value: ComputeVirtualMachineScaleSetVM[];
  /** The uri to fetch the next page of Virtual Machine Scale Set VMs. Call ListNext() with this to fetch the next page of VMSS VMs. */
  nextLink?: string;
}

export function _computeVirtualMachineScaleSetVMListResultDeserializer(
  item: any,
): _ComputeVirtualMachineScaleSetVMListResult {
  return {
    value: computeVirtualMachineScaleSetVMArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeVirtualMachineScaleSetVMArraySerializer(
  result: Array<ComputeVirtualMachineScaleSetVM>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineScaleSetVMSerializer(item);
  });
}

export function computeVirtualMachineScaleSetVMArrayDeserializer(
  result: Array<ComputeVirtualMachineScaleSetVM>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineScaleSetVMDeserializer(item);
  });
}

/** Specifies information about the SSH public key. */
export interface ComputeSshPublicKeyResource extends TrackedResource {
  /** SSH public key used to authenticate to a virtual machine through ssh. If this property is not initially provided when the resource is created, the publicKey property will be populated when generateKeyPair is called. If the public key is provided upon resource creation, the provided public key needs to be at least 2048-bit and in ssh-rsa format. */
  publicKey?: string;
}

export function computeSshPublicKeyResourceSerializer(item: ComputeSshPublicKeyResource): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, ["publicKey"])
      ? undefined
      : _sshPublicKeyResourcePropertiesSerializer(item),
  };
}

export function computeSshPublicKeyResourceDeserializer(item: any): ComputeSshPublicKeyResource {
  return {
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    ...(!item["properties"]
      ? item["properties"]
      : _sshPublicKeyResourcePropertiesDeserializer(item["properties"])),
  };
}

/** Properties of the SSH public key. */
export interface ComputeSshPublicKeyResourceProperties {
  /** SSH public key used to authenticate to a virtual machine through ssh. If this property is not initially provided when the resource is created, the publicKey property will be populated when generateKeyPair is called. If the public key is provided upon resource creation, the provided public key needs to be at least 2048-bit and in ssh-rsa format. */
  publicKey?: string;
}

export function computeSshPublicKeyResourcePropertiesSerializer(
  item: ComputeSshPublicKeyResourceProperties,
): any {
  return { publicKey: item["publicKey"] };
}

export function computeSshPublicKeyResourcePropertiesDeserializer(
  item: any,
): ComputeSshPublicKeyResourceProperties {
  return {
    publicKey: item["publicKey"],
  };
}

/** Specifies information about the SSH public key. */
export interface ComputeSshPublicKeyUpdateResource extends ComputeUpdateResource {
  /** SSH public key used to authenticate to a virtual machine through ssh. If this property is not initially provided when the resource is created, the publicKey property will be populated when generateKeyPair is called. If the public key is provided upon resource creation, the provided public key needs to be at least 2048-bit and in ssh-rsa format. */
  publicKey?: string;
}

export function computeSshPublicKeyUpdateResourceSerializer(
  item: ComputeSshPublicKeyUpdateResource,
): any {
  return {
    tags: item["tags"],
    properties: areAllPropsUndefined(item, ["publicKey"])
      ? undefined
      : _sshPublicKeyUpdateResourcePropertiesSerializer(item),
  };
}

/** The list SSH public keys operation response. */
export interface _ComputeSshPublicKeysGroupListResult {
  /** The list of SSH public keys. */
  value: ComputeSshPublicKeyResource[];
  /** The URI to fetch the next page of SSH public keys. Call ListNext() with this URI to fetch the next page of SSH public keys. */
  nextLink?: string;
}

export function _computeSshPublicKeysGroupListResultDeserializer(
  item: any,
): _ComputeSshPublicKeysGroupListResult {
  return {
    value: computeSshPublicKeyResourceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeSshPublicKeyResourceArraySerializer(
  result: Array<ComputeSshPublicKeyResource>,
): any[] {
  return result.map((item) => {
    return computeSshPublicKeyResourceSerializer(item);
  });
}

export function computeSshPublicKeyResourceArrayDeserializer(
  result: Array<ComputeSshPublicKeyResource>,
): any[] {
  return result.map((item) => {
    return computeSshPublicKeyResourceDeserializer(item);
  });
}

/** Parameters for GenerateSshKeyPair. */
export interface ComputeSshGenerateKeyPairInputParameters {
  /** The encryption type of the SSH keys to be generated. See SshEncryptionTypes for possible set of values. If not provided, will default to RSA */
  encryptionType?: ComputeSshEncryptionTypes;
}

export function computeSshGenerateKeyPairInputParametersSerializer(
  item: ComputeSshGenerateKeyPairInputParameters,
): any {
  return { encryptionType: item["encryptionType"] };
}

/** The encryption type of the SSH keys to be generated. See SshEncryptionTypes for possible set of values. If not provided, will default to RSA */
export enum KnownComputeSshEncryptionTypes {
  /** RSA */
  RSA = "RSA",
  /** Ed25519 */
  Ed25519 = "Ed25519",
}

/**
 * The encryption type of the SSH keys to be generated. See SshEncryptionTypes for possible set of values. If not provided, will default to RSA \
 * {@link KnownComputeSshEncryptionTypes} can be used interchangeably with ComputeSshEncryptionTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **RSA** \
 * **Ed25519**
 */
export type ComputeSshEncryptionTypes = string;

/** Response from generation of an SSH key pair. */
export interface ComputeSshPublicKeyGenerateKeyPairResult {
  /** Private key portion of the key pair used to authenticate to a virtual machine through ssh. The private key is returned in RFC3447 format and should be treated as a secret. */
  privateKey: string;
  /** Public key portion of the key pair used to authenticate to a virtual machine through ssh. The public key is in ssh-rsa format. */
  publicKey: string;
  /** The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Compute/sshPublicKeys/{SshPublicKeyName} */
  id: string;
}

export function computeSshPublicKeyGenerateKeyPairResultDeserializer(
  item: any,
): ComputeSshPublicKeyGenerateKeyPairResult {
  return {
    privateKey: item["privateKey"],
    publicKey: item["publicKey"],
    id: item["id"],
  };
}

/** The List Usages operation response. */
export interface _ComputeListUsagesResult {
  /** The list of compute resource usages. */
  value: ComputeUsage[];
  /** The URI to fetch the next page of compute resource usage information. Call ListNext() with this to fetch the next page of compute resource usage information. */
  nextLink?: string;
}

export function _computeListUsagesResultDeserializer(item: any): _ComputeListUsagesResult {
  return {
    value: computeUsageArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeUsageArrayDeserializer(result: Array<ComputeUsage>): any[] {
  return result.map((item) => {
    return computeUsageDeserializer(item);
  });
}

/** Describes Compute Resource Usage. */
export interface ComputeUsage {
  /** An enum describing the unit of usage measurement. */
  unit: "Count";
  /** The current usage of the resource. */
  currentValue: number;
  /** The maximum permitted usage of the resource. */
  limit: number;
  /** The name of the type of usage. */
  name: ComputeUsageName;
}

export function computeUsageDeserializer(item: any): ComputeUsage {
  return {
    unit: item["unit"],
    currentValue: item["currentValue"],
    limit: item["limit"],
    name: computeUsageNameDeserializer(item["name"]),
  };
}

/** The Usage Names. */
export interface ComputeUsageName {
  /** The name of the resource. */
  value?: string;
  /** The localized name of the resource. */
  localizedValue?: string;
}

export function computeUsageNameDeserializer(item: any): ComputeUsageName {
  return {
    value: item["value"],
    localizedValue: item["localizedValue"],
  };
}

/** Virtual machine image resource information. */
export interface ComputeVirtualMachineImageResource extends CommonSubResource {
  /** The name of the resource. */
  name: string;
  /** The supported Azure location of the resource. */
  location: string;
  /** Specifies the tags that are assigned to the virtual machine. For more information about using tags, see [Using tags to organize your Azure resources](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-using-tags.md). */
  tags?: Record<string, string>;
  /** The extended location of the Virtual Machine. */
  extendedLocation?: CommonExtendedLocation;
}

export function computeVirtualMachineImageResourceDeserializer(
  item: any,
): ComputeVirtualMachineImageResource {
  return {
    id: item["id"],
    name: item["name"],
    location: item["location"],
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    extendedLocation: !item["extendedLocation"]
      ? item["extendedLocation"]
      : commonExtendedLocationDeserializer(item["extendedLocation"]),
  };
}

/** Describes a Virtual Machine Image. */
export interface ComputeVirtualMachineImage extends ComputeVirtualMachineImageResource {
  /** Used for establishing the purchase context of any 3rd Party artifact through MarketPlace. */
  plan?: ComputePurchasePlan;
  /** Contains the os disk image information. */
  osDiskImage?: ComputeOSDiskImage;
  /** The list of data disk images information. */
  dataDiskImages?: ComputeDataDiskImage[];
  /** Describes automatic OS upgrade properties on the image. */
  automaticOSUpgradeProperties?: ComputeAutomaticOSUpgradeProperties;
  /** Specifies the HyperVGeneration Type */
  hyperVGeneration?: ComputeHyperVGenerationTypes;
  /** Specifies disallowed configuration for the VirtualMachine created from the image */
  disallowed?: ComputeDisallowedConfiguration;
  features?: ComputeVirtualMachineImageFeature[];
  /** Specifies the Architecture Type */
  architecture?: ComputeArchitectureTypes;
  /** Describes image deprecation status properties on the image. */
  imageDeprecationStatus?: ComputeImageDeprecationStatus;
}

export function computeVirtualMachineImageDeserializer(item: any): ComputeVirtualMachineImage {
  return {
    name: item["name"],
    location: item["location"],
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    extendedLocation: !item["extendedLocation"]
      ? item["extendedLocation"]
      : commonExtendedLocationDeserializer(item["extendedLocation"]),
    id: item["id"],
    ...(!item["properties"]
      ? item["properties"]
      : _virtualMachineImagePropertiesDeserializer(item["properties"])),
  };
}

/** Describes the properties of a Virtual Machine Image. */
export interface ComputeVirtualMachineImageProperties {
  /** Used for establishing the purchase context of any 3rd Party artifact through MarketPlace. */
  plan?: ComputePurchasePlan;
  /** Contains the os disk image information. */
  osDiskImage?: ComputeOSDiskImage;
  /** The list of data disk images information. */
  dataDiskImages?: ComputeDataDiskImage[];
  /** Describes automatic OS upgrade properties on the image. */
  automaticOSUpgradeProperties?: ComputeAutomaticOSUpgradeProperties;
  /** Specifies the HyperVGeneration Type */
  hyperVGeneration?: ComputeHyperVGenerationTypes;
  /** Specifies disallowed configuration for the VirtualMachine created from the image */
  disallowed?: ComputeDisallowedConfiguration;
  features?: ComputeVirtualMachineImageFeature[];
  /** Specifies the Architecture Type */
  architecture?: ComputeArchitectureTypes;
  /** Describes image deprecation status properties on the image. */
  imageDeprecationStatus?: ComputeImageDeprecationStatus;
}

export function computeVirtualMachineImagePropertiesDeserializer(
  item: any,
): ComputeVirtualMachineImageProperties {
  return {
    plan: !item["plan"] ? item["plan"] : computePurchasePlanDeserializer(item["plan"]),
    osDiskImage: !item["osDiskImage"]
      ? item["osDiskImage"]
      : computeOSDiskImageDeserializer(item["osDiskImage"]),
    dataDiskImages: !item["dataDiskImages"]
      ? item["dataDiskImages"]
      : computeDataDiskImageArrayDeserializer(item["dataDiskImages"]),
    automaticOSUpgradeProperties: !item["automaticOSUpgradeProperties"]
      ? item["automaticOSUpgradeProperties"]
      : computeAutomaticOSUpgradePropertiesDeserializer(item["automaticOSUpgradeProperties"]),
    hyperVGeneration: item["hyperVGeneration"],
    disallowed: !item["disallowed"]
      ? item["disallowed"]
      : computeDisallowedConfigurationDeserializer(item["disallowed"]),
    features: !item["features"]
      ? item["features"]
      : computeVirtualMachineImageFeatureArrayDeserializer(item["features"]),
    architecture: item["architecture"],
    imageDeprecationStatus: !item["imageDeprecationStatus"]
      ? item["imageDeprecationStatus"]
      : computeImageDeprecationStatusDeserializer(item["imageDeprecationStatus"]),
  };
}

/** Used for establishing the purchase context of any 3rd Party artifact through MarketPlace. */
export interface ComputePurchasePlan {
  /** The publisher ID. */
  publisher: string;
  /** The plan ID. */
  name: string;
  /** Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element. */
  product: string;
}

export function computePurchasePlanDeserializer(item: any): ComputePurchasePlan {
  return {
    publisher: item["publisher"],
    name: item["name"],
    product: item["product"],
  };
}

/** Contains the os disk image information. */
export interface ComputeOSDiskImage {
  /** The operating system of the osDiskImage. */
  operatingSystem: CommonOperatingSystemTypes;
}

export function computeOSDiskImageDeserializer(item: any): ComputeOSDiskImage {
  return {
    operatingSystem: item["operatingSystem"],
  };
}

export function computeDataDiskImageArrayDeserializer(result: Array<ComputeDataDiskImage>): any[] {
  return result.map((item) => {
    return computeDataDiskImageDeserializer(item);
  });
}

/** Contains the data disk images information. */
export interface ComputeDataDiskImage {
  /** Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. */
  readonly lun?: number;
}

export function computeDataDiskImageDeserializer(item: any): ComputeDataDiskImage {
  return {
    lun: item["lun"],
  };
}

/** Describes automatic OS upgrade properties on the image. */
export interface ComputeAutomaticOSUpgradeProperties {
  /** Specifies whether automatic OS upgrade is supported on the image. */
  automaticOSUpgradeSupported: boolean;
}

export function computeAutomaticOSUpgradePropertiesDeserializer(
  item: any,
): ComputeAutomaticOSUpgradeProperties {
  return {
    automaticOSUpgradeSupported: item["automaticOSUpgradeSupported"],
  };
}

/** Specifies the disallowed configuration for a virtual machine image. */
export interface ComputeDisallowedConfiguration {
  /** VM disk types which are disallowed. */
  vmDiskType?: ComputeVmDiskTypes;
}

export function computeDisallowedConfigurationDeserializer(
  item: any,
): ComputeDisallowedConfiguration {
  return {
    vmDiskType: item["vmDiskType"],
  };
}

/** VM disk types which are disallowed. */
export enum KnownComputeVmDiskTypes {
  /** None */
  None = "None",
  /** Unmanaged */
  Unmanaged = "Unmanaged",
}

/**
 * VM disk types which are disallowed. \
 * {@link KnownComputeVmDiskTypes} can be used interchangeably with ComputeVmDiskTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Unmanaged**
 */
export type ComputeVmDiskTypes = string;

export function computeVirtualMachineImageFeatureArrayDeserializer(
  result: Array<ComputeVirtualMachineImageFeature>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineImageFeatureDeserializer(item);
  });
}

/** Specifies additional capabilities supported by the image */
export interface ComputeVirtualMachineImageFeature {
  /** The name of the feature. */
  name?: string;
  /** The corresponding value for the feature. */
  value?: string;
}

export function computeVirtualMachineImageFeatureDeserializer(
  item: any,
): ComputeVirtualMachineImageFeature {
  return {
    name: item["name"],
    value: item["value"],
  };
}

/** Specifies the Architecture Type */
export enum KnownComputeArchitectureTypes {
  /** x64 */
  X64 = "x64",
  /** Arm64 */
  Arm64 = "Arm64",
}

/**
 * Specifies the Architecture Type \
 * {@link KnownComputeArchitectureTypes} can be used interchangeably with ComputeArchitectureTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **x64** \
 * **Arm64**
 */
export type ComputeArchitectureTypes = string;

/** Describes image deprecation status properties on the image. */
export interface ComputeImageDeprecationStatus {
  /** Describes the state of the image. */
  imageState?: ComputeImageState;
  /** The time, in future, at which this image will be marked as deprecated. This scheduled time is chosen by the Publisher. */
  scheduledDeprecationTime?: Date;
  /** Describes the alternative option specified by the Publisher for this image when this image is deprecated. */
  alternativeOption?: ComputeAlternativeOption;
}

export function computeImageDeprecationStatusDeserializer(
  item: any,
): ComputeImageDeprecationStatus {
  return {
    imageState: item["imageState"],
    scheduledDeprecationTime: !item["scheduledDeprecationTime"]
      ? item["scheduledDeprecationTime"]
      : new Date(item["scheduledDeprecationTime"]),
    alternativeOption: !item["alternativeOption"]
      ? item["alternativeOption"]
      : computeAlternativeOptionDeserializer(item["alternativeOption"]),
  };
}

/** Describes the state of the image. */
export enum KnownComputeImageState {
  /** Active */
  Active = "Active",
  /** ScheduledForDeprecation */
  ScheduledForDeprecation = "ScheduledForDeprecation",
  /** Deprecated */
  Deprecated = "Deprecated",
}

/**
 * Describes the state of the image. \
 * {@link KnownComputeImageState} can be used interchangeably with ComputeImageState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Active** \
 * **ScheduledForDeprecation** \
 * **Deprecated**
 */
export type ComputeImageState = string;

/** Describes the alternative option specified by the Publisher for this image when this image is deprecated. */
export interface ComputeAlternativeOption {
  /** Describes the type of the alternative option. */
  type?: ComputeAlternativeType;
  /** Indicates the alternative option value specified by the Publisher. This is the Offer name when the type is Offer or the Plan name when the type is Plan. */
  value?: string;
}

export function computeAlternativeOptionDeserializer(item: any): ComputeAlternativeOption {
  return {
    type: item["type"],
    value: item["value"],
  };
}

/** Describes the type of the alternative option. */
export enum KnownComputeAlternativeType {
  /** None */
  None = "None",
  /** Offer */
  Offer = "Offer",
  /** Plan */
  Plan = "Plan",
}

/**
 * Describes the type of the alternative option. \
 * {@link KnownComputeAlternativeType} can be used interchangeably with ComputeAlternativeType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Offer** \
 * **Plan**
 */
export type ComputeAlternativeType = string;

/** The List VmImages in EdgeZone operation response. */
export interface ComputeVmImagesInEdgeZoneListResult {
  /** The list of VMImages in EdgeZone */
  value?: ComputeVirtualMachineImageResource[];
  /** The URI to fetch the next page of VMImages in EdgeZone. Call ListNext() with this URI to fetch the next page of VmImages. */
  nextLink?: string;
}

export function computeVmImagesInEdgeZoneListResultDeserializer(
  item: any,
): ComputeVmImagesInEdgeZoneListResult {
  return {
    value: !item["value"]
      ? item["value"]
      : computeVirtualMachineImageResourceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeVirtualMachineImageResourceArrayDeserializer(
  result: Array<ComputeVirtualMachineImageResource>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineImageResourceDeserializer(item);
  });
}

/** Api request input for LogAnalytics getRequestRateByInterval Api. */
export interface ComputeRequestRateByIntervalInput extends ComputeLogAnalyticsInputBase {
  /** Interval value in minutes used to create LogAnalytics call rate logs. */
  intervalLength: ComputeIntervalInMins;
}

export function computeRequestRateByIntervalInputSerializer(
  item: ComputeRequestRateByIntervalInput,
): any {
  return {
    blobContainerSasUri: item["blobContainerSasUri"],
    fromTime: item["fromTime"].toISOString(),
    toTime: item["toTime"].toISOString(),
    groupByThrottlePolicy: item["groupByThrottlePolicy"],
    groupByOperationName: item["groupByOperationName"],
    groupByResourceName: item["groupByResourceName"],
    groupByClientApplicationId: item["groupByClientApplicationId"],
    groupByUserAgent: item["groupByUserAgent"],
    intervalLength: item["intervalLength"],
  };
}

/** Interval value in minutes used to create LogAnalytics call rate logs. */
export type ComputeIntervalInMins = "ThreeMins" | "FiveMins" | "ThirtyMins" | "SixtyMins";

/** Api input base class for LogAnalytics Api. */
export interface ComputeLogAnalyticsInputBase {
  /** SAS Uri of the logging blob container to which LogAnalytics Api writes output logs to. */
  blobContainerSasUri: string;
  /** From time of the query */
  fromTime: Date;
  /** To time of the query */
  toTime: Date;
  /** Group query result by Throttle Policy applied. */
  groupByThrottlePolicy?: boolean;
  /** Group query result by Operation Name. */
  groupByOperationName?: boolean;
  /** Group query result by Resource Name. */
  groupByResourceName?: boolean;
  /** Group query result by Client Application ID. */
  groupByClientApplicationId?: boolean;
  /** Group query result by User Agent. */
  groupByUserAgent?: boolean;
}

export function computeLogAnalyticsInputBaseSerializer(item: ComputeLogAnalyticsInputBase): any {
  return {
    blobContainerSasUri: item["blobContainerSasUri"],
    fromTime: item["fromTime"].toISOString(),
    toTime: item["toTime"].toISOString(),
    groupByThrottlePolicy: item["groupByThrottlePolicy"],
    groupByOperationName: item["groupByOperationName"],
    groupByResourceName: item["groupByResourceName"],
    groupByClientApplicationId: item["groupByClientApplicationId"],
    groupByUserAgent: item["groupByUserAgent"],
  };
}

/** LogAnalytics operation status response */
export interface ComputeLogAnalyticsOperationResult {
  /** LogAnalyticsOutput */
  readonly properties?: ComputeLogAnalyticsOutput;
}

export function computeLogAnalyticsOperationResultDeserializer(
  item: any,
): ComputeLogAnalyticsOperationResult {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : computeLogAnalyticsOutputDeserializer(item["properties"]),
  };
}

/** LogAnalytics output properties */
export interface ComputeLogAnalyticsOutput {
  /** Output file Uri path to blob container. */
  readonly output?: string;
}

export function computeLogAnalyticsOutputDeserializer(item: any): ComputeLogAnalyticsOutput {
  return {
    output: item["output"],
  };
}

/** Api request input for LogAnalytics getThrottledRequests Api. */
export interface ComputeThrottledRequestsInput extends ComputeLogAnalyticsInputBase {}

export function computeThrottledRequestsInputSerializer(item: ComputeThrottledRequestsInput): any {
  return {
    blobContainerSasUri: item["blobContainerSasUri"],
    fromTime: item["fromTime"].toISOString(),
    toTime: item["toTime"].toISOString(),
    groupByThrottlePolicy: item["groupByThrottlePolicy"],
    groupByOperationName: item["groupByOperationName"],
    groupByResourceName: item["groupByResourceName"],
    groupByClientApplicationId: item["groupByClientApplicationId"],
    groupByUserAgent: item["groupByUserAgent"],
  };
}

/** Known values of {@link ExpandTypesForGetVMScaleSets} that the service accepts. */
export enum KnownComputeExpandTypesForGetVMScaleSets {
  /** userData */
  UserData = "userData",
}

/** Type of ComputeExpandTypesForGetVMScaleSets */
export type ComputeExpandTypesForGetVMScaleSets = string;
/** Type of ComputeInstanceViewTypes */
export type ComputeInstanceViewTypes = "instanceView" | "userData" | "resiliencyView";

/** Known values of {@link ExpandTypeForListVMs} that the service accepts. */
export enum KnownComputeExpandTypeForListVMs {
  /** instanceView */
  InstanceView = "instanceView",
}

/** Type of ComputeExpandTypeForListVMs */
export type ComputeExpandTypeForListVMs = string;

/** Known values of {@link ExpandTypesForListVMs} that the service accepts. */
export enum KnownComputeExpandTypesForListVMs {
  /** instanceView */
  InstanceView = "instanceView",
}

/** Type of ComputeExpandTypesForListVMs */
export type ComputeExpandTypesForListVMs = string;

/** Known values of {@link RestorePointCollectionExpandOptions} that the service accepts. */
export enum KnownComputeRestorePointCollectionExpandOptions {
  /** restorePoints */
  RestorePoints = "restorePoints",
}

/** Type of ComputeRestorePointCollectionExpandOptions */
export type ComputeRestorePointCollectionExpandOptions = string;

/** Known values of {@link RestorePointExpandOptions} that the service accepts. */
export enum KnownComputeRestorePointExpandOptions {
  /** instanceView */
  InstanceView = "instanceView",
}

/** Type of ComputeRestorePointExpandOptions */
export type ComputeRestorePointExpandOptions = string;

/** Known values of {@link CapacityReservationGroupInstanceViewTypes} that the service accepts. */
export enum KnownComputeCapacityReservationGroupInstanceViewTypes {
  /** instanceView */
  InstanceView = "instanceView",
}

/** Type of ComputeCapacityReservationGroupInstanceViewTypes */
export type ComputeCapacityReservationGroupInstanceViewTypes = string;

/** Known values of {@link ExpandTypesForGetCapacityReservationGroups} that the service accepts. */
export enum KnownComputeExpandTypesForGetCapacityReservationGroups {
  /** virtualMachineScaleSetVMs/$ref */
  VirtualMachineScaleSetVMsRef = "virtualMachineScaleSetVMs/$ref",
  /** virtualMachines/$ref */
  VirtualMachinesRef = "virtualMachines/$ref",
}

/** Type of ComputeExpandTypesForGetCapacityReservationGroups */
export type ComputeExpandTypesForGetCapacityReservationGroups = string;

/** Known values of {@link ResourceIdOptionsForGetCapacityReservationGroups} that the service accepts. */
export enum KnownComputeResourceIdOptionsForGetCapacityReservationGroups {
  /** CreatedInSubscription */
  CreatedInSubscription = "CreatedInSubscription",
  /** SharedWithSubscription */
  SharedWithSubscription = "SharedWithSubscription",
  /** All */
  All = "All",
}

/** Type of ComputeResourceIdOptionsForGetCapacityReservationGroups */
export type ComputeResourceIdOptionsForGetCapacityReservationGroups = string;

/** Known values of {@link CapacityReservationInstanceViewTypes} that the service accepts. */
export enum KnownComputeCapacityReservationInstanceViewTypes {
  /** instanceView */
  InstanceView = "instanceView",
}

/** Type of ComputeCapacityReservationInstanceViewTypes */
export type ComputeCapacityReservationInstanceViewTypes = string;

export function computeVirtualMachineImageArrayDeserializer(
  result: Array<ComputeVirtualMachineImage>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineImageDeserializer(item);
  });
}

export function computeVirtualMachineExtensionImageArrayDeserializer(
  result: Array<ComputeVirtualMachineExtensionImage>,
): any[] {
  return result.map((item) => {
    return computeVirtualMachineExtensionImageDeserializer(item);
  });
}

export function _virtualMachineScaleSetPublicIPAddressConfigurationPropertiesSerializer(
  item: ComputeVirtualMachineScaleSetPublicIPAddressConfiguration,
): any {
  return {
    idleTimeoutInMinutes: item["idleTimeoutInMinutes"],
    dnsSettings: !item["dnsSettings"]
      ? item["dnsSettings"]
      : computeVirtualMachineScaleSetPublicIPAddressConfigurationDnsSettingsSerializer(
          item["dnsSettings"],
        ),
    ipTags: !item["ipTags"]
      ? item["ipTags"]
      : computeVirtualMachineScaleSetIpTagArraySerializer(item["ipTags"]),
    publicIPPrefix: !item["publicIPPrefix"]
      ? item["publicIPPrefix"]
      : commonSubResourceSerializer(item["publicIPPrefix"]),
    publicIPAddressVersion: item["publicIPAddressVersion"],
    deleteOption: item["deleteOption"],
  };
}

export function _virtualMachineScaleSetPublicIPAddressConfigurationPropertiesDeserializer(
  item: any,
) {
  return {
    idleTimeoutInMinutes: item["idleTimeoutInMinutes"],
    dnsSettings: !item["dnsSettings"]
      ? item["dnsSettings"]
      : computeVirtualMachineScaleSetPublicIPAddressConfigurationDnsSettingsDeserializer(
          item["dnsSettings"],
        ),
    ipTags: !item["ipTags"]
      ? item["ipTags"]
      : computeVirtualMachineScaleSetIpTagArrayDeserializer(item["ipTags"]),
    publicIPPrefix: !item["publicIPPrefix"]
      ? item["publicIPPrefix"]
      : commonSubResourceDeserializer(item["publicIPPrefix"]),
    publicIPAddressVersion: item["publicIPAddressVersion"],
    deleteOption: item["deleteOption"],
  };
}

export function _virtualMachineScaleSetIPConfigurationPropertiesSerializer(
  item: ComputeVirtualMachineScaleSetIPConfiguration,
): any {
  return {
    subnet: !item["subnet"] ? item["subnet"] : computeApiEntityReferenceSerializer(item["subnet"]),
    primary: item["primary"],
    publicIPAddressConfiguration: !item["publicIPAddressConfiguration"]
      ? item["publicIPAddressConfiguration"]
      : computeVirtualMachineScaleSetPublicIPAddressConfigurationSerializer(
          item["publicIPAddressConfiguration"],
        ),
    privateIPAddressVersion: item["privateIPAddressVersion"],
    applicationGatewayBackendAddressPools: !item["applicationGatewayBackendAddressPools"]
      ? item["applicationGatewayBackendAddressPools"]
      : commonSubResourceArraySerializer(item["applicationGatewayBackendAddressPools"]),
    applicationSecurityGroups: !item["applicationSecurityGroups"]
      ? item["applicationSecurityGroups"]
      : commonSubResourceArraySerializer(item["applicationSecurityGroups"]),
    loadBalancerBackendAddressPools: !item["loadBalancerBackendAddressPools"]
      ? item["loadBalancerBackendAddressPools"]
      : commonSubResourceArraySerializer(item["loadBalancerBackendAddressPools"]),
    loadBalancerInboundNatPools: !item["loadBalancerInboundNatPools"]
      ? item["loadBalancerInboundNatPools"]
      : commonSubResourceArraySerializer(item["loadBalancerInboundNatPools"]),
  };
}

export function _virtualMachineScaleSetIPConfigurationPropertiesDeserializer(item: any) {
  return {
    subnet: !item["subnet"]
      ? item["subnet"]
      : computeApiEntityReferenceDeserializer(item["subnet"]),
    primary: item["primary"],
    publicIPAddressConfiguration: !item["publicIPAddressConfiguration"]
      ? item["publicIPAddressConfiguration"]
      : computeVirtualMachineScaleSetPublicIPAddressConfigurationDeserializer(
          item["publicIPAddressConfiguration"],
        ),
    privateIPAddressVersion: item["privateIPAddressVersion"],
    applicationGatewayBackendAddressPools: !item["applicationGatewayBackendAddressPools"]
      ? item["applicationGatewayBackendAddressPools"]
      : commonSubResourceArrayDeserializer(item["applicationGatewayBackendAddressPools"]),
    applicationSecurityGroups: !item["applicationSecurityGroups"]
      ? item["applicationSecurityGroups"]
      : commonSubResourceArrayDeserializer(item["applicationSecurityGroups"]),
    loadBalancerBackendAddressPools: !item["loadBalancerBackendAddressPools"]
      ? item["loadBalancerBackendAddressPools"]
      : commonSubResourceArrayDeserializer(item["loadBalancerBackendAddressPools"]),
    loadBalancerInboundNatPools: !item["loadBalancerInboundNatPools"]
      ? item["loadBalancerInboundNatPools"]
      : commonSubResourceArrayDeserializer(item["loadBalancerInboundNatPools"]),
  };
}

export function _virtualMachineScaleSetNetworkConfigurationPropertiesSerializer(
  item: ComputeVirtualMachineScaleSetNetworkConfiguration,
): any {
  return {
    primary: item["primary"],
    enableAcceleratedNetworking: item["enableAcceleratedNetworking"],
    disableTcpStateTracking: item["disableTcpStateTracking"],
    enableFpga: item["enableFpga"],
    networkSecurityGroup: !item["networkSecurityGroup"]
      ? item["networkSecurityGroup"]
      : commonSubResourceSerializer(item["networkSecurityGroup"]),
    dnsSettings: !item["dnsSettings"]
      ? item["dnsSettings"]
      : computeVirtualMachineScaleSetNetworkConfigurationDnsSettingsSerializer(item["dnsSettings"]),
    ipConfigurations: !item["ipConfigurations"]
      ? item["ipConfigurations"]
      : computeVirtualMachineScaleSetIPConfigurationArraySerializer(item["ipConfigurations"]),
    enableIPForwarding: item["enableIPForwarding"],
    deleteOption: item["deleteOption"],
    auxiliaryMode: item["auxiliaryMode"],
    auxiliarySku: item["auxiliarySku"],
  };
}

export function _virtualMachineScaleSetNetworkConfigurationPropertiesDeserializer(item: any) {
  return {
    primary: item["primary"],
    enableAcceleratedNetworking: item["enableAcceleratedNetworking"],
    disableTcpStateTracking: item["disableTcpStateTracking"],
    enableFpga: item["enableFpga"],
    networkSecurityGroup: !item["networkSecurityGroup"]
      ? item["networkSecurityGroup"]
      : commonSubResourceDeserializer(item["networkSecurityGroup"]),
    dnsSettings: !item["dnsSettings"]
      ? item["dnsSettings"]
      : computeVirtualMachineScaleSetNetworkConfigurationDnsSettingsDeserializer(
          item["dnsSettings"],
        ),
    ipConfigurations: !item["ipConfigurations"]
      ? item["ipConfigurations"]
      : computeVirtualMachineScaleSetIPConfigurationArrayDeserializer(item["ipConfigurations"]),
    enableIPForwarding: item["enableIPForwarding"],
    deleteOption: item["deleteOption"],
    auxiliaryMode: item["auxiliaryMode"],
    auxiliarySku: item["auxiliarySku"],
  };
}

export function _virtualMachineScaleSetExtensionPropertiesSerializer(
  item: ComputeVirtualMachineScaleSetExtension,
): any {
  return {
    forceUpdateTag: item["forceUpdateTag"],
    publisher: item["publisher"],
    type: item["typePropertiesType"],
    typeHandlerVersion: item["typeHandlerVersion"],
    autoUpgradeMinorVersion: item["autoUpgradeMinorVersion"],
    enableAutomaticUpgrade: item["enableAutomaticUpgrade"],
    settings: item["settings"],
    protectedSettings: item["protectedSettings"],
    provisionAfterExtensions: !item["provisionAfterExtensions"]
      ? item["provisionAfterExtensions"]
      : item["provisionAfterExtensions"].map((p: any) => {
          return p;
        }),
    suppressFailures: item["suppressFailures"],
    protectedSettingsFromKeyVault: !item["protectedSettingsFromKeyVault"]
      ? item["protectedSettingsFromKeyVault"]
      : computeKeyVaultSecretReferenceSerializer(item["protectedSettingsFromKeyVault"]),
  };
}

export function _virtualMachineScaleSetExtensionPropertiesDeserializer(item: any) {
  return {
    forceUpdateTag: item["forceUpdateTag"],
    publisher: item["publisher"],
    typePropertiesType: item["type"],
    typeHandlerVersion: item["typeHandlerVersion"],
    autoUpgradeMinorVersion: item["autoUpgradeMinorVersion"],
    enableAutomaticUpgrade: item["enableAutomaticUpgrade"],
    settings: item["settings"],
    protectedSettings: item["protectedSettings"],
    provisioningState: item["provisioningState"],
    provisionAfterExtensions: !item["provisionAfterExtensions"]
      ? item["provisionAfterExtensions"]
      : item["provisionAfterExtensions"].map((p: any) => {
          return p;
        }),
    suppressFailures: item["suppressFailures"],
    protectedSettingsFromKeyVault: !item["protectedSettingsFromKeyVault"]
      ? item["protectedSettingsFromKeyVault"]
      : computeKeyVaultSecretReferenceDeserializer(item["protectedSettingsFromKeyVault"]),
  };
}

export function _virtualMachineScaleSetPropertiesSerializer(
  item: ComputeVirtualMachineScaleSet,
): any {
  return {
    upgradePolicy: !item["upgradePolicy"]
      ? item["upgradePolicy"]
      : computeUpgradePolicySerializer(item["upgradePolicy"]),
    scheduledEventsPolicy: !item["scheduledEventsPolicy"]
      ? item["scheduledEventsPolicy"]
      : computeScheduledEventsPolicySerializer(item["scheduledEventsPolicy"]),
    automaticRepairsPolicy: !item["automaticRepairsPolicy"]
      ? item["automaticRepairsPolicy"]
      : computeAutomaticRepairsPolicySerializer(item["automaticRepairsPolicy"]),
    virtualMachineProfile: !item["virtualMachineProfile"]
      ? item["virtualMachineProfile"]
      : computeVirtualMachineScaleSetVMProfileSerializer(item["virtualMachineProfile"]),
    overprovision: item["overprovision"],
    doNotRunExtensionsOnOverprovisionedVMs: item["doNotRunExtensionsOnOverprovisionedVMs"],
    singlePlacementGroup: item["singlePlacementGroup"],
    zoneBalance: item["zoneBalance"],
    platformFaultDomainCount: item["platformFaultDomainCount"],
    proximityPlacementGroup: !item["proximityPlacementGroup"]
      ? item["proximityPlacementGroup"]
      : commonSubResourceSerializer(item["proximityPlacementGroup"]),
    hostGroup: !item["hostGroup"]
      ? item["hostGroup"]
      : commonSubResourceSerializer(item["hostGroup"]),
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeAdditionalCapabilitiesSerializer(item["additionalCapabilities"]),
    scaleInPolicy: !item["scaleInPolicy"]
      ? item["scaleInPolicy"]
      : computeScaleInPolicySerializer(item["scaleInPolicy"]),
    orchestrationMode: item["orchestrationMode"],
    spotRestorePolicy: !item["spotRestorePolicy"]
      ? item["spotRestorePolicy"]
      : computeSpotRestorePolicySerializer(item["spotRestorePolicy"]),
    priorityMixPolicy: !item["priorityMixPolicy"]
      ? item["priorityMixPolicy"]
      : computePriorityMixPolicySerializer(item["priorityMixPolicy"]),
    constrainedMaximumCapacity: item["constrainedMaximumCapacity"],
    resiliencyPolicy: !item["resiliencyPolicy"]
      ? item["resiliencyPolicy"]
      : computeResiliencyPolicySerializer(item["resiliencyPolicy"]),
    zonalPlatformFaultDomainAlignMode: item["zonalPlatformFaultDomainAlignMode"],
    skuProfile: !item["skuProfile"]
      ? item["skuProfile"]
      : computeSkuProfileSerializer(item["skuProfile"]),
    highSpeedInterconnectPlacement: item["highSpeedInterconnectPlacement"],
  };
}

export function _virtualMachineScaleSetPropertiesDeserializer(item: any) {
  return {
    upgradePolicy: !item["upgradePolicy"]
      ? item["upgradePolicy"]
      : computeUpgradePolicyDeserializer(item["upgradePolicy"]),
    scheduledEventsPolicy: !item["scheduledEventsPolicy"]
      ? item["scheduledEventsPolicy"]
      : computeScheduledEventsPolicyDeserializer(item["scheduledEventsPolicy"]),
    automaticRepairsPolicy: !item["automaticRepairsPolicy"]
      ? item["automaticRepairsPolicy"]
      : computeAutomaticRepairsPolicyDeserializer(item["automaticRepairsPolicy"]),
    virtualMachineProfile: !item["virtualMachineProfile"]
      ? item["virtualMachineProfile"]
      : computeVirtualMachineScaleSetVMProfileDeserializer(item["virtualMachineProfile"]),
    provisioningState: item["provisioningState"],
    overprovision: item["overprovision"],
    doNotRunExtensionsOnOverprovisionedVMs: item["doNotRunExtensionsOnOverprovisionedVMs"],
    uniqueId: item["uniqueId"],
    singlePlacementGroup: item["singlePlacementGroup"],
    zoneBalance: item["zoneBalance"],
    platformFaultDomainCount: item["platformFaultDomainCount"],
    proximityPlacementGroup: !item["proximityPlacementGroup"]
      ? item["proximityPlacementGroup"]
      : commonSubResourceDeserializer(item["proximityPlacementGroup"]),
    hostGroup: !item["hostGroup"]
      ? item["hostGroup"]
      : commonSubResourceDeserializer(item["hostGroup"]),
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeAdditionalCapabilitiesDeserializer(item["additionalCapabilities"]),
    scaleInPolicy: !item["scaleInPolicy"]
      ? item["scaleInPolicy"]
      : computeScaleInPolicyDeserializer(item["scaleInPolicy"]),
    orchestrationMode: item["orchestrationMode"],
    spotRestorePolicy: !item["spotRestorePolicy"]
      ? item["spotRestorePolicy"]
      : computeSpotRestorePolicyDeserializer(item["spotRestorePolicy"]),
    priorityMixPolicy: !item["priorityMixPolicy"]
      ? item["priorityMixPolicy"]
      : computePriorityMixPolicyDeserializer(item["priorityMixPolicy"]),
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
    constrainedMaximumCapacity: item["constrainedMaximumCapacity"],
    resiliencyPolicy: !item["resiliencyPolicy"]
      ? item["resiliencyPolicy"]
      : computeResiliencyPolicyDeserializer(item["resiliencyPolicy"]),
    zonalPlatformFaultDomainAlignMode: item["zonalPlatformFaultDomainAlignMode"],
    skuProfile: !item["skuProfile"]
      ? item["skuProfile"]
      : computeSkuProfileDeserializer(item["skuProfile"]),
    highSpeedInterconnectPlacement: item["highSpeedInterconnectPlacement"],
  };
}

export function _virtualMachineScaleSetUpdatePublicIPAddressConfigurationPropertiesSerializer(
  item: ComputeVirtualMachineScaleSetUpdatePublicIPAddressConfiguration,
): any {
  return {
    idleTimeoutInMinutes: item["idleTimeoutInMinutes"],
    dnsSettings: !item["dnsSettings"]
      ? item["dnsSettings"]
      : computeVirtualMachineScaleSetPublicIPAddressConfigurationDnsSettingsSerializer(
          item["dnsSettings"],
        ),
    publicIPPrefix: !item["publicIPPrefix"]
      ? item["publicIPPrefix"]
      : commonSubResourceSerializer(item["publicIPPrefix"]),
    deleteOption: item["deleteOption"],
  };
}

export function _virtualMachineScaleSetUpdateIPConfigurationPropertiesSerializer(
  item: ComputeVirtualMachineScaleSetUpdateIPConfiguration,
): any {
  return {
    subnet: !item["subnet"] ? item["subnet"] : computeApiEntityReferenceSerializer(item["subnet"]),
    primary: item["primary"],
    publicIPAddressConfiguration: !item["publicIPAddressConfiguration"]
      ? item["publicIPAddressConfiguration"]
      : computeVirtualMachineScaleSetUpdatePublicIPAddressConfigurationSerializer(
          item["publicIPAddressConfiguration"],
        ),
    privateIPAddressVersion: item["privateIPAddressVersion"],
    applicationGatewayBackendAddressPools: !item["applicationGatewayBackendAddressPools"]
      ? item["applicationGatewayBackendAddressPools"]
      : commonSubResourceArraySerializer(item["applicationGatewayBackendAddressPools"]),
    applicationSecurityGroups: !item["applicationSecurityGroups"]
      ? item["applicationSecurityGroups"]
      : commonSubResourceArraySerializer(item["applicationSecurityGroups"]),
    loadBalancerBackendAddressPools: !item["loadBalancerBackendAddressPools"]
      ? item["loadBalancerBackendAddressPools"]
      : commonSubResourceArraySerializer(item["loadBalancerBackendAddressPools"]),
    loadBalancerInboundNatPools: !item["loadBalancerInboundNatPools"]
      ? item["loadBalancerInboundNatPools"]
      : commonSubResourceArraySerializer(item["loadBalancerInboundNatPools"]),
  };
}

export function _virtualMachineScaleSetUpdateNetworkConfigurationPropertiesSerializer(
  item: ComputeVirtualMachineScaleSetUpdateNetworkConfiguration,
): any {
  return {
    primary: item["primary"],
    enableAcceleratedNetworking: item["enableAcceleratedNetworking"],
    disableTcpStateTracking: item["disableTcpStateTracking"],
    enableFpga: item["enableFpga"],
    networkSecurityGroup: !item["networkSecurityGroup"]
      ? item["networkSecurityGroup"]
      : commonSubResourceSerializer(item["networkSecurityGroup"]),
    dnsSettings: !item["dnsSettings"]
      ? item["dnsSettings"]
      : computeVirtualMachineScaleSetNetworkConfigurationDnsSettingsSerializer(item["dnsSettings"]),
    ipConfigurations: !item["ipConfigurations"]
      ? item["ipConfigurations"]
      : computeVirtualMachineScaleSetUpdateIPConfigurationArraySerializer(item["ipConfigurations"]),
    enableIPForwarding: item["enableIPForwarding"],
    deleteOption: item["deleteOption"],
    auxiliaryMode: item["auxiliaryMode"],
    auxiliarySku: item["auxiliarySku"],
  };
}

export function _virtualMachineScaleSetUpdatePropertiesSerializer(
  item: ComputeVirtualMachineScaleSetUpdate,
): any {
  return {
    upgradePolicy: !item["upgradePolicy"]
      ? item["upgradePolicy"]
      : computeUpgradePolicySerializer(item["upgradePolicy"]),
    automaticRepairsPolicy: !item["automaticRepairsPolicy"]
      ? item["automaticRepairsPolicy"]
      : computeAutomaticRepairsPolicySerializer(item["automaticRepairsPolicy"]),
    virtualMachineProfile: !item["virtualMachineProfile"]
      ? item["virtualMachineProfile"]
      : computeVirtualMachineScaleSetUpdateVMProfileSerializer(item["virtualMachineProfile"]),
    overprovision: item["overprovision"],
    doNotRunExtensionsOnOverprovisionedVMs: item["doNotRunExtensionsOnOverprovisionedVMs"],
    singlePlacementGroup: item["singlePlacementGroup"],
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeAdditionalCapabilitiesSerializer(item["additionalCapabilities"]),
    scaleInPolicy: !item["scaleInPolicy"]
      ? item["scaleInPolicy"]
      : computeScaleInPolicySerializer(item["scaleInPolicy"]),
    proximityPlacementGroup: !item["proximityPlacementGroup"]
      ? item["proximityPlacementGroup"]
      : commonSubResourceSerializer(item["proximityPlacementGroup"]),
    priorityMixPolicy: !item["priorityMixPolicy"]
      ? item["priorityMixPolicy"]
      : computePriorityMixPolicySerializer(item["priorityMixPolicy"]),
    spotRestorePolicy: !item["spotRestorePolicy"]
      ? item["spotRestorePolicy"]
      : computeSpotRestorePolicySerializer(item["spotRestorePolicy"]),
    resiliencyPolicy: !item["resiliencyPolicy"]
      ? item["resiliencyPolicy"]
      : computeResiliencyPolicySerializer(item["resiliencyPolicy"]),
    zonalPlatformFaultDomainAlignMode: item["zonalPlatformFaultDomainAlignMode"],
    skuProfile: !item["skuProfile"]
      ? item["skuProfile"]
      : computeSkuProfileSerializer(item["skuProfile"]),
  };
}

export function _virtualMachineScaleSetExtensionUpdatePropertiesSerializer(
  item: ComputeVirtualMachineScaleSetExtensionUpdate,
): any {
  return {
    forceUpdateTag: item["forceUpdateTag"],
    publisher: item["publisher"],
    type: item["typePropertiesType"],
    typeHandlerVersion: item["typeHandlerVersion"],
    autoUpgradeMinorVersion: item["autoUpgradeMinorVersion"],
    enableAutomaticUpgrade: item["enableAutomaticUpgrade"],
    settings: item["settings"],
    protectedSettings: item["protectedSettings"],
    provisionAfterExtensions: !item["provisionAfterExtensions"]
      ? item["provisionAfterExtensions"]
      : item["provisionAfterExtensions"].map((p: any) => {
          return p;
        }),
    suppressFailures: item["suppressFailures"],
    protectedSettingsFromKeyVault: !item["protectedSettingsFromKeyVault"]
      ? item["protectedSettingsFromKeyVault"]
      : computeKeyVaultSecretReferenceSerializer(item["protectedSettingsFromKeyVault"]),
  };
}

export function _virtualMachineScaleSetExtensionUpdatePropertiesDeserializer(item: any) {
  return {
    forceUpdateTag: item["forceUpdateTag"],
    publisher: item["publisher"],
    typePropertiesType: item["type"],
    typeHandlerVersion: item["typeHandlerVersion"],
    autoUpgradeMinorVersion: item["autoUpgradeMinorVersion"],
    enableAutomaticUpgrade: item["enableAutomaticUpgrade"],
    settings: item["settings"],
    protectedSettings: item["protectedSettings"],
    provisioningState: item["provisioningState"],
    provisionAfterExtensions: !item["provisionAfterExtensions"]
      ? item["provisionAfterExtensions"]
      : item["provisionAfterExtensions"].map((p: any) => {
          return p;
        }),
    suppressFailures: item["suppressFailures"],
    protectedSettingsFromKeyVault: !item["protectedSettingsFromKeyVault"]
      ? item["protectedSettingsFromKeyVault"]
      : computeKeyVaultSecretReferenceDeserializer(item["protectedSettingsFromKeyVault"]),
  };
}

export function _virtualMachineScaleSetVMExtensionPropertiesSerializer(
  item: ComputeVirtualMachineScaleSetVMExtension,
): any {
  return {
    forceUpdateTag: item["forceUpdateTag"],
    publisher: item["publisher"],
    type: item["typePropertiesType"],
    typeHandlerVersion: item["typeHandlerVersion"],
    autoUpgradeMinorVersion: item["autoUpgradeMinorVersion"],
    enableAutomaticUpgrade: item["enableAutomaticUpgrade"],
    settings: item["settings"],
    protectedSettings: item["protectedSettings"],
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeVirtualMachineExtensionInstanceViewSerializer(item["instanceView"]),
    suppressFailures: item["suppressFailures"],
    protectedSettingsFromKeyVault: !item["protectedSettingsFromKeyVault"]
      ? item["protectedSettingsFromKeyVault"]
      : computeKeyVaultSecretReferenceSerializer(item["protectedSettingsFromKeyVault"]),
    provisionAfterExtensions: !item["provisionAfterExtensions"]
      ? item["provisionAfterExtensions"]
      : item["provisionAfterExtensions"].map((p: any) => {
          return p;
        }),
  };
}

export function _virtualMachineScaleSetVMExtensionPropertiesDeserializer(item: any) {
  return {
    forceUpdateTag: item["forceUpdateTag"],
    publisher: item["publisher"],
    typePropertiesType: item["type"],
    typeHandlerVersion: item["typeHandlerVersion"],
    autoUpgradeMinorVersion: item["autoUpgradeMinorVersion"],
    enableAutomaticUpgrade: item["enableAutomaticUpgrade"],
    settings: item["settings"],
    protectedSettings: item["protectedSettings"],
    provisioningState: item["provisioningState"],
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeVirtualMachineExtensionInstanceViewDeserializer(item["instanceView"]),
    suppressFailures: item["suppressFailures"],
    protectedSettingsFromKeyVault: !item["protectedSettingsFromKeyVault"]
      ? item["protectedSettingsFromKeyVault"]
      : computeKeyVaultSecretReferenceDeserializer(item["protectedSettingsFromKeyVault"]),
    provisionAfterExtensions: !item["provisionAfterExtensions"]
      ? item["provisionAfterExtensions"]
      : item["provisionAfterExtensions"].map((p: any) => {
          return p;
        }),
  };
}

export function _virtualMachineScaleSetVMExtensionUpdatePropertiesSerializer(
  item: ComputeVirtualMachineScaleSetVMExtensionUpdate,
): any {
  return {
    forceUpdateTag: item["forceUpdateTag"],
    publisher: item["publisher"],
    type: item["typePropertiesType"],
    typeHandlerVersion: item["typeHandlerVersion"],
    autoUpgradeMinorVersion: item["autoUpgradeMinorVersion"],
    enableAutomaticUpgrade: item["enableAutomaticUpgrade"],
    settings: item["settings"],
    protectedSettings: item["protectedSettings"],
    suppressFailures: item["suppressFailures"],
    protectedSettingsFromKeyVault: !item["protectedSettingsFromKeyVault"]
      ? item["protectedSettingsFromKeyVault"]
      : computeKeyVaultSecretReferenceSerializer(item["protectedSettingsFromKeyVault"]),
  };
}

export function _networkInterfaceReferencePropertiesSerializer(
  item: ComputeNetworkInterfaceReference,
): any {
  return { primary: item["primary"], deleteOption: item["deleteOption"] };
}

export function _networkInterfaceReferencePropertiesDeserializer(item: any) {
  return {
    primary: item["primary"],
    deleteOption: item["deleteOption"],
  };
}

export function _virtualMachinePublicIPAddressConfigurationPropertiesSerializer(
  item: ComputeVirtualMachinePublicIPAddressConfiguration,
): any {
  return {
    idleTimeoutInMinutes: item["idleTimeoutInMinutes"],
    deleteOption: item["deleteOption"],
    dnsSettings: !item["dnsSettings"]
      ? item["dnsSettings"]
      : computeVirtualMachinePublicIPAddressDnsSettingsConfigurationSerializer(item["dnsSettings"]),
    ipTags: !item["ipTags"]
      ? item["ipTags"]
      : computeVirtualMachineIpTagArraySerializer(item["ipTags"]),
    publicIPPrefix: !item["publicIPPrefix"]
      ? item["publicIPPrefix"]
      : commonSubResourceSerializer(item["publicIPPrefix"]),
    publicIPAddressVersion: item["publicIPAddressVersion"],
    publicIPAllocationMethod: item["publicIPAllocationMethod"],
  };
}

export function _virtualMachinePublicIPAddressConfigurationPropertiesDeserializer(item: any) {
  return {
    idleTimeoutInMinutes: item["idleTimeoutInMinutes"],
    deleteOption: item["deleteOption"],
    dnsSettings: !item["dnsSettings"]
      ? item["dnsSettings"]
      : computeVirtualMachinePublicIPAddressDnsSettingsConfigurationDeserializer(
          item["dnsSettings"],
        ),
    ipTags: !item["ipTags"]
      ? item["ipTags"]
      : computeVirtualMachineIpTagArrayDeserializer(item["ipTags"]),
    publicIPPrefix: !item["publicIPPrefix"]
      ? item["publicIPPrefix"]
      : commonSubResourceDeserializer(item["publicIPPrefix"]),
    publicIPAddressVersion: item["publicIPAddressVersion"],
    publicIPAllocationMethod: item["publicIPAllocationMethod"],
  };
}

export function _virtualMachineNetworkInterfaceIPConfigurationPropertiesSerializer(
  item: ComputeVirtualMachineNetworkInterfaceIPConfiguration,
): any {
  return {
    subnet: !item["subnet"] ? item["subnet"] : commonSubResourceSerializer(item["subnet"]),
    primary: item["primary"],
    publicIPAddressConfiguration: !item["publicIPAddressConfiguration"]
      ? item["publicIPAddressConfiguration"]
      : computeVirtualMachinePublicIPAddressConfigurationSerializer(
          item["publicIPAddressConfiguration"],
        ),
    privateIPAddressVersion: item["privateIPAddressVersion"],
    applicationSecurityGroups: !item["applicationSecurityGroups"]
      ? item["applicationSecurityGroups"]
      : commonSubResourceArraySerializer(item["applicationSecurityGroups"]),
    applicationGatewayBackendAddressPools: !item["applicationGatewayBackendAddressPools"]
      ? item["applicationGatewayBackendAddressPools"]
      : commonSubResourceArraySerializer(item["applicationGatewayBackendAddressPools"]),
    loadBalancerBackendAddressPools: !item["loadBalancerBackendAddressPools"]
      ? item["loadBalancerBackendAddressPools"]
      : commonSubResourceArraySerializer(item["loadBalancerBackendAddressPools"]),
  };
}

export function _virtualMachineNetworkInterfaceIPConfigurationPropertiesDeserializer(item: any) {
  return {
    subnet: !item["subnet"] ? item["subnet"] : commonSubResourceDeserializer(item["subnet"]),
    primary: item["primary"],
    publicIPAddressConfiguration: !item["publicIPAddressConfiguration"]
      ? item["publicIPAddressConfiguration"]
      : computeVirtualMachinePublicIPAddressConfigurationDeserializer(
          item["publicIPAddressConfiguration"],
        ),
    privateIPAddressVersion: item["privateIPAddressVersion"],
    applicationSecurityGroups: !item["applicationSecurityGroups"]
      ? item["applicationSecurityGroups"]
      : commonSubResourceArrayDeserializer(item["applicationSecurityGroups"]),
    applicationGatewayBackendAddressPools: !item["applicationGatewayBackendAddressPools"]
      ? item["applicationGatewayBackendAddressPools"]
      : commonSubResourceArrayDeserializer(item["applicationGatewayBackendAddressPools"]),
    loadBalancerBackendAddressPools: !item["loadBalancerBackendAddressPools"]
      ? item["loadBalancerBackendAddressPools"]
      : commonSubResourceArrayDeserializer(item["loadBalancerBackendAddressPools"]),
  };
}

export function _virtualMachineNetworkInterfaceConfigurationPropertiesSerializer(
  item: ComputeVirtualMachineNetworkInterfaceConfiguration,
): any {
  return {
    primary: item["primary"],
    deleteOption: item["deleteOption"],
    enableAcceleratedNetworking: item["enableAcceleratedNetworking"],
    disableTcpStateTracking: item["disableTcpStateTracking"],
    enableFpga: item["enableFpga"],
    enableIPForwarding: item["enableIPForwarding"],
    networkSecurityGroup: !item["networkSecurityGroup"]
      ? item["networkSecurityGroup"]
      : commonSubResourceSerializer(item["networkSecurityGroup"]),
    dnsSettings: !item["dnsSettings"]
      ? item["dnsSettings"]
      : computeVirtualMachineNetworkInterfaceDnsSettingsConfigurationSerializer(
          item["dnsSettings"],
        ),
    ipConfigurations: !item["ipConfigurations"]
      ? item["ipConfigurations"]
      : computeVirtualMachineNetworkInterfaceIPConfigurationArraySerializer(
          item["ipConfigurations"],
        ),
    dscpConfiguration: !item["dscpConfiguration"]
      ? item["dscpConfiguration"]
      : commonSubResourceSerializer(item["dscpConfiguration"]),
    auxiliaryMode: item["auxiliaryMode"],
    auxiliarySku: item["auxiliarySku"],
  };
}

export function _virtualMachineNetworkInterfaceConfigurationPropertiesDeserializer(item: any) {
  return {
    primary: item["primary"],
    deleteOption: item["deleteOption"],
    enableAcceleratedNetworking: item["enableAcceleratedNetworking"],
    disableTcpStateTracking: item["disableTcpStateTracking"],
    enableFpga: item["enableFpga"],
    enableIPForwarding: item["enableIPForwarding"],
    networkSecurityGroup: !item["networkSecurityGroup"]
      ? item["networkSecurityGroup"]
      : commonSubResourceDeserializer(item["networkSecurityGroup"]),
    dnsSettings: !item["dnsSettings"]
      ? item["dnsSettings"]
      : computeVirtualMachineNetworkInterfaceDnsSettingsConfigurationDeserializer(
          item["dnsSettings"],
        ),
    ipConfigurations: !item["ipConfigurations"]
      ? item["ipConfigurations"]
      : computeVirtualMachineNetworkInterfaceIPConfigurationArrayDeserializer(
          item["ipConfigurations"],
        ),
    dscpConfiguration: !item["dscpConfiguration"]
      ? item["dscpConfiguration"]
      : commonSubResourceDeserializer(item["dscpConfiguration"]),
    auxiliaryMode: item["auxiliaryMode"],
    auxiliarySku: item["auxiliarySku"],
  };
}

export function _virtualMachinePropertiesSerializer(item: ComputeVirtualMachine): any {
  return {
    hardwareProfile: !item["hardwareProfile"]
      ? item["hardwareProfile"]
      : computeHardwareProfileSerializer(item["hardwareProfile"]),
    scheduledEventsPolicy: !item["scheduledEventsPolicy"]
      ? item["scheduledEventsPolicy"]
      : computeScheduledEventsPolicySerializer(item["scheduledEventsPolicy"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeStorageProfileSerializer(item["storageProfile"]),
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeAdditionalCapabilitiesSerializer(item["additionalCapabilities"]),
    osProfile: !item["osProfile"]
      ? item["osProfile"]
      : computeOSProfileSerializer(item["osProfile"]),
    networkProfile: !item["networkProfile"]
      ? item["networkProfile"]
      : computeNetworkProfileSerializer(item["networkProfile"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeSecurityProfileSerializer(item["securityProfile"]),
    diagnosticsProfile: !item["diagnosticsProfile"]
      ? item["diagnosticsProfile"]
      : computeDiagnosticsProfileSerializer(item["diagnosticsProfile"]),
    availabilitySet: !item["availabilitySet"]
      ? item["availabilitySet"]
      : commonSubResourceSerializer(item["availabilitySet"]),
    virtualMachineScaleSet: !item["virtualMachineScaleSet"]
      ? item["virtualMachineScaleSet"]
      : commonSubResourceSerializer(item["virtualMachineScaleSet"]),
    proximityPlacementGroup: !item["proximityPlacementGroup"]
      ? item["proximityPlacementGroup"]
      : commonSubResourceSerializer(item["proximityPlacementGroup"]),
    priority: item["priority"],
    evictionPolicy: item["evictionPolicy"],
    billingProfile: !item["billingProfile"]
      ? item["billingProfile"]
      : computeBillingProfileSerializer(item["billingProfile"]),
    host: !item["host"] ? item["host"] : commonSubResourceSerializer(item["host"]),
    hostGroup: !item["hostGroup"]
      ? item["hostGroup"]
      : commonSubResourceSerializer(item["hostGroup"]),
    licenseType: item["licenseType"],
    extensionsTimeBudget: item["extensionsTimeBudget"],
    platformFaultDomain: item["platformFaultDomain"],
    scheduledEventsProfile: !item["scheduledEventsProfile"]
      ? item["scheduledEventsProfile"]
      : computeScheduledEventsProfileSerializer(item["scheduledEventsProfile"]),
    userData: item["userData"],
    capacityReservation: !item["capacityReservation"]
      ? item["capacityReservation"]
      : computeCapacityReservationProfileSerializer(item["capacityReservation"]),
    applicationProfile: !item["applicationProfile"]
      ? item["applicationProfile"]
      : computeApplicationProfileSerializer(item["applicationProfile"]),
  };
}

export function _virtualMachinePropertiesDeserializer(item: any) {
  return {
    hardwareProfile: !item["hardwareProfile"]
      ? item["hardwareProfile"]
      : computeHardwareProfileDeserializer(item["hardwareProfile"]),
    scheduledEventsPolicy: !item["scheduledEventsPolicy"]
      ? item["scheduledEventsPolicy"]
      : computeScheduledEventsPolicyDeserializer(item["scheduledEventsPolicy"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeStorageProfileDeserializer(item["storageProfile"]),
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeAdditionalCapabilitiesDeserializer(item["additionalCapabilities"]),
    osProfile: !item["osProfile"]
      ? item["osProfile"]
      : computeOSProfileDeserializer(item["osProfile"]),
    networkProfile: !item["networkProfile"]
      ? item["networkProfile"]
      : computeNetworkProfileDeserializer(item["networkProfile"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeSecurityProfileDeserializer(item["securityProfile"]),
    diagnosticsProfile: !item["diagnosticsProfile"]
      ? item["diagnosticsProfile"]
      : computeDiagnosticsProfileDeserializer(item["diagnosticsProfile"]),
    availabilitySet: !item["availabilitySet"]
      ? item["availabilitySet"]
      : commonSubResourceDeserializer(item["availabilitySet"]),
    virtualMachineScaleSet: !item["virtualMachineScaleSet"]
      ? item["virtualMachineScaleSet"]
      : commonSubResourceDeserializer(item["virtualMachineScaleSet"]),
    proximityPlacementGroup: !item["proximityPlacementGroup"]
      ? item["proximityPlacementGroup"]
      : commonSubResourceDeserializer(item["proximityPlacementGroup"]),
    priority: item["priority"],
    evictionPolicy: item["evictionPolicy"],
    billingProfile: !item["billingProfile"]
      ? item["billingProfile"]
      : computeBillingProfileDeserializer(item["billingProfile"]),
    host: !item["host"] ? item["host"] : commonSubResourceDeserializer(item["host"]),
    hostGroup: !item["hostGroup"]
      ? item["hostGroup"]
      : commonSubResourceDeserializer(item["hostGroup"]),
    provisioningState: item["provisioningState"],
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeVirtualMachineInstanceViewDeserializer(item["instanceView"]),
    licenseType: item["licenseType"],
    vmId: item["vmId"],
    extensionsTimeBudget: item["extensionsTimeBudget"],
    platformFaultDomain: item["platformFaultDomain"],
    scheduledEventsProfile: !item["scheduledEventsProfile"]
      ? item["scheduledEventsProfile"]
      : computeScheduledEventsProfileDeserializer(item["scheduledEventsProfile"]),
    userData: item["userData"],
    capacityReservation: !item["capacityReservation"]
      ? item["capacityReservation"]
      : computeCapacityReservationProfileDeserializer(item["capacityReservation"]),
    applicationProfile: !item["applicationProfile"]
      ? item["applicationProfile"]
      : computeApplicationProfileDeserializer(item["applicationProfile"]),
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
  };
}

export function _virtualMachineExtensionPropertiesSerializer(
  item: ComputeVirtualMachineExtension,
): any {
  return {
    forceUpdateTag: item["forceUpdateTag"],
    publisher: item["publisher"],
    type: item["typePropertiesType"],
    typeHandlerVersion: item["typeHandlerVersion"],
    autoUpgradeMinorVersion: item["autoUpgradeMinorVersion"],
    enableAutomaticUpgrade: item["enableAutomaticUpgrade"],
    settings: item["settings"],
    protectedSettings: item["protectedSettings"],
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeVirtualMachineExtensionInstanceViewSerializer(item["instanceView"]),
    suppressFailures: item["suppressFailures"],
    protectedSettingsFromKeyVault: !item["protectedSettingsFromKeyVault"]
      ? item["protectedSettingsFromKeyVault"]
      : computeKeyVaultSecretReferenceSerializer(item["protectedSettingsFromKeyVault"]),
    provisionAfterExtensions: !item["provisionAfterExtensions"]
      ? item["provisionAfterExtensions"]
      : item["provisionAfterExtensions"].map((p: any) => {
          return p;
        }),
  };
}

export function _virtualMachineExtensionPropertiesDeserializer(item: any) {
  return {
    forceUpdateTag: item["forceUpdateTag"],
    publisher: item["publisher"],
    typePropertiesType: item["type"],
    typeHandlerVersion: item["typeHandlerVersion"],
    autoUpgradeMinorVersion: item["autoUpgradeMinorVersion"],
    enableAutomaticUpgrade: item["enableAutomaticUpgrade"],
    settings: item["settings"],
    protectedSettings: item["protectedSettings"],
    provisioningState: item["provisioningState"],
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeVirtualMachineExtensionInstanceViewDeserializer(item["instanceView"]),
    suppressFailures: item["suppressFailures"],
    protectedSettingsFromKeyVault: !item["protectedSettingsFromKeyVault"]
      ? item["protectedSettingsFromKeyVault"]
      : computeKeyVaultSecretReferenceDeserializer(item["protectedSettingsFromKeyVault"]),
    provisionAfterExtensions: !item["provisionAfterExtensions"]
      ? item["provisionAfterExtensions"]
      : item["provisionAfterExtensions"].map((p: any) => {
          return p;
        }),
  };
}

export function _virtualMachineUpdatePropertiesSerializer(item: ComputeVirtualMachineUpdate): any {
  return {
    hardwareProfile: !item["hardwareProfile"]
      ? item["hardwareProfile"]
      : computeHardwareProfileSerializer(item["hardwareProfile"]),
    scheduledEventsPolicy: !item["scheduledEventsPolicy"]
      ? item["scheduledEventsPolicy"]
      : computeScheduledEventsPolicySerializer(item["scheduledEventsPolicy"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeStorageProfileSerializer(item["storageProfile"]),
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeAdditionalCapabilitiesSerializer(item["additionalCapabilities"]),
    osProfile: !item["osProfile"]
      ? item["osProfile"]
      : computeOSProfileSerializer(item["osProfile"]),
    networkProfile: !item["networkProfile"]
      ? item["networkProfile"]
      : computeNetworkProfileSerializer(item["networkProfile"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeSecurityProfileSerializer(item["securityProfile"]),
    diagnosticsProfile: !item["diagnosticsProfile"]
      ? item["diagnosticsProfile"]
      : computeDiagnosticsProfileSerializer(item["diagnosticsProfile"]),
    availabilitySet: !item["availabilitySet"]
      ? item["availabilitySet"]
      : commonSubResourceSerializer(item["availabilitySet"]),
    virtualMachineScaleSet: !item["virtualMachineScaleSet"]
      ? item["virtualMachineScaleSet"]
      : commonSubResourceSerializer(item["virtualMachineScaleSet"]),
    proximityPlacementGroup: !item["proximityPlacementGroup"]
      ? item["proximityPlacementGroup"]
      : commonSubResourceSerializer(item["proximityPlacementGroup"]),
    priority: item["priority"],
    evictionPolicy: item["evictionPolicy"],
    billingProfile: !item["billingProfile"]
      ? item["billingProfile"]
      : computeBillingProfileSerializer(item["billingProfile"]),
    host: !item["host"] ? item["host"] : commonSubResourceSerializer(item["host"]),
    hostGroup: !item["hostGroup"]
      ? item["hostGroup"]
      : commonSubResourceSerializer(item["hostGroup"]),
    licenseType: item["licenseType"],
    extensionsTimeBudget: item["extensionsTimeBudget"],
    platformFaultDomain: item["platformFaultDomain"],
    scheduledEventsProfile: !item["scheduledEventsProfile"]
      ? item["scheduledEventsProfile"]
      : computeScheduledEventsProfileSerializer(item["scheduledEventsProfile"]),
    userData: item["userData"],
    capacityReservation: !item["capacityReservation"]
      ? item["capacityReservation"]
      : computeCapacityReservationProfileSerializer(item["capacityReservation"]),
    applicationProfile: !item["applicationProfile"]
      ? item["applicationProfile"]
      : computeApplicationProfileSerializer(item["applicationProfile"]),
  };
}

export function _virtualMachineUpdatePropertiesDeserializer(item: any) {
  return {
    hardwareProfile: !item["hardwareProfile"]
      ? item["hardwareProfile"]
      : computeHardwareProfileDeserializer(item["hardwareProfile"]),
    scheduledEventsPolicy: !item["scheduledEventsPolicy"]
      ? item["scheduledEventsPolicy"]
      : computeScheduledEventsPolicyDeserializer(item["scheduledEventsPolicy"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeStorageProfileDeserializer(item["storageProfile"]),
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeAdditionalCapabilitiesDeserializer(item["additionalCapabilities"]),
    osProfile: !item["osProfile"]
      ? item["osProfile"]
      : computeOSProfileDeserializer(item["osProfile"]),
    networkProfile: !item["networkProfile"]
      ? item["networkProfile"]
      : computeNetworkProfileDeserializer(item["networkProfile"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeSecurityProfileDeserializer(item["securityProfile"]),
    diagnosticsProfile: !item["diagnosticsProfile"]
      ? item["diagnosticsProfile"]
      : computeDiagnosticsProfileDeserializer(item["diagnosticsProfile"]),
    availabilitySet: !item["availabilitySet"]
      ? item["availabilitySet"]
      : commonSubResourceDeserializer(item["availabilitySet"]),
    virtualMachineScaleSet: !item["virtualMachineScaleSet"]
      ? item["virtualMachineScaleSet"]
      : commonSubResourceDeserializer(item["virtualMachineScaleSet"]),
    proximityPlacementGroup: !item["proximityPlacementGroup"]
      ? item["proximityPlacementGroup"]
      : commonSubResourceDeserializer(item["proximityPlacementGroup"]),
    priority: item["priority"],
    evictionPolicy: item["evictionPolicy"],
    billingProfile: !item["billingProfile"]
      ? item["billingProfile"]
      : computeBillingProfileDeserializer(item["billingProfile"]),
    host: !item["host"] ? item["host"] : commonSubResourceDeserializer(item["host"]),
    hostGroup: !item["hostGroup"]
      ? item["hostGroup"]
      : commonSubResourceDeserializer(item["hostGroup"]),
    provisioningState: item["provisioningState"],
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeVirtualMachineInstanceViewDeserializer(item["instanceView"]),
    licenseType: item["licenseType"],
    vmId: item["vmId"],
    extensionsTimeBudget: item["extensionsTimeBudget"],
    platformFaultDomain: item["platformFaultDomain"],
    scheduledEventsProfile: !item["scheduledEventsProfile"]
      ? item["scheduledEventsProfile"]
      : computeScheduledEventsProfileDeserializer(item["scheduledEventsProfile"]),
    userData: item["userData"],
    capacityReservation: !item["capacityReservation"]
      ? item["capacityReservation"]
      : computeCapacityReservationProfileDeserializer(item["capacityReservation"]),
    applicationProfile: !item["applicationProfile"]
      ? item["applicationProfile"]
      : computeApplicationProfileDeserializer(item["applicationProfile"]),
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
  };
}

export function _virtualMachineExtensionUpdatePropertiesSerializer(
  item: ComputeVirtualMachineExtensionUpdate,
): any {
  return {
    forceUpdateTag: item["forceUpdateTag"],
    publisher: item["publisher"],
    type: item["type"],
    typeHandlerVersion: item["typeHandlerVersion"],
    autoUpgradeMinorVersion: item["autoUpgradeMinorVersion"],
    enableAutomaticUpgrade: item["enableAutomaticUpgrade"],
    settings: item["settings"],
    protectedSettings: item["protectedSettings"],
    suppressFailures: item["suppressFailures"],
    protectedSettingsFromKeyVault: !item["protectedSettingsFromKeyVault"]
      ? item["protectedSettingsFromKeyVault"]
      : computeKeyVaultSecretReferenceSerializer(item["protectedSettingsFromKeyVault"]),
  };
}

export function _virtualMachineExtensionImagePropertiesDeserializer(item: any) {
  return {
    operatingSystem: item["operatingSystem"],
    computeRole: item["computeRole"],
    handlerSchema: item["handlerSchema"],
    vmScaleSetEnabled: item["vmScaleSetEnabled"],
    supportsMultipleExtensions: item["supportsMultipleExtensions"],
  };
}

export function _availabilitySetPropertiesSerializer(item: ComputeAvailabilitySet): any {
  return {
    platformUpdateDomainCount: item["platformUpdateDomainCount"],
    platformFaultDomainCount: item["platformFaultDomainCount"],
    virtualMachines: !item["virtualMachines"]
      ? item["virtualMachines"]
      : commonSubResourceArraySerializer(item["virtualMachines"]),
    proximityPlacementGroup: !item["proximityPlacementGroup"]
      ? item["proximityPlacementGroup"]
      : commonSubResourceSerializer(item["proximityPlacementGroup"]),
    scheduledEventsPolicy: !item["scheduledEventsPolicy"]
      ? item["scheduledEventsPolicy"]
      : computeScheduledEventsPolicySerializer(item["scheduledEventsPolicy"]),
  };
}

export function _availabilitySetPropertiesDeserializer(item: any) {
  return {
    platformUpdateDomainCount: item["platformUpdateDomainCount"],
    platformFaultDomainCount: item["platformFaultDomainCount"],
    virtualMachines: !item["virtualMachines"]
      ? item["virtualMachines"]
      : commonSubResourceArrayDeserializer(item["virtualMachines"]),
    proximityPlacementGroup: !item["proximityPlacementGroup"]
      ? item["proximityPlacementGroup"]
      : commonSubResourceDeserializer(item["proximityPlacementGroup"]),
    statuses: !item["statuses"]
      ? item["statuses"]
      : computeInstanceViewStatusArrayDeserializer(item["statuses"]),
    scheduledEventsPolicy: !item["scheduledEventsPolicy"]
      ? item["scheduledEventsPolicy"]
      : computeScheduledEventsPolicyDeserializer(item["scheduledEventsPolicy"]),
    virtualMachineScaleSetMigrationInfo: !item["virtualMachineScaleSetMigrationInfo"]
      ? item["virtualMachineScaleSetMigrationInfo"]
      : computeVirtualMachineScaleSetMigrationInfoDeserializer(
          item["virtualMachineScaleSetMigrationInfo"],
        ),
  };
}

export function _availabilitySetUpdatePropertiesSerializer(
  item: ComputeAvailabilitySetUpdate,
): any {
  return {
    platformUpdateDomainCount: item["platformUpdateDomainCount"],
    platformFaultDomainCount: item["platformFaultDomainCount"],
    virtualMachines: !item["virtualMachines"]
      ? item["virtualMachines"]
      : commonSubResourceArraySerializer(item["virtualMachines"]),
    proximityPlacementGroup: !item["proximityPlacementGroup"]
      ? item["proximityPlacementGroup"]
      : commonSubResourceSerializer(item["proximityPlacementGroup"]),
    scheduledEventsPolicy: !item["scheduledEventsPolicy"]
      ? item["scheduledEventsPolicy"]
      : computeScheduledEventsPolicySerializer(item["scheduledEventsPolicy"]),
  };
}

export function _availabilitySetUpdatePropertiesDeserializer(item: any) {
  return {
    platformUpdateDomainCount: item["platformUpdateDomainCount"],
    platformFaultDomainCount: item["platformFaultDomainCount"],
    virtualMachines: !item["virtualMachines"]
      ? item["virtualMachines"]
      : commonSubResourceArrayDeserializer(item["virtualMachines"]),
    proximityPlacementGroup: !item["proximityPlacementGroup"]
      ? item["proximityPlacementGroup"]
      : commonSubResourceDeserializer(item["proximityPlacementGroup"]),
    statuses: !item["statuses"]
      ? item["statuses"]
      : computeInstanceViewStatusArrayDeserializer(item["statuses"]),
    scheduledEventsPolicy: !item["scheduledEventsPolicy"]
      ? item["scheduledEventsPolicy"]
      : computeScheduledEventsPolicyDeserializer(item["scheduledEventsPolicy"]),
    virtualMachineScaleSetMigrationInfo: !item["virtualMachineScaleSetMigrationInfo"]
      ? item["virtualMachineScaleSetMigrationInfo"]
      : computeVirtualMachineScaleSetMigrationInfoDeserializer(
          item["virtualMachineScaleSetMigrationInfo"],
        ),
  };
}

export function _proximityPlacementGroupPropertiesSerializer(
  item: ComputeProximityPlacementGroup,
): any {
  return {
    proximityPlacementGroupType: item["proximityPlacementGroupType"],
    colocationStatus: !item["colocationStatus"]
      ? item["colocationStatus"]
      : computeInstanceViewStatusSerializer(item["colocationStatus"]),
    intent: !item["intent"]
      ? item["intent"]
      : computeProximityPlacementGroupPropertiesIntentSerializer(item["intent"]),
  };
}

export function _proximityPlacementGroupPropertiesDeserializer(item: any) {
  return {
    proximityPlacementGroupType: item["proximityPlacementGroupType"],
    virtualMachines: !item["virtualMachines"]
      ? item["virtualMachines"]
      : computeSubResourceWithColocationStatusArrayDeserializer(item["virtualMachines"]),
    virtualMachineScaleSets: !item["virtualMachineScaleSets"]
      ? item["virtualMachineScaleSets"]
      : computeSubResourceWithColocationStatusArrayDeserializer(item["virtualMachineScaleSets"]),
    availabilitySets: !item["availabilitySets"]
      ? item["availabilitySets"]
      : computeSubResourceWithColocationStatusArrayDeserializer(item["availabilitySets"]),
    colocationStatus: !item["colocationStatus"]
      ? item["colocationStatus"]
      : computeInstanceViewStatusDeserializer(item["colocationStatus"]),
    intent: !item["intent"]
      ? item["intent"]
      : computeProximityPlacementGroupPropertiesIntentDeserializer(item["intent"]),
  };
}

export function _dedicatedHostGroupPropertiesSerializer(item: ComputeDedicatedHostGroup): any {
  return {
    platformFaultDomainCount: item["platformFaultDomainCount"],
    supportAutomaticPlacement: item["supportAutomaticPlacement"],
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeDedicatedHostGroupPropertiesAdditionalCapabilitiesSerializer(
          item["additionalCapabilities"],
        ),
  };
}

export function _dedicatedHostGroupPropertiesDeserializer(item: any) {
  return {
    platformFaultDomainCount: item["platformFaultDomainCount"],
    hosts: !item["hosts"]
      ? item["hosts"]
      : commonSubResourceReadOnlyArrayDeserializer(item["hosts"]),
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeDedicatedHostGroupInstanceViewDeserializer(item["instanceView"]),
    supportAutomaticPlacement: item["supportAutomaticPlacement"],
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeDedicatedHostGroupPropertiesAdditionalCapabilitiesDeserializer(
          item["additionalCapabilities"],
        ),
  };
}

export function _dedicatedHostGroupUpdatePropertiesSerializer(
  item: ComputeDedicatedHostGroupUpdate,
): any {
  return {
    platformFaultDomainCount: item["platformFaultDomainCount"],
    supportAutomaticPlacement: item["supportAutomaticPlacement"],
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeDedicatedHostGroupPropertiesAdditionalCapabilitiesSerializer(
          item["additionalCapabilities"],
        ),
  };
}

export function _dedicatedHostGroupUpdatePropertiesDeserializer(item: any) {
  return {
    platformFaultDomainCount: item["platformFaultDomainCount"],
    hosts: !item["hosts"]
      ? item["hosts"]
      : commonSubResourceReadOnlyArrayDeserializer(item["hosts"]),
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeDedicatedHostGroupInstanceViewDeserializer(item["instanceView"]),
    supportAutomaticPlacement: item["supportAutomaticPlacement"],
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeDedicatedHostGroupPropertiesAdditionalCapabilitiesDeserializer(
          item["additionalCapabilities"],
        ),
  };
}

export function _dedicatedHostPropertiesSerializer(item: ComputeDedicatedHost): any {
  return {
    platformFaultDomain: item["platformFaultDomain"],
    autoReplaceOnFailure: item["autoReplaceOnFailure"],
    licenseType: item["licenseType"],
  };
}

export function _dedicatedHostPropertiesDeserializer(item: any) {
  return {
    platformFaultDomain: item["platformFaultDomain"],
    autoReplaceOnFailure: item["autoReplaceOnFailure"],
    hostId: item["hostId"],
    virtualMachines: !item["virtualMachines"]
      ? item["virtualMachines"]
      : commonSubResourceReadOnlyArrayDeserializer(item["virtualMachines"]),
    licenseType: item["licenseType"],
    provisioningTime: !item["provisioningTime"]
      ? item["provisioningTime"]
      : new Date(item["provisioningTime"]),
    provisioningState: item["provisioningState"],
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeDedicatedHostInstanceViewDeserializer(item["instanceView"]),
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
  };
}

export function _dedicatedHostUpdatePropertiesSerializer(item: ComputeDedicatedHostUpdate): any {
  return {
    platformFaultDomain: item["platformFaultDomain"],
    autoReplaceOnFailure: item["autoReplaceOnFailure"],
    licenseType: item["licenseType"],
  };
}

export function _dedicatedHostUpdatePropertiesDeserializer(item: any) {
  return {
    platformFaultDomain: item["platformFaultDomain"],
    autoReplaceOnFailure: item["autoReplaceOnFailure"],
    hostId: item["hostId"],
    virtualMachines: !item["virtualMachines"]
      ? item["virtualMachines"]
      : commonSubResourceReadOnlyArrayDeserializer(item["virtualMachines"]),
    licenseType: item["licenseType"],
    provisioningTime: !item["provisioningTime"]
      ? item["provisioningTime"]
      : new Date(item["provisioningTime"]),
    provisioningState: item["provisioningState"],
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeDedicatedHostInstanceViewDeserializer(item["instanceView"]),
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
  };
}

export function _imagePropertiesSerializer(item: ComputeImage): any {
  return {
    sourceVirtualMachine: !item["sourceVirtualMachine"]
      ? item["sourceVirtualMachine"]
      : commonSubResourceSerializer(item["sourceVirtualMachine"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeImageStorageProfileSerializer(item["storageProfile"]),
    hyperVGeneration: item["hyperVGeneration"],
  };
}

export function _imagePropertiesDeserializer(item: any) {
  return {
    sourceVirtualMachine: !item["sourceVirtualMachine"]
      ? item["sourceVirtualMachine"]
      : commonSubResourceDeserializer(item["sourceVirtualMachine"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeImageStorageProfileDeserializer(item["storageProfile"]),
    provisioningState: item["provisioningState"],
    hyperVGeneration: item["hyperVGeneration"],
  };
}

export function _imageUpdatePropertiesSerializer(item: ComputeImageUpdate): any {
  return {
    sourceVirtualMachine: !item["sourceVirtualMachine"]
      ? item["sourceVirtualMachine"]
      : commonSubResourceSerializer(item["sourceVirtualMachine"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeImageStorageProfileSerializer(item["storageProfile"]),
    hyperVGeneration: item["hyperVGeneration"],
  };
}

export function _imageUpdatePropertiesDeserializer(item: any) {
  return {
    sourceVirtualMachine: !item["sourceVirtualMachine"]
      ? item["sourceVirtualMachine"]
      : commonSubResourceDeserializer(item["sourceVirtualMachine"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeImageStorageProfileDeserializer(item["storageProfile"]),
    provisioningState: item["provisioningState"],
    hyperVGeneration: item["hyperVGeneration"],
  };
}

export function _restorePointPropertiesSerializer(item: ComputeRestorePoint): any {
  return {
    excludeDisks: !item["excludeDisks"]
      ? item["excludeDisks"]
      : computeApiEntityReferenceArraySerializer(item["excludeDisks"]),
    sourceMetadata: !item["sourceMetadata"]
      ? item["sourceMetadata"]
      : computeRestorePointSourceMetadataSerializer(item["sourceMetadata"]),
    consistencyMode: item["consistencyMode"],
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : item["timeCreated"].toISOString(),
    sourceRestorePoint: !item["sourceRestorePoint"]
      ? item["sourceRestorePoint"]
      : computeApiEntityReferenceSerializer(item["sourceRestorePoint"]),
    instantAccessDurationMinutes: item["instantAccessDurationMinutes"],
  };
}

export function _restorePointPropertiesDeserializer(item: any) {
  return {
    excludeDisks: !item["excludeDisks"]
      ? item["excludeDisks"]
      : computeApiEntityReferenceArrayDeserializer(item["excludeDisks"]),
    sourceMetadata: !item["sourceMetadata"]
      ? item["sourceMetadata"]
      : computeRestorePointSourceMetadataDeserializer(item["sourceMetadata"]),
    provisioningState: item["provisioningState"],
    consistencyMode: item["consistencyMode"],
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
    sourceRestorePoint: !item["sourceRestorePoint"]
      ? item["sourceRestorePoint"]
      : computeApiEntityReferenceDeserializer(item["sourceRestorePoint"]),
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeRestorePointInstanceViewDeserializer(item["instanceView"]),
    instantAccessDurationMinutes: item["instantAccessDurationMinutes"],
  };
}

export function _restorePointCollectionPropertiesSerializer(
  item: ComputeRestorePointCollection,
): any {
  return {
    source: !item["source"]
      ? item["source"]
      : computeRestorePointCollectionSourcePropertiesSerializer(item["source"]),
    instantAccess: item["instantAccess"],
  };
}

export function _restorePointCollectionPropertiesDeserializer(item: any) {
  return {
    source: !item["source"]
      ? item["source"]
      : computeRestorePointCollectionSourcePropertiesDeserializer(item["source"]),
    provisioningState: item["provisioningState"],
    restorePointCollectionId: item["restorePointCollectionId"],
    restorePoints: !item["restorePoints"]
      ? item["restorePoints"]
      : computeRestorePointArrayDeserializer(item["restorePoints"]),
    instantAccess: item["instantAccess"],
  };
}

export function _restorePointCollectionUpdatePropertiesSerializer(
  item: ComputeRestorePointCollectionUpdate,
): any {
  return {
    source: !item["source"]
      ? item["source"]
      : computeRestorePointCollectionSourcePropertiesSerializer(item["source"]),
    instantAccess: item["instantAccess"],
  };
}

export function _restorePointCollectionUpdatePropertiesDeserializer(item: any) {
  return {
    source: !item["source"]
      ? item["source"]
      : computeRestorePointCollectionSourcePropertiesDeserializer(item["source"]),
    provisioningState: item["provisioningState"],
    restorePointCollectionId: item["restorePointCollectionId"],
    restorePoints: !item["restorePoints"]
      ? item["restorePoints"]
      : computeRestorePointArrayDeserializer(item["restorePoints"]),
    instantAccess: item["instantAccess"],
  };
}

export function _capacityReservationGroupPropertiesSerializer(
  item: ComputeCapacityReservationGroup,
): any {
  return {
    sharingProfile: !item["sharingProfile"]
      ? item["sharingProfile"]
      : computeResourceSharingProfileSerializer(item["sharingProfile"]),
    reservationType: item["reservationType"],
  };
}

export function _capacityReservationGroupPropertiesDeserializer(item: any) {
  return {
    capacityReservations: !item["capacityReservations"]
      ? item["capacityReservations"]
      : commonSubResourceReadOnlyArrayDeserializer(item["capacityReservations"]),
    virtualMachinesAssociated: !item["virtualMachinesAssociated"]
      ? item["virtualMachinesAssociated"]
      : commonSubResourceReadOnlyArrayDeserializer(item["virtualMachinesAssociated"]),
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeCapacityReservationGroupInstanceViewDeserializer(item["instanceView"]),
    sharingProfile: !item["sharingProfile"]
      ? item["sharingProfile"]
      : computeResourceSharingProfileDeserializer(item["sharingProfile"]),
    reservationType: item["reservationType"],
  };
}

export function _capacityReservationGroupUpdatePropertiesSerializer(
  item: ComputeCapacityReservationGroupUpdate,
): any {
  return {
    sharingProfile: !item["sharingProfile"]
      ? item["sharingProfile"]
      : computeResourceSharingProfileSerializer(item["sharingProfile"]),
    reservationType: item["reservationType"],
  };
}

export function _capacityReservationGroupUpdatePropertiesDeserializer(item: any) {
  return {
    capacityReservations: !item["capacityReservations"]
      ? item["capacityReservations"]
      : commonSubResourceReadOnlyArrayDeserializer(item["capacityReservations"]),
    virtualMachinesAssociated: !item["virtualMachinesAssociated"]
      ? item["virtualMachinesAssociated"]
      : commonSubResourceReadOnlyArrayDeserializer(item["virtualMachinesAssociated"]),
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeCapacityReservationGroupInstanceViewDeserializer(item["instanceView"]),
    sharingProfile: !item["sharingProfile"]
      ? item["sharingProfile"]
      : computeResourceSharingProfileDeserializer(item["sharingProfile"]),
    reservationType: item["reservationType"],
  };
}

export function _capacityReservationPropertiesSerializer(item: ComputeCapacityReservation): any {
  return {
    scheduleProfile: !item["scheduleProfile"]
      ? item["scheduleProfile"]
      : computeScheduleProfileSerializer(item["scheduleProfile"]),
  };
}

export function _capacityReservationPropertiesDeserializer(item: any) {
  return {
    reservationId: item["reservationId"],
    platformFaultDomainCount: item["platformFaultDomainCount"],
    virtualMachinesAssociated: !item["virtualMachinesAssociated"]
      ? item["virtualMachinesAssociated"]
      : commonSubResourceReadOnlyArrayDeserializer(item["virtualMachinesAssociated"]),
    provisioningTime: !item["provisioningTime"]
      ? item["provisioningTime"]
      : new Date(item["provisioningTime"]),
    provisioningState: item["provisioningState"],
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeCapacityReservationInstanceViewDeserializer(item["instanceView"]),
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
    scheduleProfile: !item["scheduleProfile"]
      ? item["scheduleProfile"]
      : computeScheduleProfileDeserializer(item["scheduleProfile"]),
  };
}

export function _capacityReservationUpdatePropertiesSerializer(
  item: ComputeCapacityReservationUpdate,
): any {
  return {
    scheduleProfile: !item["scheduleProfile"]
      ? item["scheduleProfile"]
      : computeScheduleProfileSerializer(item["scheduleProfile"]),
  };
}

export function _capacityReservationUpdatePropertiesDeserializer(item: any) {
  return {
    reservationId: item["reservationId"],
    platformFaultDomainCount: item["platformFaultDomainCount"],
    virtualMachinesAssociated: !item["virtualMachinesAssociated"]
      ? item["virtualMachinesAssociated"]
      : commonSubResourceReadOnlyArrayDeserializer(item["virtualMachinesAssociated"]),
    provisioningTime: !item["provisioningTime"]
      ? item["provisioningTime"]
      : new Date(item["provisioningTime"]),
    provisioningState: item["provisioningState"],
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeCapacityReservationInstanceViewDeserializer(item["instanceView"]),
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
    scheduleProfile: !item["scheduleProfile"]
      ? item["scheduleProfile"]
      : computeScheduleProfileDeserializer(item["scheduleProfile"]),
  };
}

export function _virtualMachineRunCommandPropertiesSerializer(
  item: ComputeVirtualMachineRunCommand,
): any {
  return {
    source: !item["source"]
      ? item["source"]
      : computeVirtualMachineRunCommandScriptSourceSerializer(item["source"]),
    parameters: !item["parameters"]
      ? item["parameters"]
      : computeRunCommandInputParameterArraySerializer(item["parameters"]),
    protectedParameters: !item["protectedParameters"]
      ? item["protectedParameters"]
      : computeRunCommandInputParameterArraySerializer(item["protectedParameters"]),
    asyncExecution: item["asyncExecution"],
    runAsUser: item["runAsUser"],
    runAsPassword: item["runAsPassword"],
    timeoutInSeconds: item["timeoutInSeconds"],
    outputBlobUri: item["outputBlobUri"],
    errorBlobUri: item["errorBlobUri"],
    outputBlobManagedIdentity: !item["outputBlobManagedIdentity"]
      ? item["outputBlobManagedIdentity"]
      : computeRunCommandManagedIdentitySerializer(item["outputBlobManagedIdentity"]),
    errorBlobManagedIdentity: !item["errorBlobManagedIdentity"]
      ? item["errorBlobManagedIdentity"]
      : computeRunCommandManagedIdentitySerializer(item["errorBlobManagedIdentity"]),
    treatFailureAsDeploymentFailure: item["treatFailureAsDeploymentFailure"],
  };
}

export function _virtualMachineRunCommandPropertiesDeserializer(item: any) {
  return {
    source: !item["source"]
      ? item["source"]
      : computeVirtualMachineRunCommandScriptSourceDeserializer(item["source"]),
    parameters: !item["parameters"]
      ? item["parameters"]
      : computeRunCommandInputParameterArrayDeserializer(item["parameters"]),
    protectedParameters: !item["protectedParameters"]
      ? item["protectedParameters"]
      : computeRunCommandInputParameterArrayDeserializer(item["protectedParameters"]),
    asyncExecution: item["asyncExecution"],
    runAsUser: item["runAsUser"],
    runAsPassword: item["runAsPassword"],
    timeoutInSeconds: item["timeoutInSeconds"],
    outputBlobUri: item["outputBlobUri"],
    errorBlobUri: item["errorBlobUri"],
    outputBlobManagedIdentity: !item["outputBlobManagedIdentity"]
      ? item["outputBlobManagedIdentity"]
      : computeRunCommandManagedIdentityDeserializer(item["outputBlobManagedIdentity"]),
    errorBlobManagedIdentity: !item["errorBlobManagedIdentity"]
      ? item["errorBlobManagedIdentity"]
      : computeRunCommandManagedIdentityDeserializer(item["errorBlobManagedIdentity"]),
    provisioningState: item["provisioningState"],
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeVirtualMachineRunCommandInstanceViewDeserializer(item["instanceView"]),
    treatFailureAsDeploymentFailure: item["treatFailureAsDeploymentFailure"],
  };
}

export function _virtualMachineRunCommandUpdatePropertiesSerializer(
  item: ComputeVirtualMachineRunCommandUpdate,
): any {
  return {
    source: !item["source"]
      ? item["source"]
      : computeVirtualMachineRunCommandScriptSourceSerializer(item["source"]),
    parameters: !item["parameters"]
      ? item["parameters"]
      : computeRunCommandInputParameterArraySerializer(item["parameters"]),
    protectedParameters: !item["protectedParameters"]
      ? item["protectedParameters"]
      : computeRunCommandInputParameterArraySerializer(item["protectedParameters"]),
    asyncExecution: item["asyncExecution"],
    runAsUser: item["runAsUser"],
    runAsPassword: item["runAsPassword"],
    timeoutInSeconds: item["timeoutInSeconds"],
    outputBlobUri: item["outputBlobUri"],
    errorBlobUri: item["errorBlobUri"],
    outputBlobManagedIdentity: !item["outputBlobManagedIdentity"]
      ? item["outputBlobManagedIdentity"]
      : computeRunCommandManagedIdentitySerializer(item["outputBlobManagedIdentity"]),
    errorBlobManagedIdentity: !item["errorBlobManagedIdentity"]
      ? item["errorBlobManagedIdentity"]
      : computeRunCommandManagedIdentitySerializer(item["errorBlobManagedIdentity"]),
    treatFailureAsDeploymentFailure: item["treatFailureAsDeploymentFailure"],
  };
}

export function _virtualMachineRunCommandUpdatePropertiesDeserializer(item: any) {
  return {
    source: !item["source"]
      ? item["source"]
      : computeVirtualMachineRunCommandScriptSourceDeserializer(item["source"]),
    parameters: !item["parameters"]
      ? item["parameters"]
      : computeRunCommandInputParameterArrayDeserializer(item["parameters"]),
    protectedParameters: !item["protectedParameters"]
      ? item["protectedParameters"]
      : computeRunCommandInputParameterArrayDeserializer(item["protectedParameters"]),
    asyncExecution: item["asyncExecution"],
    runAsUser: item["runAsUser"],
    runAsPassword: item["runAsPassword"],
    timeoutInSeconds: item["timeoutInSeconds"],
    outputBlobUri: item["outputBlobUri"],
    errorBlobUri: item["errorBlobUri"],
    outputBlobManagedIdentity: !item["outputBlobManagedIdentity"]
      ? item["outputBlobManagedIdentity"]
      : computeRunCommandManagedIdentityDeserializer(item["outputBlobManagedIdentity"]),
    errorBlobManagedIdentity: !item["errorBlobManagedIdentity"]
      ? item["errorBlobManagedIdentity"]
      : computeRunCommandManagedIdentityDeserializer(item["errorBlobManagedIdentity"]),
    provisioningState: item["provisioningState"],
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeVirtualMachineRunCommandInstanceViewDeserializer(item["instanceView"]),
    treatFailureAsDeploymentFailure: item["treatFailureAsDeploymentFailure"],
  };
}

export function _rollingUpgradeStatusInfoPropertiesDeserializer(item: any) {
  return {
    policy: !item["policy"]
      ? item["policy"]
      : computeRollingUpgradePolicyDeserializer(item["policy"]),
    runningStatus: !item["runningStatus"]
      ? item["runningStatus"]
      : computeRollingUpgradeRunningStatusDeserializer(item["runningStatus"]),
    progress: !item["progress"]
      ? item["progress"]
      : computeRollingUpgradeProgressInfoDeserializer(item["progress"]),
    error: !item["error"] ? item["error"] : commonApiErrorDeserializer(item["error"]),
  };
}

export function _virtualMachineScaleSetVMPropertiesSerializer(
  item: ComputeVirtualMachineScaleSetVM,
): any {
  return {
    hardwareProfile: !item["hardwareProfile"]
      ? item["hardwareProfile"]
      : computeHardwareProfileSerializer(item["hardwareProfile"]),
    resilientVMDeletionStatus: item["resilientVMDeletionStatus"],
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeStorageProfileSerializer(item["storageProfile"]),
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeAdditionalCapabilitiesSerializer(item["additionalCapabilities"]),
    osProfile: !item["osProfile"]
      ? item["osProfile"]
      : computeOSProfileSerializer(item["osProfile"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeSecurityProfileSerializer(item["securityProfile"]),
    networkProfile: !item["networkProfile"]
      ? item["networkProfile"]
      : computeNetworkProfileSerializer(item["networkProfile"]),
    networkProfileConfiguration: !item["networkProfileConfiguration"]
      ? item["networkProfileConfiguration"]
      : computeVirtualMachineScaleSetVMNetworkProfileConfigurationSerializer(
          item["networkProfileConfiguration"],
        ),
    diagnosticsProfile: !item["diagnosticsProfile"]
      ? item["diagnosticsProfile"]
      : computeDiagnosticsProfileSerializer(item["diagnosticsProfile"]),
    availabilitySet: !item["availabilitySet"]
      ? item["availabilitySet"]
      : commonSubResourceSerializer(item["availabilitySet"]),
    licenseType: item["licenseType"],
    protectionPolicy: !item["protectionPolicy"]
      ? item["protectionPolicy"]
      : computeVirtualMachineScaleSetVMProtectionPolicySerializer(item["protectionPolicy"]),
    userData: item["userData"],
  };
}

export function _virtualMachineScaleSetVMPropertiesDeserializer(item: any) {
  return {
    latestModelApplied: item["latestModelApplied"],
    vmId: item["vmId"],
    instanceView: !item["instanceView"]
      ? item["instanceView"]
      : computeVirtualMachineScaleSetVMInstanceViewDeserializer(item["instanceView"]),
    hardwareProfile: !item["hardwareProfile"]
      ? item["hardwareProfile"]
      : computeHardwareProfileDeserializer(item["hardwareProfile"]),
    resilientVMDeletionStatus: item["resilientVMDeletionStatus"],
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeStorageProfileDeserializer(item["storageProfile"]),
    additionalCapabilities: !item["additionalCapabilities"]
      ? item["additionalCapabilities"]
      : computeAdditionalCapabilitiesDeserializer(item["additionalCapabilities"]),
    osProfile: !item["osProfile"]
      ? item["osProfile"]
      : computeOSProfileDeserializer(item["osProfile"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeSecurityProfileDeserializer(item["securityProfile"]),
    networkProfile: !item["networkProfile"]
      ? item["networkProfile"]
      : computeNetworkProfileDeserializer(item["networkProfile"]),
    networkProfileConfiguration: !item["networkProfileConfiguration"]
      ? item["networkProfileConfiguration"]
      : computeVirtualMachineScaleSetVMNetworkProfileConfigurationDeserializer(
          item["networkProfileConfiguration"],
        ),
    diagnosticsProfile: !item["diagnosticsProfile"]
      ? item["diagnosticsProfile"]
      : computeDiagnosticsProfileDeserializer(item["diagnosticsProfile"]),
    availabilitySet: !item["availabilitySet"]
      ? item["availabilitySet"]
      : commonSubResourceDeserializer(item["availabilitySet"]),
    provisioningState: item["provisioningState"],
    licenseType: item["licenseType"],
    modelDefinitionApplied: item["modelDefinitionApplied"],
    protectionPolicy: !item["protectionPolicy"]
      ? item["protectionPolicy"]
      : computeVirtualMachineScaleSetVMProtectionPolicyDeserializer(item["protectionPolicy"]),
    userData: item["userData"],
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
  };
}

export function _sshPublicKeyResourcePropertiesSerializer(item: ComputeSshPublicKeyResource): any {
  return { publicKey: item["publicKey"] };
}

export function _sshPublicKeyResourcePropertiesDeserializer(item: any) {
  return {
    publicKey: item["publicKey"],
  };
}

export function _sshPublicKeyUpdateResourcePropertiesSerializer(
  item: ComputeSshPublicKeyUpdateResource,
): any {
  return { publicKey: item["publicKey"] };
}

export function _sshPublicKeyUpdateResourcePropertiesDeserializer(item: any) {
  return {
    publicKey: item["publicKey"],
  };
}

export function _virtualMachineImagePropertiesDeserializer(item: any) {
  return {
    plan: !item["plan"] ? item["plan"] : computePurchasePlanDeserializer(item["plan"]),
    osDiskImage: !item["osDiskImage"]
      ? item["osDiskImage"]
      : computeOSDiskImageDeserializer(item["osDiskImage"]),
    dataDiskImages: !item["dataDiskImages"]
      ? item["dataDiskImages"]
      : computeDataDiskImageArrayDeserializer(item["dataDiskImages"]),
    automaticOSUpgradeProperties: !item["automaticOSUpgradeProperties"]
      ? item["automaticOSUpgradeProperties"]
      : computeAutomaticOSUpgradePropertiesDeserializer(item["automaticOSUpgradeProperties"]),
    hyperVGeneration: item["hyperVGeneration"],
    disallowed: !item["disallowed"]
      ? item["disallowed"]
      : computeDisallowedConfigurationDeserializer(item["disallowed"]),
    features: !item["features"]
      ? item["features"]
      : computeVirtualMachineImageFeatureArrayDeserializer(item["features"]),
    architecture: item["architecture"],
    imageDeprecationStatus: !item["imageDeprecationStatus"]
      ? item["imageDeprecationStatus"]
      : computeImageDeprecationStatusDeserializer(item["imageDeprecationStatus"]),
  };
}
