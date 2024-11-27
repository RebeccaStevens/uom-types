import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type MassFlowRateUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Second: -1;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type MassFlowRate = AbstractUnitFrom<MassFlowRateUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type MassFlowRateUnit<M extends UnitSubvalues> = MassFlowRateUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type MassFlowRateUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MassFlowRateUnitClass, M>;

/**
 * A unit of {@link MassFlowRate}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg/s`
 */
export type KilogramPerSecond = MassFlowRateUnit<{}>;
