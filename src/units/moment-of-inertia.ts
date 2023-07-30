import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type MomentOfInertiaUnitClass = SiUnitClass<{
  Kilograms: 1;
  Meters: 2;
}>;

export type MomentOfInertia = AbstractUnitFrom<MomentOfInertiaUnitClass>;

export type MomentOfInertiaUnit<M extends UnitSubvalues> =
  MomentOfInertiaUnitFrom<UnitMeta<M>>;

export type MomentOfInertiaUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MomentOfInertiaUnitClass,
  M
>;

/**
 * Unit for moment of inertia.
 *
 * @siunit
 * @derived
 */
export type KilogramSquareMeters = MomentOfInertiaUnit<{}>;
