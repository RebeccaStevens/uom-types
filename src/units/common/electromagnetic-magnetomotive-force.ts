// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { Multiply } from "../../units-operations";
import type { BaseUnitClass } from "../base-units";

import type { Ampere, Radian } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagnetomotiveForceUnitClass = BaseUnitClass<{
  Ampere: 1;
  Radian: 1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagnetomotiveForce = AbstractUnitFrom<MagnetomotiveForceUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagnetomotiveForceUnit<M extends UnitSubvalues> = MagnetomotiveForceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagnetomotiveForceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MagnetomotiveForceUnitClass, M>;

/**
 * A unit of {@link MagnetomotiveForce}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `A⋅rad`
 */
export type AmpereRadian = MagnetomotiveForceUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("AmpereRadian", () => {
    it("is amperes by radians", () => {
      assert<Equals<AmpereRadian, Multiply<Ampere, Radian>>>();
    });
  });
}
