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
import { type Cubic } from "../modifiers";

import { type Metre, type Litre, type Mole } from ".";

/**
 * @group Unit Classes
 * @category Chemical
 */
export type MolarConcentrationUnitClass = BaseUnitClass<{ Mole: 1; Metre: -3 }>;

/**
 * @group Abstract Units
 * @category Chemical
 */
export type MolarConcentration = AbstractUnitFrom<MolarConcentrationUnitClass>;

/**
 * @group Unit Generators
 * @category Chemical
 */
export type MolarConcentrationUnit<M extends UnitSubvalues> =
  MolarConcentrationUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Chemical
 */
export type MolarConcentrationUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MolarConcentrationUnitClass,
  M
>;

/**
 * A unit of {@link MolarConcentration}.
 *
 * Equivalent to {@link MolePerCubicMetre}.
 *
 * @group Units
 * @category Chemical
 * @symbol `c`
 */
export type Concentration = MolarConcentrationUnit<{}>;

/**
 * A unit of {@link MolarConcentration}.
 *
 * Equivalent to {@link Concentration}.
 *
 * @group Units
 * @category Chemical
 * @symbol `mol/m³`
 */
export type MolePerCubicMetre = Concentration;

/**
 * A unit of {@link MolarConcentration}.
 *
 * @group Units
 * @category Chemical
 * @symbol `mol/l`
 */
export type MolePerLiter = MolarConcentrationUnit<{ scalar10: 3 }>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("MolePerCubicMetre", () => {
    it("is moles per cubic metre", () => {
      assert<Equals<MolePerCubicMetre, Divide<Mole, Cubic<Metre>>>>();
    });
  });

  describe("MolePerLiter", () => {
    it("is moles per litre", () => {
      assert<Equals<MolePerLiter, Divide<Mole, Litre>>>();
    });
  });
}
