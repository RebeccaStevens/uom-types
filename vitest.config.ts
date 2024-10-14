import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths()],

  test: {
    include: ["./**/*.test.ts"],
    includeSource: [
      "src/**/[!index]*.ts",
      "!src/exponents.ts",
      "!src/units/converters/prefixes.ts",
      "!src/units/modifiers/prefixes.ts",
    ],
    coverage: {
      all: true,
      include: ["src/**/*"],
      exclude: ["src/*.ts", "src/units/**/*.ts", "src/units/[!converters]*/*.ts"],
      reporter: ["lcov", "text"],
      watermarks: {
        lines: [80, 95],
        functions: [80, 95],
        branches: [80, 95],
        statements: [80, 95],
      },
    },
  },
});
