import { api } from "./api";

export const web = new sst.aws.Nextjs("Frontend", {
  path: "packages/frontend",
  build: {
    output: "dist",
    command: "npm run build",
  },
  environment: {
    API_URL: api.url,
  },
});