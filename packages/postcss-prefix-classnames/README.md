# @type_of/postcss-prefix-classnames

PostCSS plugin to prefix CSS class names with a custom prefix.

## Installation

```bash
npm install @type_of/postcss-prefix-classnames
```

## Usage

```js
// postcss.config.js
import { postcssPrefixClassNames } from "@type_of/postcss-prefix-classnames";

/**
 * @type {import('postcss').Config}
 */
export default {
  plugins: [
    postcssPrefixClassNames({
      /** The prefix to add to all class names */
      prefix: "example-",
      
      /**
       * Files to include in processing. Can be a string, RegExp, or array of either.
       * If not provided, all files are processed.
       */
      includeFiles?: string | RegExp | (string | RegExp)[],
      
      /**
       * Files to exclude from processing. Can be a string, RegExp, or array of either.
       * Excluded files take precedence over included files.
       */
      excludeFiles?: string | RegExp | (string | RegExp)[],
    }),
  ],
};
```

## Examples

### Basic Usage

```css
/* Before */
.button {
  color: blue;
}

/* After */
.example-button {
  color: blue;
}
```

### With Multiple Classes

```css
/* Before */
.button.primary.large {
  padding: 1rem;
}

/* After */
.example-button.example-primary.example-large {
  padding: 1rem;
}
```

### With File Filtering

```js
// postcss.config.js
export default {
  plugins: [
    postcssPrefixClassNames({
      prefix: "example-",
      // Only process files ending with .component.css
      includeFiles: ".component.css",
      // Exclude files containing 'vendor' in their path
      excludeFiles: /vendor/,
    }),
  ],
};
```
