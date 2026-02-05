// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { areAllPropsUndefined } from "../../static-helpers/serialization/check-prop-undefined.js";
import {
  CommonOperatingSystemTypes,
  CommonResourceIdentityType,
  commonUserAssignedIdentitiesValueRecordSerializer,
  commonUserAssignedIdentitiesValueRecordDeserializer,
  CommonUserAssignedIdentitiesValue,
  CommonOperatingSystemStateTypes,
  CommonHyperVGeneration,
  CommonArchitecture,
} from "../common/models.js";
import { TrackedResource, systemDataDeserializer } from "../models.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Specifies information about the Shared Image Gallery that you want to create or update. */
export interface ComputeGalleryGallery extends TrackedResource {
  /** The identity of the gallery, if configured. */
  identity?: ComputeGalleryGalleryIdentity;
  /** The description of this Shared Image Gallery resource. This property is updatable. */
  description?: string;
  /** Describes the gallery unique name. */
  identifier?: ComputeGalleryGalleryIdentifier;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: ComputeGalleryGalleryProvisioningState;
  /** Profile for gallery sharing to subscription or tenant */
  sharingProfile?: ComputeGallerySharingProfile;
  /** Contains information about the soft deletion policy of the gallery. */
  softDeletePolicy?: ComputeGallerySoftDeletePolicy;
  /** Sharing status of current gallery. */
  readonly sharingStatus?: ComputeGallerySharingStatus;
}

export function computeGalleryGallerySerializer(item: ComputeGalleryGallery): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, [
      "description",
      "identifier",
      "sharingProfile",
      "softDeletePolicy",
    ])
      ? undefined
      : _galleryPropertiesSerializer(item),
    identity: !item["identity"]
      ? item["identity"]
      : computeGalleryGalleryIdentitySerializer(item["identity"]),
  };
}

export function computeGalleryGalleryDeserializer(item: any): ComputeGalleryGallery {
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
      : _galleryPropertiesDeserializer(item["properties"])),
    identity: !item["identity"]
      ? item["identity"]
      : computeGalleryGalleryIdentityDeserializer(item["identity"]),
  };
}

/** Describes the properties of a Shared Image Gallery. */
export interface ComputeGalleryGalleryProperties {
  /** The description of this Shared Image Gallery resource. This property is updatable. */
  description?: string;
  /** Describes the gallery unique name. */
  identifier?: ComputeGalleryGalleryIdentifier;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: ComputeGalleryGalleryProvisioningState;
  /** Profile for gallery sharing to subscription or tenant */
  sharingProfile?: ComputeGallerySharingProfile;
  /** Contains information about the soft deletion policy of the gallery. */
  softDeletePolicy?: ComputeGallerySoftDeletePolicy;
  /** Sharing status of current gallery. */
  readonly sharingStatus?: ComputeGallerySharingStatus;
}

export function computeGalleryGalleryPropertiesSerializer(
  item: ComputeGalleryGalleryProperties,
): any {
  return {
    description: item["description"],
    identifier: !item["identifier"]
      ? item["identifier"]
      : computeGalleryGalleryIdentifierSerializer(item["identifier"]),
    sharingProfile: !item["sharingProfile"]
      ? item["sharingProfile"]
      : computeGallerySharingProfileSerializer(item["sharingProfile"]),
    softDeletePolicy: !item["softDeletePolicy"]
      ? item["softDeletePolicy"]
      : computeGallerySoftDeletePolicySerializer(item["softDeletePolicy"]),
  };
}

export function computeGalleryGalleryPropertiesDeserializer(
  item: any,
): ComputeGalleryGalleryProperties {
  return {
    description: item["description"],
    identifier: !item["identifier"]
      ? item["identifier"]
      : computeGalleryGalleryIdentifierDeserializer(item["identifier"]),
    provisioningState: item["provisioningState"],
    sharingProfile: !item["sharingProfile"]
      ? item["sharingProfile"]
      : computeGallerySharingProfileDeserializer(item["sharingProfile"]),
    softDeletePolicy: !item["softDeletePolicy"]
      ? item["softDeletePolicy"]
      : computeGallerySoftDeletePolicyDeserializer(item["softDeletePolicy"]),
    sharingStatus: !item["sharingStatus"]
      ? item["sharingStatus"]
      : computeGallerySharingStatusDeserializer(item["sharingStatus"]),
  };
}

/** Describes the gallery unique name. */
export interface ComputeGalleryGalleryIdentifier {
  /** The unique name of the Shared Image Gallery. This name is generated automatically by Azure. */
  readonly uniqueName?: string;
}

export function computeGalleryGalleryIdentifierSerializer(
  item: ComputeGalleryGalleryIdentifier,
): any {
  return item;
}

export function computeGalleryGalleryIdentifierDeserializer(
  item: any,
): ComputeGalleryGalleryIdentifier {
  return {
    uniqueName: item["uniqueName"],
  };
}

/** The provisioning state, which only appears in the response. */
export enum KnownComputeGalleryGalleryProvisioningState {
  /** Creating */
  Creating = "Creating",
  /** Updating */
  Updating = "Updating",
  /** Failed */
  Failed = "Failed",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Deleting */
  Deleting = "Deleting",
  /** Migrating */
  Migrating = "Migrating",
}

/**
 * The provisioning state, which only appears in the response. \
 * {@link KnownComputeGalleryGalleryProvisioningState} can be used interchangeably with ComputeGalleryGalleryProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Creating** \
 * **Updating** \
 * **Failed** \
 * **Succeeded** \
 * **Deleting** \
 * **Migrating**
 */
export type ComputeGalleryGalleryProvisioningState = string;

/** Profile for gallery sharing to subscription or tenant */
export interface ComputeGallerySharingProfile {
  /** This property allows you to specify the permission of sharing gallery. Possible values are: **Private,** **Groups,** **Community.** */
  permissions?: ComputeGalleryGallerySharingPermissionTypes;
  /** A list of sharing profile groups. */
  readonly groups?: ComputeGallerySharingProfileGroup[];
  /** Information of community gallery if current gallery is shared to community. */
  communityGalleryInfo?: ComputeGalleryCommunityGalleryInfo;
}

export function computeGallerySharingProfileSerializer(item: ComputeGallerySharingProfile): any {
  return {
    permissions: item["permissions"],
    communityGalleryInfo: !item["communityGalleryInfo"]
      ? item["communityGalleryInfo"]
      : computeGalleryCommunityGalleryInfoSerializer(item["communityGalleryInfo"]),
  };
}

export function computeGallerySharingProfileDeserializer(item: any): ComputeGallerySharingProfile {
  return {
    permissions: item["permissions"],
    groups: !item["groups"]
      ? item["groups"]
      : computeGallerySharingProfileGroupArrayDeserializer(item["groups"]),
    communityGalleryInfo: !item["communityGalleryInfo"]
      ? item["communityGalleryInfo"]
      : computeGalleryCommunityGalleryInfoDeserializer(item["communityGalleryInfo"]),
  };
}

/** This property allows you to specify the permission of sharing gallery. Possible values are: **Private,** **Groups,** **Community.** */
export enum KnownComputeGalleryGallerySharingPermissionTypes {
  /** Private */
  Private = "Private",
  /** Groups */
  Groups = "Groups",
  /** Community */
  Community = "Community",
}

/**
 * This property allows you to specify the permission of sharing gallery. Possible values are: **Private,** **Groups,** **Community.** \
 * {@link KnownComputeGalleryGallerySharingPermissionTypes} can be used interchangeably with ComputeGalleryGallerySharingPermissionTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Private** \
 * **Groups** \
 * **Community**
 */
export type ComputeGalleryGallerySharingPermissionTypes = string;

export function computeGallerySharingProfileGroupArraySerializer(
  result: Array<ComputeGallerySharingProfileGroup>,
): any[] {
  return result.map((item) => {
    return computeGallerySharingProfileGroupSerializer(item);
  });
}

export function computeGallerySharingProfileGroupArrayDeserializer(
  result: Array<ComputeGallerySharingProfileGroup>,
): any[] {
  return result.map((item) => {
    return computeGallerySharingProfileGroupDeserializer(item);
  });
}

/** Group of the gallery sharing profile */
export interface ComputeGallerySharingProfileGroup {
  /** This property allows you to specify the type of sharing group. Possible values are: **Subscriptions,** **AADTenants.** */
  type?: ComputeGallerySharingProfileGroupTypes;
  /** A list of subscription/tenant ids the gallery is aimed to be shared to. */
  ids?: string[];
}

export function computeGallerySharingProfileGroupSerializer(
  item: ComputeGallerySharingProfileGroup,
): any {
  return {
    type: item["type"],
    ids: !item["ids"]
      ? item["ids"]
      : item["ids"].map((p: any) => {
          return p;
        }),
  };
}

export function computeGallerySharingProfileGroupDeserializer(
  item: any,
): ComputeGallerySharingProfileGroup {
  return {
    type: item["type"],
    ids: !item["ids"]
      ? item["ids"]
      : item["ids"].map((p: any) => {
          return p;
        }),
  };
}

/** This property allows you to specify the type of sharing group. Possible values are: **Subscriptions,** **AADTenants.** */
export enum KnownComputeGallerySharingProfileGroupTypes {
  /** Subscriptions */
  Subscriptions = "Subscriptions",
  /** AADTenants */
  AADTenants = "AADTenants",
}

/**
 * This property allows you to specify the type of sharing group. Possible values are: **Subscriptions,** **AADTenants.** \
 * {@link KnownComputeGallerySharingProfileGroupTypes} can be used interchangeably with ComputeGallerySharingProfileGroupTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Subscriptions** \
 * **AADTenants**
 */
export type ComputeGallerySharingProfileGroupTypes = string;

/** Information of community gallery if current gallery is shared to community */
export interface ComputeGalleryCommunityGalleryInfo {
  /** The link to the publisher website. Visible to all users. */
  publisherUri?: string;
  /** Community gallery publisher support email. The email address of the publisher. Visible to all users. */
  publisherContact?: string;
  /** End-user license agreement for community gallery image. */
  eula?: string;
  /** The prefix of the gallery name that will be displayed publicly. Visible to all users. */
  publicNamePrefix?: string;
  /** Contains info about whether community gallery sharing is enabled. */
  readonly communityGalleryEnabled?: boolean;
  /** Community gallery public name list. */
  readonly publicNames?: string[];
}

export function computeGalleryCommunityGalleryInfoSerializer(
  item: ComputeGalleryCommunityGalleryInfo,
): any {
  return {
    publisherUri: item["publisherUri"],
    publisherContact: item["publisherContact"],
    eula: item["eula"],
    publicNamePrefix: item["publicNamePrefix"],
  };
}

export function computeGalleryCommunityGalleryInfoDeserializer(
  item: any,
): ComputeGalleryCommunityGalleryInfo {
  return {
    publisherUri: item["publisherUri"],
    publisherContact: item["publisherContact"],
    eula: item["eula"],
    publicNamePrefix: item["publicNamePrefix"],
    communityGalleryEnabled: item["communityGalleryEnabled"],
    publicNames: !item["publicNames"]
      ? item["publicNames"]
      : item["publicNames"].map((p: any) => {
          return p;
        }),
  };
}

/** Contains information about the soft deletion policy of the gallery. */
export interface ComputeGallerySoftDeletePolicy {
  /** Enables soft-deletion for resources in this gallery, allowing them to be recovered within retention time. */
  isSoftDeleteEnabled?: boolean;
}

export function computeGallerySoftDeletePolicySerializer(
  item: ComputeGallerySoftDeletePolicy,
): any {
  return { isSoftDeleteEnabled: item["isSoftDeleteEnabled"] };
}

export function computeGallerySoftDeletePolicyDeserializer(
  item: any,
): ComputeGallerySoftDeletePolicy {
  return {
    isSoftDeleteEnabled: item["isSoftDeleteEnabled"],
  };
}

/** Sharing status of current gallery. */
export interface ComputeGallerySharingStatus {
  /** Aggregated sharing state of current gallery. */
  readonly aggregatedState?: ComputeGallerySharingState;
  /** Summary of all regional sharing status. */
  summary?: ComputeGalleryRegionalSharingStatus[];
}

export function computeGallerySharingStatusDeserializer(item: any): ComputeGallerySharingStatus {
  return {
    aggregatedState: item["aggregatedState"],
    summary: !item["summary"]
      ? item["summary"]
      : computeGalleryRegionalSharingStatusArrayDeserializer(item["summary"]),
  };
}

/** The sharing state of the gallery, which only appears in the response. */
export enum KnownComputeGallerySharingState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** InProgress */
  InProgress = "InProgress",
  /** Failed */
  Failed = "Failed",
  /** Unknown */
  Unknown = "Unknown",
}

/**
 * The sharing state of the gallery, which only appears in the response. \
 * {@link KnownComputeGallerySharingState} can be used interchangeably with ComputeGallerySharingState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **InProgress** \
 * **Failed** \
 * **Unknown**
 */
export type ComputeGallerySharingState = string;

export function computeGalleryRegionalSharingStatusArrayDeserializer(
  result: Array<ComputeGalleryRegionalSharingStatus>,
): any[] {
  return result.map((item) => {
    return computeGalleryRegionalSharingStatusDeserializer(item);
  });
}

/** Gallery regional sharing status */
export interface ComputeGalleryRegionalSharingStatus {
  /** Region name */
  region?: string;
  /** Gallery sharing state in current region */
  readonly state?: ComputeGallerySharingState;
  /** Details of gallery regional sharing failure. */
  details?: string;
}

export function computeGalleryRegionalSharingStatusDeserializer(
  item: any,
): ComputeGalleryRegionalSharingStatus {
  return {
    region: item["region"],
    state: item["state"],
    details: item["details"],
  };
}

/** Identity for the virtual machine. */
export interface ComputeGalleryGalleryIdentity {
  /** The principal id of the gallery identity. This property will only be provided for a system assigned identity. */
  readonly principalId?: string;
  /** The AAD tenant id of the gallery identity. This property will only be provided for a system assigned identity. */
  readonly tenantId?: string;
  /** The type of identity used for the gallery. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove all identities from the gallery. */
  type?: CommonResourceIdentityType;
  /** The list of user identities associated with the gallery. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
  userAssignedIdentities?: Record<string, CommonUserAssignedIdentitiesValue>;
}

export function computeGalleryGalleryIdentitySerializer(item: ComputeGalleryGalleryIdentity): any {
  return {
    type: item["type"],
    userAssignedIdentities: !item["userAssignedIdentities"]
      ? item["userAssignedIdentities"]
      : commonUserAssignedIdentitiesValueRecordSerializer(item["userAssignedIdentities"]),
  };
}

export function computeGalleryGalleryIdentityDeserializer(
  item: any,
): ComputeGalleryGalleryIdentity {
  return {
    principalId: item["principalId"],
    tenantId: item["tenantId"],
    type: item["type"],
    userAssignedIdentities: !item["userAssignedIdentities"]
      ? item["userAssignedIdentities"]
      : commonUserAssignedIdentitiesValueRecordDeserializer(item["userAssignedIdentities"]),
  };
}

/** Specifies information about the Shared Image Gallery that you want to update. */
export interface ComputeGalleryGalleryUpdate extends ComputeGalleryUpdateResourceDefinition {
  /** The identity of the gallery, if configured. */
  identity?: ComputeGalleryGalleryIdentity;
  /** The description of this Shared Image Gallery resource. This property is updatable. */
  description?: string;
  /** Describes the gallery unique name. */
  identifier?: ComputeGalleryGalleryIdentifier;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: ComputeGalleryGalleryProvisioningState;
  /** Profile for gallery sharing to subscription or tenant */
  sharingProfile?: ComputeGallerySharingProfile;
  /** Contains information about the soft deletion policy of the gallery. */
  softDeletePolicy?: ComputeGallerySoftDeletePolicy;
  /** Sharing status of current gallery. */
  readonly sharingStatus?: ComputeGallerySharingStatus;
}

export function computeGalleryGalleryUpdateSerializer(item: ComputeGalleryGalleryUpdate): any {
  return {
    tags: item["tags"],
    properties: areAllPropsUndefined(item, [
      "description",
      "identifier",
      "sharingProfile",
      "softDeletePolicy",
    ])
      ? undefined
      : _galleryUpdatePropertiesSerializer(item),
    identity: !item["identity"]
      ? item["identity"]
      : computeGalleryGalleryIdentitySerializer(item["identity"]),
  };
}

/** The Update Resource model definition. */
export interface ComputeGalleryUpdateResourceDefinition {
  /** Resource Id */
  readonly id?: string;
  /** Resource name */
  readonly name?: string;
  /** Resource type */
  readonly type?: string;
  /** Resource tags */
  tags?: Record<string, string>;
}

export function computeGalleryUpdateResourceDefinitionSerializer(
  item: ComputeGalleryUpdateResourceDefinition,
): any {
  return { tags: item["tags"] };
}

/** The List Galleries operation response. */
export interface _ComputeGalleryGalleryList {
  /** A list of galleries. */
  value: ComputeGalleryGallery[];
  /** The uri to fetch the next page of galleries. Call ListNext() with this to fetch the next page of galleries. */
  nextLink?: string;
  /** The security profile of a gallery image version */
  securityProfile?: ComputeGalleryImageVersionSecurityProfile;
}

export function _computeGalleryGalleryListDeserializer(item: any): _ComputeGalleryGalleryList {
  return {
    value: computeGalleryGalleryArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeGalleryImageVersionSecurityProfileDeserializer(item["securityProfile"]),
  };
}

export function computeGalleryGalleryArraySerializer(result: Array<ComputeGalleryGallery>): any[] {
  return result.map((item) => {
    return computeGalleryGallerySerializer(item);
  });
}

export function computeGalleryGalleryArrayDeserializer(
  result: Array<ComputeGalleryGallery>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryDeserializer(item);
  });
}

/** The security profile of a gallery image version */
export interface ComputeGalleryImageVersionSecurityProfile {
  /** Contains UEFI settings for the image version. */
  uefiSettings?: ComputeGalleryGalleryImageVersionUefiSettings;
}

export function computeGalleryImageVersionSecurityProfileSerializer(
  item: ComputeGalleryImageVersionSecurityProfile,
): any {
  return {
    uefiSettings: !item["uefiSettings"]
      ? item["uefiSettings"]
      : computeGalleryGalleryImageVersionUefiSettingsSerializer(item["uefiSettings"]),
  };
}

export function computeGalleryImageVersionSecurityProfileDeserializer(
  item: any,
): ComputeGalleryImageVersionSecurityProfile {
  return {
    uefiSettings: !item["uefiSettings"]
      ? item["uefiSettings"]
      : computeGalleryGalleryImageVersionUefiSettingsDeserializer(item["uefiSettings"]),
  };
}

/** Contains UEFI settings for the image version. */
export interface ComputeGalleryGalleryImageVersionUefiSettings {
  /** The name of the template(s) that contains default UEFI key signatures that will be added to the image. */
  signatureTemplateNames?: ComputeGalleryUefiSignatureTemplateName[];
  /** Additional UEFI key signatures that will be added to the image in addition to the signature templates */
  additionalSignatures?: ComputeGalleryUefiKeySignatures;
}

export function computeGalleryGalleryImageVersionUefiSettingsSerializer(
  item: ComputeGalleryGalleryImageVersionUefiSettings,
): any {
  return {
    signatureTemplateNames: !item["signatureTemplateNames"]
      ? item["signatureTemplateNames"]
      : item["signatureTemplateNames"].map((p: any) => {
          return p;
        }),
    additionalSignatures: !item["additionalSignatures"]
      ? item["additionalSignatures"]
      : computeGalleryUefiKeySignaturesSerializer(item["additionalSignatures"]),
  };
}

export function computeGalleryGalleryImageVersionUefiSettingsDeserializer(
  item: any,
): ComputeGalleryGalleryImageVersionUefiSettings {
  return {
    signatureTemplateNames: !item["signatureTemplateNames"]
      ? item["signatureTemplateNames"]
      : item["signatureTemplateNames"].map((p: any) => {
          return p;
        }),
    additionalSignatures: !item["additionalSignatures"]
      ? item["additionalSignatures"]
      : computeGalleryUefiKeySignaturesDeserializer(item["additionalSignatures"]),
  };
}

/** The name of the signature template that contains default UEFI keys. */
export enum KnownComputeGalleryUefiSignatureTemplateName {
  /** NoSignatureTemplate */
  NoSignatureTemplate = "NoSignatureTemplate",
  /** MicrosoftUefiCertificateAuthorityTemplate */
  MicrosoftUefiCertificateAuthorityTemplate = "MicrosoftUefiCertificateAuthorityTemplate",
  /** MicrosoftWindowsTemplate */
  MicrosoftWindowsTemplate = "MicrosoftWindowsTemplate",
}

/**
 * The name of the signature template that contains default UEFI keys. \
 * {@link KnownComputeGalleryUefiSignatureTemplateName} can be used interchangeably with ComputeGalleryUefiSignatureTemplateName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NoSignatureTemplate** \
 * **MicrosoftUefiCertificateAuthorityTemplate** \
 * **MicrosoftWindowsTemplate**
 */
export type ComputeGalleryUefiSignatureTemplateName = string;

/** Additional UEFI key signatures that will be added to the image in addition to the signature templates */
export interface ComputeGalleryUefiKeySignatures {
  /** The Platform Key of this image version. */
  pk?: ComputeGalleryUefiKey;
  /** The Key Encryption Keys of this image version. */
  kek?: ComputeGalleryUefiKey[];
  /** The database of UEFI keys for this image version. */
  db?: ComputeGalleryUefiKey[];
  /** The database of revoked UEFI keys for this image version. */
  dbx?: ComputeGalleryUefiKey[];
}

export function computeGalleryUefiKeySignaturesSerializer(
  item: ComputeGalleryUefiKeySignatures,
): any {
  return {
    pk: !item["pk"] ? item["pk"] : computeGalleryUefiKeySerializer(item["pk"]),
    kek: !item["kek"] ? item["kek"] : computeGalleryUefiKeyArraySerializer(item["kek"]),
    db: !item["db"] ? item["db"] : computeGalleryUefiKeyArraySerializer(item["db"]),
    dbx: !item["dbx"] ? item["dbx"] : computeGalleryUefiKeyArraySerializer(item["dbx"]),
  };
}

export function computeGalleryUefiKeySignaturesDeserializer(
  item: any,
): ComputeGalleryUefiKeySignatures {
  return {
    pk: !item["pk"] ? item["pk"] : computeGalleryUefiKeyDeserializer(item["pk"]),
    kek: !item["kek"] ? item["kek"] : computeGalleryUefiKeyArrayDeserializer(item["kek"]),
    db: !item["db"] ? item["db"] : computeGalleryUefiKeyArrayDeserializer(item["db"]),
    dbx: !item["dbx"] ? item["dbx"] : computeGalleryUefiKeyArrayDeserializer(item["dbx"]),
  };
}

/** A UEFI key signature. */
export interface ComputeGalleryUefiKey {
  /** The type of key signature. */
  type?: ComputeGalleryUefiKeyType;
  /** The value of the key signature. */
  value?: string[];
}

export function computeGalleryUefiKeySerializer(item: ComputeGalleryUefiKey): any {
  return {
    type: item["type"],
    value: !item["value"]
      ? item["value"]
      : item["value"].map((p: any) => {
          return p;
        }),
  };
}

export function computeGalleryUefiKeyDeserializer(item: any): ComputeGalleryUefiKey {
  return {
    type: item["type"],
    value: !item["value"]
      ? item["value"]
      : item["value"].map((p: any) => {
          return p;
        }),
  };
}

/** The type of key signature. */
export enum KnownComputeGalleryUefiKeyType {
  /** sha256 */
  Sha256 = "sha256",
  /** x509 */
  X509 = "x509",
}

/**
 * The type of key signature. \
 * {@link KnownComputeGalleryUefiKeyType} can be used interchangeably with ComputeGalleryUefiKeyType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **sha256** \
 * **x509**
 */
export type ComputeGalleryUefiKeyType = string;

export function computeGalleryUefiKeyArraySerializer(result: Array<ComputeGalleryUefiKey>): any[] {
  return result.map((item) => {
    return computeGalleryUefiKeySerializer(item);
  });
}

export function computeGalleryUefiKeyArrayDeserializer(
  result: Array<ComputeGalleryUefiKey>,
): any[] {
  return result.map((item) => {
    return computeGalleryUefiKeyDeserializer(item);
  });
}

/** Specifies information about the gallery image definition that you want to create or update. */
export interface ComputeGalleryGalleryImage extends TrackedResource {
  /** The description of this gallery image definition resource. This property is updatable. */
  description?: string;
  /** The Eula agreement for the gallery image definition. */
  eula?: string;
  /** The privacy statement uri. */
  privacyStatementUri?: string;
  /** The release note uri. */
  releaseNoteUri?: string;
  /** This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. Possible values are: **Windows,** **Linux.** */
  osType?: CommonOperatingSystemTypes;
  /** This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'. */
  osState?: CommonOperatingSystemStateTypes;
  /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
  hyperVGeneration?: CommonHyperVGeneration;
  /** The end of life date of the gallery image definition. This property can be used for decommissioning purposes. This property is updatable. */
  endOfLifeDate?: Date;
  /** This is the gallery image definition identifier. */
  identifier?: ComputeGalleryGalleryImageIdentifier;
  /** The properties describe the recommended machine configuration for this Image Definition. These properties are updatable. */
  recommended?: ComputeGalleryRecommendedMachineConfiguration;
  /** Describes the disallowed disk types. */
  disallowed?: ComputeGalleryDisallowed;
  /** Describes the gallery image definition purchase plan. This is used by marketplace images. */
  purchasePlan?: ComputeGalleryImagePurchasePlan;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: ComputeGalleryGalleryProvisioningState;
  /** A list of gallery image features. */
  features?: ComputeGalleryGalleryImageFeature[];
  /** The architecture of the image. Applicable to OS disks only. */
  architecture?: CommonArchitecture;
  /** Optional. Must be set to true if the gallery image features are being updated. */
  allowUpdateImage?: boolean;
}

export function computeGalleryGalleryImageSerializer(item: ComputeGalleryGalleryImage): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, [
      "description",
      "eula",
      "privacyStatementUri",
      "releaseNoteUri",
      "osType",
      "osState",
      "hyperVGeneration",
      "endOfLifeDate",
      "identifier",
      "recommended",
      "disallowed",
      "purchasePlan",
      "features",
      "architecture",
      "allowUpdateImage",
    ])
      ? undefined
      : _galleryImagePropertiesSerializer(item),
  };
}

export function computeGalleryGalleryImageDeserializer(item: any): ComputeGalleryGalleryImage {
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
      : _galleryImagePropertiesDeserializer(item["properties"])),
  };
}

/** Describes the properties of a gallery image definition. */
export interface ComputeGalleryGalleryImageProperties {
  /** The description of this gallery image definition resource. This property is updatable. */
  description?: string;
  /** The Eula agreement for the gallery image definition. */
  eula?: string;
  /** The privacy statement uri. */
  privacyStatementUri?: string;
  /** The release note uri. */
  releaseNoteUri?: string;
  /** This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. Possible values are: **Windows,** **Linux.** */
  osType: CommonOperatingSystemTypes;
  /** This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'. */
  osState: CommonOperatingSystemStateTypes;
  /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
  hyperVGeneration?: CommonHyperVGeneration;
  /** The end of life date of the gallery image definition. This property can be used for decommissioning purposes. This property is updatable. */
  endOfLifeDate?: Date;
  /** This is the gallery image definition identifier. */
  identifier: ComputeGalleryGalleryImageIdentifier;
  /** The properties describe the recommended machine configuration for this Image Definition. These properties are updatable. */
  recommended?: ComputeGalleryRecommendedMachineConfiguration;
  /** Describes the disallowed disk types. */
  disallowed?: ComputeGalleryDisallowed;
  /** Describes the gallery image definition purchase plan. This is used by marketplace images. */
  purchasePlan?: ComputeGalleryImagePurchasePlan;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: ComputeGalleryGalleryProvisioningState;
  /** A list of gallery image features. */
  features?: ComputeGalleryGalleryImageFeature[];
  /** The architecture of the image. Applicable to OS disks only. */
  architecture?: CommonArchitecture;
  /** Optional. Must be set to true if the gallery image features are being updated. */
  allowUpdateImage?: boolean;
}

export function computeGalleryGalleryImagePropertiesSerializer(
  item: ComputeGalleryGalleryImageProperties,
): any {
  return {
    description: item["description"],
    eula: item["eula"],
    privacyStatementUri: item["privacyStatementUri"],
    releaseNoteUri: item["releaseNoteUri"],
    osType: item["osType"],
    osState: item["osState"],
    hyperVGeneration: item["hyperVGeneration"],
    endOfLifeDate: !item["endOfLifeDate"]
      ? item["endOfLifeDate"]
      : item["endOfLifeDate"].toISOString(),
    identifier: computeGalleryGalleryImageIdentifierSerializer(item["identifier"]),
    recommended: !item["recommended"]
      ? item["recommended"]
      : computeGalleryRecommendedMachineConfigurationSerializer(item["recommended"]),
    disallowed: !item["disallowed"]
      ? item["disallowed"]
      : computeGalleryDisallowedSerializer(item["disallowed"]),
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeGalleryImagePurchasePlanSerializer(item["purchasePlan"]),
    features: !item["features"]
      ? item["features"]
      : computeGalleryGalleryImageFeatureArraySerializer(item["features"]),
    architecture: item["architecture"],
    allowUpdateImage: item["allowUpdateImage"],
  };
}

export function computeGalleryGalleryImagePropertiesDeserializer(
  item: any,
): ComputeGalleryGalleryImageProperties {
  return {
    description: item["description"],
    eula: item["eula"],
    privacyStatementUri: item["privacyStatementUri"],
    releaseNoteUri: item["releaseNoteUri"],
    osType: item["osType"],
    osState: item["osState"],
    hyperVGeneration: item["hyperVGeneration"],
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    identifier: computeGalleryGalleryImageIdentifierDeserializer(item["identifier"]),
    recommended: !item["recommended"]
      ? item["recommended"]
      : computeGalleryRecommendedMachineConfigurationDeserializer(item["recommended"]),
    disallowed: !item["disallowed"]
      ? item["disallowed"]
      : computeGalleryDisallowedDeserializer(item["disallowed"]),
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeGalleryImagePurchasePlanDeserializer(item["purchasePlan"]),
    provisioningState: item["provisioningState"],
    features: !item["features"]
      ? item["features"]
      : computeGalleryGalleryImageFeatureArrayDeserializer(item["features"]),
    architecture: item["architecture"],
    allowUpdateImage: item["allowUpdateImage"],
  };
}

/** This is the gallery image definition identifier. */
export interface ComputeGalleryGalleryImageIdentifier {
  /** The name of the gallery image definition publisher. */
  publisher: string;
  /** The name of the gallery image definition offer. */
  offer: string;
  /** The name of the gallery image definition SKU. */
  sku: string;
}

export function computeGalleryGalleryImageIdentifierSerializer(
  item: ComputeGalleryGalleryImageIdentifier,
): any {
  return { publisher: item["publisher"], offer: item["offer"], sku: item["sku"] };
}

export function computeGalleryGalleryImageIdentifierDeserializer(
  item: any,
): ComputeGalleryGalleryImageIdentifier {
  return {
    publisher: item["publisher"],
    offer: item["offer"],
    sku: item["sku"],
  };
}

/** The properties describe the recommended machine configuration for this Image Definition. These properties are updatable. */
export interface ComputeGalleryRecommendedMachineConfiguration {
  /** Describes the resource range. */
  vCPUs?: ComputeGalleryResourceRange;
  /** Describes the resource range. */
  memory?: ComputeGalleryResourceRange;
}

export function computeGalleryRecommendedMachineConfigurationSerializer(
  item: ComputeGalleryRecommendedMachineConfiguration,
): any {
  return {
    vCPUs: !item["vCPUs"] ? item["vCPUs"] : computeGalleryResourceRangeSerializer(item["vCPUs"]),
    memory: !item["memory"]
      ? item["memory"]
      : computeGalleryResourceRangeSerializer(item["memory"]),
  };
}

export function computeGalleryRecommendedMachineConfigurationDeserializer(
  item: any,
): ComputeGalleryRecommendedMachineConfiguration {
  return {
    vCPUs: !item["vCPUs"] ? item["vCPUs"] : computeGalleryResourceRangeDeserializer(item["vCPUs"]),
    memory: !item["memory"]
      ? item["memory"]
      : computeGalleryResourceRangeDeserializer(item["memory"]),
  };
}

/** Describes the resource range. */
export interface ComputeGalleryResourceRange {
  /** The minimum number of the resource. */
  min?: number;
  /** The maximum number of the resource. */
  max?: number;
}

export function computeGalleryResourceRangeSerializer(item: ComputeGalleryResourceRange): any {
  return { min: item["min"], max: item["max"] };
}

export function computeGalleryResourceRangeDeserializer(item: any): ComputeGalleryResourceRange {
  return {
    min: item["min"],
    max: item["max"],
  };
}

/** Describes the disallowed disk types. */
export interface ComputeGalleryDisallowed {
  /** A list of disk types. */
  diskTypes?: string[];
}

export function computeGalleryDisallowedSerializer(item: ComputeGalleryDisallowed): any {
  return {
    diskTypes: !item["diskTypes"]
      ? item["diskTypes"]
      : item["diskTypes"].map((p: any) => {
          return p;
        }),
  };
}

export function computeGalleryDisallowedDeserializer(item: any): ComputeGalleryDisallowed {
  return {
    diskTypes: !item["diskTypes"]
      ? item["diskTypes"]
      : item["diskTypes"].map((p: any) => {
          return p;
        }),
  };
}

/** Describes the gallery image definition purchase plan. This is used by marketplace images. */
export interface ComputeGalleryImagePurchasePlan {
  /** The plan ID. */
  name?: string;
  /** The publisher ID. */
  publisher?: string;
  /** The product ID. */
  product?: string;
}

export function computeGalleryImagePurchasePlanSerializer(
  item: ComputeGalleryImagePurchasePlan,
): any {
  return { name: item["name"], publisher: item["publisher"], product: item["product"] };
}

export function computeGalleryImagePurchasePlanDeserializer(
  item: any,
): ComputeGalleryImagePurchasePlan {
  return {
    name: item["name"],
    publisher: item["publisher"],
    product: item["product"],
  };
}

export function computeGalleryGalleryImageFeatureArraySerializer(
  result: Array<ComputeGalleryGalleryImageFeature>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryImageFeatureSerializer(item);
  });
}

export function computeGalleryGalleryImageFeatureArrayDeserializer(
  result: Array<ComputeGalleryGalleryImageFeature>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryImageFeatureDeserializer(item);
  });
}

/** A feature for gallery image. */
export interface ComputeGalleryGalleryImageFeature {
  /** The name of the gallery image feature. */
  name?: string;
  /** The value of the gallery image feature. */
  value?: string;
  /** The minimum gallery image version which supports this feature. */
  startsAtVersion?: string;
}

export function computeGalleryGalleryImageFeatureSerializer(
  item: ComputeGalleryGalleryImageFeature,
): any {
  return { name: item["name"], value: item["value"], startsAtVersion: item["startsAtVersion"] };
}

export function computeGalleryGalleryImageFeatureDeserializer(
  item: any,
): ComputeGalleryGalleryImageFeature {
  return {
    name: item["name"],
    value: item["value"],
    startsAtVersion: item["startsAtVersion"],
  };
}

/** Specifies information about the gallery image definition that you want to update. */
export interface ComputeGalleryGalleryImageUpdate extends ComputeGalleryUpdateResourceDefinition {
  /** The description of this gallery image definition resource. This property is updatable. */
  description?: string;
  /** The Eula agreement for the gallery image definition. */
  eula?: string;
  /** The privacy statement uri. */
  privacyStatementUri?: string;
  /** The release note uri. */
  releaseNoteUri?: string;
  /** This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. Possible values are: **Windows,** **Linux.** */
  osType?: CommonOperatingSystemTypes;
  /** This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'. */
  osState?: CommonOperatingSystemStateTypes;
  /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
  hyperVGeneration?: CommonHyperVGeneration;
  /** The end of life date of the gallery image definition. This property can be used for decommissioning purposes. This property is updatable. */
  endOfLifeDate?: Date;
  /** This is the gallery image definition identifier. */
  identifier?: ComputeGalleryGalleryImageIdentifier;
  /** The properties describe the recommended machine configuration for this Image Definition. These properties are updatable. */
  recommended?: ComputeGalleryRecommendedMachineConfiguration;
  /** Describes the disallowed disk types. */
  disallowed?: ComputeGalleryDisallowed;
  /** Describes the gallery image definition purchase plan. This is used by marketplace images. */
  purchasePlan?: ComputeGalleryImagePurchasePlan;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: ComputeGalleryGalleryProvisioningState;
  /** A list of gallery image features. */
  features?: ComputeGalleryGalleryImageFeature[];
  /** The architecture of the image. Applicable to OS disks only. */
  architecture?: CommonArchitecture;
  /** Optional. Must be set to true if the gallery image features are being updated. */
  allowUpdateImage?: boolean;
}

export function computeGalleryGalleryImageUpdateSerializer(
  item: ComputeGalleryGalleryImageUpdate,
): any {
  return {
    tags: item["tags"],
    properties: areAllPropsUndefined(item, [
      "description",
      "eula",
      "privacyStatementUri",
      "releaseNoteUri",
      "osType",
      "osState",
      "hyperVGeneration",
      "endOfLifeDate",
      "identifier",
      "recommended",
      "disallowed",
      "purchasePlan",
      "features",
      "architecture",
      "allowUpdateImage",
    ])
      ? undefined
      : _galleryImageUpdatePropertiesSerializer(item),
  };
}

/** The List Gallery Images operation response. */
export interface _ComputeGalleryGalleryImageList {
  /** A list of Shared Image Gallery images. */
  value: ComputeGalleryGalleryImage[];
  /** The uri to fetch the next page of Image Definitions in the Shared Image Gallery. Call ListNext() with this to fetch the next page of gallery image definitions. */
  nextLink?: string;
}

export function _computeGalleryGalleryImageListDeserializer(
  item: any,
): _ComputeGalleryGalleryImageList {
  return {
    value: computeGalleryGalleryImageArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeGalleryGalleryImageArraySerializer(
  result: Array<ComputeGalleryGalleryImage>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryImageSerializer(item);
  });
}

export function computeGalleryGalleryImageArrayDeserializer(
  result: Array<ComputeGalleryGalleryImage>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryImageDeserializer(item);
  });
}

/** Specifies information about the gallery image version that you want to create or update. */
export interface ComputeGalleryGalleryImageVersion extends TrackedResource {
  /** The publishing profile of a gallery image Version. */
  publishingProfile?: ComputeGalleryGalleryImageVersionPublishingProfile;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: ComputeGalleryGalleryProvisioningState;
  /** This is the storage profile of a Gallery Image Version. */
  storageProfile?: ComputeGalleryGalleryImageVersionStorageProfile;
  /** This is the safety profile of the Gallery Image Version. */
  safetyProfile?: ComputeGalleryGalleryImageVersionSafetyProfile;
  /** This is the replication status of the gallery image version. */
  readonly replicationStatus?: ComputeGalleryReplicationStatus;
  /** The security profile of a gallery image version */
  securityProfile?: ComputeGalleryImageVersionSecurityProfile;
  /** Indicates if this is a soft-delete resource restoration request. */
  restore?: boolean;
  /** This is the validations profile of a Gallery Image Version. */
  readonly validationsProfile?: ComputeGalleryValidationsProfile;
}

export function computeGalleryGalleryImageVersionSerializer(
  item: ComputeGalleryGalleryImageVersion,
): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, [
      "publishingProfile",
      "storageProfile",
      "safetyProfile",
      "securityProfile",
      "restore",
    ])
      ? undefined
      : _galleryImageVersionPropertiesSerializer(item),
  };
}

export function computeGalleryGalleryImageVersionDeserializer(
  item: any,
): ComputeGalleryGalleryImageVersion {
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
      : _galleryImageVersionPropertiesDeserializer(item["properties"])),
  };
}

/** Describes the properties of a gallery image version. */
export interface ComputeGalleryGalleryImageVersionProperties {
  /** The publishing profile of a gallery image Version. */
  publishingProfile?: ComputeGalleryGalleryImageVersionPublishingProfile;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: ComputeGalleryGalleryProvisioningState;
  /** This is the storage profile of a Gallery Image Version. */
  storageProfile: ComputeGalleryGalleryImageVersionStorageProfile;
  /** This is the safety profile of the Gallery Image Version. */
  safetyProfile?: ComputeGalleryGalleryImageVersionSafetyProfile;
  /** This is the replication status of the gallery image version. */
  readonly replicationStatus?: ComputeGalleryReplicationStatus;
  /** The security profile of a gallery image version */
  securityProfile?: ComputeGalleryImageVersionSecurityProfile;
  /** Indicates if this is a soft-delete resource restoration request. */
  restore?: boolean;
  /** This is the validations profile of a Gallery Image Version. */
  readonly validationsProfile?: ComputeGalleryValidationsProfile;
}

export function computeGalleryGalleryImageVersionPropertiesSerializer(
  item: ComputeGalleryGalleryImageVersionProperties,
): any {
  return {
    publishingProfile: !item["publishingProfile"]
      ? item["publishingProfile"]
      : computeGalleryGalleryImageVersionPublishingProfileSerializer(item["publishingProfile"]),
    storageProfile: computeGalleryGalleryImageVersionStorageProfileSerializer(
      item["storageProfile"],
    ),
    safetyProfile: !item["safetyProfile"]
      ? item["safetyProfile"]
      : computeGalleryGalleryImageVersionSafetyProfileSerializer(item["safetyProfile"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeGalleryImageVersionSecurityProfileSerializer(item["securityProfile"]),
    restore: item["restore"],
  };
}

export function computeGalleryGalleryImageVersionPropertiesDeserializer(
  item: any,
): ComputeGalleryGalleryImageVersionProperties {
  return {
    publishingProfile: !item["publishingProfile"]
      ? item["publishingProfile"]
      : computeGalleryGalleryImageVersionPublishingProfileDeserializer(item["publishingProfile"]),
    provisioningState: item["provisioningState"],
    storageProfile: computeGalleryGalleryImageVersionStorageProfileDeserializer(
      item["storageProfile"],
    ),
    safetyProfile: !item["safetyProfile"]
      ? item["safetyProfile"]
      : computeGalleryGalleryImageVersionSafetyProfileDeserializer(item["safetyProfile"]),
    replicationStatus: !item["replicationStatus"]
      ? item["replicationStatus"]
      : computeGalleryReplicationStatusDeserializer(item["replicationStatus"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeGalleryImageVersionSecurityProfileDeserializer(item["securityProfile"]),
    restore: item["restore"],
    validationsProfile: !item["validationsProfile"]
      ? item["validationsProfile"]
      : computeGalleryValidationsProfileDeserializer(item["validationsProfile"]),
  };
}

/** The publishing profile of a gallery image Version. */
export interface ComputeGalleryGalleryImageVersionPublishingProfile extends ComputeGalleryGalleryArtifactPublishingProfileBase {}

export function computeGalleryGalleryImageVersionPublishingProfileSerializer(
  item: ComputeGalleryGalleryImageVersionPublishingProfile,
): any {
  return {
    targetRegions: !item["targetRegions"]
      ? item["targetRegions"]
      : computeGalleryTargetRegionArraySerializer(item["targetRegions"]),
    replicaCount: item["replicaCount"],
    excludeFromLatest: item["excludeFromLatest"],
    endOfLifeDate: !item["endOfLifeDate"]
      ? item["endOfLifeDate"]
      : item["endOfLifeDate"].toISOString(),
    storageAccountType: item["storageAccountType"],
    replicationMode: item["replicationMode"],
    targetExtendedLocations: !item["targetExtendedLocations"]
      ? item["targetExtendedLocations"]
      : computeGalleryGalleryTargetExtendedLocationArraySerializer(item["targetExtendedLocations"]),
    storageAccountStrategy: item["storageAccountStrategy"],
  };
}

export function computeGalleryGalleryImageVersionPublishingProfileDeserializer(
  item: any,
): ComputeGalleryGalleryImageVersionPublishingProfile {
  return {
    targetRegions: !item["targetRegions"]
      ? item["targetRegions"]
      : computeGalleryTargetRegionArrayDeserializer(item["targetRegions"]),
    replicaCount: item["replicaCount"],
    excludeFromLatest: item["excludeFromLatest"],
    publishedDate: !item["publishedDate"] ? item["publishedDate"] : new Date(item["publishedDate"]),
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    storageAccountType: item["storageAccountType"],
    replicationMode: item["replicationMode"],
    targetExtendedLocations: !item["targetExtendedLocations"]
      ? item["targetExtendedLocations"]
      : computeGalleryGalleryTargetExtendedLocationArrayDeserializer(
          item["targetExtendedLocations"],
        ),
    storageAccountStrategy: item["storageAccountStrategy"],
  };
}

/** This is the storage profile of a Gallery Image Version. */
export interface ComputeGalleryGalleryImageVersionStorageProfile {
  /** The source of the gallery artifact version. */
  source?: ComputeGalleryGalleryArtifactVersionFullSource;
  /** This is the OS disk image. */
  osDiskImage?: ComputeGalleryGalleryOSDiskImage;
  /** A list of data disk images. */
  dataDiskImages?: ComputeGalleryGalleryDataDiskImage[];
}

export function computeGalleryGalleryImageVersionStorageProfileSerializer(
  item: ComputeGalleryGalleryImageVersionStorageProfile,
): any {
  return {
    source: !item["source"]
      ? item["source"]
      : computeGalleryGalleryArtifactVersionFullSourceSerializer(item["source"]),
    osDiskImage: !item["osDiskImage"]
      ? item["osDiskImage"]
      : computeGalleryGalleryOSDiskImageSerializer(item["osDiskImage"]),
    dataDiskImages: !item["dataDiskImages"]
      ? item["dataDiskImages"]
      : computeGalleryGalleryDataDiskImageArraySerializer(item["dataDiskImages"]),
  };
}

export function computeGalleryGalleryImageVersionStorageProfileDeserializer(
  item: any,
): ComputeGalleryGalleryImageVersionStorageProfile {
  return {
    source: !item["source"]
      ? item["source"]
      : computeGalleryGalleryArtifactVersionFullSourceDeserializer(item["source"]),
    osDiskImage: !item["osDiskImage"]
      ? item["osDiskImage"]
      : computeGalleryGalleryOSDiskImageDeserializer(item["osDiskImage"]),
    dataDiskImages: !item["dataDiskImages"]
      ? item["dataDiskImages"]
      : computeGalleryGalleryDataDiskImageArrayDeserializer(item["dataDiskImages"]),
  };
}

/** The source of the gallery artifact version. */
export interface ComputeGalleryGalleryArtifactVersionFullSource extends ComputeGalleryGalleryArtifactVersionSource {
  /** The resource Id of the source Community Gallery Image.  Only required when using Community Gallery Image as a source. */
  communityGalleryImageId?: string;
  /** The resource Id of the source virtual machine.  Only required when capturing a virtual machine to source this Gallery Image Version. */
  virtualMachineId?: string;
}

export function computeGalleryGalleryArtifactVersionFullSourceSerializer(
  item: ComputeGalleryGalleryArtifactVersionFullSource,
): any {
  return {
    id: item["id"],
    communityGalleryImageId: item["communityGalleryImageId"],
    virtualMachineId: item["virtualMachineId"],
  };
}

export function computeGalleryGalleryArtifactVersionFullSourceDeserializer(
  item: any,
): ComputeGalleryGalleryArtifactVersionFullSource {
  return {
    id: item["id"],
    communityGalleryImageId: item["communityGalleryImageId"],
    virtualMachineId: item["virtualMachineId"],
  };
}

/** This is the OS disk image. */
export interface ComputeGalleryGalleryOSDiskImage extends ComputeGalleryGalleryDiskImage {}

export function computeGalleryGalleryOSDiskImageSerializer(
  item: ComputeGalleryGalleryOSDiskImage,
): any {
  return {
    hostCaching: item["hostCaching"],
    source: !item["source"]
      ? item["source"]
      : computeGalleryGalleryDiskImageSourceSerializer(item["source"]),
  };
}

export function computeGalleryGalleryOSDiskImageDeserializer(
  item: any,
): ComputeGalleryGalleryOSDiskImage {
  return {
    sizeInGB: item["sizeInGB"],
    hostCaching: item["hostCaching"],
    source: !item["source"]
      ? item["source"]
      : computeGalleryGalleryDiskImageSourceDeserializer(item["source"]),
  };
}

export function computeGalleryGalleryDataDiskImageArraySerializer(
  result: Array<ComputeGalleryGalleryDataDiskImage>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryDataDiskImageSerializer(item);
  });
}

export function computeGalleryGalleryDataDiskImageArrayDeserializer(
  result: Array<ComputeGalleryGalleryDataDiskImage>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryDataDiskImageDeserializer(item);
  });
}

/** This is the data disk image. */
export interface ComputeGalleryGalleryDataDiskImage extends ComputeGalleryGalleryDiskImage {
  /** This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine. */
  lun: number;
}

export function computeGalleryGalleryDataDiskImageSerializer(
  item: ComputeGalleryGalleryDataDiskImage,
): any {
  return {
    hostCaching: item["hostCaching"],
    source: !item["source"]
      ? item["source"]
      : computeGalleryGalleryDiskImageSourceSerializer(item["source"]),
    lun: item["lun"],
  };
}

export function computeGalleryGalleryDataDiskImageDeserializer(
  item: any,
): ComputeGalleryGalleryDataDiskImage {
  return {
    sizeInGB: item["sizeInGB"],
    hostCaching: item["hostCaching"],
    source: !item["source"]
      ? item["source"]
      : computeGalleryGalleryDiskImageSourceDeserializer(item["source"]),
    lun: item["lun"],
  };
}

/** This is the safety profile of the Gallery Image Version. */
export interface ComputeGalleryGalleryImageVersionSafetyProfile extends ComputeGalleryGalleryArtifactSafetyProfileBase {
  /** Indicates whether this image has been reported as violating Microsoft's policies. */
  readonly reportedForPolicyViolation?: boolean;
  /** A list of Policy Violations that have been reported for this Gallery Image Version. */
  readonly policyViolations?: ComputeGalleryPolicyViolation[];
  /** Indicates whether or not the deletion is blocked for this Gallery Image Version if its End Of Life has not expired. */
  blockDeletionBeforeEndOfLife?: boolean;
}

export function computeGalleryGalleryImageVersionSafetyProfileSerializer(
  item: ComputeGalleryGalleryImageVersionSafetyProfile,
): any {
  return {
    allowDeletionOfReplicatedLocations: item["allowDeletionOfReplicatedLocations"],
    blockDeletionBeforeEndOfLife: item["blockDeletionBeforeEndOfLife"],
  };
}

export function computeGalleryGalleryImageVersionSafetyProfileDeserializer(
  item: any,
): ComputeGalleryGalleryImageVersionSafetyProfile {
  return {
    allowDeletionOfReplicatedLocations: item["allowDeletionOfReplicatedLocations"],
    reportedForPolicyViolation: item["reportedForPolicyViolation"],
    policyViolations: !item["policyViolations"]
      ? item["policyViolations"]
      : computeGalleryPolicyViolationArrayDeserializer(item["policyViolations"]),
    blockDeletionBeforeEndOfLife: item["blockDeletionBeforeEndOfLife"],
  };
}

export function computeGalleryPolicyViolationArrayDeserializer(
  result: Array<ComputeGalleryPolicyViolation>,
): any[] {
  return result.map((item) => {
    return computeGalleryPolicyViolationDeserializer(item);
  });
}

/** A policy violation reported against a gallery artifact. */
export interface ComputeGalleryPolicyViolation {
  /** Describes the nature of the policy violation. */
  category?: ComputeGalleryPolicyViolationCategory;
  /** Describes specific details about why this policy violation was reported. */
  details?: string;
}

export function computeGalleryPolicyViolationDeserializer(
  item: any,
): ComputeGalleryPolicyViolation {
  return {
    category: item["category"],
    details: item["details"],
  };
}

/** Describes the nature of the policy violation. */
export enum KnownComputeGalleryPolicyViolationCategory {
  /** Other */
  Other = "Other",
  /** ImageFlaggedUnsafe */
  ImageFlaggedUnsafe = "ImageFlaggedUnsafe",
  /** CopyrightValidation */
  CopyrightValidation = "CopyrightValidation",
  /** IpTheft */
  IpTheft = "IpTheft",
}

/**
 * Describes the nature of the policy violation. \
 * {@link KnownComputeGalleryPolicyViolationCategory} can be used interchangeably with ComputeGalleryPolicyViolationCategory,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Other** \
 * **ImageFlaggedUnsafe** \
 * **CopyrightValidation** \
 * **IpTheft**
 */
export type ComputeGalleryPolicyViolationCategory = string;

/** This is the replication status of the gallery image version. */
export interface ComputeGalleryReplicationStatus {
  /** This is the aggregated replication status based on all the regional replication status flags. */
  readonly aggregatedState?: ComputeGalleryAggregatedReplicationState;
  /** This is a summary of replication status for each region. */
  readonly summary?: ComputeGalleryRegionalReplicationStatus[];
}

export function computeGalleryReplicationStatusDeserializer(
  item: any,
): ComputeGalleryReplicationStatus {
  return {
    aggregatedState: item["aggregatedState"],
    summary: !item["summary"]
      ? item["summary"]
      : computeGalleryRegionalReplicationStatusArrayDeserializer(item["summary"]),
  };
}

/** This is the aggregated replication status based on all the regional replication status flags. */
export enum KnownComputeGalleryAggregatedReplicationState {
  /** Unknown */
  Unknown = "Unknown",
  /** InProgress */
  InProgress = "InProgress",
  /** Completed */
  Completed = "Completed",
  /** Failed */
  Failed = "Failed",
}

/**
 * This is the aggregated replication status based on all the regional replication status flags. \
 * {@link KnownComputeGalleryAggregatedReplicationState} can be used interchangeably with ComputeGalleryAggregatedReplicationState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **InProgress** \
 * **Completed** \
 * **Failed**
 */
export type ComputeGalleryAggregatedReplicationState = string;

export function computeGalleryRegionalReplicationStatusArrayDeserializer(
  result: Array<ComputeGalleryRegionalReplicationStatus>,
): any[] {
  return result.map((item) => {
    return computeGalleryRegionalReplicationStatusDeserializer(item);
  });
}

/** This is the regional replication status. */
export interface ComputeGalleryRegionalReplicationStatus {
  /** The region to which the gallery image version is being replicated to. */
  readonly region?: string;
  /** This is the regional replication state. */
  readonly state?: ComputeGalleryReplicationState;
  /** The details of the replication status. */
  readonly details?: string;
  /** It indicates progress of the replication job. */
  readonly progress?: number;
}

export function computeGalleryRegionalReplicationStatusDeserializer(
  item: any,
): ComputeGalleryRegionalReplicationStatus {
  return {
    region: item["region"],
    state: item["state"],
    details: item["details"],
    progress: item["progress"],
  };
}

/** This is the regional replication state. */
export enum KnownComputeGalleryReplicationState {
  /** Unknown */
  Unknown = "Unknown",
  /** Replicating */
  Replicating = "Replicating",
  /** Completed */
  Completed = "Completed",
  /** Failed */
  Failed = "Failed",
}

/**
 * This is the regional replication state. \
 * {@link KnownComputeGalleryReplicationState} can be used interchangeably with ComputeGalleryReplicationState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Replicating** \
 * **Completed** \
 * **Failed**
 */
export type ComputeGalleryReplicationState = string;

/** This is the validations profile of a Gallery Image Version. */
export interface ComputeGalleryValidationsProfile {
  /** The published time of the image version */
  validationEtag?: string;
  executedValidations?: ComputeGalleryExecutedValidation[];
  /** This specifies the pub, offer, sku and version of the image version metadata */
  platformAttributes?: ComputeGalleryPlatformAttribute[];
}

export function computeGalleryValidationsProfileDeserializer(
  item: any,
): ComputeGalleryValidationsProfile {
  return {
    validationEtag: item["validationEtag"],
    executedValidations: !item["executedValidations"]
      ? item["executedValidations"]
      : computeGalleryExecutedValidationArrayDeserializer(item["executedValidations"]),
    platformAttributes: !item["platformAttributes"]
      ? item["platformAttributes"]
      : computeGalleryPlatformAttributeArrayDeserializer(item["platformAttributes"]),
  };
}

export function computeGalleryExecutedValidationArrayDeserializer(
  result: Array<ComputeGalleryExecutedValidation>,
): any[] {
  return result.map((item) => {
    return computeGalleryExecutedValidationDeserializer(item);
  });
}

/** This is the executed Validation. */
export interface ComputeGalleryExecutedValidation {
  /** This property specifies the type of image version validation. */
  type?: string;
  /** This property specifies the status of the validationProfile of the image version. */
  status?: ComputeGalleryValidationStatus;
  /** This property specifies the valid version of the validation. */
  version?: string;
  /** This property specifies the starting timestamp. */
  executionTime?: Date;
}

export function computeGalleryExecutedValidationDeserializer(
  item: any,
): ComputeGalleryExecutedValidation {
  return {
    type: item["type"],
    status: item["status"],
    version: item["version"],
    executionTime: !item["executionTime"] ? item["executionTime"] : new Date(item["executionTime"]),
  };
}

/** This property specifies the status of the validationProfile of the image version. */
export enum KnownComputeGalleryValidationStatus {
  /** Unknown */
  Unknown = "Unknown",
  /** Failed */
  Failed = "Failed",
  /** Succeeded */
  Succeeded = "Succeeded",
}

/**
 * This property specifies the status of the validationProfile of the image version. \
 * {@link KnownComputeGalleryValidationStatus} can be used interchangeably with ComputeGalleryValidationStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Failed** \
 * **Succeeded**
 */
export type ComputeGalleryValidationStatus = string;

export function computeGalleryPlatformAttributeArrayDeserializer(
  result: Array<ComputeGalleryPlatformAttribute>,
): any[] {
  return result.map((item) => {
    return computeGalleryPlatformAttributeDeserializer(item);
  });
}

/** This is the platform attribute of the image version. */
export interface ComputeGalleryPlatformAttribute {
  /** This property specifies the name of the platformAttribute. It is read-only. */
  readonly name?: string;
  /** This property specifies the value of the corresponding name property. It is read-only. */
  readonly value?: string;
}

export function computeGalleryPlatformAttributeDeserializer(
  item: any,
): ComputeGalleryPlatformAttribute {
  return {
    name: item["name"],
    value: item["value"],
  };
}

/** Describes the basic gallery artifact publishing profile. */
export interface ComputeGalleryGalleryArtifactPublishingProfileBase {
  /** The target regions where the Image Version is going to be replicated to. This property is updatable. */
  targetRegions?: ComputeGalleryTargetRegion[];
  /** The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable. */
  replicaCount?: number;
  /** If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version. */
  excludeFromLatest?: boolean;
  /** The timestamp for when the gallery image version is published. */
  readonly publishedDate?: Date;
  /** The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable. */
  endOfLifeDate?: Date;
  /** Specifies the storage account type to be used to store the image. Cannot be specified along with storageAccountStrategy. This property is not updatable. */
  storageAccountType?: ComputeGalleryStorageAccountType;
  /** Optional parameter which specifies the mode to be used for replication. This property is not updatable. */
  replicationMode?: ComputeGalleryReplicationMode;
  /** The target extended locations where the Image Version is going to be replicated to. This property is updatable. */
  targetExtendedLocations?: ComputeGalleryGalleryTargetExtendedLocation[];
  /** Specifies the strategy to be used when selecting the storage account type. Cannot be specified along with storageAccountType, but can be overridden per region by specifying targetRegions[].storageAccountType. This property is not updatable. */
  storageAccountStrategy?: ComputeGalleryStorageAccountStrategy;
}

export function computeGalleryGalleryArtifactPublishingProfileBaseSerializer(
  item: ComputeGalleryGalleryArtifactPublishingProfileBase,
): any {
  return {
    targetRegions: !item["targetRegions"]
      ? item["targetRegions"]
      : computeGalleryTargetRegionArraySerializer(item["targetRegions"]),
    replicaCount: item["replicaCount"],
    excludeFromLatest: item["excludeFromLatest"],
    endOfLifeDate: !item["endOfLifeDate"]
      ? item["endOfLifeDate"]
      : item["endOfLifeDate"].toISOString(),
    storageAccountType: item["storageAccountType"],
    replicationMode: item["replicationMode"],
    targetExtendedLocations: !item["targetExtendedLocations"]
      ? item["targetExtendedLocations"]
      : computeGalleryGalleryTargetExtendedLocationArraySerializer(item["targetExtendedLocations"]),
    storageAccountStrategy: item["storageAccountStrategy"],
  };
}

export function computeGalleryGalleryArtifactPublishingProfileBaseDeserializer(
  item: any,
): ComputeGalleryGalleryArtifactPublishingProfileBase {
  return {
    targetRegions: !item["targetRegions"]
      ? item["targetRegions"]
      : computeGalleryTargetRegionArrayDeserializer(item["targetRegions"]),
    replicaCount: item["replicaCount"],
    excludeFromLatest: item["excludeFromLatest"],
    publishedDate: !item["publishedDate"] ? item["publishedDate"] : new Date(item["publishedDate"]),
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    storageAccountType: item["storageAccountType"],
    replicationMode: item["replicationMode"],
    targetExtendedLocations: !item["targetExtendedLocations"]
      ? item["targetExtendedLocations"]
      : computeGalleryGalleryTargetExtendedLocationArrayDeserializer(
          item["targetExtendedLocations"],
        ),
    storageAccountStrategy: item["storageAccountStrategy"],
  };
}

export function computeGalleryTargetRegionArraySerializer(
  result: Array<ComputeGalleryTargetRegion>,
): any[] {
  return result.map((item) => {
    return computeGalleryTargetRegionSerializer(item);
  });
}

export function computeGalleryTargetRegionArrayDeserializer(
  result: Array<ComputeGalleryTargetRegion>,
): any[] {
  return result.map((item) => {
    return computeGalleryTargetRegionDeserializer(item);
  });
}

/** Describes the target region information. */
export interface ComputeGalleryTargetRegion {
  /** The name of the region. */
  name: string;
  /** The number of replicas of the Image Version to be created per region. This property is updatable. */
  regionalReplicaCount?: number;
  /** Specifies the storage account type to be used to store the image. This property is not updatable. */
  storageAccountType?: ComputeGalleryStorageAccountType;
  /** Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact. */
  encryption?: ComputeGalleryEncryptionImages;
  /** Contains the flag setting to hide an image when users specify version='latest' */
  excludeFromLatest?: boolean;
  /** List of storage sku with replica count to create direct drive replicas. */
  additionalReplicaSets?: ComputeGalleryAdditionalReplicaSet[];
}

export function computeGalleryTargetRegionSerializer(item: ComputeGalleryTargetRegion): any {
  return {
    name: item["name"],
    regionalReplicaCount: item["regionalReplicaCount"],
    storageAccountType: item["storageAccountType"],
    encryption: !item["encryption"]
      ? item["encryption"]
      : computeGalleryEncryptionImagesSerializer(item["encryption"]),
    excludeFromLatest: item["excludeFromLatest"],
    additionalReplicaSets: !item["additionalReplicaSets"]
      ? item["additionalReplicaSets"]
      : computeGalleryAdditionalReplicaSetArraySerializer(item["additionalReplicaSets"]),
  };
}

export function computeGalleryTargetRegionDeserializer(item: any): ComputeGalleryTargetRegion {
  return {
    name: item["name"],
    regionalReplicaCount: item["regionalReplicaCount"],
    storageAccountType: item["storageAccountType"],
    encryption: !item["encryption"]
      ? item["encryption"]
      : computeGalleryEncryptionImagesDeserializer(item["encryption"]),
    excludeFromLatest: item["excludeFromLatest"],
    additionalReplicaSets: !item["additionalReplicaSets"]
      ? item["additionalReplicaSets"]
      : computeGalleryAdditionalReplicaSetArrayDeserializer(item["additionalReplicaSets"]),
  };
}

/** Specifies the storage account type to be used to store the image. This property is not updatable. */
export enum KnownComputeGalleryStorageAccountType {
  /** Standard_LRS */
  StandardLRS = "Standard_LRS",
  /** Standard_ZRS */
  StandardZRS = "Standard_ZRS",
  /** Premium_LRS */
  PremiumLRS = "Premium_LRS",
  /** PremiumV2_LRS */
  PremiumV2LRS = "PremiumV2_LRS",
}

/**
 * Specifies the storage account type to be used to store the image. This property is not updatable. \
 * {@link KnownComputeGalleryStorageAccountType} can be used interchangeably with ComputeGalleryStorageAccountType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard_LRS** \
 * **Standard_ZRS** \
 * **Premium_LRS** \
 * **PremiumV2_LRS**
 */
export type ComputeGalleryStorageAccountType = string;

/** Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact. */
export interface ComputeGalleryEncryptionImages {
  /** Contains encryption settings for an OS disk image. */
  osDiskImage?: ComputeGalleryOSDiskImageEncryption;
  /** A list of encryption specifications for data disk images. */
  dataDiskImages?: ComputeGalleryDataDiskImageEncryption[];
}

export function computeGalleryEncryptionImagesSerializer(
  item: ComputeGalleryEncryptionImages,
): any {
  return {
    osDiskImage: !item["osDiskImage"]
      ? item["osDiskImage"]
      : computeGalleryOSDiskImageEncryptionSerializer(item["osDiskImage"]),
    dataDiskImages: !item["dataDiskImages"]
      ? item["dataDiskImages"]
      : computeGalleryDataDiskImageEncryptionArraySerializer(item["dataDiskImages"]),
  };
}

export function computeGalleryEncryptionImagesDeserializer(
  item: any,
): ComputeGalleryEncryptionImages {
  return {
    osDiskImage: !item["osDiskImage"]
      ? item["osDiskImage"]
      : computeGalleryOSDiskImageEncryptionDeserializer(item["osDiskImage"]),
    dataDiskImages: !item["dataDiskImages"]
      ? item["dataDiskImages"]
      : computeGalleryDataDiskImageEncryptionArrayDeserializer(item["dataDiskImages"]),
  };
}

/** Contains encryption settings for an OS disk image. */
export interface ComputeGalleryOSDiskImageEncryption extends ComputeGalleryDiskImageEncryption {
  /** This property specifies the security profile of an OS disk image. */
  securityProfile?: ComputeGalleryOSDiskImageSecurityProfile;
}

export function computeGalleryOSDiskImageEncryptionSerializer(
  item: ComputeGalleryOSDiskImageEncryption,
): any {
  return {
    diskEncryptionSetId: item["diskEncryptionSetId"],
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeGalleryOSDiskImageSecurityProfileSerializer(item["securityProfile"]),
  };
}

export function computeGalleryOSDiskImageEncryptionDeserializer(
  item: any,
): ComputeGalleryOSDiskImageEncryption {
  return {
    diskEncryptionSetId: item["diskEncryptionSetId"],
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeGalleryOSDiskImageSecurityProfileDeserializer(item["securityProfile"]),
  };
}

/** Contains security profile for an OS disk image. */
export interface ComputeGalleryOSDiskImageSecurityProfile {
  /** confidential VM encryption types */
  confidentialVMEncryptionType?: ComputeGalleryConfidentialVMEncryptionType;
  /** secure VM disk encryption set id */
  secureVMDiskEncryptionSetId?: string;
}

export function computeGalleryOSDiskImageSecurityProfileSerializer(
  item: ComputeGalleryOSDiskImageSecurityProfile,
): any {
  return {
    confidentialVMEncryptionType: item["confidentialVMEncryptionType"],
    secureVMDiskEncryptionSetId: item["secureVMDiskEncryptionSetId"],
  };
}

export function computeGalleryOSDiskImageSecurityProfileDeserializer(
  item: any,
): ComputeGalleryOSDiskImageSecurityProfile {
  return {
    confidentialVMEncryptionType: item["confidentialVMEncryptionType"],
    secureVMDiskEncryptionSetId: item["secureVMDiskEncryptionSetId"],
  };
}

/** confidential VM encryption types */
export enum KnownComputeGalleryConfidentialVMEncryptionType {
  /** EncryptedVMGuestStateOnlyWithPmk */
  EncryptedVMGuestStateOnlyWithPmk = "EncryptedVMGuestStateOnlyWithPmk",
  /** EncryptedWithPmk */
  EncryptedWithPmk = "EncryptedWithPmk",
  /** EncryptedWithCmk */
  EncryptedWithCmk = "EncryptedWithCmk",
  /** NonPersistedTPM */
  NonPersistedTPM = "NonPersistedTPM",
}

/**
 * confidential VM encryption types \
 * {@link KnownComputeGalleryConfidentialVMEncryptionType} can be used interchangeably with ComputeGalleryConfidentialVMEncryptionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **EncryptedVMGuestStateOnlyWithPmk** \
 * **EncryptedWithPmk** \
 * **EncryptedWithCmk** \
 * **NonPersistedTPM**
 */
export type ComputeGalleryConfidentialVMEncryptionType = string;

export function computeGalleryDataDiskImageEncryptionArraySerializer(
  result: Array<ComputeGalleryDataDiskImageEncryption>,
): any[] {
  return result.map((item) => {
    return computeGalleryDataDiskImageEncryptionSerializer(item);
  });
}

export function computeGalleryDataDiskImageEncryptionArrayDeserializer(
  result: Array<ComputeGalleryDataDiskImageEncryption>,
): any[] {
  return result.map((item) => {
    return computeGalleryDataDiskImageEncryptionDeserializer(item);
  });
}

/** Contains encryption settings for a data disk image. */
export interface ComputeGalleryDataDiskImageEncryption extends ComputeGalleryDiskImageEncryption {
  /** This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine. */
  lun: number;
}

export function computeGalleryDataDiskImageEncryptionSerializer(
  item: ComputeGalleryDataDiskImageEncryption,
): any {
  return { diskEncryptionSetId: item["diskEncryptionSetId"], lun: item["lun"] };
}

export function computeGalleryDataDiskImageEncryptionDeserializer(
  item: any,
): ComputeGalleryDataDiskImageEncryption {
  return {
    diskEncryptionSetId: item["diskEncryptionSetId"],
    lun: item["lun"],
  };
}

export function computeGalleryAdditionalReplicaSetArraySerializer(
  result: Array<ComputeGalleryAdditionalReplicaSet>,
): any[] {
  return result.map((item) => {
    return computeGalleryAdditionalReplicaSetSerializer(item);
  });
}

export function computeGalleryAdditionalReplicaSetArrayDeserializer(
  result: Array<ComputeGalleryAdditionalReplicaSet>,
): any[] {
  return result.map((item) => {
    return computeGalleryAdditionalReplicaSetDeserializer(item);
  });
}

/** Describes the additional replica set information. */
export interface ComputeGalleryAdditionalReplicaSet {
  /** Specifies the storage account type to be used to create the direct drive replicas */
  storageAccountType?: ComputeGalleryStorageAccountType;
  /** The number of direct drive replicas of the Image Version to be created.This Property is updatable */
  regionalReplicaCount?: number;
}

export function computeGalleryAdditionalReplicaSetSerializer(
  item: ComputeGalleryAdditionalReplicaSet,
): any {
  return {
    storageAccountType: item["storageAccountType"],
    regionalReplicaCount: item["regionalReplicaCount"],
  };
}

export function computeGalleryAdditionalReplicaSetDeserializer(
  item: any,
): ComputeGalleryAdditionalReplicaSet {
  return {
    storageAccountType: item["storageAccountType"],
    regionalReplicaCount: item["regionalReplicaCount"],
  };
}

/** Optional parameter which specifies the mode to be used for replication. This property is not updatable. */
export enum KnownComputeGalleryReplicationMode {
  /** Full */
  Full = "Full",
  /** Shallow */
  Shallow = "Shallow",
}

/**
 * Optional parameter which specifies the mode to be used for replication. This property is not updatable. \
 * {@link KnownComputeGalleryReplicationMode} can be used interchangeably with ComputeGalleryReplicationMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Full** \
 * **Shallow**
 */
export type ComputeGalleryReplicationMode = string;

export function computeGalleryGalleryTargetExtendedLocationArraySerializer(
  result: Array<ComputeGalleryGalleryTargetExtendedLocation>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryTargetExtendedLocationSerializer(item);
  });
}

export function computeGalleryGalleryTargetExtendedLocationArrayDeserializer(
  result: Array<ComputeGalleryGalleryTargetExtendedLocation>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryTargetExtendedLocationDeserializer(item);
  });
}

/** model interface ComputeGalleryGalleryTargetExtendedLocation */
export interface ComputeGalleryGalleryTargetExtendedLocation {
  /** The name of the region. */
  name?: string;
  /** The name of the extended location. */
  extendedLocation?: ComputeGalleryGalleryExtendedLocation;
  /** The number of replicas of the Image Version to be created per extended location. This property is updatable. */
  extendedLocationReplicaCount?: number;
  /** Specifies the storage account type to be used to store the image. This property is not updatable. */
  storageAccountType?: ComputeGalleryEdgeZoneStorageAccountType;
  /** Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact. */
  encryption?: ComputeGalleryEncryptionImages;
}

export function computeGalleryGalleryTargetExtendedLocationSerializer(
  item: ComputeGalleryGalleryTargetExtendedLocation,
): any {
  return {
    name: item["name"],
    extendedLocation: !item["extendedLocation"]
      ? item["extendedLocation"]
      : computeGalleryGalleryExtendedLocationSerializer(item["extendedLocation"]),
    extendedLocationReplicaCount: item["extendedLocationReplicaCount"],
    storageAccountType: item["storageAccountType"],
    encryption: !item["encryption"]
      ? item["encryption"]
      : computeGalleryEncryptionImagesSerializer(item["encryption"]),
  };
}

export function computeGalleryGalleryTargetExtendedLocationDeserializer(
  item: any,
): ComputeGalleryGalleryTargetExtendedLocation {
  return {
    name: item["name"],
    extendedLocation: !item["extendedLocation"]
      ? item["extendedLocation"]
      : computeGalleryGalleryExtendedLocationDeserializer(item["extendedLocation"]),
    extendedLocationReplicaCount: item["extendedLocationReplicaCount"],
    storageAccountType: item["storageAccountType"],
    encryption: !item["encryption"]
      ? item["encryption"]
      : computeGalleryEncryptionImagesDeserializer(item["encryption"]),
  };
}

/** The name of the extended location. */
export interface ComputeGalleryGalleryExtendedLocation {
  name?: string;
  /** It is type of the extended location. */
  type?: ComputeGalleryGalleryExtendedLocationType;
}

export function computeGalleryGalleryExtendedLocationSerializer(
  item: ComputeGalleryGalleryExtendedLocation,
): any {
  return { name: item["name"], type: item["type"] };
}

export function computeGalleryGalleryExtendedLocationDeserializer(
  item: any,
): ComputeGalleryGalleryExtendedLocation {
  return {
    name: item["name"],
    type: item["type"],
  };
}

/** It is type of the extended location. */
export enum KnownComputeGalleryGalleryExtendedLocationType {
  /** EdgeZone */
  EdgeZone = "EdgeZone",
  /** Unknown */
  Unknown = "Unknown",
}

/**
 * It is type of the extended location. \
 * {@link KnownComputeGalleryGalleryExtendedLocationType} can be used interchangeably with ComputeGalleryGalleryExtendedLocationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **EdgeZone** \
 * **Unknown**
 */
export type ComputeGalleryGalleryExtendedLocationType = string;

/** Specifies the storage account type to be used to store the image. This property is not updatable. */
export enum KnownComputeGalleryEdgeZoneStorageAccountType {
  /** Standard_LRS */
  StandardLRS = "Standard_LRS",
  /** Standard_ZRS */
  StandardZRS = "Standard_ZRS",
  /** StandardSSD_LRS */
  StandardSSDLRS = "StandardSSD_LRS",
  /** Premium_LRS */
  PremiumLRS = "Premium_LRS",
}

/**
 * Specifies the storage account type to be used to store the image. This property is not updatable. \
 * {@link KnownComputeGalleryEdgeZoneStorageAccountType} can be used interchangeably with ComputeGalleryEdgeZoneStorageAccountType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard_LRS** \
 * **Standard_ZRS** \
 * **StandardSSD_LRS** \
 * **Premium_LRS**
 */
export type ComputeGalleryEdgeZoneStorageAccountType = string;

/** Specifies the strategy to be used when selecting the storage account type. Cannot be specified along with storageAccountType, but can be overridden per region by specifying targetRegions[].storageAccountType. This property is not updatable. */
export enum KnownComputeGalleryStorageAccountStrategy {
  /** Choose Standard_ZRS storage if the region supports it, else choose Standard_LRS storage, unless overridden by specifying regional storageAccountType. If no storageAccountStrategy is specified, this is the default strategy (from API version 2025-03-03 onwards). */
  PreferStandardZRS = "PreferStandard_ZRS",
  /** Choose Standard_LRS storage unless overridden by specifying regional storageAccountType. */
  DefaultStandardLRS = "DefaultStandard_LRS",
}

/**
 * Specifies the strategy to be used when selecting the storage account type. Cannot be specified along with storageAccountType, but can be overridden per region by specifying targetRegions[].storageAccountType. This property is not updatable. \
 * {@link KnownComputeGalleryStorageAccountStrategy} can be used interchangeably with ComputeGalleryStorageAccountStrategy,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **PreferStandard_ZRS**: Choose Standard_ZRS storage if the region supports it, else choose Standard_LRS storage, unless overridden by specifying regional storageAccountType. If no storageAccountStrategy is specified, this is the default strategy (from API version 2025-03-03 onwards). \
 * **DefaultStandard_LRS**: Choose Standard_LRS storage unless overridden by specifying regional storageAccountType.
 */
export type ComputeGalleryStorageAccountStrategy = string;

/** This is the disk image encryption base class. */
export interface ComputeGalleryDiskImageEncryption {
  /** A relative URI containing the resource ID of the disk encryption set. */
  diskEncryptionSetId?: string;
}

export function computeGalleryDiskImageEncryptionSerializer(
  item: ComputeGalleryDiskImageEncryption,
): any {
  return { diskEncryptionSetId: item["diskEncryptionSetId"] };
}

export function computeGalleryDiskImageEncryptionDeserializer(
  item: any,
): ComputeGalleryDiskImageEncryption {
  return {
    diskEncryptionSetId: item["diskEncryptionSetId"],
  };
}

/** The gallery artifact version source. */
export interface ComputeGalleryGalleryArtifactVersionSource {
  /** The id of the gallery artifact version source. */
  id?: string;
}

export function computeGalleryGalleryArtifactVersionSourceSerializer(
  item: ComputeGalleryGalleryArtifactVersionSource,
): any {
  return { id: item["id"] };
}

export function computeGalleryGalleryArtifactVersionSourceDeserializer(
  item: any,
): ComputeGalleryGalleryArtifactVersionSource {
  return {
    id: item["id"],
  };
}

/** This is the disk image base class. */
export interface ComputeGalleryGalleryDiskImage {
  /** This property indicates the size of the VHD to be created. */
  readonly sizeInGB?: number;
  /** The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite' */
  hostCaching?: ComputeGalleryHostCaching;
  /** The source for the disk image. */
  source?: ComputeGalleryGalleryDiskImageSource;
}

export function computeGalleryGalleryDiskImageSerializer(
  item: ComputeGalleryGalleryDiskImage,
): any {
  return {
    hostCaching: item["hostCaching"],
    source: !item["source"]
      ? item["source"]
      : computeGalleryGalleryDiskImageSourceSerializer(item["source"]),
  };
}

export function computeGalleryGalleryDiskImageDeserializer(
  item: any,
): ComputeGalleryGalleryDiskImage {
  return {
    sizeInGB: item["sizeInGB"],
    hostCaching: item["hostCaching"],
    source: !item["source"]
      ? item["source"]
      : computeGalleryGalleryDiskImageSourceDeserializer(item["source"]),
  };
}

/** The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite' */
export type ComputeGalleryHostCaching = "None" | "ReadOnly" | "ReadWrite";

/** The source for the disk image. */
export interface ComputeGalleryGalleryDiskImageSource extends ComputeGalleryGalleryArtifactVersionSource {
  /** The uri of the gallery artifact version source. Currently used to specify vhd/blob source. */
  uri?: string;
  /** The Storage Account Id that contains the vhd blob being used as a source for this artifact version. */
  storageAccountId?: string;
}

export function computeGalleryGalleryDiskImageSourceSerializer(
  item: ComputeGalleryGalleryDiskImageSource,
): any {
  return { id: item["id"], uri: item["uri"], storageAccountId: item["storageAccountId"] };
}

export function computeGalleryGalleryDiskImageSourceDeserializer(
  item: any,
): ComputeGalleryGalleryDiskImageSource {
  return {
    id: item["id"],
    uri: item["uri"],
    storageAccountId: item["storageAccountId"],
  };
}

/** This is the safety profile of the Gallery Artifact Version. */
export interface ComputeGalleryGalleryArtifactSafetyProfileBase {
  /** Indicates whether or not removing this Gallery Image Version from replicated regions is allowed. */
  allowDeletionOfReplicatedLocations?: boolean;
}

export function computeGalleryGalleryArtifactSafetyProfileBaseSerializer(
  item: ComputeGalleryGalleryArtifactSafetyProfileBase,
): any {
  return { allowDeletionOfReplicatedLocations: item["allowDeletionOfReplicatedLocations"] };
}

export function computeGalleryGalleryArtifactSafetyProfileBaseDeserializer(
  item: any,
): ComputeGalleryGalleryArtifactSafetyProfileBase {
  return {
    allowDeletionOfReplicatedLocations: item["allowDeletionOfReplicatedLocations"],
  };
}

/** Specifies information about the gallery image version that you want to update. */
export interface ComputeGalleryGalleryImageVersionUpdate extends ComputeGalleryUpdateResourceDefinition {
  /** The publishing profile of a gallery image Version. */
  publishingProfile?: ComputeGalleryGalleryImageVersionPublishingProfile;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: ComputeGalleryGalleryProvisioningState;
  /** This is the storage profile of a Gallery Image Version. */
  storageProfile?: ComputeGalleryGalleryImageVersionStorageProfile;
  /** This is the safety profile of the Gallery Image Version. */
  safetyProfile?: ComputeGalleryGalleryImageVersionSafetyProfile;
  /** This is the replication status of the gallery image version. */
  readonly replicationStatus?: ComputeGalleryReplicationStatus;
  /** The security profile of a gallery image version */
  securityProfile?: ComputeGalleryImageVersionSecurityProfile;
  /** Indicates if this is a soft-delete resource restoration request. */
  restore?: boolean;
  /** This is the validations profile of a Gallery Image Version. */
  readonly validationsProfile?: ComputeGalleryValidationsProfile;
}

export function computeGalleryGalleryImageVersionUpdateSerializer(
  item: ComputeGalleryGalleryImageVersionUpdate,
): any {
  return {
    tags: item["tags"],
    properties: areAllPropsUndefined(item, [
      "publishingProfile",
      "storageProfile",
      "safetyProfile",
      "securityProfile",
      "restore",
    ])
      ? undefined
      : _galleryImageVersionUpdatePropertiesSerializer(item),
  };
}

/** The List Gallery Image version operation response. */
export interface _ComputeGalleryGalleryImageVersionList {
  /** A list of gallery image versions. */
  value: ComputeGalleryGalleryImageVersion[];
  /** The uri to fetch the next page of gallery image versions. Call ListNext() with this to fetch the next page of gallery image versions. */
  nextLink?: string;
}

export function _computeGalleryGalleryImageVersionListDeserializer(
  item: any,
): _ComputeGalleryGalleryImageVersionList {
  return {
    value: computeGalleryGalleryImageVersionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeGalleryGalleryImageVersionArraySerializer(
  result: Array<ComputeGalleryGalleryImageVersion>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryImageVersionSerializer(item);
  });
}

export function computeGalleryGalleryImageVersionArrayDeserializer(
  result: Array<ComputeGalleryGalleryImageVersion>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryImageVersionDeserializer(item);
  });
}

/** Specifies information about the gallery Application Definition that you want to create or update. */
export interface ComputeGalleryGalleryApplication extends TrackedResource {
  /** The description of this gallery Application Definition resource. This property is updatable. */
  description?: string;
  /** The Eula agreement for the gallery Application Definition. */
  eula?: string;
  /** The privacy statement uri. */
  privacyStatementUri?: string;
  /** The release note uri. */
  releaseNoteUri?: string;
  /** The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable. */
  endOfLifeDate?: Date;
  /** This property allows you to specify the supported type of the OS that application is built for. Possible values are: **Windows,** **Linux.** */
  supportedOSType?: CommonOperatingSystemTypes;
  /** A list of custom actions that can be performed with all of the Gallery Application Versions within this Gallery Application. */
  customActions?: ComputeGalleryGalleryApplicationCustomAction[];
}

export function computeGalleryGalleryApplicationSerializer(
  item: ComputeGalleryGalleryApplication,
): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, [
      "description",
      "eula",
      "privacyStatementUri",
      "releaseNoteUri",
      "endOfLifeDate",
      "supportedOSType",
      "customActions",
    ])
      ? undefined
      : _galleryApplicationPropertiesSerializer(item),
  };
}

export function computeGalleryGalleryApplicationDeserializer(
  item: any,
): ComputeGalleryGalleryApplication {
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
      : _galleryApplicationPropertiesDeserializer(item["properties"])),
  };
}

/** Describes the properties of a gallery Application Definition. */
export interface ComputeGalleryGalleryApplicationProperties {
  /** The description of this gallery Application Definition resource. This property is updatable. */
  description?: string;
  /** The Eula agreement for the gallery Application Definition. */
  eula?: string;
  /** The privacy statement uri. */
  privacyStatementUri?: string;
  /** The release note uri. */
  releaseNoteUri?: string;
  /** The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable. */
  endOfLifeDate?: Date;
  /** This property allows you to specify the supported type of the OS that application is built for. Possible values are: **Windows,** **Linux.** */
  supportedOSType: CommonOperatingSystemTypes;
  /** A list of custom actions that can be performed with all of the Gallery Application Versions within this Gallery Application. */
  customActions?: ComputeGalleryGalleryApplicationCustomAction[];
}

export function computeGalleryGalleryApplicationPropertiesSerializer(
  item: ComputeGalleryGalleryApplicationProperties,
): any {
  return {
    description: item["description"],
    eula: item["eula"],
    privacyStatementUri: item["privacyStatementUri"],
    releaseNoteUri: item["releaseNoteUri"],
    endOfLifeDate: !item["endOfLifeDate"]
      ? item["endOfLifeDate"]
      : item["endOfLifeDate"].toISOString(),
    supportedOSType: item["supportedOSType"],
    customActions: !item["customActions"]
      ? item["customActions"]
      : computeGalleryGalleryApplicationCustomActionArraySerializer(item["customActions"]),
  };
}

export function computeGalleryGalleryApplicationPropertiesDeserializer(
  item: any,
): ComputeGalleryGalleryApplicationProperties {
  return {
    description: item["description"],
    eula: item["eula"],
    privacyStatementUri: item["privacyStatementUri"],
    releaseNoteUri: item["releaseNoteUri"],
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    supportedOSType: item["supportedOSType"],
    customActions: !item["customActions"]
      ? item["customActions"]
      : computeGalleryGalleryApplicationCustomActionArrayDeserializer(item["customActions"]),
  };
}

export function computeGalleryGalleryApplicationCustomActionArraySerializer(
  result: Array<ComputeGalleryGalleryApplicationCustomAction>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryApplicationCustomActionSerializer(item);
  });
}

export function computeGalleryGalleryApplicationCustomActionArrayDeserializer(
  result: Array<ComputeGalleryGalleryApplicationCustomAction>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryApplicationCustomActionDeserializer(item);
  });
}

/** A custom action that can be performed with a Gallery Application Version. */
export interface ComputeGalleryGalleryApplicationCustomAction {
  /** The name of the custom action.  Must be unique within the Gallery Application Version. */
  name: string;
  /** The script to run when executing this custom action. */
  script: string;
  /** Description to help the users understand what this custom action does. */
  description?: string;
  /** The parameters that this custom action uses */
  parameters?: ComputeGalleryGalleryApplicationCustomActionParameter[];
}

export function computeGalleryGalleryApplicationCustomActionSerializer(
  item: ComputeGalleryGalleryApplicationCustomAction,
): any {
  return {
    name: item["name"],
    script: item["script"],
    description: item["description"],
    parameters: !item["parameters"]
      ? item["parameters"]
      : computeGalleryGalleryApplicationCustomActionParameterArraySerializer(item["parameters"]),
  };
}

export function computeGalleryGalleryApplicationCustomActionDeserializer(
  item: any,
): ComputeGalleryGalleryApplicationCustomAction {
  return {
    name: item["name"],
    script: item["script"],
    description: item["description"],
    parameters: !item["parameters"]
      ? item["parameters"]
      : computeGalleryGalleryApplicationCustomActionParameterArrayDeserializer(item["parameters"]),
  };
}

export function computeGalleryGalleryApplicationCustomActionParameterArraySerializer(
  result: Array<ComputeGalleryGalleryApplicationCustomActionParameter>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryApplicationCustomActionParameterSerializer(item);
  });
}

export function computeGalleryGalleryApplicationCustomActionParameterArrayDeserializer(
  result: Array<ComputeGalleryGalleryApplicationCustomActionParameter>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryApplicationCustomActionParameterDeserializer(item);
  });
}

/** The definition of a parameter that can be passed to a custom action of a Gallery Application Version. */
export interface ComputeGalleryGalleryApplicationCustomActionParameter {
  /** The name of the custom action.  Must be unique within the Gallery Application Version. */
  name: string;
  /** Indicates whether this parameter must be passed when running the custom action. */
  required?: boolean;
  /** Specifies the type of the custom action parameter. Possible values are: String, ConfigurationDataBlob or LogOutputBlob */
  type?: ComputeGalleryGalleryApplicationCustomActionParameterType;
  /** The default value of the parameter.  Only applies to string types */
  defaultValue?: string;
  /** A description to help users understand what this parameter means */
  description?: string;
}

export function computeGalleryGalleryApplicationCustomActionParameterSerializer(
  item: ComputeGalleryGalleryApplicationCustomActionParameter,
): any {
  return {
    name: item["name"],
    required: item["required"],
    type: item["type"],
    defaultValue: item["defaultValue"],
    description: item["description"],
  };
}

export function computeGalleryGalleryApplicationCustomActionParameterDeserializer(
  item: any,
): ComputeGalleryGalleryApplicationCustomActionParameter {
  return {
    name: item["name"],
    required: item["required"],
    type: item["type"],
    defaultValue: item["defaultValue"],
    description: item["description"],
  };
}

/** Specifies the type of the custom action parameter. Possible values are: String, ConfigurationDataBlob or LogOutputBlob */
export type ComputeGalleryGalleryApplicationCustomActionParameterType =
  | "String"
  | "ConfigurationDataBlob"
  | "LogOutputBlob";

/** Specifies information about the gallery Application Definition that you want to update. */
export interface ComputeGalleryGalleryApplicationUpdate extends ComputeGalleryUpdateResourceDefinition {
  /** The description of this gallery Application Definition resource. This property is updatable. */
  description?: string;
  /** The Eula agreement for the gallery Application Definition. */
  eula?: string;
  /** The privacy statement uri. */
  privacyStatementUri?: string;
  /** The release note uri. */
  releaseNoteUri?: string;
  /** The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable. */
  endOfLifeDate?: Date;
  /** This property allows you to specify the supported type of the OS that application is built for. Possible values are: **Windows,** **Linux.** */
  supportedOSType?: CommonOperatingSystemTypes;
  /** A list of custom actions that can be performed with all of the Gallery Application Versions within this Gallery Application. */
  customActions?: ComputeGalleryGalleryApplicationCustomAction[];
}

export function computeGalleryGalleryApplicationUpdateSerializer(
  item: ComputeGalleryGalleryApplicationUpdate,
): any {
  return {
    tags: item["tags"],
    properties: areAllPropsUndefined(item, [
      "description",
      "eula",
      "privacyStatementUri",
      "releaseNoteUri",
      "endOfLifeDate",
      "supportedOSType",
      "customActions",
    ])
      ? undefined
      : _galleryApplicationUpdatePropertiesSerializer(item),
  };
}

/** The List Gallery Applications operation response. */
export interface _ComputeGalleryGalleryApplicationList {
  /** The GalleryApplication items on this page */
  value: ComputeGalleryGalleryApplication[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _computeGalleryGalleryApplicationListDeserializer(
  item: any,
): _ComputeGalleryGalleryApplicationList {
  return {
    value: computeGalleryGalleryApplicationArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeGalleryGalleryApplicationArraySerializer(
  result: Array<ComputeGalleryGalleryApplication>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryApplicationSerializer(item);
  });
}

export function computeGalleryGalleryApplicationArrayDeserializer(
  result: Array<ComputeGalleryGalleryApplication>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryApplicationDeserializer(item);
  });
}

/** Specifies information about the gallery Application Version that you want to create or update. */
export interface ComputeGalleryGalleryApplicationVersion extends TrackedResource {
  /** The publishing profile of a gallery image version. */
  publishingProfile?: ComputeGalleryGalleryApplicationVersionPublishingProfile;
  /** The safety profile of the Gallery Application Version. */
  safetyProfile?: ComputeGalleryGalleryApplicationVersionSafetyProfile;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: ComputeGalleryGalleryProvisioningState;
  /** This is the replication status of the gallery image version. */
  readonly replicationStatus?: ComputeGalleryReplicationStatus;
}

export function computeGalleryGalleryApplicationVersionSerializer(
  item: ComputeGalleryGalleryApplicationVersion,
): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, ["publishingProfile", "safetyProfile"])
      ? undefined
      : _galleryApplicationVersionPropertiesSerializer(item),
  };
}

export function computeGalleryGalleryApplicationVersionDeserializer(
  item: any,
): ComputeGalleryGalleryApplicationVersion {
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
      : _galleryApplicationVersionPropertiesDeserializer(item["properties"])),
  };
}

/** Describes the properties of a gallery image version. */
export interface ComputeGalleryGalleryApplicationVersionProperties {
  /** The publishing profile of a gallery image version. */
  publishingProfile: ComputeGalleryGalleryApplicationVersionPublishingProfile;
  /** The safety profile of the Gallery Application Version. */
  safetyProfile?: ComputeGalleryGalleryApplicationVersionSafetyProfile;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: ComputeGalleryGalleryProvisioningState;
  /** This is the replication status of the gallery image version. */
  readonly replicationStatus?: ComputeGalleryReplicationStatus;
}

export function computeGalleryGalleryApplicationVersionPropertiesSerializer(
  item: ComputeGalleryGalleryApplicationVersionProperties,
): any {
  return {
    publishingProfile: computeGalleryGalleryApplicationVersionPublishingProfileSerializer(
      item["publishingProfile"],
    ),
    safetyProfile: !item["safetyProfile"]
      ? item["safetyProfile"]
      : computeGalleryGalleryApplicationVersionSafetyProfileSerializer(item["safetyProfile"]),
  };
}

export function computeGalleryGalleryApplicationVersionPropertiesDeserializer(
  item: any,
): ComputeGalleryGalleryApplicationVersionProperties {
  return {
    publishingProfile: computeGalleryGalleryApplicationVersionPublishingProfileDeserializer(
      item["publishingProfile"],
    ),
    safetyProfile: !item["safetyProfile"]
      ? item["safetyProfile"]
      : computeGalleryGalleryApplicationVersionSafetyProfileDeserializer(item["safetyProfile"]),
    provisioningState: item["provisioningState"],
    replicationStatus: !item["replicationStatus"]
      ? item["replicationStatus"]
      : computeGalleryReplicationStatusDeserializer(item["replicationStatus"]),
  };
}

/** The publishing profile of a gallery image version. */
export interface ComputeGalleryGalleryApplicationVersionPublishingProfile extends ComputeGalleryGalleryArtifactPublishingProfileBase {
  /** The source image from which the Image Version is going to be created. */
  source: ComputeGalleryUserArtifactSource;
  manageActions?: ComputeGalleryUserArtifactManage;
  /** Additional settings for the VM app that contains the target package and config file name when it is deployed to target VM or VM scale set. */
  settings?: ComputeGalleryUserArtifactSettings;
  /** Optional. Additional settings to pass to the vm-application-manager extension. For advanced use only. */
  advancedSettings?: Record<string, string>;
  /** Optional. Whether or not this application reports health. */
  enableHealthCheck?: boolean;
  /** A list of custom actions that can be performed with this Gallery Application Version. */
  customActions?: ComputeGalleryGalleryApplicationCustomAction[];
}

export function computeGalleryGalleryApplicationVersionPublishingProfileSerializer(
  item: ComputeGalleryGalleryApplicationVersionPublishingProfile,
): any {
  return {
    targetRegions: !item["targetRegions"]
      ? item["targetRegions"]
      : computeGalleryTargetRegionArraySerializer(item["targetRegions"]),
    replicaCount: item["replicaCount"],
    excludeFromLatest: item["excludeFromLatest"],
    endOfLifeDate: !item["endOfLifeDate"]
      ? item["endOfLifeDate"]
      : item["endOfLifeDate"].toISOString(),
    storageAccountType: item["storageAccountType"],
    replicationMode: item["replicationMode"],
    targetExtendedLocations: !item["targetExtendedLocations"]
      ? item["targetExtendedLocations"]
      : computeGalleryGalleryTargetExtendedLocationArraySerializer(item["targetExtendedLocations"]),
    storageAccountStrategy: item["storageAccountStrategy"],
    source: computeGalleryUserArtifactSourceSerializer(item["source"]),
    manageActions: !item["manageActions"]
      ? item["manageActions"]
      : computeGalleryUserArtifactManageSerializer(item["manageActions"]),
    settings: !item["settings"]
      ? item["settings"]
      : computeGalleryUserArtifactSettingsSerializer(item["settings"]),
    advancedSettings: item["advancedSettings"],
    enableHealthCheck: item["enableHealthCheck"],
    customActions: !item["customActions"]
      ? item["customActions"]
      : computeGalleryGalleryApplicationCustomActionArraySerializer(item["customActions"]),
  };
}

export function computeGalleryGalleryApplicationVersionPublishingProfileDeserializer(
  item: any,
): ComputeGalleryGalleryApplicationVersionPublishingProfile {
  return {
    targetRegions: !item["targetRegions"]
      ? item["targetRegions"]
      : computeGalleryTargetRegionArrayDeserializer(item["targetRegions"]),
    replicaCount: item["replicaCount"],
    excludeFromLatest: item["excludeFromLatest"],
    publishedDate: !item["publishedDate"] ? item["publishedDate"] : new Date(item["publishedDate"]),
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    storageAccountType: item["storageAccountType"],
    replicationMode: item["replicationMode"],
    targetExtendedLocations: !item["targetExtendedLocations"]
      ? item["targetExtendedLocations"]
      : computeGalleryGalleryTargetExtendedLocationArrayDeserializer(
          item["targetExtendedLocations"],
        ),
    storageAccountStrategy: item["storageAccountStrategy"],
    source: computeGalleryUserArtifactSourceDeserializer(item["source"]),
    manageActions: !item["manageActions"]
      ? item["manageActions"]
      : computeGalleryUserArtifactManageDeserializer(item["manageActions"]),
    settings: !item["settings"]
      ? item["settings"]
      : computeGalleryUserArtifactSettingsDeserializer(item["settings"]),
    advancedSettings: !item["advancedSettings"]
      ? item["advancedSettings"]
      : Object.fromEntries(
          Object.entries(item["advancedSettings"]).map(([k, p]: [string, any]) => [k, p]),
        ),
    enableHealthCheck: item["enableHealthCheck"],
    customActions: !item["customActions"]
      ? item["customActions"]
      : computeGalleryGalleryApplicationCustomActionArrayDeserializer(item["customActions"]),
  };
}

/** The source image from which the Image Version is going to be created. */
export interface ComputeGalleryUserArtifactSource {
  /** Required. The mediaLink of the artifact, must be a readable storage page blob. */
  mediaLink: string;
  /** Optional. The defaultConfigurationLink of the artifact, must be a readable storage page blob. */
  defaultConfigurationLink?: string;
}

export function computeGalleryUserArtifactSourceSerializer(
  item: ComputeGalleryUserArtifactSource,
): any {
  return {
    mediaLink: item["mediaLink"],
    defaultConfigurationLink: item["defaultConfigurationLink"],
  };
}

export function computeGalleryUserArtifactSourceDeserializer(
  item: any,
): ComputeGalleryUserArtifactSource {
  return {
    mediaLink: item["mediaLink"],
    defaultConfigurationLink: item["defaultConfigurationLink"],
  };
}

/** model interface ComputeGalleryUserArtifactManage */
export interface ComputeGalleryUserArtifactManage {
  /** Required. The path and arguments to install the gallery application. This is limited to 4096 characters. */
  install: string;
  /** Required. The path and arguments to remove the gallery application. This is limited to 4096 characters. */
  remove: string;
  /** Optional. The path and arguments to update the gallery application. If not present, then update operation will invoke remove command on the previous version and install command on the current version of the gallery application. This is limited to 4096 characters. */
  update?: string;
}

export function computeGalleryUserArtifactManageSerializer(
  item: ComputeGalleryUserArtifactManage,
): any {
  return { install: item["install"], remove: item["remove"], update: item["update"] };
}

export function computeGalleryUserArtifactManageDeserializer(
  item: any,
): ComputeGalleryUserArtifactManage {
  return {
    install: item["install"],
    remove: item["remove"],
    update: item["update"],
  };
}

/** Additional settings for the VM app that contains the target package and config file name when it is deployed to target VM or VM scale set. */
export interface ComputeGalleryUserArtifactSettings {
  /** Optional. The name to assign the downloaded package file on the VM. This is limited to 4096 characters. If not specified, the package file will be named the same as the Gallery Application name. */
  packageFileName?: string;
  /** Optional. The name to assign the downloaded config file on the VM. This is limited to 4096 characters. If not specified, the config file will be named the Gallery Application name appended with "_config". */
  configFileName?: string;
  /** Optional. The action to be taken with regards to install/update/remove of the gallery application in the event of a reboot. */
  scriptBehaviorAfterReboot?: ComputeGalleryGalleryApplicationScriptRebootBehavior;
}

export function computeGalleryUserArtifactSettingsSerializer(
  item: ComputeGalleryUserArtifactSettings,
): any {
  return {
    packageFileName: item["packageFileName"],
    configFileName: item["configFileName"],
    scriptBehaviorAfterReboot: item["scriptBehaviorAfterReboot"],
  };
}

export function computeGalleryUserArtifactSettingsDeserializer(
  item: any,
): ComputeGalleryUserArtifactSettings {
  return {
    packageFileName: item["packageFileName"],
    configFileName: item["configFileName"],
    scriptBehaviorAfterReboot: item["scriptBehaviorAfterReboot"],
  };
}

/** Optional. The action to be taken with regards to install/update/remove of the gallery application in the event of a reboot. */
export enum KnownComputeGalleryGalleryApplicationScriptRebootBehavior {
  /** None */
  None = "None",
  /** Rerun */
  Rerun = "Rerun",
}

/**
 * Optional. The action to be taken with regards to install/update/remove of the gallery application in the event of a reboot. \
 * {@link KnownComputeGalleryGalleryApplicationScriptRebootBehavior} can be used interchangeably with ComputeGalleryGalleryApplicationScriptRebootBehavior,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Rerun**
 */
export type ComputeGalleryGalleryApplicationScriptRebootBehavior = string;

/** The safety profile of the Gallery Application Version. */
export interface ComputeGalleryGalleryApplicationVersionSafetyProfile extends ComputeGalleryGalleryArtifactSafetyProfileBase {}

export function computeGalleryGalleryApplicationVersionSafetyProfileSerializer(
  item: ComputeGalleryGalleryApplicationVersionSafetyProfile,
): any {
  return { allowDeletionOfReplicatedLocations: item["allowDeletionOfReplicatedLocations"] };
}

export function computeGalleryGalleryApplicationVersionSafetyProfileDeserializer(
  item: any,
): ComputeGalleryGalleryApplicationVersionSafetyProfile {
  return {
    allowDeletionOfReplicatedLocations: item["allowDeletionOfReplicatedLocations"],
  };
}

/** Specifies information about the gallery Application Version that you want to update. */
export interface ComputeGalleryGalleryApplicationVersionUpdate extends ComputeGalleryUpdateResourceDefinition {
  /** The publishing profile of a gallery image version. */
  publishingProfile?: ComputeGalleryGalleryApplicationVersionPublishingProfile;
  /** The safety profile of the Gallery Application Version. */
  safetyProfile?: ComputeGalleryGalleryApplicationVersionSafetyProfile;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: ComputeGalleryGalleryProvisioningState;
  /** This is the replication status of the gallery image version. */
  readonly replicationStatus?: ComputeGalleryReplicationStatus;
}

export function computeGalleryGalleryApplicationVersionUpdateSerializer(
  item: ComputeGalleryGalleryApplicationVersionUpdate,
): any {
  return {
    tags: item["tags"],
    properties: areAllPropsUndefined(item, ["publishingProfile", "safetyProfile"])
      ? undefined
      : _galleryApplicationVersionUpdatePropertiesSerializer(item),
  };
}

/** The List Gallery Application version operation response. */
export interface _ComputeGalleryGalleryApplicationVersionList {
  /** A list of gallery Application Versions. */
  value: ComputeGalleryGalleryApplicationVersion[];
  /** The uri to fetch the next page of gallery Application Versions. Call ListNext() with this to fetch the next page of gallery Application Versions. */
  nextLink?: string;
}

export function _computeGalleryGalleryApplicationVersionListDeserializer(
  item: any,
): _ComputeGalleryGalleryApplicationVersionList {
  return {
    value: computeGalleryGalleryApplicationVersionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeGalleryGalleryApplicationVersionArraySerializer(
  result: Array<ComputeGalleryGalleryApplicationVersion>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryApplicationVersionSerializer(item);
  });
}

export function computeGalleryGalleryApplicationVersionArrayDeserializer(
  result: Array<ComputeGalleryGalleryApplicationVersion>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryApplicationVersionDeserializer(item);
  });
}

/** Specifies information about the gallery Script Definition that you want to create or update. */
export interface ComputeGalleryGalleryScript extends TrackedResource {
  /** Describes the properties of a gallery Script Definition. */
  properties?: ComputeGalleryGalleryScriptProperties;
}

export function computeGalleryGalleryScriptSerializer(item: ComputeGalleryGalleryScript): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : computeGalleryGalleryScriptPropertiesSerializer(item["properties"]),
  };
}

export function computeGalleryGalleryScriptDeserializer(item: any): ComputeGalleryGalleryScript {
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
    properties: !item["properties"]
      ? item["properties"]
      : computeGalleryGalleryScriptPropertiesDeserializer(item["properties"]),
  };
}

/** Describes the properties of a gallery script definition. */
export interface ComputeGalleryGalleryScriptProperties {
  /** The description of this gallery script definition resource. This property is updatable. */
  description?: string;
  /** The Eula agreement (End User License Agreement) for the gallery Script Definition. */
  eula?: string;
  /** The privacy statement uri. */
  privacyStatementUri?: string;
  /** The release note uri. */
  releaseNoteUri?: string;
  /** The end of life date of the gallery Script Definition. This property can be used for decommissioning purposes. This property is updatable. */
  endOfLifeDate?: Date;
  /** This property allows you to specify the supported type of the OS that application is built for. Possible values are: **Windows,** **Linux.** */
  supportedOSType: CommonOperatingSystemTypes;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: ComputeGalleryGalleryProvisioningState;
}

export function computeGalleryGalleryScriptPropertiesSerializer(
  item: ComputeGalleryGalleryScriptProperties,
): any {
  return {
    description: item["description"],
    eula: item["eula"],
    privacyStatementUri: item["privacyStatementUri"],
    releaseNoteUri: item["releaseNoteUri"],
    endOfLifeDate: !item["endOfLifeDate"]
      ? item["endOfLifeDate"]
      : item["endOfLifeDate"].toISOString(),
    supportedOSType: item["supportedOSType"],
  };
}

export function computeGalleryGalleryScriptPropertiesDeserializer(
  item: any,
): ComputeGalleryGalleryScriptProperties {
  return {
    description: item["description"],
    eula: item["eula"],
    privacyStatementUri: item["privacyStatementUri"],
    releaseNoteUri: item["releaseNoteUri"],
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    supportedOSType: item["supportedOSType"],
    provisioningState: item["provisioningState"],
  };
}

/** Specifies information about the gallery Script Definition that you want to update. */
export interface ComputeGalleryGalleryScriptUpdate extends ComputeGalleryUpdateResourceDefinition {
  /** The description of this gallery script definition resource. This property is updatable. */
  description?: string;
  /** The Eula agreement (End User License Agreement) for the gallery Script Definition. */
  eula?: string;
  /** The privacy statement uri. */
  privacyStatementUri?: string;
  /** The release note uri. */
  releaseNoteUri?: string;
  /** The end of life date of the gallery Script Definition. This property can be used for decommissioning purposes. This property is updatable. */
  endOfLifeDate?: Date;
  /** This property allows you to specify the supported type of the OS that application is built for. Possible values are: **Windows,** **Linux.** */
  supportedOSType?: CommonOperatingSystemTypes;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: ComputeGalleryGalleryProvisioningState;
}

export function computeGalleryGalleryScriptUpdateSerializer(
  item: ComputeGalleryGalleryScriptUpdate,
): any {
  return {
    tags: item["tags"],
    properties: areAllPropsUndefined(item, [
      "description",
      "eula",
      "privacyStatementUri",
      "releaseNoteUri",
      "endOfLifeDate",
      "supportedOSType",
    ])
      ? undefined
      : _galleryScriptUpdatePropertiesSerializer(item),
  };
}

/** The List Gallery Script operation response. */
export interface _ComputeGalleryGalleryScriptList {
  /** The GalleryScript items on this page */
  value: ComputeGalleryGalleryScript[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _computeGalleryGalleryScriptListDeserializer(
  item: any,
): _ComputeGalleryGalleryScriptList {
  return {
    value: computeGalleryGalleryScriptArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeGalleryGalleryScriptArraySerializer(
  result: Array<ComputeGalleryGalleryScript>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryScriptSerializer(item);
  });
}

export function computeGalleryGalleryScriptArrayDeserializer(
  result: Array<ComputeGalleryGalleryScript>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryScriptDeserializer(item);
  });
}

/** Concrete tracked resource types can be created by aliasing this type using a specific property type. */
export interface ComputeGalleryGalleryScriptVersion extends TrackedResource {
  /** Describes the properties of a gallery Script Version. */
  properties?: ComputeGalleryGalleryScriptVersionProperties;
}

export function computeGalleryGalleryScriptVersionSerializer(
  item: ComputeGalleryGalleryScriptVersion,
): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : computeGalleryGalleryScriptVersionPropertiesSerializer(item["properties"]),
  };
}

export function computeGalleryGalleryScriptVersionDeserializer(
  item: any,
): ComputeGalleryGalleryScriptVersion {
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
    properties: !item["properties"]
      ? item["properties"]
      : computeGalleryGalleryScriptVersionPropertiesDeserializer(item["properties"]),
  };
}

/** Describes the properties of a gallery script version. */
export interface ComputeGalleryGalleryScriptVersionProperties {
  /** The publishing profile of a gallery image version. */
  publishingProfile: ComputeGalleryGalleryScriptVersionPublishingProfile;
  /** The safety profile of the Gallery Script Version. */
  safetyProfile?: ComputeGalleryGalleryScriptVersionSafetyProfile;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: ComputeGalleryGalleryProvisioningState;
  /** This is the replication status of the gallery image version. */
  readonly replicationStatus?: ComputeGalleryReplicationStatus;
}

export function computeGalleryGalleryScriptVersionPropertiesSerializer(
  item: ComputeGalleryGalleryScriptVersionProperties,
): any {
  return {
    publishingProfile: computeGalleryGalleryScriptVersionPublishingProfileSerializer(
      item["publishingProfile"],
    ),
    safetyProfile: !item["safetyProfile"]
      ? item["safetyProfile"]
      : computeGalleryGalleryScriptVersionSafetyProfileSerializer(item["safetyProfile"]),
  };
}

export function computeGalleryGalleryScriptVersionPropertiesDeserializer(
  item: any,
): ComputeGalleryGalleryScriptVersionProperties {
  return {
    publishingProfile: computeGalleryGalleryScriptVersionPublishingProfileDeserializer(
      item["publishingProfile"],
    ),
    safetyProfile: !item["safetyProfile"]
      ? item["safetyProfile"]
      : computeGalleryGalleryScriptVersionSafetyProfileDeserializer(item["safetyProfile"]),
    provisioningState: item["provisioningState"],
    replicationStatus: !item["replicationStatus"]
      ? item["replicationStatus"]
      : computeGalleryReplicationStatusDeserializer(item["replicationStatus"]),
  };
}

/** The publishing profile of a gallery image version. */
export interface ComputeGalleryGalleryScriptVersionPublishingProfile extends ComputeGalleryGalleryArtifactPublishingProfileBase {
  /** The source script from which the Script Version is going to be created. */
  source: ComputeGalleryScriptSource;
}

export function computeGalleryGalleryScriptVersionPublishingProfileSerializer(
  item: ComputeGalleryGalleryScriptVersionPublishingProfile,
): any {
  return {
    targetRegions: !item["targetRegions"]
      ? item["targetRegions"]
      : computeGalleryTargetRegionArraySerializer(item["targetRegions"]),
    replicaCount: item["replicaCount"],
    excludeFromLatest: item["excludeFromLatest"],
    endOfLifeDate: !item["endOfLifeDate"]
      ? item["endOfLifeDate"]
      : item["endOfLifeDate"].toISOString(),
    storageAccountType: item["storageAccountType"],
    replicationMode: item["replicationMode"],
    targetExtendedLocations: !item["targetExtendedLocations"]
      ? item["targetExtendedLocations"]
      : computeGalleryGalleryTargetExtendedLocationArraySerializer(item["targetExtendedLocations"]),
    storageAccountStrategy: item["storageAccountStrategy"],
    source: computeGalleryScriptSourceSerializer(item["source"]),
  };
}

export function computeGalleryGalleryScriptVersionPublishingProfileDeserializer(
  item: any,
): ComputeGalleryGalleryScriptVersionPublishingProfile {
  return {
    targetRegions: !item["targetRegions"]
      ? item["targetRegions"]
      : computeGalleryTargetRegionArrayDeserializer(item["targetRegions"]),
    replicaCount: item["replicaCount"],
    excludeFromLatest: item["excludeFromLatest"],
    publishedDate: !item["publishedDate"] ? item["publishedDate"] : new Date(item["publishedDate"]),
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    storageAccountType: item["storageAccountType"],
    replicationMode: item["replicationMode"],
    targetExtendedLocations: !item["targetExtendedLocations"]
      ? item["targetExtendedLocations"]
      : computeGalleryGalleryTargetExtendedLocationArrayDeserializer(
          item["targetExtendedLocations"],
        ),
    storageAccountStrategy: item["storageAccountStrategy"],
    source: computeGalleryScriptSourceDeserializer(item["source"]),
  };
}

/** The source script from which the Script Version is going to be created. */
export interface ComputeGalleryScriptSource {
  /** Required. The link of the source script, it must be a readable storage blob with SAS URI or publicly accessible URI or managed identity enabled. */
  scriptLink: string;
  /** Optional. Any input parameters that needs to passed to the script and are accessed within the script for its execution. */
  parameters?: ComputeGalleryGalleryScriptParameter[];
}

export function computeGalleryScriptSourceSerializer(item: ComputeGalleryScriptSource): any {
  return {
    scriptLink: item["scriptLink"],
    parameters: !item["parameters"]
      ? item["parameters"]
      : computeGalleryGalleryScriptParameterArraySerializer(item["parameters"]),
  };
}

export function computeGalleryScriptSourceDeserializer(item: any): ComputeGalleryScriptSource {
  return {
    scriptLink: item["scriptLink"],
    parameters: !item["parameters"]
      ? item["parameters"]
      : computeGalleryGalleryScriptParameterArrayDeserializer(item["parameters"]),
  };
}

export function computeGalleryGalleryScriptParameterArraySerializer(
  result: Array<ComputeGalleryGalleryScriptParameter>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryScriptParameterSerializer(item);
  });
}

export function computeGalleryGalleryScriptParameterArrayDeserializer(
  result: Array<ComputeGalleryGalleryScriptParameter>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryScriptParameterDeserializer(item);
  });
}

/** The definition of a parameter that can be passed to a script of a Gallery Script Version. */
export interface ComputeGalleryGalleryScriptParameter extends ComputeGalleryGenericGalleryParameter {
  /** Specifies the type of the Gallery Script parameter. Possible values are: String, Int, Double, Boolean, Enum */
  type?: ComputeGalleryGalleryScriptParameterType;
  /** The minimum value of parameter. */
  minValue?: string;
  /** The minimum value of parameter. */
  maxValue?: string;
  /** A list of permissible values. Only applicable values are from 'enum' values defined in 'GalleryScriptParameter'. */
  enumValues?: string[];
}

export function computeGalleryGalleryScriptParameterSerializer(
  item: ComputeGalleryGalleryScriptParameter,
): any {
  return {
    name: item["name"],
    required: item["required"],
    defaultValue: item["defaultValue"],
    description: item["description"],
    type: item["type"],
    minValue: item["minValue"],
    maxValue: item["maxValue"],
    enumValues: !item["enumValues"]
      ? item["enumValues"]
      : item["enumValues"].map((p: any) => {
          return p;
        }),
  };
}

export function computeGalleryGalleryScriptParameterDeserializer(
  item: any,
): ComputeGalleryGalleryScriptParameter {
  return {
    name: item["name"],
    required: item["required"],
    defaultValue: item["defaultValue"],
    description: item["description"],
    type: item["type"],
    minValue: item["minValue"],
    maxValue: item["maxValue"],
    enumValues: !item["enumValues"]
      ? item["enumValues"]
      : item["enumValues"].map((p: any) => {
          return p;
        }),
  };
}

/** Specifies the type of the Gallery Script parameter. Possible values are: String, Int, Double, Boolean, Enum */
export enum KnownComputeGalleryGalleryScriptParameterType {
  /** String gallery script parameter type */
  String = "String",
  /** Int gallery script parameter type */
  Int = "Int",
  /** Double gallery script parameter type */
  Double = "Double",
  /** Boolean gallery script parameter type */
  Boolean = "Boolean",
  /** Enum gallery script parameter type */
  Enum = "Enum",
}

/**
 * Specifies the type of the Gallery Script parameter. Possible values are: String, Int, Double, Boolean, Enum \
 * {@link KnownComputeGalleryGalleryScriptParameterType} can be used interchangeably with ComputeGalleryGalleryScriptParameterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **String**: String gallery script parameter type \
 * **Int**: Int gallery script parameter type \
 * **Double**: Double gallery script parameter type \
 * **Boolean**: Boolean gallery script parameter type \
 * **Enum**: Enum gallery script parameter type
 */
export type ComputeGalleryGalleryScriptParameterType = string;

/** The safety profile of the Gallery Script Version. */
export interface ComputeGalleryGalleryScriptVersionSafetyProfile extends ComputeGalleryGalleryArtifactSafetyProfileBase {}

export function computeGalleryGalleryScriptVersionSafetyProfileSerializer(
  item: ComputeGalleryGalleryScriptVersionSafetyProfile,
): any {
  return { allowDeletionOfReplicatedLocations: item["allowDeletionOfReplicatedLocations"] };
}

export function computeGalleryGalleryScriptVersionSafetyProfileDeserializer(
  item: any,
): ComputeGalleryGalleryScriptVersionSafetyProfile {
  return {
    allowDeletionOfReplicatedLocations: item["allowDeletionOfReplicatedLocations"],
  };
}

/** The definition of a generic gallery parameter. */
export interface ComputeGalleryGenericGalleryParameter {
  /** The name of the parameter. */
  name: string;
  /** Indicates whether this parameter must be passed. */
  required?: boolean;
  /** The default value of the parameter, only applies to string types. */
  defaultValue?: string;
  /** A description to help users understand what this parameter means */
  description?: string;
}

export function computeGalleryGenericGalleryParameterSerializer(
  item: ComputeGalleryGenericGalleryParameter,
): any {
  return {
    name: item["name"],
    required: item["required"],
    defaultValue: item["defaultValue"],
    description: item["description"],
  };
}

export function computeGalleryGenericGalleryParameterDeserializer(
  item: any,
): ComputeGalleryGenericGalleryParameter {
  return {
    name: item["name"],
    required: item["required"],
    defaultValue: item["defaultValue"],
    description: item["description"],
  };
}

/** Specifies information about the gallery Script Version that you want to update. */
export interface ComputeGalleryGalleryScriptVersionUpdate extends ComputeGalleryUpdateResourceDefinition {
  /** The publishing profile of a gallery image version. */
  publishingProfile?: ComputeGalleryGalleryScriptVersionPublishingProfile;
  /** The safety profile of the Gallery Script Version. */
  safetyProfile?: ComputeGalleryGalleryScriptVersionSafetyProfile;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: ComputeGalleryGalleryProvisioningState;
  /** This is the replication status of the gallery image version. */
  readonly replicationStatus?: ComputeGalleryReplicationStatus;
}

export function computeGalleryGalleryScriptVersionUpdateSerializer(
  item: ComputeGalleryGalleryScriptVersionUpdate,
): any {
  return {
    tags: item["tags"],
    properties: areAllPropsUndefined(item, ["publishingProfile", "safetyProfile"])
      ? undefined
      : _galleryScriptVersionUpdatePropertiesSerializer(item),
  };
}

/** Paged collection of GalleryScriptVersion items */
export interface _ComputeGalleryGalleryScriptVersionList {
  /** The GalleryScriptVersion items on this page */
  value: ComputeGalleryGalleryScriptVersion[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _computeGalleryGalleryScriptVersionListDeserializer(
  item: any,
): _ComputeGalleryGalleryScriptVersionList {
  return {
    value: computeGalleryGalleryScriptVersionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeGalleryGalleryScriptVersionArraySerializer(
  result: Array<ComputeGalleryGalleryScriptVersion>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryScriptVersionSerializer(item);
  });
}

export function computeGalleryGalleryScriptVersionArrayDeserializer(
  result: Array<ComputeGalleryGalleryScriptVersion>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryScriptVersionDeserializer(item);
  });
}

/** Specifies information about the gallery inVMAccessControlProfile that you want to create or update. */
export interface ComputeGalleryGalleryInVMAccessControlProfile extends TrackedResource {
  /** Describes the properties of a gallery inVMAccessControlProfile. */
  properties?: ComputeGalleryGalleryInVMAccessControlProfileProperties;
}

export function computeGalleryGalleryInVMAccessControlProfileSerializer(
  item: ComputeGalleryGalleryInVMAccessControlProfile,
): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : computeGalleryGalleryInVMAccessControlProfilePropertiesSerializer(item["properties"]),
  };
}

export function computeGalleryGalleryInVMAccessControlProfileDeserializer(
  item: any,
): ComputeGalleryGalleryInVMAccessControlProfile {
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
    properties: !item["properties"]
      ? item["properties"]
      : computeGalleryGalleryInVMAccessControlProfilePropertiesDeserializer(item["properties"]),
  };
}

/** Describes the properties of a gallery inVMAccessControlProfile. */
export interface ComputeGalleryGalleryInVMAccessControlProfileProperties extends ComputeGalleryGalleryResourceProfilePropertiesBase {
  /** The description of this gallery inVMAccessControlProfile resources. This property is updatable. */
  description?: string;
  /** This property allows you to specify the OS type of the VMs/VMSS for which this profile can be used against. Possible values are: 'Windows' or 'Linux' */
  osType: CommonOperatingSystemTypes;
  /** This property allows you to specify the Endpoint type for which this profile is defining the access control for. Possible values are: 'WireServer' or 'IMDS' */
  applicableHostEndpoint: ComputeGalleryEndpointTypes;
}

export function computeGalleryGalleryInVMAccessControlProfilePropertiesSerializer(
  item: ComputeGalleryGalleryInVMAccessControlProfileProperties,
): any {
  return {
    description: item["description"],
    osType: item["osType"],
    applicableHostEndpoint: item["applicableHostEndpoint"],
  };
}

export function computeGalleryGalleryInVMAccessControlProfilePropertiesDeserializer(
  item: any,
): ComputeGalleryGalleryInVMAccessControlProfileProperties {
  return {
    provisioningState: item["provisioningState"],
    description: item["description"],
    osType: item["osType"],
    applicableHostEndpoint: item["applicableHostEndpoint"],
  };
}

/** This property allows you to specify the Endpoint type for which this profile is defining the access control for. Possible values are: 'WireServer' or 'IMDS' */
export type ComputeGalleryEndpointTypes = "WireServer" | "IMDS";

/** The properties of a gallery ResourceProfile. */
export interface ComputeGalleryGalleryResourceProfilePropertiesBase {
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: ComputeGalleryGalleryProvisioningState;
}

export function computeGalleryGalleryResourceProfilePropertiesBaseSerializer(
  item: ComputeGalleryGalleryResourceProfilePropertiesBase,
): any {
  return item;
}

export function computeGalleryGalleryResourceProfilePropertiesBaseDeserializer(
  item: any,
): ComputeGalleryGalleryResourceProfilePropertiesBase {
  return {
    provisioningState: item["provisioningState"],
  };
}

/** Specifies information about the gallery inVMAccessControlProfile that you want to update. */
export interface ComputeGalleryGalleryInVMAccessControlProfileUpdate extends ComputeGalleryUpdateResourceDefinition {
  /** Describes the properties of a gallery inVMAccessControlProfile. */
  properties?: ComputeGalleryGalleryInVMAccessControlProfileProperties;
}

export function computeGalleryGalleryInVMAccessControlProfileUpdateSerializer(
  item: ComputeGalleryGalleryInVMAccessControlProfileUpdate,
): any {
  return {
    tags: item["tags"],
    properties: !item["properties"]
      ? item["properties"]
      : computeGalleryGalleryInVMAccessControlProfilePropertiesSerializer(item["properties"]),
  };
}

/** The List Gallery InVMAccessControlProfiles operation response. */
export interface _ComputeGalleryGalleryInVMAccessControlProfileList {
  /** The GalleryInVMAccessControlProfile items on this page */
  value: ComputeGalleryGalleryInVMAccessControlProfile[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _computeGalleryGalleryInVMAccessControlProfileListDeserializer(
  item: any,
): _ComputeGalleryGalleryInVMAccessControlProfileList {
  return {
    value: computeGalleryGalleryInVMAccessControlProfileArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeGalleryGalleryInVMAccessControlProfileArraySerializer(
  result: Array<ComputeGalleryGalleryInVMAccessControlProfile>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryInVMAccessControlProfileSerializer(item);
  });
}

export function computeGalleryGalleryInVMAccessControlProfileArrayDeserializer(
  result: Array<ComputeGalleryGalleryInVMAccessControlProfile>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryInVMAccessControlProfileDeserializer(item);
  });
}

/** Specifies information about the gallery inVMAccessControlProfile version that you want to create or update. */
export interface ComputeGalleryGalleryInVMAccessControlProfileVersion extends TrackedResource {
  /** The target regions where the Resource Profile version is going to be replicated to. This property is updatable. */
  targetLocations?: ComputeGalleryTargetRegion[];
  /** If set to true, Virtual Machines deployed from the latest version of the Resource Profile won't use this Profile version. */
  excludeFromLatest?: boolean;
  /** The timestamp for when the Resource Profile Version is published. */
  readonly publishedDate?: Date;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: ComputeGalleryGalleryProvisioningState;
  /** This is the replication status of the gallery image version. */
  readonly replicationStatus?: ComputeGalleryReplicationStatus;
  /** This property allows you to specify whether the access control rules are in Audit mode, in Enforce mode or Disabled. Possible values are: 'Audit', 'Enforce' or 'Disabled'. */
  mode?: ComputeGalleryAccessControlRulesMode;
  /** This property allows you to specify if the requests will be allowed to access the host endpoints. Possible values are: 'Allow', 'Deny'. */
  defaultAccess?: ComputeGalleryEndpointAccess;
  /** This is the Access Control Rules specification for an inVMAccessControlProfile version. */
  rules?: ComputeGalleryAccessControlRules;
}

export function computeGalleryGalleryInVMAccessControlProfileVersionSerializer(
  item: ComputeGalleryGalleryInVMAccessControlProfileVersion,
): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: areAllPropsUndefined(item, [
      "targetLocations",
      "excludeFromLatest",
      "mode",
      "defaultAccess",
      "rules",
    ])
      ? undefined
      : _galleryInVMAccessControlProfileVersionPropertiesSerializer(item),
  };
}

export function computeGalleryGalleryInVMAccessControlProfileVersionDeserializer(
  item: any,
): ComputeGalleryGalleryInVMAccessControlProfileVersion {
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
      : _galleryInVMAccessControlProfileVersionPropertiesDeserializer(item["properties"])),
  };
}

/** Describes the properties of an inVMAccessControlProfile version. */
export interface ComputeGalleryGalleryInVMAccessControlProfileVersionProperties extends ComputeGalleryGalleryResourceProfileVersionPropertiesBase {
  /** This property allows you to specify whether the access control rules are in Audit mode, in Enforce mode or Disabled. Possible values are: 'Audit', 'Enforce' or 'Disabled'. */
  mode: ComputeGalleryAccessControlRulesMode;
  /** This property allows you to specify if the requests will be allowed to access the host endpoints. Possible values are: 'Allow', 'Deny'. */
  defaultAccess: ComputeGalleryEndpointAccess;
  /** This is the Access Control Rules specification for an inVMAccessControlProfile version. */
  rules?: ComputeGalleryAccessControlRules;
}

export function computeGalleryGalleryInVMAccessControlProfileVersionPropertiesSerializer(
  item: ComputeGalleryGalleryInVMAccessControlProfileVersionProperties,
): any {
  return {
    targetLocations: !item["targetLocations"]
      ? item["targetLocations"]
      : computeGalleryTargetRegionArraySerializer(item["targetLocations"]),
    excludeFromLatest: item["excludeFromLatest"],
    mode: item["mode"],
    defaultAccess: item["defaultAccess"],
    rules: !item["rules"]
      ? item["rules"]
      : computeGalleryAccessControlRulesSerializer(item["rules"]),
  };
}

export function computeGalleryGalleryInVMAccessControlProfileVersionPropertiesDeserializer(
  item: any,
): ComputeGalleryGalleryInVMAccessControlProfileVersionProperties {
  return {
    targetLocations: !item["targetLocations"]
      ? item["targetLocations"]
      : computeGalleryTargetRegionArrayDeserializer(item["targetLocations"]),
    excludeFromLatest: item["excludeFromLatest"],
    publishedDate: !item["publishedDate"] ? item["publishedDate"] : new Date(item["publishedDate"]),
    provisioningState: item["provisioningState"],
    replicationStatus: !item["replicationStatus"]
      ? item["replicationStatus"]
      : computeGalleryReplicationStatusDeserializer(item["replicationStatus"]),
    mode: item["mode"],
    defaultAccess: item["defaultAccess"],
    rules: !item["rules"]
      ? item["rules"]
      : computeGalleryAccessControlRulesDeserializer(item["rules"]),
  };
}

/** This property allows you to specify whether the access control rules are in Audit mode, in Enforce mode or Disabled. Possible values are: 'Audit', 'Enforce' or 'Disabled'. */
export enum KnownComputeGalleryAccessControlRulesMode {
  /** Audit */
  Audit = "Audit",
  /** Enforce */
  Enforce = "Enforce",
  /** Disabled */
  Disabled = "Disabled",
}

/**
 * This property allows you to specify whether the access control rules are in Audit mode, in Enforce mode or Disabled. Possible values are: 'Audit', 'Enforce' or 'Disabled'. \
 * {@link KnownComputeGalleryAccessControlRulesMode} can be used interchangeably with ComputeGalleryAccessControlRulesMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Audit** \
 * **Enforce** \
 * **Disabled**
 */
export type ComputeGalleryAccessControlRulesMode = string;

/** This property allows you to specify if the requests will be allowed to access the host endpoints. Possible values are: 'Allow', 'Deny'. */
export enum KnownComputeGalleryEndpointAccess {
  /** Allow */
  Allow = "Allow",
  /** Deny */
  Deny = "Deny",
}

/**
 * This property allows you to specify if the requests will be allowed to access the host endpoints. Possible values are: 'Allow', 'Deny'. \
 * {@link KnownComputeGalleryEndpointAccess} can be used interchangeably with ComputeGalleryEndpointAccess,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Allow** \
 * **Deny**
 */
export type ComputeGalleryEndpointAccess = string;

/** This is the Access Control Rules specification for an inVMAccessControlProfile version. */
export interface ComputeGalleryAccessControlRules {
  /** A list of privileges. */
  privileges?: ComputeGalleryAccessControlRulesPrivilege[];
  /** A list of roles. */
  roles?: ComputeGalleryAccessControlRulesRole[];
  /** A list of identities. */
  identities?: ComputeGalleryAccessControlRulesIdentity[];
  /** A list of role assignments. */
  roleAssignments?: ComputeGalleryAccessControlRulesRoleAssignment[];
}

export function computeGalleryAccessControlRulesSerializer(
  item: ComputeGalleryAccessControlRules,
): any {
  return {
    privileges: !item["privileges"]
      ? item["privileges"]
      : computeGalleryAccessControlRulesPrivilegeArraySerializer(item["privileges"]),
    roles: !item["roles"]
      ? item["roles"]
      : computeGalleryAccessControlRulesRoleArraySerializer(item["roles"]),
    identities: !item["identities"]
      ? item["identities"]
      : computeGalleryAccessControlRulesIdentityArraySerializer(item["identities"]),
    roleAssignments: !item["roleAssignments"]
      ? item["roleAssignments"]
      : computeGalleryAccessControlRulesRoleAssignmentArraySerializer(item["roleAssignments"]),
  };
}

export function computeGalleryAccessControlRulesDeserializer(
  item: any,
): ComputeGalleryAccessControlRules {
  return {
    privileges: !item["privileges"]
      ? item["privileges"]
      : computeGalleryAccessControlRulesPrivilegeArrayDeserializer(item["privileges"]),
    roles: !item["roles"]
      ? item["roles"]
      : computeGalleryAccessControlRulesRoleArrayDeserializer(item["roles"]),
    identities: !item["identities"]
      ? item["identities"]
      : computeGalleryAccessControlRulesIdentityArrayDeserializer(item["identities"]),
    roleAssignments: !item["roleAssignments"]
      ? item["roleAssignments"]
      : computeGalleryAccessControlRulesRoleAssignmentArrayDeserializer(item["roleAssignments"]),
  };
}

export function computeGalleryAccessControlRulesPrivilegeArraySerializer(
  result: Array<ComputeGalleryAccessControlRulesPrivilege>,
): any[] {
  return result.map((item) => {
    return computeGalleryAccessControlRulesPrivilegeSerializer(item);
  });
}

export function computeGalleryAccessControlRulesPrivilegeArrayDeserializer(
  result: Array<ComputeGalleryAccessControlRulesPrivilege>,
): any[] {
  return result.map((item) => {
    return computeGalleryAccessControlRulesPrivilegeDeserializer(item);
  });
}

/** The properties of an Access Control Rule Privilege. */
export interface ComputeGalleryAccessControlRulesPrivilege {
  /** The name of the privilege. */
  name: string;
  /** The HTTP path corresponding to the privilege. */
  path: string;
  /** The query parameters to match in the path. */
  queryParameters?: Record<string, string>;
}

export function computeGalleryAccessControlRulesPrivilegeSerializer(
  item: ComputeGalleryAccessControlRulesPrivilege,
): any {
  return { name: item["name"], path: item["path"], queryParameters: item["queryParameters"] };
}

export function computeGalleryAccessControlRulesPrivilegeDeserializer(
  item: any,
): ComputeGalleryAccessControlRulesPrivilege {
  return {
    name: item["name"],
    path: item["path"],
    queryParameters: !item["queryParameters"]
      ? item["queryParameters"]
      : Object.fromEntries(
          Object.entries(item["queryParameters"]).map(([k, p]: [string, any]) => [k, p]),
        ),
  };
}

export function computeGalleryAccessControlRulesRoleArraySerializer(
  result: Array<ComputeGalleryAccessControlRulesRole>,
): any[] {
  return result.map((item) => {
    return computeGalleryAccessControlRulesRoleSerializer(item);
  });
}

export function computeGalleryAccessControlRulesRoleArrayDeserializer(
  result: Array<ComputeGalleryAccessControlRulesRole>,
): any[] {
  return result.map((item) => {
    return computeGalleryAccessControlRulesRoleDeserializer(item);
  });
}

/** The properties of an Access Control Rule Role. */
export interface ComputeGalleryAccessControlRulesRole {
  /** The name of the role. */
  name: string;
  /** A list of privileges needed by this role. */
  privileges: string[];
}

export function computeGalleryAccessControlRulesRoleSerializer(
  item: ComputeGalleryAccessControlRulesRole,
): any {
  return {
    name: item["name"],
    privileges: item["privileges"].map((p: any) => {
      return p;
    }),
  };
}

export function computeGalleryAccessControlRulesRoleDeserializer(
  item: any,
): ComputeGalleryAccessControlRulesRole {
  return {
    name: item["name"],
    privileges: item["privileges"].map((p: any) => {
      return p;
    }),
  };
}

export function computeGalleryAccessControlRulesIdentityArraySerializer(
  result: Array<ComputeGalleryAccessControlRulesIdentity>,
): any[] {
  return result.map((item) => {
    return computeGalleryAccessControlRulesIdentitySerializer(item);
  });
}

export function computeGalleryAccessControlRulesIdentityArrayDeserializer(
  result: Array<ComputeGalleryAccessControlRulesIdentity>,
): any[] {
  return result.map((item) => {
    return computeGalleryAccessControlRulesIdentityDeserializer(item);
  });
}

/** The properties of an Access Control Rule Identity. */
export interface ComputeGalleryAccessControlRulesIdentity {
  /** The name of the identity. */
  name: string;
  /** The username corresponding to this identity. */
  userName?: string;
  /** The groupName corresponding to this identity. */
  groupName?: string;
  /** The path to the executable. */
  exePath?: string;
  /** The process name of the executable. */
  processName?: string;
}

export function computeGalleryAccessControlRulesIdentitySerializer(
  item: ComputeGalleryAccessControlRulesIdentity,
): any {
  return {
    name: item["name"],
    userName: item["userName"],
    groupName: item["groupName"],
    exePath: item["exePath"],
    processName: item["processName"],
  };
}

export function computeGalleryAccessControlRulesIdentityDeserializer(
  item: any,
): ComputeGalleryAccessControlRulesIdentity {
  return {
    name: item["name"],
    userName: item["userName"],
    groupName: item["groupName"],
    exePath: item["exePath"],
    processName: item["processName"],
  };
}

export function computeGalleryAccessControlRulesRoleAssignmentArraySerializer(
  result: Array<ComputeGalleryAccessControlRulesRoleAssignment>,
): any[] {
  return result.map((item) => {
    return computeGalleryAccessControlRulesRoleAssignmentSerializer(item);
  });
}

export function computeGalleryAccessControlRulesRoleAssignmentArrayDeserializer(
  result: Array<ComputeGalleryAccessControlRulesRoleAssignment>,
): any[] {
  return result.map((item) => {
    return computeGalleryAccessControlRulesRoleAssignmentDeserializer(item);
  });
}

/** The properties of an Access Control Rule RoleAssignment. */
export interface ComputeGalleryAccessControlRulesRoleAssignment {
  /** The name of the role. */
  role: string;
  /** A list of identities that can access the privileges defined by the role. */
  identities: string[];
}

export function computeGalleryAccessControlRulesRoleAssignmentSerializer(
  item: ComputeGalleryAccessControlRulesRoleAssignment,
): any {
  return {
    role: item["role"],
    identities: item["identities"].map((p: any) => {
      return p;
    }),
  };
}

export function computeGalleryAccessControlRulesRoleAssignmentDeserializer(
  item: any,
): ComputeGalleryAccessControlRulesRoleAssignment {
  return {
    role: item["role"],
    identities: item["identities"].map((p: any) => {
      return p;
    }),
  };
}

/** The properties of a gallery ResourceProfile version. */
export interface ComputeGalleryGalleryResourceProfileVersionPropertiesBase {
  /** The target regions where the Resource Profile version is going to be replicated to. This property is updatable. */
  targetLocations?: ComputeGalleryTargetRegion[];
  /** If set to true, Virtual Machines deployed from the latest version of the Resource Profile won't use this Profile version. */
  excludeFromLatest?: boolean;
  /** The timestamp for when the Resource Profile Version is published. */
  readonly publishedDate?: Date;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: ComputeGalleryGalleryProvisioningState;
  /** This is the replication status of the gallery image version. */
  readonly replicationStatus?: ComputeGalleryReplicationStatus;
}

export function computeGalleryGalleryResourceProfileVersionPropertiesBaseSerializer(
  item: ComputeGalleryGalleryResourceProfileVersionPropertiesBase,
): any {
  return {
    targetLocations: !item["targetLocations"]
      ? item["targetLocations"]
      : computeGalleryTargetRegionArraySerializer(item["targetLocations"]),
    excludeFromLatest: item["excludeFromLatest"],
  };
}

export function computeGalleryGalleryResourceProfileVersionPropertiesBaseDeserializer(
  item: any,
): ComputeGalleryGalleryResourceProfileVersionPropertiesBase {
  return {
    targetLocations: !item["targetLocations"]
      ? item["targetLocations"]
      : computeGalleryTargetRegionArrayDeserializer(item["targetLocations"]),
    excludeFromLatest: item["excludeFromLatest"],
    publishedDate: !item["publishedDate"] ? item["publishedDate"] : new Date(item["publishedDate"]),
    provisioningState: item["provisioningState"],
    replicationStatus: !item["replicationStatus"]
      ? item["replicationStatus"]
      : computeGalleryReplicationStatusDeserializer(item["replicationStatus"]),
  };
}

/** Specifies information about the gallery inVMAccessControlProfile version that you want to update. */
export interface ComputeGalleryGalleryInVMAccessControlProfileVersionUpdate extends ComputeGalleryUpdateResourceDefinition {
  /** The target regions where the Resource Profile version is going to be replicated to. This property is updatable. */
  targetLocations?: ComputeGalleryTargetRegion[];
  /** If set to true, Virtual Machines deployed from the latest version of the Resource Profile won't use this Profile version. */
  excludeFromLatest?: boolean;
  /** The timestamp for when the Resource Profile Version is published. */
  readonly publishedDate?: Date;
  /** The provisioning state, which only appears in the response. */
  readonly provisioningState?: ComputeGalleryGalleryProvisioningState;
  /** This is the replication status of the gallery image version. */
  readonly replicationStatus?: ComputeGalleryReplicationStatus;
  /** This property allows you to specify whether the access control rules are in Audit mode, in Enforce mode or Disabled. Possible values are: 'Audit', 'Enforce' or 'Disabled'. */
  mode?: ComputeGalleryAccessControlRulesMode;
  /** This property allows you to specify if the requests will be allowed to access the host endpoints. Possible values are: 'Allow', 'Deny'. */
  defaultAccess?: ComputeGalleryEndpointAccess;
  /** This is the Access Control Rules specification for an inVMAccessControlProfile version. */
  rules?: ComputeGalleryAccessControlRules;
}

export function computeGalleryGalleryInVMAccessControlProfileVersionUpdateSerializer(
  item: ComputeGalleryGalleryInVMAccessControlProfileVersionUpdate,
): any {
  return {
    tags: item["tags"],
    properties: areAllPropsUndefined(item, [
      "targetLocations",
      "excludeFromLatest",
      "mode",
      "defaultAccess",
      "rules",
    ])
      ? undefined
      : _galleryInVMAccessControlProfileVersionUpdatePropertiesSerializer(item),
  };
}

/** The List Gallery InVMAccessControlProfile Versions operation response. */
export interface _ComputeGalleryGalleryInVMAccessControlProfileVersionList {
  /** The GalleryInVMAccessControlProfileVersion items on this page */
  value: ComputeGalleryGalleryInVMAccessControlProfileVersion[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _computeGalleryGalleryInVMAccessControlProfileVersionListDeserializer(
  item: any,
): _ComputeGalleryGalleryInVMAccessControlProfileVersionList {
  return {
    value: computeGalleryGalleryInVMAccessControlProfileVersionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeGalleryGalleryInVMAccessControlProfileVersionArraySerializer(
  result: Array<ComputeGalleryGalleryInVMAccessControlProfileVersion>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryInVMAccessControlProfileVersionSerializer(item);
  });
}

export function computeGalleryGalleryInVMAccessControlProfileVersionArrayDeserializer(
  result: Array<ComputeGalleryGalleryInVMAccessControlProfileVersion>,
): any[] {
  return result.map((item) => {
    return computeGalleryGalleryInVMAccessControlProfileVersionDeserializer(item);
  });
}

/** Specifies information about the Shared Gallery that you want to create or update. */
export interface ComputeGallerySharedGallery extends ComputeGalleryPirSharedGalleryResource {
  /** The artifact tags of a shared gallery resource. */
  readonly artifactTags?: Record<string, string>;
}

export function computeGallerySharedGalleryDeserializer(item: any): ComputeGallerySharedGallery {
  return {
    ...(!item["identifier"]
      ? item["identifier"]
      : _pirSharedGalleryResourceIdentifierDeserializer(item["identifier"])),
    name: item["name"],
    location: item["location"],
    ...(!item["properties"]
      ? item["properties"]
      : _sharedGalleryPropertiesDeserializer(item["properties"])),
  };
}

/** Specifies the properties of a shared gallery */
export interface ComputeGallerySharedGalleryProperties {
  /** The artifact tags of a shared gallery resource. */
  readonly artifactTags?: Record<string, string>;
}

export function computeGallerySharedGalleryPropertiesDeserializer(
  item: any,
): ComputeGallerySharedGalleryProperties {
  return {
    artifactTags: !item["artifactTags"]
      ? item["artifactTags"]
      : Object.fromEntries(
          Object.entries(item["artifactTags"]).map(([k, p]: [string, any]) => [k, p]),
        ),
  };
}

/** Base information about the shared gallery resource in pir. */
export interface ComputeGalleryPirSharedGalleryResource extends ComputeGalleryPirResource {
  /** The unique id of this shared gallery. */
  uniqueId?: string;
}

export function computeGalleryPirSharedGalleryResourceDeserializer(
  item: any,
): ComputeGalleryPirSharedGalleryResource {
  return {
    name: item["name"],
    location: item["location"],
    ...(!item["identifier"]
      ? item["identifier"]
      : _pirSharedGalleryResourceIdentifierDeserializer(item["identifier"])),
  };
}

/** The identifier information of shared gallery. */
export interface ComputeGallerySharedGalleryIdentifier {
  /** The unique id of this shared gallery. */
  uniqueId?: string;
}

export function computeGallerySharedGalleryIdentifierDeserializer(
  item: any,
): ComputeGallerySharedGalleryIdentifier {
  return {
    uniqueId: item["uniqueId"],
  };
}

/** The Resource model definition. */
export interface ComputeGalleryPirResource {
  /** Resource name */
  readonly name?: string;
  /** Resource location */
  readonly location?: string;
}

export function computeGalleryPirResourceDeserializer(item: any): ComputeGalleryPirResource {
  return {
    name: item["name"],
    location: item["location"],
  };
}

/** The List Shared Galleries operation response. */
export interface _ComputeGallerySharedGalleryList {
  /** A list of shared galleries. */
  value: ComputeGallerySharedGallery[];
  /** The uri to fetch the next page of shared galleries. Call ListNext() with this to fetch the next page of shared galleries. */
  nextLink?: string;
}

export function _computeGallerySharedGalleryListDeserializer(
  item: any,
): _ComputeGallerySharedGalleryList {
  return {
    value: computeGallerySharedGalleryArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeGallerySharedGalleryArrayDeserializer(
  result: Array<ComputeGallerySharedGallery>,
): any[] {
  return result.map((item) => {
    return computeGallerySharedGalleryDeserializer(item);
  });
}

/** Specifies information about the gallery image definition that you want to create or update. */
export interface ComputeGallerySharedGalleryImage extends ComputeGalleryPirSharedGalleryResource {
  /** This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. Possible values are: **Windows,** **Linux.** */
  osType?: CommonOperatingSystemTypes;
  /** This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'. */
  osState?: CommonOperatingSystemStateTypes;
  /** The end of life date of the gallery image definition. This property can be used for decommissioning purposes. This property is updatable. */
  endOfLifeDate?: Date;
  /** This is the gallery image definition identifier. */
  identifier?: ComputeGalleryGalleryImageIdentifier;
  /** The properties describe the recommended machine configuration for this Image Definition. These properties are updatable. */
  recommended?: ComputeGalleryRecommendedMachineConfiguration;
  /** Describes the disallowed disk types. */
  disallowed?: ComputeGalleryDisallowed;
  /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
  hyperVGeneration?: CommonHyperVGeneration;
  /** A list of gallery image features. */
  features?: ComputeGalleryGalleryImageFeature[];
  /** Describes the gallery image definition purchase plan. This is used by marketplace images. */
  purchasePlan?: ComputeGalleryImagePurchasePlan;
  /** The architecture of the image. Applicable to OS disks only. */
  architecture?: CommonArchitecture;
  /** Privacy statement uri for the current community gallery image. */
  privacyStatementUri?: string;
  /** End-user license agreement for the current community gallery image. */
  eula?: string;
  /** The artifact tags of a shared gallery resource. */
  artifactTags?: Record<string, string>;
}

export function computeGallerySharedGalleryImageDeserializer(
  item: any,
): ComputeGallerySharedGalleryImage {
  return {
    ...(!item["identifier"]
      ? item["identifier"]
      : _pirSharedGalleryResourceIdentifierDeserializer(item["identifier"])),
    name: item["name"],
    location: item["location"],
    ...(!item["properties"]
      ? item["properties"]
      : _sharedGalleryImagePropertiesDeserializer(item["properties"])),
  };
}

/** Describes the properties of a gallery image definition. */
export interface ComputeGallerySharedGalleryImageProperties {
  /** This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. Possible values are: **Windows,** **Linux.** */
  osType: CommonOperatingSystemTypes;
  /** This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'. */
  osState: CommonOperatingSystemStateTypes;
  /** The end of life date of the gallery image definition. This property can be used for decommissioning purposes. This property is updatable. */
  endOfLifeDate?: Date;
  /** This is the gallery image definition identifier. */
  identifier: ComputeGalleryGalleryImageIdentifier;
  /** The properties describe the recommended machine configuration for this Image Definition. These properties are updatable. */
  recommended?: ComputeGalleryRecommendedMachineConfiguration;
  /** Describes the disallowed disk types. */
  disallowed?: ComputeGalleryDisallowed;
  /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
  hyperVGeneration?: CommonHyperVGeneration;
  /** A list of gallery image features. */
  features?: ComputeGalleryGalleryImageFeature[];
  /** Describes the gallery image definition purchase plan. This is used by marketplace images. */
  purchasePlan?: ComputeGalleryImagePurchasePlan;
  /** The architecture of the image. Applicable to OS disks only. */
  architecture?: CommonArchitecture;
  /** Privacy statement uri for the current community gallery image. */
  privacyStatementUri?: string;
  /** End-user license agreement for the current community gallery image. */
  eula?: string;
  /** The artifact tags of a shared gallery resource. */
  artifactTags?: Record<string, string>;
}

export function computeGallerySharedGalleryImagePropertiesDeserializer(
  item: any,
): ComputeGallerySharedGalleryImageProperties {
  return {
    osType: item["osType"],
    osState: item["osState"],
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    identifier: computeGalleryGalleryImageIdentifierDeserializer(item["identifier"]),
    recommended: !item["recommended"]
      ? item["recommended"]
      : computeGalleryRecommendedMachineConfigurationDeserializer(item["recommended"]),
    disallowed: !item["disallowed"]
      ? item["disallowed"]
      : computeGalleryDisallowedDeserializer(item["disallowed"]),
    hyperVGeneration: item["hyperVGeneration"],
    features: !item["features"]
      ? item["features"]
      : computeGalleryGalleryImageFeatureArrayDeserializer(item["features"]),
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeGalleryImagePurchasePlanDeserializer(item["purchasePlan"]),
    architecture: item["architecture"],
    privacyStatementUri: item["privacyStatementUri"],
    eula: item["eula"],
    artifactTags: !item["artifactTags"]
      ? item["artifactTags"]
      : Object.fromEntries(
          Object.entries(item["artifactTags"]).map(([k, p]: [string, any]) => [k, p]),
        ),
  };
}

/** The List Shared Gallery Images operation response. */
export interface _ComputeGallerySharedGalleryImageList {
  /** A list of shared gallery images. */
  value: ComputeGallerySharedGalleryImage[];
  /** The uri to fetch the next page of shared gallery images. Call ListNext() with this to fetch the next page of shared gallery images. */
  nextLink?: string;
}

export function _computeGallerySharedGalleryImageListDeserializer(
  item: any,
): _ComputeGallerySharedGalleryImageList {
  return {
    value: computeGallerySharedGalleryImageArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeGallerySharedGalleryImageArrayDeserializer(
  result: Array<ComputeGallerySharedGalleryImage>,
): any[] {
  return result.map((item) => {
    return computeGallerySharedGalleryImageDeserializer(item);
  });
}

/** Specifies information about the gallery image version that you want to create or update. */
export interface ComputeGallerySharedGalleryImageVersion extends ComputeGalleryPirSharedGalleryResource {
  /** The published date of the gallery image version Definition. This property can be used for decommissioning purposes. This property is updatable. */
  publishedDate?: Date;
  /** The end of life date of the gallery image version Definition. This property can be used for decommissioning purposes. This property is updatable. */
  endOfLifeDate?: Date;
  /** If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version. */
  excludeFromLatest?: boolean;
  /** Describes the storage profile of the image version. */
  storageProfile?: ComputeGallerySharedGalleryImageVersionStorageProfile;
  /** The artifact tags of a shared gallery resource. */
  artifactTags?: Record<string, string>;
}

export function computeGallerySharedGalleryImageVersionDeserializer(
  item: any,
): ComputeGallerySharedGalleryImageVersion {
  return {
    ...(!item["identifier"]
      ? item["identifier"]
      : _pirSharedGalleryResourceIdentifierDeserializer(item["identifier"])),
    name: item["name"],
    location: item["location"],
    ...(!item["properties"]
      ? item["properties"]
      : _sharedGalleryImageVersionPropertiesDeserializer(item["properties"])),
  };
}

/** Describes the properties of a gallery image version. */
export interface ComputeGallerySharedGalleryImageVersionProperties {
  /** The published date of the gallery image version Definition. This property can be used for decommissioning purposes. This property is updatable. */
  publishedDate?: Date;
  /** The end of life date of the gallery image version Definition. This property can be used for decommissioning purposes. This property is updatable. */
  endOfLifeDate?: Date;
  /** If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version. */
  excludeFromLatest?: boolean;
  /** Describes the storage profile of the image version. */
  storageProfile?: ComputeGallerySharedGalleryImageVersionStorageProfile;
  /** The artifact tags of a shared gallery resource. */
  artifactTags?: Record<string, string>;
}

export function computeGallerySharedGalleryImageVersionPropertiesDeserializer(
  item: any,
): ComputeGallerySharedGalleryImageVersionProperties {
  return {
    publishedDate: !item["publishedDate"] ? item["publishedDate"] : new Date(item["publishedDate"]),
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    excludeFromLatest: item["excludeFromLatest"],
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeGallerySharedGalleryImageVersionStorageProfileDeserializer(item["storageProfile"]),
    artifactTags: !item["artifactTags"]
      ? item["artifactTags"]
      : Object.fromEntries(
          Object.entries(item["artifactTags"]).map(([k, p]: [string, any]) => [k, p]),
        ),
  };
}

/** This is the storage profile of a Gallery Image Version. */
export interface ComputeGallerySharedGalleryImageVersionStorageProfile {
  /** This is the OS disk image. */
  osDiskImage?: ComputeGallerySharedGalleryOSDiskImage;
  /** A list of data disk images. */
  dataDiskImages?: ComputeGallerySharedGalleryDataDiskImage[];
}

export function computeGallerySharedGalleryImageVersionStorageProfileDeserializer(
  item: any,
): ComputeGallerySharedGalleryImageVersionStorageProfile {
  return {
    osDiskImage: !item["osDiskImage"]
      ? item["osDiskImage"]
      : computeGallerySharedGalleryOSDiskImageDeserializer(item["osDiskImage"]),
    dataDiskImages: !item["dataDiskImages"]
      ? item["dataDiskImages"]
      : computeGallerySharedGalleryDataDiskImageArrayDeserializer(item["dataDiskImages"]),
  };
}

/** This is the OS disk image. */
export interface ComputeGallerySharedGalleryOSDiskImage extends ComputeGallerySharedGalleryDiskImage {}

export function computeGallerySharedGalleryOSDiskImageDeserializer(
  item: any,
): ComputeGallerySharedGalleryOSDiskImage {
  return {
    diskSizeGB: item["diskSizeGB"],
    hostCaching: item["hostCaching"],
  };
}

export function computeGallerySharedGalleryDataDiskImageArrayDeserializer(
  result: Array<ComputeGallerySharedGalleryDataDiskImage>,
): any[] {
  return result.map((item) => {
    return computeGallerySharedGalleryDataDiskImageDeserializer(item);
  });
}

/** This is the data disk image. */
export interface ComputeGallerySharedGalleryDataDiskImage extends ComputeGallerySharedGalleryDiskImage {
  /** This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine. */
  lun: number;
}

export function computeGallerySharedGalleryDataDiskImageDeserializer(
  item: any,
): ComputeGallerySharedGalleryDataDiskImage {
  return {
    diskSizeGB: item["diskSizeGB"],
    hostCaching: item["hostCaching"],
    lun: item["lun"],
  };
}

/** This is the disk image base class. */
export interface ComputeGallerySharedGalleryDiskImage {
  /** This property indicates the size of the VHD to be created. */
  readonly diskSizeGB?: number;
  /** The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite' */
  hostCaching?: ComputeGallerySharedGalleryHostCaching;
}

export function computeGallerySharedGalleryDiskImageDeserializer(
  item: any,
): ComputeGallerySharedGalleryDiskImage {
  return {
    diskSizeGB: item["diskSizeGB"],
    hostCaching: item["hostCaching"],
  };
}

/** The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite' */
export enum KnownComputeGallerySharedGalleryHostCaching {
  /** None */
  None = "None",
  /** ReadOnly */
  ReadOnly = "ReadOnly",
  /** ReadWrite */
  ReadWrite = "ReadWrite",
}

/**
 * The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite' \
 * {@link KnownComputeGallerySharedGalleryHostCaching} can be used interchangeably with ComputeGallerySharedGalleryHostCaching,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **ReadOnly** \
 * **ReadWrite**
 */
export type ComputeGallerySharedGalleryHostCaching = string;

/** The List Shared Gallery Image versions operation response. */
export interface _ComputeGallerySharedGalleryImageVersionList {
  /** The SharedGalleryImageVersion items on this page */
  value: ComputeGallerySharedGalleryImageVersion[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _computeGallerySharedGalleryImageVersionListDeserializer(
  item: any,
): _ComputeGallerySharedGalleryImageVersionList {
  return {
    value: computeGallerySharedGalleryImageVersionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeGallerySharedGalleryImageVersionArrayDeserializer(
  result: Array<ComputeGallerySharedGalleryImageVersion>,
): any[] {
  return result.map((item) => {
    return computeGallerySharedGalleryImageVersionDeserializer(item);
  });
}

/** Specifies information about the Community Gallery that you want to create or update. */
export interface ComputeGalleryCommunityGallery extends ComputeGalleryPirCommunityGalleryResource {
  /** The disclaimer for a community gallery resource. */
  disclaimer?: string;
  /** The artifact tags of a community gallery resource. */
  artifactTags?: Record<string, string>;
  /** The metadata of community gallery. */
  communityMetadata?: ComputeGalleryCommunityGalleryMetadata;
}

export function computeGalleryCommunityGalleryDeserializer(
  item: any,
): ComputeGalleryCommunityGallery {
  return {
    name: item["name"],
    location: item["location"],
    type: item["type"],
    ...(!item["identifier"]
      ? item["identifier"]
      : _pirCommunityGalleryResourceIdentifierDeserializer(item["identifier"])),
    ...(!item["properties"]
      ? item["properties"]
      : _communityGalleryPropertiesDeserializer(item["properties"])),
  };
}

/** Describes the properties of a community gallery. */
export interface ComputeGalleryCommunityGalleryProperties {
  /** The disclaimer for a community gallery resource. */
  disclaimer?: string;
  /** The artifact tags of a community gallery resource. */
  artifactTags?: Record<string, string>;
  /** The metadata of community gallery. */
  communityMetadata?: ComputeGalleryCommunityGalleryMetadata;
}

export function computeGalleryCommunityGalleryPropertiesDeserializer(
  item: any,
): ComputeGalleryCommunityGalleryProperties {
  return {
    disclaimer: item["disclaimer"],
    artifactTags: !item["artifactTags"]
      ? item["artifactTags"]
      : Object.fromEntries(
          Object.entries(item["artifactTags"]).map(([k, p]: [string, any]) => [k, p]),
        ),
    communityMetadata: !item["communityMetadata"]
      ? item["communityMetadata"]
      : computeGalleryCommunityGalleryMetadataDeserializer(item["communityMetadata"]),
  };
}

/** The metadata of community gallery. */
export interface ComputeGalleryCommunityGalleryMetadata {
  /** The publisher URI of this community gallery. */
  publisherUri?: string;
  /** The publisher email id of this community gallery. */
  publisherContact: string;
  /** The end-user license agreement for this community gallery. */
  eula?: string;
  /** A list of public names the gallery has. */
  publicNames: string[];
  /** The link for the privacy statement of this community gallery from the gallery publisher. */
  privacyStatementUri?: string;
}

export function computeGalleryCommunityGalleryMetadataDeserializer(
  item: any,
): ComputeGalleryCommunityGalleryMetadata {
  return {
    publisherUri: item["publisherUri"],
    publisherContact: item["publisherContact"],
    eula: item["eula"],
    publicNames: item["publicNames"].map((p: any) => {
      return p;
    }),
    privacyStatementUri: item["privacyStatementUri"],
  };
}

/** Base information about the community gallery resource in azure compute gallery. */
export interface ComputeGalleryPirCommunityGalleryResource {
  /** Resource name */
  readonly name?: string;
  /** Resource location */
  readonly location?: string;
  /** Resource type */
  readonly type?: string;
  /** The unique id of this community gallery. */
  uniqueId?: string;
}

export function computeGalleryPirCommunityGalleryResourceDeserializer(
  item: any,
): ComputeGalleryPirCommunityGalleryResource {
  return {
    name: item["name"],
    location: item["location"],
    type: item["type"],
    ...(!item["identifier"]
      ? item["identifier"]
      : _pirCommunityGalleryResourceIdentifierDeserializer(item["identifier"])),
  };
}

/** The identifier information of community gallery. */
export interface ComputeGalleryCommunityGalleryIdentifier {
  /** The unique id of this community gallery. */
  uniqueId?: string;
}

export function computeGalleryCommunityGalleryIdentifierDeserializer(
  item: any,
): ComputeGalleryCommunityGalleryIdentifier {
  return {
    uniqueId: item["uniqueId"],
  };
}

/** Specifies information about the gallery image definition that you want to create or update. */
export interface ComputeGalleryCommunityGalleryImage extends ComputeGalleryPirCommunityGalleryResource {
  /** This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. Possible values are: **Windows,** **Linux.** */
  osType?: CommonOperatingSystemTypes;
  /** This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'. */
  osState?: CommonOperatingSystemStateTypes;
  /** The end of life date of the gallery image definition. This property can be used for decommissioning purposes. This property is updatable. */
  endOfLifeDate?: Date;
  /** This is the community gallery image definition identifier. */
  identifier?: ComputeGalleryCommunityGalleryImageIdentifier;
  /** The properties describe the recommended machine configuration for this Image Definition. These properties are updatable. */
  recommended?: ComputeGalleryRecommendedMachineConfiguration;
  /** Describes the disallowed disk types. */
  disallowed?: ComputeGalleryDisallowed;
  /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
  hyperVGeneration?: CommonHyperVGeneration;
  /** A list of gallery image features. */
  features?: ComputeGalleryGalleryImageFeature[];
  /** Describes the gallery image definition purchase plan. This is used by marketplace images. */
  purchasePlan?: ComputeGalleryImagePurchasePlan;
  /** The architecture of the image. Applicable to OS disks only. */
  architecture?: CommonArchitecture;
  /** Privacy statement URI for the current community gallery image. */
  privacyStatementUri?: string;
  /** The end-user license agreement for the current community gallery image. */
  eula?: string;
  /** The disclaimer for a community gallery resource. */
  disclaimer?: string;
  /** The artifact tags of a community gallery resource. */
  artifactTags?: Record<string, string>;
}

export function computeGalleryCommunityGalleryImageDeserializer(
  item: any,
): ComputeGalleryCommunityGalleryImage {
  return {
    name: item["name"],
    location: item["location"],
    type: item["type"],
    ...(!item["identifier"]
      ? item["identifier"]
      : _pirCommunityGalleryResourceIdentifierDeserializer(item["identifier"])),
    ...(!item["properties"]
      ? item["properties"]
      : _communityGalleryImagePropertiesDeserializer(item["properties"])),
  };
}

/** Describes the properties of a gallery image definition. */
export interface ComputeGalleryCommunityGalleryImageProperties {
  /** This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. Possible values are: **Windows,** **Linux.** */
  osType: CommonOperatingSystemTypes;
  /** This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'. */
  osState: CommonOperatingSystemStateTypes;
  /** The end of life date of the gallery image definition. This property can be used for decommissioning purposes. This property is updatable. */
  endOfLifeDate?: Date;
  /** This is the community gallery image definition identifier. */
  identifier: ComputeGalleryCommunityGalleryImageIdentifier;
  /** The properties describe the recommended machine configuration for this Image Definition. These properties are updatable. */
  recommended?: ComputeGalleryRecommendedMachineConfiguration;
  /** Describes the disallowed disk types. */
  disallowed?: ComputeGalleryDisallowed;
  /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
  hyperVGeneration?: CommonHyperVGeneration;
  /** A list of gallery image features. */
  features?: ComputeGalleryGalleryImageFeature[];
  /** Describes the gallery image definition purchase plan. This is used by marketplace images. */
  purchasePlan?: ComputeGalleryImagePurchasePlan;
  /** The architecture of the image. Applicable to OS disks only. */
  architecture?: CommonArchitecture;
  /** Privacy statement URI for the current community gallery image. */
  privacyStatementUri?: string;
  /** The end-user license agreement for the current community gallery image. */
  eula?: string;
  /** The disclaimer for a community gallery resource. */
  disclaimer?: string;
  /** The artifact tags of a community gallery resource. */
  artifactTags?: Record<string, string>;
}

export function computeGalleryCommunityGalleryImagePropertiesDeserializer(
  item: any,
): ComputeGalleryCommunityGalleryImageProperties {
  return {
    osType: item["osType"],
    osState: item["osState"],
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    identifier: computeGalleryCommunityGalleryImageIdentifierDeserializer(item["identifier"]),
    recommended: !item["recommended"]
      ? item["recommended"]
      : computeGalleryRecommendedMachineConfigurationDeserializer(item["recommended"]),
    disallowed: !item["disallowed"]
      ? item["disallowed"]
      : computeGalleryDisallowedDeserializer(item["disallowed"]),
    hyperVGeneration: item["hyperVGeneration"],
    features: !item["features"]
      ? item["features"]
      : computeGalleryGalleryImageFeatureArrayDeserializer(item["features"]),
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeGalleryImagePurchasePlanDeserializer(item["purchasePlan"]),
    architecture: item["architecture"],
    privacyStatementUri: item["privacyStatementUri"],
    eula: item["eula"],
    disclaimer: item["disclaimer"],
    artifactTags: !item["artifactTags"]
      ? item["artifactTags"]
      : Object.fromEntries(
          Object.entries(item["artifactTags"]).map(([k, p]: [string, any]) => [k, p]),
        ),
  };
}

/** This is the community gallery image definition identifier. */
export interface ComputeGalleryCommunityGalleryImageIdentifier {
  /** The name of the gallery image definition publisher. */
  publisher?: string;
  /** The name of the gallery image definition offer. */
  offer?: string;
  /** The name of the gallery image definition SKU. */
  sku?: string;
}

export function computeGalleryCommunityGalleryImageIdentifierDeserializer(
  item: any,
): ComputeGalleryCommunityGalleryImageIdentifier {
  return {
    publisher: item["publisher"],
    offer: item["offer"],
    sku: item["sku"],
  };
}

/** The List Community Gallery Images operation response. */
export interface _ComputeGalleryCommunityGalleryImageList {
  /** A list of community gallery images. */
  value: ComputeGalleryCommunityGalleryImage[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _computeGalleryCommunityGalleryImageListDeserializer(
  item: any,
): _ComputeGalleryCommunityGalleryImageList {
  return {
    value: computeGalleryCommunityGalleryImageArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeGalleryCommunityGalleryImageArrayDeserializer(
  result: Array<ComputeGalleryCommunityGalleryImage>,
): any[] {
  return result.map((item) => {
    return computeGalleryCommunityGalleryImageDeserializer(item);
  });
}

/** Specifies information about the gallery image version that you want to create or update. */
export interface ComputeGalleryCommunityGalleryImageVersion extends ComputeGalleryPirCommunityGalleryResource {
  /** The published date of the gallery image version Definition. This property can be used for decommissioning purposes. This property is updatable. */
  publishedDate?: Date;
  /** The end of life date of the gallery image version Definition. This property can be used for decommissioning purposes. This property is updatable. */
  endOfLifeDate?: Date;
  /** If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version. */
  excludeFromLatest?: boolean;
  /** Describes the storage profile of the image version. */
  storageProfile?: ComputeGallerySharedGalleryImageVersionStorageProfile;
  /** The disclaimer for a community gallery resource. */
  disclaimer?: string;
  /** The artifact tags of a community gallery resource. */
  artifactTags?: Record<string, string>;
}

export function computeGalleryCommunityGalleryImageVersionDeserializer(
  item: any,
): ComputeGalleryCommunityGalleryImageVersion {
  return {
    name: item["name"],
    location: item["location"],
    type: item["type"],
    ...(!item["identifier"]
      ? item["identifier"]
      : _pirCommunityGalleryResourceIdentifierDeserializer(item["identifier"])),
    ...(!item["properties"]
      ? item["properties"]
      : _communityGalleryImageVersionPropertiesDeserializer(item["properties"])),
  };
}

/** Describes the properties of a gallery image version. */
export interface ComputeGalleryCommunityGalleryImageVersionProperties {
  /** The published date of the gallery image version Definition. This property can be used for decommissioning purposes. This property is updatable. */
  publishedDate?: Date;
  /** The end of life date of the gallery image version Definition. This property can be used for decommissioning purposes. This property is updatable. */
  endOfLifeDate?: Date;
  /** If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version. */
  excludeFromLatest?: boolean;
  /** Describes the storage profile of the image version. */
  storageProfile?: ComputeGallerySharedGalleryImageVersionStorageProfile;
  /** The disclaimer for a community gallery resource. */
  disclaimer?: string;
  /** The artifact tags of a community gallery resource. */
  artifactTags?: Record<string, string>;
}

export function computeGalleryCommunityGalleryImageVersionPropertiesDeserializer(
  item: any,
): ComputeGalleryCommunityGalleryImageVersionProperties {
  return {
    publishedDate: !item["publishedDate"] ? item["publishedDate"] : new Date(item["publishedDate"]),
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    excludeFromLatest: item["excludeFromLatest"],
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeGallerySharedGalleryImageVersionStorageProfileDeserializer(item["storageProfile"]),
    disclaimer: item["disclaimer"],
    artifactTags: !item["artifactTags"]
      ? item["artifactTags"]
      : Object.fromEntries(
          Object.entries(item["artifactTags"]).map(([k, p]: [string, any]) => [k, p]),
        ),
  };
}

/** The List Community Gallery Image versions operation response. */
export interface _ComputeGalleryCommunityGalleryImageVersionList {
  /** A list of community gallery image versions. */
  value: ComputeGalleryCommunityGalleryImageVersion[];
  /** The URI to fetch the next page of community gallery image versions. Call ListNext() with this to fetch the next page of community gallery image versions. */
  nextLink?: string;
}

export function _computeGalleryCommunityGalleryImageVersionListDeserializer(
  item: any,
): _ComputeGalleryCommunityGalleryImageVersionList {
  return {
    value: computeGalleryCommunityGalleryImageVersionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeGalleryCommunityGalleryImageVersionArrayDeserializer(
  result: Array<ComputeGalleryCommunityGalleryImageVersion>,
): any[] {
  return result.map((item) => {
    return computeGalleryCommunityGalleryImageVersionDeserializer(item);
  });
}

/** The List Soft-deleted Resources operation response. */
export interface _ComputeGalleryGallerySoftDeletedResourceList {
  /** The GallerySoftDeletedResource items on this page */
  value: ComputeGalleryGallerySoftDeletedResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _computeGalleryGallerySoftDeletedResourceListDeserializer(
  item: any,
): _ComputeGalleryGallerySoftDeletedResourceList {
  return {
    value: computeGalleryGallerySoftDeletedResourceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function computeGalleryGallerySoftDeletedResourceArrayDeserializer(
  result: Array<ComputeGalleryGallerySoftDeletedResource>,
): any[] {
  return result.map((item) => {
    return computeGalleryGallerySoftDeletedResourceDeserializer(item);
  });
}

/** The details information of soft-deleted resource. */
export interface ComputeGalleryGallerySoftDeletedResource extends TrackedResource {
  /** arm id of the soft-deleted resource */
  resourceArmId?: string;
  /** artifact type of the soft-deleted resource */
  softDeletedArtifactType?: ComputeGallerySoftDeletedArtifactTypes;
  /** The timestamp for when the resource is soft-deleted. In dateTime offset format. */
  softDeletedTime?: string;
}

export function computeGalleryGallerySoftDeletedResourceDeserializer(
  item: any,
): ComputeGalleryGallerySoftDeletedResource {
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
      : _gallerySoftDeletedResourcePropertiesDeserializer(item["properties"])),
  };
}

/** Describes the properties of a soft-deleted resource. */
export interface ComputeGalleryGallerySoftDeletedResourceProperties {
  /** arm id of the soft-deleted resource */
  resourceArmId?: string;
  /** artifact type of the soft-deleted resource */
  softDeletedArtifactType?: ComputeGallerySoftDeletedArtifactTypes;
  /** The timestamp for when the resource is soft-deleted. In dateTime offset format. */
  softDeletedTime?: string;
}

export function computeGalleryGallerySoftDeletedResourcePropertiesDeserializer(
  item: any,
): ComputeGalleryGallerySoftDeletedResourceProperties {
  return {
    resourceArmId: item["resourceArmId"],
    softDeletedArtifactType: item["softDeletedArtifactType"],
    softDeletedTime: item["softDeletedTime"],
  };
}

/** artifact type of the soft-deleted resource */
export enum KnownComputeGallerySoftDeletedArtifactTypes {
  /** Images */
  Images = "Images",
}

/**
 * artifact type of the soft-deleted resource \
 * {@link KnownComputeGallerySoftDeletedArtifactTypes} can be used interchangeably with ComputeGallerySoftDeletedArtifactTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Images**
 */
export type ComputeGallerySoftDeletedArtifactTypes = string;

/** Specifies information about the gallery sharing profile update. */
export interface ComputeGallerySharingUpdate {
  /** This property allows you to specify the operation type of gallery sharing update. Possible values are: **Add,** **Remove,** **Reset.** */
  operationType: ComputeGallerySharingUpdateOperationTypes;
  /** A list of sharing profile groups. */
  groups?: ComputeGallerySharingProfileGroup[];
}

export function computeGallerySharingUpdateSerializer(item: ComputeGallerySharingUpdate): any {
  return {
    operationType: item["operationType"],
    groups: !item["groups"]
      ? item["groups"]
      : computeGallerySharingProfileGroupArraySerializer(item["groups"]),
  };
}

export function computeGallerySharingUpdateDeserializer(item: any): ComputeGallerySharingUpdate {
  return {
    operationType: item["operationType"],
    groups: !item["groups"]
      ? item["groups"]
      : computeGallerySharingProfileGroupArrayDeserializer(item["groups"]),
  };
}

/** This property allows you to specify the operation type of gallery sharing update. Possible values are: **Add,** **Remove,** **Reset.** */
export enum KnownComputeGallerySharingUpdateOperationTypes {
  /** Add */
  Add = "Add",
  /** Remove */
  Remove = "Remove",
  /** Reset */
  Reset = "Reset",
  /** EnableCommunity */
  EnableCommunity = "EnableCommunity",
}

/**
 * This property allows you to specify the operation type of gallery sharing update. Possible values are: **Add,** **Remove,** **Reset.** \
 * {@link KnownComputeGallerySharingUpdateOperationTypes} can be used interchangeably with ComputeGallerySharingUpdateOperationTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Add** \
 * **Remove** \
 * **Reset** \
 * **EnableCommunity**
 */
export type ComputeGallerySharingUpdateOperationTypes = string;

/** Known values of {@link SelectPermissions} that the service accepts. */
export enum KnownComputeGallerySelectPermissions {
  /** Permissions */
  Permissions = "Permissions",
}

/** Type of ComputeGallerySelectPermissions */
export type ComputeGallerySelectPermissions = string;

/** Known values of {@link GalleryExpandParams} that the service accepts. */
export enum KnownComputeGalleryGalleryExpandParams {
  /** SharingProfile/Groups */
  SharingProfileGroups = "SharingProfile/Groups",
}

/** Type of ComputeGalleryGalleryExpandParams */
export type ComputeGalleryGalleryExpandParams = string;

/** Known values of {@link ReplicationStatusTypes} that the service accepts. */
export enum KnownComputeGalleryReplicationStatusTypes {
  /** ReplicationStatus */
  ReplicationStatus = "ReplicationStatus",
  /** UefiSettings */
  UefiSettings = "UefiSettings",
}

/** Type of ComputeGalleryReplicationStatusTypes */
export type ComputeGalleryReplicationStatusTypes = string;

/** Known values of {@link SharedToValues} that the service accepts. */
export enum KnownComputeGallerySharedToValues {
  /** tenant */
  Tenant = "tenant",
}

/** Type of ComputeGallerySharedToValues */
export type ComputeGallerySharedToValues = string;

export function _galleryPropertiesSerializer(item: ComputeGalleryGallery): any {
  return {
    description: item["description"],
    identifier: !item["identifier"]
      ? item["identifier"]
      : computeGalleryGalleryIdentifierSerializer(item["identifier"]),
    sharingProfile: !item["sharingProfile"]
      ? item["sharingProfile"]
      : computeGallerySharingProfileSerializer(item["sharingProfile"]),
    softDeletePolicy: !item["softDeletePolicy"]
      ? item["softDeletePolicy"]
      : computeGallerySoftDeletePolicySerializer(item["softDeletePolicy"]),
  };
}

export function _galleryPropertiesDeserializer(item: any) {
  return {
    description: item["description"],
    identifier: !item["identifier"]
      ? item["identifier"]
      : computeGalleryGalleryIdentifierDeserializer(item["identifier"]),
    provisioningState: item["provisioningState"],
    sharingProfile: !item["sharingProfile"]
      ? item["sharingProfile"]
      : computeGallerySharingProfileDeserializer(item["sharingProfile"]),
    softDeletePolicy: !item["softDeletePolicy"]
      ? item["softDeletePolicy"]
      : computeGallerySoftDeletePolicyDeserializer(item["softDeletePolicy"]),
    sharingStatus: !item["sharingStatus"]
      ? item["sharingStatus"]
      : computeGallerySharingStatusDeserializer(item["sharingStatus"]),
  };
}

export function _galleryUpdatePropertiesSerializer(item: ComputeGalleryGalleryUpdate): any {
  return {
    description: item["description"],
    identifier: !item["identifier"]
      ? item["identifier"]
      : computeGalleryGalleryIdentifierSerializer(item["identifier"]),
    sharingProfile: !item["sharingProfile"]
      ? item["sharingProfile"]
      : computeGallerySharingProfileSerializer(item["sharingProfile"]),
    softDeletePolicy: !item["softDeletePolicy"]
      ? item["softDeletePolicy"]
      : computeGallerySoftDeletePolicySerializer(item["softDeletePolicy"]),
  };
}

export function _galleryUpdatePropertiesDeserializer(item: any) {
  return {
    description: item["description"],
    identifier: !item["identifier"]
      ? item["identifier"]
      : computeGalleryGalleryIdentifierDeserializer(item["identifier"]),
    provisioningState: item["provisioningState"],
    sharingProfile: !item["sharingProfile"]
      ? item["sharingProfile"]
      : computeGallerySharingProfileDeserializer(item["sharingProfile"]),
    softDeletePolicy: !item["softDeletePolicy"]
      ? item["softDeletePolicy"]
      : computeGallerySoftDeletePolicyDeserializer(item["softDeletePolicy"]),
    sharingStatus: !item["sharingStatus"]
      ? item["sharingStatus"]
      : computeGallerySharingStatusDeserializer(item["sharingStatus"]),
  };
}

export function _galleryImagePropertiesSerializer(item: ComputeGalleryGalleryImage): any {
  return {
    description: item["description"],
    eula: item["eula"],
    privacyStatementUri: item["privacyStatementUri"],
    releaseNoteUri: item["releaseNoteUri"],
    osType: item["osType"],
    osState: item["osState"],
    hyperVGeneration: item["hyperVGeneration"],
    endOfLifeDate: !item["endOfLifeDate"]
      ? item["endOfLifeDate"]
      : item["endOfLifeDate"].toISOString(),
    identifier: !item["identifier"]
      ? item["identifier"]
      : computeGalleryGalleryImageIdentifierSerializer(item["identifier"]),
    recommended: !item["recommended"]
      ? item["recommended"]
      : computeGalleryRecommendedMachineConfigurationSerializer(item["recommended"]),
    disallowed: !item["disallowed"]
      ? item["disallowed"]
      : computeGalleryDisallowedSerializer(item["disallowed"]),
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeGalleryImagePurchasePlanSerializer(item["purchasePlan"]),
    features: !item["features"]
      ? item["features"]
      : computeGalleryGalleryImageFeatureArraySerializer(item["features"]),
    architecture: item["architecture"],
    allowUpdateImage: item["allowUpdateImage"],
  };
}

export function _galleryImagePropertiesDeserializer(item: any) {
  return {
    description: item["description"],
    eula: item["eula"],
    privacyStatementUri: item["privacyStatementUri"],
    releaseNoteUri: item["releaseNoteUri"],
    osType: item["osType"],
    osState: item["osState"],
    hyperVGeneration: item["hyperVGeneration"],
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    identifier: !item["identifier"]
      ? item["identifier"]
      : computeGalleryGalleryImageIdentifierDeserializer(item["identifier"]),
    recommended: !item["recommended"]
      ? item["recommended"]
      : computeGalleryRecommendedMachineConfigurationDeserializer(item["recommended"]),
    disallowed: !item["disallowed"]
      ? item["disallowed"]
      : computeGalleryDisallowedDeserializer(item["disallowed"]),
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeGalleryImagePurchasePlanDeserializer(item["purchasePlan"]),
    provisioningState: item["provisioningState"],
    features: !item["features"]
      ? item["features"]
      : computeGalleryGalleryImageFeatureArrayDeserializer(item["features"]),
    architecture: item["architecture"],
    allowUpdateImage: item["allowUpdateImage"],
  };
}

export function _galleryImageUpdatePropertiesSerializer(
  item: ComputeGalleryGalleryImageUpdate,
): any {
  return {
    description: item["description"],
    eula: item["eula"],
    privacyStatementUri: item["privacyStatementUri"],
    releaseNoteUri: item["releaseNoteUri"],
    osType: item["osType"],
    osState: item["osState"],
    hyperVGeneration: item["hyperVGeneration"],
    endOfLifeDate: !item["endOfLifeDate"]
      ? item["endOfLifeDate"]
      : item["endOfLifeDate"].toISOString(),
    identifier: !item["identifier"]
      ? item["identifier"]
      : computeGalleryGalleryImageIdentifierSerializer(item["identifier"]),
    recommended: !item["recommended"]
      ? item["recommended"]
      : computeGalleryRecommendedMachineConfigurationSerializer(item["recommended"]),
    disallowed: !item["disallowed"]
      ? item["disallowed"]
      : computeGalleryDisallowedSerializer(item["disallowed"]),
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeGalleryImagePurchasePlanSerializer(item["purchasePlan"]),
    features: !item["features"]
      ? item["features"]
      : computeGalleryGalleryImageFeatureArraySerializer(item["features"]),
    architecture: item["architecture"],
    allowUpdateImage: item["allowUpdateImage"],
  };
}

export function _galleryImageUpdatePropertiesDeserializer(item: any) {
  return {
    description: item["description"],
    eula: item["eula"],
    privacyStatementUri: item["privacyStatementUri"],
    releaseNoteUri: item["releaseNoteUri"],
    osType: item["osType"],
    osState: item["osState"],
    hyperVGeneration: item["hyperVGeneration"],
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    identifier: !item["identifier"]
      ? item["identifier"]
      : computeGalleryGalleryImageIdentifierDeserializer(item["identifier"]),
    recommended: !item["recommended"]
      ? item["recommended"]
      : computeGalleryRecommendedMachineConfigurationDeserializer(item["recommended"]),
    disallowed: !item["disallowed"]
      ? item["disallowed"]
      : computeGalleryDisallowedDeserializer(item["disallowed"]),
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeGalleryImagePurchasePlanDeserializer(item["purchasePlan"]),
    provisioningState: item["provisioningState"],
    features: !item["features"]
      ? item["features"]
      : computeGalleryGalleryImageFeatureArrayDeserializer(item["features"]),
    architecture: item["architecture"],
    allowUpdateImage: item["allowUpdateImage"],
  };
}

export function _galleryImageVersionPropertiesSerializer(
  item: ComputeGalleryGalleryImageVersion,
): any {
  return {
    publishingProfile: !item["publishingProfile"]
      ? item["publishingProfile"]
      : computeGalleryGalleryImageVersionPublishingProfileSerializer(item["publishingProfile"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeGalleryGalleryImageVersionStorageProfileSerializer(item["storageProfile"]),
    safetyProfile: !item["safetyProfile"]
      ? item["safetyProfile"]
      : computeGalleryGalleryImageVersionSafetyProfileSerializer(item["safetyProfile"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeGalleryImageVersionSecurityProfileSerializer(item["securityProfile"]),
    restore: item["restore"],
  };
}

export function _galleryImageVersionPropertiesDeserializer(item: any) {
  return {
    publishingProfile: !item["publishingProfile"]
      ? item["publishingProfile"]
      : computeGalleryGalleryImageVersionPublishingProfileDeserializer(item["publishingProfile"]),
    provisioningState: item["provisioningState"],
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeGalleryGalleryImageVersionStorageProfileDeserializer(item["storageProfile"]),
    safetyProfile: !item["safetyProfile"]
      ? item["safetyProfile"]
      : computeGalleryGalleryImageVersionSafetyProfileDeserializer(item["safetyProfile"]),
    replicationStatus: !item["replicationStatus"]
      ? item["replicationStatus"]
      : computeGalleryReplicationStatusDeserializer(item["replicationStatus"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeGalleryImageVersionSecurityProfileDeserializer(item["securityProfile"]),
    restore: item["restore"],
    validationsProfile: !item["validationsProfile"]
      ? item["validationsProfile"]
      : computeGalleryValidationsProfileDeserializer(item["validationsProfile"]),
  };
}

export function _galleryImageVersionUpdatePropertiesSerializer(
  item: ComputeGalleryGalleryImageVersionUpdate,
): any {
  return {
    publishingProfile: !item["publishingProfile"]
      ? item["publishingProfile"]
      : computeGalleryGalleryImageVersionPublishingProfileSerializer(item["publishingProfile"]),
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeGalleryGalleryImageVersionStorageProfileSerializer(item["storageProfile"]),
    safetyProfile: !item["safetyProfile"]
      ? item["safetyProfile"]
      : computeGalleryGalleryImageVersionSafetyProfileSerializer(item["safetyProfile"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeGalleryImageVersionSecurityProfileSerializer(item["securityProfile"]),
    restore: item["restore"],
  };
}

export function _galleryImageVersionUpdatePropertiesDeserializer(item: any) {
  return {
    publishingProfile: !item["publishingProfile"]
      ? item["publishingProfile"]
      : computeGalleryGalleryImageVersionPublishingProfileDeserializer(item["publishingProfile"]),
    provisioningState: item["provisioningState"],
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeGalleryGalleryImageVersionStorageProfileDeserializer(item["storageProfile"]),
    safetyProfile: !item["safetyProfile"]
      ? item["safetyProfile"]
      : computeGalleryGalleryImageVersionSafetyProfileDeserializer(item["safetyProfile"]),
    replicationStatus: !item["replicationStatus"]
      ? item["replicationStatus"]
      : computeGalleryReplicationStatusDeserializer(item["replicationStatus"]),
    securityProfile: !item["securityProfile"]
      ? item["securityProfile"]
      : computeGalleryImageVersionSecurityProfileDeserializer(item["securityProfile"]),
    restore: item["restore"],
    validationsProfile: !item["validationsProfile"]
      ? item["validationsProfile"]
      : computeGalleryValidationsProfileDeserializer(item["validationsProfile"]),
  };
}

export function _galleryApplicationPropertiesSerializer(
  item: ComputeGalleryGalleryApplication,
): any {
  return {
    description: item["description"],
    eula: item["eula"],
    privacyStatementUri: item["privacyStatementUri"],
    releaseNoteUri: item["releaseNoteUri"],
    endOfLifeDate: !item["endOfLifeDate"]
      ? item["endOfLifeDate"]
      : item["endOfLifeDate"].toISOString(),
    supportedOSType: item["supportedOSType"],
    customActions: !item["customActions"]
      ? item["customActions"]
      : computeGalleryGalleryApplicationCustomActionArraySerializer(item["customActions"]),
  };
}

export function _galleryApplicationPropertiesDeserializer(item: any) {
  return {
    description: item["description"],
    eula: item["eula"],
    privacyStatementUri: item["privacyStatementUri"],
    releaseNoteUri: item["releaseNoteUri"],
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    supportedOSType: item["supportedOSType"],
    customActions: !item["customActions"]
      ? item["customActions"]
      : computeGalleryGalleryApplicationCustomActionArrayDeserializer(item["customActions"]),
  };
}

export function _galleryApplicationUpdatePropertiesSerializer(
  item: ComputeGalleryGalleryApplicationUpdate,
): any {
  return {
    description: item["description"],
    eula: item["eula"],
    privacyStatementUri: item["privacyStatementUri"],
    releaseNoteUri: item["releaseNoteUri"],
    endOfLifeDate: !item["endOfLifeDate"]
      ? item["endOfLifeDate"]
      : item["endOfLifeDate"].toISOString(),
    supportedOSType: item["supportedOSType"],
    customActions: !item["customActions"]
      ? item["customActions"]
      : computeGalleryGalleryApplicationCustomActionArraySerializer(item["customActions"]),
  };
}

export function _galleryApplicationUpdatePropertiesDeserializer(item: any) {
  return {
    description: item["description"],
    eula: item["eula"],
    privacyStatementUri: item["privacyStatementUri"],
    releaseNoteUri: item["releaseNoteUri"],
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    supportedOSType: item["supportedOSType"],
    customActions: !item["customActions"]
      ? item["customActions"]
      : computeGalleryGalleryApplicationCustomActionArrayDeserializer(item["customActions"]),
  };
}

export function _galleryApplicationVersionPropertiesSerializer(
  item: ComputeGalleryGalleryApplicationVersion,
): any {
  return {
    publishingProfile: !item["publishingProfile"]
      ? item["publishingProfile"]
      : computeGalleryGalleryApplicationVersionPublishingProfileSerializer(
          item["publishingProfile"],
        ),
    safetyProfile: !item["safetyProfile"]
      ? item["safetyProfile"]
      : computeGalleryGalleryApplicationVersionSafetyProfileSerializer(item["safetyProfile"]),
  };
}

export function _galleryApplicationVersionPropertiesDeserializer(item: any) {
  return {
    publishingProfile: !item["publishingProfile"]
      ? item["publishingProfile"]
      : computeGalleryGalleryApplicationVersionPublishingProfileDeserializer(
          item["publishingProfile"],
        ),
    safetyProfile: !item["safetyProfile"]
      ? item["safetyProfile"]
      : computeGalleryGalleryApplicationVersionSafetyProfileDeserializer(item["safetyProfile"]),
    provisioningState: item["provisioningState"],
    replicationStatus: !item["replicationStatus"]
      ? item["replicationStatus"]
      : computeGalleryReplicationStatusDeserializer(item["replicationStatus"]),
  };
}

export function _galleryApplicationVersionUpdatePropertiesSerializer(
  item: ComputeGalleryGalleryApplicationVersionUpdate,
): any {
  return {
    publishingProfile: !item["publishingProfile"]
      ? item["publishingProfile"]
      : computeGalleryGalleryApplicationVersionPublishingProfileSerializer(
          item["publishingProfile"],
        ),
    safetyProfile: !item["safetyProfile"]
      ? item["safetyProfile"]
      : computeGalleryGalleryApplicationVersionSafetyProfileSerializer(item["safetyProfile"]),
  };
}

export function _galleryApplicationVersionUpdatePropertiesDeserializer(item: any) {
  return {
    publishingProfile: !item["publishingProfile"]
      ? item["publishingProfile"]
      : computeGalleryGalleryApplicationVersionPublishingProfileDeserializer(
          item["publishingProfile"],
        ),
    safetyProfile: !item["safetyProfile"]
      ? item["safetyProfile"]
      : computeGalleryGalleryApplicationVersionSafetyProfileDeserializer(item["safetyProfile"]),
    provisioningState: item["provisioningState"],
    replicationStatus: !item["replicationStatus"]
      ? item["replicationStatus"]
      : computeGalleryReplicationStatusDeserializer(item["replicationStatus"]),
  };
}

export function _galleryScriptUpdatePropertiesSerializer(
  item: ComputeGalleryGalleryScriptUpdate,
): any {
  return {
    description: item["description"],
    eula: item["eula"],
    privacyStatementUri: item["privacyStatementUri"],
    releaseNoteUri: item["releaseNoteUri"],
    endOfLifeDate: !item["endOfLifeDate"]
      ? item["endOfLifeDate"]
      : item["endOfLifeDate"].toISOString(),
    supportedOSType: item["supportedOSType"],
  };
}

export function _galleryScriptUpdatePropertiesDeserializer(item: any) {
  return {
    description: item["description"],
    eula: item["eula"],
    privacyStatementUri: item["privacyStatementUri"],
    releaseNoteUri: item["releaseNoteUri"],
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    supportedOSType: item["supportedOSType"],
    provisioningState: item["provisioningState"],
  };
}

export function _galleryScriptVersionUpdatePropertiesSerializer(
  item: ComputeGalleryGalleryScriptVersionUpdate,
): any {
  return {
    publishingProfile: !item["publishingProfile"]
      ? item["publishingProfile"]
      : computeGalleryGalleryScriptVersionPublishingProfileSerializer(item["publishingProfile"]),
    safetyProfile: !item["safetyProfile"]
      ? item["safetyProfile"]
      : computeGalleryGalleryScriptVersionSafetyProfileSerializer(item["safetyProfile"]),
  };
}

export function _galleryScriptVersionUpdatePropertiesDeserializer(item: any) {
  return {
    publishingProfile: !item["publishingProfile"]
      ? item["publishingProfile"]
      : computeGalleryGalleryScriptVersionPublishingProfileDeserializer(item["publishingProfile"]),
    safetyProfile: !item["safetyProfile"]
      ? item["safetyProfile"]
      : computeGalleryGalleryScriptVersionSafetyProfileDeserializer(item["safetyProfile"]),
    provisioningState: item["provisioningState"],
    replicationStatus: !item["replicationStatus"]
      ? item["replicationStatus"]
      : computeGalleryReplicationStatusDeserializer(item["replicationStatus"]),
  };
}

export function _galleryInVMAccessControlProfileVersionPropertiesSerializer(
  item: ComputeGalleryGalleryInVMAccessControlProfileVersion,
): any {
  return {
    targetLocations: !item["targetLocations"]
      ? item["targetLocations"]
      : computeGalleryTargetRegionArraySerializer(item["targetLocations"]),
    excludeFromLatest: item["excludeFromLatest"],
    mode: item["mode"],
    defaultAccess: item["defaultAccess"],
    rules: !item["rules"]
      ? item["rules"]
      : computeGalleryAccessControlRulesSerializer(item["rules"]),
  };
}

export function _galleryInVMAccessControlProfileVersionPropertiesDeserializer(item: any) {
  return {
    targetLocations: !item["targetLocations"]
      ? item["targetLocations"]
      : computeGalleryTargetRegionArrayDeserializer(item["targetLocations"]),
    excludeFromLatest: item["excludeFromLatest"],
    publishedDate: !item["publishedDate"] ? item["publishedDate"] : new Date(item["publishedDate"]),
    provisioningState: item["provisioningState"],
    replicationStatus: !item["replicationStatus"]
      ? item["replicationStatus"]
      : computeGalleryReplicationStatusDeserializer(item["replicationStatus"]),
    mode: item["mode"],
    defaultAccess: item["defaultAccess"],
    rules: !item["rules"]
      ? item["rules"]
      : computeGalleryAccessControlRulesDeserializer(item["rules"]),
  };
}

export function _galleryInVMAccessControlProfileVersionUpdatePropertiesSerializer(
  item: ComputeGalleryGalleryInVMAccessControlProfileVersionUpdate,
): any {
  return {
    targetLocations: !item["targetLocations"]
      ? item["targetLocations"]
      : computeGalleryTargetRegionArraySerializer(item["targetLocations"]),
    excludeFromLatest: item["excludeFromLatest"],
    mode: item["mode"],
    defaultAccess: item["defaultAccess"],
    rules: !item["rules"]
      ? item["rules"]
      : computeGalleryAccessControlRulesSerializer(item["rules"]),
  };
}

export function _galleryInVMAccessControlProfileVersionUpdatePropertiesDeserializer(item: any) {
  return {
    targetLocations: !item["targetLocations"]
      ? item["targetLocations"]
      : computeGalleryTargetRegionArrayDeserializer(item["targetLocations"]),
    excludeFromLatest: item["excludeFromLatest"],
    publishedDate: !item["publishedDate"] ? item["publishedDate"] : new Date(item["publishedDate"]),
    provisioningState: item["provisioningState"],
    replicationStatus: !item["replicationStatus"]
      ? item["replicationStatus"]
      : computeGalleryReplicationStatusDeserializer(item["replicationStatus"]),
    mode: item["mode"],
    defaultAccess: item["defaultAccess"],
    rules: !item["rules"]
      ? item["rules"]
      : computeGalleryAccessControlRulesDeserializer(item["rules"]),
  };
}

export function _sharedGalleryPropertiesDeserializer(item: any) {
  return {
    artifactTags: !item["artifactTags"]
      ? item["artifactTags"]
      : Object.fromEntries(
          Object.entries(item["artifactTags"]).map(([k, p]: [string, any]) => [k, p]),
        ),
  };
}

export function _pirSharedGalleryResourceIdentifierDeserializer(item: any) {
  return {
    uniqueId: item["uniqueId"],
  };
}

export function _sharedGalleryImagePropertiesDeserializer(item: any) {
  return {
    osType: item["osType"],
    osState: item["osState"],
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    identifier: !item["identifier"]
      ? item["identifier"]
      : computeGalleryGalleryImageIdentifierDeserializer(item["identifier"]),
    recommended: !item["recommended"]
      ? item["recommended"]
      : computeGalleryRecommendedMachineConfigurationDeserializer(item["recommended"]),
    disallowed: !item["disallowed"]
      ? item["disallowed"]
      : computeGalleryDisallowedDeserializer(item["disallowed"]),
    hyperVGeneration: item["hyperVGeneration"],
    features: !item["features"]
      ? item["features"]
      : computeGalleryGalleryImageFeatureArrayDeserializer(item["features"]),
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeGalleryImagePurchasePlanDeserializer(item["purchasePlan"]),
    architecture: item["architecture"],
    privacyStatementUri: item["privacyStatementUri"],
    eula: item["eula"],
    artifactTags: !item["artifactTags"]
      ? item["artifactTags"]
      : Object.fromEntries(
          Object.entries(item["artifactTags"]).map(([k, p]: [string, any]) => [k, p]),
        ),
  };
}

export function _sharedGalleryImageVersionPropertiesDeserializer(item: any) {
  return {
    publishedDate: !item["publishedDate"] ? item["publishedDate"] : new Date(item["publishedDate"]),
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    excludeFromLatest: item["excludeFromLatest"],
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeGallerySharedGalleryImageVersionStorageProfileDeserializer(item["storageProfile"]),
    artifactTags: !item["artifactTags"]
      ? item["artifactTags"]
      : Object.fromEntries(
          Object.entries(item["artifactTags"]).map(([k, p]: [string, any]) => [k, p]),
        ),
  };
}

export function _communityGalleryPropertiesDeserializer(item: any) {
  return {
    disclaimer: item["disclaimer"],
    artifactTags: !item["artifactTags"]
      ? item["artifactTags"]
      : Object.fromEntries(
          Object.entries(item["artifactTags"]).map(([k, p]: [string, any]) => [k, p]),
        ),
    communityMetadata: !item["communityMetadata"]
      ? item["communityMetadata"]
      : computeGalleryCommunityGalleryMetadataDeserializer(item["communityMetadata"]),
  };
}

export function _pirCommunityGalleryResourceIdentifierDeserializer(item: any) {
  return {
    uniqueId: item["uniqueId"],
  };
}

export function _communityGalleryImagePropertiesDeserializer(item: any) {
  return {
    osType: item["osType"],
    osState: item["osState"],
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    identifier: !item["identifier"]
      ? item["identifier"]
      : computeGalleryCommunityGalleryImageIdentifierDeserializer(item["identifier"]),
    recommended: !item["recommended"]
      ? item["recommended"]
      : computeGalleryRecommendedMachineConfigurationDeserializer(item["recommended"]),
    disallowed: !item["disallowed"]
      ? item["disallowed"]
      : computeGalleryDisallowedDeserializer(item["disallowed"]),
    hyperVGeneration: item["hyperVGeneration"],
    features: !item["features"]
      ? item["features"]
      : computeGalleryGalleryImageFeatureArrayDeserializer(item["features"]),
    purchasePlan: !item["purchasePlan"]
      ? item["purchasePlan"]
      : computeGalleryImagePurchasePlanDeserializer(item["purchasePlan"]),
    architecture: item["architecture"],
    privacyStatementUri: item["privacyStatementUri"],
    eula: item["eula"],
    disclaimer: item["disclaimer"],
    artifactTags: !item["artifactTags"]
      ? item["artifactTags"]
      : Object.fromEntries(
          Object.entries(item["artifactTags"]).map(([k, p]: [string, any]) => [k, p]),
        ),
  };
}

export function _communityGalleryImageVersionPropertiesDeserializer(item: any) {
  return {
    publishedDate: !item["publishedDate"] ? item["publishedDate"] : new Date(item["publishedDate"]),
    endOfLifeDate: !item["endOfLifeDate"] ? item["endOfLifeDate"] : new Date(item["endOfLifeDate"]),
    excludeFromLatest: item["excludeFromLatest"],
    storageProfile: !item["storageProfile"]
      ? item["storageProfile"]
      : computeGallerySharedGalleryImageVersionStorageProfileDeserializer(item["storageProfile"]),
    disclaimer: item["disclaimer"],
    artifactTags: !item["artifactTags"]
      ? item["artifactTags"]
      : Object.fromEntries(
          Object.entries(item["artifactTags"]).map(([k, p]: [string, any]) => [k, p]),
        ),
  };
}

export function _gallerySoftDeletedResourcePropertiesDeserializer(item: any) {
  return {
    resourceArmId: item["resourceArmId"],
    softDeletedArtifactType: item["softDeletedArtifactType"],
    softDeletedTime: item["softDeletedTime"],
  };
}
