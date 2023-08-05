// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type MultiplyUnits,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Lumen, type Second } from ".";

/**
 * @group Unit Classes
 * @category Photometric
 */
export type LuminousEnergyUnitClass = SiUnitClass<{
  Candela: 1;
  Radian: 2;
  Second: 1;
}>;

/**
 * @group Abstract Unit
 * @category Photometric
 */
export type LuminousEnergy = AbstractUnitFrom<LuminousEnergyUnitClass>;

/**
 * @group Unit Creators
 * @category Photometric
 */
export type LuminousEnergyUnit<M extends UnitSubvalues> =
  LuminousEnergyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Photometric
 */
export type LuminousEnergyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  LuminousEnergyUnitClass,
  M
>;

/**
 * A unit of {@link LuminousEnergy}.
 *
 * @group Units
 * @category Photometric
 * @symbol `lm⋅s`
 */
export type LumenSecond = LuminousEnergyUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<LumenSecond, MultiplyUnits<Lumen, Second>>>();
}
