import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaRegCommentDots } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
const Cards = ({desc, img, price}) => {
 


  return (
    <>
    
 
{/* <div>
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
        */}
        <div class="container mx-auto">
        
      <Link href='/Infos'>
      
      
        <a  class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div class="relative pb-48 overflow-hidden">
        <Image
           layout="fill"
             className='rounded-lg'
              objectFit="cover"
              quality={100}
              src={`/GG.jpg`}
              alt=""
            />
          {/* <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt=""/> */}
        </div>
        <div class="p-4">
          <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
          <h2 class="mt-2 mb-2  font-bold">Purus Ullamcorper Inceptos Nibh</h2>
          <p class="text-sm">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <div class="mt-3 flex items-center">
            <span class="text-sm font-semibold">ab</span>&nbsp;<span class="font-bold text-xl">45,00</span>&nbsp;<span class="text-sm font-semibold">€</span>
          </div>
        </div>
        <div class="p-4 border-t border-b text-xs text-gray-700">
          <span class="flex items-center mb-1">
            <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 10/10/2022
          </span>
          <span class="flex items-center">
            <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> posted by <span className="font-bold text-black ml-1 text-base tracking-tight " > hamza</span> 
          </span> 
                
        </div>
        <div className="flex justify-around my-4">
               <Link href='/Infos#comment' ><button className="hover:-translate-y-0.5 flex gap-2 transform transition text-slate-500 focus:text-black">
                  <FaRegCommentDots className="w-6  h-6  " /><span>2</span>
                </button></Link> 
                <button className="hover:-translate-y-0.5 flex gap-2 transform transition text-slate-500 focus:text-red-900">
                  <AiFillLike className="w-6 h-6 " /><span>2</span>
                </button>
              </div>
       </a>
      </Link>
      </div>
     
     
    </>
  );
};

export default Cards;
