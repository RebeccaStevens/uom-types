import type {
  Unit, // eslint-disable-line ts/no-unused-vars
  UnitClass,
} from "../core.ts";
import type { Exponent } from "../exponents.ts";
import type { Exactify } from "../utils.ts";

type SiUnitKeys = "Second" | "Meter" | "Kilogram" | "Mole" | "Ampere" | "Candela" | "Kelvin" | "Radian";

/**
 * The {@link UnitClass} that is the base of all {@link Unit}s defined by this library.
 *
 * @group Unit Classes
 */
export type BaseUnitClass<T extends Exactify<SiUnitConfig, T>> = UnitClass<T>;

type SiUnitConfig = Partial<Record<SiUnitKeys, Exponent>>;
