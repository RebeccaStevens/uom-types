import rollupPluginReplace from "@rollup/plugin-replace";
import rollupPluginTypescript from "@rollup/plugin-typescript";
import {
  type PreRenderedChunk,
  type RollupOptions,
  type ModuleFormat,
} from "rollup";
import rollupPluginAutoExternal from "rollup-plugin-auto-external";
import rollupPluginDts from "rollup-plugin-dts";

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

const formats = ["esm", "cjs"] as const satisfies ReadonlyArray<ModuleFormat>;

const common = {
  input: "./src/index.ts",
  output: {
    sourcemap: false,
    dir: "dist",
  },
  treeshake: {
    annotations: true,
    moduleSideEffects: [],
    propertyReadSideEffects: false,
    unknownGlobalSideEffects: false,
  },
} satisfies RollupOptions;

const runtimes = {
  ...common,

  output: formats.map((format) => {
    return {
      ...common.output,
      format,
      entryFileNames: runtimeFileNamer,
      chunkFileNames: runtimeFileNamer,
    };

    function runtimeFileNamer(info: Readonly<PreRenderedChunk>) {
      return `${info.isEntry ? "" : "_"}${info.name}.${
        format === "esm" ? "mjs" : "cjs"
      }`;
    }
  }),
  plugins: [
    rollupPluginAutoExternal(),
    rollupPluginTypescript({
      tsconfig: "tsconfig.build.json",
    }),
    rollupPluginReplace({
      "import.meta.vitest": "undefined",
    }),
  ],
} satisfies RollupOptions;

const types = {
  ...common,

  output: formats.map((format) => {
    return {
      ...common.output,
      format,
      entryFileNames: typesFileNamer,
      chunkFileNames: typesFileNamer,
    };

    function typesFileNamer(info: Readonly<PreRenderedChunk>) {
      return `${info.isEntry ? "" : "_"}${info.name}.d.${
        format === "esm" ? "mts" : "cts"
      }`;
    }
  }),
  plugins: [
    rollupPluginDts({
      tsconfig: "tsconfig.build.json",
    }),
  ],
} satisfies RollupOptions;

const configs = buildTypesOnly ? [types] : [runtimes, types];

export default configs;
