// import React from "react";
// import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
// import { GoLocation } from "react-icons/go";
// import { GiTie } from "react-icons/gi";
// const Sidebar = () => {
//   return (
//     <div>
//       <img
//         src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010_960_720.jpg"
//         alt="user avatar"
//         className="w-28 h-28 mx-auto rounded-full"
//       />
//       <h3 className="my-5 text-4xl tracking-wider font-kaushan">
//         <span className="text-green">Aadarsh </span> Gupta
//       </h3>
//       <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
//       <a
//         className="px-5 py-1 my-3 bg-gray-200 rounded-full flex justify-center items-center"
//         href=""
//         download="name"
//       >
//         <GiTie className="w-6 h-6" /> Download Resume
//       </a>

//       {/* Social Icons */}
//       <div className=" flex justify-around my-5 text-green-500 w-9/12 md:w-full mx-auto">
//         <a href="">
//           <AiFillYoutube className="w-8 h-8 cursor-pointer" />
//         </a>
//         <a href="">
//           <AiFillGithub className="w-8 h-8 cursor-pointer" />
//         </a>
//         <a href="">
//           <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
//         </a>
//       </div>

//       {/* Address */}
//       <div
//         className="py-4 my-5 bg-gray-200"
//         style={{ marginRight: "-1rem", marginLeft: "-1rem" }}
//       >
//         <div className="flex items-center justify-center gap-2">
//           <GoLocation />
//           <span>Mirzapur, India</span>
//         </div>
//         <p className="my-2">prathamtogupta11@gmail.com</p>
//         <p className="my-2">20830928293/2934284083</p>
//       </div>

//       {/* Email Button */}
//       <button className="mt-5 text-white bg-gradient-to-r from-blue-700 font-bold tracking-wider to-green-700 w-[70%] py-3 rounded-3xl md:py-2" onClick={() => window.open('mailto:prathamtogupta11@gmail.com') }>
//         Email Me
//       </button>
//       <button className="mt-5 text-white bg-gradient-to-r from-blue-700 font-bold tracking-wider to-green-700 w-[70%] py-3 rounded-3xl md:py-2">
//         Toggle Theme
//       </button>
//     </div>
//   );
// };

// export default Sidebar;

// style the profile name

import React from "react";
import Link from "../node_modules/next/link";
import { AiFillYoutube, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { useTheme } from "next-themes";
import Image from "../node_modules/next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = (e) => {
    e.preventDefault()
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="h-[570px]">
      <div className="main">
        <div className="img flex justify-center">
          <Image
            className="items-center rounded-full w-[120px] h-[120px]"
            src="/images/Adarsh.jpg"
            alt="Profile Pic"
            width={120}
            height={120}
            layout="fixed"
          />  
        </div>
        <div className="name_div flex justify-center gap-[20px] text-4xl mt-4">
          <span className="name_first font-kaushan text-green">Aadarsh</span>
          <span className="name_last">
            <span>Gupta</span>
          </span>
        </div>
        <div className="first_options flex flex-col items-center justify-center mt-4 gap-3">
          <Link href="/">
            <a className="border  w-full rounded-full py-2 bg-gray-200 dark:bg-dark-200 tracking-wider">
              <span>Web Developer</span>
            </a>
          </Link>
          <Link href="/resume">
            <a
              className="border  w-full rounded-full py-2 bg-gray-200 dark:bg-dark-200  tracking-wider"
              download="name"
            >
              <span>Download Resume</span>
            </a>
          </Link>
        </div>
        <div className="social_icons flex justify-center mt-4 text-4xl text-green gap-10 md:gap-20 lg:gap-12">
          <Link href="/https://youtube.com/">
            <a>
              <AiFillYoutube />
            </a>
          </Link>
          <Link href="/https://youtube.com/">
            <a>
              <AiFillGithub />
            </a>
          </Link>
          <Link href="/https://youtube.com/">
            <a>
              <AiFillLinkedin />
            </a>
          </Link>
        </div>
        <div className="address flex flex-col gap-2 bg-gray-200 dark:bg-dark-200  my-4 py-4 tracking-wider">
          <span className="flex justify-center items-center gap-3">
            <GrLocation />
            Mirzapur, India
          </span>
          <span className="flex justify-center items-center gap-3">
            prathamtogupta11@gmail.com
          </span>
          <span className="flex justify-center items-center gap-3">
            3823920138907
          </span>
        </div>
        <div className="end_buttons flex flex-col tracking-wider text-white gap-3 font-bold mt-6 lg:mt-5 items-center">
          <Link href="/">
            <a className="border rounded-full py-2 w-[200px] bg-gradient-to-r from-blue-600 to-green-600 ">
              Email Me
            </a>
          </Link>
          <Link href="/">
            <a
              className="border rounded-full py-2 w-[200px] bg-gradient-to-r from-blue-600 to-green-600 "
              onClick={changeTheme}
            >
              Toggle Theme
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
