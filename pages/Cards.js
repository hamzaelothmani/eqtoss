import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaRegCommentDots } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
const Cards = ({desc, img, price}) => {
 


  return (
    <>
    
 
      <div className="sm:grid-cols-1 mt-20  lg:grid-cols-3 md:grid-cols-2 grid xl:grid-cols-4 2xl:grid-cols-5   gap-4 ">
        <div class="max-w-sm container mx-auto  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a>
            <Image
             width={400}
             height={300}
             className='rounded-lg'
              objectFit="cover"
              quality={100}
              src={`/images/${img}`}
              alt=""
            />
          </a>
          <div class="p-5 ">
            <div className="mb-4">
                <h1 className="text-4xl text-white font-sans "> {price} </h1>
            </div>
            <a>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {desc}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>

            <Link href='/Infos' ><a
              
              class="inline-flex ml-44 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a></Link>
            <div className=" border-t border-slate-900 mt-4">
              <div className="flex justify-around mt-4">
               <Link href='/Infos#comment' ><button className="hover:-translate-y-0.5 flex gap-2 transform transition text-slate-500 focus:text-white">
                  <FaRegCommentDots className="w-6  h-6  " /><span>2</span>
                </button></Link> 
                <button className="hover:-translate-y-0.5 flex gap-2 transform transition text-slate-500 focus:text-red-500">
                  <BiLike className="w-6 h-6 " /><span>2</span>
                </button>
              </div>
            </div>
          </div>
        </div>
       
        
      </div>
    </>
  );
};

export default Cards;
