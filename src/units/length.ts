import {
  type AbstractUnitFrom,
  type UnitFrom,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type LengthUnitClass = SiUnitClass<{ Meters: 1 }>;

export type Length = AbstractUnitFrom<LengthUnitClass>;

export type LengthUnit<M extends Record<string, Exponent>> = UnitFrom<
  LengthUnitClass,
  UnitMeta<M>
>;

/**
 * A unit of length.
 *
 * @siunit
 * @symbol `m`
 */
export type Meters = LengthUnit<{}>;
