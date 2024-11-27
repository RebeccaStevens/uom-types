import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type EnergyFluxDensityUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Second: -3;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type EnergyFluxDensity = AbstractUnitFrom<EnergyFluxDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type EnergyFluxDensityUnit<M extends UnitSubvalues> = EnergyFluxDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type EnergyFluxDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<EnergyFluxDensityUnitClass, M>;

/**
 * A unit of {@link EnergyFluxDensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J/(m²⋅s)`
 */
export type JoulePerSquareMeterSecond = EnergyFluxDensityUnit<{}>;
