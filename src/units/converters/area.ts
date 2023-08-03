import { type UnitConversionRate } from "#uom-types";
import { div, mul } from "#uom-types/functions";
import { type SquareMeters, type Ares, type Hectares } from "#uom-types/units";

/**
 * Convert {@link SquareMeters} to {@link Ares}.
 */
export function squareMetersToAres(area: SquareMeters): Ares {
  return div(area, 100 as UnitConversionRate<{ scalar10: -2 }>);
}

/**
 * Convert {@link SquareMeters} to {@link Hectares}.
 */
export function squareMetersToHectares(area: SquareMeters): Hectares {
  return div(area, 10_000 as UnitConversionRate<{ scalar10: -4 }>);
}

/**
 * Convert {@link Ares} to {@link SquareMeters}.
 */
export function aresToSquareMeters(area: Ares): SquareMeters {
  return mul(area, 100 as UnitConversionRate<{ scalar10: -2 }>);
}

/**
 * Convert {@link Ares} to {@link Hectares}.
 */
export function aresToHectares(area: Ares): Hectares {
  return div(area, 100 as UnitConversionRate<{ scalar10: -2 }>);
}

/**
 * Convert {@link Hectares} to {@link SquareMeters}.
 */
export function hectaresToSquareMeters(area: Hectares): SquareMeters {
  return mul(area, 10_000 as UnitConversionRate<{ scalar10: -4 }>);
}

/**
 * Convert {@link Hectares} to {@link Ares}.
 */
export function hectaresToAres(area: Hectares): Ares {
  return mul(area, 100 as UnitConversionRate<{ scalar10: -2 }>);
}
