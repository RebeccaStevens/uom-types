import { type SiUnit } from "./si-unit";

/**
 * One newton is the force required to accelerate a mass of 1 kilogram at 1 metre per second per second.
 *
 * @siunit
 * @symbol `N`
 * @derived
 */
export type Newtons = SiUnit<{ Kilograms: 1; Meters: 1; Seconds: -2 }>;
