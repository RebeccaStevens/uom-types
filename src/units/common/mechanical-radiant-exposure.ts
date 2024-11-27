import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type RadiantExposureUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Second: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type RadiantExposure = AbstractUnitFrom<RadiantExposureUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type RadiantExposureUnit<M extends UnitSubvalues> = RadiantExposureUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type RadiantExposureUnitFrom<M extends UnknownUnitMeta> = UnitFrom<RadiantExposureUnitClass, M>;

/**
 * A unit of {@link RadiantExposure}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J/m²`
 */
export type JoulePerSquareMeter = RadiantExposureUnit<{}>;
