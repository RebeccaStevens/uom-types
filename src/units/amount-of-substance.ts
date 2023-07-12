import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type AmountOfSubstanceUnitClass = SiUnitClass<{ Moles: 1 }>;

export type AmountOfSubstance = AbstractUnit<AmountOfSubstanceUnitClass>;

export type AmountOfSubstanceUnit<M extends Record<string, Exponent>> = Unit<
  AmountOfSubstanceUnitClass,
  UnitMeta<M>
>;

/**
 * A unit of the amount of substance.
 *
 * @siunit
 * @symbol `mol`
 */
export type Moles = AmountOfSubstanceUnit<{}>;
