import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaRegCommentDots } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
const Cards = ({elements}) => {
 const {price, prePrice, title, description, images } = elements

console.log(elements, 'hellooo');
  return (
    <>
    
 

        
{/*  
        <!-- This example requires Tailwind CSS v2.0+ --> */}
<div class="bg-white">
  <div class="max-w-5xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
    

    <div class="mt-12 space-y-16 sm:mt-16">
      <section aria-labelledby="4376-heading">
        <div class="space-y-1 md:flex md:items-baseline md:space-y-0 md:space-x-4">
          <h2 id="4376-heading" class="text-sm font-medium text-gray-900 md:flex-shrink-0">Posted By Hamza</h2>
          <div class="space-y-5 md:flex-1 md:min-w-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
            <p class="text-sm font-medium text-gray-500"> on 10/20/2022</p>
            <div class="flex text-sm font-medium">
              <a href="#" class="text-indigo-600 hover:text-indigo-500">Manage order</a>
              <div class="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6">
                <a href="#" class="text-indigo-600 hover:text-indigo-500">View Invoice</a>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 -mb-6 flow-root border-t border-gray-200 divide-y divide-gray-200">
          <div class="py-6 sm:flex">
            <div class="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
              <img src={images[0]} class="flex-none w-20 h-20 rounded-md object-center object-cover sm:w-48 sm:h-48"/>
              <div class="pt-1.5 min-w-0 flex-1 sm:pt-0">
                <h3 class="text-sm font-medium text-gray-900">
                  <a href="#">{title}</a>
                </h3>
                <p class="text-sm text-gray-500 truncate">
                  {description}
                 
                </p>
                <p class="mt-1 font-medium line-through opacity-50 text-gray-900"> ${prePrice} </p>
                <p class="mt-1 font-medium text-gray-900">${price}</p>
              </div>
            </div>
            <div class="mt-6 space-y-4 sm:mt-0 sm:ml-6 sm:flex-none sm:w-40">
              <button type="button" class="w-full flex items-center justify-center bg-indigo-600 py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0">Buy again</button>
              <button type="button" class="w-full flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0">Shop similar</button>
              


              <div className="flex justify-around pt-14">
               <Link href='/Infos#comment' ><button className="hover:-translate-y-0.5 flex gap-2 transform transition text-slate-500 focus:text-black">
                  <FaRegCommentDots className="w-6  h-6  " /><span>2</span>
                </button></Link> 
                <button className="hover:-translate-y-0.5 flex gap-2 transform transition text-slate-500 focus:text-red-900">
                  <AiFillLike className="w-6 h-6 " /><span>2</span>
                </button>
              </div>
       
      
      
            </div>
          </div>

          {/* <!-- More products... --> */}
        </div>
      </section>

      {/* <!-- More orders... --> */}
    </div>
  </div>
</div>
     
    </>
  );
};

export default Cards;


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
          <div className="p-5 ">
            <div className="mb-4">
                <h1 className="text-4xl text-white font-sans "> {price} </h1>
            </div>
            <a>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {desc}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>

            <Link href='/Infos' ><a
              
              className="inline-flex ml-44 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        {/* <div className="container mx-auto">
        
      <Link href='/Infos'>
      
      
        <a  className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="relative pb-48 overflow-hidden">
        <Image
           layout="fill"
             className='rounded-lg'
              objectFit="cover"
              quality={100}
              src={`/GG.jpg`}
              alt=""
            /> */}
          {/* <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt=""/> */}
        {/* </div>
        <div className="p-4">
          <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
          <h2 className="mt-2 mb-2  font-bold">Purus Ullamcorper Inceptos Nibh</h2>
          <p className="text-sm">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <div className="mt-3 flex items-center">
            <span className="text-sm font-semibold">ab</span>&nbsp;<span className="font-bold text-xl">45,00</span>&nbsp;<span className="text-sm font-semibold">€</span>
          </div>
        </div>
        <div className="p-4 border-t border-b text-xs text-gray-700">
          <span className="flex items-center mb-1">
            <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 10/10/2022
          </span>
          <span className="flex items-center">
            <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i> posted by <span className="font-bold text-black ml-1 text-base tracking-tight " > hamza</span> 
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
      </div> */}
     
    
  {/* <!--
    Background backdrop, show/hide based on slide-over state.

    Entering: "ease-in-out duration-500"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in-out duration-500"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
  

  
    
        {/* <!--
          Slide-over panel, show/hide based on slide-over state.

          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-0"
            To: "translate-x-full"
        --> */}