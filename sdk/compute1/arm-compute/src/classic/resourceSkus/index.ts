// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import { list } from "../../api/resourceSkus/operations.js";
import { ResourceSkusListOptionalParams } from "../../api/resourceSkus/options.js";
import { ComputeSkuResourceSku } from "../../models/computeSku/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ResourceSkus operations. */
export interface ResourceSkusOperations {
  /** Gets the list of Microsoft.Compute SKUs available for your Subscription. */
  list: (
    options?: ResourceSkusListOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeSkuResourceSku>;
}

function _getResourceSkus(context: ComputeContext) {
  return {
    list: (options?: ResourceSkusListOptionalParams) => list(context, options),
  };
}

export function _getResourceSkusOperations(context: ComputeContext): ResourceSkusOperations {
  return {
    ..._getResourceSkus(context),
  };
}
