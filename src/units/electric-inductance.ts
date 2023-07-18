import {
  type AbstractUnitFrom,
  type Exponent,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type ElectricInductanceUnitClass = SiUnitClass<{
  Kilograms: 1;
  Meters: 2;
  Seconds: -2;
  Amperes: -2;
}>;

export type ElectricInductance = AbstractUnitFrom<ElectricInductanceUnitClass>;

export type ElectricInductanceUnit<M extends Record<string, Exponent>> =
  ElectricInductanceUnitFrom<UnitMeta<M>>;

export type ElectricInductanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ElectricInductanceUnitClass,
  M
>;

/**
 * @siunit
 * @derived
 */
export type Henries = ElectricInductanceUnit<{}>;
