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

import { type Meter, type Henry } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticPermeabilityUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 1;
  Second: -2;
  Ampere: -2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticPermeability =
  AbstractUnitFrom<MagneticPermeabilityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticPermeabilityUnit<M extends UnitSubvalues> =
  MagneticPermeabilityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticPermeabilityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MagneticPermeabilityUnitClass,
  M
>;

/**
 * A unit of {@link MagneticPermeability}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `H/m`
 */
export type HenryPerMeter = MagneticPermeabilityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("HenryPerMeter", () => {
    it("is henry per meter", () => {
      assert<Equals<HenryPerMeter, Divide<Henry, Meter>>>();
    });
  });
}
