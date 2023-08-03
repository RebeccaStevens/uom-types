import { expectType } from "tsd";

import { type DivideUnits, type MultiplyUnits } from "#uom-types";
import {
  type Hecto,
  type Ares,
  type CubicMeters,
  type Meters,
  type SquareMeters,
  type Hectares,
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

type Ares_DerivedFrom_Hecto_SquareMeters = Hecto<SquareMeters>;

expectType<Ares_DerivedFrom_Hecto_SquareMeters>(0 as Ares);
expectType<Ares>(0 as Ares_DerivedFrom_Hecto_SquareMeters);

type Hectares_DerivedFrom_Hecto_Ares = Hecto<Ares>;

expectType<Hectares_DerivedFrom_Hecto_Ares>(0 as Hectares);
expectType<Hectares>(0 as Hectares_DerivedFrom_Hecto_Ares);
