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

import { type Meter, type Coulomb } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricDisplacementFieldUnitClass = BaseUnitClass<{
  Ampere: 1;
  Second: 1;
  Meter: -2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricDisplacementField =
  AbstractUnitFrom<ElectricDisplacementFieldUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricDisplacementFieldUnit<M extends UnitSubvalues> =
  ElectricDisplacementFieldUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricDisplacementFieldUnitFrom<M extends UnknownUnitMeta> =
  UnitFrom<ElectricDisplacementFieldUnitClass, M>;

/**
 * A unit of {@link ElectricDisplacementField}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `C/m²`
 */
export type CoulombPerSquareMeter = ElectricDisplacementFieldUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("CoulombPerSquareMeter", () => {
    it("is coulombs per square meter", () => {
      assert<Equals<CoulombPerSquareMeter, Divide<Coulomb, Square<Meter>>>>();
    });
  });
}
