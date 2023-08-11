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

import { type Second, type MetrePerSecondToTheFourth } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type CrackleUnitClass = BaseUnitClass<{ Metre: 1; Second: -5 }>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Crackle = AbstractUnitFrom<CrackleUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type CrackleUnit<M extends UnitSubvalues> = CrackleUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type CrackleUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  CrackleUnitClass,
  M
>;

/**
 * A unit of {@link Crackle}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s⁵`
 */
export type MetrePerSecondToTheFifth = CrackleUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("MetrePerSecondToTheFifth", () => {
    it("is MetrePerSecondToTheFourth per second", () => {
      assert<
        Equals<
          MetrePerSecondToTheFifth,
          Divide<MetrePerSecondToTheFourth, Second>
        >
      >();
    });
  });
}
