import {
  type AbstractUnitFrom,
  type Exponent,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ElectricChargeUnitClass = SiUnitClass<{
  Amperes: 1;
  Seconds: 1;
}>;

export type ElectricCharge = AbstractUnitFrom<ElectricChargeUnitClass>;

export type ElectricChargeUnit<M extends Record<string, Exponent>> =
  ElectricChargeUnitFrom<UnitMeta<M>>;

export type ElectricChargeUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ElectricChargeUnitClass,
  M
>;

/**
 * One Coulomb is equal to the quantity of charge transferred in one second by a steady current of one Amperes.
 *
 * @siunit
 * @symbol `C`
 * @derived
 */
export type Coulombs = ElectricChargeUnit<{}>;
