import redis from "../client.js"

async function redisHashDemo() {
  const userKey = "user:1001";

  // 1. Clear existing hash
  await redis.del(userKey);
  console.log(`Hash '${userKey}' cleared.\n`);

  // 2. Set multiple fields using HSET
  await redis.hset(userKey, "name", "Alice", "age", "25", "city", "New York");
  console.log("HSET: Added 'name', 'age', 'city'");

  // 3. Get a single field
  const name = await redis.hget(userKey, "name");
  console.log("HGET 'name':", name);

  // 4. Get all fields
  const userDetails = await redis.hgetall(userKey);
  console.log("HGETALL (All Fields):", userDetails);

  // 5. Increment a numeric field
  await redis.hincrby(userKey, "age", 1);
  console.log("HINCRBY 'age':", await redis.hget(userKey, "age"));

  // 6. Check if a field exists
  const hasCity = await redis.hexists(userKey, "city");
  console.log("HEXISTS 'city'?:", hasCity ? "Yes" : "No");

  // 7. Get all field names and values
  const allKeys = await redis.hkeys(userKey);
  const allValues = await redis.hvals(userKey);
  console.log("HKEYS (Field Names):", allKeys);
  console.log("HVALS (Values):", allValues);

  // 8. Delete a field
  await redis.hdel(userKey, "city");
  console.log("HDEL 'city': Removed");

  // 9. Get final hash
  console.log("Final Hash:", await redis.hgetall(userKey));

  // Close Redis connection
  redis.quit();
}

// Run the function
redisHashDemo();
