// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type MultiplyUnits,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";
import { type Cubic, type Square, type Centi, type Deci } from "../modifiers";

import { type Metre } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type VolumeUnitClass = SiUnitClass<{
  Metre: 3;
}>;

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type Volume = AbstractUnitFrom<VolumeUnitClass>;

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type VolumeUnit<M extends UnitSubvalues> = VolumeUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type VolumeUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  VolumeUnitClass,
  M
>;

/**
 * A unit of volume.
 *
 * @group Units
 * @category Mechanical
 * @symbol `cm³`
 */
export type CubicCentiMetre = VolumeUnit<{ scalar10: -6 }>;

/**
 * A unit of volume.
 *
 * @group Units
 * @category Mechanical
 * @symbol `l`
 */
export type Litre = VolumeUnit<{ scalar10: -3 }>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<
    Equals<Cubic<Metre>, MultiplyUnits<MultiplyUnits<Metre, Metre>, Metre>>
  >();
  assert<Equals<Cubic<Metre>, MultiplyUnits<Square<Metre>, Metre>>>();

  assert<
    Equals<
      CubicCentiMetre,
      MultiplyUnits<MultiplyUnits<Centi<Metre>, Centi<Metre>>, Centi<Metre>>
    >
  >();

  assert<
    Equals<
      Litre,
      MultiplyUnits<MultiplyUnits<Deci<Metre>, Deci<Metre>>, Deci<Metre>>
    >
  >();
}
