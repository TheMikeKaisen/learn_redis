
// this is the library used to create a redis client in node js
import { Redis } from "ioredis";

const Client = new Redis(); // hits the default port 6379

export default Client