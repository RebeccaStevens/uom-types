import {
  type AbstractUnitFrom,
  type Exponent,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ElectricCapacitanceUnitClass = SiUnitClass<{
  Amperes: 2;
  Seconds: 4;
  Kilograms: -1;
  Meters: -2;
}>;

export type ElectricCapacitance =
  AbstractUnitFrom<ElectricCapacitanceUnitClass>;

export type ElectricCapacitanceUnit<M extends Record<string, Exponent>> =
  ElectricCapacitanceUnitFrom<UnitMeta<M>>;

export type ElectricCapacitanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ElectricCapacitanceUnitClass,
  M
>;

/**
 * One Farad is equal to the capacitance of a capacitor having an equal and opposite charge of 1 coulomb on
 * each plate and a potential difference of 1 volt between the plates.
 *
 * @siunit
 * @symbol `F`
 * @derived
 */
export type Farads = ElectricCapacitanceUnit<{}>;
