import { type UnitClass, type Exponent } from "#uom-types";

import { type Exactify } from "../../utils";

type SiUnitKeys =
  | "Second"
  | "Metre"
  | "Kilogram"
  | "Mole"
  | "Ampere"
  | "Candela"
  | "Kelvin"
  | "Radian";

export type SiUnitClass<T extends Exactify<SiUnitConfig, T>> = UnitClass<T>;

type SiUnitConfig = {
  [K in SiUnitKeys]?: Exponent;
};
