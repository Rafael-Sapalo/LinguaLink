import { Hono } from "hono";

const hono = new Hono().basePath("/api/v1");

hono.get("/hello", async (ctx) => {
    return ctx.json({ message: "Hello, World!" });
})

//TODO: Add all the routes here

export default hono;
