import { Resource } from "sst";
import { drizzle } from "drizzle-orm/aws-data-api/pg";
import { RDSDataClient } from "@aws-sdk/client-rds-data";

const client = new RDSDataClient({});

// using ts-ignore here because we aren't actually creating the RDS resource (using Supabase), if we were it wouldn't need them.
export const db = drizzle(client, {
  // @ts-ignore
  database: Resource.MyPostgres.database,
  // @ts-ignore
  secretArn: Resource.MyPostgres.secretArn,
  // @ts-ignore
  resourceArn: Resource.MyPostgres.clusterArn,
});