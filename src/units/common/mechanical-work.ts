import type { UnitSubvalues, UnknownUnitMeta } from "../../core.ts";

import type { Energy, EnergyUnit, EnergyUnitClass, EnergyUnitFrom, Joule } from "./index.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type WorkUnitClass = EnergyUnitClass;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Work = Energy;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type WorkUnit<M extends UnitSubvalues> = EnergyUnit<M>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type WorkUnitFrom<M extends UnknownUnitMeta> = EnergyUnitFrom<M>;

/**
 * A unit of {@link Work}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N⋅m`
 */
export type NewtonMeter = Joule;
