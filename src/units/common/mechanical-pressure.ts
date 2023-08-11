// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type Divide,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";
import { type Square } from "../modifiers";

import { type Metre, type Newton } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type PressureUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Metre: -1;
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
export type PressureUnit<M extends UnitSubvalues> = PressureUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type PressureUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  PressureUnitClass,
  M
>;

/**
 * A unit of {@link Pressure}.
 *
 * One pascal is equal to one newton per square metre.
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
    it("is newtons per square metre", () => {
      assert<Equals<Pascal, Divide<Newton, Square<Metre>>>>();
    });
  });
}
