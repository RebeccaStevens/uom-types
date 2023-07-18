import {
  type AbstractUnitFrom,
  type UnitFrom,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ThermalTransmittanceUnitClass = SiUnitClass<{
  Kilograms: 1;
  Seconds: -3;
  Kelvin: -1;
}>;

export type ThermalTransmittance =
  AbstractUnitFrom<ThermalTransmittanceUnitClass>;

export type ThermalTransmittanceUnit<M extends Record<string, Exponent>> =
  UnitFrom<ThermalTransmittanceUnitClass, UnitMeta<M>>;

/**
 * Units for thermal transmittance.
 *
 * @siunit
 * @derived
 */
export type WattsPerSquareMeterPerKelvin = ThermalTransmittanceUnit<{}>;
