// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, Divide, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "#uom-types";

import type { BaseUnitClass } from "../base-units";

import type { Ampere, Volt } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricConductanceUnitClass = BaseUnitClass<{
  Kilogram: -1;
  Meter: -2;
  Second: 3;
  Ampere: 2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricConductance = AbstractUnitFrom<ElectricConductanceUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricConductanceUnit<M extends UnitSubvalues> = ElectricConductanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricConductanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ElectricConductanceUnitClass, M>;

/**
 * A unit of {@link ElectricConductance}.
 *
 * One Siemens is equal to one ampere per volt.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `S`
 */
export type Siemens = ElectricConductanceUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Siemens", () => {
    it("is amperes per volt", () => {
      assert<Equals<Siemens, Divide<Ampere, Volt>>>();
    });
  });
}
