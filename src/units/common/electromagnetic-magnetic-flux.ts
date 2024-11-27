import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticFluxUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 2;
  Second: -2;
  Ampere: -1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticFlux = AbstractUnitFrom<MagneticFluxUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticFluxUnit<M extends UnitSubvalues> = MagneticFluxUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticFluxUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MagneticFluxUnitClass, M>;

/**
 * A unit of {@link MagneticFlux}.
 *
 * One Weber is equal to the magnetic flux that in linking a circuit of one turn produces in it an
 * electromotive force of one volt as it is uniformly reduced to zero within one second.
 *
 * @group Units
 * @category Derived
 * @symbol `Wb`
 */
export type Weber = MagneticFluxUnit<{}>;
