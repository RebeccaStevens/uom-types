import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";

import pkg from "../package.json" assert { type: "json" };
import tsConfigBase from "../tsconfig.base.json" assert { type: "json" };

const filePathToReplacement = new Map(
  Object.entries(pkg.exports).map(([subpackagePath, pkgExports]) => {
    const entry = `#uom-types${subpackagePath.slice(1)}`;
    const input = (
      tsConfigBase.compilerOptions.paths as Record<string, string[]>
    )[entry]?.[0];
    if (input === undefined) {
      throw new Error(`Failed to map export to import: "${entry}"`);
    }
    const absInput = path.join(process.cwd(), input);

    return Object.entries(pkgExports.types)
      .map(([style, value]): [string, string, string] => {
        return [absInput, style, value.replace(/\.d\.(c|m)ts$/u, ".$1js")];
      })
      .reduce(
        (entry, [absInput, style, relInput]) => {
          /* eslint-disable functional/immutable-data */
          if (entry[0] === undefined) {
            assert(entry[1] === undefined);
            entry[0] = absInput;
            entry[1] = {};
          }
          assert(entry[0] === absInput);
          const importMap = entry[1];
          assert(importMap !== undefined);
          importMap[style] = relInput;

          return entry as [string, Record<string, string>];
          /* eslint-enable functional/immutable-data */
        },
        [undefined, undefined] as [
          string | undefined,
          Record<string, string> | undefined,
        ],
      ) as [string, Record<string, string>];
  }),
);

const filePaths = Object.values(pkg.exports).flatMap((pkgExports) => {
  const { types, ...runtimes } = pkgExports;

  return [...Object.values(types), ...Object.values(runtimes)] as const;
});

/* eslint-disable no-await-in-loop */
for (const filePath of filePaths) {
  const ext = path.extname(filePath);
  const importStyle = getImportStyle(ext);
  const fileContent = await fs
    .readFile(filePath, { encoding: "utf8" })
    .catch(() => null);
  if (fileContent === null) {
    continue;
  }
  const updatedFileContent = [...filePathToReplacement.entries()].reduce(
    (content, [toReplace, importOptions]) => {
      const relFilePath = importOptions[importStyle];
      assert(relFilePath !== undefined);
      const replacement = `./${path.relative("./dist", relFilePath)}`;
      return content.replaceAll(toReplace, replacement);
    },
    fileContent,
  );
  await fs.writeFile(filePath, updatedFileContent, {
    encoding: "utf8",
  });
}
/* eslint-enable no-await-in-loop */

function getImportStyle(ext: string) {
  return ext === ".cjs" || ext === ".cts" ? "require" : "import";
}
