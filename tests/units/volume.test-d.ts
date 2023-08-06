import { expectType } from "tsd";

import { type MultiplyUnits } from "#uom-types";
import {
  type Cubic,
  type Square,
  type Metre,
  type Litre,
  type Milli,
  type Kilo,
  type CubicCentiMetre,
} from "#uom-types/units";

type CubicMetre_DerivedFrom_Metre_Cubed = MultiplyUnits<
  MultiplyUnits<Metre, Metre>,
  Metre
>;

expectType<CubicMetre_DerivedFrom_Metre_Cubed>(0 as Cubic<Metre>);
expectType<Cubic<Metre>>(0 as CubicMetre_DerivedFrom_Metre_Cubed);

type CubicMetre_DerivedFrom_SquareMetre_By_Metre = MultiplyUnits<
  Square<Metre>,
  Metre
>;

expectType<CubicMetre_DerivedFrom_SquareMetre_By_Metre>(0 as Cubic<Metre>);
expectType<Cubic<Metre>>(0 as CubicMetre_DerivedFrom_SquareMetre_By_Metre);

type Litre_DerivedFrom_CubicMetre_Per_1000 = Milli<Cubic<Metre>>;

expectType<Litre_DerivedFrom_CubicMetre_Per_1000>(0 as Litre);
expectType<Litre>(0 as Litre_DerivedFrom_CubicMetre_Per_1000);

type CubicMetre_DerivedFrom_1000_Litre = Kilo<Litre>;

expectType<CubicMetre_DerivedFrom_1000_Litre>(0 as Cubic<Metre>);
expectType<Cubic<Metre>>(0 as CubicMetre_DerivedFrom_1000_Litre);

expectType<Milli<Litre>>(0 as CubicCentiMetre);
expectType<CubicCentiMetre>(0 as Milli<Litre>);
