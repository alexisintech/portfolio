"use client";

import { useState } from "react";
import { Project } from "./Project";
import { IProject } from "../types/globals";

export const Projects = () => {
  const [active, setActive] = useState({
    personal: true,
    crossfunctional: false,
  });

  const handleClick = () => {
    setActive((prev) => ({
      personal: !prev.personal,
      crossfunctional: !prev.crossfunctional,
    }));
  };

  return (
    <main className="py-48 w-full">
      <div className="container flex flex-col gap-12 md:gap-14 md:px-32">
        <div className="flex gap-5 self-center">
          <h4
            onClick={handleClick}
            className={`font-mont uppercase italic hover:cursor-pointer ${
              !active.personal && "opacity-50 hover:opacity-70"
            }`}
          >
            Personal
          </h4>
          <h4
            onClick={handleClick}
            className={`font-mont uppercase italic hover:cursor-pointer ${
              !active.crossfunctional && "opacity-50 hover:opacity-70"
            }`}
          >
            Cross-functional teams
          </h4>
        </div>
        {active.personal
          ? personalProjects.map((project, index) => (
              <Project key={index} project={project} />
            ))
          : crossfunctionalProjects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
      </div>
    </main>
  );
};

const personalProjects: IProject[] = [
  {
    title: "Mindfully",
    description:
      "Mindfully is a full stack application that encourages users to improve their mental health through mindfulness and journaling.",
    creatorsNote:
      "Coming from an incredibly adverse childhood, I have had to learn how to cope and also how to manage BPD and Autism. The art of mindfulness and journaling has saved my life. This was the first full stack application I ever created. My favourite features are the calendar that helps users visualize their entries on any given day, and the ability for users to create their own prompts for their entries.",
    img: "/mindfully.webp",
    githubUrl: "https://github.com/alexisintech/mindfully",
    liveUrl: "https://mindfully.up.railway.app/",
  },
  {
    title: "Reversah",
    description:
      "Twitch streamer and Faze1 Top 20 Prospect, Reversah, offers custom-designed Valorant merchandise, as famously seen on tik tok. Popular customers include Tiffae, TenZ, Kyedae, and C9 Annie Dro.",
    creatorsNote:
      "I single-handedly redeveloped a multi-page ecommerce website from scratch by translating 18 Figma design prototypes into over 10 responsive and accessible web pages with Shopify, JavaScript, Liquid, HTML5, and CSS3 (client’s choice of tech), resulting in a quarterly increase of 248% in total sales, 102% in conversion rate, and 100% in returning customer rate.",
    img: "/reversah.webp",
    githubUrl: "https://github.com/alexisintech/Reversah.ValorantBanner",
    liveUrl: "https://reversah.com/",
  },
  {
    title: "Seize The Day",
    description:
      "Seize The Day is a full stack application that helps users organize their day, mindfully.",
    creatorsNote:
      "One of the ways I manage anxiety and organize scattered thoughts is by creating lists and tracking my tasks. I enjoyed taking my time to explore Material UI and figuring out how to abstract and organize more complex components, like sidebars and modals.",
    img: "/seize-the-day.webp",
    githubUrl: "https://github.com/alexisintech/seize-the-day",
    liveUrl: "https://seize-the-day.netlify.app/",
  },
  {
    title: "AdminMe",
    description:
      "More than a dashboard; AdminMe includes three fully interactive data tables, a functional calendar, and four different chart types for displaying analytics.",
    creatorsNote:
      "Creating this dashboard with React was so fun because I got to work with so many different tools and libraries, such as Mui X Data Grid, FullCalendar, Formik/Yup, and Nivo. This project definitely showcases my love for design and React.",
    img: "/adminme.webp",
    githubUrl: "https://github.com/alexisintech/adminme",
    liveUrl: "https://adminme.netlify.app/",
  },
  // {
  //   title: "My Clerks",
  //   description: "My Clerks was a take-home assignment!",
  //   creatorsNote:
  //     "One task was to display users from the RandomUser API and fetch data in the most performant way. I used Tanstack Query to fetch, cache, and manage data, and I set up logic to have the following two pages always be pre-fetched. The second task was to allow users to choose any color for the theme and have it persist upon full page reloads.",
  //   img: "/my-clerks.webp",
  //   githubUrl: "https://github.com/alexisintech/my_clerks",
  //   liveUrl: "https://myclerks.vercel.app/",
  // },
  {
    title: "CSS Generators API",
    description:
      "The CSS Generators API provides a directory of efficacious websites that generate CSS design elements.",
    creatorsNote:
      "I found myself scrolling through a huge bookmarks list of generators, trying to figure out which one was the one I needed. Now, the generators are searchable by keywords, such as 'svg' or 'background'. Also, the listings have website previews so that you can visualize a site without having to traverse it.",
    img: "/cssgeneratorsapi.webp",
    githubUrl: "https://github.com/alexisintech/css-generators-api",
    liveUrl: "https://cssgenerators.co/",
  },
  {
    title: "Portfolio Template",
    description:
      "A notably interactive portfolio with tabs for different sections of projects, widgets to reveal the author's story, a skills section, and social media links.",
    creatorsNote:
      "Funny story, someone actually completely stole all of my GitHub README and entire portfolio repo, and the scandal got a lot of attention on LinkedIn. After that, I had many developers ask to use my portfolio as a template so I created this portfolio (the current site you are on) for my use and gave this template to the community!",
    img: "/portfolio.webp",
    githubUrl: "https://github.com/alexisintech/portfolio-template",
    liveUrl: "https://alexisintech-portfolio-template.netlify.app",
  },
];

const crossfunctionalProjects: IProject[] = [
  {
    title: "Coding Resources API",
    description:
      "The Coding Resources API serves educational content for a wide variety of computer science topics, languages, and technologies related to web development.",
    creatorsNote:
      "I, alongside one other developer, was mainly responsible for the UI design and frontend development for this project. All 11 team members contributed to the data bank for the API. A majority of the work was done synchronously over Discord meetings.",
    img: "/codingresourcesAPI.webp",
    githubUrl: "https://github.com/alexisintech/coding-resources-api",
    liveUrl: "https://coding-resources-api.up.railway.app/",
  },
  {
    title: "Full Stack Interview Questions API",
    description:
      "The Full Stack Interview Questions API consists of 150+ questions that have been asked at behavioural and technical interviews in the Tech field.",
    creatorsNote:
      "On this team of eight, I contributed to the UI design and frontend development for this project during LiveShare sessions. The bulk of this app was creating a large data file for all of the interview questions.",
    img: "/fullstackapi.webp",
    githubUrl: "https://github.com/alexisintech/interview-question-api",
    liveUrl: "https://full-stack-interview-prep.up.railway.app/",
  },
];
