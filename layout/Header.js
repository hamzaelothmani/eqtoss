import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";
import { MdOutlineBookmarkAdd } from "react-icons/md";

export default function Header() {
  // const [navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);

  const [profile, setProfile] = useState(false);

  const router = useRouter();

  const { data: session, status } = useSession();
  console.log(session?.user.image);

  return (
    <>
      <nav class="bg-white shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <div class="flex-shrink-0 flex items-center">
                <img
                  class="block lg:hidden h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
                <img
                  class="hidden lg:block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Workflow"
                />
              </div>
              <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/">
                  <a class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    {" "}
                    Home
                  </a>
                </Link>
                <Link href="/ShoppingList">
                  <a class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    {" "}
                    Deals{" "}
                  </a>
                </Link>
                <Link href="/PostForm">
                  <a class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    {" "}
                    Poster{" "}
                  </a>
                </Link>
                <Link href="">
                  <a class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    {" "}
                    About{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:items-center">
              <button
                type="button"
                class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="sr-only">View notifications</span>

                <MdOutlineBookmarkAdd className="w-6 h-6" />
              </button>

              <div class="ml-3 relative">
                <div>
                  <button
                    onClick={() => setProfile(!profile)}
                    type="button"
                    class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span class="sr-only">Open user menu</span>
                    <div class="h-8 w-8 bg-black rounded-full"></div>
                    {/* <img class="h-8 w-8 rounded-full" src={session.user.image} /> */}
                  </button>
                </div>

                {profile && (
                  <div
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                  >
                    {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </a>
                    <Link href="/Register">
                      <a
                        class={`${
                          router.asPath == "/Register" ? "hidden" : "block"
                        } px-4 py-2 text-sm text-gray-700`}
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-1"
                      >
                        Register
                      </a>
                    </Link>
                    {status === "authenticated" ? (
                      <a
                        onClick={() => signOut()}
                        class="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-2"
                      >
                        Sign Out
                      </a>
                    ) : (
                      <Link href="/Login">
                        <a
                          class={`${
                            router.asPath == "/Login" ? "hidden" : "block"
                          } px-4 py-2 text-sm text-gray-700`}
                          role="menuitem"
                          tabindex="-1"
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
            <div class="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setClick(!click)}
                type="button"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>

                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  class="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {click && (
          <div class="sm:hidden" id="mobile-menu">
            <div class="pt-2 pb-3 space-y-1">
              {/* <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" --> */}
              <Link href="/">
                <a
                  href="#"
                  class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Home
                </a>
              </Link>
              <Link href="/ShoppingList">
                <a
                  href="#"
                  class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Deals
                </a>
              </Link>
              <Link href="PostForm">
                <a
                  href="#"
                  class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Poster
                </a>
              </Link>
              <Link href="/">
                <a
                  href="#"
                  class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  About
                </a>
              </Link>
            </div>
            <div class="pt-4 pb-3 border-t border-gray-200">
              <div class="flex items-center px-4">
                <div class="flex-shrink-0">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium text-gray-800">
                    {" "}
                    {session?.user.name}{" "}
                  </div>
                  <div class="text-sm font-medium text-gray-500">
                    {session?.user.email}{" "}
                  </div>
                </div>
                <button
                  type="button"
                  class="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span class="sr-only">View notifications</span>

                  <MdOutlineBookmarkAdd className="w-6 h-6" />
                </button>
              </div>
              <div class="mt-3 space-y-1">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <Link href="/Register">
                  <a
                    class={`${
                      router.asPath == "/Register" ? "hidden" : "block"
                    } px-4 py-2 text-sm text-gray-700`}
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-1"
                  >
                    Register
                  </a>
                </Link>
                {status === "authenticated" ? (
                  <a
                    onClick={() => signOut()}
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2"
                  >
                    Sign Out
                  </a>
                ) : (
                  <Link href="/Login">
                    <a
                      class={`${
                        router.asPath == "/Login" ? "hidden" : "block"
                      } px-4 py-2 text-sm text-gray-700`}
                      role="menuitem"
                      tabindex="-1"
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
