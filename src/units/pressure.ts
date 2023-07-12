import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type PressureUnitClass = SiUnitClass<{
  Kilograms: 1;
  Meters: -1;
  Seconds: -2;
}>;

export type Pressure = AbstractUnit<PressureUnitClass>;

export type PressureUnit<M extends Record<string, Exponent>> = Unit<
  PressureUnitClass,
  UnitMeta<M>
>;

/**
 * One pascal is equal to one newton per square meter.
 *
 * @siunit
 * @symbol `Pa`
 * @derived
 */
export type Pascals = PressureUnit<{}>;
