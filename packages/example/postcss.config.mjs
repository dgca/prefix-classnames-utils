import tailwindcss from "@tailwindcss/postcss";
import postcssImport from "postcss-import";
import postcssPrefixClassnames from "@type_of/postcss-prefix-classnames";

export default {
  plugins: [
    postcssImport(),
    tailwindcss(),
    postcssPrefixClassnames({
      prefix: "YEE-",
    }),
  ],
};
