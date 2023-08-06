import { expectType } from "tsd";

import { type DivideUnits } from "#uom-types";
import {
  type Metre,
  type Square,
  type Watt,
  type WattPerSquareMetre,
} from "#uom-types/units";

type WattPerSquareMetre_DerivedFrom_Joule_Per_Second = DivideUnits<
  Watt,
  Square<Metre>
>;

expectType<WattPerSquareMetre_DerivedFrom_Joule_Per_Second>(
  0 as WattPerSquareMetre,
);
expectType<WattPerSquareMetre>(
  0 as WattPerSquareMetre_DerivedFrom_Joule_Per_Second,
);
