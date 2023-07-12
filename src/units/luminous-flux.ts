import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type LuminousFluxUnitClass = SiUnitClass<{ Candelas: 1 }>;

export type LuminousFlux = AbstractUnit<LuminousFluxUnitClass>;

export type LuminousFluxUnit<M extends Record<string, Exponent>> = Unit<
  LuminousFluxUnitClass,
  UnitMeta<M>
>;

/**
 * A unit of luminous intensity.
 *
 * @siunit
 * @symbol `cd`
 */
export type Candelas = LuminousFluxUnit<{}>;

/**
 * One Lumen is equal to the amount of light given out through a solid angle by a source of one
 * candela intensity radiating equally in all directions.
 *
 * @siunit
 * @symbol `lx`
 * @derived
 */
export type Lumens = LuminousFluxUnit<{}>; // Multiplied by Steradians
