import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type SpecificEntropyUnitClass = BaseUnitClass<{
  Meter: 2;
  Second: -2;
  Kelvin: -1;
}>;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type SpecificEntropy = AbstractUnitFrom<SpecificEntropyUnitClass>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type SpecificEntropyUnit<M extends UnitSubvalues> = SpecificEntropyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type SpecificEntropyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<SpecificEntropyUnitClass, M>;

/**
 * A unit of {@link SpecificEntropy}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `J/(K⋅kg)`
 */
export type JoulePerKilogramKelvin = SpecificEntropyUnit<{}>;
