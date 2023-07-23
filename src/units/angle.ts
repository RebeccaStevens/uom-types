import {
  type AbstractUnitFrom,
  type Exponent,
  type UnitFrom,
  type UnitMeta,
} from "#uom-types";

import { type FlatternAlias } from "../utils";

import { type SiUnitClass } from "./si-unit";

export type PlaneAngleUnitClass = SiUnitClass<{}>;
export type PlaneAngle = AbstractUnitFrom<PlaneAngleUnitClass>;
export type PlaneAngleBaseMetaConfig = {
  readonly __plane_angle: 1;
};
export type PlaneAngleUnit<M extends Record<string, Exponent>> = UnitFrom<
  PlaneAngleUnitClass,
  UnitMeta<FlatternAlias<Readonly<M> & PlaneAngleBaseMetaConfig>>
>;

export type SolidAngleUnitClass = SiUnitClass<{}>;
export type SolidAngle = AbstractUnitFrom<SolidAngleUnitClass>;
export type SolidAngleBaseMetaConfig = {
  readonly __solid_angle: 1;
};
export type SolidAngleUnit<M extends Record<string, Exponent>> = UnitFrom<
  SolidAngleUnitClass,
  UnitMeta<FlatternAlias<Readonly<M> & SolidAngleBaseMetaConfig>>
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
