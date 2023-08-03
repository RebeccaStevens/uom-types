import { type UnitConversionRate } from "#uom-types";
import { mul, div } from "#uom-types/functions";
import { type Grams, type Tonnes, type Kilograms } from "#uom-types/units";

/**
 * Convert {@link Grams} to {@link Kilograms}.
 */
export function gramsToKilograms(mass: Grams): Kilograms {
  return div(mass, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}

/**
 * Convert {@link Grams} to {@link Tonnes}.
 */
export function gramsToTonnes(mass: Grams): Tonnes {
  return div(mass, 1_000_000 as UnitConversionRate<{ scalar10: -6 }>);
}

/**
 * Convert {@link Kilograms} to {@link Grams}.
 */
export function kilogramsToGrams(mass: Kilograms): Grams {
  return mul(mass, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}

/**
 * Convert {@link Kilograms} to {@link Tonnes}.
 */
export function kilogramsToTonnes(mass: Kilograms): Tonnes {
  return div(mass, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}

/**
 * Convert {@link Tonnes} to {@link Grams}.
 */
export function tonnesToGrams(mass: Tonnes): Grams {
  return mul(mass, 1_000_000 as UnitConversionRate<{ scalar10: -6 }>);
}

/**
 * Convert {@link Tonnes} to {@link Kilograms}.
 */
export function tonnesToKilograms(mass: Tonnes): Kilograms {
  return mul(mass, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}
