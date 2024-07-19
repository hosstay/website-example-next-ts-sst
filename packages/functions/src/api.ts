import { Resource } from "sst";
import { Handler } from "aws-lambda";
import { Example } from "../../core/src/example";

export const handler: Handler = async (event) => {
  return {
    statusCode: 200,
    body: `${Example.hello()}`,
  };
};
