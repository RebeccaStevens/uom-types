// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { Divide } from "../../units-operations";
import type { BaseUnitClass } from "../base-units";
import type { Kilo } from "../modifiers";

import type { Gram, Joule } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type EnthalpyUnitClass = BaseUnitClass<{ Meter: 2; Second: -2 }>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Enthalpy = AbstractUnitFrom<EnthalpyUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type EnthalpyUnit<M extends UnitSubvalues> = EnthalpyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type EnthalpyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<EnthalpyUnitClass, M>;

/**
 * A unit of {@link Enthalpy}.
 *
 * One gray is equal to the dose of one joule of energy absorbed per one kilogram of matter.
 *
 * @group Units
 * @category Derived
 * @category Mechanical
 * @symbol `Gy`
 */
export type Gray = EnthalpyUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Gray", () => {
    it("is joules per kilogram", () => {
      assert<Equals<Gray, Divide<Joule, Kilo<Gram>>>>();
    });
  });
}
