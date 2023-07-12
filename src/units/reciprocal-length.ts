import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ReciprocalLengthUnitClass = SiUnitClass<{
  Meters: -1;
}>;

export type ReciprocalLength = AbstractUnit<ReciprocalLengthUnitClass>;

export type ReciprocalLengthUnit<M extends Record<string, Exponent>> = Unit<
  ReciprocalLengthUnitClass,
  UnitMeta<M>
>;

/**
 * @siunit
 * @symbol `1/m`
 * @derived
 */
export type ReciprocalMeter = ReciprocalLengthUnit<{}>;
