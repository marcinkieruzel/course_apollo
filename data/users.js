import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "api",
  password: "postgres",
  port: 5432,
});

(async () => {
  try {
    const result = await pool.query(`CREATE TABLE IF NOT EXISTS "users" (
	    "id" SERIAL,
	    "name" VARCHAR(100) NOT NULL,
        "email" VARCHAR(100) NOT NULL,
	    "role" VARCHAR(15) NOT NULL,
	    PRIMARY KEY ("id")
    );`);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
})();
