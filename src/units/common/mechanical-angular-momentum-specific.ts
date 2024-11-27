// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Divide, Multiply } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";
import type { Kilo } from "../modifiers/index.ts";

import type { Gram, Joule, Meter, Newton, Radian, Second } from "./index.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SpecificAngularMomentumUnitClass = BaseUnitClass<{
  Meter: 2;
  Second: -1;
  Radian: -1;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SpecificAngularMomentum = AbstractUnitFrom<SpecificAngularMomentumUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpecificAngularMomentumUnit<M extends UnitSubvalues> = SpecificAngularMomentumUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpecificAngularMomentumUnitFrom<M extends UnknownUnitMeta> = UnitFrom<SpecificAngularMomentumUnitClass, M>;

/**
 * A unit of {@link SpecificAngularMomentum}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J⋅s/rad/kg`
 */
export type JouleSecondPerRadianPerKilogram = SpecificAngularMomentumUnit<{}>;

/**
 * A unit of {@link SpecificAngularMomentum}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N⋅m⋅s/rad/kg`
 */
export type NewtonMeterSecondPerRadianPerKilogram = JouleSecondPerRadianPerKilogram;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("JouleSecondPerRadianPerKilogram", () => {
    it("is joules by second per radian per kilogram", () => {
      assert<Equals<JouleSecondPerRadianPerKilogram, Divide<Divide<Multiply<Joule, Second>, Radian>, Kilo<Gram>>>>();
    });
  });

  describe("NewtonMeterSecondPerRadianPerKilogram", () => {
    it("is newton meters by second by radian per kilogram", () => {
      assert<
        Equals<
          NewtonMeterSecondPerRadianPerKilogram,
          Divide<Divide<Multiply<Multiply<Newton, Meter>, Second>, Radian>, Kilo<Gram>>
        >
      >();
    });
  });
}
