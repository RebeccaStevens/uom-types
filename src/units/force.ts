import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ForceUnitClass = SiUnitClass<{
  Kilograms: 1;
  Meters: 1;
  Seconds: -2;
}>;

export type Force = AbstractUnit<ForceUnitClass>;

export type ForceUnit<M extends Record<string, Exponent>> = Unit<
  ForceUnitClass,
  UnitMeta<M>
>;

/**
 * One newton is the force required to accelerate a mass of 1 kilogram at 1 metre per second per second.
 *
 * @siunit
 * @symbol `N`
 * @derived
 */
export type Newtons = ForceUnit<{}>;
