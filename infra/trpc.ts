import { awsLambdaRequestHandler} from "@trpc/server/adapters/aws-lambda";
import { trpcRouter } from "../packages/functions/src/trpc/trpc";

export type Router = typeof trpcRouter;

export const trpc = new sst.aws.Function("Trpc", {
  url: true,
  handler: awsLambdaRequestHandler({
    router: trpcRouter,
    createContext: (opts) => opts,
  }),
});