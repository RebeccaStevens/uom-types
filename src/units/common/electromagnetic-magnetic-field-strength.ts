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

import { type Ampere, type Meter } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticFieldStrengthUnitClass = BaseUnitClass<{
  Ampere: 1;
  Meter: -1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticFieldStrength =
  AbstractUnitFrom<MagneticFieldStrengthUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticFieldStrengthUnit<M extends UnitSubvalues> =
  MagneticFieldStrengthUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticFieldStrengthUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MagneticFieldStrengthUnitClass,
  M
>;

/**
 * A unit of {@link MagneticFieldStrength}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `A/m`
 */
export type AmperePerMeter = MagneticFieldStrengthUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("AmperePerMeter", () => {
    it("is amperes per meter", () => {
      assert<Equals<AmperePerMeter, Divide<Ampere, Meter>>>();
    });
  });
}
