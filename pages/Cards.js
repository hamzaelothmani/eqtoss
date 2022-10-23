import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { FaRegCommentDots } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineBookmarkAdd } from "react-icons/md";
const Cards = ({ elements, id, patchData, patch, deleteData }) => {
  console.log(id, 'false alarm');
  console.log(patch, 'zzzzzzzzzzzzzz');
  


  console.log(elements, "hellooooooooooo");
  return (
    <>
    {
      
    }
      <div className="bg-red-white">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 sm:py-10 ">
      
          <div className=" space-y-16 sm:mt-16">
          <Link
                      href={{
                        pathname: "/Infos",
                        query: elements, // the data
                      }}
                    >
            <section aria-labelledby="4376-heading">
              <div className="space-y-1 md:flex md:items-baseline md:space-y-0 md:space-x-4">
                <h2
                  id="4376-heading"
                  className="text-sm font-medium text-gray-900 md:flex-shrink-0"
                >
                  Posted By Hamza
                </h2>
                <div className="space-y-5 md:flex-1 md:min-w-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
                  <p className="text-sm font-medium text-gray-500">
                  
                    on 10/20/2022
                  </p>
                  <div className="flex text-sm font-medium">
                 <button onClick={()=> deleteData(elements._id)}><MdOutlineBookmarkAdd className="w-6 h-6" /></button> 
                  </div>
                </div>
              </div>

              <div className="mt-6 -mb-6 flow-root border-t border-gray-200 divide-y divide-gray-200">
                <div className="py-6 sm:flex">
                  <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                    <img
                      src={elements?.images[0]}
                      className="flex-none w-20 h-20 rounded-md object-center object-cover sm:w-48 sm:h-48"
                    />
                    <div className="pt-1.5 min-w-0 flex-1 sm:pt-0">
                      <h3 className="text-sm font-medium text-gray-900">
                        <a href="#">{elements?.title}</a>
                      </h3>
                      <p className="text-sm text-gray-500 truncate">
                        {elements?.description}
                      </p>
                      <p className="mt-1 font-medium line-through opacity-50 text-gray-900">
                    
                        ${elements?.prePrice}
                      </p>
                      <p className="mt-1 font-medium text-gray-900">${elements?.price}</p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4 sm:mt-0 sm:ml-6 sm:flex-none sm:w-40">
                  
                      
                      <a
                        type="button"
                        className="w-full flex items-center justify-center bg-indigo-600 py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0"
                      >
                        See More Infos
                      </a>
                    
                    <button
                    onClick={()=>patchData(elements._id)}
                      type="button"
                      className="w-full flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0"
                    >
                      <MdOutlineBookmarkAdd className="w-6 h-6" />
                    </button>

                    <div className="flex justify-around xl:pt-14 sm:pt">
                      
                      <Link href="/Infos#comment">
                        <button className="hover:-translate-y-0.5 flex gap-2 transform transition text-slate-500 focus:text-black">
                          <FaRegCommentDots className="w-6  h-6  " />
                          <span>2</span>
                        </button>
                      </Link>
                      <button className="hover:-translate-y-0.5 flex gap-2 transform transition text-slate-500 focus:text-red-900">
                        <AiFillLike className="w-6 h-6 " />
                        <span>2</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* <!-- More products... --> */}
              </div>
            </section>
</Link>
            {/* <!-- More orders... --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;


