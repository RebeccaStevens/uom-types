// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";
import type { Reciprocal } from "../modifiers/index.ts";

import type { ElectricInductance, ElectricInductanceUnitClass } from "./index.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticReluctanceUnitClass = Reciprocal<ElectricInductanceUnitClass>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticReluctance = Reciprocal<ElectricInductance>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticReluctanceUnit<M extends UnitSubvalues> = MagneticReluctanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticReluctanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MagneticReluctanceUnitClass, M>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("MagneticReluctanceUnitClass", () => {
    it("has the right base units", () => {
      assert<
        Equals<
          MagneticReluctanceUnitClass,
          BaseUnitClass<{
            Kilogram: -1;
            Meter: -2;
            Second: 2;
            Ampere: 2;
          }>
        >
      >();
    });
  });
}
