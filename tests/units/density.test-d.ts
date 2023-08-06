import { expectType } from "tsd";

import { type DivideUnits } from "#uom-types";
import {
  type Gram,
  type Kilo,
  type Cubic,
  type Metre,
  type KilogramPerCubicMetre,
} from "#uom-types/units";

type KilogramPerCubicMetre_DerivedFrom_Kilogram_Per_CubicMetre = DivideUnits<
  Kilo<Gram>,
  Cubic<Metre>
>;

expectType<KilogramPerCubicMetre_DerivedFrom_Kilogram_Per_CubicMetre>(
  0 as KilogramPerCubicMetre,
);
expectType<KilogramPerCubicMetre>(
  0 as KilogramPerCubicMetre_DerivedFrom_Kilogram_Per_CubicMetre,
);
