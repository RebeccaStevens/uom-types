import { type UnitConversionRate } from "#uom-types";
import { div, mul } from "#uom-types/functions";
import {
  type Radians,
  type Degrees,
  type Gradians,
  type Turns,
} from "#uom-types/units";

/**
 * Convert {@link Radians} to {@link Degrees}.
 */
export function radiansToDegrees(angle: Radians): Degrees {
  return mul(
    angle,
    (180 / Math.PI) as UnitConversionRate<{ scalar360: 1; scalar2π: -1 }>,
  );
}

/**
 * Convert {@link Radians} to {@link Gradians}.
 */
export function radiansToGradians(angle: Radians): Gradians {
  return mul(
    angle,
    (200 / Math.PI) as UnitConversionRate<{ scalar400: 1; scalar2π: -1 }>,
  );
}

/**
 * Convert {@link Radians} to {@link Turns}.
 */
export function radiansToTurns(angle: Radians): Turns {
  return div(angle, Math.PI as UnitConversionRate<{ scalar2π: 1 }>);
}

/**
 * Convert {@link Degrees} to {@link Radians}.
 */
export function degreesToRadians(angle: Degrees): Radians {
  return mul(
    angle,
    (Math.PI / 180) as UnitConversionRate<{ scalar360: -1; scalar2π: 1 }>,
  );
}

/**
 * Convert {@link Degrees} to {@link Gradians}.
 */
export function degreesToGradians(angle: Degrees): Gradians {
  return mul(
    angle,
    (10 / 9) as UnitConversionRate<{ scalar360: -1; scalar400: 1 }>,
  );
}

/**
 * Convert {@link Degrees} to {@link Turns}.
 */
export function degreesToTurns(angle: Degrees): Turns {
  return div(angle, 360 as UnitConversionRate<{ scalar360: 1 }>);
}

/**
 * Convert {@link Gradians} to {@link Radians}.
 */
export function gradiansToRadians(angle: Gradians): Radians {
  return mul(
    angle,
    (Math.PI / 400) as UnitConversionRate<{ scalar400: -1; scalar2π: 1 }>,
  );
}

/**
 * Convert {@link Gradians} to {@link Degrees}.
 */
export function gradiansToDegrees(angle: Gradians): Degrees {
  return mul(
    angle,
    (9 / 10) as UnitConversionRate<{ scalar360: 1; scalar400: -1 }>,
  );
}

/**
 * Convert {@link Gradians} to {@link Turns}.
 */
export function gradiansToTurns(angle: Gradians): Turns {
  return div(angle, 400 as UnitConversionRate<{ scalar400: 1 }>);
}

/**
 * Convert {@link Turns} to {@link Radians}.
 */
export function turnsToRadians(angle: Turns): Radians {
  return mul(angle, (2 * Math.PI) as UnitConversionRate<{ scalar2π: 1 }>);
}

/**
 * Convert {@link Turns} to {@link Degrees}.
 */
export function turnsToDegrees(angle: Turns): Degrees {
  return mul(angle, 360 as UnitConversionRate<{ scalar360: 1 }>);
}

/**
 * Convert {@link Turns} to {@link Gradians}.
 */
export function turnsToGradians(angle: Turns): Gradians {
  return mul(angle, 400 as UnitConversionRate<{ scalar400: 1 }>);
}
