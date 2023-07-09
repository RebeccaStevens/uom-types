import { type Unit } from "#uom-types";

/**
 * Plane angle.
 *
 * One radian is equal to the angle subtended at the centre of a circle by an arc equal in length to the radius.
 * The total angle of a circle is 2π radians.
 *
 * @symbol `rad`
 */
export type Radian = Unit<{}>;

/**
 * Plane angle.
 *
 * The total angle of a circle is 360 degrees.
 *
 * @symbol `°`
 */
export type Degrees = Unit<{ magnitude360: 1 }>;

/**
 * Solid angle.
 *
 * One steradian is the solid angle subtended at the center of a sphere by an area on the
 * surface of the sphere that is equal to the radius squared.
 * The total solid angle of a sphere is 4π steradians.
 *
 * @symbol `sr`
 */
export type Steradians = Unit<{}>;
