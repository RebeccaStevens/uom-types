import { type UnitConversionRate } from "#uom-types";
import { mul, div } from "#uom-types/functions";
import {
  type CubicMetre,
  type CubicCentiMetre,
  type Litre,
} from "#uom-types/units";

/**
 * Convert {@link CubicMetre} to {@link CubicCentiMetre}.
 */
export function cubicMetreToCubicCentiMetre(
  volume: CubicMetre,
): CubicCentiMetre {
  return mul(volume, 1_000_000 as UnitConversionRate<{ scalar10: -6 }>);
}

/**
 * Convert {@link CubicMetre} to {@link Litre}.
 */
export function cubicMetreToLitre(volume: CubicMetre): Litre {
  return mul(volume, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}

/**
 * Convert {@link CubicCentiMetre} to {@link CubicMetre}.
 */
export function cubicCentiMetreToCubicMetre(
  volume: CubicCentiMetre,
): CubicMetre {
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
 * Convert {@link Litre} to {@link CubicMetre}.
 */
export function litreToCubicMetre(volume: Litre): CubicMetre {
  return div(volume, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}
