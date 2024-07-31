import { TextCard } from "./_components/Cards/TextCard";
import { LinkCard } from "./_components/Cards/LinkCard";
import { VideoCard } from "./_components/Cards/VideoCard";
import { ImageCard } from "./_components/Cards/ImageCard";

import getStarted from "/videos/get-started.mp4?thumbnailTime=0";

export default async function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-center tracking-tight bg-gradient-to-b from-[#ffffff] to-[#adadad] dark:bg-gradient-to-b dark:from-[#000000] dark:to-[#2b2b2b]">
      <div className="w-full container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold text-center text-gray-1000 dark:text-gray-400 sm:text-[5rem]">
          Responsive Example App
        </h1>
        <div className="w-full grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <VideoCard
            src={getStarted}
            title="Video Card"
            description="A video card component that can be used to display a video and some description."
          />
          <ImageCard
            src="/images/keanu-reeves.png"
            width={1280}
            height={720}
            alt={"Keanu Reeves"}
            title="Image Card"
            description="A simple card component that can be used to display an image"
          />
          <LinkCard
            title="Link Text Card →"
            description="A simple card component that can be used to display text and link to a page" href="#" target="_blank"
          />
          <TextCard
            title="Text Card"
            description="A simple card component that can be used to display text"
          />
        </div>
      </div>
    </main>
  );
}
