import * as PostCSS from "postcss";

type FileMatcher = string | RegExp | (string | RegExp)[];

export default function postcssPrefixClassnames({
  prefix,
  includeFiles,
  excludeFiles,
  onSuccess,
}: {
  prefix: string;
  includeFiles?: FileMatcher;
  excludeFiles?: FileMatcher;
  onSuccess?: (processedClassnames: string[]) => void;
}): PostCSS.Plugin {
  return {
    postcssPlugin: "postcss-prefix-classnames",
    prepare(result) {
      const file = result.root.source?.input.file;
      const processedClassnames: string[] = [];

      return {
        Rule(rule) {
          if (!file || !shouldProcessFile({ file, includeFiles, excludeFiles }))
            return;

          rule.selectors = rule.selectors.map((selector) => {
            if (onSuccess) {
              processedClassnames.push(...extractClassnames(selector));
            }
            return prefixClasses({ selector, prefix });
          });
        },
        OnceExit() {
          if (onSuccess) {
            onSuccess(processedClassnames);
          }
        },
      };
    },
  };
}

function prefixClasses({
  selector,
  prefix,
}: {
  selector: string;
  prefix: string;
}) {
  return selector.replace(/\.([^\s])/g, `.${prefix}$1`);
}

function shouldProcessFile({
  file,
  includeFiles,
  excludeFiles,
}: {
  file: string;
  includeFiles?: FileMatcher;
  excludeFiles?: FileMatcher;
}) {
  if (!includeFiles && !excludeFiles) return true;
  if (excludeFiles && isMatch({ file, matcher: excludeFiles })) return false;
  if (includeFiles && isMatch({ file, matcher: includeFiles })) return true;
  return false;
}

function isMatch({
  file,
  matcher,
}: {
  file: string;
  matcher: FileMatcher;
}): boolean {
  if (typeof matcher === "string") return file.endsWith(matcher);
  if (matcher instanceof RegExp) return matcher.test(file);
  if (Array.isArray(matcher))
    return matcher.some((m) => isMatch({ file, matcher: m }));
  return false;
}

function extractClassnames(selector: string): string[] {
  // Split on commas for multiple selectors
  const selectorParts = selector.split(",").map((s) => s.trim());

  const classes: string[] = [];

  for (const part of selectorParts) {
    // Match class names while handling:
    // - Basic classes (.class)
    // - Pseudo-classes (.class:hover)
    // - Combinators (.class > .other, .class.another)
    // - Escaped characters (.class\.with\.dots)
    // - Escaped square brackets (.\[foo\])
    const matches = part.match(/\.(?:[^.\s#:+~>[\]]|\\.|\\\[|\\\])+/g);

    if (matches) {
      // Remove the leading dot and unescape special characters
      classes.push(...matches.map((m) => m.slice(1).replace(/\\(.)/g, "$1")));
    }
  }

  return Array.from(new Set(classes));
}
