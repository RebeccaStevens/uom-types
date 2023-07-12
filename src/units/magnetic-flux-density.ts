import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type MagneticFluxDensityUnitClass = SiUnitClass<{
  Kilograms: 1;
  Seconds: -2;
  Amperes: -1;
}>;

export type MagneticFluxDensity = AbstractUnit<MagneticFluxDensityUnitClass>;

export type MagneticFluxDensityUnit<M extends Record<string, Exponent>> = Unit<
  MagneticFluxDensityUnitClass,
  UnitMeta<M>
>;

/**
 * One Tesla is equal equal to one weber per square meter.
 *
 * @siunit
 * @symbol `T`
 * @derived
 */
export type Teslas = MagneticFluxDensityUnit<{}>;
