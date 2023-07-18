import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ElectricCurrentDensityUnitClass = SiUnitClass<{
  Amperes: 1;
  Meters: -2;
}>;

export type ElectricCurrentDensity =
  AbstractUnit<ElectricCurrentDensityUnitClass>;

export type ElectricCurrentDensityUnit<M extends Record<string, Exponent>> =
  Unit<ElectricCurrentDensityUnitClass, UnitMeta<M>>;

/**
 * @siunit
 * @symbol `A/m²`
 * @derived
 */
export type AmperesPerSquareMeter = ElectricCurrentDensityUnit<{}>;