import { expectType } from "tsd";

import { type DivideUnits, type MultiplyUnits } from "#uom-types";
import {
  type CubicMeters,
  type Meters,
  type SquareMeters,
} from "#uom-types/units";

type SquareMeters_DerivedFrom_Meters_Squared = MultiplyUnits<Meters, Meters>;

expectType<SquareMeters_DerivedFrom_Meters_Squared>(0 as SquareMeters);
expectType<SquareMeters>(0 as SquareMeters_DerivedFrom_Meters_Squared);

type SquareMeters_DerivedFrom_CubicMeters_Per_Squared = DivideUnits<
  CubicMeters,
  Meters
>;

expectType<SquareMeters_DerivedFrom_CubicMeters_Per_Squared>(0 as SquareMeters);
expectType<SquareMeters>(0 as SquareMeters_DerivedFrom_CubicMeters_Per_Squared);
