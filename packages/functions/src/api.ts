import { Handler } from "aws-lambda";
import { Example } from "../../core/src/example";
import { db } from "../../data/db";
import { post } from "../../data/schema.sql";
import { desc } from "drizzle-orm";
import { takeUniqueOrThrow } from "../../data/util";

// @TODO: authorize caller
export const handler: Handler = async (event) => {
  console.log("Logging from Api");
  // await db.insert(post).values({ name: "test" }).execute();
  const latestPost = await db.select()
    .from(post)
    // .where(eq(post.createdById, ctx.session.user.id))
    .orderBy(desc(post.createdAt))
    .then(takeUniqueOrThrow);
  return {
    statusCode: 200,
    body: `${Example.hello()} ${latestPost?.name ?? "no post"}`,
  };
};
