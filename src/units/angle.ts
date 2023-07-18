import {
  type AbstractUnitFrom,
  type UnitFrom,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type PlaneAngleUnitClass = SiUnitClass<{}>;
export type PlaneAngle = AbstractUnitFrom<PlaneAngleUnitClass>;
export type PlaneAngleUnit<M extends Record<string, Exponent>> = UnitFrom<
  PlaneAngleUnitClass,
  UnitMeta<M>
>;

export type SolidAngleUnitClass = SiUnitClass<{}>;
export type SolidAngle = AbstractUnitFrom<SolidAngleUnitClass>;
export type SolidAngleUnit<M extends Record<string, Exponent>> = UnitFrom<
  SolidAngleUnitClass,
  UnitMeta<M>
>;

/**
 * One radian is equal to the angle subtended at the centre of a circle by an
 * arc equal in length to the radius.
 *
 * The total plane angle about a point is 2π radians.
 *
 * @siunit
 * @symbol `rad`
 */
export type Radians = PlaneAngleUnit<{}>;

/**
 * The total angle of a circle is 360 degrees.
 *
 * @symbol `°`
 */
export type Degrees = PlaneAngleUnit<{ "scalar360/2π": 1 }>;

/**
 * One steradian is the solid angle of a sphere subtended by a portion of the
 * surface whose area is equal to the square of the sphere's radius.
 *
 * The total solid angle about a point is equal to 4π steradians.
 *
 * @siunit
 * @symbol `sr`
 */
export type Steradians = SolidAngleUnit<{}>;
