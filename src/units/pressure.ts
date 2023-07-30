import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type PressureUnitClass = SiUnitClass<{
  Kilograms: 1;
  Meters: -1;
  Seconds: -2;
}>;

export type Pressure = AbstractUnitFrom<PressureUnitClass>;

export type PressureUnit<M extends UnitSubvalues> = PressureUnitFrom<
  UnitMeta<M>
>;

export type PressureUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  PressureUnitClass,
  M
>;

/**
 * One pascal is equal to one newton per square meter.
 *
 * @siunit
 * @symbol `Pa`
 * @derived
 */
export type Pascals = PressureUnit<{}>;
