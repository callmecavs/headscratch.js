/*!
 * Headscratch.js 0.0.1 - 
 * Copyright (c) 2016  - https://github.com/
 * License: 
 */

var headscratch = function headscratch(fx) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref$cache = _ref.cache;
  var cache = _ref$cache === undefined ? {} : _ref$cache;
  var _ref$serialize = _ref.serialize;
  var serialize = _ref$serialize === undefined ? JSON.stringify : _ref$serialize;

  // caches for intermediate calculations
  // prevents memory leaks if memoized function is called frequently
  var parsed = void 0;
  var hit = void 0;
  var miss = void 0;

  var memoized = function memoized() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // determine cache key based on # of arguments
    args.length === 0 ? parsed = args[0] : parsed = serialize(args);

    // cache hit?
    // exit early, with cached results
    hit = cache[parsed];

    if (hit) {
      return hit;
    }

    // cache miss?
    // compute results, populate cache, return results
    miss = fx.apply(undefined, args);

    cache[parsed] = miss;

    return miss;
  };

  return memoized;
};

export default headscratch;