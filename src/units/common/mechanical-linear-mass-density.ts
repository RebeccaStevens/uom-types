import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type LinearMassDensityUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: -1;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type LinearMassDensity = AbstractUnitFrom<LinearMassDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type LinearMassDensityUnit<M extends UnitSubvalues> = LinearMassDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type LinearMassDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<LinearMassDensityUnitClass, M>;

/**
 * A unit of {@link LinearMassDensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg/m`
 */
export type KilogramPerMeter = LinearMassDensityUnit<{}>;
