import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ThermalTransmittanceUnitClass = SiUnitClass<{
  Kilograms: 1;
  Seconds: -3;
  Kelvin: -1;
}>;

export type ThermalTransmittance =
  AbstractUnitFrom<ThermalTransmittanceUnitClass>;

export type ThermalTransmittanceUnit<M extends UnitSubvalues> =
  ThermalTransmittanceUnitFrom<UnitMeta<M>>;

export type ThermalTransmittanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ThermalTransmittanceUnitClass,
  M
>;

/**
 * Units for thermal transmittance.
 *
 * @siunit
 * @derived
 */
export type WattsPerSquareMeterPerKelvin = ThermalTransmittanceUnit<{}>;
