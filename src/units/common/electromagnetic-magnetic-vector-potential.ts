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

import { type Weber, type Meter } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticVectorPotentialUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 1;
  Second: -2;
  Ampere: -1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticVectorPotential =
  AbstractUnitFrom<MagneticVectorPotentialUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticVectorPotentialUnit<M extends UnitSubvalues> =
  MagneticVectorPotentialUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticVectorPotentialUnitFrom<M extends UnknownUnitMeta> =
  UnitFrom<MagneticVectorPotentialUnitClass, M>;

/**
 * A unit of {@link MagneticVectorPotential}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `Wb/m`
 */
export type WeberPerMeter = MagneticVectorPotentialUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("WeberPerMeter", () => {
    it("is webers per meter", () => {
      assert<Equals<WeberPerMeter, Divide<Weber, Meter>>>();
    });
  });
}
