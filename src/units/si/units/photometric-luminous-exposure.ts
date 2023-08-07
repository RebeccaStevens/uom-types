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

import { type Lux, type Second } from ".";

/**
 * @group Unit Classes
 * @category Photometric
 */
export type LuminousExposureUnitClass = BaseUnitClass<{
  Candela: 1;
  Metre: -2;
  Second: 1;
}>;

/**
 * @group Abstract Unit
 * @category Photometric
 */
export type LuminousExposure = AbstractUnitFrom<LuminousExposureUnitClass>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminousExposureUnit<M extends UnitSubvalues> =
  LuminousExposureUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminousExposureUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  LuminousExposureUnitClass,
  M
>;

/**
 * A unit of {@link LuminousExposure}.
 *
 * @group Units
 * @category Photometric
 * @symbol `lx⋅s`
 */
export type LuxSecond = LuminousExposureUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<LuxSecond, Multiply<Lux, Second>>>();
}
