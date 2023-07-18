import {
  type AbstractUnitFrom,
  type Exponent,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type MassUnitClass = SiUnitClass<{
  Kilograms: 1;
}>;

export type Mass = AbstractUnitFrom<MassUnitClass>;

export type MassUnit<M extends Record<string, Exponent>> = MassUnitFrom<
  UnitMeta<M>
>;

export type MassUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MassUnitClass,
  M
>;

/**
 * A unit of mass.
 *
 * @siunit
 * @siunit
 * @symbol `kg`
 */
export type Kilograms = MassUnit<{}>;

export type Grams = MassUnit<{ scalar10: -3 }>;

export type Tonnes = MassUnit<{ scalar10: 3 }>;
