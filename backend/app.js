import express from "express";
import bodyParser from "body-parser";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";
import typeDefs from "./src/graphql/schema/index.js";
import resolvers from "./src/graphql/resolvers/index.js";
import isAuth from "./src/middleware/isAuth.js";
import expressPlayground from "graphql-playground-middleware-express";
import cors from "cors";

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(isAuth);

/* let origin;
if (process.env.NODE_ENV === "development") {
  origin = "http://localhost:8000";
}
if (process.env.NODE_ENV === "production") {
  origin = "https://competition-web-app.herokuapp.com";
} */

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: typeDefs,
    rootValue: resolvers,
  })
);
const playgound = expressPlayground.default;
app.get("/playground", playgound({ endpoint: "/graphql" }));

app.use("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@competition-web-app.sl6bp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log(`Database Connected`);
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(process.env.PORT || 4000, () =>
  console.log(`🚀 Server ready on: http://localhost:${process.env.PORT}`)
);
