"use client";

import { ComponentProps } from "react";
import Link from "next/link";

import { BaseCard } from "../BaseCard";

export function LinkCard(props: ComponentProps<typeof Link> & { title: string; description: string; }) {
  const { title, description } = props;
  return (
    <Link {...props} className="w-full rounded-xl bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20">
      <BaseCard title={title} description={description} className={"w-full flex flex-col gap-4 p-4"}/>
    </Link>
  );
}
