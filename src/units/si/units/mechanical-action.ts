// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
  type MultiplyUnits,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Joule, type Second } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type ActionUnitClass = SiUnitClass<{
  Kilogram: 1;
  Metre: 2;
  Second: -1;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type Action = AbstractUnitFrom<ActionUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type ActionUnit<M extends UnitSubvalues> = ActionUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type ActionUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ActionUnitClass,
  M
>;

/**
 * A unit of {@link Action}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `Js`
 */
export type JouleSecond = ActionUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<JouleSecond, MultiplyUnits<Joule, Second>>>();
}