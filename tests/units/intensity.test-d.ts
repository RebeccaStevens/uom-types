import { expectType } from "tsd";

import { type DivideUnits } from "#uom-types";
import {
  type Watt,
  type WattPerSquareMetre,
  type SquareMetre,
} from "#uom-types/units";

type WattPerSquareMetre_DerivedFrom_Joule_Per_Second = DivideUnits<
  Watt,
  SquareMetre
>;

expectType<WattPerSquareMetre_DerivedFrom_Joule_Per_Second>(
  0 as WattPerSquareMetre,
);
expectType<WattPerSquareMetre>(
  0 as WattPerSquareMetre_DerivedFrom_Joule_Per_Second,
);
