"use client";

import Link from "next/link";

import HexagonIcon from "./icons/hexagon-icon";
import GithubIcon from "./icons/github-icon";
import LinkedinIcon from "./icons/linkedin-icon";
import ResumeIcon from "./icons/resume-icon";
import ProjectsIcon from "./icons/projects-icon";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  return (
    <section>
      <nav className="mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0">
        <div className="flex flex-row px-4 py-4 m:px-6 m:py-6 justify-between lg:px-10 lg:py-4 xl:px-20">
          <HexagonIcon className="w-8 h-8 lg:w-11 lg:h-11" />
          <div className="mt-0 flex flex-row lg:mt-0 lg:space-x-1 lg:space-y-0">
            <Link href={"#"}>
              <ProjectsIcon className="w-8 h-8 lg:w-11 lg:h-11"/>
            </Link>
            <Link href={"#"}>
              <ResumeIcon className="w-8 h-8 lg:w-11 lg:h-11"/>
            </Link>
            <a href={"https://www.linkedin.com/in/hosstay/"} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-8 h-8 lg:w-11 lg:h-11"/>
            </a>
            <a href={"https://www.github.com/hosstay/"} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="w-8 h-8 lg:w-11 lg:h-11"/>
            </a>
            <ThemeSwitcher/>
          </div>
        </div>
      </nav>
    </section>
  );
}

