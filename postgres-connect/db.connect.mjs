import pg from "pg";
import { dbConfig } from "./config/db.mjs";

const pool = new pg.Pool(dbConfig);
const client = new pg.Client(dbConfig);

export { pool, client }
