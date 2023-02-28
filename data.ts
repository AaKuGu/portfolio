import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
// import { IProject, Service, Skill } from "./types";
import { BsCircleFill } from "react-icons/bs";
import { IProject, IServices, ISkill } from "./type";  
// import { IService } from "./type.ts";

// import { IService } from "./type";

export const services: IServices[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: ISkill[] = [
  {
    name: "Python",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Javascript",
    level: "100%",
    Icon: BsCircleFill,
  },
  {
    name: "C++",
    level: "85%",
    Icon: BsCircleFill,
  },
  {
    name: "ReactJS",
    level: "100%",
    Icon: BsCircleFill,
  },
  {
    name: "NextJS",
    level: "70%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "95%",
  },
  {
    Icon: BsCircleFill,
    name: "PhotoShop",
    level: "75%",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "92%",
  },
  {
    Icon: BsCircleFill,
    name: "MyOwnTools",
    level: "100%",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "COVID Tracker",
    description: "This is blah blah blah",
    image_path: "/images/covid.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com/",
    category: ["mongo"],
    key_techs: ["React","node"]
  },
  {
    id: 2,
    name: "Musa Tracker",
    description: "This is blah blah blah", 
    image_path: "/images/covid.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com/",
    category: ["react", "mongo"],
    key_techs: ["React", "Char.js", "Material UI"],
  },
  {
    id: 3,
    name: "COVID Tracker",
    description: "This is blah blah blah",
    image_path: "/images/covid.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com/",
    category: ["react", "node"],
    key_techs: ["React", "Char.js", "Material UI"],
  },
  {
    id: 4,
    name: "COVID Tracker",
    description: "This is blah blah blah",
    image_path: "/images/covid.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com/",
    category: ["react"],
    key_techs: ["React", "Char.js", "Material UI"],
  },
  {
    id: 5,
    name: "COVID Tracker",
    description: "This is blah blah blah",
    image_path: "/images/covid.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com/",
    category: ["django", "react"],
    key_techs: ["React", "Char.js", "Material UI"],
  },
  {
    id: 6,
    name: "Jangal Tracker",
    description: "This is blah blah blah",
    image_path: "/images/covid.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com/",
    category: ["node"],
    key_techs: ["React", "Char.js", "Material UI"],
  },
  {
    id: 7,
    name: "COVID Tracker",
    description: "This is blah blah blah",
    image_path: "/images/covid.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com/",
    category: ["mongo"],
    key_techs: ["React", "Char.js", "Material UI"],
  },
  {
    id: 8,
    name: "COVID Tracker",
    description: "This is blah blah blah",
    image_path: "/images/covid.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com/",
    category: ["react"],
    key_techs: ["React", "Char.js", "Material UI"],
  },
  {
    id: 9,
    name: "COVID Tracker",
    description: "This is blah blah blah",
    image_path: "/images/covid.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com/",
    category: ["react"],
    key_techs: ["React", "Char.js", "Material UI"],
  },
  {
    id: 10,
    name: "COVID Tracker",
    description: "This is blah blah blah",
    image_path: "/images/covid.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com/",
    category: ["react"],
    key_techs: ["React", "Char.js", "Material UI"],
  },
  {
    id: 11,
    name: "COVID Tracker",
    description: "This is blah blah blah",
    image_path: "/images/covid.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com/",
    category: ["react"],
    key_techs: ["React", "Char.js", "Material UI"],
  },
];

