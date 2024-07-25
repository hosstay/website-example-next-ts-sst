// import { rds } from "./database";

export const site = new sst.aws.Nextjs("Frontend", {
  // link: [rds],
  path: "packages/frontend",
});
