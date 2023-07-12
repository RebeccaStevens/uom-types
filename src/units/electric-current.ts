import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ElectricCurrentUnitClass = SiUnitClass<{
  Amperes: 1;
}>;

export type ElectricCurrent = AbstractUnit<ElectricCurrentUnitClass>;

export type ElectricCurrentUnit<M extends Record<string, Exponent>> = Unit<
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
