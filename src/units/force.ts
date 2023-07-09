import { type Unit } from "#uom-types";

/**
 * One newton is the force required to accelerate a mass of 1 kilogram at 1 metre per second per second.
 *
 * @symbol `N`
 * @derived
 */
export type Newtons = Unit<{ Kilograms: 1; Meters: 1; Seconds: -2 }>;
