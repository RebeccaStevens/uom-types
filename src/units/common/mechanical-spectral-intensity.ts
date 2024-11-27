import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SpectralIntensityUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 1;
  Second: -3;
  Radian: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SpectralIntensity = AbstractUnitFrom<SpectralIntensityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpectralIntensityUnit<M extends UnitSubvalues> = SpectralIntensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpectralIntensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<SpectralIntensityUnitClass, M>;

/**
 * A unit of {@link SpectralIntensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/(sr⋅m)`
 */
export type WattPerSteradianMeter = SpectralIntensityUnit<{}>;
