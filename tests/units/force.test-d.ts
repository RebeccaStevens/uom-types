import { expectType } from "tsd";

import { type MultiplyUnit } from "#uom-types";
import {
  type MetersPerSecondPerSecond,
  type Kilograms,
  type Newtons,
} from "#uom-types/units";

type Newtons_DerivedFrom_Kilograms_By_MetersPerSecondPerSecond = MultiplyUnit<
  Kilograms,
  MetersPerSecondPerSecond
>;

expectType<Newtons_DerivedFrom_Kilograms_By_MetersPerSecondPerSecond>(
  0 as Newtons,
);
expectType<Newtons>(
  0 as Newtons_DerivedFrom_Kilograms_By_MetersPerSecondPerSecond,
);
