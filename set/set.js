import client from "../client.js";


async function redisSetDemo() {
  const setKey = "unique_users";

  // 1. Clear existing set
  await client.del(setKey);
  console.log(`Set '${setKey}' cleared.\n`);

  // 2. Add elements to the set
  await client.sadd(setKey, "Alice", "Bob", "Charlie");
  console.log("SADD: Added 'Alice', 'Bob', 'Charlie'");

  // 3. Try adding a duplicate
  const addDuplicate = await client.sadd(setKey, "Alice");
  console.log("SADD Duplicate 'Alice':", addDuplicate ? "Added" : "Already exists");

  // 4. Get all elements
  const allUsers = await client.smembers(setKey);
  console.log("SMEMBERS (All Users):", allUsers);

  // 5. Check if an element exists
  const isAliceMember = await client.sismember(setKey, "Alice");
  console.log("SISMEMBER 'Alice' Exists?:", isAliceMember ? "Yes" : "No");

  // 6. Get set size
  const setSize = await client.scard(setKey);
  console.log("SCARD (Set Size):", setSize);

  // 7. Get a random member
  const randomUser = await client.srandmember(setKey);
  console.log("SRANDMEMBER (Random User):", randomUser);

  // 8. Remove an element
  const removedUser = await client.srem(setKey, "Charlie");
  console.log("SREM 'Charlie' Removed?:", removedUser ? "Yes" : "No");

  // 9. Perform set operations (Union, Intersection, Difference)
  await client.sadd("admins", "Alice", "Eve");
  const unionSet = await client.sunion(setKey, "admins");
  console.log("SUNION (Users + Admins):", unionSet);

  // 10. Final Set after operations
  const finalUsers = await client.smembers(setKey);
  console.log("\nFinal Set:", finalUsers);

  // Close Redis connection
  client.quit();
}

// Run the function
redisSetDemo();
