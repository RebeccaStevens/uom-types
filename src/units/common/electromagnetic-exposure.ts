import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ExposureUnitClass = BaseUnitClass<{
  Ampere: 1;
  Second: 1;
  Kilogram: -1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type Exposure = AbstractUnitFrom<ExposureUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ExposureUnit<M extends UnitSubvalues> = ExposureUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ExposureUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ExposureUnitClass, M>;

/**
 * A unit of {@link Exposure}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `C/kg`
 */
export type CoulombPerKilogram = ExposureUnit<{}>;
