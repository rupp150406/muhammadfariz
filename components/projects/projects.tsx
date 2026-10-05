import {
  ArrowRight,
  HeartHandshake,
  MessageCircleQuestion,
  Smartphone,
  Tv,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  url?: string; // leave "" until the link is ready
  imageRatio?: number;
  image?: string;
  imageAlt?: string;
};

const PROJECTS: Project[] = [
  {
    id: "blogin",
    icon: Smartphone,
    iconLabel: "Blogin",
    title:
      "A mobile blogging application utilizing local data storage for a seamless reading and writing experience.",
    description:
      "Developed a dedicated mobile application built entirely with Flutter and Hive for fast, responsive local data persistence.",
    meta: "Mobile Developer, 2025",
    url: "",
    imageRatio: 16 / 10,
    image: "https://chwjmwuqdbcmgnascxfg.supabase.co/storage/v1/object/sign/just%20me/blogin.webp?token=eyJraWQiOiIwOGQ0ZmUxMi1lYmVhLTQwMTUtODg1NS1hMjQ1NjEyYjU5NzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJqdXN0IG1lL2Jsb2dpbi53ZWJwIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MTIxOTA5MSwiZXhwIjoyNDIxOTM5MDkxfQ.1VNldb9fr5bDaBhAl0-IEC5IVUMwOhC3ybvIrpuNXdE",
    imageAlt: "Blogin mobile application",
  },
  {
    id: "monitoring-qurban",
    icon: Tv,
    iconLabel: "Monitoring Qurban",
    title:
      "A real-time digital ecosystem for tracking Qurban activities, featuring public TV monitors and a field PWA.",
    description:
      "Engineered a robust system for AhsanTV using Supabase. It includes an admin dashboard, a QR-scan-based PWA for field teams to track animal arrivals and slaughtering, and real-time syncing with offline local storage support.",
    meta: "Full-Stack Developer, 2026",
    url: "https://monitoring-two-delta.vercel.app/",
    imageRatio: 16 / 10,
    image: "https://chwjmwuqdbcmgnascxfg.supabase.co/storage/v1/object/sign/just%20me/monitoring.webp?token=eyJraWQiOiIwOGQ0ZmUxMi1lYmVhLTQwMTUtODg1NS1hMjQ1NjEyYjU5NzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJqdXN0IG1lL21vbml0b3Jpbmcud2VicCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTEyMjA0MTUsImV4cCI6MjQyMTk0MDQxNX0.5RZhZo2_RImFc1G9TnucpmbChIjt6LuvY9Azz1x5AJU",
    imageAlt: "Monitoring Qurban digital ecosystem",
  },
  {
    id: "tanya-ustadz",
    icon: MessageCircleQuestion,
    iconLabel: "Tanya Ustadz",
    title:
      "A privacy-focused, real-time Islamic Q&A platform operating without personal data collection.",
    description:
      "Designed and developed solo using Nuxt and Supabase. The platform relies on browser fingerprinting to ensure an anonymous, safe discussion environment while maintaining a clean, responsive UI.",
    meta: "Solo Developer, 2026",
    url: "https://tanya-ustadz-nine.vercel.app/",
    imageRatio: 16 / 10,
    image: "https://chwjmwuqdbcmgnascxfg.supabase.co/storage/v1/object/sign/just%20me/tanyaustadz.webp?token=eyJraWQiOiIwOGQ0ZmUxMi1lYmVhLTQwMTUtODg1NS1hMjQ1NjEyYjU5NzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJqdXN0IG1lL3RhbnlhdXN0YWR6LndlYnAiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkxMjQzODkzLCJleHAiOjI0MjE5NjM4OTN9.5kuvGevLwVBMFD6TfCBwRZA6E6EwQAlf8O9WJl0ajwY",
    imageAlt: "Tanya Ustadz Q&A platform",
  },
  {
    id: "ahsantv-peduli",
    icon: HeartHandshake,
    iconLabel: "AhsanTV Peduli",
    title:
      "A dynamic company profile and donation reporting platform for a religious broadcasting network.",
    description:
      "Built and deployed on Vercel, this platform features real-time donation reports, live streaming banners, weekly broadcast management via Supabase, and interactive web quizzes.",
    meta: "Sole IT Staff & Web Developer",
    url: "https://ahsan-tv-peduli.vercel.app/",
    imageRatio: 16 / 10,
    image: "https://chwjmwuqdbcmgnascxfg.supabase.co/storage/v1/object/sign/just%20me/ahsantv.webp?token=eyJraWQiOiIwOGQ0ZmUxMi1lYmVhLTQwMTUtODg1NS1hMjQ1NjEyYjU5NzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJqdXN0IG1lL2Foc2FudHYud2VicCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTEyMjA2NTQsImV4cCI6MjQyMTk0MDY1NH0.4gMyF5g7wT0_vq1T52YYJbAZa4sgatnSAmCsruGydw0",
    imageAlt: "AhsanTV Peduli platform",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items =
    viewMoreVisible && PROJECTS.length > 4 ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              From playful experiments to thoughtful systems, a look at the
              work I&rsquo;m proud to have shipped.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible && PROJECTS.length > 4 ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  const url = project.url?.trim();
  const isExternal = !!url && /^https?:\/\//i.test(url);

  const card = (
    <article
      className={`project-card flex flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5 ${
        url ? "cursor-pointer" : ""
      }`}
    >
      <header className="flex items-center gap-2.5 px-1 pt-2">
        <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
          <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
        </span>
        <span className="text-sm font-medium tracking-tight text-foreground">
          {project.iconLabel}
        </span>
      </header>

      <div
        className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
        style={{ aspectRatio: project.imageRatio ?? 16 / 10 }}
      >
        {project.image ? (
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt ?? project.title}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        ) : (
          <div className="h-full w-full bg-foreground/[0.03] transition-colors duration-300" />
        )}
      </div>

      <div className="flex flex-col gap-2.5 px-1 pb-1">
        <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
          {project.title}
        </h3>
        <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
          {project.description}
        </p>
      </div>

      <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
        {project.meta}
      </p>
    </article>
  );

  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      {url ? (
        isExternal ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.iconLabel}`}
            className="focus-ring block rounded-3xl"
          >
            {card}
          </a>
        ) : (
          <Link
            href={url}
            aria-label={`Open ${project.iconLabel}`}
            className="focus-ring block rounded-3xl"
          >
            {card}
          </Link>
        )
      ) : (
        card
      )}
    </FadeIn>
  );
}