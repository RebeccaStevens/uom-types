import { type UnitConversionRate } from "#uom-types";
import { mul, div } from "#uom-types/functions";
import { type Gram, type Tonne, type Kilogram } from "#uom-types/units";

/**
 * Convert {@link Gram} to {@link Kilogram}.
 */
export function gramToKilogram(mass: Gram): Kilogram {
  return div(mass, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}

/**
 * Convert {@link Gram} to {@link Tonne}.
 */
export function gramToTonnes(mass: Gram): Tonne {
  return div(mass, 1_000_000 as UnitConversionRate<{ scalar10: -6 }>);
}

/**
 * Convert {@link Kilogram} to {@link Gram}.
 */
export function kilogramToGram(mass: Kilogram): Gram {
  return mul(mass, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}

/**
 * Convert {@link Kilogram} to {@link Tonne}.
 */
export function kilogramToTonnes(mass: Kilogram): Tonne {
  return div(mass, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}

/**
 * Convert {@link Tonne} to {@link Gram}.
 */
export function tonnesToGram(mass: Tonne): Gram {
  return mul(mass, 1_000_000 as UnitConversionRate<{ scalar10: -6 }>);
}

/**
 * Convert {@link Tonne} to {@link Kilogram}.
 */
export function tonnesToKilogram(mass: Tonne): Kilogram {
  return mul(mass, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}
