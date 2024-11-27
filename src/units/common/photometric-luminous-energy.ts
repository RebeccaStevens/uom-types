import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Photometric
 */
export type LuminousEnergyUnitClass = BaseUnitClass<{
  Candela: 1;
  Radian: 2;
  Second: 1;
}>;

/**
 * @group Abstract Units
 * @category Photometric
 */
export type LuminousEnergy = AbstractUnitFrom<LuminousEnergyUnitClass>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminousEnergyUnit<M extends UnitSubvalues> = LuminousEnergyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminousEnergyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<LuminousEnergyUnitClass, M>;

/**
 * A unit of {@link LuminousEnergy}.
 *
 * @group Units
 * @category Photometric
 * @symbol `lm⋅s`
 */
export type LumenSecond = LuminousEnergyUnit<{}>;
