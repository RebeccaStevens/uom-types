import { type UnitConversionRate } from "#uom-types";
import { div, mul } from "#uom-types/math";
import {
  type Meter,
  type Are,
  type Hectare,
  type Square,
} from "#uom-types/units";

/**
 * Convert {@link Square}<{@link Meter}> to {@link Are}.
 */
export function squareMetersToAres(area: Square<Meter>): Are {
  return div(area, 100 as UnitConversionRate<{ scalar10: -2 }>);
}

/**
 * Convert {@link Square}<{@link Meter}> to {@link Hectare}.
 */
export function squareMetersToHectares(area: Square<Meter>): Hectare {
  return div(area, 10_000 as UnitConversionRate<{ scalar10: -4 }>);
}

/**
 * Convert {@link Are} to {@link Square}<{@link Meter}>.
 */
export function aresToSquareMeters(area: Are): Square<Meter> {
  return mul(area, 100 as UnitConversionRate<{ scalar10: -2 }>);
}

/**
 * Convert {@link Are} to {@link Hectare}.
 */
export function aresToHectares(area: Are): Hectare {
  return div(area, 100 as UnitConversionRate<{ scalar10: -2 }>);
}

/**
 * Convert {@link Hectare} to {@link Square}<{@link Meter}>.
 */
export function hectaresToSquareMeters(area: Hectare): Square<Meter> {
  return mul(area, 10_000 as UnitConversionRate<{ scalar10: -4 }>);
}

/**
 * Convert {@link Hectare} to {@link Are}.
 */
export function hectaresToAres(area: Hectare): Are {
  return mul(area, 100 as UnitConversionRate<{ scalar10: -2 }>);
}
