import rollupPluginReplace from "@rollup/plugin-replace";
import rollupPluginTypescript from "@rollup/plugin-typescript";
import type { RollupOptions } from "rollup";
import rollupPluginDeassert from "rollup-plugin-deassert";
import { generateDtsBundle } from "rollup-plugin-dts-bundle-generator";

import pkg from "./package.json" with { type: "json" };

type PackageJSON = typeof pkg & {
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
};

const externalDependencies = [
  ...Object.keys((pkg as PackageJSON).dependencies ?? {}),
  ...Object.keys((pkg as PackageJSON).peerDependencies ?? {}),
  "tsafe",
];

export default {
  input: "src/index.ts",

  output: [
    {
      file: pkg.exports.import,
      format: "esm",
      sourcemap: false,
      plugins: [
        generateDtsBundle({
          compilation: {
            preferredConfigPath: "tsconfig.build.types.json",
          },
          outFile: pkg.exports.types.import,
        }) as any,
      ],
    },
    {
      file: pkg.exports.require,
      format: "cjs",
      sourcemap: false,
      plugins: [
        generateDtsBundle({
          compilation: {
            preferredConfigPath: "tsconfig.build.types.json",
          },
          outFile: pkg.exports.types.require,
        }) as any,
      ],
    },
  ],

  plugins: [
    rollupPluginTypescript({
      tsconfig: "tsconfig.build.json",
    }),
    rollupPluginReplace({
      values: {
        "import.meta.vitest": "undefined",
      },
      preventAssignment: true,
    }),
    rollupPluginDeassert({
      include: ["**/*.{js,ts}"],
    }),
  ],

  treeshake: {
    annotations: true,
    moduleSideEffects: [],
    propertyReadSideEffects: false,
    unknownGlobalSideEffects: false,
  },

  external: (source) => {
    if (source.startsWith("node:") || externalDependencies.some((dep) => source.startsWith(dep))) {
      return true;
    }
    return undefined;
  },
} satisfies RollupOptions;
