import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type IntensityUnitClass = BaseUnitClass<{ Kilogram: 1; Second: -3 }>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Intensity = AbstractUnitFrom<IntensityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type IntensityUnit<M extends UnitSubvalues> = IntensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type IntensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<IntensityUnitClass, M>;

/**
 * A unit of {@link Intensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/m²`
 */
export type WattPerSquareMeter = IntensityUnit<{}>;
