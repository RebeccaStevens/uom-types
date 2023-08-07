// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Divide,
  type UnknownUnitMeta,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Newton, type Second } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type YankUnitClass = SiUnitClass<{
  Kilogram: 1;
  Metre: 1;
  Second: -3;
}>;

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type Yank = AbstractUnitFrom<YankUnitClass>;

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type YankUnit<M extends UnitSubvalues> = YankUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type YankUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  YankUnitClass,
  M
>;

/**
 * A unit of {@link Yank}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N/s`
 */
export type NewtonPerSecond = YankUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<NewtonPerSecond, Divide<Newton, Second>>>();
}
