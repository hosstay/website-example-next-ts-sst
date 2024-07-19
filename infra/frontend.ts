import { api } from "./api";
// import { trpc } from "./trpc";

export const site = new sst.aws.Nextjs("Frontend", {
  link: [api, /*trpc*/],
  path: "packages/frontend",
  environment: {
    API_URL: api.url,
    // TRPC_URL: trpc.url,
  },
});
