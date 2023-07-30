import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ElectricCurrentUnitClass = SiUnitClass<{
  Amperes: 1;
}>;

export type ElectricCurrent = AbstractUnitFrom<ElectricCurrentUnitClass>;

export type ElectricCurrentUnit<M extends UnitSubvalues> =
  ElectricCurrentUnitFrom<UnitMeta<M>>;

export type ElectricCurrentUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ElectricCurrentUnitClass,
  M
>;

/**
 * A unit of electric current.
 *
 * @siunit
 * @symbol `A`
 */
export type Amperes = ElectricCurrentUnit<{}>;
