import "dotenv/config";

import { serve } from "@hono/node-server";
import { Hono } from "hono";

import auth from "./auth";
const app = new Hono();

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.fetch(c.req.raw));

serve(
  {
    fetch: app.fetch,
    port: process.env.SERVER_PORT,
  },
  (_info) => {
    // console.log(process.env.DB_PORT);
    // console.log(`Server is running on http://localhost:${info.port}`);
  },
);
