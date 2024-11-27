import type { UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Reciprocal } from "../modifiers/index.ts";

import type { ElectricInductance, ElectricInductanceUnitClass } from "./index.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticReluctanceUnitClass = Reciprocal<ElectricInductanceUnitClass>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticReluctance = Reciprocal<ElectricInductance>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticReluctanceUnit<M extends UnitSubvalues> = MagneticReluctanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticReluctanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MagneticReluctanceUnitClass, M>;
