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

import { type Candela, type Steradian } from ".";

/**
 * @group Unit Classes
 * @category Photometric
 */
export type LuminousFluxUnitClass = SiUnitClass<{ Candela: 1; Radian: 2 }>;

/**
 * @group Abstract Unit
 * @category Photometric
 */
export type LuminousFlux = AbstractUnitFrom<LuminousFluxUnitClass>;

/**
 * @group Unit Creators
 * @category Photometric
 */
export type LuminousFluxUnit<M extends UnitSubvalues> = LuminousFluxUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Creators
 * @category Photometric
 */
export type LuminousFluxUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  LuminousFluxUnitClass,
  M
>;

/**
 * One Lumen is equal to the amount of light given out through a solid angle by a source of one
 * candela intensity radiating equally in all directions.
 *
 * @group Units
 * @category Derived
 * @symbol `lm`
 */
export type Lumen = LuminousFluxUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Lumen, Multiply<Candela, Steradian>>>();
}
