import { type SiUnit } from "./si-unit";

/**
 * One Weber is equal to the magnetic flux that in linking a circuit of one turn produces in it an
 * electromotive force of one volt as it is uniformly reduced to zero within one second.
 *
 * @siunit
 * @symbol `Wb`
 * @derived
 */
export type Webers = SiUnit<{
  Kilograms: 1;
  Meters: 2;
  Seconds: -2;
  Amperes: -1;
}>;
