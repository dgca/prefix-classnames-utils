import fs from "fs";
import { resolve, basename, extname } from "path";
import csstree from "css-tree";

/**
 * Extracts class names from a CSS stylesheet file
 *
 * @param options - The options object
 * @param options.filePath - Path to the stylesheet file
 * @param options.outDir - Optional path to the output directory. If provided, the classNames will be written to a file in the output directory
 * @param options.outName - Optional name of the output file. If omitted, the name of the input file will be used
 * @returns An array of class names found in the stylesheet
 */
export function extractStylesheetClassNames({
  filePath,
  outDir,
  outName,
}: {
  filePath: string;
  outDir?: string;
  outName?: string;
}): string[] {
  const classNames: string[] = [];

  const styleContent = fs.readFileSync(resolve(filePath), "utf-8");
  const ast = csstree.parse(styleContent);

  csstree.walk(ast, (node) => {
    if (node.type === "ClassSelector") {
      classNames.push(node.name);
    }
  });

  if (outDir) {
    fs.mkdirSync(outDir, { recursive: true });
    const filename = outName ?? basename(filePath, extname(filePath));
    fs.writeFileSync(
      resolve(outDir, `${filename}.json`),
      JSON.stringify(classNames, null, 2),
    );
  }

  return classNames;
}
