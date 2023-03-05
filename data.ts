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
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>, <b>React.js</b> and <b>Next.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about: "handle database (MongoDB), server, api using <b>Express </b> ",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop robust  REST API using <b>Node API</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer-Motion</b> ",
  },
];

export const languages: ISkill[] = [
  {
    name: "Python",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "Javascript",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "Java",
    level: "60%",
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
    name: "Chatting App",
    description:
      "Site is in maintenance mode, will be live soon. Some bugs are being fixed.",
    image_path: "/images/chat.png",
    deployed_url: "",
    github_url: "",
    category: ["fullStack", "react"],
    key_techs: ["React", "Express", "TailwindCss", "socket.io", "mongodb"],
  },
  {
    id: 2,
    name: "Pizza Joint",
    description:
      "this project is mainly focused on Framer-Motion library ( A library which creates beautiful animations for our application ). Just the react js was enough to create such thing.",
    image_path: "/images/PIzzaJoin rectangle.png",
    deployed_url: "https://pizzajoint-eight.vercel.app/",
    github_url: "https://github.com/AaKuGu/pizzajoint",
    category: ["react"],
    key_techs: ["React", "TailwindCss", "Framer Motion"],
  },
  {
    id: 3,
    name: "Email Sender App",
    description:
      "Using this app you will be able to send or receive email messages , more features like sending emails to more numbers of peoples in one click is coming soon.",
    image_path: "/images/nodemailer rectangle.png",
    deployed_url: "https://nodemailer-react.vercel.app/",
    github_url: "https://github.com/AaKuGu/nodemailer-react",
    category: ["react", "fullStack"],
    key_techs: ["React", "Express", "TailwindCss", "Nodemailer"],
  },
  {
    id: 4,
    name: "HiFi Todo",
    description:
      "this is simple Todo list app , where you can write your daily tasks. More featuers like personal chats along with the data encryption is comming soon , so that even i can not know what you have as your daily tasks",
    image_path: "/images/HiFiThumbnail.png",
    deployed_url: "https://todo-list-client-k9dv.vercel.app/",
    github_url: "https://github.com/AaKuGu/todoListClient",
    category: ["fullStack", "next-Js"],
    key_techs: ["Next", "Express", "TailwindCss", "MongoDB", "React-Redux"],
  },
  {
    id: 5,
    name: "Portfolio",    
    description:
      "This is my portfolio project, which is the same website , where you are right now.",
    image_path: "/images/portfolio.png",
    deployed_url: "https://portfolio-omega-nine-82.vercel.app/",
    github_url: "https://github.com/AaKuGu/portfolio/",
    category: ["next-Js"],
    key_techs: ["NextJs", "TailwindCss", "Framer-Motion", "TypeScript"],
  },
];
