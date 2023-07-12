import { expectType } from "tsd";

import { type MultiplyUnit } from "#uom-types";
import {
  type SquareMeters,
  type Micro,
  type Milli,
  type Meters,
  type Length,
  type Area,
} from "#uom-types/units";

expectType<Area>(0 as MultiplyUnit<Length, Length>);

expectType<Milli<SquareMeters>>(0 as MultiplyUnit<Meters, Milli<Meters>>);

expectType<Micro<SquareMeters>>(
  0 as MultiplyUnit<Milli<Meters>, Milli<Meters>>,
);
