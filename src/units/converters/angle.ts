import { type UnitConversionRate } from "#uom-types";
import { div, mul } from "#uom-types/functions";
import {
  type Radian,
  type Degree,
  type Gradian,
  type Turn,
} from "#uom-types/units";

/**
 * Convert {@link Radian} to {@link Degree}.
 */
export function radiansToDegrees(angle: Radian): Degree {
  return mul(
    angle,
    (180 / Math.PI) as UnitConversionRate<{ scalar360: 1; scalar2π: -1 }>,
  );
}

/**
 * Convert {@link Radian} to {@link Gradian}.
 */
export function radiansToGradians(angle: Radian): Gradian {
  return mul(
    angle,
    (200 / Math.PI) as UnitConversionRate<{ scalar400: 1; scalar2π: -1 }>,
  );
}

/**
 * Convert {@link Radian} to {@link Turn}.
 */
export function radiansToTurns(angle: Radian): Turn {
  return div(angle, Math.PI as UnitConversionRate<{ scalar2π: 1 }>);
}

/**
 * Convert {@link Degree} to {@link Radian}.
 */
export function degreesToRadians(angle: Degree): Radian {
  return mul(
    angle,
    (Math.PI / 180) as UnitConversionRate<{ scalar360: -1; scalar2π: 1 }>,
  );
}

/**
 * Convert {@link Degree} to {@link Gradian}.
 */
export function degreesToGradians(angle: Degree): Gradian {
  return mul(
    angle,
    (10 / 9) as UnitConversionRate<{ scalar360: -1; scalar400: 1 }>,
  );
}

/**
 * Convert {@link Degree} to {@link Turn}.
 */
export function degreesToTurns(angle: Degree): Turn {
  return div(angle, 360 as UnitConversionRate<{ scalar360: 1 }>);
}

/**
 * Convert {@link Gradian} to {@link Radian}.
 */
export function gradiansToRadians(angle: Gradian): Radian {
  return mul(
    angle,
    (Math.PI / 400) as UnitConversionRate<{ scalar400: -1; scalar2π: 1 }>,
  );
}

/**
 * Convert {@link Gradian} to {@link Degree}.
 */
export function gradiansToDegrees(angle: Gradian): Degree {
  return mul(
    angle,
    (9 / 10) as UnitConversionRate<{ scalar360: 1; scalar400: -1 }>,
  );
}

/**
 * Convert {@link Gradian} to {@link Turn}.
 */
export function gradiansToTurns(angle: Gradian): Turn {
  return div(angle, 400 as UnitConversionRate<{ scalar400: 1 }>);
}

/**
 * Convert {@link Turn} to {@link Radian}.
 */
export function turnsToRadians(angle: Turn): Radian {
  return mul(angle, (2 * Math.PI) as UnitConversionRate<{ scalar2π: 1 }>);
}

/**
 * Convert {@link Turn} to {@link Degree}.
 */
export function turnsToDegrees(angle: Turn): Degree {
  return mul(angle, 360 as UnitConversionRate<{ scalar360: 1 }>);
}

/**
 * Convert {@link Turn} to {@link Gradian}.
 */
export function turnsToGradians(angle: Turn): Gradian {
  return mul(angle, 400 as UnitConversionRate<{ scalar400: 1 }>);
}
