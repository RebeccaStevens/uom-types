import { expectType } from "tsd";

import { type DivideUnits } from "#uom-types";
import {
  type Metre,
  type Square,
  type Pascal,
  type Newton,
} from "#uom-types/units";

type Pascal_DerivedFrom_Newton_Per_SquareMetre = DivideUnits<
  Newton,
  Square<Metre>
>;

expectType<Pascal_DerivedFrom_Newton_Per_SquareMetre>(0 as Pascal);
expectType<Pascal>(0 as Pascal_DerivedFrom_Newton_Per_SquareMetre);
