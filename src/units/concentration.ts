import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ConcentrationUnitClass = SiUnitClass<{ Moles: 1; Meters: -3 }>;

export type Concentration = AbstractUnit<ConcentrationUnitClass>;

export type ConcentrationUnit<M extends Record<string, Exponent>> = Unit<
  ConcentrationUnitClass,
  UnitMeta<M>
>;

/**
 * @siunit
 * @symbol `mol/m³`
 * @derived
 */
export type MolesPerCubicMeter = ConcentrationUnit<{}>;
