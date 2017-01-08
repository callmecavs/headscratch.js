const headscratch = (func, {
  // default options
  cache = {},
  serialize = JSON.stringify
} = {}) => {
  // caches for intermediate calculations
  // prevents memory leaks if memoized function is called frequently
  let parsed
  let hit
  let miss

  const memoized = (...args) => {
    // determine cache key based on # of arguments
    args.length === 0
      ? parsed = args[0]
      : parsed = serialize(args)

    // cache hit?
    // exit early, with cached results
    hit = cache[parsed]

    if (hit) {
      return hit
    }

    // cache miss?
    // compute results, populate cache, return results
    miss = func.apply(undefined, args)

    cache[parsed] = miss

    return miss
  }

  return memoized
}

export default headscratch
