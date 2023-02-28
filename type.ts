// // teacher coding below //

import { IconType } from "./node_modules/react-icons/lib/esm/iconBase";

export interface IServices {
  title: string;
  about: string;
  Icon: IconType;
}

export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface IProject {
  id:number,
  name : string;
  description : string;
  image_path : string;
  deployed_url : string;
  github_url : string;
  category : Category[];
  key_techs: string[];
}

export type Category = "react" | "node" | "express" | "django" | "mongo"
