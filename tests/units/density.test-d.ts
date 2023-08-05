import { expectType } from "tsd";

import { type DivideUnits } from "#uom-types";
import {
  type CubicMetre,
  type Kilogram,
  type KilogramPerCubicMetre,
} from "#uom-types/units";

type KilogramPerCubicMetre_DerivedFrom_Kilogram_Per_CubicMetre = DivideUnits<
  Kilogram,
  CubicMetre
>;

expectType<KilogramPerCubicMetre_DerivedFrom_Kilogram_Per_CubicMetre>(
  0 as KilogramPerCubicMetre,
);
expectType<KilogramPerCubicMetre>(
  0 as KilogramPerCubicMetre_DerivedFrom_Kilogram_Per_CubicMetre,
);
