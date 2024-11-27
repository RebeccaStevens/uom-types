// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Divide, Multiply } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";

import type { Radian, RadianPerSecondSquared, Second } from "./index.ts";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type AngularVelocityUnitClass = BaseUnitClass<{
  Radian: 1;
  Second: -1;
}>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type AngularVelocity = AbstractUnitFrom<AngularVelocityUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AngularVelocityUnit<M extends UnitSubvalues> = AngularVelocityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AngularVelocityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<AngularVelocityUnitClass, M>;

/**
 * A unit of {@link AngularVelocity}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `rad/s`
 */
export type RadianPerSecond = AngularVelocityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("RadianPerSecond", () => {
    it("is radian per seconds", () => {
      assert<Equals<RadianPerSecond, Divide<Radian, Second>>>();
    });

    it("is radian per squared second by seconds", () => {
      assert<Equals<RadianPerSecond, Multiply<RadianPerSecondSquared, Second>>>();
    });
  });
}
