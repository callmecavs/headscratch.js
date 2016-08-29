/*!
 * Headscratch.js 0.0.1 - 
 * Copyright (c) 2016  - https://github.com/
 * License: 
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Headscratch = factory());
}(this, (function () { 'use strict';

var _arguments = arguments;
var headscratch = function headscratch(fx) {
  // arguments -> result cache
  var cache = {};

  // prevent memory leaks, if memoized function is called rapidly
  var parsed = void 0;
  var hit = void 0;
  var miss = void 0;

  // TODO: add custom serializer support
  // TODO: `this` context?

  return function () {
    // serialize arguments
    parsed = JSON.stringify(_arguments);

    // cache hit -> return cached result
    hit = cache[parsed];

    if (hit) {
      return hit;
    }

    // cache miss -> compute result, populate cache, return result
    miss = fx(_arguments);

    cache[parsed] = miss;

    return miss;
  };
};

return headscratch;

})));