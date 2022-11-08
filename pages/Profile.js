import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { v4 as uuidv4 } from "uuid";
import axios from 'axios'
import { useSession } from "next-auth/react";
import Poster from './Poster';

const Profile = () => {
    
    const { data: session, status } = useSession();
    const [profile, setProfile] = useState([])
    const [pageCount, setPageCount] = useState(5);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false)



    const handlePrevious = () => {
      setPage((p) => {
        if (p === 0) return p;
        return p - 1;
      });
    };
    const handleNext = () => {
      setPage((n) => {
        if (n === pageCount) return n;
        return n + 1;
      });
    };

    useEffect(()=>{
        if(session)
        {

            axios.get(`/api/server?page=${page}`)

              .then(function(response) {

                const result = response.data.data.filter((element=>element.userEmail==session?.user.email))
                console.log(result,"filtered products");
                setProfile(result)
                setLoading(true)
              })
              .catch(function(error) {
                  console.log((error))
              });
            }
    
    }, [session, page])

console.log(profile.map(ele=> ele._id), 'heeeeeeee');
const deleteShit=  (_id)=>{



  if(profile){


    axios.delete(`/api/server/${_id}`)
      .then(response => console.log(response))
      .catch(error => {
          
          console.error('There was an error!', error);
      });
  }
}

    console.log(profile, 'hhhhhhhhhhhhhhhh');

  return (
    <>
    {
      !loading  ? <Poster /> :
      <div>


        <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:pb-24 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Product history</h1>
          <p className="mt-2 text-sm text-gray-500">Here Are Your Posting History</p>
        </div>
        <div className="mt-16">
          <h2 className="sr-only">Recent orders</h2>
    
          <div className="space-y-20">
            <div>
              <h3 className="sr-only">Order placed on <time dateTime="2021-01-22">January 22, 2021</time></h3>
    
          
    
              <table className="mt-4 w-full text-gray-500 sm:mt-6">
                <caption className="sr-only">
                  Products
                </caption>
                <thead className="sr-only text-sm text-gray-500 text-left sm:not-sr-only">
                  <tr>
                    <th scope="col" className="sm:w-2/5 lg:w-1/3 pr-8 py-3 font-normal">Product</th>
                    <th scope="col" className="hidden w-1/5 pr-8 py-3 font-normal sm:table-cell">Price</th>
                    <th scope="col" className="hidden pr-8 py-3 font-normal sm:table-cell">Status</th>
                    <th scope="col" className="w-0 py-3 font-normal text-right">Info</th>
                  </tr>
                </thead>
       {
        profile.map((ele, ind)=>(
    
                <tbody key={uuidv4()} className="border-b border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
                  <tr>
                    <td className="py-6 pr-8">
                      <div className="flex items-center">
                        <img src={ele.images[0]} className="w-16 h-16 object-center object-cover rounded mr-6"/>
                        <div>
                          <div className="font-medium text-gray-900">{ele.title} </div>
                          <div className="mt-1 sm:hidden"></div>
                        </div>
                      </div>
                    </td>
                    <td className="hidden py-6 pr-8 sm:table-cell">${ele.price} </td>
                    <td className="hidden py-6 pr-8 sm:table-cell">Delivered {ele.timix}</td>
                    <td className="py-6 font-medium text-right whitespace-nowrap">
                      <button onClick={()=> deleteShit(ele._id)} className="text-indigo-600">Delete<span className="hidden lg:inline"> Product</span><span className="sr-only">, Machined Pen and Pencil Set</span></button>
                    </td>
                  </tr>
    
                  {/* <!-- More products... --> */}
                </tbody>
        ))
      }
      </table>
    </div>
    
    {/* <!-- More orders... --> */}
    </div>
    </div>
      </div>
    </div>
    
    
    <nav className="border-t xl:mx-20 border-gray-200 px-4 flex items-center justify-between sm:px-0">
            <div className="-mt-px w-0 flex-1 flex">
              <button
                disabled={page === 0}
                onClick={handlePrevious}
                href="#"
                className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                {/* <!-- Heroicon name: solid/arrow-narrow-left --> */}
                <svg
                  className="mr-3 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Previous
              </button>
            </div>
            {/* <div className="hidden md:-mt-px md:flex">
            
              <a
                href="#"
                className="border-transparent  opacity-50 text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                
               {page > 1 ? page - 1 : ""}
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                
               {page}
              </a>
              <a
                href="#"
                className="border-transparent opacity-50 text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                
                {page + 1 }
              </a>
             
            </div> */}
            <div className="-mt-px w-0 flex-1 flex justify-end">
              <button
                disabled={page === pageCount}
                onClick={handleNext}
                href="#"
                className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                Next
                {/* <!-- Heroicon name: solid/arrow-narrow-right --> */}
                <svg
                  className="ml-3 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </nav>
    
        
       {/* ))} */}
      </div>
    }
    </>
  )
}

export default Profile