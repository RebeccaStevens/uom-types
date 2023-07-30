import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ForceUnitClass = SiUnitClass<{
  Kilograms: 1;
  Meters: 1;
  Seconds: -2;
}>;

export type Force = AbstractUnitFrom<ForceUnitClass>;

export type ForceUnit<M extends UnitSubvalues> = ForceUnitFrom<UnitMeta<M>>;

export type ForceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ForceUnitClass,
  M
>;

/**
 * One newton is the force required to accelerate a mass of 1 kilogram at 1 metre per second per second.
 *
 * @siunit
 * @symbol `N`
 * @derived
 */
export type Newtons = ForceUnit<{}>;
