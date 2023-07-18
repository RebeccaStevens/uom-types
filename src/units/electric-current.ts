import {
  type AbstractUnitFrom,
  type UnitFrom,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ElectricCurrentUnitClass = SiUnitClass<{
  Amperes: 1;
}>;

export type ElectricCurrent = AbstractUnitFrom<ElectricCurrentUnitClass>;

export type ElectricCurrentUnit<M extends Record<string, Exponent>> = UnitFrom<
  ElectricCurrentUnitClass,
  UnitMeta<M>
>;

/**
 * A unit of electric current.
 *
 * @siunit
 * @symbol `A`
 */
export type Amperes = ElectricCurrentUnit<{}>;
