import { type UnitClass, type Exponent } from "#uom-types";

import { type Exactify } from "../utils";

type SiUnitKeys =
  | "Seconds"
  | "Meters"
  | "Kilograms"
  | "Moles"
  | "Amperes"
  | "Candelas"
  | "Kelvin";

export type SiUnitClass<T extends Exactify<SiUnitConfig, T>> = UnitClass<T>;

type SiUnitConfig = {
  [K in SiUnitKeys]?: Exponent;
};
