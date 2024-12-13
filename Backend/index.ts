import hono from "./src/server";

Bun.serve({
    port: process.env.PORT as string,
    fetch: hono.fetch
})
