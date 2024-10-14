// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { Divide, Multiply } from "../../units-operations";
import type { BaseUnitClass } from "../base-units";
import type { Square } from "../modifiers";

import type { Joule, Meter, Second } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type EnergyFluxDensityUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Second: -3;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type EnergyFluxDensity = AbstractUnitFrom<EnergyFluxDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type EnergyFluxDensityUnit<M extends UnitSubvalues> = EnergyFluxDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type EnergyFluxDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<EnergyFluxDensityUnitClass, M>;

/**
 * A unit of {@link EnergyFluxDensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J/(m²⋅s)`
 */
export type JoulePerSquareMeterSecond = EnergyFluxDensityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("JoulePerSquareMeterSecond", () => {
    it("is joules per (square meters by seconds)", () => {
      assert<Equals<JoulePerSquareMeterSecond, Divide<Joule, Multiply<Square<Meter>, Second>>>>();
    });
  });
}
