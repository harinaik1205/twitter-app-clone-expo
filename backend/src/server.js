import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./config/env.js";
import { conncetDB } from "./config/db.js";

//routes
import userRoutes from "./routes/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("welcome, twitter-app-clone");
});

app.use("/api/users", userRoutes);

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
