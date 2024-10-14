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

import { type JoulePerSquareMeter, type Newton, type Meter } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type StiffnessUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Second: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Stiffness = AbstractUnitFrom<StiffnessUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type StiffnessUnit<M extends UnitSubvalues> = StiffnessUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type StiffnessUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  StiffnessUnitClass,
  M
>;

/**
 * A unit of {@link Stiffness}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N/m`
 */
export type NewtonPerMeter = StiffnessUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("NewtonPerMeter", () => {
    it("is joules per square meter", () => {
      assert<Equals<NewtonPerMeter, JoulePerSquareMeter>>();
    });
    it("is newtons per meter", () => {
      assert<Equals<NewtonPerMeter, Divide<Newton, Meter>>>();
    });
  });
}
