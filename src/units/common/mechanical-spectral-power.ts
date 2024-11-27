import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SpectralPowerUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 1;
  Second: -3;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SpectralPower = AbstractUnitFrom<SpectralPowerUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpectralPowerUnit<M extends UnitSubvalues> = SpectralPowerUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpectralPowerUnitFrom<M extends UnknownUnitMeta> = UnitFrom<SpectralPowerUnitClass, M>;

/**
 * A unit of {@link SpectralPower}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/m`
 */
export type WattPerMeter = SpectralPowerUnit<{}>;
