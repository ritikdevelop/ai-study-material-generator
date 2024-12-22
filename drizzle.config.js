import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: 'postgresql://neondb_owner:wFrGOHh9nZS2@ep-rough-block-a5ms1nqe.us-east-2.aws.neon.tech/AI-Study-Material-Generator?sslmode=require',
  }
});
