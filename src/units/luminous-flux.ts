import {
  type AbstractUnitFrom,
  type Exponent,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type LuminousFluxUnitClass = SiUnitClass<{ Candelas: 1 }>;

export type LuminousFlux = AbstractUnitFrom<LuminousFluxUnitClass>;

export type LuminousFluxUnit<M extends Record<string, Exponent>> =
  LuminousFluxUnitFrom<UnitMeta<M>>;

export type LuminousFluxUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  LuminousFluxUnitClass,
  M
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
