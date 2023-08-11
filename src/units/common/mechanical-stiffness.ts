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

import { type JoulePerSquareMetre, type Newton, type Metre } from ".";

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
export type NewtonPerMetre = StiffnessUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("NewtonPerMetre", () => {
    it("is joules per square metre", () => {
      assert<Equals<NewtonPerMetre, JoulePerSquareMetre>>();
    });
    it("is newtons per metre", () => {
      assert<Equals<NewtonPerMetre, Divide<Newton, Metre>>>();
    });
  });
}
