import { type Unit, type UnitClass, type Exponent } from "#uom-types";

import { type Exactify } from "../utils";

type SiUnitKeys =
  | "Second"
  | "Metre"
  | "Kilogram"
  | "Mole"
  | "Ampere"
  | "Candela"
  | "Kelvin"
  | "Radian";

/**
 * The {@link UnitClass} that is the base of all {@link Unit}s defined by this library.
 *
 * @group Unit Classes
 */
export type BaseUnitClass<T extends Exactify<SiUnitConfig, T>> = UnitClass<T>;

type SiUnitConfig = {
  [K in SiUnitKeys]?: Exponent;
};
