import React, {useState} from 'react'
import axios from 'axios'

const Store = () => {
  const [name, setName] = useState('')
const [email, setEmail] = useState(["medelothmani481@gmail.com", "hamzasimiller@gmail.com", "medamal2002@gmail.com"])
const [message, setMessage] = useState('')

const sendData = ()=>{
console.log('sending');
  axios.post('/api/contact', {
    email
    })
    .then(function (response) {
      console.log(response, 'done');
    })
    .catch(function (error) {
      console.log(error);
    });
}


  return (
    <>
<div className='flex items-center m-20 gap-4'>
  <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='name...' autoFocus/>
  <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='email...' autoFocus/>
  <textarea onChange={(e)=>setMessage(e.target.value)} type="text" placeholder='text..' autoFocus/>

  <button onClick={()=> sendData()} >submit</button>
</div>
    </>
  )
}

export default Store


// import React from 'react'
// import { useContext } from 'react'
// import { TodosContext } from './contexts/Context'

// const Store = () => {
//   const {todos, setTodos} = useContext(TodosContext)

//   return (
//     <div>globalState {todos} </div>

//   )
// }

// export default Store
