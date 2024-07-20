import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "website-example-next-ts-sst/server/api/trpc";
import { post } from "../../../../../data/schema.sql";
import { desc, eq } from "drizzle-orm";
import { takeUniqueOrThrow } from "../../../../../data/util";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.insert(post).values({ name: input.name, createdById: ctx.session.user.id });
    }),

  getLatest: protectedProcedure.query(({ ctx }) => {
    console.log(`Logging from "server" trpc lambda from "frontend" package`);
    return ctx.db.select()
      .from(post)
      .where(eq(post.createdById, ctx.session.user.id))
      .orderBy(desc(post.createdAt))
      .then(takeUniqueOrThrow);
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
