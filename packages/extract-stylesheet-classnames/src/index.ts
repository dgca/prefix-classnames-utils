import * as fs from "fs";
import * as path from "path";
import * as csstree from "css-tree";

export function extractStylesheetClassNames({
  filePath,
  outDir,
}: {
  filePath: string;
  outDir?: string;
}) {
  const classNames: string[] = [];

  const styleContent = fs.readFileSync(path.resolve(filePath), "utf-8");
  const ast = csstree.parse(styleContent);

  csstree.walk(ast, (node) => {
    if (node.type === "ClassSelector") {
      classNames.push(node.name);
    }
  });

  if (outDir) {
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(
      path.resolve(outDir, "classnames.json"),
      JSON.stringify(classNames, null, 2),
    );
  }

  console.log(classNames);

  return classNames;
}

extractStylesheetClassNames({
  filePath: path.resolve(__dirname, "./styles.css"),
  outDir: path.resolve(__dirname, "../out"),
});
