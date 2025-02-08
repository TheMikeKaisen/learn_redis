import redis from "../client.js";


async function redisStreamDemo() {
  const streamKey = "messages";

  // ❇️ 1. Add messages to the stream
  await redis.xadd(streamKey, "*", "sender", "Alice", "message", "Hello!");
  await redis.xadd(streamKey, "*", "sender", "Bob", "message", "Hi Alice!");
  console.log("XADD: Added messages to stream.");

  // ❇️ 2. Read all messages
  const messages = await redis.xrange(streamKey, "-", "+");
  console.log("XRANGE (All Messages):", messages);

  // ❇️ 3. Read new messages
  const newMessages = await redis.xread("COUNT", 2, "STREAMS", streamKey, "0");
  console.log("XREAD (New Messages):", newMessages);

  // ❇️ 4. Trim the stream
  await redis.xtrim(streamKey, "MAXLEN", 5);
  console.log("XTRIM: Stream trimmed to last 5 messages.");

  // Close Redis connection
  redis.quit();
}

// Run the function
redisStreamDemo();
