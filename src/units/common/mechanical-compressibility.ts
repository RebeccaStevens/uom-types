// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";
import { type ReciprocalUnitClass, type Reciprocal } from "../modifiers";

import { type PressureUnitClass, type Pressure } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type CompressibilityUnitClass = ReciprocalUnitClass<PressureUnitClass>;

/**
 * @group Abstract Unit
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
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
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
}
