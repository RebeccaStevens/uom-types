import { type UnitConversionRate } from "#uom-types";
import { mul, div } from "#uom-types/functions";
import { type Gram, type Tonne } from "#uom-types/units";

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
