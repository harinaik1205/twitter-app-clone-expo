import express from "express";
import { ENV } from "./config/env.js";
import { conncetDB } from "./config/db.js";

const app = express();

app.get("/", (req, res) => {
  res.send("welcome, twitter-app-clone");
});

async function startServer() {
  try {
    await conncetDB();

    app.listen(ENV.PORT, () => {
      console.log(`server listening on port ${ENV.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server", error.message);
    process.exit(1);
  }
}

startServer();
