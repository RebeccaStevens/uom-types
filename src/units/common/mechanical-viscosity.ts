// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { Divide } from "../../units-operations";
import type { BaseUnitClass } from "../base-units";
import type { Square } from "../modifiers";

import type { Meter, Second } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type KinematicViscosityUnitClass = BaseUnitClass<{
  Meter: 2;
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
export type KinematicViscosityUnit<M extends UnitSubvalues> = KinematicViscosityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type KinematicViscosityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<KinematicViscosityUnitClass, M>;

/**
 * A unit of {@link KinematicViscosity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `m²/s`
 */
export type SquareMeterPerSecond = KinematicViscosityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("SquareMeterPerSecond", () => {
    it("is square meters per second", () => {
      assert<Equals<SquareMeterPerSecond, Divide<Square<Meter>, Second>>>();
    });
  });
}
