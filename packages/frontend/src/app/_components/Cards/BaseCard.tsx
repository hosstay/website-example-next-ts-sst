"use client";

import { ComponentPropsWithoutRef } from "react";

export function BaseCard(props: ComponentPropsWithoutRef<"div"> & { title: string; description: string; }) {
  const { title, description } = props;
  return (
    <div {...props}>
      <h3 className="text-2xl font-bold text-gray-1000 dark:text-gray-400">{title}</h3>
      <div className="text-lg">
        {description}
      </div>
    </div>
  );
}

