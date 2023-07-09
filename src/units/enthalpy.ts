import { type Unit } from "#uom-types";

/**
 * One gray is equal to the dose of one joule of energy absorbed per one kilogram of matter.
 *
 * @derived
 */
export type Gray = Unit<{ Meters: 2; Seconds: -2 }>;
