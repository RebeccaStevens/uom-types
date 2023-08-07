<div align="center">

# Units of Measure Types

Typesafe units with no runtime overhead.

[![npm version](https://img.shields.io/npm/v/uom-types.svg)](https://www.npmjs.com/package/uom-types)
[![CI](https://github.com/RebeccaStevens/uom-types/actions/workflows/release.yml/badge.svg)](https://github.com/RebeccaStevens/uom-types/actions/workflows/release.yml)
[![Coverage Status](https://codecov.io/gh/RebeccaStevens/uom-types/branch/main/graph/badge.svg?token=MVpR1oAbIT)](https://codecov.io/gh/RebeccaStevens/uom-types)\
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![GitHub Discussions](https://img.shields.io/github/discussions/RebeccaStevens/uom-types?style=flat-square)](https://github.com/RebeccaStevens/uom-types/discussions)
[![BSD 3 Clause license](https://img.shields.io/github/license/RebeccaStevens/uom-types.svg?style=flat-square)](https://opensource.org/licenses/BSD-3-Clause)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](https://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

</div>

## Donate

[Any donations would be much appreciated](./DONATIONS.md). 😄

## Installation

```sh
# Install with npm
npm install -D uom-types

# Install with pnpm
pnpm add -D uom-types

# Install with yarn
yarn add -D uom-types
```

## How it Works

The core type of this library is `Unit`.

A `Unit` is made up of two parts; a `UnitClass`, which is used to determine what a unit is of (for example, length, volume, mass etc.)
and a `UnitMeta`, which states any extra information needed (such as the unit's scale factor).

A unit without a `UnitMeta` is known as an `AbstractUnit`.\
A unit without a `UnitClass` is known as a `UnitConversionRate`.

### Library Make Up

This library is split into several submodules.

- `uom-types`\
  Defines the core types of this library. You'll only need to use if if you are defining your own custom types.

- `uom-types/functions`\
  Defines runtime mathematical functions that are type-aware of this library's type.

- `uom-types/functions/higher-order`\
  Defines runtime higher order mathematical functions that are type-aware of this library's type.

- `uom-types/units`\
  Defines common types.\
  Note: does not currently define any imperial types.

- `uom-types/units/converters`\
  Defines runtime functions for converting between different units of the same `UnitClass`.

## API Docs

Check out [RebeccaStevens.github.io/uom-types](https://RebeccaStevens.github.io/uom-types/stable/) for the API documentation.

## Usage

Example:

```ts
import { sum, mul, div } from "uom-types/functions";
import { type Metre, type Square, type Cubic, type Reciprocal } from "uom-types/units";

const width = 5 as Metre;
const height = 3 as Metre;
const length = 10 as Metre;

const areaWH = mul(width, height);
const areaLH = mul(legnth, height);
const areaWL = mul(width, legnth);
// each `area` variable will be of type `Square<Metre>`.

const surfaceArea = mul(2, sum(areaWH, areaLH, areaWL));
// `surfaceArea` will also be of type `Square<Metre>`.

const volume = mul(areaWH, length);
// `volume` will be of type `Cubic<Metre>`.

const surfaceAreaToVolumeRatio = div(surfaceArea, volume);
// `surfaceAreaToVolumeRatio` will be of type `Reciprocal<Metre>`.
```

### Generics

You can use `AbstractUnit`s as base types for generic arguments to make functions more general.

For example, here `Length` is being used as the type that has to be passed into the function `calculateSquareArea`.

```ts
import { mul } from "uom-types/functions";
import { type Metre, type Square, type Centi } from "uom-types/units";

function calculateSquareArea<L extends Length>(width: L, height: L) {
  return mul(width, height);
}

// ok
const area = calculateSquareArea(5 as Centi<Metre>, 3 as Centi<Metre>);
// `area` will be of type `Square<Centi<Metre>>` which is equivalent to `Unit<{ Metre: 2 }, { scalar10: -4 }>`.

// compile time error
const mixedUnitArea = calculateSquareArea(5 as Metre, 3 as Centi<Metre>);
```

To allow for mixing units, simply add a second generic:

```ts
import { mul } from "uom-types/functions";
import { type Metre, type Square, type Centi } from "uom-types/units";

function calculateSquareArea<W extends Length, H extends Length>(width: W, height: H) {
  return mul(width, height);
}

// ok
const area = calculateSquareArea(5 as Centi<Metre>, 3 as Centi<Metre>);
// `area` will be of type `Square<Centi<Metre>>` which is equivalent to `Unit<{ Metre: 2 }, { scalar10: -4 }>`.

// ok
const mixedUnitArea = calculateSquareArea(5 as Metre, 3 as Centi<Metre>);
// `mixedUnitArea` will be of type `AreaUnit<{ scalar10: -2 }>` which is equivalent to `Unit<{ Metre: 2 }, { scalar10: -2 }>`.
```

### Creating Units

Example of defining and using a custom `Health` unit:

```ts
import { type Unit } from "uom-types";
import { mul, sub } from "uom-types/functions";
import { type Second } from "uom-types/units";

type Health = Unit<{ HP: 1 }>;
type HealthPerSecond = Unit<{ HP: 1; Second: -1 }>

let playerHealth = 100 as Health;
const damageRate = 10 as HealthPerSecond;
const duration = 5 as Second;

playerHealth = sub(playerHealth, mul(damageRate, duration));
```

## Inspiration

Inspired by [uom-ts](https://github.com/mindbrave/uom-ts).
