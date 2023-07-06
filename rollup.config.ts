import rollupPluginNodeResolve from "@rollup/plugin-node-resolve";
import rollupPluginTypescript from "@rollup/plugin-typescript";
import { defineConfig, type Plugin } from "rollup";
import rollupPluginAutoExternal from "rollup-plugin-auto-external";
import rollupPluginDts from "rollup-plugin-dts";

import pkg from "./package.json" assert { type: "json" };

const entries = [
  ["src/base/index.ts", pkg.exports["."]],
  ["src/functions/index.ts", pkg.exports["./functions"]],
  ["src/functions-ho/index.ts", pkg.exports["./functions/higher-order"]],
  ["src/si-units/index.ts", pkg.exports["./si-units"]],
  ["src/si-units/converters/index.ts", pkg.exports["./si-units/converters"]],
] as const;

const common = defineConfig({
  output: {
    sourcemap: false,
  },

  external: [],

  treeshake: {
    annotations: true,
    moduleSideEffects: [],
    propertyReadSideEffects: false,
    unknownGlobalSideEffects: false,
  },
});

const runtimes = defineConfig({
  ...common,

  plugins: [
    rollupPluginAutoExternal(),
    rollupPluginNodeResolve(),
    rollupPluginTypescript({
      tsconfig: "tsconfig.build.json",
    }),
  ],
});

const types = defineConfig({
  ...common,

  plugins: [
    rollupPluginTypescript({
      tsconfig: "tsconfig.build.json",
    }),
    rollupPluginDts(),
  ] as Plugin[],
});

export default entries
  .flatMap(([entry, output]) => [
    "import" in output
      ? {
          ...runtimes,
          input: entry,
          output: [
            {
              file: output.import,
              format: "esm",
              sourcemap: false,
            },
            {
              file: output.require,
              format: "cjs",
              sourcemap: false,
            },
          ],
        }
      : null,
    {
      ...types,
      input: entry,
      output: [
        {
          file: output.types.import,
          format: "esm",
          sourcemap: false,
        },
        {
          file: output.types.require,
          format: "cjs",
          sourcemap: false,
        },
      ],
    },
  ])
  .filter((v) => v !== null);
