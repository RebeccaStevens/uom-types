// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Divide } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";
import type { Square } from "../modifiers/index.ts";

import type { Meter, Newton } from "./index.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type PressureUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: -1;
  Second: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Pressure = AbstractUnitFrom<PressureUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type PressureUnit<M extends UnitSubvalues> = PressureUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type PressureUnitFrom<M extends UnknownUnitMeta> = UnitFrom<PressureUnitClass, M>;

/**
 * A unit of {@link Pressure}.
 *
 * One pascal is equal to one newton per square meter.
 *
 * @group Units
 * @category Derived
 * @category Mechanical
 * @symbol `Pa`
 */
export type Pascal = PressureUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Pascal", () => {
    it("is newtons per square meter", () => {
      assert<Equals<Pascal, Divide<Newton, Square<Meter>>>>();
    });
  });
}
