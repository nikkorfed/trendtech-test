# TrendTech Test Exercise

## Installation

```js
npm i @nikkorfed/trendtech-test
```

## Usage

```js
const transform = require("@nikkorfed/trendtech-test");

let array = [1, 2, 3, 6, 7, 9, 10, 11, 12, 13, 15, 17, 20];
let result = await transform(array);

console.log(result); // -> 1-3,6,7,9-13,15,17,20
```

## Running tests

```js
npm run test
```
