// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { areAllPropsUndefined } from "../../static-helpers/serialization/check-prop-undefined.js";
import {
  CommonApiError,
  commonApiErrorDeserializer,
  CommonOperatingSystemTypes,
  commonUserAssignedIdentitiesValueRecordSerializer,
  commonUserAssignedIdentitiesValueRecordDeserializer,
  CommonUserAssignedIdentitiesValue,
  CommonExtendedLocation,
  commonExtendedLocationSerializer,
  commonExtendedLocationDeserializer,
  CommonSnapshotAccessState,
  CommonHyperVGeneration,
  CommonArchitecture,
} from "../common/models.js";
import { TrackedResource, systemDataDeserializer, ProxyResource } from "../models.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Disk resource. */
export interface ComputeDiskDisk extends TrackedResource {
  /** A relative URI containing the ID of the VM that has the disk attached. */
  readonly managedBy?: string;
  /** List of relative URIs containing the IDs of the VMs that have the disk attached. maxShares should be set to a value greater than one for disks to allow attaching them to multiple VMs. */
  readonly managedByExtended?: string[];
  /** The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS, Premium_ZRS, StandardSSD_ZRS, or PremiumV2_LRS. */
  sku?: ComputeDiskDiskSku;
  /** The Logical zone list for Disk. */
  zones?: string[];
  /** The extended location where the disk will be created. Extended location cannot be changed. */
  extendedLocation?: CommonExtendedLocation;
  /** The time when the disk was created. */
  readonly timeCreated?: Date;
  /** The Operating System type. */
  osType?: CommonOperatingSystemTypes;
  /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
  hyperVGeneration?: CommonHyperVGeneration;
  /** Purchase plan information for the the image from which the OS disk was created. E.g. - {name: 2019-Datacenter, publisher: MicrosoftWindowsServer, product: WindowsServer} */
  purchasePlan?: ComputeDiskDiskPurchasePlan;
  /** List of supported capabilities for the image from which the OS disk was created. */
  supportedCapabilities?: ComputeDiskSupportedCapabilities;
  /** Disk source information. CreationData information cannot be changed after the disk has been created. */
  creationData?: ComputeDiskCreationData;
  /** If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. */
  diskSizeGB?: number;
  /** The size of the disk in bytes. This field is read only. */
  readonly diskSizeBytes?: number;
  /** Unique Guid identifying the resource. */
  readonly uniqueId?: string;
  /** Encryption settings collection used for Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot. */
  encryptionSettingsCollection?: ComputeDiskEncryptionSettingsCollection;
  /** The disk provisioning state. */
  readonly provisioningState?: string;
  /** The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. */
  diskIopsReadWrite?: number;
  /** The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
  diskMBpsReadWrite?: number;
  /** The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes. */
  diskIopsReadOnly?: number;
  /** The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
  diskMBpsReadOnly?: number;
  /** The state of the disk. */
  readonly diskState?: ComputeDiskDiskState;
  /** Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys. */
  encryption?: ComputeDiskEncryption;
  /** The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time. */
  maxShares?: number;
  /** Details of the list of all VMs that have the disk attached. maxShares should be set to a value greater than one for disks to allow attaching them to multiple VMs. */
  readonly shareInfo?: ComputeDiskShareInfoElement[];
  /** Policy for accessing the disk via network. */
  networkAccessPolicy?: ComputeDiskNetworkAccessPolicy;
  /** ARM id of the DiskAccess resource for using private endpoints on disks. */
  diskAccessId?: string;
  /** Latest time when bursting was last enabled on a disk. */
  readonly burstingEnabledTime?: Date;
  /** Performance tier of the disk (e.g, P4, S10) as described here: https://azure.microsoft.com/en-us/pricing/details/managed-disks/. Does not apply to Ultra disks. */
  tier?: string;
  /** Set to true to enable bursting beyond the provisioned performance target of the disk. Bursting is disabled by default. Does not apply to Ultra disks. */
  burstingEnabled?: boolean;
  /** Properties of the disk for which update is pending. */
  readonly propertyUpdatesInProgress?: ComputeDiskPropertyUpdatesInProgress;
  /** Indicates the OS on a disk supports hibernation. */
  supportsHibernation?: boolean;
  /** Contains the security related information for the resource. */
  securityProfile?: ComputeDiskDiskSecurityProfile;
  /** Percentage complete for the background copy when a resource is created via the CopyStart operation. */
  completionPercent?: number;
  /** Policy for controlling export on the disk. */
  publicNetworkAccess?: ComputeDiskPublicNetworkAccess;
  /** Additional authentication requirements when exporting or uploading to a disk or snapshot. */
  dataAccessAuthMode?: ComputeDiskDataAccessAuthMode;
  /** Setting this property to true improves reliability and performance of data disks that are frequently (more than 5 times a day) by detached from one virtual machine and attached to another. This property should not be set for disks that are not detached and attached frequently as it causes the disks to not align with the fault domain of the virtual machine. */
  optimizedForFrequentAttach?: boolean;
  /** The UTC time when the ownership state of the disk was last changed i.e., the time the disk was last attached or detached from a VM or the time when the VM to which the disk was attached was deallocated or started. */
  readonly lastOwnershipUpdateTime?: Date;
  /** Determines how platform treats disk failures */
  availabilityPolicy?: ComputeDiskAvailabilityPolicy;
}

export function computeDiskDiskSerializer(item: ComputeDiskDisk): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, [
      "osType",
      "hyperVGeneration",
      "purchasePlan",
      "supportedCapabilities",
      "creationData",
      "diskSizeGB",
      "encryptionSettingsCollection",
      "diskIOPSReadWrite",
      "diskMBpsReadWrite",
      "diskIOPSReadOnly",
      "diskMBpsReadOnly",
      "encryption",
      "maxShares",
      "networkAccessPolicy",
      "diskAccessId",
      "tier",
      "burstingEnabled",
      "supportsHibernation",
      "securityProfile",
      "completionPercent",
      "publicNetworkAccess",
      "dataAccessAuthMode",
      "optimizedForFrequentAttach",
      "availabilityPolicy",
    ])
      ? undefined
      : _diskPropertiesSerializer(item),
    sku: !item["sku"] ? item["sku"] : computeDiskDiskSkuSerializer(item["sku"]),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
    extendedLocation: !item["extendedLocation"]
      ? item["extendedLocation"]
      : commonExtendedLocationSerializer(item["extendedLocation"]),
  };
}

export function computeDiskDiskDeserializer(item: any): ComputeDiskDisk {
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
    ...(!item["properties"] ? item["properties"] : _diskPropertiesDeserializer(item["properties"])),
    managedBy: item["managedBy"],
    managedByExtended: !item["managedByExtended"]
      ? item["managedByExtended"]
      : item["managedByExtended"].map((p: any) => {
          return p;
        }),
    sku: !item["sku"] ? item["sku"] : computeDiskDiskSkuDeserializer(item["sku"]),
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
    extendedLocation: !item["extendedLocation"]
      ? item["extendedLocation"]
      : commonExtendedLocationDeserializer(item["extendedLocation"]),
  };
}

/** Disk resource properties. */
export interface ComputeDiskDiskProperties {
  /** The time when the disk was created. */
  readonly timeCreated?: Date;
  /** The Operating System type. */
  osType?: CommonOperatingSystemTypes;
  /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
  hyperVGeneration?: CommonHyperVGeneration;
  /** Purchase plan information for the the image from which the OS disk was created. E.g. - {name: 2019-Datacenter, publisher: MicrosoftWindowsServer, product: WindowsServer} */
  purchasePlan?: ComputeDiskDiskPurchasePlan;
  /** List of supported capabilities for the image from which the OS disk was created. */
  supportedCapabilities?: ComputeDiskSupportedCapabilities;
  /** Disk source information. CreationData information cannot be changed after the disk has been created. */
  creationData: ComputeDiskCreationData;
  /** If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. */
  diskSizeGB?: number;
  /** The size of the disk in bytes. This field is read only. */
  readonly diskSizeBytes?: number;
  /** Unique Guid identifying the resource. */
  readonly uniqueId?: string;
  /** Encryption settings collection used for Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot. */
  encryptionSettingsCollection?: ComputeDiskEncryptionSettingsCollection;
  /** The disk provisioning state. */
  readonly provisioningState?: string;
  /** The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. */
  diskIopsReadWrite?: number;
  /** The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
  diskMBpsReadWrite?: number;
  /** The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes. */
  diskIopsReadOnly?: number;
  /** The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
  diskMBpsReadOnly?: number;
  /** The state of the disk. */
  readonly diskState?: ComputeDiskDiskState;
  /** Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys. */
  encryption?: ComputeDiskEncryption;
  /** The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time. */
  maxShares?: number;
  /** Details of the list of all VMs that have the disk attached. maxShares should be set to a value greater than one for disks to allow attaching them to multiple VMs. */
  readonly shareInfo?: ComputeDiskShareInfoElement[];
  /** Policy for accessing the disk via network. */
  networkAccessPolicy?: ComputeDiskNetworkAccessPolicy;
  /** ARM id of the DiskAccess resource for using private endpoints on disks. */
  diskAccessId?: string;
  /** Latest time when bursting was last enabled on a disk. */
  readonly burstingEnabledTime?: Date;
  /** Performance tier of the disk (e.g, P4, S10) as described here: https://azure.microsoft.com/en-us/pricing/details/managed-disks/. Does not apply to Ultra disks. */
  tier?: string;
  /** Set to true to enable bursting beyond the provisioned performance target of the disk. Bursting is disabled by default. Does not apply to Ultra disks. */
  burstingEnabled?: boolean;
  /** Properties of the disk for which update is pending. */
  readonly propertyUpdatesInProgress?: ComputeDiskPropertyUpdatesInProgress;
  /** Indicates the OS on a disk supports hibernation. */
  supportsHibernation?: boolean;
  /** Contains the security related information for the resource. */
  securityProfile?: ComputeDiskDiskSecurityProfile;
  /** Percentage complete for the background copy when a resource is created via the CopyStart operation. */
  completionPercent?: number;
  /** Policy for controlling export on the disk. */
  publicNetworkAccess?: ComputeDiskPublicNetworkAccess;
  /** Additional authentication requirements when exporting or uploading to a disk or snapshot. */
  dataAccessAuthMode?: ComputeDiskDataAccessAuthMode;
  /** Setting this property to true improves reliability and performance of data disks that are frequently (more than 5 times a day) by detached from one virtual machine and attached to another. This property should not be set for disks that are not detached and attached frequently as it causes the disks to not align with the fault domain of the virtual machine. */
  optimizedForFrequentAttach?: boolean;
  /** The UTC time when the ownership state of the disk was last changed i.e., the time the disk was last attached or detached from a VM or the time when the VM to which the disk was attached was deallocated or started. */
  readonly lastOwnershipUpdateTime?: Date;
  /** Determines how platform treats disk failures */
  availabilityPolicy?: ComputeDiskAvailabilityPolicy;
}

export function computeDiskDiskPropertiesSerializer(item: ComputeDiskDiskProperties): any {
  return {
    osType: item["osType"],
    hyperVGeneration: item["hyperVGeneration"],
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeDiskDiskPurchasePlanSerializer(item["purchasePlan"]),
    supportedCapabilities: !item["supportedCapabilities"]
      ? item["supportedCapabilities"]
      : computeDiskSupportedCapabilitiesSerializer(item["supportedCapabilities"]),
    creationData: computeDiskCreationDataSerializer(item["creationData"]),
    diskSizeGB: item["diskSizeGB"],
    encryptionSettingsCollection: !item["encryptionSettingsCollection"]
      ? item["encryptionSettingsCollection"]
      : computeDiskEncryptionSettingsCollectionSerializer(item["encryptionSettingsCollection"]),
    diskIOPSReadWrite: item["diskIopsReadWrite"],
    diskMBpsReadWrite: item["diskMBpsReadWrite"],
    diskIOPSReadOnly: item["diskIopsReadOnly"],
    diskMBpsReadOnly: item["diskMBpsReadOnly"],
    encryption: !item["encryption"]
      ? item["encryption"]
      : computeDiskEncryptionSerializer(item["encryption"]),
    maxShares: item["maxShares"],
    networkAccessPolicy: item["networkAccessPolicy"],
    diskAccessId: item["diskAccessId"],
    tier: item["tier"],
    burstingEnabled: item["burstingEnabled"],
    supportsHibernation: item["supportsHibernation"],
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeDiskDiskSecurityProfileSerializer(item["securityProfile"]),
    completionPercent: item["completionPercent"],
    publicNetworkAccess: item["publicNetworkAccess"],
    dataAccessAuthMode: item["dataAccessAuthMode"],
    optimizedForFrequentAttach: item["optimizedForFrequentAttach"],
    availabilityPolicy: !item["availabilityPolicy"]
      ? item["availabilityPolicy"]
      : computeDiskAvailabilityPolicySerializer(item["availabilityPolicy"]),
  };
}

export function computeDiskDiskPropertiesDeserializer(item: any): ComputeDiskDiskProperties {
  return {
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
    osType: item["osType"],
    hyperVGeneration: item["hyperVGeneration"],
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeDiskDiskPurchasePlanDeserializer(item["purchasePlan"]),
    supportedCapabilities: !item["supportedCapabilities"]
      ? item["supportedCapabilities"]
      : computeDiskSupportedCapabilitiesDeserializer(item["supportedCapabilities"]),
    creationData: computeDiskCreationDataDeserializer(item["creationData"]),
    diskSizeGB: item["diskSizeGB"],
    diskSizeBytes: item["diskSizeBytes"],
    uniqueId: item["uniqueId"],
    encryptionSettingsCollection: !item["encryptionSettingsCollection"]
      ? item["encryptionSettingsCollection"]
      : computeDiskEncryptionSettingsCollectionDeserializer(item["encryptionSettingsCollection"]),
    provisioningState: item["provisioningState"],
    diskIopsReadWrite: item["diskIOPSReadWrite"],
    diskMBpsReadWrite: item["diskMBpsReadWrite"],
    diskIopsReadOnly: item["diskIOPSReadOnly"],
    diskMBpsReadOnly: item["diskMBpsReadOnly"],
    diskState: item["diskState"],
    encryption: !item["encryption"]
      ? item["encryption"]
      : computeDiskEncryptionDeserializer(item["encryption"]),
    maxShares: item["maxShares"],
    shareInfo: !item["shareInfo"]
      ? item["shareInfo"]
      : computeDiskShareInfoElementArrayDeserializer(item["shareInfo"]),
    networkAccessPolicy: item["networkAccessPolicy"],
    diskAccessId: item["diskAccessId"],
    burstingEnabledTime: !item["burstingEnabledTime"]
      ? item["burstingEnabledTime"]
      : new Date(item["burstingEnabledTime"]),
    tier: item["tier"],
    burstingEnabled: item["burstingEnabled"],
    propertyUpdatesInProgress: !item["propertyUpdatesInProgress"]
      ? item["propertyUpdatesInProgress"]
      : computeDiskPropertyUpdatesInProgressDeserializer(item["propertyUpdatesInProgress"]),
    supportsHibernation: item["supportsHibernation"],
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeDiskDiskSecurityProfileDeserializer(item["securityProfile"]),
    completionPercent: item["completionPercent"],
    publicNetworkAccess: item["publicNetworkAccess"],
    dataAccessAuthMode: item["dataAccessAuthMode"],
    optimizedForFrequentAttach: item["optimizedForFrequentAttach"],
    lastOwnershipUpdateTime: !item["LastOwnershipUpdateTime"]
      ? item["LastOwnershipUpdateTime"]
      : new Date(item["LastOwnershipUpdateTime"]),
    availabilityPolicy: !item["availabilityPolicy"]
      ? item["availabilityPolicy"]
      : computeDiskAvailabilityPolicyDeserializer(item["availabilityPolicy"]),
  };
}

/** Used for establishing the purchase context of any 3rd Party artifact through MarketPlace. */
export interface ComputeDiskDiskPurchasePlan {
  /** The plan ID. */
  name: string;
  /** The publisher ID. */
  publisher: string;
  /** Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element. */
  product: string;
  /** The Offer Promotion Code. */
  promotionCode?: string;
}

export function computeDiskDiskPurchasePlanSerializer(item: ComputeDiskDiskPurchasePlan): any {
  return {
    name: item["name"],
    publisher: item["publisher"],
    product: item["product"],
    promotionCode: item["promotionCode"],
  };
}

export function computeDiskDiskPurchasePlanDeserializer(item: any): ComputeDiskDiskPurchasePlan {
  return {
    name: item["name"],
    publisher: item["publisher"],
    product: item["product"],
    promotionCode: item["promotionCode"],
  };
}

/** List of supported capabilities persisted on the disk resource for VM use. */
export interface ComputeDiskSupportedCapabilities {
  /** The disk controllers that an OS disk supports. If set it can be SCSI or SCSI, NVME or NVME, SCSI. */
  diskControllerTypes?: string;
  /** True if the image from which the OS disk is created supports accelerated networking. */
  acceleratedNetwork?: boolean;
  /** CPU architecture supported by an OS disk. */
  architecture?: CommonArchitecture;
  /** Refers to the security capability of the disk supported to create a Trusted launch or Confidential VM */
  supportedSecurityOption?: ComputeDiskSupportedSecurityOption;
}

export function computeDiskSupportedCapabilitiesSerializer(
  item: ComputeDiskSupportedCapabilities,
): any {
  return {
    diskControllerTypes: item["diskControllerTypes"],
    acceleratedNetwork: item["acceleratedNetwork"],
    architecture: item["architecture"],
    supportedSecurityOption: item["supportedSecurityOption"],
  };
}

export function computeDiskSupportedCapabilitiesDeserializer(
  item: any,
): ComputeDiskSupportedCapabilities {
  return {
    diskControllerTypes: item["diskControllerTypes"],
    acceleratedNetwork: item["acceleratedNetwork"],
    architecture: item["architecture"],
    supportedSecurityOption: item["supportedSecurityOption"],
  };
}

/** Refers to the security capability of the disk supported to create a Trusted launch or Confidential VM */
export enum KnownComputeDiskSupportedSecurityOption {
  /** The disk supports creating Trusted Launch VMs. */
  TrustedLaunchSupported = "TrustedLaunchSupported",
  /** The disk supports creating both Trusted Launch and Confidential VMs. */
  TrustedLaunchAndConfidentialVMSupported = "TrustedLaunchAndConfidentialVMSupported",
}

/**
 * Refers to the security capability of the disk supported to create a Trusted launch or Confidential VM \
 * {@link KnownComputeDiskSupportedSecurityOption} can be used interchangeably with ComputeDiskSupportedSecurityOption,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **TrustedLaunchSupported**: The disk supports creating Trusted Launch VMs. \
 * **TrustedLaunchAndConfidentialVMSupported**: The disk supports creating both Trusted Launch and Confidential VMs.
 */
export type ComputeDiskSupportedSecurityOption = string;

/** Data used when creating a disk. */
export interface ComputeDiskCreationData {
  /** This enumerates the possible sources of a disk's creation. */
  createOption: ComputeDiskDiskCreateOption;
  /** Required if createOption is Import. The Azure Resource Manager identifier of the storage account containing the blob to import as a disk. */
  storageAccountId?: string;
  /** Disk source information for PIR or user images. */
  imageReference?: ComputeDiskImageDiskReference;
  /** Required if creating from a Gallery Image. The id/sharedGalleryImageId/communityGalleryImageId of the ImageDiskReference will be the ARM id of the shared galley image version from which to create a disk. */
  galleryImageReference?: ComputeDiskImageDiskReference;
  /** If createOption is Import, this is the URI of a blob to be imported into a managed disk. */
  sourceUri?: string;
  /** If createOption is Copy, this is the ARM id of the source snapshot or disk. */
  sourceResourceId?: string;
  /** If this field is set, this is the unique id identifying the source of this resource. */
  readonly sourceUniqueId?: string;
  /** If createOption is Upload, this is the size of the contents of the upload including the VHD footer. This value should be between 20972032 (20 MiB + 512 bytes for the VHD footer) and 35183298347520 bytes (32 TiB + 512 bytes for the VHD footer). */
  uploadSizeBytes?: number;
  /** Logical sector size in bytes for Ultra disks. Supported values are 512 ad 4096. 4096 is the default. */
  logicalSectorSize?: number;
  /** If createOption is ImportSecure, this is the URI of a blob to be imported into VM guest state. */
  securityDataUri?: string;
  /** If createOption is ImportSecure, this is the URI of a blob to be imported into VM metadata for Confidential VM. */
  securityMetadataUri?: string;
  /** Set this flag to true to get a boost on the performance target of the disk deployed, see here on the respective performance target. This flag can only be set on disk creation time and cannot be disabled after enabled. */
  performancePlus?: boolean;
  /** Required if createOption is CopyFromSanSnapshot. This is the ARM id of the source elastic san volume snapshot. */
  elasticSanResourceId?: string;
  /** If this field is set on a snapshot and createOption is CopyStart, the snapshot will be copied at a quicker speed. */
  provisionedBandwidthCopySpeed?: ComputeDiskProvisionedBandwidthCopyOption;
  /** For snapshots created from Premium SSD v2 or Ultra disk, this property determines the time in minutes the snapshot is retained for instant access to enable faster restore. */
  instantAccessDurationMinutes?: number;
}

export function computeDiskCreationDataSerializer(item: ComputeDiskCreationData): any {
  return {
    createOption: item["createOption"],
    storageAccountId: item["storageAccountId"],
    imageReference: !item["imageReference"]
      ? item["imageReference"]
      : computeDiskImageDiskReferenceSerializer(item["imageReference"]),
    galleryImageReference: !item["galleryImageReference"]
      ? item["galleryImageReference"]
      : computeDiskImageDiskReferenceSerializer(item["galleryImageReference"]),
    sourceUri: item["sourceUri"],
    sourceResourceId: item["sourceResourceId"],
    uploadSizeBytes: item["uploadSizeBytes"],
    logicalSectorSize: item["logicalSectorSize"],
    securityDataUri: item["securityDataUri"],
    securityMetadataUri: item["securityMetadataUri"],
    performancePlus: item["performancePlus"],
    elasticSanResourceId: item["elasticSanResourceId"],
    provisionedBandwidthCopySpeed: item["provisionedBandwidthCopySpeed"],
    instantAccessDurationMinutes: item["instantAccessDurationMinutes"],
  };
}

export function computeDiskCreationDataDeserializer(item: any): ComputeDiskCreationData {
  return {
    createOption: item["createOption"],
    storageAccountId: item["storageAccountId"],
    imageReference: !item["imageReference"]
      ? item["imageReference"]
      : computeDiskImageDiskReferenceDeserializer(item["imageReference"]),
    galleryImageReference: !item["galleryImageReference"]
      ? item["galleryImageReference"]
      : computeDiskImageDiskReferenceDeserializer(item["galleryImageReference"]),
    sourceUri: item["sourceUri"],
    sourceResourceId: item["sourceResourceId"],
    sourceUniqueId: item["sourceUniqueId"],
    uploadSizeBytes: item["uploadSizeBytes"],
    logicalSectorSize: item["logicalSectorSize"],
    securityDataUri: item["securityDataUri"],
    securityMetadataUri: item["securityMetadataUri"],
    performancePlus: item["performancePlus"],
    elasticSanResourceId: item["elasticSanResourceId"],
    provisionedBandwidthCopySpeed: item["provisionedBandwidthCopySpeed"],
    instantAccessDurationMinutes: item["instantAccessDurationMinutes"],
  };
}

/** This enumerates the possible sources of a disk's creation. */
export enum KnownComputeDiskDiskCreateOption {
  /** Create an empty data disk of a size given by diskSizeGB. */
  Empty = "Empty",
  /** Disk will be attached to a VM. */
  Attach = "Attach",
  /** Create a new disk from a platform image specified by the given imageReference or galleryImageReference. */
  FromImage = "FromImage",
  /** Create a disk by importing from a blob specified by a sourceUri in a storage account specified by storageAccountId. */
  Import = "Import",
  /** Create a new disk or snapshot by copying from a disk or snapshot specified by the given sourceResourceId. */
  Copy = "Copy",
  /** Create a new disk by copying from a backup recovery point. */
  Restore = "Restore",
  /** Create a new disk by obtaining a write token and using it to directly upload the contents of the disk. */
  Upload = "Upload",
  /** Create a new disk by using a deep copy process, where the resource creation is considered complete only after all data has been copied from the source. */
  CopyStart = "CopyStart",
  /** Similar to Import create option. Create a new Trusted Launch VM or Confidential VM supported disk by importing additional blobs for VM guest state specified by securityDataUri and VM metadata specified by securityMetadataUri in storage account specified by storageAccountId. The VM metadata is optional and only required for certain Confidential VM configurations and not required for Trusted Launch VM. */
  ImportSecure = "ImportSecure",
  /** Similar to Upload create option. Create a new Trusted Launch VM or Confidential VM supported disk and upload using write token in disk, VM guest state and VM metadata. The VM metadata is optional and only required for certain Confidential VM configurations and not required for Trusted Launch VM. */
  UploadPreparedSecure = "UploadPreparedSecure",
  /** Create a new disk by exporting from elastic san volume snapshot */
  CopyFromSanSnapshot = "CopyFromSanSnapshot",
}

/**
 * This enumerates the possible sources of a disk's creation. \
 * {@link KnownComputeDiskDiskCreateOption} can be used interchangeably with ComputeDiskDiskCreateOption,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Empty**: Create an empty data disk of a size given by diskSizeGB. \
 * **Attach**: Disk will be attached to a VM. \
 * **FromImage**: Create a new disk from a platform image specified by the given imageReference or galleryImageReference. \
 * **Import**: Create a disk by importing from a blob specified by a sourceUri in a storage account specified by storageAccountId. \
 * **Copy**: Create a new disk or snapshot by copying from a disk or snapshot specified by the given sourceResourceId. \
 * **Restore**: Create a new disk by copying from a backup recovery point. \
 * **Upload**: Create a new disk by obtaining a write token and using it to directly upload the contents of the disk. \
 * **CopyStart**: Create a new disk by using a deep copy process, where the resource creation is considered complete only after all data has been copied from the source. \
 * **ImportSecure**: Similar to Import create option. Create a new Trusted Launch VM or Confidential VM supported disk by importing additional blobs for VM guest state specified by securityDataUri and VM metadata specified by securityMetadataUri in storage account specified by storageAccountId. The VM metadata is optional and only required for certain Confidential VM configurations and not required for Trusted Launch VM. \
 * **UploadPreparedSecure**: Similar to Upload create option. Create a new Trusted Launch VM or Confidential VM supported disk and upload using write token in disk, VM guest state and VM metadata. The VM metadata is optional and only required for certain Confidential VM configurations and not required for Trusted Launch VM. \
 * **CopyFromSanSnapshot**: Create a new disk by exporting from elastic san volume snapshot
 */
export type ComputeDiskDiskCreateOption = string;

/** The source image used for creating the disk. */
export interface ComputeDiskImageDiskReference {
  /** A relative uri containing either a Platform Image Repository, user image, or Azure Compute Gallery image reference. */
  id?: string;
  /** A relative uri containing a direct shared Azure Compute Gallery image reference. */
  sharedGalleryImageId?: string;
  /** A relative uri containing a community Azure Compute Gallery image reference. */
  communityGalleryImageId?: string;
  /** If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null. */
  lun?: number;
}

export function computeDiskImageDiskReferenceSerializer(item: ComputeDiskImageDiskReference): any {
  return {
    id: item["id"],
    sharedGalleryImageId: item["sharedGalleryImageId"],
    communityGalleryImageId: item["communityGalleryImageId"],
    lun: item["lun"],
  };
}

export function computeDiskImageDiskReferenceDeserializer(
  item: any,
): ComputeDiskImageDiskReference {
  return {
    id: item["id"],
    sharedGalleryImageId: item["sharedGalleryImageId"],
    communityGalleryImageId: item["communityGalleryImageId"],
    lun: item["lun"],
  };
}

/** If this field is set on a snapshot and createOption is CopyStart, the snapshot will be copied at a quicker speed. */
export enum KnownComputeDiskProvisionedBandwidthCopyOption {
  /** None */
  None = "None",
  /** Enhanced */
  Enhanced = "Enhanced",
}

/**
 * If this field is set on a snapshot and createOption is CopyStart, the snapshot will be copied at a quicker speed. \
 * {@link KnownComputeDiskProvisionedBandwidthCopyOption} can be used interchangeably with ComputeDiskProvisionedBandwidthCopyOption,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Enhanced**
 */
export type ComputeDiskProvisionedBandwidthCopyOption = string;

/** Encryption settings for disk or snapshot */
export interface ComputeDiskEncryptionSettingsCollection {
  /** Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged. */
  enabled: boolean;
  /** A collection of encryption settings, one for each disk volume. */
  encryptionSettings?: ComputeDiskEncryptionSettingsElement[];
  /** Describes what type of encryption is used for the disks. Once this field is set, it cannot be overwritten. '1.0' corresponds to Azure Disk Encryption with AAD app.'1.1' corresponds to Azure Disk Encryption. */
  encryptionSettingsVersion?: string;
}

export function computeDiskEncryptionSettingsCollectionSerializer(
  item: ComputeDiskEncryptionSettingsCollection,
): any {
  return {
    enabled: item["enabled"],
    encryptionSettings: !item["encryptionSettings"]
      ? item["encryptionSettings"]
      : computeDiskEncryptionSettingsElementArraySerializer(item["encryptionSettings"]),
    encryptionSettingsVersion: item["encryptionSettingsVersion"],
  };
}

export function computeDiskEncryptionSettingsCollectionDeserializer(
  item: any,
): ComputeDiskEncryptionSettingsCollection {
  return {
    enabled: item["enabled"],
    encryptionSettings: !item["encryptionSettings"]
      ? item["encryptionSettings"]
      : computeDiskEncryptionSettingsElementArrayDeserializer(item["encryptionSettings"]),
    encryptionSettingsVersion: item["encryptionSettingsVersion"],
  };
}

export function computeDiskEncryptionSettingsElementArraySerializer(
  result: Array<ComputeDiskEncryptionSettingsElement>,
): any[] {
  return result.map((item) => {
    return computeDiskEncryptionSettingsElementSerializer(item);
  });
}

export function computeDiskEncryptionSettingsElementArrayDeserializer(
  result: Array<ComputeDiskEncryptionSettingsElement>,
): any[] {
  return result.map((item) => {
    return computeDiskEncryptionSettingsElementDeserializer(item);
  });
}

/** Encryption settings for one disk volume. */
export interface ComputeDiskEncryptionSettingsElement {
  /** Key Vault Secret Url and vault id of the disk encryption key */
  diskEncryptionKey?: ComputeDiskKeyVaultAndSecretReference;
  /** Key Vault Key Url and vault id of the key encryption key. KeyEncryptionKey is optional and when provided is used to unwrap the disk encryption key. */
  keyEncryptionKey?: ComputeDiskKeyVaultAndKeyReference;
}

export function computeDiskEncryptionSettingsElementSerializer(
  item: ComputeDiskEncryptionSettingsElement,
): any {
  return {
    diskEncryptionKey: !item["diskEncryptionKey"]
      ? item["diskEncryptionKey"]
      : computeDiskKeyVaultAndSecretReferenceSerializer(item["diskEncryptionKey"]),
    keyEncryptionKey: !item["keyEncryptionKey"]
      ? item["keyEncryptionKey"]
      : computeDiskKeyVaultAndKeyReferenceSerializer(item["keyEncryptionKey"]),
  };
}

export function computeDiskEncryptionSettingsElementDeserializer(
  item: any,
): ComputeDiskEncryptionSettingsElement {
  return {
    diskEncryptionKey: !item["diskEncryptionKey"]
      ? item["diskEncryptionKey"]
      : computeDiskKeyVaultAndSecretReferenceDeserializer(item["diskEncryptionKey"]),
    keyEncryptionKey: !item["keyEncryptionKey"]
      ? item["keyEncryptionKey"]
      : computeDiskKeyVaultAndKeyReferenceDeserializer(item["keyEncryptionKey"]),
  };
}

/** Key Vault Secret Url and vault id of the encryption key */
export interface ComputeDiskKeyVaultAndSecretReference {
  /** Resource id of the KeyVault containing the key or secret */
  sourceVault: ComputeDiskSourceVault;
  /** Url pointing to a key or secret in KeyVault */
  secretUrl: string;
}

export function computeDiskKeyVaultAndSecretReferenceSerializer(
  item: ComputeDiskKeyVaultAndSecretReference,
): any {
  return {
    sourceVault: computeDiskSourceVaultSerializer(item["sourceVault"]),
    secretUrl: item["secretUrl"],
  };
}

export function computeDiskKeyVaultAndSecretReferenceDeserializer(
  item: any,
): ComputeDiskKeyVaultAndSecretReference {
  return {
    sourceVault: computeDiskSourceVaultDeserializer(item["sourceVault"]),
    secretUrl: item["secretUrl"],
  };
}

/** The vault id is an Azure Resource Manager Resource id in the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName} */
export interface ComputeDiskSourceVault {
  /** Resource Id */
  id?: string;
}

export function computeDiskSourceVaultSerializer(item: ComputeDiskSourceVault): any {
  return { id: item["id"] };
}

export function computeDiskSourceVaultDeserializer(item: any): ComputeDiskSourceVault {
  return {
    id: item["id"],
  };
}

/** Key Vault Key Url and vault id of KeK, KeK is optional and when provided is used to unwrap the encryptionKey */
export interface ComputeDiskKeyVaultAndKeyReference {
  /** Resource id of the KeyVault containing the key or secret */
  sourceVault: ComputeDiskSourceVault;
  /** Url pointing to a key or secret in KeyVault */
  keyUrl: string;
}

export function computeDiskKeyVaultAndKeyReferenceSerializer(
  item: ComputeDiskKeyVaultAndKeyReference,
): any {
  return {
    sourceVault: computeDiskSourceVaultSerializer(item["sourceVault"]),
    keyUrl: item["keyUrl"],
  };
}

export function computeDiskKeyVaultAndKeyReferenceDeserializer(
  item: any,
): ComputeDiskKeyVaultAndKeyReference {
  return {
    sourceVault: computeDiskSourceVaultDeserializer(item["sourceVault"]),
    keyUrl: item["keyUrl"],
  };
}

/** This enumerates the possible state of the disk. */
export enum KnownComputeDiskDiskState {
  /** The disk is not being used and can be attached to a VM. */
  Unattached = "Unattached",
  /** The disk is currently attached to a running VM. */
  Attached = "Attached",
  /** The disk is attached to a stopped-deallocated VM. */
  Reserved = "Reserved",
  /** The disk is attached to a VM which is in hibernated state. */
  Frozen = "Frozen",
  /** The disk currently has an Active SAS Uri associated with it. */
  ActiveSAS = "ActiveSAS",
  /** The disk is attached to a VM in hibernated state and has an active SAS URI associated with it. */
  ActiveSASFrozen = "ActiveSASFrozen",
  /** A disk is ready to be created by upload by requesting a write token. */
  ReadyToUpload = "ReadyToUpload",
  /** A disk is created for upload and a write token has been issued for uploading to it. */
  ActiveUpload = "ActiveUpload",
}

/**
 * This enumerates the possible state of the disk. \
 * {@link KnownComputeDiskDiskState} can be used interchangeably with ComputeDiskDiskState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unattached**: The disk is not being used and can be attached to a VM. \
 * **Attached**: The disk is currently attached to a running VM. \
 * **Reserved**: The disk is attached to a stopped-deallocated VM. \
 * **Frozen**: The disk is attached to a VM which is in hibernated state. \
 * **ActiveSAS**: The disk currently has an Active SAS Uri associated with it. \
 * **ActiveSASFrozen**: The disk is attached to a VM in hibernated state and has an active SAS URI associated with it. \
 * **ReadyToUpload**: A disk is ready to be created by upload by requesting a write token. \
 * **ActiveUpload**: A disk is created for upload and a write token has been issued for uploading to it.
 */
export type ComputeDiskDiskState = string;

/** Encryption at rest settings for disk or snapshot */
export interface ComputeDiskEncryption {
  /** ResourceId of the disk encryption set to use for enabling encryption at rest. */
  diskEncryptionSetId?: string;
  /** The type of key used to encrypt the data of the disk. */
  type?: ComputeDiskEncryptionType;
}

export function computeDiskEncryptionSerializer(item: ComputeDiskEncryption): any {
  return { diskEncryptionSetId: item["diskEncryptionSetId"], type: item["type"] };
}

export function computeDiskEncryptionDeserializer(item: any): ComputeDiskEncryption {
  return {
    diskEncryptionSetId: item["diskEncryptionSetId"],
    type: item["type"],
  };
}

/** The type of key used to encrypt the data of the disk. */
export enum KnownComputeDiskEncryptionType {
  /** Disk is encrypted at rest with Platform managed key. It is the default encryption type. This is not a valid encryption type for disk encryption sets. */
  EncryptionAtRestWithPlatformKey = "EncryptionAtRestWithPlatformKey",
  /** Disk is encrypted at rest with Customer managed key that can be changed and revoked by a customer. */
  EncryptionAtRestWithCustomerKey = "EncryptionAtRestWithCustomerKey",
  /** Disk is encrypted at rest with 2 layers of encryption. One of the keys is Customer managed and the other key is Platform managed. */
  EncryptionAtRestWithPlatformAndCustomerKeys = "EncryptionAtRestWithPlatformAndCustomerKeys",
}

/**
 * The type of key used to encrypt the data of the disk. \
 * {@link KnownComputeDiskEncryptionType} can be used interchangeably with ComputeDiskEncryptionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **EncryptionAtRestWithPlatformKey**: Disk is encrypted at rest with Platform managed key. It is the default encryption type. This is not a valid encryption type for disk encryption sets. \
 * **EncryptionAtRestWithCustomerKey**: Disk is encrypted at rest with Customer managed key that can be changed and revoked by a customer. \
 * **EncryptionAtRestWithPlatformAndCustomerKeys**: Disk is encrypted at rest with 2 layers of encryption. One of the keys is Customer managed and the other key is Platform managed.
 */
export type ComputeDiskEncryptionType = string;

export function computeDiskShareInfoElementArrayDeserializer(
  result: Array<ComputeDiskShareInfoElement>,
): any[] {
  return result.map((item) => {
    return computeDiskShareInfoElementDeserializer(item);
  });
}

/** model interface ComputeDiskShareInfoElement */
export interface ComputeDiskShareInfoElement {
  /** A relative URI containing the ID of the VM that has the disk attached. */
  readonly vmUri?: string;
}

export function computeDiskShareInfoElementDeserializer(item: any): ComputeDiskShareInfoElement {
  return {
    vmUri: item["vmUri"],
  };
}

/** Policy for accessing the disk via network. */
export enum KnownComputeDiskNetworkAccessPolicy {
  /** The disk can be exported or uploaded to from any network. */
  AllowAll = "AllowAll",
  /** The disk can be exported or uploaded to using a DiskAccess resource's private endpoints. */
  AllowPrivate = "AllowPrivate",
  /** The disk cannot be exported. */
  DenyAll = "DenyAll",
}

/**
 * Policy for accessing the disk via network. \
 * {@link KnownComputeDiskNetworkAccessPolicy} can be used interchangeably with ComputeDiskNetworkAccessPolicy,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AllowAll**: The disk can be exported or uploaded to from any network. \
 * **AllowPrivate**: The disk can be exported or uploaded to using a DiskAccess resource's private endpoints. \
 * **DenyAll**: The disk cannot be exported.
 */
export type ComputeDiskNetworkAccessPolicy = string;

/** Properties of the disk for which update is pending. */
export interface ComputeDiskPropertyUpdatesInProgress {
  /** The target performance tier of the disk if a tier change operation is in progress. */
  targetTier?: string;
}

export function computeDiskPropertyUpdatesInProgressDeserializer(
  item: any,
): ComputeDiskPropertyUpdatesInProgress {
  return {
    targetTier: item["targetTier"],
  };
}

/** Contains the security related information for the resource. */
export interface ComputeDiskDiskSecurityProfile {
  /** Specifies the SecurityType of the VM. Applicable for OS disks only. */
  securityType?: ComputeDiskDiskSecurityTypes;
  /** ResourceId of the disk encryption set associated to Confidential VM supported disk encrypted with customer managed key */
  secureVMDiskEncryptionSetId?: string;
}

export function computeDiskDiskSecurityProfileSerializer(
  item: ComputeDiskDiskSecurityProfile,
): any {
  return {
    securityType: item["securityType"],
    secureVMDiskEncryptionSetId: item["secureVMDiskEncryptionSetId"],
  };
}

export function computeDiskDiskSecurityProfileDeserializer(
  item: any,
): ComputeDiskDiskSecurityProfile {
  return {
    securityType: item["securityType"],
    secureVMDiskEncryptionSetId: item["secureVMDiskEncryptionSetId"],
  };
}

/** Specifies the SecurityType of the VM. Applicable for OS disks only. */
export enum KnownComputeDiskDiskSecurityTypes {
  /** Trusted Launch provides security features such as secure boot and virtual Trusted Platform Module (vTPM) */
  TrustedLaunch = "TrustedLaunch",
  /** Indicates Confidential VM disk with only VM guest state encrypted */
  ConfidentialVMVMGuestStateOnlyEncryptedWithPlatformKey = "ConfidentialVM_VMGuestStateOnlyEncryptedWithPlatformKey",
  /** Indicates Confidential VM disk with both OS disk and VM guest state encrypted with a platform managed key */
  ConfidentialVMDiskEncryptedWithPlatformKey = "ConfidentialVM_DiskEncryptedWithPlatformKey",
  /** Indicates Confidential VM disk with both OS disk and VM guest state encrypted with a customer managed key */
  ConfidentialVMDiskEncryptedWithCustomerKey = "ConfidentialVM_DiskEncryptedWithCustomerKey",
  /** Indicates Confidential VM disk with a ephemeral vTPM. vTPM state is not persisted across VM reboots. */
  ConfidentialVMNonPersistedTPM = "ConfidentialVM_NonPersistedTPM",
}

/**
 * Specifies the SecurityType of the VM. Applicable for OS disks only. \
 * {@link KnownComputeDiskDiskSecurityTypes} can be used interchangeably with ComputeDiskDiskSecurityTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **TrustedLaunch**: Trusted Launch provides security features such as secure boot and virtual Trusted Platform Module (vTPM) \
 * **ConfidentialVM_VMGuestStateOnlyEncryptedWithPlatformKey**: Indicates Confidential VM disk with only VM guest state encrypted \
 * **ConfidentialVM_DiskEncryptedWithPlatformKey**: Indicates Confidential VM disk with both OS disk and VM guest state encrypted with a platform managed key \
 * **ConfidentialVM_DiskEncryptedWithCustomerKey**: Indicates Confidential VM disk with both OS disk and VM guest state encrypted with a customer managed key \
 * **ConfidentialVM_NonPersistedTPM**: Indicates Confidential VM disk with a ephemeral vTPM. vTPM state is not persisted across VM reboots.
 */
export type ComputeDiskDiskSecurityTypes = string;

/** Policy for controlling export on the disk. */
export enum KnownComputeDiskPublicNetworkAccess {
  /** You can generate a SAS URI to access the underlying data of the disk publicly on the internet when NetworkAccessPolicy is set to AllowAll. You can access the data via the SAS URI only from your trusted Azure VNET when NetworkAccessPolicy is set to AllowPrivate. */
  Enabled = "Enabled",
  /** You cannot access the underlying data of the disk publicly on the internet even when NetworkAccessPolicy is set to AllowAll. You can access the data via the SAS URI only from your trusted Azure VNET when NetworkAccessPolicy is set to AllowPrivate. */
  Disabled = "Disabled",
}

/**
 * Policy for controlling export on the disk. \
 * {@link KnownComputeDiskPublicNetworkAccess} can be used interchangeably with ComputeDiskPublicNetworkAccess,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled**: You can generate a SAS URI to access the underlying data of the disk publicly on the internet when NetworkAccessPolicy is set to AllowAll. You can access the data via the SAS URI only from your trusted Azure VNET when NetworkAccessPolicy is set to AllowPrivate. \
 * **Disabled**: You cannot access the underlying data of the disk publicly on the internet even when NetworkAccessPolicy is set to AllowAll. You can access the data via the SAS URI only from your trusted Azure VNET when NetworkAccessPolicy is set to AllowPrivate.
 */
export type ComputeDiskPublicNetworkAccess = string;

/** Additional authentication requirements when exporting or uploading to a disk or snapshot. */
export enum KnownComputeDiskDataAccessAuthMode {
  /** When export/upload URL is used, the system checks if the user has an identity in Azure Active Directory and has necessary permissions to export/upload the data. Please refer to aka.ms/DisksAzureADAuth. */
  AzureActiveDirectory = "AzureActiveDirectory",
  /** No additional authentication would be performed when accessing export/upload URL. */
  None = "None",
}

/**
 * Additional authentication requirements when exporting or uploading to a disk or snapshot. \
 * {@link KnownComputeDiskDataAccessAuthMode} can be used interchangeably with ComputeDiskDataAccessAuthMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AzureActiveDirectory**: When export\/upload URL is used, the system checks if the user has an identity in Azure Active Directory and has necessary permissions to export\/upload the data. Please refer to aka.ms\/DisksAzureADAuth. \
 * **None**: No additional authentication would be performed when accessing export\/upload URL.
 */
export type ComputeDiskDataAccessAuthMode = string;

/** In the case of an availability or connectivity issue with the data disk, specify the behavior of your VM */
export interface ComputeDiskAvailabilityPolicy {
  /** Determines on how to handle disks with slow I/O. */
  actionOnDiskDelay?: ComputeDiskAvailabilityPolicyDiskDelay;
}

export function computeDiskAvailabilityPolicySerializer(item: ComputeDiskAvailabilityPolicy): any {
  return { actionOnDiskDelay: item["actionOnDiskDelay"] };
}

export function computeDiskAvailabilityPolicyDeserializer(
  item: any,
): ComputeDiskAvailabilityPolicy {
  return {
    actionOnDiskDelay: item["actionOnDiskDelay"],
  };
}

/** Determines on how to handle disks with slow I/O. */
export enum KnownComputeDiskAvailabilityPolicyDiskDelay {
  /** Defaults to behavior without av policy specified, which is VM restart upon slow disk io. */
  None = "None",
  /** Upon a disk io failure or slow response, try detaching then reattaching the disk. */
  AutomaticReattach = "AutomaticReattach",
}

/**
 * Determines on how to handle disks with slow I/O. \
 * {@link KnownComputeDiskAvailabilityPolicyDiskDelay} can be used interchangeably with ComputeDiskAvailabilityPolicyDiskDelay,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None**: Defaults to behavior without av policy specified, which is VM restart upon slow disk io. \
 * **AutomaticReattach**: Upon a disk io failure or slow response, try detaching then reattaching the disk.
 */
export type ComputeDiskAvailabilityPolicyDiskDelay = string;

/** The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS, Premium_ZRS, StandardSSD_ZRS, or PremiumV2_LRS. */
export interface ComputeDiskDiskSku {
  /** The sku name. */
  name?: ComputeDiskDiskStorageAccountTypes;
  /** The sku tier. */
  readonly tier?: string;
}

export function computeDiskDiskSkuSerializer(item: ComputeDiskDiskSku): any {
  return { name: item["name"] };
}

export function computeDiskDiskSkuDeserializer(item: any): ComputeDiskDiskSku {
  return {
    name: item["name"],
    tier: item["tier"],
  };
}

/** The sku name. */
export enum KnownComputeDiskDiskStorageAccountTypes {
  /** Standard HDD locally redundant storage. Best for backup, non-critical, and infrequent access. */
  StandardLRS = "Standard_LRS",
  /** Premium SSD locally redundant storage. Best for production and performance sensitive workloads. */
  PremiumLRS = "Premium_LRS",
  /** Standard SSD locally redundant storage. Best for web servers, lightly used enterprise applications and dev/test. */
  StandardSSDLRS = "StandardSSD_LRS",
  /** Ultra SSD locally redundant storage. Best for IO-intensive workloads such as SAP HANA, top tier databases (for example, SQL, Oracle), and other transaction-heavy workloads. */
  UltraSSDLRS = "UltraSSD_LRS",
  /** Premium SSD zone redundant storage. Best for the production workloads that need storage resiliency against zone failures. */
  PremiumZRS = "Premium_ZRS",
  /** Standard SSD zone redundant storage. Best for web servers, lightly used enterprise applications and dev/test that need storage resiliency against zone failures. */
  StandardSSDZRS = "StandardSSD_ZRS",
  /** Premium SSD v2 locally redundant storage. Best for production and performance-sensitive workloads that consistently require low latency and high IOPS and throughput. */
  PremiumV2LRS = "PremiumV2_LRS",
}

/**
 * The sku name. \
 * {@link KnownComputeDiskDiskStorageAccountTypes} can be used interchangeably with ComputeDiskDiskStorageAccountTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard_LRS**: Standard HDD locally redundant storage. Best for backup, non-critical, and infrequent access. \
 * **Premium_LRS**: Premium SSD locally redundant storage. Best for production and performance sensitive workloads. \
 * **StandardSSD_LRS**: Standard SSD locally redundant storage. Best for web servers, lightly used enterprise applications and dev\/test. \
 * **UltraSSD_LRS**: Ultra SSD locally redundant storage. Best for IO-intensive workloads such as SAP HANA, top tier databases (for example, SQL, Oracle), and other transaction-heavy workloads. \
 * **Premium_ZRS**: Premium SSD zone redundant storage. Best for the production workloads that need storage resiliency against zone failures. \
 * **StandardSSD_ZRS**: Standard SSD zone redundant storage. Best for web servers, lightly used enterprise applications and dev\/test that need storage resiliency against zone failures. \
 * **PremiumV2_LRS**: Premium SSD v2 locally redundant storage. Best for production and performance-sensitive workloads that consistently require low latency and high IOPS and throughput.
 */
export type ComputeDiskDiskStorageAccountTypes = string;

/** Disk update resource. */
export interface ComputeDiskDiskUpdate {
  /** Resource tags */
  tags?: Record<string, string>;
  /** The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS, Premium_ZRS, StandardSSD_ZRS, or PremiumV2_LRS. */
  sku?: ComputeDiskDiskSku;
  /** the Operating System type. */
  osType?: CommonOperatingSystemTypes;
  /** If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. */
  diskSizeGB?: number;
  /** Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot. */
  encryptionSettingsCollection?: ComputeDiskEncryptionSettingsCollection;
  /** The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. */
  diskIopsReadWrite?: number;
  /** The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
  diskMBpsReadWrite?: number;
  /** The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes. */
  diskIopsReadOnly?: number;
  /** The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
  diskMBpsReadOnly?: number;
  /** The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time. */
  maxShares?: number;
  /** Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys. */
  encryption?: ComputeDiskEncryption;
  /** Policy for accessing the disk via network. */
  networkAccessPolicy?: ComputeDiskNetworkAccessPolicy;
  /** ARM id of the DiskAccess resource for using private endpoints on disks. */
  diskAccessId?: string;
  /** Performance tier of the disk (e.g, P4, S10) as described here: https://azure.microsoft.com/en-us/pricing/details/managed-disks/. Does not apply to Ultra disks. */
  tier?: string;
  /** Set to true to enable bursting beyond the provisioned performance target of the disk. Bursting is disabled by default. Does not apply to Ultra disks. */
  burstingEnabled?: boolean;
  /** Purchase plan information to be added on the OS disk */
  purchasePlan?: ComputeDiskDiskPurchasePlan;
  /** List of supported capabilities to be added on the OS disk. */
  supportedCapabilities?: ComputeDiskSupportedCapabilities;
  /** Properties of the disk for which update is pending. */
  readonly propertyUpdatesInProgress?: ComputeDiskPropertyUpdatesInProgress;
  /** Indicates the OS on a disk supports hibernation. */
  supportsHibernation?: boolean;
  /** Policy for controlling export on the disk. */
  publicNetworkAccess?: ComputeDiskPublicNetworkAccess;
  /** Additional authentication requirements when exporting or uploading to a disk or snapshot. */
  dataAccessAuthMode?: ComputeDiskDataAccessAuthMode;
  /** Setting this property to true improves reliability and performance of data disks that are frequently (more than 5 times a day) by detached from one virtual machine and attached to another. This property should not be set for disks that are not detached and attached frequently as it causes the disks to not align with the fault domain of the virtual machine. */
  optimizedForFrequentAttach?: boolean;
  /** Determines how platform treats disk failures */
  availabilityPolicy?: ComputeDiskAvailabilityPolicy;
}

export function computeDiskDiskUpdateSerializer(item: ComputeDiskDiskUpdate): any {
  return {
    properties: areAllPropsUndefined(item, [
      "osType",
      "diskSizeGB",
      "encryptionSettingsCollection",
      "diskIOPSReadWrite",
      "diskMBpsReadWrite",
      "diskIOPSReadOnly",
      "diskMBpsReadOnly",
      "maxShares",
      "encryption",
      "networkAccessPolicy",
      "diskAccessId",
      "tier",
      "burstingEnabled",
      "purchasePlan",
      "supportedCapabilities",
      "supportsHibernation",
      "publicNetworkAccess",
      "dataAccessAuthMode",
      "optimizedForFrequentAttach",
      "availabilityPolicy",
    ])
      ? undefined
      : _diskUpdatePropertiesSerializer(item),
    tags: item["tags"],
    sku: !item["sku"] ? item["sku"] : computeDiskDiskSkuSerializer(item["sku"]),
  };
}

/** Disk resource update properties. */
export interface ComputeDiskDiskUpdateProperties {
  /** the Operating System type. */
  osType?: CommonOperatingSystemTypes;
  /** If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. */
  diskSizeGB?: number;
  /** Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot. */
  encryptionSettingsCollection?: ComputeDiskEncryptionSettingsCollection;
  /** The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. */
  diskIopsReadWrite?: number;
  /** The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
  diskMBpsReadWrite?: number;
  /** The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes. */
  diskIopsReadOnly?: number;
  /** The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
  diskMBpsReadOnly?: number;
  /** The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time. */
  maxShares?: number;
  /** Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys. */
  encryption?: ComputeDiskEncryption;
  /** Policy for accessing the disk via network. */
  networkAccessPolicy?: ComputeDiskNetworkAccessPolicy;
  /** ARM id of the DiskAccess resource for using private endpoints on disks. */
  diskAccessId?: string;
  /** Performance tier of the disk (e.g, P4, S10) as described here: https://azure.microsoft.com/en-us/pricing/details/managed-disks/. Does not apply to Ultra disks. */
  tier?: string;
  /** Set to true to enable bursting beyond the provisioned performance target of the disk. Bursting is disabled by default. Does not apply to Ultra disks. */
  burstingEnabled?: boolean;
  /** Purchase plan information to be added on the OS disk */
  purchasePlan?: ComputeDiskDiskPurchasePlan;
  /** List of supported capabilities to be added on the OS disk. */
  supportedCapabilities?: ComputeDiskSupportedCapabilities;
  /** Properties of the disk for which update is pending. */
  readonly propertyUpdatesInProgress?: ComputeDiskPropertyUpdatesInProgress;
  /** Indicates the OS on a disk supports hibernation. */
  supportsHibernation?: boolean;
  /** Policy for controlling export on the disk. */
  publicNetworkAccess?: ComputeDiskPublicNetworkAccess;
  /** Additional authentication requirements when exporting or uploading to a disk or snapshot. */
  dataAccessAuthMode?: ComputeDiskDataAccessAuthMode;
  /** Setting this property to true improves reliability and performance of data disks that are frequently (more than 5 times a day) by detached from one virtual machine and attached to another. This property should not be set for disks that are not detached and attached frequently as it causes the disks to not align with the fault domain of the virtual machine. */
  optimizedForFrequentAttach?: boolean;
  /** Determines how platform treats disk failures */
  availabilityPolicy?: ComputeDiskAvailabilityPolicy;
}

export function computeDiskDiskUpdatePropertiesSerializer(
  item: ComputeDiskDiskUpdateProperties,
): any {
  return {
    osType: item["osType"],
    diskSizeGB: item["diskSizeGB"],
    encryptionSettingsCollection: !item["encryptionSettingsCollection"]
      ? item["encryptionSettingsCollection"]
      : computeDiskEncryptionSettingsCollectionSerializer(item["encryptionSettingsCollection"]),
    diskIOPSReadWrite: item["diskIopsReadWrite"],
    diskMBpsReadWrite: item["diskMBpsReadWrite"],
    diskIOPSReadOnly: item["diskIopsReadOnly"],
    diskMBpsReadOnly: item["diskMBpsReadOnly"],
    maxShares: item["maxShares"],
    encryption: !item["encryption"]
      ? item["encryption"]
      : computeDiskEncryptionSerializer(item["encryption"]),
    networkAccessPolicy: item["networkAccessPolicy"],
    diskAccessId: item["diskAccessId"],
    tier: item["tier"],
    burstingEnabled: item["burstingEnabled"],
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeDiskDiskPurchasePlanSerializer(item["purchasePlan"]),
    supportedCapabilities: !item["supportedCapabilities"]
      ? item["supportedCapabilities"]
      : computeDiskSupportedCapabilitiesSerializer(item["supportedCapabilities"]),
    supportsHibernation: item["supportsHibernation"],
    publicNetworkAccess: item["publicNetworkAccess"],
    dataAccessAuthMode: item["dataAccessAuthMode"],
    optimizedForFrequentAttach: item["optimizedForFrequentAttach"],
    availabilityPolicy: !item["availabilityPolicy"]
      ? item["availabilityPolicy"]
      : computeDiskAvailabilityPolicySerializer(item["availabilityPolicy"]),
  };
}

/** The List Disks operation response. */
export interface _ComputeDiskDiskList {
  /** The Disk items on this page */
  value: ComputeDiskDisk[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _computeDiskDiskListDeserializer(item: any): _ComputeDiskDiskList {
  return {
    value: computeDiskDiskArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeDiskDiskArraySerializer(result: Array<ComputeDiskDisk>): any[] {
  return result.map((item) => {
    return computeDiskDiskSerializer(item);
  });
}

export function computeDiskDiskArrayDeserializer(result: Array<ComputeDiskDisk>): any[] {
  return result.map((item) => {
    return computeDiskDiskDeserializer(item);
  });
}

/** Data used for requesting a SAS. */
export interface ComputeDiskGrantAccessData {
  /** The Access Level, accepted values include None, Read, Write. */
  access: ComputeDiskAccessLevel;
  /** Time duration in seconds until the SAS access expires. */
  durationInSeconds: number;
  /** Set this flag to true to get additional SAS for VM guest state */
  getSecureVMGuestStateSAS?: boolean;
  /** Used to specify the file format when making request for SAS on a VHDX file format snapshot */
  fileFormat?: ComputeDiskFileFormat;
}

export function computeDiskGrantAccessDataSerializer(item: ComputeDiskGrantAccessData): any {
  return {
    access: item["access"],
    durationInSeconds: item["durationInSeconds"],
    getSecureVMGuestStateSAS: item["getSecureVMGuestStateSAS"],
    fileFormat: item["fileFormat"],
  };
}

/** The Access Level, accepted values include None, Read, Write. */
export enum KnownComputeDiskAccessLevel {
  /** None */
  None = "None",
  /** Read */
  Read = "Read",
  /** Write */
  Write = "Write",
}

/**
 * The Access Level, accepted values include None, Read, Write. \
 * {@link KnownComputeDiskAccessLevel} can be used interchangeably with ComputeDiskAccessLevel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Read** \
 * **Write**
 */
export type ComputeDiskAccessLevel = string;

/** Used to specify the file format when making request for SAS on a VHDX file format snapshot */
export enum KnownComputeDiskFileFormat {
  /** A VHD file is a disk image file in the Virtual Hard Disk file format. */
  VHD = "VHD",
  /** A VHDX file is a disk image file in the Virtual Hard Disk v2 file format. */
  Vhdx = "VHDX",
}

/**
 * Used to specify the file format when making request for SAS on a VHDX file format snapshot \
 * {@link KnownComputeDiskFileFormat} can be used interchangeably with ComputeDiskFileFormat,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **VHD**: A VHD file is a disk image file in the Virtual Hard Disk file format. \
 * **VHDX**: A VHDX file is a disk image file in the Virtual Hard Disk v2 file format.
 */
export type ComputeDiskFileFormat = string;

/** A disk access SAS uri. */
export interface ComputeDiskAccessUri {
  /** A SAS uri for accessing a disk. */
  readonly accessSAS?: string;
  /** A SAS uri for accessing a VM guest state. */
  readonly securityDataAccessSAS?: string;
  /** A SAS uri for accessing a VM metadata. */
  readonly securityMetadataAccessSAS?: string;
}

export function computeDiskAccessUriDeserializer(item: any): ComputeDiskAccessUri {
  return {
    accessSAS: item["accessSAS"],
    securityDataAccessSAS: item["securityDataAccessSAS"],
    securityMetadataAccessSAS: item["securityMetadataAccessSAS"],
  };
}

/** disk access resource. */
export interface ComputeDiskDiskAccess extends TrackedResource {
  /** The extended location where the disk access will be created. Extended location cannot be changed. */
  extendedLocation?: CommonExtendedLocation;
  /** A readonly collection of private endpoint connections created on the disk. Currently only one endpoint connection is supported. */
  readonly privateEndpointConnections?: ComputeDiskPrivateEndpointConnection[];
  /** The disk access resource provisioning state. */
  readonly provisioningState?: string;
  /** The time when the disk access was created. */
  readonly timeCreated?: Date;
}

export function computeDiskDiskAccessSerializer(item: ComputeDiskDiskAccess): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, []) ? undefined : _diskAccessPropertiesSerializer(item),
    extendedLocation: !item["extendedLocation"]
      ? item["extendedLocation"]
      : commonExtendedLocationSerializer(item["extendedLocation"]),
  };
}

export function computeDiskDiskAccessDeserializer(item: any): ComputeDiskDiskAccess {
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
      : _diskAccessPropertiesDeserializer(item["properties"])),
    extendedLocation: !item["extendedLocation"]
      ? item["extendedLocation"]
      : commonExtendedLocationDeserializer(item["extendedLocation"]),
  };
}

/** model interface ComputeDiskDiskAccessProperties */
export interface ComputeDiskDiskAccessProperties {
  /** A readonly collection of private endpoint connections created on the disk. Currently only one endpoint connection is supported. */
  readonly privateEndpointConnections?: ComputeDiskPrivateEndpointConnection[];
  /** The disk access resource provisioning state. */
  readonly provisioningState?: string;
  /** The time when the disk access was created. */
  readonly timeCreated?: Date;
}

export function computeDiskDiskAccessPropertiesSerializer(
  item: ComputeDiskDiskAccessProperties,
): any {
  return item;
}

export function computeDiskDiskAccessPropertiesDeserializer(
  item: any,
): ComputeDiskDiskAccessProperties {
  return {
    privateEndpointConnections: !item["privateEndpointConnections"]
      ? item["privateEndpointConnections"]
      : computeDiskPrivateEndpointConnectionArrayDeserializer(item["privateEndpointConnections"]),
    provisioningState: item["provisioningState"],
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
  };
}

export function computeDiskPrivateEndpointConnectionArraySerializer(
  result: Array<ComputeDiskPrivateEndpointConnection>,
): any[] {
  return result.map((item) => {
    return computeDiskPrivateEndpointConnectionSerializer(item);
  });
}

export function computeDiskPrivateEndpointConnectionArrayDeserializer(
  result: Array<ComputeDiskPrivateEndpointConnection>,
): any[] {
  return result.map((item) => {
    return computeDiskPrivateEndpointConnectionDeserializer(item);
  });
}

/** The Private Endpoint Connection resource. */
export interface ComputeDiskPrivateEndpointConnection extends ProxyResource {
  /** The resource of private end point. */
  readonly privateEndpoint?: ComputeDiskPrivateEndpoint;
  /** A collection of information about the state of the connection between DiskAccess and Virtual Network. */
  privateLinkServiceConnectionState?: ComputeDiskPrivateLinkServiceConnectionState;
  /** The provisioning state of the private endpoint connection resource. */
  readonly provisioningState?: ComputeDiskPrivateEndpointConnectionProvisioningState;
}

export function computeDiskPrivateEndpointConnectionSerializer(
  item: ComputeDiskPrivateEndpointConnection,
): any {
  return {
    properties: areAllPropsUndefined(item, ["privateLinkServiceConnectionState"])
      ? undefined
      : _privateEndpointConnectionPropertiesSerializer(item),
  };
}

export function computeDiskPrivateEndpointConnectionDeserializer(
  item: any,
): ComputeDiskPrivateEndpointConnection {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    ...(!item["properties"]
      ? item["properties"]
      : _privateEndpointConnectionPropertiesDeserializer(item["properties"])),
  };
}

/** Properties of the PrivateEndpointConnectProperties. */
export interface ComputeDiskPrivateEndpointConnectionProperties {
  /** The resource of private end point. */
  readonly privateEndpoint?: ComputeDiskPrivateEndpoint;
  /** A collection of information about the state of the connection between DiskAccess and Virtual Network. */
  privateLinkServiceConnectionState: ComputeDiskPrivateLinkServiceConnectionState;
  /** The provisioning state of the private endpoint connection resource. */
  readonly provisioningState?: ComputeDiskPrivateEndpointConnectionProvisioningState;
}

export function computeDiskPrivateEndpointConnectionPropertiesSerializer(
  item: ComputeDiskPrivateEndpointConnectionProperties,
): any {
  return {
    privateLinkServiceConnectionState: computeDiskPrivateLinkServiceConnectionStateSerializer(
      item["privateLinkServiceConnectionState"],
    ),
  };
}

export function computeDiskPrivateEndpointConnectionPropertiesDeserializer(
  item: any,
): ComputeDiskPrivateEndpointConnectionProperties {
  return {
    privateEndpoint: !item["privateEndpoint"]
      ? item["privateEndpoint"]
      : computeDiskPrivateEndpointDeserializer(item["privateEndpoint"]),
    privateLinkServiceConnectionState: computeDiskPrivateLinkServiceConnectionStateDeserializer(
      item["privateLinkServiceConnectionState"],
    ),
    provisioningState: item["provisioningState"],
  };
}

/** The Private Endpoint resource. */
export interface ComputeDiskPrivateEndpoint {
  /** The ARM identifier for Private Endpoint */
  readonly id?: string;
}

export function computeDiskPrivateEndpointDeserializer(item: any): ComputeDiskPrivateEndpoint {
  return {
    id: item["id"],
  };
}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface ComputeDiskPrivateLinkServiceConnectionState {
  /** Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. */
  status?: ComputeDiskPrivateEndpointServiceConnectionStatus;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

export function computeDiskPrivateLinkServiceConnectionStateSerializer(
  item: ComputeDiskPrivateLinkServiceConnectionState,
): any {
  return {
    status: item["status"],
    description: item["description"],
    actionsRequired: item["actionsRequired"],
  };
}

export function computeDiskPrivateLinkServiceConnectionStateDeserializer(
  item: any,
): ComputeDiskPrivateLinkServiceConnectionState {
  return {
    status: item["status"],
    description: item["description"],
    actionsRequired: item["actionsRequired"],
  };
}

/** The private endpoint connection status. */
export enum KnownComputeDiskPrivateEndpointServiceConnectionStatus {
  /** Pending */
  Pending = "Pending",
  /** Approved */
  Approved = "Approved",
  /** Rejected */
  Rejected = "Rejected",
}

/**
 * The private endpoint connection status. \
 * {@link KnownComputeDiskPrivateEndpointServiceConnectionStatus} can be used interchangeably with ComputeDiskPrivateEndpointServiceConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending** \
 * **Approved** \
 * **Rejected**
 */
export type ComputeDiskPrivateEndpointServiceConnectionStatus = string;

/** The current provisioning state. */
export enum KnownComputeDiskPrivateEndpointConnectionProvisioningState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Creating */
  Creating = "Creating",
  /** Deleting */
  Deleting = "Deleting",
  /** Failed */
  Failed = "Failed",
}

/**
 * The current provisioning state. \
 * {@link KnownComputeDiskPrivateEndpointConnectionProvisioningState} can be used interchangeably with ComputeDiskPrivateEndpointConnectionProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Creating** \
 * **Deleting** \
 * **Failed**
 */
export type ComputeDiskPrivateEndpointConnectionProvisioningState = string;

/** Used for updating a disk access resource. */
export interface ComputeDiskDiskAccessUpdate {
  /** Resource tags */
  tags?: Record<string, string>;
}

export function computeDiskDiskAccessUpdateSerializer(item: ComputeDiskDiskAccessUpdate): any {
  return { tags: item["tags"] };
}

/** The List disk access operation response. */
export interface _ComputeDiskDiskAccessList {
  /** The DiskAccess items on this page */
  value: ComputeDiskDiskAccess[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _computeDiskDiskAccessListDeserializer(item: any): _ComputeDiskDiskAccessList {
  return {
    value: computeDiskDiskAccessArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeDiskDiskAccessArraySerializer(result: Array<ComputeDiskDiskAccess>): any[] {
  return result.map((item) => {
    return computeDiskDiskAccessSerializer(item);
  });
}

export function computeDiskDiskAccessArrayDeserializer(
  result: Array<ComputeDiskDiskAccess>,
): any[] {
  return result.map((item) => {
    return computeDiskDiskAccessDeserializer(item);
  });
}

/** A list of private link resources */
export interface ComputeDiskPrivateLinkResourceListResult {
  /** Array of private link resources */
  value?: ComputeDiskPrivateLinkResource[];
}

export function computeDiskPrivateLinkResourceListResultDeserializer(
  item: any,
): ComputeDiskPrivateLinkResourceListResult {
  return {
    value: !item["value"]
      ? item["value"]
      : computeDiskPrivateLinkResourceArrayDeserializer(item["value"]),
  };
}

export function computeDiskPrivateLinkResourceArrayDeserializer(
  result: Array<ComputeDiskPrivateLinkResource>,
): any[] {
  return result.map((item) => {
    return computeDiskPrivateLinkResourceDeserializer(item);
  });
}

/** A private link resource */
export interface ComputeDiskPrivateLinkResource {
  /** private link resource Id */
  readonly id?: string;
  /** private link resource name */
  readonly name?: string;
  /** private link resource type */
  readonly type?: string;
  /** The private link resource group id. */
  readonly groupId?: string;
  /** The private link resource required member names. */
  readonly requiredMembers?: string[];
  /** The private link resource DNS zone name. */
  requiredZoneNames?: string[];
}

export function computeDiskPrivateLinkResourceDeserializer(
  item: any,
): ComputeDiskPrivateLinkResource {
  return {
    ...(!item["properties"]
      ? item["properties"]
      : _privateLinkResourcePropertiesDeserializer(item["properties"])),
    id: item["id"],
    name: item["name"],
    type: item["type"],
  };
}

/** Properties of a private link resource. */
export interface ComputeDiskPrivateLinkResourceProperties {
  /** The private link resource group id. */
  readonly groupId?: string;
  /** The private link resource required member names. */
  readonly requiredMembers?: string[];
  /** The private link resource DNS zone name. */
  requiredZoneNames?: string[];
}

export function computeDiskPrivateLinkResourcePropertiesDeserializer(
  item: any,
): ComputeDiskPrivateLinkResourceProperties {
  return {
    groupId: item["groupId"],
    requiredMembers: !item["requiredMembers"]
      ? item["requiredMembers"]
      : item["requiredMembers"].map((p: any) => {
          return p;
        }),
    requiredZoneNames: !item["requiredZoneNames"]
      ? item["requiredZoneNames"]
      : item["requiredZoneNames"].map((p: any) => {
          return p;
        }),
  };
}

/** A list of private link resources */
export interface _ComputeDiskPrivateEndpointConnectionListResult {
  /** The PrivateEndpointConnection items on this page */
  value: ComputeDiskPrivateEndpointConnection[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _computeDiskPrivateEndpointConnectionListResultDeserializer(
  item: any,
): _ComputeDiskPrivateEndpointConnectionListResult {
  return {
    value: computeDiskPrivateEndpointConnectionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

/** disk encryption set resource. */
export interface ComputeDiskDiskEncryptionSet extends TrackedResource {
  /** The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks. */
  identity?: ComputeDiskEncryptionSetIdentity;
  /** The type of key used to encrypt the data of the disk. */
  encryptionType?: ComputeDiskDiskEncryptionSetType;
  /** The key vault key which is currently used by this disk encryption set. */
  activeKey?: ComputeDiskKeyForDiskEncryptionSet;
  /** A readonly collection of key vault keys previously used by this disk encryption set while a key rotation is in progress. It will be empty if there is no ongoing key rotation. */
  readonly previousKeys?: ComputeDiskKeyForDiskEncryptionSet[];
  /** The disk encryption set provisioning state. */
  readonly provisioningState?: string;
  /** Set this flag to true to enable auto-updating of this disk encryption set to the latest key version. */
  rotationToLatestKeyVersionEnabled?: boolean;
  /** The time when the active key of this disk encryption set was updated. */
  readonly lastKeyRotationTimestamp?: Date;
  /** The error that was encountered during auto-key rotation. If an error is present, then auto-key rotation will not be attempted until the error on this disk encryption set is fixed. */
  readonly autoKeyRotationError?: CommonApiError;
  /** Multi-tenant application client id to access key vault in a different tenant. Setting the value to 'None' will clear the property. */
  federatedClientId?: string;
}

export function computeDiskDiskEncryptionSetSerializer(item: ComputeDiskDiskEncryptionSet): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, [
      "encryptionType",
      "activeKey",
      "rotationToLatestKeyVersionEnabled",
      "federatedClientId",
    ])
      ? undefined
      : _diskEncryptionSetPropertiesSerializer(item),
    identity: !item["identity"]
      ? item["identity"]
      : computeDiskEncryptionSetIdentitySerializer(item["identity"]),
  };
}

export function computeDiskDiskEncryptionSetDeserializer(item: any): ComputeDiskDiskEncryptionSet {
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
      : _diskEncryptionSetPropertiesDeserializer(item["properties"])),
    identity: !item["identity"]
      ? item["identity"]
      : computeDiskEncryptionSetIdentityDeserializer(item["identity"]),
  };
}

/** model interface ComputeDiskEncryptionSetProperties */
export interface ComputeDiskEncryptionSetProperties {
  /** The type of key used to encrypt the data of the disk. */
  encryptionType?: ComputeDiskDiskEncryptionSetType;
  /** The key vault key which is currently used by this disk encryption set. */
  activeKey?: ComputeDiskKeyForDiskEncryptionSet;
  /** A readonly collection of key vault keys previously used by this disk encryption set while a key rotation is in progress. It will be empty if there is no ongoing key rotation. */
  readonly previousKeys?: ComputeDiskKeyForDiskEncryptionSet[];
  /** The disk encryption set provisioning state. */
  readonly provisioningState?: string;
  /** Set this flag to true to enable auto-updating of this disk encryption set to the latest key version. */
  rotationToLatestKeyVersionEnabled?: boolean;
  /** The time when the active key of this disk encryption set was updated. */
  readonly lastKeyRotationTimestamp?: Date;
  /** The error that was encountered during auto-key rotation. If an error is present, then auto-key rotation will not be attempted until the error on this disk encryption set is fixed. */
  readonly autoKeyRotationError?: CommonApiError;
  /** Multi-tenant application client id to access key vault in a different tenant. Setting the value to 'None' will clear the property. */
  federatedClientId?: string;
}

export function computeDiskEncryptionSetPropertiesSerializer(
  item: ComputeDiskEncryptionSetProperties,
): any {
  return {
    encryptionType: item["encryptionType"],
    activeKey: !item["activeKey"]
      ? item["activeKey"]
      : computeDiskKeyForDiskEncryptionSetSerializer(item["activeKey"]),
    rotationToLatestKeyVersionEnabled: item["rotationToLatestKeyVersionEnabled"],
    federatedClientId: item["federatedClientId"],
  };
}

export function computeDiskEncryptionSetPropertiesDeserializer(
  item: any,
): ComputeDiskEncryptionSetProperties {
  return {
    encryptionType: item["encryptionType"],
    activeKey: !item["activeKey"]
      ? item["activeKey"]
      : computeDiskKeyForDiskEncryptionSetDeserializer(item["activeKey"]),
    previousKeys: !item["previousKeys"]
      ? item["previousKeys"]
      : computeDiskKeyForDiskEncryptionSetArrayDeserializer(item["previousKeys"]),
    provisioningState: item["provisioningState"],
    rotationToLatestKeyVersionEnabled: item["rotationToLatestKeyVersionEnabled"],
    lastKeyRotationTimestamp: !item["lastKeyRotationTimestamp"]
      ? item["lastKeyRotationTimestamp"]
      : new Date(item["lastKeyRotationTimestamp"]),
    autoKeyRotationError: !item["autoKeyRotationError"]
      ? item["autoKeyRotationError"]
      : commonApiErrorDeserializer(item["autoKeyRotationError"]),
    federatedClientId: item["federatedClientId"],
  };
}

/** The type of key used to encrypt the data of the disk. */
export enum KnownComputeDiskDiskEncryptionSetType {
  /** Resource using diskEncryptionSet would be encrypted at rest with Customer managed key that can be changed and revoked by a customer. */
  EncryptionAtRestWithCustomerKey = "EncryptionAtRestWithCustomerKey",
  /** Resource using diskEncryptionSet would be encrypted at rest with two layers of encryption. One of the keys is Customer managed and the other key is Platform managed. */
  EncryptionAtRestWithPlatformAndCustomerKeys = "EncryptionAtRestWithPlatformAndCustomerKeys",
  /** Confidential VM supported disk and VM guest state would be encrypted with customer managed key. */
  ConfidentialVmEncryptedWithCustomerKey = "ConfidentialVmEncryptedWithCustomerKey",
}

/**
 * The type of key used to encrypt the data of the disk. \
 * {@link KnownComputeDiskDiskEncryptionSetType} can be used interchangeably with ComputeDiskDiskEncryptionSetType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **EncryptionAtRestWithCustomerKey**: Resource using diskEncryptionSet would be encrypted at rest with Customer managed key that can be changed and revoked by a customer. \
 * **EncryptionAtRestWithPlatformAndCustomerKeys**: Resource using diskEncryptionSet would be encrypted at rest with two layers of encryption. One of the keys is Customer managed and the other key is Platform managed. \
 * **ConfidentialVmEncryptedWithCustomerKey**: Confidential VM supported disk and VM guest state would be encrypted with customer managed key.
 */
export type ComputeDiskDiskEncryptionSetType = string;

/** Key Vault Key Url to be used for server side encryption of Managed Disks and Snapshots */
export interface ComputeDiskKeyForDiskEncryptionSet {
  /** Resource id of the KeyVault containing the key or secret. This property is optional and cannot be used if the KeyVault subscription is not the same as the Disk Encryption Set subscription. */
  sourceVault?: ComputeDiskSourceVault;
  /** Fully versioned Key Url pointing to a key in KeyVault. Version segment of the Url is required regardless of rotationToLatestKeyVersionEnabled value. */
  keyUrl: string;
}

export function computeDiskKeyForDiskEncryptionSetSerializer(
  item: ComputeDiskKeyForDiskEncryptionSet,
): any {
  return {
    sourceVault: !item["sourceVault"]
      ? item["sourceVault"]
      : computeDiskSourceVaultSerializer(item["sourceVault"]),
    keyUrl: item["keyUrl"],
  };
}

export function computeDiskKeyForDiskEncryptionSetDeserializer(
  item: any,
): ComputeDiskKeyForDiskEncryptionSet {
  return {
    sourceVault: !item["sourceVault"]
      ? item["sourceVault"]
      : computeDiskSourceVaultDeserializer(item["sourceVault"]),
    keyUrl: item["keyUrl"],
  };
}

export function computeDiskKeyForDiskEncryptionSetArraySerializer(
  result: Array<ComputeDiskKeyForDiskEncryptionSet>,
): any[] {
  return result.map((item) => {
    return computeDiskKeyForDiskEncryptionSetSerializer(item);
  });
}

export function computeDiskKeyForDiskEncryptionSetArrayDeserializer(
  result: Array<ComputeDiskKeyForDiskEncryptionSet>,
): any[] {
  return result.map((item) => {
    return computeDiskKeyForDiskEncryptionSetDeserializer(item);
  });
}

/** The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks. */
export interface ComputeDiskEncryptionSetIdentity {
  /** The type of Managed Identity used by the DiskEncryptionSet. Only SystemAssigned is supported for new creations. Disk Encryption Sets can be updated with Identity type None during migration of subscription to a new Azure Active Directory tenant; it will cause the encrypted resources to lose access to the keys. */
  type?: ComputeDiskDiskEncryptionSetIdentityType;
  /** The object id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-identity-principal-id header in the PUT request if the resource has a systemAssigned(implicit) identity */
  readonly principalId?: string;
  /** The tenant id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-client-tenant-id header in the PUT request if the resource has a systemAssigned(implicit) identity */
  readonly tenantId?: string;
  /** The list of user identities associated with the disk encryption set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
  userAssignedIdentities?: Record<string, CommonUserAssignedIdentitiesValue>;
}

export function computeDiskEncryptionSetIdentitySerializer(
  item: ComputeDiskEncryptionSetIdentity,
): any {
  return {
    type: item["type"],
    userAssignedIdentities: !item["userAssignedIdentities"]
      ? item["userAssignedIdentities"]
      : commonUserAssignedIdentitiesValueRecordSerializer(item["userAssignedIdentities"]),
  };
}

export function computeDiskEncryptionSetIdentityDeserializer(
  item: any,
): ComputeDiskEncryptionSetIdentity {
  return {
    type: item["type"],
    principalId: item["principalId"],
    tenantId: item["tenantId"],
    userAssignedIdentities: !item["userAssignedIdentities"]
      ? item["userAssignedIdentities"]
      : commonUserAssignedIdentitiesValueRecordDeserializer(item["userAssignedIdentities"]),
  };
}

/** The type of Managed Identity used by the DiskEncryptionSet. Only SystemAssigned is supported for new creations. Disk Encryption Sets can be updated with Identity type None during migration of subscription to a new Azure Active Directory tenant; it will cause the encrypted resources to lose access to the keys. */
export enum KnownComputeDiskDiskEncryptionSetIdentityType {
  /** SystemAssigned */
  SystemAssigned = "SystemAssigned",
  /** UserAssigned */
  UserAssigned = "UserAssigned",
  /** SystemAssigned, UserAssigned */
  SystemAssignedUserAssigned = "SystemAssigned, UserAssigned",
  /** None */
  None = "None",
}

/**
 * The type of Managed Identity used by the DiskEncryptionSet. Only SystemAssigned is supported for new creations. Disk Encryption Sets can be updated with Identity type None during migration of subscription to a new Azure Active Directory tenant; it will cause the encrypted resources to lose access to the keys. \
 * {@link KnownComputeDiskDiskEncryptionSetIdentityType} can be used interchangeably with ComputeDiskDiskEncryptionSetIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SystemAssigned** \
 * **UserAssigned** \
 * **SystemAssigned, UserAssigned** \
 * **None**
 */
export type ComputeDiskDiskEncryptionSetIdentityType = string;

/** disk encryption set update resource. */
export interface ComputeDiskDiskEncryptionSetUpdate {
  /** Resource tags */
  tags?: Record<string, string>;
  /** The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks. */
  identity?: ComputeDiskEncryptionSetIdentity;
  /** The type of key used to encrypt the data of the disk. */
  encryptionType?: ComputeDiskDiskEncryptionSetType;
  /** Key Vault Key Url to be used for server side encryption of Managed Disks and Snapshots */
  activeKey?: ComputeDiskKeyForDiskEncryptionSet;
  /** Set this flag to true to enable auto-updating of this disk encryption set to the latest key version. */
  rotationToLatestKeyVersionEnabled?: boolean;
  /** Multi-tenant application client id to access key vault in a different tenant. Setting the value to 'None' will clear the property. */
  federatedClientId?: string;
}

export function computeDiskDiskEncryptionSetUpdateSerializer(
  item: ComputeDiskDiskEncryptionSetUpdate,
): any {
  return {
    properties: areAllPropsUndefined(item, [
      "encryptionType",
      "activeKey",
      "rotationToLatestKeyVersionEnabled",
      "federatedClientId",
    ])
      ? undefined
      : _diskEncryptionSetUpdatePropertiesSerializer(item),
    tags: item["tags"],
    identity: !item["identity"]
      ? item["identity"]
      : computeDiskEncryptionSetIdentitySerializer(item["identity"]),
  };
}

/** disk encryption set resource update properties. */
export interface ComputeDiskDiskEncryptionSetUpdateProperties {
  /** The type of key used to encrypt the data of the disk. */
  encryptionType?: ComputeDiskDiskEncryptionSetType;
  /** Key Vault Key Url to be used for server side encryption of Managed Disks and Snapshots */
  activeKey?: ComputeDiskKeyForDiskEncryptionSet;
  /** Set this flag to true to enable auto-updating of this disk encryption set to the latest key version. */
  rotationToLatestKeyVersionEnabled?: boolean;
  /** Multi-tenant application client id to access key vault in a different tenant. Setting the value to 'None' will clear the property. */
  federatedClientId?: string;
}

export function computeDiskDiskEncryptionSetUpdatePropertiesSerializer(
  item: ComputeDiskDiskEncryptionSetUpdateProperties,
): any {
  return {
    encryptionType: item["encryptionType"],
    activeKey: !item["activeKey"]
      ? item["activeKey"]
      : computeDiskKeyForDiskEncryptionSetSerializer(item["activeKey"]),
    rotationToLatestKeyVersionEnabled: item["rotationToLatestKeyVersionEnabled"],
    federatedClientId: item["federatedClientId"],
  };
}

/** The List disk encryption set operation response. */
export interface _ComputeDiskDiskEncryptionSetList {
  /** The DiskEncryptionSet items on this page */
  value: ComputeDiskDiskEncryptionSet[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _computeDiskDiskEncryptionSetListDeserializer(
  item: any,
): _ComputeDiskDiskEncryptionSetList {
  return {
    value: computeDiskDiskEncryptionSetArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeDiskDiskEncryptionSetArraySerializer(
  result: Array<ComputeDiskDiskEncryptionSet>,
): any[] {
  return result.map((item) => {
    return computeDiskDiskEncryptionSetSerializer(item);
  });
}

export function computeDiskDiskEncryptionSetArrayDeserializer(
  result: Array<ComputeDiskDiskEncryptionSet>,
): any[] {
  return result.map((item) => {
    return computeDiskDiskEncryptionSetDeserializer(item);
  });
}

/** The List resources which are encrypted with the disk encryption set. */
export interface _ComputeDiskResourceUriList {
  /** A list of IDs or Owner IDs of resources which are encrypted with the disk encryption set. */
  value: string[];
  /** The uri to fetch the next page of encrypted resources. Call ListNext() with this to fetch the next page of encrypted resources. */
  nextLink?: string;
}

export function _computeDiskResourceUriListDeserializer(item: any): _ComputeDiskResourceUriList {
  return {
    value: item["value"].map((p: any) => {
      return p;
    }),
    nextLink: item["nextLink"],
  };
}

/** Snapshot resource. */
export interface ComputeDiskSnapshot extends TrackedResource {
  /** Unused. Always Null. */
  readonly managedBy?: string;
  /** The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. This is an optional parameter for incremental snapshot and the default behavior is the SKU will be set to the same sku as the previous snapshot */
  sku?: ComputeDiskSnapshotSku;
  /** The extended location where the snapshot will be created. Extended location cannot be changed. */
  extendedLocation?: CommonExtendedLocation;
  /** The time when the snapshot was created. */
  readonly timeCreated?: Date;
  /** The Operating System type. */
  osType?: CommonOperatingSystemTypes;
  /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
  hyperVGeneration?: CommonHyperVGeneration;
  /** Purchase plan information for the image from which the source disk for the snapshot was originally created. */
  purchasePlan?: ComputeDiskDiskPurchasePlan;
  /** List of supported capabilities for the image from which the source disk from the snapshot was originally created. */
  supportedCapabilities?: ComputeDiskSupportedCapabilities;
  /** Disk source information. CreationData information cannot be changed after the disk has been created. */
  creationData?: ComputeDiskCreationData;
  /** If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. */
  diskSizeGB?: number;
  /** The size of the disk in bytes. This field is read only. */
  readonly diskSizeBytes?: number;
  /** The state of the snapshot. */
  readonly diskState?: ComputeDiskDiskState;
  /** Unique Guid identifying the resource. */
  readonly uniqueId?: string;
  /** Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot. */
  encryptionSettingsCollection?: ComputeDiskEncryptionSettingsCollection;
  /** The disk provisioning state. */
  readonly provisioningState?: string;
  /** Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed. */
  incremental?: boolean;
  /** Incremental snapshots for a disk share an incremental snapshot family id. The Get Page Range Diff API can only be called on incremental snapshots with the same family id. */
  readonly incrementalSnapshotFamilyId?: string;
  /** Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys. */
  encryption?: ComputeDiskEncryption;
  /** Policy for accessing the disk via network. */
  networkAccessPolicy?: ComputeDiskNetworkAccessPolicy;
  /** ARM id of the DiskAccess resource for using private endpoints on disks. */
  diskAccessId?: string;
  /** Contains the security related information for the resource. */
  securityProfile?: ComputeDiskDiskSecurityProfile;
  /** Indicates the OS on a snapshot supports hibernation. */
  supportsHibernation?: boolean;
  /** Policy for controlling export on the disk. */
  publicNetworkAccess?: ComputeDiskPublicNetworkAccess;
  /** Percentage complete for the background copy when a resource is created via the CopyStart operation. */
  completionPercent?: number;
  /** Indicates the error details if the background copy of a resource created via the CopyStart operation fails. */
  copyCompletionError?: ComputeDiskCopyCompletionError;
  /** Additional authentication requirements when exporting or uploading to a disk or snapshot. */
  dataAccessAuthMode?: ComputeDiskDataAccessAuthMode;
  /** The state of snapshot which determines the access availability of the snapshot. */
  readonly snapshotAccessState?: CommonSnapshotAccessState;
}

export function computeDiskSnapshotSerializer(item: ComputeDiskSnapshot): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, [
      "osType",
      "hyperVGeneration",
      "purchasePlan",
      "supportedCapabilities",
      "creationData",
      "diskSizeGB",
      "encryptionSettingsCollection",
      "incremental",
      "encryption",
      "networkAccessPolicy",
      "diskAccessId",
      "securityProfile",
      "supportsHibernation",
      "publicNetworkAccess",
      "completionPercent",
      "copyCompletionError",
      "dataAccessAuthMode",
    ])
      ? undefined
      : _snapshotPropertiesSerializer(item),
    sku: !item["sku"] ? item["sku"] : computeDiskSnapshotSkuSerializer(item["sku"]),
    extendedLocation: !item["extendedLocation"]
      ? item["extendedLocation"]
      : commonExtendedLocationSerializer(item["extendedLocation"]),
  };
}

export function computeDiskSnapshotDeserializer(item: any): ComputeDiskSnapshot {
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
      : _snapshotPropertiesDeserializer(item["properties"])),
    managedBy: item["managedBy"],
    sku: !item["sku"] ? item["sku"] : computeDiskSnapshotSkuDeserializer(item["sku"]),
    extendedLocation: !item["extendedLocation"]
      ? item["extendedLocation"]
      : commonExtendedLocationDeserializer(item["extendedLocation"]),
  };
}

/** Snapshot resource properties. */
export interface ComputeDiskSnapshotProperties {
  /** The time when the snapshot was created. */
  readonly timeCreated?: Date;
  /** The Operating System type. */
  osType?: CommonOperatingSystemTypes;
  /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
  hyperVGeneration?: CommonHyperVGeneration;
  /** Purchase plan information for the image from which the source disk for the snapshot was originally created. */
  purchasePlan?: ComputeDiskDiskPurchasePlan;
  /** List of supported capabilities for the image from which the source disk from the snapshot was originally created. */
  supportedCapabilities?: ComputeDiskSupportedCapabilities;
  /** Disk source information. CreationData information cannot be changed after the disk has been created. */
  creationData: ComputeDiskCreationData;
  /** If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. */
  diskSizeGB?: number;
  /** The size of the disk in bytes. This field is read only. */
  readonly diskSizeBytes?: number;
  /** The state of the snapshot. */
  readonly diskState?: ComputeDiskDiskState;
  /** Unique Guid identifying the resource. */
  readonly uniqueId?: string;
  /** Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot. */
  encryptionSettingsCollection?: ComputeDiskEncryptionSettingsCollection;
  /** The disk provisioning state. */
  readonly provisioningState?: string;
  /** Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed. */
  incremental?: boolean;
  /** Incremental snapshots for a disk share an incremental snapshot family id. The Get Page Range Diff API can only be called on incremental snapshots with the same family id. */
  readonly incrementalSnapshotFamilyId?: string;
  /** Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys. */
  encryption?: ComputeDiskEncryption;
  /** Policy for accessing the disk via network. */
  networkAccessPolicy?: ComputeDiskNetworkAccessPolicy;
  /** ARM id of the DiskAccess resource for using private endpoints on disks. */
  diskAccessId?: string;
  /** Contains the security related information for the resource. */
  securityProfile?: ComputeDiskDiskSecurityProfile;
  /** Indicates the OS on a snapshot supports hibernation. */
  supportsHibernation?: boolean;
  /** Policy for controlling export on the disk. */
  publicNetworkAccess?: ComputeDiskPublicNetworkAccess;
  /** Percentage complete for the background copy when a resource is created via the CopyStart operation. */
  completionPercent?: number;
  /** Indicates the error details if the background copy of a resource created via the CopyStart operation fails. */
  copyCompletionError?: ComputeDiskCopyCompletionError;
  /** Additional authentication requirements when exporting or uploading to a disk or snapshot. */
  dataAccessAuthMode?: ComputeDiskDataAccessAuthMode;
  /** The state of snapshot which determines the access availability of the snapshot. */
  readonly snapshotAccessState?: CommonSnapshotAccessState;
}

export function computeDiskSnapshotPropertiesSerializer(item: ComputeDiskSnapshotProperties): any {
  return {
    osType: item["osType"],
    hyperVGeneration: item["hyperVGeneration"],
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeDiskDiskPurchasePlanSerializer(item["purchasePlan"]),
    supportedCapabilities: !item["supportedCapabilities"]
      ? item["supportedCapabilities"]
      : computeDiskSupportedCapabilitiesSerializer(item["supportedCapabilities"]),
    creationData: computeDiskCreationDataSerializer(item["creationData"]),
    diskSizeGB: item["diskSizeGB"],
    encryptionSettingsCollection: !item["encryptionSettingsCollection"]
      ? item["encryptionSettingsCollection"]
      : computeDiskEncryptionSettingsCollectionSerializer(item["encryptionSettingsCollection"]),
    incremental: item["incremental"],
    encryption: !item["encryption"]
      ? item["encryption"]
      : computeDiskEncryptionSerializer(item["encryption"]),
    networkAccessPolicy: item["networkAccessPolicy"],
    diskAccessId: item["diskAccessId"],
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeDiskDiskSecurityProfileSerializer(item["securityProfile"]),
    supportsHibernation: item["supportsHibernation"],
    publicNetworkAccess: item["publicNetworkAccess"],
    completionPercent: item["completionPercent"],
    copyCompletionError: !item["copyCompletionError"]
      ? item["copyCompletionError"]
      : computeDiskCopyCompletionErrorSerializer(item["copyCompletionError"]),
    dataAccessAuthMode: item["dataAccessAuthMode"],
  };
}

export function computeDiskSnapshotPropertiesDeserializer(
  item: any,
): ComputeDiskSnapshotProperties {
  return {
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
    osType: item["osType"],
    hyperVGeneration: item["hyperVGeneration"],
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeDiskDiskPurchasePlanDeserializer(item["purchasePlan"]),
    supportedCapabilities: !item["supportedCapabilities"]
      ? item["supportedCapabilities"]
      : computeDiskSupportedCapabilitiesDeserializer(item["supportedCapabilities"]),
    creationData: computeDiskCreationDataDeserializer(item["creationData"]),
    diskSizeGB: item["diskSizeGB"],
    diskSizeBytes: item["diskSizeBytes"],
    diskState: item["diskState"],
    uniqueId: item["uniqueId"],
    encryptionSettingsCollection: !item["encryptionSettingsCollection"]
      ? item["encryptionSettingsCollection"]
      : computeDiskEncryptionSettingsCollectionDeserializer(item["encryptionSettingsCollection"]),
    provisioningState: item["provisioningState"],
    incremental: item["incremental"],
    incrementalSnapshotFamilyId: item["incrementalSnapshotFamilyId"],
    encryption: !item["encryption"]
      ? item["encryption"]
      : computeDiskEncryptionDeserializer(item["encryption"]),
    networkAccessPolicy: item["networkAccessPolicy"],
    diskAccessId: item["diskAccessId"],
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeDiskDiskSecurityProfileDeserializer(item["securityProfile"]),
    supportsHibernation: item["supportsHibernation"],
    publicNetworkAccess: item["publicNetworkAccess"],
    completionPercent: item["completionPercent"],
    copyCompletionError: !item["copyCompletionError"]
      ? item["copyCompletionError"]
      : computeDiskCopyCompletionErrorDeserializer(item["copyCompletionError"]),
    dataAccessAuthMode: item["dataAccessAuthMode"],
    snapshotAccessState: item["snapshotAccessState"],
  };
}

/** Indicates the error details if the background copy of a resource created via the CopyStart operation fails. */
export interface ComputeDiskCopyCompletionError {
  /** Indicates the error code if the background copy of a resource created via the CopyStart operation fails. */
  errorCode: ComputeDiskCopyCompletionErrorReason;
  /** Indicates the error message if the background copy of a resource created via the CopyStart operation fails. */
  errorMessage: string;
}

export function computeDiskCopyCompletionErrorSerializer(
  item: ComputeDiskCopyCompletionError,
): any {
  return { errorCode: item["errorCode"], errorMessage: item["errorMessage"] };
}

export function computeDiskCopyCompletionErrorDeserializer(
  item: any,
): ComputeDiskCopyCompletionError {
  return {
    errorCode: item["errorCode"],
    errorMessage: item["errorMessage"],
  };
}

/** Indicates the error code if the background copy of a resource created via the CopyStart operation fails. */
export enum KnownComputeDiskCopyCompletionErrorReason {
  /** Indicates that the source snapshot was deleted while the background copy of the resource created via CopyStart operation was in progress. */
  CopySourceNotFound = "CopySourceNotFound",
}

/**
 * Indicates the error code if the background copy of a resource created via the CopyStart operation fails. \
 * {@link KnownComputeDiskCopyCompletionErrorReason} can be used interchangeably with ComputeDiskCopyCompletionErrorReason,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **CopySourceNotFound**: Indicates that the source snapshot was deleted while the background copy of the resource created via CopyStart operation was in progress.
 */
export type ComputeDiskCopyCompletionErrorReason = string;

/** The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. This is an optional parameter for incremental snapshot and the default behavior is the SKU will be set to the same sku as the previous snapshot */
export interface ComputeDiskSnapshotSku {
  /** The sku name. */
  name?: ComputeDiskSnapshotStorageAccountTypes;
  /** The sku tier. */
  readonly tier?: string;
}

export function computeDiskSnapshotSkuSerializer(item: ComputeDiskSnapshotSku): any {
  return { name: item["name"] };
}

export function computeDiskSnapshotSkuDeserializer(item: any): ComputeDiskSnapshotSku {
  return {
    name: item["name"],
    tier: item["tier"],
  };
}

/** The sku name. */
export enum KnownComputeDiskSnapshotStorageAccountTypes {
  /** Standard HDD locally redundant storage */
  StandardLRS = "Standard_LRS",
  /** Premium SSD locally redundant storage */
  PremiumLRS = "Premium_LRS",
  /** Standard zone redundant storage */
  StandardZRS = "Standard_ZRS",
}

/**
 * The sku name. \
 * {@link KnownComputeDiskSnapshotStorageAccountTypes} can be used interchangeably with ComputeDiskSnapshotStorageAccountTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard_LRS**: Standard HDD locally redundant storage \
 * **Premium_LRS**: Premium SSD locally redundant storage \
 * **Standard_ZRS**: Standard zone redundant storage
 */
export type ComputeDiskSnapshotStorageAccountTypes = string;

/** Snapshot update resource. */
export interface ComputeDiskSnapshotUpdate {
  /** Resource tags */
  tags?: Record<string, string>;
  /** The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. This is an optional parameter for incremental snapshot and the default behavior is the SKU will be set to the same sku as the previous snapshot */
  sku?: ComputeDiskSnapshotSku;
  /** the Operating System type. */
  osType?: CommonOperatingSystemTypes;
  /** If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. */
  diskSizeGB?: number;
  /** Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot. */
  encryptionSettingsCollection?: ComputeDiskEncryptionSettingsCollection;
  /** Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys. */
  encryption?: ComputeDiskEncryption;
  /** Policy for accessing the disk via network. */
  networkAccessPolicy?: ComputeDiskNetworkAccessPolicy;
  /** ARM id of the DiskAccess resource for using private endpoints on disks. */
  diskAccessId?: string;
  /** Indicates the OS on a snapshot supports hibernation. */
  supportsHibernation?: boolean;
  /** Policy for controlling export on the disk. */
  publicNetworkAccess?: ComputeDiskPublicNetworkAccess;
  /** Additional authentication requirements when exporting or uploading to a disk or snapshot. */
  dataAccessAuthMode?: ComputeDiskDataAccessAuthMode;
  /** List of supported capabilities for the image from which the OS disk was created. */
  supportedCapabilities?: ComputeDiskSupportedCapabilities;
  /** The state of snapshot which determines the access availability of the snapshot. */
  readonly snapshotAccessState?: CommonSnapshotAccessState;
}

export function computeDiskSnapshotUpdateSerializer(item: ComputeDiskSnapshotUpdate): any {
  return {
    properties: areAllPropsUndefined(item, [
      "osType",
      "diskSizeGB",
      "encryptionSettingsCollection",
      "encryption",
      "networkAccessPolicy",
      "diskAccessId",
      "supportsHibernation",
      "publicNetworkAccess",
      "dataAccessAuthMode",
      "supportedCapabilities",
    ])
      ? undefined
      : _snapshotUpdatePropertiesSerializer(item),
    tags: item["tags"],
    sku: !item["sku"] ? item["sku"] : computeDiskSnapshotSkuSerializer(item["sku"]),
  };
}

/** Snapshot resource update properties. */
export interface ComputeDiskSnapshotUpdateProperties {
  /** the Operating System type. */
  osType?: CommonOperatingSystemTypes;
  /** If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. */
  diskSizeGB?: number;
  /** Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot. */
  encryptionSettingsCollection?: ComputeDiskEncryptionSettingsCollection;
  /** Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys. */
  encryption?: ComputeDiskEncryption;
  /** Policy for accessing the disk via network. */
  networkAccessPolicy?: ComputeDiskNetworkAccessPolicy;
  /** ARM id of the DiskAccess resource for using private endpoints on disks. */
  diskAccessId?: string;
  /** Indicates the OS on a snapshot supports hibernation. */
  supportsHibernation?: boolean;
  /** Policy for controlling export on the disk. */
  publicNetworkAccess?: ComputeDiskPublicNetworkAccess;
  /** Additional authentication requirements when exporting or uploading to a disk or snapshot. */
  dataAccessAuthMode?: ComputeDiskDataAccessAuthMode;
  /** List of supported capabilities for the image from which the OS disk was created. */
  supportedCapabilities?: ComputeDiskSupportedCapabilities;
  /** The state of snapshot which determines the access availability of the snapshot. */
  readonly snapshotAccessState?: CommonSnapshotAccessState;
}

export function computeDiskSnapshotUpdatePropertiesSerializer(
  item: ComputeDiskSnapshotUpdateProperties,
): any {
  return {
    osType: item["osType"],
    diskSizeGB: item["diskSizeGB"],
    encryptionSettingsCollection: !item["encryptionSettingsCollection"]
      ? item["encryptionSettingsCollection"]
      : computeDiskEncryptionSettingsCollectionSerializer(item["encryptionSettingsCollection"]),
    encryption: !item["encryption"]
      ? item["encryption"]
      : computeDiskEncryptionSerializer(item["encryption"]),
    networkAccessPolicy: item["networkAccessPolicy"],
    diskAccessId: item["diskAccessId"],
    supportsHibernation: item["supportsHibernation"],
    publicNetworkAccess: item["publicNetworkAccess"],
    dataAccessAuthMode: item["dataAccessAuthMode"],
    supportedCapabilities: !item["supportedCapabilities"]
      ? item["supportedCapabilities"]
      : computeDiskSupportedCapabilitiesSerializer(item["supportedCapabilities"]),
  };
}

/** The List Snapshots operation response. */
export interface _ComputeDiskSnapshotList {
  /** A list of snapshots. */
  value: ComputeDiskSnapshot[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _computeDiskSnapshotListDeserializer(item: any): _ComputeDiskSnapshotList {
  return {
    value: computeDiskSnapshotArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeDiskSnapshotArraySerializer(result: Array<ComputeDiskSnapshot>): any[] {
  return result.map((item) => {
    return computeDiskSnapshotSerializer(item);
  });
}

export function computeDiskSnapshotArrayDeserializer(result: Array<ComputeDiskSnapshot>): any[] {
  return result.map((item) => {
    return computeDiskSnapshotDeserializer(item);
  });
}

/** Properties of disk restore point */
export interface ComputeDiskDiskRestorePoint extends ProxyResource {
  /** The timestamp of restorePoint creation */
  readonly timeCreated?: Date;
  /** arm id of source disk or source disk restore point. */
  readonly sourceResourceId?: string;
  /** The Operating System type. */
  readonly osType?: CommonOperatingSystemTypes;
  /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
  hyperVGeneration?: CommonHyperVGeneration;
  /** Purchase plan information for the the image from which the OS disk was created. */
  purchasePlan?: ComputeDiskDiskPurchasePlan;
  /** List of supported capabilities for the image from which the OS disk was created. */
  supportedCapabilities?: ComputeDiskSupportedCapabilities;
  /** id of the backing snapshot's MIS family */
  readonly familyId?: string;
  /** unique incarnation id of the source disk */
  readonly sourceUniqueId?: string;
  /** Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys. */
  readonly encryption?: ComputeDiskEncryption;
  /** Indicates the OS on a disk supports hibernation. */
  supportsHibernation?: boolean;
  /** Policy for accessing the disk via network. */
  networkAccessPolicy?: ComputeDiskNetworkAccessPolicy;
  /** Policy for controlling export on the disk. */
  publicNetworkAccess?: ComputeDiskPublicNetworkAccess;
  /** ARM id of the DiskAccess resource for using private endpoints on disks. */
  diskAccessId?: string;
  /** Percentage complete for the background copy of disk restore point when source resource is from a different region. */
  completionPercent?: number;
  /** Replication state of disk restore point when source resource is from a different region. */
  readonly replicationState?: string;
  /** Location of source disk or source disk restore point when source resource is from a different region. */
  readonly sourceResourceLocation?: string;
  /** Contains the security related information for the resource. */
  securityProfile?: ComputeDiskDiskSecurityProfile;
  /** Logical sector size in bytes for disk restore points of UltraSSD_LRS and PremiumV2_LRS disks. Supported values are 512 and 4096. 4096 is the default. */
  readonly logicalSectorSize?: number;
}

export function computeDiskDiskRestorePointDeserializer(item: any): ComputeDiskDiskRestorePoint {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    ...(!item["properties"]
      ? item["properties"]
      : _diskRestorePointPropertiesDeserializer(item["properties"])),
  };
}

/** Properties of an incremental disk restore point */
export interface ComputeDiskDiskRestorePointProperties {
  /** The timestamp of restorePoint creation */
  readonly timeCreated?: Date;
  /** arm id of source disk or source disk restore point. */
  readonly sourceResourceId?: string;
  /** The Operating System type. */
  readonly osType?: CommonOperatingSystemTypes;
  /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
  hyperVGeneration?: CommonHyperVGeneration;
  /** Purchase plan information for the the image from which the OS disk was created. */
  purchasePlan?: ComputeDiskDiskPurchasePlan;
  /** List of supported capabilities for the image from which the OS disk was created. */
  supportedCapabilities?: ComputeDiskSupportedCapabilities;
  /** id of the backing snapshot's MIS family */
  readonly familyId?: string;
  /** unique incarnation id of the source disk */
  readonly sourceUniqueId?: string;
  /** Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys. */
  readonly encryption?: ComputeDiskEncryption;
  /** Indicates the OS on a disk supports hibernation. */
  supportsHibernation?: boolean;
  /** Policy for accessing the disk via network. */
  networkAccessPolicy?: ComputeDiskNetworkAccessPolicy;
  /** Policy for controlling export on the disk. */
  publicNetworkAccess?: ComputeDiskPublicNetworkAccess;
  /** ARM id of the DiskAccess resource for using private endpoints on disks. */
  diskAccessId?: string;
  /** Percentage complete for the background copy of disk restore point when source resource is from a different region. */
  completionPercent?: number;
  /** Replication state of disk restore point when source resource is from a different region. */
  readonly replicationState?: string;
  /** Location of source disk or source disk restore point when source resource is from a different region. */
  readonly sourceResourceLocation?: string;
  /** Contains the security related information for the resource. */
  securityProfile?: ComputeDiskDiskSecurityProfile;
  /** Logical sector size in bytes for disk restore points of UltraSSD_LRS and PremiumV2_LRS disks. Supported values are 512 and 4096. 4096 is the default. */
  readonly logicalSectorSize?: number;
}

export function computeDiskDiskRestorePointPropertiesDeserializer(
  item: any,
): ComputeDiskDiskRestorePointProperties {
  return {
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
    sourceResourceId: item["sourceResourceId"],
    osType: item["osType"],
    hyperVGeneration: item["hyperVGeneration"],
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeDiskDiskPurchasePlanDeserializer(item["purchasePlan"]),
    supportedCapabilities: !item["supportedCapabilities"]
      ? item["supportedCapabilities"]
      : computeDiskSupportedCapabilitiesDeserializer(item["supportedCapabilities"]),
    familyId: item["familyId"],
    sourceUniqueId: item["sourceUniqueId"],
    encryption: !item["encryption"]
      ? item["encryption"]
      : computeDiskEncryptionDeserializer(item["encryption"]),
    supportsHibernation: item["supportsHibernation"],
    networkAccessPolicy: item["networkAccessPolicy"],
    publicNetworkAccess: item["publicNetworkAccess"],
    diskAccessId: item["diskAccessId"],
    completionPercent: item["completionPercent"],
    replicationState: item["replicationState"],
    sourceResourceLocation: item["sourceResourceLocation"],
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeDiskDiskSecurityProfileDeserializer(item["securityProfile"]),
    logicalSectorSize: item["logicalSectorSize"],
  };
}

/** The List Disk Restore Points operation response. */
export interface _ComputeDiskDiskRestorePointList {
  /** The DiskRestorePoint items on this page */
  value: ComputeDiskDiskRestorePoint[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _computeDiskDiskRestorePointListDeserializer(
  item: any,
): _ComputeDiskDiskRestorePointList {
  return {
    value: computeDiskDiskRestorePointArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeDiskDiskRestorePointArrayDeserializer(
  result: Array<ComputeDiskDiskRestorePoint>,
): any[] {
  return result.map((item) => {
    return computeDiskDiskRestorePointDeserializer(item);
  });
}

export function _diskPropertiesSerializer(item: ComputeDiskDisk): any {
  return {
    osType: item["osType"],
    hyperVGeneration: item["hyperVGeneration"],
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeDiskDiskPurchasePlanSerializer(item["purchasePlan"]),
    supportedCapabilities: !item["supportedCapabilities"]
      ? item["supportedCapabilities"]
      : computeDiskSupportedCapabilitiesSerializer(item["supportedCapabilities"]),
    creationData: !item["creationData"]
      ? item["creationData"]
      : computeDiskCreationDataSerializer(item["creationData"]),
    diskSizeGB: item["diskSizeGB"],
    encryptionSettingsCollection: !item["encryptionSettingsCollection"]
      ? item["encryptionSettingsCollection"]
      : computeDiskEncryptionSettingsCollectionSerializer(item["encryptionSettingsCollection"]),
    diskIOPSReadWrite: item["diskIopsReadWrite"],
    diskMBpsReadWrite: item["diskMBpsReadWrite"],
    diskIOPSReadOnly: item["diskIopsReadOnly"],
    diskMBpsReadOnly: item["diskMBpsReadOnly"],
    encryption: !item["encryption"]
      ? item["encryption"]
      : computeDiskEncryptionSerializer(item["encryption"]),
    maxShares: item["maxShares"],
    networkAccessPolicy: item["networkAccessPolicy"],
    diskAccessId: item["diskAccessId"],
    tier: item["tier"],
    burstingEnabled: item["burstingEnabled"],
    supportsHibernation: item["supportsHibernation"],
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeDiskDiskSecurityProfileSerializer(item["securityProfile"]),
    completionPercent: item["completionPercent"],
    publicNetworkAccess: item["publicNetworkAccess"],
    dataAccessAuthMode: item["dataAccessAuthMode"],
    optimizedForFrequentAttach: item["optimizedForFrequentAttach"],
    availabilityPolicy: !item["availabilityPolicy"]
      ? item["availabilityPolicy"]
      : computeDiskAvailabilityPolicySerializer(item["availabilityPolicy"]),
  };
}

export function _diskPropertiesDeserializer(item: any) {
  return {
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
    osType: item["osType"],
    hyperVGeneration: item["hyperVGeneration"],
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeDiskDiskPurchasePlanDeserializer(item["purchasePlan"]),
    supportedCapabilities: !item["supportedCapabilities"]
      ? item["supportedCapabilities"]
      : computeDiskSupportedCapabilitiesDeserializer(item["supportedCapabilities"]),
    creationData: !item["creationData"]
      ? item["creationData"]
      : computeDiskCreationDataDeserializer(item["creationData"]),
    diskSizeGB: item["diskSizeGB"],
    diskSizeBytes: item["diskSizeBytes"],
    uniqueId: item["uniqueId"],
    encryptionSettingsCollection: !item["encryptionSettingsCollection"]
      ? item["encryptionSettingsCollection"]
      : computeDiskEncryptionSettingsCollectionDeserializer(item["encryptionSettingsCollection"]),
    provisioningState: item["provisioningState"],
    diskIopsReadWrite: item["diskIOPSReadWrite"],
    diskMBpsReadWrite: item["diskMBpsReadWrite"],
    diskIopsReadOnly: item["diskIOPSReadOnly"],
    diskMBpsReadOnly: item["diskMBpsReadOnly"],
    diskState: item["diskState"],
    encryption: !item["encryption"]
      ? item["encryption"]
      : computeDiskEncryptionDeserializer(item["encryption"]),
    maxShares: item["maxShares"],
    shareInfo: !item["shareInfo"]
      ? item["shareInfo"]
      : computeDiskShareInfoElementArrayDeserializer(item["shareInfo"]),
    networkAccessPolicy: item["networkAccessPolicy"],
    diskAccessId: item["diskAccessId"],
    burstingEnabledTime: !item["burstingEnabledTime"]
      ? item["burstingEnabledTime"]
      : new Date(item["burstingEnabledTime"]),
    tier: item["tier"],
    burstingEnabled: item["burstingEnabled"],
    propertyUpdatesInProgress: !item["propertyUpdatesInProgress"]
      ? item["propertyUpdatesInProgress"]
      : computeDiskPropertyUpdatesInProgressDeserializer(item["propertyUpdatesInProgress"]),
    supportsHibernation: item["supportsHibernation"],
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeDiskDiskSecurityProfileDeserializer(item["securityProfile"]),
    completionPercent: item["completionPercent"],
    publicNetworkAccess: item["publicNetworkAccess"],
    dataAccessAuthMode: item["dataAccessAuthMode"],
    optimizedForFrequentAttach: item["optimizedForFrequentAttach"],
    lastOwnershipUpdateTime: !item["LastOwnershipUpdateTime"]
      ? item["LastOwnershipUpdateTime"]
      : new Date(item["LastOwnershipUpdateTime"]),
    availabilityPolicy: !item["availabilityPolicy"]
      ? item["availabilityPolicy"]
      : computeDiskAvailabilityPolicyDeserializer(item["availabilityPolicy"]),
  };
}

export function _diskUpdatePropertiesSerializer(item: ComputeDiskDiskUpdate): any {
  return {
    osType: item["osType"],
    diskSizeGB: item["diskSizeGB"],
    encryptionSettingsCollection: !item["encryptionSettingsCollection"]
      ? item["encryptionSettingsCollection"]
      : computeDiskEncryptionSettingsCollectionSerializer(item["encryptionSettingsCollection"]),
    diskIOPSReadWrite: item["diskIopsReadWrite"],
    diskMBpsReadWrite: item["diskMBpsReadWrite"],
    diskIOPSReadOnly: item["diskIopsReadOnly"],
    diskMBpsReadOnly: item["diskMBpsReadOnly"],
    maxShares: item["maxShares"],
    encryption: !item["encryption"]
      ? item["encryption"]
      : computeDiskEncryptionSerializer(item["encryption"]),
    networkAccessPolicy: item["networkAccessPolicy"],
    diskAccessId: item["diskAccessId"],
    tier: item["tier"],
    burstingEnabled: item["burstingEnabled"],
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeDiskDiskPurchasePlanSerializer(item["purchasePlan"]),
    supportedCapabilities: !item["supportedCapabilities"]
      ? item["supportedCapabilities"]
      : computeDiskSupportedCapabilitiesSerializer(item["supportedCapabilities"]),
    supportsHibernation: item["supportsHibernation"],
    publicNetworkAccess: item["publicNetworkAccess"],
    dataAccessAuthMode: item["dataAccessAuthMode"],
    optimizedForFrequentAttach: item["optimizedForFrequentAttach"],
    availabilityPolicy: !item["availabilityPolicy"]
      ? item["availabilityPolicy"]
      : computeDiskAvailabilityPolicySerializer(item["availabilityPolicy"]),
  };
}

export function _privateEndpointConnectionPropertiesSerializer(
  item: ComputeDiskPrivateEndpointConnection,
): any {
  return {
    privateLinkServiceConnectionState: !item["privateLinkServiceConnectionState"]
      ? item["privateLinkServiceConnectionState"]
      : computeDiskPrivateLinkServiceConnectionStateSerializer(
          item["privateLinkServiceConnectionState"],
        ),
  };
}

export function _privateEndpointConnectionPropertiesDeserializer(item: any) {
  return {
    privateEndpoint: !item["privateEndpoint"]
      ? item["privateEndpoint"]
      : computeDiskPrivateEndpointDeserializer(item["privateEndpoint"]),
    privateLinkServiceConnectionState: !item["privateLinkServiceConnectionState"]
      ? item["privateLinkServiceConnectionState"]
      : computeDiskPrivateLinkServiceConnectionStateDeserializer(
          item["privateLinkServiceConnectionState"],
        ),
    provisioningState: item["provisioningState"],
  };
}

export function _diskAccessPropertiesSerializer(item: ComputeDiskDiskAccess): any {
  return item;
}

export function _diskAccessPropertiesDeserializer(item: any) {
  return {
    privateEndpointConnections: !item["privateEndpointConnections"]
      ? item["privateEndpointConnections"]
      : computeDiskPrivateEndpointConnectionArrayDeserializer(item["privateEndpointConnections"]),
    provisioningState: item["provisioningState"],
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
  };
}

export function _privateLinkResourcePropertiesDeserializer(item: any) {
  return {
    groupId: item["groupId"],
    requiredMembers: !item["requiredMembers"]
      ? item["requiredMembers"]
      : item["requiredMembers"].map((p: any) => {
          return p;
        }),
    requiredZoneNames: !item["requiredZoneNames"]
      ? item["requiredZoneNames"]
      : item["requiredZoneNames"].map((p: any) => {
          return p;
        }),
  };
}

export function _diskEncryptionSetPropertiesSerializer(item: ComputeDiskDiskEncryptionSet): any {
  return {
    encryptionType: item["encryptionType"],
    activeKey: !item["activeKey"]
      ? item["activeKey"]
      : computeDiskKeyForDiskEncryptionSetSerializer(item["activeKey"]),
    rotationToLatestKeyVersionEnabled: item["rotationToLatestKeyVersionEnabled"],
    federatedClientId: item["federatedClientId"],
  };
}

export function _diskEncryptionSetPropertiesDeserializer(item: any) {
  return {
    encryptionType: item["encryptionType"],
    activeKey: !item["activeKey"]
      ? item["activeKey"]
      : computeDiskKeyForDiskEncryptionSetDeserializer(item["activeKey"]),
    previousKeys: !item["previousKeys"]
      ? item["previousKeys"]
      : computeDiskKeyForDiskEncryptionSetArrayDeserializer(item["previousKeys"]),
    provisioningState: item["provisioningState"],
    rotationToLatestKeyVersionEnabled: item["rotationToLatestKeyVersionEnabled"],
    lastKeyRotationTimestamp: !item["lastKeyRotationTimestamp"]
      ? item["lastKeyRotationTimestamp"]
      : new Date(item["lastKeyRotationTimestamp"]),
    autoKeyRotationError: !item["autoKeyRotationError"]
      ? item["autoKeyRotationError"]
      : commonApiErrorDeserializer(item["autoKeyRotationError"]),
    federatedClientId: item["federatedClientId"],
  };
}

export function _diskEncryptionSetUpdatePropertiesSerializer(
  item: ComputeDiskDiskEncryptionSetUpdate,
): any {
  return {
    encryptionType: item["encryptionType"],
    activeKey: !item["activeKey"]
      ? item["activeKey"]
      : computeDiskKeyForDiskEncryptionSetSerializer(item["activeKey"]),
    rotationToLatestKeyVersionEnabled: item["rotationToLatestKeyVersionEnabled"],
    federatedClientId: item["federatedClientId"],
  };
}

export function _snapshotPropertiesSerializer(item: ComputeDiskSnapshot): any {
  return {
    osType: item["osType"],
    hyperVGeneration: item["hyperVGeneration"],
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeDiskDiskPurchasePlanSerializer(item["purchasePlan"]),
    supportedCapabilities: !item["supportedCapabilities"]
      ? item["supportedCapabilities"]
      : computeDiskSupportedCapabilitiesSerializer(item["supportedCapabilities"]),
    creationData: !item["creationData"]
      ? item["creationData"]
      : computeDiskCreationDataSerializer(item["creationData"]),
    diskSizeGB: item["diskSizeGB"],
    encryptionSettingsCollection: !item["encryptionSettingsCollection"]
      ? item["encryptionSettingsCollection"]
      : computeDiskEncryptionSettingsCollectionSerializer(item["encryptionSettingsCollection"]),
    incremental: item["incremental"],
    encryption: !item["encryption"]
      ? item["encryption"]
      : computeDiskEncryptionSerializer(item["encryption"]),
    networkAccessPolicy: item["networkAccessPolicy"],
    diskAccessId: item["diskAccessId"],
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeDiskDiskSecurityProfileSerializer(item["securityProfile"]),
    supportsHibernation: item["supportsHibernation"],
    publicNetworkAccess: item["publicNetworkAccess"],
    completionPercent: item["completionPercent"],
    copyCompletionError: !item["copyCompletionError"]
      ? item["copyCompletionError"]
      : computeDiskCopyCompletionErrorSerializer(item["copyCompletionError"]),
    dataAccessAuthMode: item["dataAccessAuthMode"],
  };
}

export function _snapshotPropertiesDeserializer(item: any) {
  return {
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
    osType: item["osType"],
    hyperVGeneration: item["hyperVGeneration"],
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeDiskDiskPurchasePlanDeserializer(item["purchasePlan"]),
    supportedCapabilities: !item["supportedCapabilities"]
      ? item["supportedCapabilities"]
      : computeDiskSupportedCapabilitiesDeserializer(item["supportedCapabilities"]),
    creationData: !item["creationData"]
      ? item["creationData"]
      : computeDiskCreationDataDeserializer(item["creationData"]),
    diskSizeGB: item["diskSizeGB"],
    diskSizeBytes: item["diskSizeBytes"],
    diskState: item["diskState"],
    uniqueId: item["uniqueId"],
    encryptionSettingsCollection: !item["encryptionSettingsCollection"]
      ? item["encryptionSettingsCollection"]
      : computeDiskEncryptionSettingsCollectionDeserializer(item["encryptionSettingsCollection"]),
    provisioningState: item["provisioningState"],
    incremental: item["incremental"],
    incrementalSnapshotFamilyId: item["incrementalSnapshotFamilyId"],
    encryption: !item["encryption"]
      ? item["encryption"]
      : computeDiskEncryptionDeserializer(item["encryption"]),
    networkAccessPolicy: item["networkAccessPolicy"],
    diskAccessId: item["diskAccessId"],
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeDiskDiskSecurityProfileDeserializer(item["securityProfile"]),
    supportsHibernation: item["supportsHibernation"],
    publicNetworkAccess: item["publicNetworkAccess"],
    completionPercent: item["completionPercent"],
    copyCompletionError: !item["copyCompletionError"]
      ? item["copyCompletionError"]
      : computeDiskCopyCompletionErrorDeserializer(item["copyCompletionError"]),
    dataAccessAuthMode: item["dataAccessAuthMode"],
    snapshotAccessState: item["snapshotAccessState"],
  };
}

export function _snapshotUpdatePropertiesSerializer(item: ComputeDiskSnapshotUpdate): any {
  return {
    osType: item["osType"],
    diskSizeGB: item["diskSizeGB"],
    encryptionSettingsCollection: !item["encryptionSettingsCollection"]
      ? item["encryptionSettingsCollection"]
      : computeDiskEncryptionSettingsCollectionSerializer(item["encryptionSettingsCollection"]),
    encryption: !item["encryption"]
      ? item["encryption"]
      : computeDiskEncryptionSerializer(item["encryption"]),
    networkAccessPolicy: item["networkAccessPolicy"],
    diskAccessId: item["diskAccessId"],
    supportsHibernation: item["supportsHibernation"],
    publicNetworkAccess: item["publicNetworkAccess"],
    dataAccessAuthMode: item["dataAccessAuthMode"],
    supportedCapabilities: !item["supportedCapabilities"]
      ? item["supportedCapabilities"]
      : computeDiskSupportedCapabilitiesSerializer(item["supportedCapabilities"]),
  };
}

export function _diskRestorePointPropertiesDeserializer(item: any) {
  return {
    timeCreated: !item["timeCreated"] ? item["timeCreated"] : new Date(item["timeCreated"]),
    sourceResourceId: item["sourceResourceId"],
    osType: item["osType"],
    hyperVGeneration: item["hyperVGeneration"],
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeDiskDiskPurchasePlanDeserializer(item["purchasePlan"]),
    supportedCapabilities: !item["supportedCapabilities"]
      ? item["supportedCapabilities"]
      : computeDiskSupportedCapabilitiesDeserializer(item["supportedCapabilities"]),
    familyId: item["familyId"],
    sourceUniqueId: item["sourceUniqueId"],
    encryption: !item["encryption"]
      ? item["encryption"]
      : computeDiskEncryptionDeserializer(item["encryption"]),
    supportsHibernation: item["supportsHibernation"],
    networkAccessPolicy: item["networkAccessPolicy"],
    publicNetworkAccess: item["publicNetworkAccess"],
    diskAccessId: item["diskAccessId"],
    completionPercent: item["completionPercent"],
    replicationState: item["replicationState"],
    sourceResourceLocation: item["sourceResourceLocation"],
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeDiskDiskSecurityProfileDeserializer(item["securityProfile"]),
    logicalSectorSize: item["logicalSectorSize"],
  };
}
