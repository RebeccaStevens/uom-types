import { type UnitConversionRate } from "#uom-types";
import { div, mul } from "#uom-types/functions";
import {
  type Metre,
  type Are,
  type Hectare,
  type Square,
} from "#uom-types/units";

/**
 * Convert {@link Square}<{@link Metre}> to {@link Are}.
 */
export function squareMetresToAres(area: Square<Metre>): Are {
  return div(area, 100 as UnitConversionRate<{ scalar10: -2 }>);
}

/**
 * Convert {@link Square}<{@link Metre}> to {@link Hectare}.
 */
export function squareMetresToHectares(area: Square<Metre>): Hectare {
  return div(area, 10_000 as UnitConversionRate<{ scalar10: -4 }>);
}

/**
 * Convert {@link Are} to {@link Square}<{@link Metre}>.
 */
export function aresToSquareMetres(area: Are): Square<Metre> {
  return mul(area, 100 as UnitConversionRate<{ scalar10: -2 }>);
}

/**
 * Convert {@link Are} to {@link Hectare}.
 */
export function aresToHectares(area: Are): Hectare {
  return div(area, 100 as UnitConversionRate<{ scalar10: -2 }>);
}

/**
 * Convert {@link Hectare} to {@link Square}<{@link Metre}>.
 */
export function hectaresToSquareMetres(area: Hectare): Square<Metre> {
  return mul(area, 10_000 as UnitConversionRate<{ scalar10: -4 }>);
}

/**
 * Convert {@link Hectare} to {@link Are}.
 */
export function hectaresToAres(area: Hectare): Are {
  return mul(area, 100 as UnitConversionRate<{ scalar10: -2 }>);
}
