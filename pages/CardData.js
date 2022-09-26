import React, {useState} from 'react'
import axios from 'axios';
import api from '../lib/api';
import FileUpload from './FileUpload';


// export async function getStaticProps() {
//   const res = await axios.get('http://localhost:3000/api/server');
//   const stringRes = res.data
//   return {
//       props: {
//           data: stringRes
//       }
//   };
// }

// export async function getStaticProps(){
//   try {
//     const result = await axios.get('http://localhost:3000/api/server');
//     const data = result.data;
//     return {
//         props: {
//             data: data
//         }
//     }
// } catch (error) {
//     console.log(error);
// }
// }

const PostForm = () => {
  // console.log(data,"hamza");
  // const [name, setName] = useState('')
  // const [description, setDescription] = useState('')
const [image, setImage] = useState([{}])


const removeFile =(filename)=>{
setFiles(image?.filter(image=> image.name !== filename))
}
// console.log(file);
// const sendData =()=>{

//   axios.post('/api/server', {
//    name, description
    
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }

// const submitFile=(e)=>{
// e.preventDefault()

// const FormaData = new FormData()
// FormaData.append('file', file)

// axios.post('//localhost:8000/upload', FormaData).then(()=>{
//   console.log('Success');
// }).catch(()=>{
//   console.log('Error');
// })
// } 
  return (
    <>
<div>
  <p>upload file</p>
  <FileUpload image={image} removeFile={removeFile} setImage={setImage} />
</div>

{/* form */}

    {/* <form  onSubmit={submitFile} className="flex justify-center items-center  mx-20">
    <label for="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col justify-center items-center pt-5 pb-6">
            <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input onChange={(e)=> setFile(e.target.files[0])} id="dropzone-file" type="file" className="hidden" />
    </label>
        <button>submit</button>
</form>  */}
{/* {file.map(item=>(
  <img src={item.name} />
))} */}

{/* input */}

{/* <div className='m-auto text-center'>

<div className='my-20'>
  <input onChange={(e)=> setName(e.target.value)} type="text" autoFocus placeholder='name'/>
</div>
<div className='my-20'>
  <input onChange={(e)=> setDescription(e.target.value)}  type="text" autoFocus placeholder='email' />
</div>
<button onClick={()=>sendData()} className='m-auto my-10 p-4 bg-orange-400' >send</button>
</div> */}
    </>
  )
}

export default PostForm