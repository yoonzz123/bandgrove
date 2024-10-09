import 'dotenv/config';
import db from "pg";
import {queryCvt} from './queryConverter.js'
const { Pool, Client } = db;

const env = process.env;

const pool = new Pool({
  host: env.DB_PG_HOST || 'development',
  user: env.DB_PG_USER,
  password: env.DB_PG_PASSWORD,
  database: env.DB_PG_DATABASE,
  port: env.DB_PG_PORT,
  connectionTimeoutMillis: 30000,
  max: 5,
});

const connect = async () => {

  const poolClient = await pool.connect()
  await poolClient.query('BEGIN')
  return poolClient;
}

// 단순 셀렉트일 경우 트렌젝션 사용 X
const select = async (query, param) => {
  console.log("select~~~~~")
  return await pool.query(queryCvt(query, param));
}

const query = async (query, param, poolClient) => {
  console.log("query~~~~~")
  return await poolClient.query(queryCvt(query, param));
}

const commit = async (poolClient) => {
  await poolClient.query("COMMIT");
  poolClient.release();
}

const rollback = async (poolClient) => {
  await poolClient.query("ROLLBACK");
  poolClient.release();
}


export const pg = {
  select,
  query,
  connect,
  commit,
  rollback
}