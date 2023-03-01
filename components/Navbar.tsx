// import React, { FunctionComponent, useEffect, useState } from 'react'
// import Link from 'next/link'
// import { useRouter } from 'next/router'

// const NavItems:FunctionComponent<{
//     activeItem:string,
//     setActiveItem:Function,
//     name:string,
//     route: string
// }> = ({activeItem, setActiveItem, name, route}) => {
//   return (
//     activeItem !== name ? (
//           <Link href={route}>
//             <a ><span onClick={()=>setActiveItem(name)} className="hover:text-green">{name}</span></a>
//           </Link>
//         ) : null

//   )
// }

// const Navbar = () => {
//     const [activeItem, setActiveItem] = useState<String>('')

//     const {pathname} = useRouter()

//     useEffect(() => {
//         if(pathname === '/') setActiveItem('About')
//         else if(pathname === '/projects') setActiveItem('Projects')
//         else if(pathname === '/resume') setActiveItem('Resume')
//     }, [])

//   return (
//     <div className='flex justify-between px-5 py-3 my-3'>
//       <span className="font-bold text-green text-xl md:text-2xl border-b-4 border-green leading-3 ">{activeItem}</span>
//       <div className="font-lg text-red-600 flex space-x-3">
//         <NavItems
//           activeItem={activeItem}
//           route="/"
//           name="About"
//           setActiveItem={setActiveItem}
//         />
//         <NavItems
//           activeItem={activeItem}
//           route="/projects"
//           name="Projects"
//           setActiveItem={setActiveItem}
//         />

//         <NavItems
//           activeItem={activeItem}
//           route="/resume"
//           name="Resume"
//           setActiveItem={setActiveItem}
//         />
//       </div>
//     </div>
//   );
// }

// export default Navbar

//my own coding ....

// below code written by me looks better as we dont need to pass the setIsActive as a prop to navlink

import React, { FunctionComponent, useEffect, useState } from "react";
import Link from "../node_modules/next/link";
import { useRouter } from "../node_modules/next/router";

const Navlink: FunctionComponent<{
  name: string;
  route: string;
  isActive: string;
  setIsActive: Function;
}> = ({ name, route, isActive, setIsActive }) => {
  return (
    <>
      {name !== isActive ? (
        <Link href={route}>
          <a onClick={() => setIsActive(name)}>
            <span>{name}</span>
          </a>
        </Link>
      ) : null}
    </>
  );
};

const Navbar = () => {
  const [isActive, setIsActive] = useState("");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setIsActive("About");
    else if (pathname === "/resume") setIsActive("Resume");
    else if (pathname === "/projects") setIsActive("Projects");
  });

  return (
    <div className="main ">
      <div className="text-green sm:text-xl text-md md:text-2xl md:px-6 px-3 py-3 font-bold flex ">
        <div className="mr-auto flex items-center text-red-600">{isActive}</div>
        <div className="flex gap-4">
          <Navlink
            name="About"
            route="/"
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <Navlink
            name="Resume"
            route="/resume"
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <Navlink
            name="Projects"
            route="/projects"
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
