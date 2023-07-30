import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ElectricPotentialUnitClass = SiUnitClass<{
  Kilograms: 1;
  Meters: 2;
  Seconds: -3;
  Amperes: -1;
}>;

export type ElectricPotential = AbstractUnitFrom<ElectricPotentialUnitClass>;

export type ElectricPotentialUnit<M extends UnitSubvalues> =
  ElectricPotentialUnitFrom<UnitMeta<M>>;

export type ElectricPotentialUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ElectricPotentialUnitClass,
  M
>;

/**
 * One Volt is equal to the difference of electric potential between two points on a conducting
 * wire carrying a export constant current of one Amperes when the power dissipated between the points is one watt.
 *
 * @siunit
 * @symbol `V`
 * @derived
 */
export type Volts = ElectricPotentialUnit<{}>;
