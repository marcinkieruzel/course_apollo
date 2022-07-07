import { pool } from "./database.js";

const resolvers = {
  Query: {
    getUsers: async (parent, { limit }) => {
      const limitString = limit ? ` LIMIT ${limit}` : "";

      const rows = await pool.query(`SELECT * FROM "users"${limitString}`);

      return rows.rows;
    },
    getUser: async (parent, { id }) => {
      const user = await pool.query(`SELECT * from "users" WHERE id = $1`, [
        id,
      ]);

      return user?.rows[0];
    },
  },
  Mutation: {
    createUser: async (parent, { input }) => {
      const rows = await pool.query(
        "INSERT INTO users(name, email) VALUES($1, $2) RETURNING id, name, email",
        [input.name, input.email]
      );

      console.log(rows.rows);

      return rows.rows[0];
    },
    updateUser: async (parent, { id, input }) => {
      const user = await pool.query(
        `UPDATE "users" set name = coalesce($1, name), email = coalesce($2, email) WHERE id = $3 RETURNING id, name, email`,
        [input.name, input.email, id]
      );

      console.log(user);

      return user.rows[0];
    },

    deleteUser: async (parent, { id }) => {
      const deleted = await pool.query(`DELETE FROM users WHERE id = $1`, [id]);

      console.log(deleted);

      if (deleted.rowCount > 0) {
        return "Usunięto";
      }

      return "Nie usunięto żadnego posta";
    },
  },
};

export default resolvers;
