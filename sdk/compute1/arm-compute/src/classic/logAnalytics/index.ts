// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import {
  exportThrottledRequests,
  exportRequestRateByInterval,
} from "../../api/logAnalytics/operations.js";
import {
  LogAnalyticsExportThrottledRequestsOptionalParams,
  LogAnalyticsExportRequestRateByIntervalOptionalParams,
} from "../../api/logAnalytics/options.js";
import {
  ComputeRequestRateByIntervalInput,
  ComputeLogAnalyticsOperationResult,
  ComputeThrottledRequestsInput,
} from "../../models/compute/models.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a LogAnalytics operations. */
export interface LogAnalyticsOperations {
  /** Export logs that show total throttled Api requests for this subscription in the given time window. */
  exportThrottledRequests: (
    location: string,
    parameters: ComputeThrottledRequestsInput,
    options?: LogAnalyticsExportThrottledRequestsOptionalParams,
  ) => PollerLike<
    OperationState<ComputeLogAnalyticsOperationResult>,
    ComputeLogAnalyticsOperationResult
  >;
  /** Export logs that show Api requests made by this subscription in the given time window to show throttling activities. */
  exportRequestRateByInterval: (
    location: string,
    parameters: ComputeRequestRateByIntervalInput,
    options?: LogAnalyticsExportRequestRateByIntervalOptionalParams,
  ) => PollerLike<
    OperationState<ComputeLogAnalyticsOperationResult>,
    ComputeLogAnalyticsOperationResult
  >;
}

function _getLogAnalytics(context: ComputeContext) {
  return {
    exportThrottledRequests: (
      location: string,
      parameters: ComputeThrottledRequestsInput,
      options?: LogAnalyticsExportThrottledRequestsOptionalParams,
    ) => exportThrottledRequests(context, location, parameters, options),
    exportRequestRateByInterval: (
      location: string,
      parameters: ComputeRequestRateByIntervalInput,
      options?: LogAnalyticsExportRequestRateByIntervalOptionalParams,
    ) => exportRequestRateByInterval(context, location, parameters, options),
  };
}

export function _getLogAnalyticsOperations(context: ComputeContext): LogAnalyticsOperations {
  return {
    ..._getLogAnalytics(context),
  };
}
