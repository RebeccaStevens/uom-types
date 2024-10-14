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

import { type Second, type MeterPerSecondToTheFourth } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type CrackleUnitClass = BaseUnitClass<{ Meter: 1; Second: -5 }>;

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
export type MeterPerSecondToTheFifth = CrackleUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("MeterPerSecondToTheFifth", () => {
    it("is MeterPerSecondToTheFourth per second", () => {
      assert<
        Equals<
          MeterPerSecondToTheFifth,
          Divide<MeterPerSecondToTheFourth, Second>
        >
      >();
    });
  });
}
