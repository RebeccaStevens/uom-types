import {
  type AbstractUnitFrom,
  type UnitSubvalues,
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
export type PlaneAngleUnit<T extends UnitSubvalues> = UnitFrom<
  PlaneAngleUnitClass,
  UnitMeta<FlatternAlias<Readonly<T> & PlaneAngleBaseMetaConfig>>
>;

export type SolidAngleUnitClass = SiUnitClass<{}>;
export type SolidAngle = AbstractUnitFrom<SolidAngleUnitClass>;
export type SolidAngleBaseMetaConfig = {
  readonly __solid_angle: 1;
};
export type SolidAngleUnit<T extends UnitSubvalues> = UnitFrom<
  SolidAngleUnitClass,
  UnitMeta<FlatternAlias<Readonly<T> & SolidAngleBaseMetaConfig>>
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
 * The total plane angle of a circle is 360 degrees.
 *
 * @symbol `°`
 */
export type Degrees = PlaneAngleUnit<{ scalar360: 1; scalar2π: -1 }>;

/**
 * One gradian is equal to 100th of a right angle
 *
 * The total plane angle about a point is 400 gradians.
 *
 * @symbol `gon`
 */
export type Gradians = PlaneAngleUnit<{ scalar400: 1; scalar2π: -1 }>;

/**
 * One turn is equal to 1 full rotation about a point.
 *
 * @symbol `tr`
 */
export type Turns = PlaneAngleUnit<{ scalar2π: -1 }>;

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
