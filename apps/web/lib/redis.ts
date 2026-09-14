/**
 * Redis stub. Wire ioredis / Upstash when REDIS_URL is set.
 */
export async function getRedis() {
  if (!process.env.REDIS_URL) {
    return null;
  }
  // Placeholder — return a minimal interface for cache get/set later
  return {
    url: process.env.REDIS_URL,
    async get(_key: string) {
      return null;
    },
    async set(_key: string, _value: string, _ttl?: number) {
      return "OK";
    },
  };
}
