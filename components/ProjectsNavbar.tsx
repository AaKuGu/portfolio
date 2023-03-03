import React, { FunctionComponent } from "react";
import { Category } from "../type";

const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let class_name = "capitalize cursor-pointer hover:text-green ";
  if (active === value) class_name += " text-green";
  console.log(class_name);

  return (
    <li className={class_name} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 gap-3 overflow-x-auto list-none flex-wrap text-[13px] md:text-[17px] lg:text-[18px] md:gap-5 font-bold justify-center md:justify-start">
      <NavItem value="all" {...props} />
      <NavItem value="fullStack" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="react-Native" {...props} />
      <NavItem value="next-Js" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
