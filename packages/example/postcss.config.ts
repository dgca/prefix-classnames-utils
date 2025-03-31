import tailwindcss from "@tailwindcss/postcss";
import postcssPrefixClassnames from "@type_of/postcss-prefix-classnames";

export default {
  plugins: [
    tailwindcss(),
    postcssPrefixClassnames({
      prefix: ".cool-",
      onSuccess: (classNames) => {
        console.log(classNames);
      },
    }),
  ],
};
