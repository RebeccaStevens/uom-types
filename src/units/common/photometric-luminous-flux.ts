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

import { type BaseUnitClass } from "../base-units";

import { type Candela, type Steradian } from ".";

/**
 * @group Unit Classes
 * @category Photometric
 */
export type LuminousFluxUnitClass = BaseUnitClass<{ Candela: 1; Radian: 2 }>;

/**
 * @group Abstract Units
 * @category Photometric
 */
export type LuminousFlux = AbstractUnitFrom<LuminousFluxUnitClass>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminousFluxUnit<M extends UnitSubvalues> = LuminousFluxUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Generators
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
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Lumen", () => {
    it("is candelas by steradians", () => {
      assert<Equals<Lumen, Multiply<Candela, Steradian>>>();
    });
  });
}
