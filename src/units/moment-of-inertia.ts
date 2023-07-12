import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type MomentOfInertiaUnitClass = SiUnitClass<{
  Kilograms: 1;
  Meters: 2;
}>;

export type MomentOfInertia = AbstractUnit<MomentOfInertiaUnitClass>;

export type MomentOfInertiaUnit<M extends Record<string, Exponent>> = Unit<
  MomentOfInertiaUnitClass,
  UnitMeta<M>
>;

/**
 * Unit for moment of inertia.
 *
 * @siunit
 * @derived
 */
export type KilogramSquareMeters = MomentOfInertiaUnit<{}>;
