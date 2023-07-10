import { type SiUnit } from "./si-unit";

/**
 * A unit of mass.
 *
 * @siunit
 * @siunit
 * @symbol `kg`
 */
export type Kilograms = SiUnit<{ Kilograms: 1 }>;

export type Grams = SiUnit<{ Kilograms: 1; scalar10: -3 }>;

export type Tonnes = SiUnit<{ Kilograms: 1; scalar10: 3 }>;
