import {
  type AbstractUnitFrom,
  type Exponent,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type DensityUnitClass = SiUnitClass<{ Kilograms: 1; Meters: -3 }>;
export type Density = AbstractUnitFrom<SurfaceDensityUnitClass>;
export type DensityUnit<M extends Record<string, Exponent>> = DensityUnitFrom<
  UnitMeta<M>
>;
export type DensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  DensityUnitClass,
  M
>;

export type SurfaceDensityUnitClass = SiUnitClass<{ Kilograms: 1; Meters: -2 }>;
export type SurfaceDensity = AbstractUnitFrom<SurfaceDensityUnitClass>;
export type SurfaceDensityUnit<M extends Record<string, Exponent>> =
  SurfaceDensityUnitFrom<UnitMeta<M>>;
export type SurfaceDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  SurfaceDensityUnitClass,
  M
>;

/**
 * A unit of density.
 *
 * @siunit
 * @symbol `kg/m³`
 * @derived
 */
export type KilogramsPerCubicMeter = DensityUnit<{}>;

/**
 * A unit of surface density.
 *
 * @siunit
 * @symbol `kg/m²`
 * @derived
 */
export type KilogramsPerSquareMeter = SurfaceDensityUnit<{}>;
