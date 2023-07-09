import { type Unit } from "#uom-types";

/**
 * This is a unit of temperature such as the freezing point of water (at one atmosphere of pressure)
 * is 0 ℃, while the boiling point is 100 ℃.
 *
 * @symbol `℃`
 * @derived
 */
export type Celsius = Unit<{ Kelvin: 1; "offset273.15": 1 }>;
