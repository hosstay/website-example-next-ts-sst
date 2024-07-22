import { Handler } from "aws-lambda";
import { Post } from "../../core/src/post";

// @TODO: authorize caller. OAuth2.0?
export const handler: Handler = async (event) => {
  console.log("Logging from Api");
  const latestPost = await Post.getLatest();
  return {
    statusCode: 200,
    body: `${latestPost?.name ?? "no post"}`,
  };
};
