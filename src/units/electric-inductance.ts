import {
  type AbstractUnitFrom,
  type UnitSubvalues,
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

export type ElectricInductanceUnit<M extends UnitSubvalues> =
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
