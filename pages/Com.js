import React from 'react'
import { useSession } from "next-auth/react";


const Com = ({id, text, date, state, ele, name}) => {
  const { data: session, status } = useSession();
  console.log(ele, 'eerererer');
  return (
    <>
  
  <div key={id} className="flex  xl:mx-52 text-sm text-gray-500 space-x-4 sm:mx-10">
              <div className="flex-none py-10">
                <img src="/wtsp.jpeg" alt="" className="w-10 h-10 bg-gray-100 rounded-full"/>
              </div>
              <div className="py-10 border-b w-full border-gray-200">
                <h3 className="font-medium text-gray-900"> {session?.user.name}</h3>
                <p><time dateTime="2021-07-16"> {new Date().toLocaleString().split(',')[0]} </time></p>

              
                <p className="sr-only">5 out of 5 stars</p>

              
                  <div className="mt-4 prose prose-sm max-w-none text-gray-500">
                  <p> {text} </p>
                </div>
                
                  
              
              </div>
            </div>





    </> 
  )
}

export default Com