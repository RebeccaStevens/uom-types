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
import { type Reciprocal } from "../modifiers";

import {
  type Ampere,
  type Farad,
  type Second,
  type Siemens,
  type Volt,
} from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricResistanceUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Metre: 2;
  Second: -3;
  Ampere: -2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricResistance = AbstractUnitFrom<ElectricResistanceUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricResistanceUnit<M extends UnitSubvalues> =
  ElectricResistanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricResistanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ElectricResistanceUnitClass,
  M
>;

/**
 * A unit of {@link ElectricResistance}.
 *
 * One Ohm is equal to the resistance of a conductor in which a current of one Ampere is produced
 * by a potential of one volt across its terminals.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `Ω`
 */
export type Ohm = ElectricResistanceUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Ohm", () => {
    it("is volts per ampere", () => {
      assert<Equals<Ohm, Divide<Volt, Ampere>>>();
    });

    it("is reciprocal of siemens", () => {
      assert<Equals<Ohm, Reciprocal<Siemens>>>();
    });

    it("is seconds per farad", () => {
      assert<Equals<Ohm, Divide<Second, Farad>>>();
    });
  });
}
