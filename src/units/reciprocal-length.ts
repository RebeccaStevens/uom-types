import {
  type AbstractUnitFrom,
  type Exponent,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ReciprocalLengthUnitClass = SiUnitClass<{
  Meters: -1;
}>;

export type ReciprocalLength = AbstractUnitFrom<ReciprocalLengthUnitClass>;

export type ReciprocalLengthUnit<M extends Record<string, Exponent>> =
  ReciprocalLengthUnitFrom<UnitMeta<M>>;

export type ReciprocalLengthUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ReciprocalLengthUnitClass,
  M
>;

/**
 * @siunit
 * @symbol `1/m`
 * @derived
 */
export type ReciprocalMeter = ReciprocalLengthUnit<{}>;
