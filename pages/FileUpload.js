import axios from 'axios'

import React, { useState } from 'react'

const FileUpload =  () => {
const [images, setImages] = useState([])
const [areImagesLoaded, setareImagesLoaded] = useState(false)

    const uploadHandler = async (event)=>{
const files = event.target.files
console.log(files);

let urls=[]; 
for  (let file of files){
const formData =  new FormData()
formData.append('file', file)
formData.append('upload_preset', 'he-uploads');

await axios.post('https://api.cloudinary.com/v1_1/dg8bm9sad/image/upload', formData)
.then((res)=> {
  console.log('request has been sent');
urls.push(res.data.secure_url)
}).catch((err)=> {
    console.error(err)
   
})
}
 setImages(urls)
 setareImagesLoaded(true)

    }

const sendBack =  ()=>{
    let object={
        images
    }



  axios.post("/api/server", {
  images
 }, ).then(function(response) {
   console.log(response);
 }).catch(function(error) {
   console.log(error);
 })


    
}

  return (
    <>
    
     <div   className="flex justify-center items-center  mx-20">
    <label for="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col justify-center items-center pt-5 pb-6">
            <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input onChange={(event)=>uploadHandler (event)} id="dropzone-file" type="file" className="hidden" multiple />
    </label>
    {
areImagesLoaded ?    <button onClick={()=> sendBack()} >submit</button> : ""

    }
</div> 
    
    </>
  )
}

export default FileUpload