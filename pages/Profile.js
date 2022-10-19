import React, {useEffect, useState} from 'react'
import Image from 'next/image'
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
                // setProfile(result)
              })
              .catch(function(error) {
                  console.log((error))
              });
            }
    
    }, [session])

    // console.log(profile, 'hhhhhhhhhhhhhhhh');

  return (
    <>
   {/* {profile.map(()=> ( */}

<div class="bg-white">
  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:pb-24 lg:px-8">
    <div class="max-w-xl">
      <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Product history</h1>
      <p class="mt-2 text-sm text-gray-500">Here Are Your Posting History</p>
    </div>

    <div class="mt-16">
      <h2 class="sr-only">Recent orders</h2>

      <div class="space-y-20">
        <div>
          <h3 class="sr-only">Order placed on <time datetime="2021-01-22">January 22, 2021</time></h3>

      

          <table class="mt-4 w-full text-gray-500 sm:mt-6">
            <caption class="sr-only">
              Products
            </caption>
            <thead class="sr-only text-sm text-gray-500 text-left sm:not-sr-only">
              <tr>
                <th scope="col" class="sm:w-2/5 lg:w-1/3 pr-8 py-3 font-normal">Product</th>
                <th scope="col" class="hidden w-1/5 pr-8 py-3 font-normal sm:table-cell">Price</th>
                <th scope="col" class="hidden pr-8 py-3 font-normal sm:table-cell">Status</th>
                <th scope="col" class="w-0 py-3 font-normal text-right">Info</th>
              </tr>
            </thead>
            <tbody class="border-b border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
              <tr>
                <td class="py-6 pr-8">
                  <div class="flex items-center">
                    <img src="https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg" alt="Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip." class="w-16 h-16 object-center object-cover rounded mr-6"/>
                    <div>
                      <div class="font-medium text-gray-900">Machined Pen and Pencil Set</div>
                      <div class="mt-1 sm:hidden"></div>
                    </div>
                  </div>
                </td>
                <td class="hidden py-6 pr-8 sm:table-cell">$70.00</td>
                <td class="hidden py-6 pr-8 sm:table-cell">Delivered Jan 25, 2021</td>
                <td class="py-6 font-medium text-right whitespace-nowrap">
                  <a href="#" class="text-indigo-600">View<span class="hidden lg:inline"> Product</span><span class="sr-only">, Machined Pen and Pencil Set</span></a>
                </td>
              </tr>

              {/* <!-- More products... --> */}
            </tbody>
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