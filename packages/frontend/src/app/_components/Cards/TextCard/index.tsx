"use client";

import { ComponentPropsWithoutRef } from "react";

import { BaseCard } from "../BaseCard";

export function TextCard(props: ComponentPropsWithoutRef<"div"> & { title: string; description: string; }) {
  const { title, description } = props;
  return (
    <BaseCard
      title={title}
      description={description}
      className="w-full flex flex-col gap-4 p-4 rounded-xl bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20"
    >
    </BaseCard>
  );
}

