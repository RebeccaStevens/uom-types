// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Multiply,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";

import { type Ampere, type Radian } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagnetomotiveForceUnitClass = BaseUnitClass<{
  Ampere: 1;
  Radian: 1;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type MagnetomotiveForce = AbstractUnitFrom<MagnetomotiveForceUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagnetomotiveForceUnit<M extends UnitSubvalues> =
  MagnetomotiveForceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagnetomotiveForceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MagnetomotiveForceUnitClass,
  M
>;

/**
 * A unit of {@link MagnetomotiveForce}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `A⋅rad`
 */
export type AmpereRadian = MagnetomotiveForceUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<AmpereRadian, Multiply<Ampere, Radian>>>();
}
