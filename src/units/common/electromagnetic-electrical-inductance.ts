// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type {
  AbstractUnitFrom,
  Divide,
  Multiply,
  UnitFrom,
  UnitMeta,
  UnitSubvalues,
  UnknownUnitMeta,
} from "#uom-types";

import type { BaseUnitClass } from "../base-units";

import type { Ampere, Ohm, Second, Weber } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricInductanceUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 2;
  Second: -2;
  Ampere: -2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricInductance = AbstractUnitFrom<ElectricInductanceUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricInductanceUnit<M extends UnitSubvalues> = ElectricInductanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricInductanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ElectricInductanceUnitClass, M>;

/**
 * A unit of {@link ElectricInductance}.
 *
 * @group Units
 * @category Derived
 * @symbol `H`
 */
export type Henry = ElectricInductanceUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Henry", () => {
    it("is webers per ampere", () => {
      assert<Equals<Henry, Divide<Weber, Ampere>>>();
    });

    it("is ohms per seconds", () => {
      assert<Equals<Henry, Multiply<Ohm, Second>>>();
    });
  });
}
