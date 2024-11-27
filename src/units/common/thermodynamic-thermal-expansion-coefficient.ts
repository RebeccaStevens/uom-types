import type { UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Reciprocal } from "../modifiers/index.ts";

import type { Temperature, TemperatureUnitClass } from "./index.ts";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type ThermalExpansionCoefficientUnitClass = Reciprocal<TemperatureUnitClass>;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type ThermalExpansionCoefficient = Reciprocal<Temperature>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type ThermalExpansionCoefficientUnit<M extends UnitSubvalues> = ThermalExpansionCoefficientUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type ThermalExpansionCoefficientUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ThermalExpansionCoefficientUnitClass,
  M
>;
