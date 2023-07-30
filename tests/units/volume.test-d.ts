import { expectType } from "tsd";

import { type MultiplyUnits } from "#uom-types";
import {
  type CubicMeters,
  type SquareMeters,
  type Meters,
  type Liters,
  type Milli,
  type Kilo,
  type CubicCentiMeters,
} from "#uom-types/units";

type CubicMeters_DerivedFrom_Meters_Cubed = MultiplyUnits<
  MultiplyUnits<Meters, Meters>,
  Meters
>;

expectType<CubicMeters_DerivedFrom_Meters_Cubed>(0 as CubicMeters);
expectType<CubicMeters>(0 as CubicMeters_DerivedFrom_Meters_Cubed);

type CubicMeters_DerivedFrom_SquareMeters_By_Meters = MultiplyUnits<
  SquareMeters,
  Meters
>;

expectType<CubicMeters_DerivedFrom_SquareMeters_By_Meters>(0 as CubicMeters);
expectType<CubicMeters>(0 as CubicMeters_DerivedFrom_SquareMeters_By_Meters);

type Liters_DerivedFrom_CubicMeters_Per_1000 = Milli<CubicMeters>;

expectType<Liters_DerivedFrom_CubicMeters_Per_1000>(0 as Liters);
expectType<Liters>(0 as Liters_DerivedFrom_CubicMeters_Per_1000);

type CubicMeters_DerivedFrom_1000_Liters = Kilo<Liters>;

expectType<CubicMeters_DerivedFrom_1000_Liters>(0 as CubicMeters);
expectType<CubicMeters>(0 as CubicMeters_DerivedFrom_1000_Liters);

expectType<Milli<Liters>>(0 as CubicCentiMeters);
expectType<CubicCentiMeters>(0 as Milli<Liters>);
