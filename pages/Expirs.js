import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSession } from "next-auth/react";

const Expirs = () => {
  const { data: session, status } = useSession()
  const [hamza, setHamza] = useState('on the right way')

console.log(session);
// console.log(data, "daaaaaa");
      
      
const patchData = async () => {
  console.log("patchiiiiix");


    await axios
      .patch(
        `/api/server/635d7d5ade7c613acbf62796`,
         {hamza} ,
        {
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      )
      .then(function (response) {
        console.log(response);
        console.log(response.data.data, "ffffffff");
      })
      .catch(function (error) {
        console.log(error, "eeeeeeee");
      });
  
}
const deleteee = async () => {
  console.log("patchiiiiix");


    await axios
      .put(
        `/api/server/635d7d5ade7c613acbf62796`,
         {hamza} ,
        {
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      )
      .then(function (response) {
        console.log(response.data.data);
        console.log(response, "ffffffff");
      })
      .catch(function (error) {
        console.log(error, "eeeeeeee");
      });
  
}
   
  return (
    <>
    <div className='flex justify-around'>
<button onClick={()=> patchData ()} >click</button>
<button onClick={()=> deleteee ()} >delete</button>
<h1></h1>
    </div>
    </>
  )
}

export default Expirs