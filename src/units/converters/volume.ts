import { type UnitConversionRate } from "#uom-types";
import { mul, div } from "#uom-types/functions";
import {
  type Cubic,
  type Metre,
  type CubicCentiMetre,
  type Litre,
} from "#uom-types/units";

/**
 * Convert {@link Cubic}<{@link Metre}> to {@link CubicCentiMetre}.
 */
export function cubicMetreToCubicCentiMetre(
  volume: Cubic<Metre>,
): CubicCentiMetre {
  return mul(volume, 1_000_000 as UnitConversionRate<{ scalar10: -6 }>);
}

/**
 * Convert {@link Cubic}<{@link Metre}> to {@link Litre}.
 */
export function cubicMetreToLitre(volume: Cubic<Metre>): Litre {
  return mul(volume, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}

/**
 * Convert {@link CubicCentiMetre} to {@link Cubic}<{@link Metre}>.
 */
export function cubicCentiMetreToCubicMetre(
  volume: CubicCentiMetre,
): Cubic<Metre> {
  return div(volume, 1_000_000 as UnitConversionRate<{ scalar10: -6 }>);
}

/**
 * Convert {@link CubicCentiMetre} to {@link Litre}.
 */
export function cubicCentiMetreToLitre(volume: CubicCentiMetre): Litre {
  return div(volume, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}

/**
 * Convert {@link Litre} to {@link CubicCentiMetre}.
 */
export function litreToCubicCentiMetre(volume: Litre): CubicCentiMetre {
  return mul(volume, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}

/**
 * Convert {@link Litre} to {@link Cubic}<{@link Metre}>.
 */
export function litreToCubicMetre(volume: Litre): Cubic<Metre> {
  return div(volume, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}
