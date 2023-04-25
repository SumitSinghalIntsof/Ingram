import pgPromise from 'pg-promise';
const pg = pgPromise({});
export const db = pg("postgres://postgres:Shivangi1@@localhost:5432/InGram_db");