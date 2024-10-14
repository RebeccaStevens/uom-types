// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, Multiply, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "#uom-types";

import type { BaseUnitClass } from "../base-units";

import type { Lumen, Second } from ".";

/**
 * @group Unit Classes
 * @category Photometric
 */
export type LuminousEnergyUnitClass = BaseUnitClass<{
  Candela: 1;
  Radian: 2;
  Second: 1;
}>;

/**
 * @group Abstract Units
 * @category Photometric
 */
export type LuminousEnergy = AbstractUnitFrom<LuminousEnergyUnitClass>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminousEnergyUnit<M extends UnitSubvalues> = LuminousEnergyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminousEnergyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<LuminousEnergyUnitClass, M>;

/**
 * A unit of {@link LuminousEnergy}.
 *
 * @group Units
 * @category Photometric
 * @symbol `lm⋅s`
 */
export type LumenSecond = LuminousEnergyUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("LumenSecond", () => {
    it("is lumens by seconds", () => {
      assert<Equals<LumenSecond, Multiply<Lumen, Second>>>();
    });
  });
}
