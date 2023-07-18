import {
  type AbstractUnitFrom,
  type Exponent,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ElectricResistanceUnitClass = SiUnitClass<{
  Kilograms: 1;
  Meters: 2;
  Seconds: -3;
  Amperes: -2;
}>;

export type ElectricResistance = AbstractUnitFrom<ElectricResistanceUnitClass>;

export type ElectricResistanceUnit<M extends Record<string, Exponent>> =
  ElectricResistanceUnitFrom<UnitMeta<M>>;

export type ElectricResistanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ElectricResistanceUnitClass,
  M
>;

/**
 * One Ohm is equal to the resistance of a conductor in which a current of one Amperes is produced
 * by a potential of one volt across its terminals.
 *
 * @siunit
 * @symbol `Ω`
 * @derived
 */
export type Ohms = ElectricResistanceUnit<{}>;
