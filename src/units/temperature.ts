import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type TemperatureUnitClass = SiUnitClass<{
  Kelvin: 1;
}>;

export type Temperature = AbstractUnitFrom<TemperatureUnitClass>;

export type TemperatureUnit<M extends UnitSubvalues> = TemperatureUnitFrom<
  UnitMeta<M>
>;

export type TemperatureUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  TemperatureUnitClass,
  M
>;

/**
 * A unit of thermodynamic temperature.
 *
 * @siunit
 * @symbol `K`
 */
export type Kelvin = TemperatureUnit<{}>;

/**
 * This is a unit of temperature such as the freezing point of water (at one atmosphere of pressure)
 * is 0 ℃, while the boiling point is 100 ℃.
 *
 * @symbol `℃`
 * @derived
 */
export type Celsius = TemperatureUnit<{ "offset273.15": 1 }>;
