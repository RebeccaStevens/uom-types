// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type Divide,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";

import { type Lumen, type Watt } from ".";

/**
 * @group Unit Classes
 * @category Photometric
 */
export type LuminousEfficacyUnitClass = BaseUnitClass<{
  Candela: 1;
  Radian: 2;
  Kilogram: -1;
  Metre: -2;
  Second: 3;
}>;

/**
 * @group Abstract Units
 * @category Photometric
 */
export type LuminousEfficacy = AbstractUnitFrom<LuminousEfficacyUnitClass>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminousEfficacyUnit<M extends UnitSubvalues> =
  LuminousEfficacyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
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
  assert<Equals<LumenPerWatt, Divide<Lumen, Watt>>>();
}
