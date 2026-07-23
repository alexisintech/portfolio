import Link from "next/link";
import { Section } from "./Section";

export const Experience = () => {
  return (
    <Section title="Experience">
      <p>
        From July 2023 to July 2026, I was the Manager of the{" "}
        <Link target="_blank" href="https://clerk.com/docs">
          Clerk Docs
        </Link>
        . Building the team from the ground up to a 4-person team, I wore many
        hats: part product manager, part architect, part content engineer, and
        part evangelist, leading major documentation initiatives across 500+
        pages of content and helping evolve the systems that powered the docs.
        What you see currently in production, I've had some part in every piece
        and file.
      </p>
      <p>
        For the majority of my time at Clerk, I operated either independently
        or with one other teammate, leading the team across content strategy,
        information architecture, technical writing, execution, and team
        operations with high autonomy. I established standards and workflows
        from scratch, evolved the custom MDX-based infrastructure, including
        building reusable components and systems supporting a fully customized
        docs experience, and developed and maintained code examples,
        quickstarts, and example repositories{" "}
        <strong>
          across 20+ SDKs spanning web, mobile, and backend ecosystems —
          including Next.js, React, Tanstack, Expo, Astro, Android, iOS, Nuxt,
          and Go —
        </strong>{" "}
        rapidly learning new languages and frameworks as needed.
      </p>
      <p>
        Day-to-day work was only part of the job. I always needed at least one
        major project in progress to keep the docs propelling forward. I scoped
        out and delivered countless projects, including three IA reworks,
        multiple entire-site content audits, many rewrites of the content for entire sections of the sidebar at a time,
        and enabling nearly half of the docs content to be generated
        programmatically. And a majority of this was manual as it was before AI
        took off!
      </p>
      <p>
        My work required more than just content work — I worked deep in the
        source code, validating APIs, SDK workflows, reference material, and
        code examples end-to-end, identifying product gaps, surfacing bugs, and
        collaborating with engineering teams on improvements across the APIs and
        Clerk Dashboard.
      </p>
    </Section>
  );
};
