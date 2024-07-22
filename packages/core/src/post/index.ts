import { db } from "../../../data/db";
import { post } from "../../../data/schema.sql";
import { desc, eq } from "drizzle-orm";
import { takeUniqueOrThrow } from "../../../data/util";
import { PostRecord, PostRecordCreate } from "../../../data/interfaces/post";

export module Post {
  export async function getLatest(userId?: string): Promise<PostRecord> {
    return await db.select()
      .from(post)
      .where(userId ? eq(post.createdById, userId) : undefined) // @TODO: conditional until api auths caller.
      .orderBy(desc(post.createdAt))
      .limit(1)
      .then(takeUniqueOrThrow);
  }

  export async function create(payload: PostRecordCreate): Promise<void> {
    await db.insert(post).values(payload);
  }
}
