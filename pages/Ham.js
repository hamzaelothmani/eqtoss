// import axios from 'axios'
// import React, {useState, useEffect} from 'react'


// const Ham = ({savedDt}) => {
//   console.log(savedDt, 'hhhhhhhhhjkedchkjedckekucg');
//   const [display, setDisplay] = useState([])


       

//   return (
//     <>
//     {display.map((item, index)=>( 
//       <div className="bg-gray-50">


// <main className="py-24">
//   <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
//     <div className="max-w-2xl mx-auto px-4 lg:max-w-4xl lg:px-0">
//       <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">products posted by </h1>
//       <p className="mt-2 text-sm text-gray-500">Check the status of recent orders, manage returns, and discover similar products.</p>
//     </div>
//   </div>

//   <section aria-labelledby="recent-heading" className="mt-16">
//     <h2 id="recent-heading" className="sr-only">Recent orders</h2>
//     <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
//       <div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
//         <div className="bg-white border-t border-b border-gray-200 shadow-sm sm:rounded-lg sm:border">
//           <h3 className="sr-only">Order placed on <time dateTime="2021-07-06">Jul 6, 2021</time></h3>



//           {/* <!-- Products --> */}
//           <h4 className="sr-only">Items</h4>
//           <ul role="list" className="divide-y divide-gray-200">
//             <li className="p-4 sm:p-6">
//               <div className="flex items-center sm:items-start">
//                 <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden sm:w-40 sm:h-40">
//                   <img src="https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg" alt="Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps." className="w-full h-full object-center object-cover"/>
//                 </div>
//                 <div className="flex-1 ml-6 text-sm">
//                   <div className="font-medium text-gray-900 sm:flex sm:justify-between">
//                     <h5>Micro Backpack</h5>
//                     <p className="mt-2 sm:mt-0">$70.00</p>
//                   </div>
//                   <p className="hidden text-gray-500 sm:block sm:mt-2">Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.</p>
//                 </div>
//               </div>

//               <div className="mt-6 sm:flex sm:justify-between">
//                 <div className="flex items-center">
//                   {/* <!-- Heroicon name: solid/check-circle --> */}
//                   <svg className="w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
//                   </svg>
//                   <p className="ml-2 text-sm font-medium text-gray-500">Delivered on <time datetime="2021-07-12">July 12, 2021</time></p>
//                 </div>

//                 <div className="mt-6 border-t border-gray-200 pt-4 flex items-center space-x-4 divide-x divide-gray-200 text-sm font-medium sm:mt-0 sm:ml-4 sm:border-none sm:pt-0">
//                   <div className="flex-1 flex justify-center">
//                     <a href="#" className="text-indigo-600 whitespace-nowrap hover:text-indigo-500">View product</a>
//                   </div>
//                   <div className="flex-1 pl-4 flex justify-center">
//                     <a href="#" className="text-indigo-600 whitespace-nowrap hover:text-indigo-500">Buy again</a>
//                   </div>
//                 </div>
//               </div>
//             </li>

//             {/* <!-- More products... --> */}
//           </ul>
//         </div>

//         {/* <!-- More orders... --> */}
//       </div>
//     </div>
//   </section>
// </main>


// </div>
//     ))
    
//     }
//     </>
//   )
// }

// export default Ham


// // import axios from 'axios'
// // import { useSession } from 'next-auth/react';
// // import React, {useEffect, useState} from 'react'
// // import { v4 as uuidv4 } from "uuid";


// // const Ham = () => {
// //   const { data: session, status } = useSession();
// //   console.log(session, 'ktvitbigvbti');

 

// //  const sendData= async ()=>{

// //    if(session){
// //     console.log(session, "hamza");
// //   console.log(session,'hello baby');
// //      await axios
// //        .post("/api/server/saveProduct", {
// //       name : session.user.name,
// //       email: session.user.email,
// //       id: uuidv4()
      
// //        })
// //        .then(function (response) {
// //          console.log(response);
// //        })
// //        .catch(function (error) {
// //          console.log(error.response.data.error.keyValue.email, "ffffff");
// //        });
// //    }  
// //  }
  
  


// //   return (
// //     <>
// //     <button onClick={()=>sendData()} >send</button>
// //     </>
// //   )
// // }

// // export default Ham