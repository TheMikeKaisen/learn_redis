# Redis Concepts and Implementations

This repository covers various **Redis data structures** with detailed explanations, commands, and Node.js implementations.

---

## 📖 **Table of Contents**

- [Introduction](https://www.notion.so/Redis-191d329c5ef980fdafd6deeef6235752?pvs=21)
- [Installation & Setup](https://www.notion.so/Redis-191d329c5ef980fdafd6deeef6235752?pvs=21)
- [1. Redis Lists](https://www.notion.so/Redis-191d329c5ef980fdafd6deeef6235752?pvs=21)
- [2. Redis Sets](https://www.notion.so/Redis-191d329c5ef980fdafd6deeef6235752?pvs=21)
- [3. Redis Hashes](https://www.notion.so/Redis-191d329c5ef980fdafd6deeef6235752?pvs=21)
- [4. Redis Streams](https://www.notion.so/Redis-191d329c5ef980fdafd6deeef6235752?pvs=21)
- [Contributing](https://www.notion.so/Redis-191d329c5ef980fdafd6deeef6235752?pvs=21)
- [License](https://www.notion.so/Redis-191d329c5ef980fdafd6deeef6235752?pvs=21)

---

## 📌 **Introduction**

Redis is a **high-performance, in-memory data store** widely used for **caching, messaging, session management, and real-time analytics**.

This repository demonstrates **Redis Lists, Sets, Hashes, and Streams** with:

- **CLI Commands**
- **Node.js Implementations**
- **Real-world Use Cases**

---

## ⚙️ **Installation & Setup**

### **1️⃣ Install Redis**

- **Mac (Homebrew)**
    
    ```
    brew install redis
    brew services start redis
    ```
    
    - **Ubuntu/Debian**
        
        ```
        
        sudo apt update
        sudo apt install redis-server
        sudo systemctl enable redis
        sudo systemctl start redis
        
        ```
        

### **2️⃣ Install Dependencies**

```

npm install ioredis

```

### **3️⃣ Run the Node.js Examples**

```

node lists.js
node sets.js
node hashes.js
node streams.js

```

---

## 1️⃣ **Redis Lists**

Redis **Lists** are **ordered collections** of strings, supporting **fast insertions/removals** at both ends.

### **Key Commands**

| Command | Description |
| --- | --- |
| `LPUSH key value` | Insert at the beginning (left) |
| `RPUSH key value` | Insert at the end (right) |
| `LPOP key` | Remove the first element |
| `RPOP key` | Remove the last element |
| `LRANGE key start stop` | Retrieve elements |

### **Example Usage**

```jsx

const redis = new Redis();
await redis.lpush("users", "Alice", "Bob");
const users = await redis.lrange("users", 0, -1);
console.log(users);  // [ 'Bob', 'Alice' ]

```

### **Use Cases**

✅ **Message queues**

✅ **Activity logs**

✅ **Task scheduling**

---

## 2️⃣ **Redis Sets**

Redis **Sets** store **unique, unordered elements** with fast membership checks.

### **Key Commands**

| Command | Description |
| --- | --- |
| `SADD key value` | Add elements to a set |
| `SREM key value` | Remove an element |
| `SMEMBERS key` | Get all elements |
| `SISMEMBER key value` | Check if a value exists |
| `SUNION key1 key2` | Get the union of sets |

### **Example Usage**

```jsx

await redis.sadd("tags", "Node.js", "Redis");
const tags = await redis.smembers("tags");
console.log(tags);  // [ 'Node.js', 'Redis' ]

```

### **Use Cases**

✅ **Unique user tracking**

✅ **Tagging systems**

✅ **Social media follow lists**

---

## 3️⃣ **Redis Hashes**

Redis **Hashes** store **multiple field-value pairs** in a single key.

### **Key Commands**

| Command | Description |
| --- | --- |
| `HSET key field value` | Set a field-value pair |
| `HGET key field` | Get a field value |
| `HGETALL key` | Retrieve all fields |
| `HDEL key field` | Delete a field |
| `HINCRBY key field increment` | Increment a numeric field |

### **Example Usage**

```jsx

await redis.hset("user:1001", "name", "Alice", "age", "25");
const user = await redis.hgetall("user:1001");
console.log(user);  // { name: 'Alice', age: '25' }

```

### **Use Cases**

✅ **User profiles**

✅ **Product details**

✅ **Session storage**

---

## 4️⃣ **Redis Streams**

Redis **Streams** are an **append-only log** for real-time event processing.

### **Key Commands**

| Command | Description |
| --- | --- |
| `XADD stream * field value` | Add a message to a stream |
| `XREAD COUNT N STREAMS stream last-id` | Read messages |
| `XDEL stream message-id` | Delete a message |
| `XLEN stream` | Get stream length |
| `XTRIM stream MAXLEN N` | Trim the stream |

### **Example Usage**

```jsx

await redis.xadd("logs", "*", "level", "info", "message", "Server started");
const logs = await redis.xrange("logs", "-", "+");
console.log(logs);

```

### **Use Cases**

✅ **Real-time logs**

✅ **Chat applications**

✅ **Message queues**

---

## 🤝 **Contributing**

Contributions are welcome! Please **open an issue** or **submit a pull request**.