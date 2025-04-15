# @type_of/babel-prefix-react-classnames

Babel plugin to prefix React classNames with a custom prefix.

Handles both string literals and utility function calls.

## Installation

```bash
npm install @type_of/babel-prefix-react-classnames
```

## Usage

```js
// babel.config.js
import { babelPrefixReactClassNames } from "@type_of/babel-prefix-react-classnames";

/**
 * @type {import('@babel/core').ConfigFunction}
 */
export default {
  plugins: [
    babelPrefixReactClassNames({
      /** The prefix to add to all className strings */
      prefix: "example-",
      
      /**
       * The name of your className utility function (e.g., 'cn', 'clsx', 'classnames')
       * Set to false if you don't use a utility function
       * @default "cn"
       */
      cnUtil: "cn",
    }),
  ],
};
```

## Examples

### String Literals

```jsx
// Before
<div className="flex items-center">...</div>

// After
<div className="example-flex example-items-center">...</div>
```

### Utility Function Calls

```jsx
// Before
<div className={cn("flex", "items-center")}>...</div>

// After
<div className={cn("example-flex", "example-items-center")}>...</div>
```
