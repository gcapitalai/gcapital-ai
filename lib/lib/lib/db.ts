import { createClient } from "@libsql/client";

const db = createClient({
  url: process.env.DATABASE_URL!,              // libsql://...
  authToken: process.env.DATABASE_AUTH_TOKEN,  // eyJ...
});

export default db;
