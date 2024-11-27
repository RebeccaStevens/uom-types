import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type RadianceUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Second: -3;
  Radian: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Radiance = AbstractUnitFrom<RadianceUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type RadianceUnit<M extends UnitSubvalues> = RadianceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type RadianceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<RadianceUnitClass, M>;

/**
 * A unit of {@link Radiance}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/(sr⋅m²)`
 */
export type WattPerSteradianSquareMeter = RadianceUnit<{}>;
