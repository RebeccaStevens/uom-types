import { expectType } from "tsd";

import { type DivideUnit } from "#uom-types";
import {
  type Meters,
  type MetersPerSecond,
  type Seconds,
} from "#uom-types/units";

type MetersPerSecond_DerivedFrom_Meters_Per_Second = DivideUnit<
  Meters,
  Seconds
>;

expectType<MetersPerSecond_DerivedFrom_Meters_Per_Second>(0 as MetersPerSecond);
expectType<MetersPerSecond>(0 as MetersPerSecond_DerivedFrom_Meters_Per_Second);
