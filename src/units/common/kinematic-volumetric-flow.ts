import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type VolumetricFlowUnitClass = BaseUnitClass<{
  Meter: 3;
  Second: -1;
}>;

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type VolumetricFlow = AbstractUnitFrom<VolumetricFlowUnitClass>;

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type VolumetricFlowUnit<M extends UnitSubvalues> = VolumetricFlowUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type VolumetricFlowUnitFrom<M extends UnknownUnitMeta> = UnitFrom<VolumetricFlowUnitClass, M>;

/**
 * A unit of {@link VolumetricFlow}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m³/s`
 */
export type CubicMeterPerSecond = VolumetricFlowUnit<{}>;
