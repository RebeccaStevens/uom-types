import { expectType } from "tsd";

import { type DivideUnits } from "#uom-types";
import {
  type SquareMeters,
  type Pascals,
  type Newtons,
} from "#uom-types/units";

type Pascals_DerivedFrom_Newtons_Per_SquareMeters = DivideUnits<
  Newtons,
  SquareMeters
>;

expectType<Pascals_DerivedFrom_Newtons_Per_SquareMeters>(0 as Pascals);
expectType<Pascals>(0 as Pascals_DerivedFrom_Newtons_Per_SquareMeters);
