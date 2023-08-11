// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Divide,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";
import { type Square } from "../modifiers";

import { type Metre, type Weber } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticFluxDensityUnitClass = BaseUnitClass<{
  Ampere: -1;
  Kilogram: 1;
  Second: -2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticFluxDensity =
  AbstractUnitFrom<MagneticFluxDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticFluxDensityUnit<M extends UnitSubvalues> =
  MagneticFluxDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticFluxDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MagneticFluxDensityUnitClass,
  M
>;

/**
 * A unit of {@link MagneticFluxDensity}.
 *
 * One Tesla is equal equal to one weber per square metre.
 *
 * @group Units
 * @category Derived
 * @symbol `T`
 */
export type Tesla = MagneticFluxDensityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Tesla", () => {
    it("is weber per square metre", () => {
      assert<Equals<Tesla, Divide<Weber, Square<Metre>>>>();
    });
  });
}
