import { type UnitConversionRate } from "#uom-types";
import { mul, div } from "#uom-types/functions";
import { type Cubic, type Metre, type Litre } from "#uom-types/units";

/**
 * Convert {@link Cubic}<{@link Metre}> to {@link Litre}.
 */
export function cubicMetresToLitres(volume: Cubic<Metre>): Litre {
  return mul(volume, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}

/**
 * Convert {@link Litre} to {@link Cubic}<{@link Metre}>.
 */
export function litresToCubicMetres(volume: Litre): Cubic<Metre> {
  return div(volume, 1000 as UnitConversionRate<{ scalar10: -3 }>);
}
