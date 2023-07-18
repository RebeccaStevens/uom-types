import {
  type AbstractUnitFrom,
  type Exponent,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type LengthUnitClass = SiUnitClass<{ Meters: 1 }>;

export type Length = AbstractUnitFrom<LengthUnitClass>;

export type LengthUnit<M extends Record<string, Exponent>> = LengthUnitFrom<
  UnitMeta<M>
>;

export type LengthUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  LengthUnitClass,
  M
>;
/**
 * A unit of length.
 *
 * @siunit
 * @symbol `m`
 */
export type Meters = LengthUnit<{}>;
