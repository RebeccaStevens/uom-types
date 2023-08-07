// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Multiply,
  type AbstractUnitFrom,
  type Divide,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";
import { type Square } from "../modifiers";

import { type Metre, type Volt, type Second } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectronMobilityUnitClass = BaseUnitClass<{
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
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectronMobilityUnit<M extends UnitSubvalues> =
  ElectronMobilityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
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
      Divide<Square<Metre>, Multiply<Volt, Second>>
    >
  >();
}
