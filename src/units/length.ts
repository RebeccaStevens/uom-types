import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type LengthUnitClass = SiUnitClass<{ Meters: 1 }>;

export type Length = AbstractUnit<LengthUnitClass>;

export type LengthUnit<M extends Record<string, Exponent>> = Unit<
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
