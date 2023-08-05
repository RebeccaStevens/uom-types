import { type UnitConversionRate } from "#uom-types";
import { div, mul } from "#uom-types/functions";
import { type SquareMetre, type Are, type Hectare } from "#uom-types/units";

/**
 * Convert {@link SquareMetre} to {@link Are}.
 */
export function squareMetreToAres(area: SquareMetre): Are {
  return div(area, 100 as UnitConversionRate<{ scalar10: -2 }>);
}

/**
 * Convert {@link SquareMetre} to {@link Hectare}.
 */
export function squareMetreToHectares(area: SquareMetre): Hectare {
  return div(area, 10_000 as UnitConversionRate<{ scalar10: -4 }>);
}

/**
 * Convert {@link Are} to {@link SquareMetre}.
 */
export function aresToSquareMetre(area: Are): SquareMetre {
  return mul(area, 100 as UnitConversionRate<{ scalar10: -2 }>);
}

/**
 * Convert {@link Are} to {@link Hectare}.
 */
export function aresToHectares(area: Are): Hectare {
  return div(area, 100 as UnitConversionRate<{ scalar10: -2 }>);
}

/**
 * Convert {@link Hectare} to {@link SquareMetre}.
 */
export function hectaresToSquareMetre(area: Hectare): SquareMetre {
  return mul(area, 10_000 as UnitConversionRate<{ scalar10: -4 }>);
}

/**
 * Convert {@link Hectare} to {@link Are}.
 */
export function hectaresToAres(area: Hectare): Are {
  return mul(area, 100 as UnitConversionRate<{ scalar10: -2 }>);
}
