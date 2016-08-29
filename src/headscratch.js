// TODO: add custom serializer support
// TODO: `this` context?
// FIXME: broken for multiple arguments

const headscratch = (fx, {
  // default options
  cache = {},
  serialize = JSON.stringify
} = {}) => {
  // caches for intermediate calculations,
  // to prevent memory leaks if memoized function is called rapidly
  let parsed
  let hit
  let miss

  const memoized = () => {
    // run serializer on arguments
    parsed = serialize(arguments)

    // cache hit
    // return cached result
    hit = cache[parsed]

    if(hit) {
      return hit
    }

    // cache miss
    // compute result, populate cache, return result
    miss = fx(arguments)

    cache[parsed] = miss

    return miss
  }

  return memoized
}

export default headscratch
