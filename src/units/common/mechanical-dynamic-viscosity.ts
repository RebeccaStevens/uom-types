// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { Multiply } from "../../units-operations";
import type { BaseUnitClass } from "../base-units";

import type { Pascal, Second } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type DynamicViscosityUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: -1;
  Second: -1;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type DynamicViscosity = AbstractUnitFrom<DynamicViscosityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type DynamicViscosityUnit<M extends UnitSubvalues> = DynamicViscosityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type DynamicViscosityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<DynamicViscosityUnitClass, M>;

/**
 * A unit of {@link DynamicViscosity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `Pa⋅s`
 */
export type PascalSecond = DynamicViscosityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("PascalSecond", () => {
    it("is pascals by seconds", () => {
      assert<Equals<PascalSecond, Multiply<Pascal, Second>>>();
    });
  });
}
