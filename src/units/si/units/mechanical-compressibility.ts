// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";
import { type Reciprocal } from "../modifiers";

import { type Pressure } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type CompressibilityUnitClass = SiUnitClass<{
  Kilogram: -1;
  Metre: 1;
  Second: 2;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type Compressibility = AbstractUnitFrom<CompressibilityUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type CompressibilityUnit<M extends UnitSubvalues> =
  CompressibilityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type CompressibilityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  CompressibilityUnitClass,
  M
>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Compressibility, Reciprocal<Pressure>>>();
}
