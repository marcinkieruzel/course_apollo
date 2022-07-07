import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";
import bodyParser from "body-parser";
// import { pool } from "./database.js";

// (async () => {
//   try {
//     const results = await pool.query(`SELECT * FROM "users"`);

//     console.log(results.rows);


//   } catch (error) {
//     console.log(error);
//   }
// })();

const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });

  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  app.use((req, res) => {
    res.send("Hello from apollo");
  });

  app.listen(4000, function () {
    console.log("Running on port 4000");
  });
};

startServer();
