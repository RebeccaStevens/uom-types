// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { Multiply } from "../../units-operations";
import type { BaseUnitClass } from "../base-units";

import type { Meter, Tesla } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticRigidityUnitClass = BaseUnitClass<{
  Ampere: -1;
  Kilogram: 1;
  Meter: 1;
  Second: -2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticRigidity = AbstractUnitFrom<MagneticRigidityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticRigidityUnit<M extends UnitSubvalues> = MagneticRigidityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticRigidityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MagneticRigidityUnitClass, M>;

/**
 * A unit of {@link MagneticRigidity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `T⋅m`
 */
export type TeslaMeter = MagneticRigidityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("TeslaMeter", () => {
    it("is tesla by meter", () => {
      assert<Equals<TeslaMeter, Multiply<Tesla, Meter>>>();
    });
  });
}
