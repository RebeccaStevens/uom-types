import {
  type AbstractUnitFrom,
  type Exponent,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type MagneticFluxDensityUnitClass = SiUnitClass<{
  Kilograms: 1;
  Seconds: -2;
  Amperes: -1;
}>;

export type MagneticFluxDensity =
  AbstractUnitFrom<MagneticFluxDensityUnitClass>;

export type MagneticFluxDensityUnit<M extends Record<string, Exponent>> =
  MagneticFluxDensityUnitFrom<UnitMeta<M>>;

export type MagneticFluxDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MagneticFluxDensityUnitClass,
  M
>;

/**
 * One Tesla is equal equal to one weber per square meter.
 *
 * @siunit
 * @symbol `T`
 * @derived
 */
export type Teslas = MagneticFluxDensityUnit<{}>;
