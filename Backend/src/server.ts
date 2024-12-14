import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const hono = new Hono().basePath("/api/v1");

// Global app utils middleware
hono.use(cors());
hono.use(logger());

//TODO: Add all the routes here
// hono.route('/auth', authRouter);good 

export default hono;
