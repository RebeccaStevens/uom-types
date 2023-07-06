import assert from "node:assert/strict";
import path from "node:path";

import rollupPluginNodeResolve from "@rollup/plugin-node-resolve";
import rollupPluginTypescript from "@rollup/plugin-typescript";
import { defineConfig, type Plugin } from "rollup";
import rollupPluginAutoExternal from "rollup-plugin-auto-external";
import rollupPluginDts from "rollup-plugin-dts";

import pkg from "./package.json" assert { type: "json" };

const common = defineConfig({
  output: {
    sourcemap: false,
  },

  external: (
    source: string,
    importer: string | undefined,
    isResolved: boolean,
  ) => {
    if (!isResolved || importer === undefined) {
      return null;
    }

    assert(path.isAbsolute(source));
    const relativeSource = path.relative(process.cwd(), source);
    const relativeImporter = path.relative(process.cwd(), importer);

    if (!relativeSource.startsWith("src/")) {
      return null;
    }

    const sourceSubproject = relativeSource.slice(
      4,
      Math.max(0, relativeSource.indexOf("/", 4)),
    );
    const importerSubproject = relativeImporter.slice(
      4,
      Math.max(0, relativeImporter.indexOf("/", 4)),
    );

    return sourceSubproject !== importerSubproject;
  },

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

export default Object.values(pkg.exports)
  .flatMap((pkgExports) => [
    "import" in pkgExports
      ? {
          ...runtimes,
          input: pkgExports.default,
          output: [
            {
              file: pkgExports.import,
              format: "esm",
              sourcemap: false,
            },
            {
              file: pkgExports.require,
              format: "cjs",
              sourcemap: false,
            },
          ],
        }
      : null,
    {
      ...types,
      input: pkgExports.default,
      output: [
        {
          file: pkgExports.types.import,
          format: "esm",
          sourcemap: false,
        },
        {
          file: pkgExports.types.require,
          format: "cjs",
          sourcemap: false,
        },
      ],
    },
  ])
  .filter((v) => v !== null);
