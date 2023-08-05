import { expectType } from "tsd";

import { type DivideUnits } from "#uom-types";
import { type Metre, type MetrePerSecond, type Second } from "#uom-types/units";

type MetrePerSecond_DerivedFrom_Metre_Per_Second = DivideUnits<Metre, Second>;

expectType<MetrePerSecond_DerivedFrom_Metre_Per_Second>(0 as MetrePerSecond);
expectType<MetrePerSecond>(0 as MetrePerSecond_DerivedFrom_Metre_Per_Second);
