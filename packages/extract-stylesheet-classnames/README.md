# @type_of/extract-stylesheet-classnames

Utility function to extract classNames from a stylesheet.

## Installation

```bash
npm install @type_of/extract-stylesheet-classnames
```

## Usage

```typescript
import { extractStylesheetClassNames } from "@type_of/extract-stylesheet-classnames";

/**
 * Extract class names from a CSS stylesheet
 * @returns An array of class names found in the stylesheet
 */
const classNames = extractStylesheetClassNames({
  // Path to the stylesheet file
  filePath: "./styles.css",
  
  // Optional path to the output directory
  // If provided, the classNames will be written to a file in this directory
  outDir: "./test-output",
  
  // Optional name of the output file (without extension)
  // If omitted, the name of the input file will be used
  outName: "blah", // Results in blah.json
});

console.log(classNames);
```

## API Reference

### `extractStylesheetClassNames(options)`

Extracts class names from a CSS stylesheet file.

#### Parameters

- `options` (Object)
  - `filePath` (string) - Path to the stylesheet file
  - `outDir` (string, optional) - Path to the output directory. If provided, the classNames will be written to a file in this directory
  - `outName` (string, optional) - Name of the output file (without extension). If omitted, the name of the input file will be used

#### Returns

- `string[]` - An array of class names found in the stylesheet
