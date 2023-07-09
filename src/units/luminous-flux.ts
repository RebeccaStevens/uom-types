import { type Unit } from "#uom-types";

/**
 * One Lumen is equal to the amount of light given out through a solid angle by a source of one
 * candela intensity radiating equally in all directions.
 *
 * @symbol `lx`
 * @derived
 */
export type Lumens = Unit<{ Candela: 1 }>;
