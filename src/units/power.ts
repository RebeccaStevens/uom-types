import {
  type AbstractUnitFrom,
  type UnitFrom,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type PowerUnitClass = SiUnitClass<{
  Kilograms: 1;
  Meters: 2;
  Seconds: -3;
}>;

export type Power = AbstractUnitFrom<PowerUnitClass>;

export type PowerUnit<M extends Record<string, Exponent>> = UnitFrom<
  PowerUnitClass,
  UnitMeta<M>
>;

/**
 * The derived unit for power, radiant, flux.
 *
 * @siunit
 * @symbol `W`
 * @derived
 */
export type Watts = PowerUnit<{}>;
