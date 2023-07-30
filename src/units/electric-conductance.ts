import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
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

export type ElectricConductanceUnit<M extends UnitSubvalues> =
  ElectricConductanceUnitFrom<UnitMeta<M>>;

export type ElectricConductanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ElectricConductanceUnitClass,
  M
>;
/**
 * One Siemens is equal to one Amperes per volt.
 *
 * @siunit
 * @symbol `S`
 * @derived
 */
export type Siemens = ElectricConductanceUnit<{}>;
