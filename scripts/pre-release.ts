import childProcess from "node:child_process";
import fs from "node:fs/promises";
import util from "node:util";

import pkg from "../package.json" assert { type: "json" };

const exec = util.promisify(childProcess.exec);

if (
  process.env["CI"] === undefined ||
  process.env["CI"] === "" ||
  process.env["CI"] === "0"
) {
  throw new Error("Not in CI Environment");
}

const releasePkg = Object.fromEntries(
  Object.entries(pkg).map(([key, value]): [string, unknown] => {
    if (key === "exports") {
      return [
        key,
        Object.fromEntries(
          Object.entries(value).map(
            ([exportsKey, exportsValue]): [string, unknown] => {
              const { default: _, ...updatedExportsValue } = exportsValue;
              return [exportsKey, updatedExportsValue];
            },
          ),
        ),
      ];
    }

    return [key, value];
  }),
);

await fs.writeFile("./package.json", JSON.stringify(releasePkg, undefined, 2), {
  encoding: "utf8",
});

await exec("git add package.json");
await exec('git commit -m "build: package.json"');
