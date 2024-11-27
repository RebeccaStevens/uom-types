// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Divide } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";
import type { Square } from "../modifiers/index.ts";

import type { Meter, Weber } from "./index.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticFluxDensityUnitClass = BaseUnitClass<{
  Ampere: -1;
  Kilogram: 1;
  Second: -2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticFluxDensity = AbstractUnitFrom<MagneticFluxDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticFluxDensityUnit<M extends UnitSubvalues> = MagneticFluxDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticFluxDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MagneticFluxDensityUnitClass, M>;

/**
 * A unit of {@link MagneticFluxDensity}.
 *
 * One Tesla is equal equal to one weber per square meter.
 *
 * @group Units
 * @category Derived
 * @symbol `T`
 */
export type Tesla = MagneticFluxDensityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Tesla", () => {
    it("is weber per square meter", () => {
      assert<Equals<Tesla, Divide<Weber, Square<Meter>>>>();
    });
  });
}
