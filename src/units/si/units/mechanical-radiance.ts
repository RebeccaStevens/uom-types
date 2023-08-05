// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type DivideUnits,
  type MultiplyUnits,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Watt, type SquareMetre, type Steradian } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type RadianceUnitClass = SiUnitClass<{
  Kilogram: 1;
  Second: -3;
  Radian: -2;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type Radiance = AbstractUnitFrom<RadianceUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type RadianceUnit<M extends UnitSubvalues> = RadianceUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type RadianceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  RadianceUnitClass,
  M
>;

/**
 * A unit of {@link Radiance}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/(sr⋅m²)`
 */
export type WattPerSteradianquareMetre = RadianceUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<
    Equals<
      WattPerSteradianquareMetre,
      DivideUnits<Watt, MultiplyUnits<Steradian, SquareMetre>>
    >
  >();
}
