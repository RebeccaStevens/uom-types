import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SpectralRadianceUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: -1;
  Radian: -2;
  Second: -3;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SpectralRadiance = AbstractUnitFrom<SpectralRadianceUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpectralRadianceUnit<M extends UnitSubvalues> = SpectralRadianceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpectralRadianceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<SpectralRadianceUnitClass, M>;

/**
 * A unit of {@link SpectralRadiance}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/(sr⋅m³)`
 */
export type WattPerSteradianCubicMeter = SpectralRadianceUnit<{}>;
