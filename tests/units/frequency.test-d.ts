import { expectType } from "tsd";

import { type InverseUnit } from "#uom-types";
import {
  type Hertz,
  type Seconds,
  type Hours,
  type PerHour,
  type Minutes,
  type PerMinute,
} from "#uom-types/units";

type Hertz_DerivedFrom_Unitless_Per_Second = InverseUnit<Seconds>;

expectType<Hertz_DerivedFrom_Unitless_Per_Second>(0 as Hertz);
expectType<Hertz>(0 as Hertz_DerivedFrom_Unitless_Per_Second);

type PerMinute_DerivedFrom_Unitless_Per_Minute = InverseUnit<Minutes>;

expectType<PerMinute_DerivedFrom_Unitless_Per_Minute>(0 as PerMinute);
expectType<PerMinute>(0 as PerMinute_DerivedFrom_Unitless_Per_Minute);

type PerHour_DerivedFrom_Unitless_Per_Hour = InverseUnit<Hours>;

expectType<PerHour_DerivedFrom_Unitless_Per_Hour>(0 as PerHour);
expectType<PerHour>(0 as PerHour_DerivedFrom_Unitless_Per_Hour);
