import { type Unit } from "#uom-types";

export type Minutes = Unit<{ Seconds: 1; magnitude60: 1 }>;
export type Hours = Unit<{ Seconds: 1; magnitude60: 2 }>;
export type Day = Unit<{ Seconds: 1; magnitude60: 2; magnitude24: 1 }>;
export type Week = Unit<{
  Seconds: 1;
  magnitude60: 2;
  magnitude24: 1;
  magnitude7: 1;
}>;
export type Year = Unit<{
  Seconds: 1;
  magnitude60: 2;
  magnitude24: 1;
  "magnitude365.25": 1;
}>;
