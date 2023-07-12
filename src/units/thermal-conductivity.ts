import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ThermalConductivityUnitClass = SiUnitClass<{
  Kilograms: 1;
  Meters: 1;
  Seconds: -3;
  Kelvin: -1;
}>;

export type ThermalConductivity = AbstractUnit<ThermalConductivityUnitClass>;

export type ThermalConductivityUnit<M extends Record<string, Exponent>> = Unit<
  ThermalConductivityUnitClass,
  UnitMeta<M>
>;

/**
 * Unit for thermal conductivity.
 *
 * @siunit
 * @derived
 */
export type WattsPerMeterPerKelvin = ThermalConductivityUnit<{}>;
