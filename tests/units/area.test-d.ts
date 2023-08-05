import { expectType } from "tsd";

import { type DivideUnits, type MultiplyUnits } from "#uom-types";
import {
  type Hecto,
  type Are,
  type CubicMetre,
  type Metre,
  type SquareMetre,
  type Hectare,
} from "#uom-types/units";

type SquareMetre_DerivedFrom_Metre_Squared = MultiplyUnits<Metre, Metre>;

expectType<SquareMetre_DerivedFrom_Metre_Squared>(0 as SquareMetre);
expectType<SquareMetre>(0 as SquareMetre_DerivedFrom_Metre_Squared);

type SquareMetre_DerivedFrom_CubicMetre_Per_Squared = DivideUnits<
  CubicMetre,
  Metre
>;

expectType<SquareMetre_DerivedFrom_CubicMetre_Per_Squared>(0 as SquareMetre);
expectType<SquareMetre>(0 as SquareMetre_DerivedFrom_CubicMetre_Per_Squared);

type Ares_DerivedFrom_Hecto_SquareMetre = Hecto<SquareMetre>;

expectType<Ares_DerivedFrom_Hecto_SquareMetre>(0 as Are);
expectType<Are>(0 as Ares_DerivedFrom_Hecto_SquareMetre);

type Hectares_DerivedFrom_Hecto_Ares = Hecto<Are>;

expectType<Hectares_DerivedFrom_Hecto_Ares>(0 as Hectare);
expectType<Hectare>(0 as Hectares_DerivedFrom_Hecto_Ares);
