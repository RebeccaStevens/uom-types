import {
  type AbstractUnitFrom,
  type Exponent,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type CatalyticActivityUnitClass = SiUnitClass<{ Moles: 1; Seconds: -1 }>;

export type CatalyticActivity = AbstractUnitFrom<CatalyticActivityUnitClass>;

export type CatalyticActivityUnit<M extends Record<string, Exponent>> =
  CatalyticActivityUnitFrom<UnitMeta<M>>;

export type CatalyticActivityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  CatalyticActivityUnitClass,
  M
>;

/**
 * A unit of catalytic activity.
 *
 * @siunit
 * @symbol `kat`
 * @derived
 */
export type Katals = CatalyticActivityUnit<{}>;
