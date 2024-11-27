import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type EntropyUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 2;
  Second: -2;
  Kelvin: -1;
}>;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type Entropy = AbstractUnitFrom<EntropyUnitClass>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type EntropyUnit<M extends UnitSubvalues> = EntropyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type EntropyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<EntropyUnitClass, M>;

/**
 * A unit of {@link Entropy}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `J/K`
 */
export type JoulePerKelvin = EntropyUnit<{}>;
