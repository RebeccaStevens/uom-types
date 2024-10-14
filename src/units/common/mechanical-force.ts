// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { Multiply } from "../../units-operations";
import type { BaseUnitClass } from "../base-units";
import type { Kilo } from "../modifiers";

import type { Gram, MeterPerSecondSquared } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type ForceUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 1;
  Second: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Force = AbstractUnitFrom<ForceUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type ForceUnit<M extends UnitSubvalues> = ForceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type ForceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ForceUnitClass, M>;

/**
 * A unit of {@link Force}.
 *
 * One newton is the force required to accelerate a mass of 1 kilogram at 1 meter per second per second.
 *
 * @group Units
 * @category Derived
 * @category Mechanical
 * @symbol `N`
 */
export type Newton = ForceUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Newton", () => {
    it("is kilograms by meters per squared second", () => {
      assert<Equals<Newton, Multiply<Kilo<Gram>, MeterPerSecondSquared>>>();
    });
  });
}
