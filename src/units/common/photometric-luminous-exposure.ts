import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Photometric
 */
export type LuminousExposureUnitClass = BaseUnitClass<{
  Candela: 1;
  Meter: -2;
  Second: 1;
}>;

/**
 * @group Abstract Units
 * @category Photometric
 */
export type LuminousExposure = AbstractUnitFrom<LuminousExposureUnitClass>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminousExposureUnit<M extends UnitSubvalues> = LuminousExposureUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminousExposureUnitFrom<M extends UnknownUnitMeta> = UnitFrom<LuminousExposureUnitClass, M>;

/**
 * A unit of {@link LuminousExposure}.
 *
 * @group Units
 * @category Photometric
 * @symbol `lx⋅s`
 */
export type LuxSecond = LuminousExposureUnit<{}>;
