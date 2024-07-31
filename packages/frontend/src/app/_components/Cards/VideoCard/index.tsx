"use client";

import { Metadata } from 'next';
import { ComponentProps } from "react";
import BackgroundVideo from "next-video/background-video";

export const metadata: Metadata = {
  title: 'next-video - Background Video',
};

export function VideoCard(props: ComponentProps<typeof BackgroundVideo> & { title: string; description: string; }) {
  const { title, description } = props;
  return (
    <div
      className="w-full flex flex-col gap-4 pt-4 pb-4 rounded-xl bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20">
      <BackgroundVideo
        {...props}
        className={`${props.className ?? ""} w-full -mt-4 rounded-t-xl overflow-hidden`}
        disableTracking
        maxResolution="720p"
      />
      <h3 className="pl-4 pr-4 text-2xl font-bold text-gray-1000 dark:text-gray-400">{title}</h3>
      <div className="pl-4 pr-4 text-lg">
        {description}
      </div>
    </div>
  );
}

