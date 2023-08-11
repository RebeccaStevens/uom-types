// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";
import { type Reciprocal } from "../modifiers";

import { type PressureUnitClass, type Pressure } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type CompressibilityUnitClass = Reciprocal<PressureUnitClass>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Compressibility = Reciprocal<Pressure>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type CompressibilityUnit<M extends UnitSubvalues> =
  CompressibilityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type CompressibilityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  CompressibilityUnitClass,
  M
>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("CompressibilityUnitClass", () => {
    it("has the right base units", () => {
      assert<
        Equals<
          CompressibilityUnitClass,
          BaseUnitClass<{
            Kilogram: -1;
            Metre: 1;
            Second: 2;
          }>
        >
      >();
    });
  });
}
