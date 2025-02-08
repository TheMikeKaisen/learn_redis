

import client from "../client.js";

async function init() {
    
    // // set the message
    await client.set("msg:3", "hello, how are you?")

    // // get message
    const result = await client.get("user:2")
    console.log(result)

    // set a numerical value
    await client.set("num:1", 1000)

    // increment number by 1
    let num1 = await client.incr("num:1")
    console.log("increment by 1: ", num1)

    // increment a number by a specific value
    let num2 = await client.incrby("num:1", 100)
    console.log("increment by n: ", num2)


    // set the expiry for redis
    await client.expire("msg:3", 15)
    const result2 = await client.get("msg:3")
    console.log(result2)
}

init()