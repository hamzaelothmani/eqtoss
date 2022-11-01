import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";





const SavedProducts = ({people}) => {
  console.log(people.data.map(ele=> ele.savePro[0]), "helloooooooooooo");
  const { data: session, status } = useSession();
const [savedDt, setSavedDt] = useState()
const [appear, setAppear] = useState([])



// useEffect(  () => {
// console.log(people.data, "zzzzzzzz");
//   if(session){

//          console.log(session);
 
//          const filerDatix = people.data.filter((ele=>ele.email == session?.user.email))
//  console.log(filerDatix, "datiiiiiiiiiiiiix");
//          const result = filerDatix.map((item)=> item.savePro)
    
       
//  setSavedDt(...result)

//      } 


      
  
// }, [session])
// console.log(savedDt, 'mongoooooooooseeeeeeeeeeeeeeee');
// // console.log(savedDt, 'gg');
    useEffect(()=>{
      console.log('useeffect enter');
      console.log(people.data, 'geeee');
      if(session){
        console.log(people.data, 'iiiiiiiiiinnnnnnnnn');
console.log(session, 'inside session');

        const filerDatix = people.data.filter((ele=>ele.saveEmail == session?.user.email))
console.log(filerDatix, "filtriiiiix");
        const result = filerDatix.map((item)=> item.savePro)
   
      console.log(result, 'dddddddddddd');
setSavedDt(...result)
console.log(savedDt, "savedt enter");
    } 
   
        // console.log(savedDt, 'saved dddd');
  if(savedDt){
    console.log(savedDt, 'hhhhhhhhhhh');
    let users = [];
    let promises = [];
    for (let i = 0; i< savedDt?.length; i++) {
      promises.push(
        axios.get(`/api/server/${savedDt[i]}` ).then(response => {
          // do something with response
          console.log(response, "response");
          users.push(response);
        })
      )
    }
    
    Promise.all(promises).then(() => setAppear(users) );
  
     console.log(promises, "promises");
     console.log(users, "users");
   
  }
  
    }, [savedDt, session])
  // const sendiix=()=>{

  //   let users = [];
  // let promises = [];
  // for (let i = 0; i< savedDt.length; i++) {
  //   promises.push(
  //     axios.get(`/api/server/${savedDt[i]}` ).then(response => {
  //       // do something with response
  //       console.log(response, "response");
  //       users.push(response);
  //     })
  //   )
  // }
  
  // Promise.all(promises).then(() => setAppear(users) );

  //  console.log(promises, "promises");
  //  console.log(users, "users");
  // }


  return (
    <>
     <div className="bg-gray-50">


<main className="py-24">
  <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
    <div className="max-w-2xl mx-auto px-4 lg:max-w-4xl lg:px-0">
      <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Saved Product</h1>
      <p className="mt-2 text-sm text-gray-500">Check the status of recent orders, manage returns, and discover similar products.</p>
    </div>
  </div>
    
{appear.map((item)=>( 
     

  <section key={uuidv4()} aria-labelledby="recent-heading" className="mt-16">
    <h2 id="recent-heading" className="sr-only">Recent orders</h2>
    <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
        <div className="bg-white border-t border-b border-gray-200 shadow-sm sm:rounded-lg sm:border">
          <h3 className="sr-only">Order placed on <time dateTime="2021-07-06">Jul 6, 2021</time></h3>



          {/* <!-- Products --> */}
          <h4 className="sr-only">Items</h4>
          <ul role="list" className="divide-y divide-gray-200">
            <li className="p-4 sm:p-6">
              <div className="flex items-center sm:items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden sm:w-40 sm:h-40">
                  <img src={item.data.data.images[0]} alt="Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps." className="w-full h-full object-center object-cover"/>
                </div>
                <div className="flex-1 ml-6 text-sm">
                  <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                    <h5>{item.data.data.title}</h5>
                    <p className="mt-2 sm:mt-0">${item.data.data.price}</p>
                  </div>
                  <p className="hidden text-gray-500 sm:block sm:mt-2">Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.</p>
                </div>
              </div>

              <div className="mt-6 sm:flex sm:justify-between">
                <div className="flex items-center">
                  {/* <!-- Heroicon name: solid/check-circle --> */}
                  <svg className="w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="ml-2 text-sm font-medium text-gray-500">Delivered on {item.data.data.timix} <time dateTime="2021-07-12">by {item.data.data.userName}</time></p>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-4 flex items-center space-x-4 divide-x divide-gray-200 text-sm font-medium sm:mt-0 sm:ml-4 sm:border-none sm:pt-0">
                  <div className="flex-1 flex justify-center">
                    <a href="#" className="text-indigo-600 whitespace-nowrap hover:text-indigo-500">View product</a>
                  </div>
                  <div className="flex-1 pl-4 flex justify-center">
                    <a href="#" className="text-indigo-600 whitespace-nowrap hover:text-indigo-500">Buy again</a>
                  </div>
                </div>
              </div>
            </li>

            {/* <!-- More products... --> */}
          </ul>
        </div>

      </div>
    </div>
  </section>
    ))
    
  }
  </main>
  
  
  </div>


    
    </>
  )

}

export default SavedProducts

export const getServerSideProps = async (context) => {
  const res = await fetch('http://localhost:3000/api/server/saveProduct')
  const people = await res.json()
  return {props: {people}}
}