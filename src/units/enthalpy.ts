import { type SiUnit } from "./si-unit";

/**
 * One gray is equal to the dose of one joule of energy absorbed per one kilogram of matter.
 *
 * @siunit
 * @derived
 */
export type Gray = SiUnit<{ Meters: 2; Seconds: -2 }>;
