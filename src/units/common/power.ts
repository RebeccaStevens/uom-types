// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Multiply,
  type Divide,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";

import { type Ampere, type Volt, type Joule, type Second } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 * @category Mechanical
 */
export type PowerUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Metre: 2;
  Second: -3;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 * @category Mechanical
 */
export type Power = AbstractUnitFrom<PowerUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 * @category Mechanical
 */
export type PowerUnit<M extends UnitSubvalues> = PowerUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 * @category Mechanical
 */
export type PowerUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  PowerUnitClass,
  M
>;

/**
 * A unit of {@link Power}.
 *
 * @group Units
 * @category Derived
 * @category Electromagnetic
 * @category Mechanical
 * @symbol `W`
 */
export type Watt = PowerUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Watt", () => {
    it("is joules per second", () => {
      assert<Equals<Watt, Divide<Joule, Second>>>();
    });

    it("is ampere by volts", () => {
      assert<Equals<Watt, Multiply<Ampere, Volt>>>();
    });
  });
}
