import { client, pool } from "./db.connect.mjs"

export async function query (q) {
    //const client =  await pool.connect(); //pool
    await client.connect(); //client
    let res
    try {
      await client.query('BEGIN')
      try {
        res = await client.query(q)
        await client.query('COMMIT')
      } catch (err) {
        await client.query('ROLLBACK')
        throw err
      }
    } finally {
     //client.release() //pool
     client.end() //client
    }
    return res
  }

//export { query };