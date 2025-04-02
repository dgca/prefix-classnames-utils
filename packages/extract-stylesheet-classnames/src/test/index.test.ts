import * as path from "path";
import { extractStylesheetClassNames } from "../index";

const classNames = extractStylesheetClassNames({
  filePath: path.resolve(__dirname, "./styles.css"),
  outDir: path.resolve(__dirname, "../out"),
});

console.log(classNames);
