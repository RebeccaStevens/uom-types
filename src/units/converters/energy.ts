import { type UnitConversionRate } from "#uom-types";
import { div, mul } from "#uom-types/functions";
import { type Joule, type WattHour, type WattMinute } from "#uom-types/units";

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
