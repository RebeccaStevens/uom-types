import { expectType } from "tsd";

import { type MultiplyUnits } from "#uom-types";
import {
  type MetersPerSecondPerSecond,
  type Kilograms,
  type Newtons,
} from "#uom-types/units";

type Newtons_DerivedFrom_Kilograms_By_MetersPerSecondPerSecond = MultiplyUnits<
  Kilograms,
  MetersPerSecondPerSecond
>;

expectType<Newtons_DerivedFrom_Kilograms_By_MetersPerSecondPerSecond>(
  0 as Newtons,
);
expectType<Newtons>(
  0 as Newtons_DerivedFrom_Kilograms_By_MetersPerSecondPerSecond,
);
