// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Multiply,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Second, type Pascal } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type DynamicViscosityUnitClass = SiUnitClass<{
  Kilogram: 1;
  Metre: -1;
  Second: -1;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type DynamicViscosity = AbstractUnitFrom<DynamicViscosityUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type DynamicViscosityUnit<M extends UnitSubvalues> =
  DynamicViscosityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type DynamicViscosityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  DynamicViscosityUnitClass,
  M
>;

/**
 * A unit of {@link DynamicViscosity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `Pa⋅s`
 */
export type PascalSecond = DynamicViscosityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<PascalSecond, Multiply<Pascal, Second>>>();
}
