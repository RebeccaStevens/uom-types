// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, Divide, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "#uom-types";

import type { BaseUnitClass } from "../base-units";

import type { Newton, Second } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type YankUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 1;
  Second: -3;
}>;

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type Yank = AbstractUnitFrom<YankUnitClass>;

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type YankUnit<M extends UnitSubvalues> = YankUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type YankUnitFrom<M extends UnknownUnitMeta> = UnitFrom<YankUnitClass, M>;

/**
 * A unit of {@link Yank}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N/s`
 */
export type NewtonPerSecond = YankUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("NewtonPerSecond", () => {
    it("is newtons per second", () => {
      assert<Equals<NewtonPerSecond, Divide<Newton, Second>>>();
    });
  });
}
