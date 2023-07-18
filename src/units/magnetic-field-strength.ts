import {
  type AbstractUnitFrom,
  type Exponent,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type MagneticFieldStrengthUnitClass = SiUnitClass<{
  Amperes: 1;
  Meters: -1;
}>;

export type MagneticFieldStrength =
  AbstractUnitFrom<MagneticFieldStrengthUnitClass>;

export type MagneticFieldStrengthUnit<M extends Record<string, Exponent>> =
  MagneticFieldStrengthUnitFrom<UnitMeta<M>>;

export type MagneticFieldStrengthUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MagneticFieldStrengthUnitClass,
  M
>;

/**
 * @siunit
 * @symbol `A/m`
 * @derived
 */
export type AmperesPerMeter = MagneticFieldStrengthUnit<{}>;
