import rollupPluginTypescript from "@rollup/plugin-typescript";
import type { RollupOptions } from "rollup";
import rollupPluginDeassert from "rollup-plugin-deassert";
import generateDtsBundle from "rollup-plugin-dts-bundle-generator-2";
import rollupPluginNoEmit from "rollup-plugin-no-emit";
import rollupPluginTreeShakeable from "rollup-plugin-tree-shakeable";

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
      chunkFileNames: "chunks/[hash:8].mjs",
      dir: "dist",
      format: "esm",
      sourcemap: false,
      importAttributesKey: "with",
      experimentalMinChunkSize: 0,
    },
    {
      entryFileNames: "[name].cjs",
      chunkFileNames: "chunks/[hash:8].cjs",
      dir: "dist",
      format: "cjs",
      sourcemap: false,
      experimentalMinChunkSize: 0,
    },
  ],

  plugins: [
    rollupPluginTypescript({
      tsconfig: "src/tsconfig.build.json",
      outDir: "dist",
    }),
    rollupPluginDeassert({
      include: ["**/*.{js,ts}"],
    }),
    rollupPluginTreeShakeable(),
    generateDtsBundle({
      compilation: {
        preferredConfigPath: "src/tsconfig.build.json",
      },
      output: {
        exportReferencedTypes: false,
        inlineDeclareExternals: true,
      },
    }),
    rollupPluginNoEmit({
      match(_, output) {
        return output.type === "chunk" && ["types", "units"].includes(output.name);
      },
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
