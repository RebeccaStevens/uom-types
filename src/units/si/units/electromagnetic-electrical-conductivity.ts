// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type Divide,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Metre, type Siemens } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricalConductivityUnitClass = SiUnitClass<{
  Kilogram: -1;
  Metre: -3;
  Second: 3;
  Ampere: 2;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type ElectricalConductivity =
  AbstractUnitFrom<ElectricalConductivityUnitClass>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ElectricalConductivityUnit<M extends UnitSubvalues> =
  ElectricalConductivityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ElectricalConductivityUnitFrom<M extends UnknownUnitMeta> =
  UnitFrom<ElectricalConductivityUnitClass, M>;

/**
 * A unit of {@link ElectricalConductivity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `S/m`
 */
export type SiemensPerMetre = ElectricalConductivityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<SiemensPerMetre, Divide<Siemens, Metre>>>();
}
