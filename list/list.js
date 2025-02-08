import client from "../client.js";

// Function to demonstrate redis List operations
async function clientListDemo() {

  const listKey = "users"; // List name

  // 1. Ensure the list is empty before starting
  await client.del(listKey);
  console.log(`List '${listKey}' cleared.\n`);

  // 2. LPUSH: Add elements to the left (start of the list)
  await client.lpush(listKey, "Alice", "Bob", "Charlie");
  console.log("LPUSH: Added 'Alice', 'Bob', 'Charlie' to the left.");

  // 3. RPUSH: Add elements to the right (end of the list)
  await client.rpush(listKey, "David", "Eve");
  console.log("RPUSH: Added 'David', 'Eve' to the right.\n");

  // 4. LRANGE: Get all elements in the list
  const allUsers = await client.lrange(listKey, 0, -1);
  console.log("Current List (LRANGE 0 -1):", allUsers);

  // 5. LLEN: Get the length of the list
  const listLength = await client.llen(listKey);
  console.log("List Length (LLEN):", listLength);

  // 6. LINDEX: Get element at a specific index
  const secondUser = await client.lindex(listKey, 1);
  console.log("User at index 1 (LINDEX):", secondUser);

  // 7. LPOP: Remove from left
  const leftPop = await client.lpop(listKey);
  console.log("LPOP (removed from left):", leftPop);

  // 8. BLPOP: Blocking pop (Waits if list is empty)
  console.log("\nWaiting for BLPOP... (Add something manually in client CLI)");
  const blpopResult = await client.blpop(listKey, 10); // Blocks for 10 seconds
  console.log("BLPOP Result:", blpopResult);

  // 9. Get final list after removals
  const finalUsers = await client.lrange(listKey, 0, -1);
  console.log("\nFinal List (After Pops):", finalUsers);

  // Close client connection
  client.quit();
}

// Run the function
clientListDemo();