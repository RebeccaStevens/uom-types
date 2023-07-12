import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ElectricInductanceUnitClass = SiUnitClass<{
  Kilograms: 1;
  Meters: 2;
  Seconds: -2;
  Amperes: -2;
}>;

export type ElectricInductance = AbstractUnit<ElectricInductanceUnitClass>;

export type ElectricInductanceUnit<M extends Record<string, Exponent>> = Unit<
  ElectricInductanceUnitClass,
  UnitMeta<M>
>;

/**
 * @siunit
 * @derived
 */
export type Henries = ElectricInductanceUnit<{}>;
