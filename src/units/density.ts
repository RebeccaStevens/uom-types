import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type DensityUnitClass = SiUnitClass<{ Kilograms: 1; Meters: -3 }>;
export type Density = AbstractUnit<SurfaceDensityUnitClass>;
export type DensityUnit<M extends Record<string, Exponent>> = Unit<
  DensityUnitClass,
  UnitMeta<M>
>;

export type SurfaceDensityUnitClass = SiUnitClass<{ Kilograms: 1; Meters: -2 }>;
export type SurfaceDensity = AbstractUnit<SurfaceDensityUnitClass>;
export type SurfaceDensityUnit<M extends Record<string, Exponent>> = Unit<
  SurfaceDensityUnitClass,
  UnitMeta<M>
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
