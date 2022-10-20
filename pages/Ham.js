import axios from 'axios'
import { useSession } from 'next-auth/react';
import React, {useEffect, useState} from 'react'
import { v4 as uuidv4 } from "uuid";


const Ham = () => {
  const { data: session, status } = useSession();
  console.log(session, 'ktvitbigvbti');

 

 const sendData= async ()=>{

   if(session){
    console.log(session, "hamza");
  console.log(session,'hello baby');
     await axios
       .post("/api/server/saveProduct", {
      name : "hello",
      email: "hamziix200@gmail.com",
      id: uuidv4()
      
       })
       .then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error.response.data.error.keyValue.email, "ffffff");
       });
   }  
 }
  
  


  return (
    <>
    <button onClick={()=>sendData()} >send</button>
    </>
  )
}

export default Ham