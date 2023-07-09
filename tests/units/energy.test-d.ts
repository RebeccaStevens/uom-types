import { expectType } from "tsd";

import { type MultiplyUnit } from "#uom-types";
import {
  type Kilo,
  type Hours,
  type KiloWattHours,
  type Meters,
  type Newtons,
  type Watts,
  type Seconds,
  type Joules,
} from "#uom-types/units";

type Joules_DerivedFrom_Newtons_By_Meters = MultiplyUnit<Newtons, Meters>;

expectType<Joules_DerivedFrom_Newtons_By_Meters>(0 as Joules);
expectType<Joules>(0 as Joules_DerivedFrom_Newtons_By_Meters);

type Joules_DerivedFrom_Watts_By_Seconds = MultiplyUnit<Watts, Seconds>;

expectType<Joules_DerivedFrom_Watts_By_Seconds>(0 as Joules);
expectType<Joules>(0 as Joules_DerivedFrom_Watts_By_Seconds);

type KiloWattHours_DerivedFrom_Kilo_Watts_Hours = Kilo<
  MultiplyUnit<Watts, Hours>
>;
expectType<KiloWattHours_DerivedFrom_Kilo_Watts_Hours>(0 as KiloWattHours);
expectType<KiloWattHours>(0 as KiloWattHours_DerivedFrom_Kilo_Watts_Hours);
