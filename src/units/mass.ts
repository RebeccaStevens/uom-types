import { type Unit } from "#uom-types";

export type Grams = Unit<{ Kilograms: 1; magnitude10: -3 }>;

export type Tonne = Unit<{ Kilograms: 1; magnitude10: 3 }>;
