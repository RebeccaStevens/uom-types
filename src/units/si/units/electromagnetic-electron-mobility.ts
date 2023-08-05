// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type MultiplyUnits,
  type AbstractUnitFrom,
  type DivideUnits,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type SquareMetre, type Volt, type Second } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectronMobilityUnitClass = SiUnitClass<{
  Kilogram: -1;
  Second: 2;
  Ampere: 1;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type ElectronMobility = AbstractUnitFrom<ElectronMobilityUnitClass>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ElectronMobilityUnit<M extends UnitSubvalues> =
  ElectronMobilityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ElectronMobilityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ElectronMobilityUnitClass,
  M
>;

/**
 * A unit of {@link ElectronMobility}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `m²/(V⋅s)`
 */
export type SquareMetrePerVoltSecond = ElectronMobilityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<
    Equals<
      SquareMetrePerVoltSecond,
      DivideUnits<SquareMetre, MultiplyUnits<Volt, Second>>
    >
  >();
}
