import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type StiffnessUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Second: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Stiffness = AbstractUnitFrom<StiffnessUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type StiffnessUnit<M extends UnitSubvalues> = StiffnessUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type StiffnessUnitFrom<M extends UnknownUnitMeta> = UnitFrom<StiffnessUnitClass, M>;

/**
 * A unit of {@link Stiffness}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N/m`
 */
export type NewtonPerMeter = StiffnessUnit<{}>;
