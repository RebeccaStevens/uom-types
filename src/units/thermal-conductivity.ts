import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ThermalConductivityUnitClass = SiUnitClass<{
  Kilograms: 1;
  Meters: 1;
  Seconds: -3;
  Kelvin: -1;
}>;

export type ThermalConductivity =
  AbstractUnitFrom<ThermalConductivityUnitClass>;

export type ThermalConductivityUnit<M extends UnitSubvalues> =
  ThermalConductivityUnitFrom<UnitMeta<M>>;

export type ThermalConductivityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ThermalConductivityUnitClass,
  M
>;

/**
 * Unit for thermal conductivity.
 *
 * @siunit
 * @derived
 */
export type WattsPerMeterPerKelvin = ThermalConductivityUnit<{}>;
