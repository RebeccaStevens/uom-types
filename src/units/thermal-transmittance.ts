import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ThermalTransmittanceUnitClass = SiUnitClass<{
  Kilograms: 1;
  Seconds: -3;
  Kelvin: -1;
}>;

export type ThermalTransmittance = AbstractUnit<ThermalTransmittanceUnitClass>;

export type ThermalTransmittanceUnit<M extends Record<string, Exponent>> = Unit<
  ThermalTransmittanceUnitClass,
  UnitMeta<M>
>;

/**
 * Units for thermal transmittance.
 *
 * @siunit
 * @derived
 */
export type WattsPerSquareMeterPerKelvin = ThermalTransmittanceUnit<{}>;
