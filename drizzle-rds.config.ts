import { Resource } from "sst";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  driver: "aws-data-api",
  dialect: "postgresql",
  // using ts-ignore here because we aren't actually creating the RDS resource (using Supabase), if we were it wouldn't need them.
  dbCredentials: {
    // @ts-ignore
    database: Resource.MyPostgres.database,
    // @ts-ignore
    secretArn: Resource.MyPostgres.secretArn,
    // @ts-ignore
    resourceArn: Resource.MyPostgres.clusterArn,
  },
  schema: ["./packages/data/*.sql.ts"],
  out: "./packages/data/migrations",
});