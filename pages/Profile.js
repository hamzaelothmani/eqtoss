import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { v4 as uuidv4 } from "uuid";
import axios from 'axios'
import { useSession } from "next-auth/react";

const Profile = () => {
    
    const { data: session, status } = useSession();
    const [profile, setProfile] = useState([])


    useEffect(()=>{
        if(session)
        {

            axios.get(`/api/server`)

              .then(function(response) {

                const result = response.data.data.filter((element=>element.userEmail==session?.user.email))
                console.log(result,"filtered products");
                setProfile(result)
              })
              .catch(function(error) {
                  console.log((error))
              });
            }
    
    }, [session])

    console.log(profile, 'hhhhhhhhhhhhhhhh');

  return (
    <>
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
                <td className="hidden py-6 pr-8 sm:table-cell">Delivered Jan 25, 2021</td>
                <td className="py-6 font-medium text-right whitespace-nowrap">
                  <a href="#" className="text-indigo-600">View<span className="hidden lg:inline"> Product</span><span className="sr-only">, Machined Pen and Pencil Set</span></a>
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



    
   {/* ))} */}
    </>
  )
}

export default Profile