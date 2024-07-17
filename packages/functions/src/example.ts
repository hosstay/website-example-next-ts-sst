// import { Resource } from "sst";
import { Handler } from "aws-lambda";
import { Example } from "@website-example-next-ts-sst/core/example";

export const handler: Handler = async (event) => {
  return {
    statusCode: 200,
    // body: `${Example.hello()} Linked to ${Resource.Database.name}.`,
    body: `${Example.hello()}`,
  };
};