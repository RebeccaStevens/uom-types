import {
  type AbstractUnitFrom,
  type UnitFrom,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type MassUnitClass = SiUnitClass<{
  Kilograms: 1;
}>;

export type Mass = AbstractUnitFrom<MassUnitClass>;

export type MassUnit<M extends Record<string, Exponent>> = UnitFrom<
  MassUnitClass,
  UnitMeta<M>
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
