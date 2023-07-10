import { type SiUnit } from "./si-unit";

/**
 * A unit of luminous intensity.
 *
 * @siunit
 * @symbol `cd`
 */
export type Candelas = SiUnit<{ Candelas: 1 }>;

/**
 * One Lumen is equal to the amount of light given out through a solid angle by a source of one
 * candela intensity radiating equally in all directions.
 *
 * @siunit
 * @symbol `lx`
 * @derived
 */
export type Lumens = SiUnit<{ Candelas: 1 }>; // Multiplied by Steradians
