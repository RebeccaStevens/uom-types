import {
  type AbstractUnitFrom,
  type Exponent,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type AmountOfSubstanceUnitClass = SiUnitClass<{ Moles: 1 }>;

export type AmountOfSubstance = AbstractUnitFrom<AmountOfSubstanceUnitClass>;

export type AmountOfSubstanceUnit<M extends Record<string, Exponent>> =
  AmountOfSubstanceUnitFrom<UnitMeta<M>>;

export type AmountOfSubstanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  AmountOfSubstanceUnitClass,
  M
>;

/**
 * A unit of the amount of substance.
 *
 * @siunit
 * @symbol `mol`
 */
export type Moles = AmountOfSubstanceUnit<{}>;
