import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type MagneticFluxUnitClass = SiUnitClass<{
  Kilograms: 1;
  Meters: 2;
  Seconds: -2;
  Amperes: -1;
}>;

export type MagneticFlux = AbstractUnit<MagneticFluxUnitClass>;

export type MagneticFluxUnit<M extends Record<string, Exponent>> = Unit<
  MagneticFluxUnitClass,
  UnitMeta<M>
>;

/**
 * One Weber is equal to the magnetic flux that in linking a circuit of one turn produces in it an
 * electromotive force of one volt as it is uniformly reduced to zero within one second.
 *
 * @siunit
 * @symbol `Wb`
 * @derived
 */
export type Webers = MagneticFluxUnit<{}>;
