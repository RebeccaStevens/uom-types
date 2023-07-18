import {
  type AbstractUnitFrom,
  type UnitFrom,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type AreaUnitClass = SiUnitClass<{ Meters: 2 }>;

export type Area = AbstractUnitFrom<AreaUnitClass>;

export type AreaUnit<M extends Record<string, Exponent>> = UnitFrom<
  AreaUnitClass,
  UnitMeta<M>
>;

/**
 * A unit of area.
 *
 * @siunit
 * @symbol `m²`
 * @derived
 */
export type SquareMeters = AreaUnit<{}>;

/**
 * A unit of area equal to 100 Square Meters.
 *
 * @siunit
 * @symbol `are`
 * @derived
 */
export type Ares = AreaUnit<{ scale10: 2 }>;

/**
 * A unit of area equal to 10,000 Square Meters.
 *
 * @siunit
 * @symbol `ha`
 * @derived
 */
export type Hectares = AreaUnit<{ scale10: 4 }>;
