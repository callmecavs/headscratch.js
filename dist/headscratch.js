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
// TODO: add custom serializer support
// TODO: `this` context?
// FIXME: broken for multiple arguments

var headscratch = function headscratch(fx) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref$cache = _ref.cache;
  var cache = _ref$cache === undefined ? {} : _ref$cache;
  var _ref$serialize = _ref.serialize;
  var serialize = _ref$serialize === undefined ? JSON.stringify : _ref$serialize;

  // caches for intermediate calculations,
  // to prevent memory leaks if memoized function is called rapidly
  var parsed = void 0;
  var hit = void 0;
  var miss = void 0;

  var memoized = function memoized() {
    // run serializer on arguments
    parsed = serialize(_arguments);

    // cache hit
    // return cached result
    hit = cache[parsed];

    if (hit) {
      return hit;
    }

    // cache miss
    // compute result, populate cache, return result
    miss = fx(_arguments);

    cache[parsed] = miss;

    return miss;
  };

  return memoized;
};

return headscratch;

})));