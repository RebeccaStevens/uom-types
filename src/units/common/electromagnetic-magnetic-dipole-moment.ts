// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Divide } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";

import type { Joule, Tesla } from "./index.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticDipoleMomentUnitClass = BaseUnitClass<{
  Meter: 2;
  Ampere: 1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticDipoleMoment = AbstractUnitFrom<MagneticDipoleMomentUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticDipoleMomentUnit<M extends UnitSubvalues> = MagneticDipoleMomentUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticDipoleMomentUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MagneticDipoleMomentUnitClass, M>;

/**
 * A unit of {@link MagneticDipoleMoment}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `J/T`
 */
export type JoulePerTesla = MagneticDipoleMomentUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("JoulePerTesla", () => {
    it("is joules per tesla", () => {
      assert<Equals<JoulePerTesla, Divide<Joule, Tesla>>>();
    });
  });
}
