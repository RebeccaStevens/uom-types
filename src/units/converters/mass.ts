import type { UnitConversionRate } from "#uom-types";
import { div, mul } from "#uom-types/math";
import type { Gram, Tonne } from "#uom-types/units";

/**
 * Convert {@link Gram} to {@link Tonne}.
 */
export function gramsToTonnes(mass: Gram): Tonne {
  return div(mass, 1_000_000 as UnitConversionRate<{ scalar10: -6 }>);
}

/**
 * Convert {@link Tonne} to {@link Gram}.
 */
export function tonnesToGrams(mass: Tonne): Gram {
  return mul(mass, 1_000_000 as UnitConversionRate<{ scalar10: -6 }>);
}
