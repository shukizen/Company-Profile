import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations" },
  datasource: {
    // The fallback allows Prisma Client generation before local DB credentials exist.
    // Database commands still need a real DATABASE_URL in .env.
    url: process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/jcp",
  },
});
