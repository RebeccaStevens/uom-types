import type { UnitConversionRate } from "../../core.ts";
import { div, mul } from "../../math/index.ts";
import type { Gram, Tonne } from "../common/index.ts";

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
