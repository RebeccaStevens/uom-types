// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { Divide, Multiply } from "../../units-operations";
import type { BaseUnitClass } from "../base-units";
import type { Cubic, Square } from "../modifiers";

import type { Meter } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type AreaUnitClass = BaseUnitClass<{ Meter: 2 }>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Area = AbstractUnitFrom<AreaUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type AreaUnit<M extends UnitSubvalues> = AreaUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type AreaUnitFrom<M extends UnknownUnitMeta> = UnitFrom<AreaUnitClass, M>;

/**
 * A unit of {@link Area} equal to 100 {@link Square}<{@link Meter}>.
 *
 * @group Units
 * @category Mechanical
 * @symbol `a`
 */
export type Are = AreaUnit<{ scalar10: 2 }>;

/**
 * A unit of {@link Area} equal to 10,000 {@link Square}<{@link Meter}>.
 *
 * @group Units
 * @category Mechanical
 * @symbol `ha`
 */
export type Hectare = AreaUnit<{ scalar10: 4 }>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("SquareMeter", () => {
    it("is meters by meters", () => {
      assert<Equals<Square<Meter>, Multiply<Meter, Meter>>>();
    });

    it("is cubic meters per meter", () => {
      assert<Equals<Square<Meter>, Divide<Cubic<Meter>, Meter>>>();
    });
  });
}
