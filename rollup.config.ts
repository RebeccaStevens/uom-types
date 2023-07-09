import assert from "node:assert/strict";
import path from "node:path";

import rollupPluginTypescript from "@rollup/plugin-typescript";
import { glob } from "glob";
import { defineConfig, type Plugin } from "rollup";
import rollupPluginAutoExternal from "rollup-plugin-auto-external";
import rollupPluginDts from "rollup-plugin-dts";

import pkg from "./package.json" assert { type: "json" };
import tsConfigBase from "./tsconfig.base.json" assert { type: "json" };

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

    const sourceSubproject = getSubProject(relativeSource);
    const importerSubproject = getSubProject(relativeImporter);

    return sourceSubproject !== importerSubproject;
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

  plugins: [
    rollupPluginDts({
      tsconfig: "tsconfig.build.json",
    }),
  ] as Plugin[],
});

const configs = await Promise.all(
  Object.entries(pkg.exports).map(async ([subpackagePath, pkgExports]) => {
    const inputPattern = getInputPattern(subpackagePath);
    const inputFilePaths = await glob(inputPattern);
    return inputFilePaths.flatMap((input) => {
      const substitution = getStarSubstitution(inputPattern, input);
      assert(substitution !== null);

      const typesConfig = defineConfig({
        ...types,
        input,
        output: [
          {
            ...common.output,
            file: getSubstitutedPath(pkgExports.types.import, substitution),
            format: "esm",
          },
          {
            ...common.output,
            file: getSubstitutedPath(pkgExports.types.require, substitution),
            format: "cjs",
          },
        ],
      });

      if (buildTypesOnly || !("import" in pkgExports)) {
        return [typesConfig];
      }

      const runtimeConfig = defineConfig({
        ...runtimes,
        input,
        output: [
          {
            ...common.output,
            file: getSubstitutedPath(pkgExports.import, substitution),
            format: "esm",
          },
          {
            ...common.output,
            file: getSubstitutedPath(pkgExports.require, substitution),
            format: "cjs",
          },
        ],
      });

      return [runtimeConfig, typesConfig];
    });
  }),
);

export default configs.flat();

function getStarSubstitution(pattern: string, result: string): string | null {
  const patternParts = pattern.split("*");
  const p = path.normalize(
    patternParts.length === 2 ? pattern : patternParts.join("*"),
  );
  const r = path.normalize(result);

  if (p === r) {
    return "";
  }

  const pParts = p.split("*");
  if (pParts.length === 2 && r.startsWith(pParts[0]!)) {
    if (pParts[1]!.length === 0) {
      return r.slice(pParts[0]!.length);
    }
    if (r.endsWith(pParts[1]!)) {
      return r.slice(pParts[0]!.length, -pParts[1]!.length);
    }
  }

  return null;
}

function getSubstitutedPath(pattern: string, substitution: string): string {
  return pattern.replace("*", substitution);
}

const subpackageRoots = new Map(
  Object.keys(pkg.exports).map((subpackage) => {
    const inputPattern = getInputPattern(subpackage);
    const dir = path.normalize(path.dirname(inputPattern));
    return [dir, subpackage];
  }),
);

function getSubProject(filePath: string): string {
  const subpackage = [...subpackageRoots.entries()]
    .map(([root, subpackage]) => {
      const parts = root.split("*");
      if (parts.length === 1) {
        return filePath.startsWith(root) &&
          !filePath.includes("/", root.length + 1)
          ? subpackage
          : null;
      }

      if (!filePath.startsWith(parts[0]!) || !filePath.endsWith(parts[1]!)) {
        return null;
      }

      const substitutionFull =
        parts[1]!.length === 0
          ? filePath.slice(parts[0]!.length)
          : filePath.slice(parts[0]!.length, -parts[1]!.length);
      const substitutionFullSlashIndex = substitutionFull.indexOf("/");
      const substitution =
        substitutionFullSlashIndex <= 0
          ? substitutionFull
          : substitutionFull.slice(0, substitutionFullSlashIndex);
      return getSubstitutedPath(subpackage, substitution);
    })
    .find(isNotNull);

  assert(
    subpackage !== undefined,
    `can't find subpackage for file "${filePath}"`,
  );
  return subpackage;
}

function getInputPattern(subpackagePath: string) {
  const entry = `#uom-types${subpackagePath.slice(1)}`;
  const inputGlob = (
    tsConfigBase.compilerOptions.paths as Record<string, string[]>
  )[entry]?.[0];
  assert(
    inputGlob !== undefined,
    `Failed to map subpackage to entry file: "${entry}"`,
  );
  return inputGlob;
}

function isNotNull<T>(value: T | null): value is T {
  return value !== null;
}
