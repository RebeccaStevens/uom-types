import { type Unit } from "#uom-types";

/**
 * A unit of catalytic activity.
 *
 * @symbol `kat`
 * @derived
 */
export type Katal = Unit<{ Moles: 1; Second: -1 }>;
