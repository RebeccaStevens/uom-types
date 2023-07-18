import {
  type AbstractUnitFrom,
  type Exponent,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type PowerUnitClass = SiUnitClass<{
  Kilograms: 1;
  Meters: 2;
  Seconds: -3;
}>;

export type Power = AbstractUnitFrom<PowerUnitClass>;

export type PowerUnit<M extends Record<string, Exponent>> = PowerUnitFrom<
  UnitMeta<M>
>;

export type PowerUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  PowerUnitClass,
  M
>;

/**
 * The derived unit for power, radiant, flux.
 *
 * @siunit
 * @symbol `W`
 * @derived
 */
export type Watts = PowerUnit<{}>;
