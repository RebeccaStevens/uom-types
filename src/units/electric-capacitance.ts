import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ElectricCapacitanceUnitClass = SiUnitClass<{
  Amperes: 2;
  Seconds: 4;
  Kilograms: -1;
  Meters: -2;
}>;

export type ElectricCapacitance = AbstractUnit<ElectricCapacitanceUnitClass>;

export type ElectricCapacitanceUnit<M extends Record<string, Exponent>> = Unit<
  ElectricCapacitanceUnitClass,
  UnitMeta<M>
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
