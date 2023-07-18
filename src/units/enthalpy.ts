import {
  type AbstractUnitFrom,
  type UnitFrom,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type EnthalpyUnitClass = SiUnitClass<{ Meters: 2; Seconds: -2 }>;

export type Enthalpy = AbstractUnitFrom<EnthalpyUnitClass>;

export type EnthalpyUnit<M extends Record<string, Exponent>> = UnitFrom<
  EnthalpyUnitClass,
  UnitMeta<M>
>;

/**
 * One gray is equal to the dose of one joule of energy absorbed per one kilogram of matter.
 *
 * @siunit
 * @derived
 */
export type Gray = EnthalpyUnit<{}>;
