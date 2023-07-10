import { type Exponent, type Unit } from "#uom-types";

import { type Exactify } from "../utils";

type SiUnitKeys =
  | "Seconds"
  | "Meters"
  | "Kilograms"
  | "Moles"
  | "Amperes"
  | "Candelas"
  | "Kelvin"
  | "scalar10";

export type SiUnit<T extends Exactify<SiUnitConfig, T>> = Unit<T>;

type SiUnitConfig = {
  [K in SiUnitKeys]?: Exponent;
};
