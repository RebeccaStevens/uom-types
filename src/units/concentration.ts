import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ConcentrationUnitClass = SiUnitClass<{ Moles: 1; Meters: -3 }>;

export type Concentration = AbstractUnitFrom<ConcentrationUnitClass>;

export type ConcentrationUnit<M extends UnitSubvalues> = ConcentrationUnitFrom<
  UnitMeta<M>
>;

export type ConcentrationUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ConcentrationUnitClass,
  M
>;

/**
 * @siunit
 * @symbol `mol/m³`
 * @derived
 */
export type MolesPerCubicMeter = ConcentrationUnit<{}>;
