import hono from "./src/server";

if (!process.env.PORT) {
    console.error("[BACKEND ERROR]: PORT is not defined");
    throw process.exit(1);
}

const server = Bun.serve({
    port: process.env.PORT as string,
    fetch: hono.fetch
})

console.log(`[INFO]: server is running on port ${server.port}`);