import rollupPluginTypescript from "@rollup/plugin-typescript";
import { defineConfig, type Plugin } from "rollup";
import rollupPluginAutoExternal from "rollup-plugin-auto-external";
import rollupPluginDts from "rollup-plugin-dts";

import pkg from "./package.json" assert { type: "json" };

/**
 * Get the intended boolean value from the given string.
 */
function getBoolean(value: unknown) {
  if (value === undefined) {
    return false;
  }
  const asNumber = Number(value);
  return Number.isNaN(asNumber)
    ? String(value).toLowerCase() === "false"
      ? false
      : Boolean(String(value))
    : Boolean(asNumber);
}

const buildTypesOnly = getBoolean(process.env["BUILD_TYPES_ONLY"]);

const common = defineConfig({
  output: {
    sourcemap: false,
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
    rollupPluginTypescript({
      tsconfig: "tsconfig.build.json",
    }),
  ],
});

const types = defineConfig({
  ...common,

  plugins: [rollupPluginDts()] as Plugin[],
});

export default Object.entries(pkg.exports).flatMap(
  ([subpackagePath, pkgExports]) => {
    const entry = `#uom-types${subpackagePath.slice(1)}`;
    const input = (pkg.imports as Record<string, string>)[entry];
    if (input === undefined) {
      throw new Error(`Failed to map export to import: "${entry}"`);
    }

    const typesConfig = {
      ...types,
      input,
      output: [
        {
          ...common.output,
          file: pkgExports.types.import,
          format: "esm",
        },
        {
          ...common.output,
          file: pkgExports.types.require,
          format: "cjs",
        },
      ],
    };

    if (buildTypesOnly || !("import" in pkgExports)) {
      return typesConfig;
    }

    const runtimeConfig = {
      ...runtimes,
      input,
      output: [
        {
          ...common.output,
          file: pkgExports.import,
          format: "esm",
        },
        {
          ...common.output,
          file: pkgExports.require,
          format: "cjs",
        },
      ],
    };

    return [runtimeConfig, typesConfig];
  },
);
