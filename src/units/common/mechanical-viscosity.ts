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

import { type Metre, type Second } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type KinematicViscosityUnitClass = BaseUnitClass<{
  Metre: 2;
  Second: -1;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type KinematicViscosity = AbstractUnitFrom<KinematicViscosityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type KinematicViscosityUnit<M extends UnitSubvalues> =
  KinematicViscosityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type KinematicViscosityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  KinematicViscosityUnitClass,
  M
>;

/**
 * A unit of {@link KinematicViscosity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `m²/s`
 */
export type SquareMetrePerSecond = KinematicViscosityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("SquareMetrePerSecond", () => {
    it("is square metres per second", () => {
      assert<Equals<SquareMetrePerSecond, Divide<Square<Metre>, Second>>>();
    });
  });
}
