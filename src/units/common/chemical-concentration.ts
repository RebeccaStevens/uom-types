// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Divide } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";
import type { Cubic } from "../modifiers/index.ts";

import type { Liter, Meter, Mole } from "./index.ts";

/**
 * @group Unit Classes
 * @category Chemical
 */
export type MolarConcentrationUnitClass = BaseUnitClass<{ Mole: 1; Meter: -3 }>;

/**
 * @group Abstract Units
 * @category Chemical
 */
export type MolarConcentration = AbstractUnitFrom<MolarConcentrationUnitClass>;

/**
 * @group Unit Generators
 * @category Chemical
 */
export type MolarConcentrationUnit<M extends UnitSubvalues> = MolarConcentrationUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Chemical
 */
export type MolarConcentrationUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MolarConcentrationUnitClass, M>;

/**
 * A unit of {@link MolarConcentration}.
 *
 * Equivalent to {@link MolePerCubicMeter}.
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
export type MolePerCubicMeter = Concentration;

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

  describe("MolePerCubicMeter", () => {
    it("is moles per cubic meter", () => {
      assert<Equals<MolePerCubicMeter, Divide<Mole, Cubic<Meter>>>>();
    });
  });

  describe("MolePerLiter", () => {
    it("is moles per liter", () => {
      assert<Equals<MolePerLiter, Divide<Mole, Liter>>>();
    });
  });
}
