import {
  type AbstractUnitFrom,
  type UnitFrom,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ElectricConductanceUnitClass = SiUnitClass<{
  Kilograms: -1;
  Meters: -2;
  Seconds: 3;
  Amperes: 2;
}>;

export type ElectricConductance =
  AbstractUnitFrom<ElectricConductanceUnitClass>;

export type ElectricConductanceUnit<M extends Record<string, Exponent>> =
  UnitFrom<ElectricConductanceUnitClass, UnitMeta<M>>;

/**
 * One Siemens is equal to one Amperes per volt.
 *
 * @siunit
 * @symbol `S`
 * @derived
 */
export type Siemens = ElectricConductanceUnit<{}>;
