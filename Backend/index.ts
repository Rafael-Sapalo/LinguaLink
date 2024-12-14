import hono from "./src/server";

const server = Bun.serve({
    port: process.env.PORT as string,
    fetch: hono.fetch
})

console.log(`[INFO]: server is running on port ${server.port}`);