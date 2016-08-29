const headscratch = fx => {
  // arguments -> result cache
  const cache = {}

  // prevent memory leaks, if memoized function is called rapidly
  let parsed
  let hit
  let miss

  // TODO: add custom serializer support
  // TODO: `this` context?

  return () => {
    // serialize arguments
    parsed = JSON.stringify(arguments)

    // cache hit -> return cached result
    hit = cache[parsed]

    if(hit) {
      return hit
    }

    // cache miss -> compute result, populate cache, return result
    // FIXME: broken for multiple arguments
    miss = fx(arguments)

    cache[parsed] = miss

    return miss
  }
}

export default headscratch
