# Headscratch.js

[![Headscratch.js on NPM](https://img.shields.io/npm/v/headscratch.js.svg?style=flat-square)](https://www.npmjs.com/package/headscratch.js)

Memoize a function, making it think about the arguments.

## Install

```
npm i headscratch.js --save
```

## Use

```es6
import headscratch from 'headscratch.js'

// define the function to memoize
const add1 = num => num + 1

// memoize it
const memoizedAdd1 = headscratch(add)

// call the memoized version, passing a single argument or n arguments
memoizedAdd1(1)        // LOG: 2
memoizedAdd1(1, 2)     // LOG: 2
```

## Options

Headscratch support an `options` object, passed as the the second parameter. Defaults shown below:

```es6
const memoized = headscratch(func, {
  cache = {},
  serialize = JSON.stringify
})
```

### cache

Pass a cache to start with, rather than creating an empty one.

```es6

```

### serialize

Pass a function to serialize the arguments, which is used to create the cache key.

```es6

```

## License

[MIT](https://opensource.org/licenses/MIT). © 2016 Michael Cavalea
