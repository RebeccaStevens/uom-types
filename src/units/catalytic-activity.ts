import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type CatalyticActivityUnitClass = SiUnitClass<{ Moles: 1; Seconds: -1 }>;

export type CatalyticActivity = AbstractUnit<CatalyticActivityUnitClass>;

export type CatalyticActivityUnit<M extends Record<string, Exponent>> = Unit<
  CatalyticActivityUnitClass,
  UnitMeta<M>
>;

/**
 * A unit of catalytic activity.
 *
 * @siunit
 * @symbol `kat`
 * @derived
 */
export type Katals = CatalyticActivityUnit<{}>;
