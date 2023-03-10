import { MongoClient } from "https://deno.land/x/mongo@v0.30.0/mod.ts";

const dbString = `mongodb://host.docker.internal:27017`;
const client = new MongoClient();
await client.connect(dbString);
const db = client.database("authentication");
export default db;
