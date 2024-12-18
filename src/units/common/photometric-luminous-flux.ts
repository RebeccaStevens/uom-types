import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Photometric
 */
export type LuminousFluxUnitClass = BaseUnitClass<{ Candela: 1; Radian: 2 }>;

/**
 * @group Abstract Units
 * @category Photometric
 */
export type LuminousFlux = AbstractUnitFrom<LuminousFluxUnitClass>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminousFluxUnit<M extends UnitSubvalues> = LuminousFluxUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminousFluxUnitFrom<M extends UnknownUnitMeta> = UnitFrom<LuminousFluxUnitClass, M>;

/**
 * One Lumen is equal to the amount of light given out through a solid angle by a source of one
 * candela intensity radiating equally in all directions.
 *
 * @group Units
 * @category Derived
 * @symbol `lm`
 */
export type Lumen = LuminousFluxUnit<{}>;
