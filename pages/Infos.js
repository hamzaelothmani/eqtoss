
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Test from "./Test"
import Router from 'next/router';
import { useRouter } from 'next/router'
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";




const Infos = () => {
  

    const [index, setIndex] = useState(0)

    const router = useRouter();
    const elements = router.query;
    
    const { price, prePrice, title, description, images, commt } = elements;
    console.log(commt, 'comments')
    console.log(elements,"hgjgbgbgbhgb")
useEffect(()=>{


  Router.onRouteChangeComplete = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };
},[])
    


    const handleImg=(index)=>{
      
setIndex(index)
    }
if(images==undefined){
  return <div>loading</div>
}
else{
  
  return (
    <>
<div  className="bg-white">






<main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
  <div className="max-w-2xl mx-auto lg:max-w-none">
    {/* <!-- Product --> */}
    <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
      {/* <!-- Image gallery --> */}
      <div className="flex flex-col-reverse">
        {/* <!-- Image selector --> */}
        <div className=" px-4 mt-6 w-full max-w-lg xl:mx-auto sm:block lg:max-w-none">
          <div className="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
         {
         images.map((item, index)=> (
         

             <button key={index} onClick={()=> handleImg(index)} id="tabs-2-tab-1" className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50" aria-controls="tabs-2-panel-1" role="tab" type="button">
             <span className="sr-only"> Angled view </span>
             <span className="absolute inset-0 rounded-md overflow-hidden">
             <Image  src={`${item}`} onClick={()=> handleImg(index)}  objectFit='cover' layout='fill'  priority={false}  alt=""  />
             </span>
             {/* <!-- Selected: "ring-indigo-500", Not Selected: "ring-transparent" --> */}
             <span className="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none" aria-hidden="true"></span>
           </button>
          
           ))
           }
       

            {/* <!-- More images... --> */}
          </div>
        </div>

        <div className="w-full aspect-w-1 aspect-h-1">
          {/* <!-- Tab panel, show/hide based on tab state. --> */}
          <div id="tabs-2-panel-1" aria-labelledby="tabs-2-tab-1" role="tabpanel" tabIndex="0">
          <Image src={`${images[index]}`}  priority={true} layout='responsive' width={1000} height={800}   objectFit="contain"
            quality={100}  />
          </div>

          {/* <!-- More images... --> */}
        </div>
      </div>

      {/* <!-- Product info --> */}
      <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900"> {title} </h1>

        <div className="mt-3">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl text-gray-900">$ {price} </p>
          <p className="text-2xl text-gray-900 line-through opacity-60">$ {prePrice} </p>
        </div>

        {/* <!-- Reviews --> */}
        <div className="mt-3">
          <h3 className="sr-only">Reviews</h3>
          <div className="flex items-center">
            <div className="flex items-center">
              {/* <!--
                Heroicon name: solid/star

                Active: "text-indigo-500", Inactive: "text-gray-300"
              --> */}
              <svg className="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              {/* <!-- Heroicon name: solid/star --> */}
              <svg className="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              {/* <!-- Heroicon name: solid/star --> */}
              <svg className="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              {/* <!-- Heroicon name: solid/star --> */}
              <svg className="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              {/* <!-- Heroicon name: solid/star --> */}
              <svg className="h-5 w-5 flex-shrink-0 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="sr-only">4 out of 5 stars</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="sr-only">Description</h3>

          <div className="text-base text-gray-700 space-y-6">
<p> {description} </p>          </div>
        </div>

        <form className=" relative mt-6">
          {/* <!-- Colors --> */}
        <div className="absolue left-0 bottom-0">
        <button type="button" className="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
  <BsWhatsapp className="w-6 h-6 mr-2" />
  whatsapp
</button>
<button type="button" className="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
<SiGmail className="w-6 h-6 mr-2" />
  Gmail
</button>
        </div>

          <div className="mt-10 flex sm:flex-col1">
            <button type="submit" className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full">Add to bag</button>

            <button type="button" className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500">
              {/* <!-- Heroicon name: outline/heart --> */}
              <svg className="h-6 w-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="sr-only">Add to favorites</span>
            </button>
          </div>
        </form>

        <section aria-labelledby="details-heading" className="mt-12">
          <h2 id="details-heading" className="sr-only">Additional details</h2>

          <div className="border-t divide-y divide-gray-200">
            <div>
              <h3>
                {/* <!-- Expand/collapse question button --> */}
                <button type="button" className="group relative w-full py-6 flex justify-between items-center text-left" aria-controls="disclosure-1" aria-expanded="false">
                  {/* <!-- Open: "text-indigo-600", Closed: "text-gray-900" --> */}
                  <span className="text-gray-900 text-sm font-medium"> Features </span>
                  <span className="ml-6 flex items-center">
                    {/* <!--
                      Heroicon name: outline/plus-sm

                      Open: "hidden", Closed: "block"
                    --> */}
                    <svg className="block h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    {/* <!--
                      Heroicon name: outline/minus-sm

                      Open: "block", Closed: "hidden"
                    --> */}
                    <svg className="hidden h-6 w-6 text-indigo-400 group-hover:text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div className="pb-6 prose prose-sm" id="disclosure-1">
                <ul role="list">
                  <li>Multiple strap configurations</li>

                  <li>Spacious interior with top zip</li>

                  <li>Leather handle and tabs</li>

                  <li>Interior dividers</li>

                  <li>Stainless strap loops</li>

                  <li>Double stitched construction</li>

                  <li>Water-resistant</li>
                </ul>
              </div>
            </div>

            {/* <!-- More sections... --> */}
          </div>
        </section>
      </div>
    </div>

    
  </div>
</main>


</div>



<div id="comment">
  <Test elements={elements} />
</div>
    </>
  );
};
}

export default Infos;
