# website-example-next-ts-sst

Project for my own knowledge and learning purposes which showcases some functionality used in my work projects
and other functionality I want a template for.

## Technologies
Bootstrapped with [sst ion aws monorepo example](https://github.com/sst/ion/tree/dev/examples/aws-monorepo)
for the initial sst setup and structure, and [create-t3-app](https://create.t3.gg/) for the frontend.
And then heavy modifications to make it the way I wanted it.

Specifically, having SST creating/utilizing a DB w/ ORM which could be accessed by both other SST infrastructure 
like an API and the next.js app.

- [SST Ion](https://ion.sst.dev/)
- [Drizzle](https://orm.drizzle.team/)
- [Next.js](https://nextjs.org)
- [tRPC](https://trpc.io)
- [NextAuth.js](https://next-auth.js.org)
- [Tailwind CSS](https://tailwindcss.com)
- [next-video](https://next-video.dev/)

## Getting Started
- Using node version 20.14.0
- run `npm run db generate` to generate drizzle migration
- run `npm run db migrate` to migrate db
- run `npm run dev` to start app.

- the output of the run command will give you your local url for the app
- the api url is obviously for interacting with the api manually (like browser or postman)
- the secretArn/database it gives can be used to log into the query editor in the aws console if needed.
- run `npm run db:studio` to interact with the db in drizzle's nice ui.

## next-video assets
- for this I used integration with MUX, hence the environment variables
- to add new video assets:
  - put the video file in frontend/videos 
  - when you run `npm run next-video` it will automatically look for changes in the video folder and process it using MUX outputting a .json file in the same folder.
  - see the get-started/getStarted import and usage for example.
- only the json files are added to git which allow the client to access the mux videos. 

## Notes
- Frontend will throw hydration warnings because of the next-video player if you have web extensions that would alter it like "Video Speed Controller" I use on Chrome. 