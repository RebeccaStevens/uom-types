import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type EnthalpyUnitClass = SiUnitClass<{ Meters: 2; Seconds: -2 }>;

export type Enthalpy = AbstractUnitFrom<EnthalpyUnitClass>;

export type EnthalpyUnit<M extends UnitSubvalues> = EnthalpyUnitFrom<
  UnitMeta<M>
>;

export type EnthalpyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  EnthalpyUnitClass,
  M
>;

/**
 * One gray is equal to the dose of one joule of energy absorbed per one kilogram of matter.
 *
 * @siunit
 * @derived
 */
export type Gray = EnthalpyUnit<{}>;
