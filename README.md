# expiry
An NPM package for formatting credit card expiry dates in MM/YY or MM/YYYY formats.

## Usage

Import the lib:

```js
//With ES6-style imports
import {format} from "expiry";

// With node-style requires:
var format = require("expiry").format;
```

#### format(expiry: string, customSeparator?: string, fourDigitYear?: boolean)

```js
console.log(format("12 / 3456")); // '12 / 34'
console.log(format("12 / 345"));  // '12 / 34'
console.log(format("12 / 34"));   // '12 / 34'
console.log(format("12/34"));     // '12 / 34'
console.log(format("1234"));      // '12 / 34'
console.log(format("123"));       // '12 / 3'
console.log(format("12"));        // '12'
console.log(format("1"));         // '1'
```

With a custom separator:

```js
console.log(format("12 / 345", "🍎")); // '12🍎34'
console.log(format("12 / 34", "🍎"));  // '12🍎34'
console.log(format("12/34", "🍎"));    // '12🍎34'
console.log(format("1234", "🍎"));     // '12🍎34'
console.log(format("123", "🍎"));      // '12🍎3'
console.log(format("12", "🍎"));       // '12'
console.log(format("1", "🍎"));        // '1'
```

With a 4-digit year (MM / YYYY)

```js
console.log(format("12 / 3456", "/", true)); // '12/3456'
console.log(format("12 / 345", "/", true));  // '12/345'
console.log(format("12 / 34", "/", true));   // '12/34'
console.log(format("12/34", "/", true));     // '12/34'
console.log(format("1234", "/", true));      // '12/34'
console.log(format("123", "/", true));       // '12/3'
console.log(format("12", "/", true));        // '12'
console.log(format("1", "/", true));         // '1'
```
