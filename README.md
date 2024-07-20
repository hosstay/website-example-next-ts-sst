# website-example-next-ts-sst

Project for my own knowledge and learning purposes which showcases some functionality used in my work projects
and other functionality I want a template for.

## Technologies
Bootstrapped with [sst ion aws monorepo example](https://github.com/sst/ion/tree/dev/examples/aws-monorepo)
for the initial sst setup and structure, and [create-t3-app](https://create.t3.gg/) for the frontend.
And then heavy modifications to make it the way I wanted it.

Specifically, having SST creating/utilizing a database which could be accessed by both other SST infrastructure 
like an API and the next.js app.

- [SST Ion](https://ion.sst.dev/)
- [Drizzle](https://orm.drizzle.team/)
- [Next.js](https://nextjs.org)
- [tRPC](https://trpc.io)
- [NextAuth.js](https://next-auth.js.org)
- [Tailwind CSS](https://tailwindcss.com)

## Getting Started
- Using node version 20.14.0
- in ./ run `npm run db generate` to generate drizzle migration
- in ./ run `npm run db migrate` to migrate db
- in ./packages/frontend run `npm run dev` to start app.

- the output of the run command will give you your local url for the app
- the api url is obviously for interacting with the api manually (like browser or postman)
- the secretArn/database it gives can be used to log into the query editor in the aws console if needed.
