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

import { type Ohm, type Metre } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ResistivityUnitClass = SiUnitClass<{
  Ampere: -2;
  Kilogram: 1;
  Metre: 3;
  Second: -3;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type Resistivity = AbstractUnitFrom<ResistivityUnitClass>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ResistivityUnit<M extends UnitSubvalues> = ResistivityUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ResistivityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ResistivityUnitClass,
  M
>;

/**
 * A unit of {@link Resistivity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `Ωm`
 */
export type OhmMetre = ResistivityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<OhmMetre, Multiply<Ohm, Metre>>>();
}
