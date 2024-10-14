// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type {
  AbstractUnitFrom,
  Divide,
  Multiply,
  UnitFrom,
  UnitMeta,
  UnitSubvalues,
  UnknownUnitMeta,
} from "#uom-types";

import type { BaseUnitClass } from "../base-units";
import type { Square } from "../modifiers";

import type { Meter, Second, Volt } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectronMobilityUnitClass = BaseUnitClass<{
  Kilogram: -1;
  Second: 2;
  Ampere: 1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectronMobility = AbstractUnitFrom<ElectronMobilityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectronMobilityUnit<M extends UnitSubvalues> = ElectronMobilityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectronMobilityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ElectronMobilityUnitClass, M>;

/**
 * A unit of {@link ElectronMobility}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `m²/(V⋅s)`
 */
export type SquareMeterPerVoltSecond = ElectronMobilityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("SquareMeterPerVoltSecond", () => {
    it("is square meters per volt second", () => {
      assert<Equals<SquareMeterPerVoltSecond, Divide<Square<Meter>, Multiply<Volt, Second>>>>();
    });
  });
}
