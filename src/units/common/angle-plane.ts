import {
  type UnknownUnitMeta,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";

/**
 * @group Unit Classes
 * @category Angle (Plane)
 */
export type PlaneAngleUnitClass = BaseUnitClass<{
  Radian: 1;
}>;

/**
 * @group Abstract Unit
 * @category Angle (Plane)
 */
export type PlaneAngle = AbstractUnitFrom<PlaneAngleUnitClass>;

/**
 * @group Unit Generators
 * @category Angle (Plane)
 */
export type PlaneAngleUnit<M extends UnitSubvalues> = PlaneAngleUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Generators
 * @category Angle (Plane)
 */
export type PlaneAngleUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  PlaneAngleUnitClass,
  M
>;

/**
 * A unit of {@link PlaneAngle}.
 *
 * One radian is equal to the angle subtended at the centre of a circle by an
 * arc equal in length to the radius.
 * The total plane angle about a point is 2π radian.
 *
 * @group Units
 * @category Base
 * @category Angle (Plane)
 * @symbol `rad`
 */
export type Radian = PlaneAngleUnit<{}>;

/**
 * A unit of {@link PlaneAngle}.
 *
 * The total plane angle of a circle is 360 degrees.
 *
 * @group Units
 * @category Angle (Plane)
 * @symbol `°`
 */
export type Degree = PlaneAngleUnit<{ scalar360: 1; scalar2π: -1 }>;

/**
 * A unit of {@link PlaneAngle}.
 *
 * One gradian is equal to 100th of a right angle.
 * The total plane angle about a point is 400 gradian.
 *
 * @group Units
 * @category Angle (Plane)
 * @symbol `gon`
 */
export type Gradian = PlaneAngleUnit<{ scalar400: 1; scalar2π: -1 }>;

/**
 * A unit of {@link PlaneAngle}.
 *
 * One turn is equal to 1 full rotation about a point.
 *
 * @group Units
 * @category Angle (Plane)
 * @symbol `tr`
 */
export type Turn = PlaneAngleUnit<{ scalar2π: -1 }>;
