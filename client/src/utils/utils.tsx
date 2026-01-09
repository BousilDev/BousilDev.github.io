import type { CVItem, ProfileCardProps, GitHubProps } from "@/types/data";
import { Link } from "react-router-dom";

export const profileCardProps: ProfileCardProps[] = [
  {
    name: "Oliver Niemi",
    title: "Computer Science Student",
    handle: "BousilDev",
    status: "Online",
    contactText: "Contact Me",
    avatarUrl:
      "https://cdn.discordapp.com/attachments/535511927351148548/1459132419612475445/cv.png?ex=69622a76&is=6960d8f6&hm=dc88f7506eac1262341f10c1cd1569a7d63239daf945c0a4a7b95828a74b80da",
    iconUrl: "https://github.githubassets.com/favicons/favicon.svg",
    grainUrl: "",
  },
];

export const CVData: CVItem[] = [
  {
    header: "Education",
    content: "Aalto University Computer Science (2023 - 2028)",
  },
  {
    header: "Experience",
    content: (
      <p>
        Customer service and IT help experience from summer jobs. Personal
        projects can be found from{" "}
        <Link
          to="https://github.com/BousilDev"
          className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
        >
          my Github
        </Link>{" "}
        or below.
      </p>
    ),
  },
  {
    header: "Skills",
    content:
      "Scala, C/C++, Python, JS/TS (Node, React), Java, SQL, Docker, AWS, MongoDB",
  },
  {
    header: "Languages",
    content: "English (Professional), Finnish (Native), Swedish (Basic)",
  },
  {
    header: "Hobbies",
    content:
      "Video Games, Golf, Video Editing (DaVinci Resolve) & Cinema, Piano, Interest in variety of sports",
  },
];

export const githubProps: GitHubProps = {
  show: true,
  repoUrl: "https://github.com/BousilDev",
};
