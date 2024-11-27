import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type AbsorbedDoseRateUnitClass = BaseUnitClass<{
  Meter: 2;
  Second: -3;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type AbsorbedDoseRate = AbstractUnitFrom<AbsorbedDoseRateUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type AbsorbedDoseRateUnit<M extends UnitSubvalues> = AbsorbedDoseRateUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type AbsorbedDoseRateUnitFrom<M extends UnknownUnitMeta> = UnitFrom<AbsorbedDoseRateUnitClass, M>;

/**
 * A unit of {@link AbsorbedDoseRate}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `Gy/s`
 */
export type GrayPerSecond = AbsorbedDoseRateUnit<{}>;
