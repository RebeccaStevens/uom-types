import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type MagneticFieldStrengthUnitClass = SiUnitClass<{
  Amperes: 1;
  Meters: -1;
}>;

export type MagneticFieldStrength =
  AbstractUnit<MagneticFieldStrengthUnitClass>;

export type MagneticFieldStrengthUnit<M extends Record<string, Exponent>> =
  Unit<MagneticFieldStrengthUnitClass, UnitMeta<M>>;

/**
 * @siunit
 * @symbol `A/m`
 * @derived
 */
export type AmperesPerMeter = MagneticFieldStrengthUnit<{}>;
