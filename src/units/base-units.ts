import { type Unit } from "#uom-types";

/**
 * A unit of time.
 *
 * @symbol `s`
 */
export type Seconds = Unit<{ Seconds: 1 }>;

/**
 * A unit of length.
 *
 * @symbol `m`
 */
export type Meters = Unit<{ Meters: 1 }>;

/**
 * A unit of mass.
 *
 * @symbol `kg`
 * @derived
 */
export type Kilograms = Unit<{ Kilograms: 1 }>;

/**
 * A unit of the amount of substance.
 *
 * @symbol `mol`
 * @derived
 */
export type Moles = Unit<{ Moles: 1 }>;

/**
 * A unit of electric current.
 *
 * @symbol `A`
 * @derived
 */
export type Amperes = Unit<{ Amperes: 1 }>;

/**
 * A unit of luminous intensity.
 *
 * @symbol `cd`
 * @derived
 */
export type Candela = Unit<{ Candela: 1 }>;

/**
 * A unit of thermodynamic temperature.
 *
 * @symbol `K`
 * @derived
 */
export type Kelvin = Unit<{ Kelvin: 1 }>;
