import { z } from "zod";
import {
  APIGatewayEvent,
  CreateAWSLambdaContextOptions
} from "@trpc/server/adapters/aws-lambda";
import { initTRPC } from "@trpc/server";

const t = initTRPC
  .context<CreateAWSLambdaContextOptions<APIGatewayEvent>>()
  .create();

export const trpcRouter = t.router({
  hello: t.procedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      console.log("in backend");
      return `Hello ${input.name}!`;
    }),
});