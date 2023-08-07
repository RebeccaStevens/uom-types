// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type Multiply,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Radian } from ".";

/**
 * @group Unit Classes
 * @category Angle (Solid)
 */
export type SolidAngleUnitClass = SiUnitClass<{
  Radian: 2;
}>;

/**
 * @group Abstract Unit
 * @category Angle (Solid)
 */
export type SolidAngle = AbstractUnitFrom<SolidAngleUnitClass>;

/**
 * @group Unit Creators
 * @category Angle (Solid)
 */
export type SolidAngleUnit<M extends UnitSubvalues> = SolidAngleUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Creators
 * @category Angle (Solid)
 */
export type SolidAngleUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  SolidAngleUnitClass,
  M
>;

/**
 * A unit of {@link SolidAngle}.
 *
 * One steradian is the solid angle of a sphere subtended by a portion of the
 * surface whose area is equal to the square of the sphere's radius.
 * The total solid angle about a point is equal to 4π steradian.
 *
 * @group Units
 * @category Derived
 * @category Angle (Solid)
 * @symbol `sr`
 */
export type Steradian = SolidAngleUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Steradian, Multiply<Radian, Radian>>>();
}
