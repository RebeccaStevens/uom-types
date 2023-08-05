// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type DivideUnits,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Lumen, type Watt } from ".";

/**
 * @group Unit Classes
 * @category Photometric
 */
export type LuminousEfficacyUnitClass = SiUnitClass<{
  Candela: 1;
  Radian: 2;
  Kilogram: -1;
  Metre: -2;
  Second: 3;
}>;

/**
 * @group Abstract Unit
 * @category Photometric
 */
export type LuminousEfficacy = AbstractUnitFrom<LuminousEfficacyUnitClass>;

/**
 * @group Unit Creators
 * @category Photometric
 */
export type LuminousEfficacyUnit<M extends UnitSubvalues> =
  LuminousEfficacyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Photometric
 */
export type LuminousEfficacyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  LuminousEfficacyUnitClass,
  M
>;

/**
 * A unit of {@link LuminousEfficacy}.
 *
 * @group Units
 * @category Photometric
 * @symbol `lm/W`
 */
export type LumenPerWatt = LuminousEfficacyUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<LumenPerWatt, DivideUnits<Lumen, Watt>>>();
}
