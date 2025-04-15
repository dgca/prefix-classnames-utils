import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { extractStylesheetClassNames } from "../index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const classNames = extractStylesheetClassNames({
  filePath: resolve(__dirname, "./styles.css"),
  outDir: resolve(__dirname, "../../test-output"),
});

console.log(classNames);
