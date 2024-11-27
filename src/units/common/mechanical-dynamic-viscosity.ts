import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type DynamicViscosityUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: -1;
  Second: -1;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type DynamicViscosity = AbstractUnitFrom<DynamicViscosityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type DynamicViscosityUnit<M extends UnitSubvalues> = DynamicViscosityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type DynamicViscosityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<DynamicViscosityUnitClass, M>;

/**
 * A unit of {@link DynamicViscosity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `Pa⋅s`
 */
export type PascalSecond = DynamicViscosityUnit<{}>;
