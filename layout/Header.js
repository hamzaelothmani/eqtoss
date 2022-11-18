import { useEffect, useState } from "react";
import Link from "next/link";
import axios from 'axios'
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { BiMessageSquareAdd } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";






const svgVariants = {
  hidden: { rotate: -5 },
  visible: { 
    rotate: 0,
    transition: { duration : 1 }
  },
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { 
      duration: 2,
      ease: "easeInOut",
    }
  }
};

const svgDick = {
start:{
  opacity: 0,
  pathLength: 0 
},
finished:{
  opacity:1,
  pathLength: 1,
  transition:{
    duration:2,
    ease: "easeInOut"
  }
}
}

export default function Header() {
  // const [navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);

  const [profile, setProfile] = useState(false);

  const router = useRouter();

  const { data: session, status } = useSession();




  useEffect( ()  =>{
    if(session){
   
        
         axios.post("/api/server/saveProduct", {
           refe: uuidv4(),
           saveEmail: session?.user.email,
           saveName : session?.user.name,
    
        
         })
         .then(function (response) {
           console.log(response);
         })
         .catch(function (error) {
           console.log(error, "ffffff")
         });
     }  
  }, [session])
  return (
    <>
      <nav className="bg-white shadow  z-50 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
             <Link href='/' ><button className="flex-shrink-0 flex mb-5 items-center">
              <motion.svg
              variants={pathVariants} initial='hidden' animate='visible'
      xmlns="http://www.w3.org/2000/svg"
      width="200.667"
      height="200.667"
      version="1"
      viewBox="0 0 500 500"
    >
      <motion.path
      variants={svgDick} 
        d="M2645 2421c-54-24-119-100-135-156-63-225 186-410 378-281 127 85 149 258 49 373-54 60-104 83-187 83-42 0-79-7-105-19zm70-116c29-28 31-42 9-73-17-25-71-31-92-10s-15 75 10 92c31 22 45 20 73-9zm151-6c4-6-39-55-101-115-96-92-135-120-135-97 0 10 212 223 222 223 4 0 10-5 14-11zm-4-136c37-33 11-103-39-103-28 0-63 33-63 60 0 26 34 60 62 60 12 0 30-7 40-17z"
        transform="matrix(.1 0 0 -.1 0 500)"
      ></motion.path>
      <motion.path
      variants={svgDick} 
        d="M2654 2275c-8-19 3-35 26-35 19 0 30 17 23 38-6 17-42 15-49-3zM2804 2135c-9-23 4-47 23-43 22 4 30 38 11 49-19 13-28 11-34-6zM1017 2424c-4-4-7-106-7-226v-218h310v70h-230v120h190v70h-190v120h221l-3 33-3 32-141 3c-77 1-143-1-147-4zM1620 2410c-75-35-117-88-135-168-19-89 30-190 114-235 47-26 55-27 205-27h156v35c0 34-1 35-39 35h-40l24 43c33 61 39 109 21 171-17 57-65 114-118 142-51 27-136 28-188 4zm164-73c48-27 76-77 76-135 0-140-159-208-257-109-127 126 26 333 181 244zM2117 2423c-4-3-7-19-7-34 0-27 2-28 58-31l57-3 3-187 2-188h70v380h110v70h-143c-79 0-147-3-150-7zM3232 2410c-31-14-47-29-58-56-31-73 4-133 101-174 65-28 85-47 85-81 0-56-80-77-152-41l-36 19-17-29-16-28 43-20c53-24 147-26 189-5 37 20 69 70 69 110 0 55-33 92-117 133-67 32-78 41-81 65-2 16 2 35 9 43 14 17 85 19 126 3 23-8 30-7 40 7 22 31 14 43-39 59-67 20-94 19-146-5zM3682 2410c-31-14-47-29-58-56-31-73 4-133 101-174 65-28 85-47 85-81 0-56-80-77-152-41l-36 19-17-29-16-28 43-20c53-24 147-26 189-5 37 20 69 70 69 110 0 55-33 92-117 133-67 32-78 41-81 65-2 16 2 35 9 43 14 17 85 19 126 3 23-8 30-7 40 7 22 31 14 43-39 59-67 20-94 19-146-5z"
        transform="matrix(.1 0 0 -.1 0 500)"
      ></motion.path>
    </motion.svg>
 

              </button></Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/">
                  <a className="border-transparent focus:border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    
                  <span><AiOutlineHome className="w-6 h-6 mr-1" /></span> Home
                  </a>
                </Link>
                <Link href="/ShoppingList">
                  <a className="border-transparent focus:border-indigo-500 text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  
                  <span> <BiShoppingBag className="w-6 h-6 mr-1 "  /> </span> Deals
                  </a>
                </Link>
                
                <Link href="/PostForm">
                 

                  <a className="border-transparent focus:border-indigo-500 text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    
                   <span><BiMessageSquareAdd className="w-6 h-6 mr-1 " /></span> Poster
                  </a>
                
                </Link>
                {/* <Link href="">
                  <a className="border-transparent focus:border-indigo-500 text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    
                    About
                  </a>
                </Link> */}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Link href='/SavedProducts' ><button
              onClick={()=>setProfile(false)}
                type="button"
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="sr-only">View notifications</span>

                <MdOutlineBookmarkAdd className="w-6 h-6" />
              </button></Link>

              <div className="ml-3 relative">
                <div>
                  <button
                    onClick={() => setProfile(!profile)}
                    type="button"
                    className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    {/* <div className="h-8 w-8 bg-black rounded-full"></div> */}
                    <img className="h-8 w-8 rounded-full" src={session?.user.image} />
                  </button>
                </div>

                {profile && (
                  <div
                    className="origin-top-right z-50 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                    <Link href='/Profile' ><a
                    onClick={()=>setProfile(false)}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </a></Link>
                    <Link href="/Register">
                      <a
                      onClick={()=>setProfile(false)}
                        className={`${
                          router.asPath == "/Register" ? "hidden" : "block"
                        } px-4 py-2 text-sm text-gray-700`}
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-1"
                      >
                        Register
                      </a>
                    </Link>
                    {status === "authenticated" ? (
                      <a
                        onClick={() => {signOut(); setProfile(false)}}
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-2"
                      >
                        Sign Out
                      </a>
                    ) : (
                      <Link href="/Login">
                        <a
                        onClick={()=>setProfile(false)}
                          className={`${
                            router.asPath == "/Login" ? "hidden" : "block"
                          } px-4 py-2 text-sm text-gray-700`}
                          role="menuitem"
                          tabIndex="-1"
                          id="user-menu-item-2"
                        >
                          Sign In
                        </a>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setClick(!click)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {click && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="pt-2 pb-3 space-y-1">
              {/* <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" --> */}
              <Link href="/">
                <a
                onClick={()=>setClick(!click)}
                  href="#"
                  className="bg-indigo-50 border-indigo-500 flex text-indigo-700  pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                 <span><AiOutlineHome className="w-6 h-6 " /></span> Home
                </a>
              </Link>
              <Link href="/ShoppingList">
                <a
                onClick={()=>setClick(!click)}
                  href="#"
                  className="border-transparent flex text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700  pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                 <span> <BiShoppingBag className="w-6 h-6 "  /> </span> Deals
                </a>
              </Link>
              <Link href="PostForm">
                <a
                onClick={()=>setClick(!click)}
                  href="#"
                  className="border-transparent flex text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700  pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                 <span><BiMessageSquareAdd className="w-6 h-6 " /></span> Poster
                </a>
              </Link>
              {/* <Link href="/">
                <a
                onClick={()=>setClick(!click)}
                  href="#"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  About
                </a>
              </Link> */}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                <img className="h-8 w-8 rounded-full" src={session?.user.image} />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    
                    {session?.user.name}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {session?.user.email}
                  </div>
                </div>
               <Link href='/SavedProducts' ><button
                onClick={()=>setProfile(false)}
                  type="button"
                  className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>

                  <MdOutlineBookmarkAdd className="w-6 h-6" />
                </button></Link>
              </div>
              <div className="mt-3 space-y-1">
                <Link href='/Profile' ><a
                onClick={()=>setClick(!click)}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a></Link>
                <Link href="/Register">
                  <a
                  onClick={()=>setClick(!click)}
                    className={`${
                      router.asPath == "/Register" ? "hidden" : "block"
                    } px-4 py-2 text-sm text-gray-700`}
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                  >
                    Register
                  </a>
                </Link>
                {status === "authenticated" ? (
                  <a
                    onClick={() => {signOut(); setClick(!click)}}
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Sign Out
                  </a>
                ) : (
                  <Link href="/Login">
                    <a
                    onClick={()=>setClick(!click)}
                      className={`${
                        router.asPath == "/Login" ? "hidden" : "block"
                      } px-4 py-2 text-sm text-gray-700`}
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-2"
                    >
                      Sign In
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* <nav id="head" className="w-full  bg-white shadow sticky top-0 z-50">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
               

                <a  >
                  <h2  className="text-2xl font-bold">LOGO</h2>
                </a>
                
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-600 hover:text-blue-600">
                  <Link  href="/">
                    <button onClick={()=> setNavbar(false)}>HOME</button>
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link  href="/Deals">
                    <button onClick={()=> setNavbar(false)}>DEALS</button>
                  </Link>
                </li>
             
               {status === "authenticated" ?    <li
                  className={`text-white bg-slate-400 px-4 py-2 rounded-lg  hover:bg-slate-600 ${
                    router.asPath == "/Login" ? "hidden" : "block"
                  } `}
                >
                  <Link  href="/Login">
                    <button onClick={()=> {signOut(); setNavbar(false)}}>LOG OUT  </button>
                  </Link>
                </li> :   <li
                  className={`text-white bg-slate-400 px-4 py-2 rounded-lg  hover:bg-slate-600 ${
                    router.asPath == "/Login" ? "hidden" : "block"
                  } `}
                >
                  <Link  href="/Login">
                    <button onClick={()=> setNavbar(false)}>LOG IN</button>
                  </Link>
                </li> }
                
              { status === "unauthenticated" &&
  <li
  className={`text-white bg-blue-400 px-4 py-2 rounded-lg  hover:bg-blue-600 ${
    router.asPath == "/Register" ? "hidden" : "block"
  } `}
>
  <Link  href="/Register">
    <button onClick={()=> setNavbar(false)}>REGISTER</button>
  </Link>
</li>
              }
              
              </ul>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
}
