import { type SiUnit } from "./si-unit";

/**
 * A unit of area.
 *
 * @siunit
 * @symbol `m²`
 * @derived
 */
export type SquareMeters = SiUnit<{ Meters: 2 }>;

/**
 * A unit of area equal to 100 Square Meters.
 *
 * @siunit
 * @symbol `are`
 * @derived
 */
export type Ares = SiUnit<{ Meters: 2; scalar10: 2 }>;

/**
 * A unit of area equal to 10,000 Square Meters.
 *
 * @siunit
 * @symbol `ha`
 * @derived
 */
export type Hectares = SiUnit<{ Meters: 2; scalar10: 4 }>;
