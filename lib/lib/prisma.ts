import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.DATABASE_URL?.startsWith("libsql://")) {
  // Adaptador para Turso (libSQL)
  const { createClient } = await import("@libsql/client");
  const { PrismaLibSQL } = await import("@prisma/adapter-libsql");
  const client = createClient({
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  });
  const adapter = new PrismaLibSQL(client);
  prisma = new PrismaClient({ adapter });
} else {
  // Solo usa SQLite local si estás en desarrollo
  prisma = new PrismaClient();
}

export { prisma };
