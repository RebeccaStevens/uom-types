import { type UnitConversionRate } from "#uom-types";
import { mul, div } from "#uom-types/functions";
import {
  type CubicMeters,
  type CubicCentiMeters,
  type Liters,
} from "#uom-types/units";

/**
 * Convert {@link CubicMeters} to {@link CubicCentiMeters}.
 */
export function cubicMetersToCubicCentiMeters(
  volume: CubicMeters,
): CubicCentiMeters {
  return mul(volume, 1_000_000 as UnitConversionRate<{ scalar10: -6 }>);
}

/**
 * Convert {@link CubicMeters} to {@link Liters}.
 */
export function cubicMetersToLiters(volume: CubicMeters): Liters {
  return mul(volume, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}

/**
 * Convert {@link CubicCentiMeters} to {@link CubicMeters}.
 */
export function cubicCentiMetersToCubicMeters(
  volume: CubicCentiMeters,
): CubicMeters {
  return div(volume, 1_000_000 as UnitConversionRate<{ scalar10: -6 }>);
}

/**
 * Convert {@link CubicCentiMeters} to {@link Liters}.
 */
export function cubicCentiMetersToLiters(volume: CubicCentiMeters): Liters {
  return div(volume, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}

/**
 * Convert {@link Liters} to {@link CubicCentiMeters}.
 */
export function litersToCubicCentiMeters(volume: Liters): CubicCentiMeters {
  return mul(volume, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}

/**
 * Convert {@link Liters} to {@link CubicMeters}.
 */
export function litersToCubicMeters(volume: Liters): CubicMeters {
  return div(volume, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}
