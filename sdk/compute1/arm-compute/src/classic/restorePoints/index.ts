// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import { $delete, create, get } from "../../api/restorePoints/operations.js";
import {
  RestorePointsDeleteOptionalParams,
  RestorePointsCreateOptionalParams,
  RestorePointsGetOptionalParams,
} from "../../api/restorePoints/options.js";
import { ComputeRestorePoint } from "../../models/compute/models.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a RestorePoints operations. */
export interface RestorePointsOperations {
  /** The operation to delete the restore point. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    restorePointCollectionName: string,
    restorePointName: string,
    options?: RestorePointsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** The operation to create the restore point. Updating properties of an existing restore point is not allowed */
  create: (
    resourceGroupName: string,
    restorePointCollectionName: string,
    restorePointName: string,
    parameters: ComputeRestorePoint,
    options?: RestorePointsCreateOptionalParams,
  ) => PollerLike<OperationState<ComputeRestorePoint>, ComputeRestorePoint>;
  /** The operation to get the restore point. */
  get: (
    resourceGroupName: string,
    restorePointCollectionName: string,
    restorePointName: string,
    options?: RestorePointsGetOptionalParams,
  ) => Promise<ComputeRestorePoint>;
}

function _getRestorePoints(context: ComputeContext) {
  return {
    delete: (
      resourceGroupName: string,
      restorePointCollectionName: string,
      restorePointName: string,
      options?: RestorePointsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, restorePointCollectionName, restorePointName, options),
    create: (
      resourceGroupName: string,
      restorePointCollectionName: string,
      restorePointName: string,
      parameters: ComputeRestorePoint,
      options?: RestorePointsCreateOptionalParams,
    ) =>
      create(
        context,
        resourceGroupName,
        restorePointCollectionName,
        restorePointName,
        parameters,
        options,
      ),
    get: (
      resourceGroupName: string,
      restorePointCollectionName: string,
      restorePointName: string,
      options?: RestorePointsGetOptionalParams,
    ) => get(context, resourceGroupName, restorePointCollectionName, restorePointName, options),
  };
}

export function _getRestorePointsOperations(context: ComputeContext): RestorePointsOperations {
  return {
    ..._getRestorePoints(context),
  };
}
