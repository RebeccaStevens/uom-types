import { expectType } from "tsd";

import { type MultiplyUnits } from "#uom-types";
import {
  type SquareMeters,
  type Micro,
  type Milli,
  type Meters,
  type Length,
  type Area,
} from "#uom-types/units";

expectType<Area>(0 as MultiplyUnits<Length, Length>);

expectType<Milli<SquareMeters>>(0 as MultiplyUnits<Meters, Milli<Meters>>);

expectType<Micro<SquareMeters>>(
  0 as MultiplyUnits<Milli<Meters>, Milli<Meters>>,
);
