import { type UnitConversionRate } from "#uom-types";
import { div, mul } from "#uom-types/functions";
import {
  type Joules,
  type WattHours,
  type WattMinutes,
} from "#uom-types/units";

/**
 * Convert {@link Joules} to {@link WattMinutes}.
 */
export function joulesToWattMinutes(energy: Joules): WattMinutes {
  return div(energy, 60 as UnitConversionRate<{ scalar60: -1 }>);
}

/**
 * Convert {@link Joules} to {@link WattHours}.
 */
export function joulesToWattHours(energy: Joules): WattHours {
  return div(energy, 3600 as UnitConversionRate<{ scalar60: -2 }>);
}

/**
 * Convert {@link WattMinutes} to {@link Joules}.
 */
export function wattMinutesToJoules(energy: WattMinutes): Joules {
  return mul(energy, 60 as UnitConversionRate<{ scalar60: -1 }>);
}

/**
 * Convert {@link WattHours} to {@link Joules}.
 */
export function wattHoursToJoules(energy: WattHours): Joules {
  return mul(energy, 3600 as UnitConversionRate<{ scalar60: -2 }>);
}
