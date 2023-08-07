// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Divide,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Mole, type Second } from ".";

/**
 * @group Unit Classes
 * @category Chemical
 */
export type CatalyticActivityUnitClass = SiUnitClass<{ Mole: 1; Second: -1 }>;

/**
 * @group Abstract Unit
 * @category Chemical
 */
export type CatalyticActivity = AbstractUnitFrom<CatalyticActivityUnitClass>;

/**
 * @group Unit Creators
 * @category Chemical
 */
export type CatalyticActivityUnit<M extends UnitSubvalues> =
  CatalyticActivityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Chemical
 */
export type CatalyticActivityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  CatalyticActivityUnitClass,
  M
>;

/**
 * A unit of {@link CatalyticActivity}.
 *
 * @group Units
 * @category Derived
 * @category Chemical
 * @symbol `kat`
 */
export type Katal = CatalyticActivityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Katal, Divide<Mole, Second>>>();
}
