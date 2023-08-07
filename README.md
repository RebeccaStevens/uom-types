<div align="center">

# Units of Measure Types

Typesafe units with no runtime overhead.

[![npm version](https://img.shields.io/npm/v/uom-types.svg)](https://www.npmjs.com/package/uom-types)
[![CI](https://github.com/RebeccaStevens/uom-types/actions/workflows/release.yml/badge.svg)](https://github.com/RebeccaStevens/uom-types/actions/workflows/release.yml)
[![Coverage Status](https://codecov.io/gh/RebeccaStevens/uom-types/branch/main/graph/badge.svg?token=MVpR1oAbIT)](https://codecov.io/gh/RebeccaStevens/uom-types)
[![Documentation](./docs/coverage.svg)](https://RebeccaStevens.github.io/uom-types/stable/)\
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![GitHub Discussions](https://img.shields.io/github/discussions/RebeccaStevens/uom-types?style=flat-square)](https://github.com/RebeccaStevens/uom-types/discussions)
[![BSD 3 Clause license](https://img.shields.io/github/license/RebeccaStevens/uom-types.svg?style=flat-square)](https://opensource.org/licenses/BSD-3-Clause)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](https://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

</div>

## Donate

[Any donations would be much appreciated](./DONATIONS.md). 😄

### Enterprise Users

`uom-types` is available as part of the Tidelift Subscription.

Tidelift is working with the maintainers of `uom-types` and a growing network of open source maintainers to ensure your open source software supply chain meets enterprise standards now and into the future.
[Learn more.](https://tidelift.com/subscription/pkg/npm-uom-types?utm_source=npm-uom-types&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)

## Installation

```sh
# Install with npm
npm install -D uom-types

# Install with pnpm
pnpm add -D uom-types

# Install with yarn
yarn add -D uom-types
```

### Library Make Up

This library is split into several submodules.

- `uom-types`\
  Defines the core types of this library. You'll only need to use if if you are defining your own custom types.

- `uom-types/functions`\
  Defines runtime mathematical functions that are type-aware of this library's type.

- `uom-types/functions/higher-order`\
  Defines runtime higher order mathematical functions that are type-aware of this library's type.

- `uom-types/units`\
  Defines common units.\
  Note: does not currently define any imperial types.

- `uom-types/units/converters`\
  Defines runtime functions for converting between different units of the same `UnitClass`.

## Documentation

Check out [RebeccaStevens.github.io/uom-types](https://RebeccaStevens.github.io/uom-types/stable/) for the documentation.

## Inspiration

Inspired by [uom-ts](https://github.com/mindbrave/uom-ts).
