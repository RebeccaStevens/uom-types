import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SpecificEnergyUnitClass = BaseUnitClass<{
  Meter: 2;
  Second: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SpecificEnergy = AbstractUnitFrom<SpecificEnergyUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpecificEnergyUnit<M extends UnitSubvalues> = SpecificEnergyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpecificEnergyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<SpecificEnergyUnitClass, M>;

/**
 * A unit of {@link SpecificEnergy}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J/kg`
 */
export type JoulePerKilogram = SpecificEnergyUnit<{}>;
