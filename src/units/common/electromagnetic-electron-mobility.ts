import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectronMobilityUnitClass = BaseUnitClass<{
  Kilogram: -1;
  Second: 2;
  Ampere: 1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectronMobility = AbstractUnitFrom<ElectronMobilityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectronMobilityUnit<M extends UnitSubvalues> = ElectronMobilityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectronMobilityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ElectronMobilityUnitClass, M>;

/**
 * A unit of {@link ElectronMobility}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `m²/(V⋅s)`
 */
export type SquareMeterPerVoltSecond = ElectronMobilityUnit<{}>;
