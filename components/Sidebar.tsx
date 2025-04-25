import React, { useEffect } from "react";
import { AiFillYoutube, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { useTheme } from "next-themes";
import Image from "../node_modules/next/image";
import Link from "next/link";
import { MdEmail, MdPhone } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = (e) => {
    e.preventDefault();
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <div className="h-auto">
      <div className="main">
        <div className="img flex justify-center">
          <Image
            className="items-center rounded-full max-w-[120px] max-h-[120px]"
            src="/images/myPic.png"
            alt="Profile Pic"
            width={120}
            height={120}
            layout="fixed"
          />
        </div>
        <div className="name_div flex justify-center gap-[5px] md:gap-[10px] text-xl  md:text-2xl mt-1 md:mt-2">
          <span className="name_first font-kaushan text-green">Aadarsh</span>
          <span className="name_last">
            <span>Gupta</span>
          </span>
        </div>
        <div className="first_options flex flex-col items-center justify-center mt-1 md:mt-2 gap-2">
          <a className="border  w-full rounded-full py-2 bg-gray-200 dark:bg-dark-200 tracking-wider ">
            <span>Full Stack Web Developer</span>
          </a>
          <Link href="/resume">
            <a
              className="border  w-full rounded-full py-2 bg-gray-200 dark:bg-dark-200  tracking-wider "
              download="name"
            >
              <span>Download Resume</span>
            </a>
          </Link>
        </div>
        <div className="social_icons flex justify-center my-3 text-2xl md:text-3xl text-green gap-3 md:gap-5">
          <a href="https://github.com/AaKuGu" target="_blank">
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aadarsh-gupta-09a514139/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
        </div>

        <div className="address flex flex-col gap-2 bg-gray-200 dark:bg-dark-200 my-2 py-2 px-2 border-[2px] border-white border-dashed tracking-wider text-sm items-start overflow-y-auto">
          <span className="flex justify-center items-center gap-3 ">
            <MdLocationPin  />
            Uttar Pradesh, India
          </span>
          <span className="flex justify-center items-center gap-3">
            <MdEmail />
            reviewerhiphanviral@gmail.com
          </span>
          <span className="flex justify-center items-center gap-3">
            <MdPhone />
            7388958220
          </span>
        </div>
        <div className="end_buttons flex flex-col tracking-wider text-white gap-3 font-bold mt-3 lg:mt-5   items-center">
          <Link href="mailto:reviewerhiphanviral@gmail.com">
            <a className="border rounded-full py-2 w-[200px] bg-gradient-to-r from-blue-600 to-green-600 ">
              Email Me
            </a>
          </Link>
          <Link href="/">
            <a
              className="border rounded-full py-2 w-[200px] bg-gradient-to-r from-blue-600 to-green-600 "
              onClick={changeTheme}
            >
              {theme === "dark" ? "Light Theme" : "Dark Theme"}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
