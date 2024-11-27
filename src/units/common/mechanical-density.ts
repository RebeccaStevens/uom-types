import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type DensityUnitClass = BaseUnitClass<{ Kilogram: 1; Meter: -3 }>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Density = AbstractUnitFrom<DensityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type DensityUnit<M extends UnitSubvalues> = DensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type DensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<DensityUnitClass, M>;

/**
 * A unit of {@link Density}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg/m³`
 */
export type KilogramPerCubicMeter = DensityUnit<{}>;
