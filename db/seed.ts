import "@/db/envConfig";
import { Client } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import data from "@/lib/data/data";

const main = async () => {
  try {
    const client = new Client({ connectionString: process.env.POSTGRES_URL });
    await client.connect();
    const db = drizzle(client);
    await db.delete(schema.products);
    await db.delete(schema.users);

    const resProducts = await db
      .insert(schema.products)
      .values(data.products)
      .returning();

    const resUsers = await db
      .insert(schema.users)
      .values(data.users)
      .returning();

    console.log(resProducts);
    console.log(resUsers);

    await client.end();
  } catch (e) {
    console.log(e);
    throw new Error("Failed to seed database");
  }
};

main();
