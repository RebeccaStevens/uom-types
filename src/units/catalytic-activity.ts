import { type SiUnit } from "./si-unit";

/**
 * A unit of catalytic activity.
 *
 * @siunit
 * @symbol `kat`
 * @derived
 */
export type Katals = SiUnit<{ Moles: 1; Seconds: -1 }>;
