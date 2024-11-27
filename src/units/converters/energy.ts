import type { UnitConversionRate } from "../../core.ts";
import { div, mul } from "../../math/index.ts";
import type { Joule, WattHour, WattMinute } from "../common/index.ts";

/**
 * Convert {@link Joule} to {@link WattMinute}.
 */
export function joulesToWattMinutes(energy: Joule): WattMinute {
  return div(energy, 60 as UnitConversionRate<{ scalar60: -1 }>);
}

/**
 * Convert {@link Joule} to {@link WattHour}.
 */
export function joulesToWattHours(energy: Joule): WattHour {
  return div(energy, 3600 as UnitConversionRate<{ scalar60: -2 }>);
}

/**
 * Convert {@link WattMinute} to {@link Joule}.
 */
export function wattMinutesToJoules(energy: WattMinute): Joule {
  return mul(energy, 60 as UnitConversionRate<{ scalar60: -1 }>);
}

/**
 * Convert {@link WattHour} to {@link Joule}.
 */
export function wattHoursToJoules(energy: WattHour): Joule {
  return mul(energy, 3600 as UnitConversionRate<{ scalar60: -2 }>);
}
