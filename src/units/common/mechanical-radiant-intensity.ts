import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type RadiantIntensityUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 2;
  Second: -3;
  Radian: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type RadiantIntensity = AbstractUnitFrom<RadiantIntensityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type RadiantIntensityUnit<M extends UnitSubvalues> = RadiantIntensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type RadiantIntensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<RadiantIntensityUnitClass, M>;

/**
 * A unit of {@link RadiantIntensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/sr`
 */
export type WattPerSteradian = RadiantIntensityUnit<{}>;
