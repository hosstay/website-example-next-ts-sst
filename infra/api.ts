// import { database } from "./database";

export const api = new sst.aws.Function("Api", {
  url: true,
  // link: [database],
  handler: "./packages/functions/src/example.handler",
});