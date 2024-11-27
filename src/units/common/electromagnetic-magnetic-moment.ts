// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Multiply } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";

import type { Meter, Weber } from "./index.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticMomentUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 3;
  Second: -2;
  Ampere: -1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticMoment = AbstractUnitFrom<MagneticMomentUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticMomentUnit<M extends UnitSubvalues> = MagneticMomentUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticMomentUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MagneticMomentUnitClass, M>;

/**
 * A unit of {@link MagneticMoment}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `Wb⋅m`
 */
export type WeberMeter = MagneticMomentUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("WeberMeter", () => {
    it("is weber meters", () => {
      assert<Equals<WeberMeter, Multiply<Weber, Meter>>>();
    });
  });
}
