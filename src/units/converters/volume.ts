import type { UnitConversionRate } from "../../core";
import { div, mul } from "../../math";
import type { Liter, Meter } from "../common";
import type { Cubic } from "../modifiers";

/**
 * Convert {@link Cubic}<{@link Meter}> to {@link Liter}.
 */
export function cubicMetersToLiters(volume: Cubic<Meter>): Liter {
  return mul(volume, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}

/**
 * Convert {@link Liter} to {@link Cubic}<{@link Meter}>.
 */
export function litersToCubicMeters(volume: Liter): Cubic<Meter> {
  return div(volume, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}
