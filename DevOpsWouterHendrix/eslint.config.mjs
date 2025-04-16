import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,cjs}"],
    
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: 2021,
      globals: {
        ...globals.node,
        ...globals.jest
      },
      parserOptions: {
        sourceType: "module"
      }
    },
    plugins: {
      js
    },
    rules: js.configs.recommended.rules,
  }
]);
