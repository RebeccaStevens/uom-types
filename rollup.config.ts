import rollupPluginTypescript from "@rollup/plugin-typescript";
import type { RollupOptions } from "rollup";
import rollupPluginDeassert from "rollup-plugin-deassert";
import generateDtsBundle from "rollup-plugin-dts-bundle-generator-2";

import pkg from "./package.json" with { type: "json" };

type PackageJSON = typeof pkg & {
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
};

const externalDependencies = [
  ...Object.keys((pkg as PackageJSON).dependencies ?? {}),
  ...Object.keys((pkg as PackageJSON).peerDependencies ?? {}),
];

export default {
  input: {
    converters: "src/converters.ts",
    math: "src/math.ts",
    types: "src/types.ts",
    units: "src/units.ts",
    index: "src/index.ts",
  },

  output: [
    {
      entryFileNames: "[name].mjs",
      dir: "dist",
      format: "esm",
      sourcemap: false,
      importAttributesKey: "with",
    },
    {
      entryFileNames: "[name].cjs",
      dir: "dist",
      format: "cjs",
      sourcemap: false,
    },
  ],

  plugins: [
    rollupPluginTypescript({
      tsconfig: "src/tsconfig.build.json",
    }),
    rollupPluginDeassert({
      include: ["**/*.{js,ts}"],
    }),
    generateDtsBundle({
      preferredConfigPath: "src/tsconfig.build.json",
    }),
  ],

  treeshake: {
    annotations: true,
    moduleSideEffects: [],
    propertyReadSideEffects: false,
    unknownGlobalSideEffects: false,
  },

  external: (source) => {
    if (
      source.startsWith("node:") ||
      externalDependencies.some((dep) => dep === source || source.startsWith(`${dep}/`))
    ) {
      return true;
    }
    return undefined;
  },
} satisfies RollupOptions;
