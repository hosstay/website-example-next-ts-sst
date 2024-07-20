import { rds } from "./database";

export const api = new sst.aws.Function("Api", {
  url: true,
  link: [rds],
  handler: "./packages/functions/src/api.handler",
  environment: {
    foo: "9",
  },
});
