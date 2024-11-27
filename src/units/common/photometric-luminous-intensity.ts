import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Photometric
 */
export type LuminousIntensityUnitClass = BaseUnitClass<{ Candela: 1 }>;

/**
 * @group Abstract Units
 * @category Photometric
 */
export type LuminousIntensity = AbstractUnitFrom<LuminousIntensityUnitClass>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminousIntensityUnit<M extends UnitSubvalues> = LuminousIntensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminousIntensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<LuminousIntensityUnitClass, M>;

/**
 * A unit of luminous intensity.
 *
 * @group Units
 * @category Base
 * @symbol `cd`
 */
export type Candela = LuminousIntensityUnit<{}>;
