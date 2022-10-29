import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FcCheckmark } from "react-icons/fc";

import axios from "axios";

const PostForm = () => {
  const { data: session, status } = useSession();
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [url, setUrl] = useState(" ");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState(" ");
  const [prePrice, setPrePrice] = useState(0);
  const [areImagesLoaded, setareImagesLoaded] = useState(false);
  const [allowed, setAllowed] = useState(false);
  // const [save, setSave] = useState(false)

  const [userEmail, setUserEmail] = useState(session?.user.email)
  const [userName, setUserName] = useState(session?.user.name)
  const [timix, setTimix] = useState(new Date().toLocaleString().split(',')[0])
  console.log(timix, "timix");
  console.log(userName, "userName");
  console.log(userEmail, "userEmail");
  console.log(allowed, 'allowed');
  console.log(areImagesLoaded, "areImageLoaded");
  // const [acceptedFiles, setacceptedFiles] = useState();
  // console.log(areImagesLoaded, "fddddddddddddddddv");
  // console.log(allowed, "hhhhhhhhhhhhhh");
  // console.log(images, "imagesssssssssssssssss");
  // console.log(title, "title");
  // console.log(description, "description");
  // console.log(category, "categoryyyyyyy");
  // console.log(prePrice, "prePrice");
  // console.log(price, "price");
  // console.log(url, "url");

  const uploadHandler = async (event) => {
    const files = event.target.files;
    console.log(files);

    let urls = [];
    if (files.length > 4) {
      alert("sorry you can choose only max 5 files");
    }

    for (let file of files) {
      if (file.size > 9900000) {
        alert("file too big");
        break;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "he-uploads");

      await axios
        .post(
          "https://api.cloudinary.com/v1_1/dg8bm9sad/image/upload",
          formData
        )
        .then((res) => {
          console.log("request has been sent");
          urls.push(res.data.secure_url);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    setImages(urls);
    setareImagesLoaded(true);
  };

  const sendData = () => {
    axios
      .post("/api/server", {
        title,
        description,
        url,
        price,
        category,
        images,
        prePrice,
        userEmail,
       userName,
       timix
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error, "ffffff");
      });
  };

  useEffect(() => {
    if(

      title.length > 0 &&
      url.length > 0 &&
      description.length > 0 &&
      category.length > 0 &&
      price.length > 0 &&
      prePrice.length > 0 &&
      // userName.length > 0 &&
      timix.length > 0 &&
      images.length > 0 
    ){
      return setAllowed(true)
    }else{

      setAllowed(false);
    }
  
      
  }, [title, url, description, category, price, prePrice, images]);

  return (
    <>
      <div className=" xl:mx-10 xl:my-10 space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Profile
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>

            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Title
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    id="about"
                    name="about"
                    rows="3"
                    className="max-w-lg shadow-sm block w-full xl:h-10 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                  />
                  <p className="mt-2 text-sm text-red-500">
                  {title.length > 5 ? <FcCheckmark />: "*Required"}
                  </p>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Description
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    id="description"
                    name="Description"
                    rows="3"
                    className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                  />
                   <p className="mt-2 text-sm text-red-500">
                  {description.length > 5 ? <FcCheckmark />: "*Required"}
                  </p>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="about"
                  className="block text-sm  font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Current Price
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    id="about"
                    type="number"
                    name="about"
                    rows="3"
                    className="max-w-lg shadow-sm block xl:h-10 w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                  />
                     <p className="mt-2 text-sm text-red-500">
                  {price.length > 1 ? <FcCheckmark />: "*Required"}
                  </p>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Previous Price
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    onChange={(e) => setPrePrice(e.target.value)}
                    id="about"
                    type="number"
                    name="about"
                    rows="3"
                    className="max-w-lg shadow-sm block w-full xl:h-10 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                  />
                     <p className="mt-2 text-sm text-red-500">
                  { price.length <= prePrice.length  &&  price < prePrice  ? <FcCheckmark />: "*Required"}
                  </p>
                </div>
              </div>

              <div className="sm:grid  sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="country"
                  className="block  text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Category
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="max-w-lg h-10 block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  >
                    <option >All Type</option>
                    <option >Clothes</option>
                    <option >Pets</option>
                    <option >Grocery</option>
                    <option >Tech</option>
                    <option >Gaming</option>
                    <option >Food</option>
                    <option >Travel</option>
                  </select>
                  <p className="mt-2 text-sm text-red-500">
                  {category.length > 3 ? <FcCheckmark />: "*Required"}
                  </p>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Online Shop
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      workcation.com/
                    </span>
                    <input
                      onChange={(e) => setUrl(e.target.value)}
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="flex-1 xl:h-10 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                    />
                  </div>
                  <p className="mt-2 text-sm text-red-500">
                  {url.length > 5 ? <FcCheckmark />: "*Required"}
                  </p>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Product images
                </label>
                <div className="mt-1 mb-2 flex flex-col sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex  text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={(event) => uploadHandler(event)}
                            multiple
                            accept="image/png, image/gif, image/jpeg"
                            // className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                        
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                      <p className="text-xs text-gray-500">
                        (4 files are the maximum number <br></br>of files you
                        can drop here)
                      </p>
                    </div>
                  </div>
                  <div className="flex  justify-center ">
                {/* {images.map((link, index) => (
                  <div key={index}>
                    <img className="w-40 h-40" src={link} />
                  </div>
                ))} */}
                </div>
                <div>

<p className=" my-1 absolute text-sm text-red-500">
        {images.length > 2 && images.length < 5 ? <FcCheckmark />: "*Required"}
        </p>
  </div>
              </div>
           
              
              </div>
              
            </div>
         
          </div>
          <div className="pt-5">
            <div className="flex justify-end">
            <Link href='/' ><button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button></Link>

           <button
            
                disabled={ allowed === false && areImagesLoaded === false }
                onClick={() => sendData()}
                type="submit"
                className={`ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                  allowed && areImagesLoaded
                    ? "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 "
                    : "bg-slate-500 "
                }  focus:outline-none focus:ring-2 focus:ring-offset-2 `}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="max-w-4xl my-52 p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
    <h1 className="text-xl font-bold text-white capitalize dark:text-white">Account settings</h1>
    <div>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-white dark:text-gray-200" htmlFor="username">Title</label>
                <input id="username" type="text" onChange={(e=> setTitle(e.target.value))} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">http://</span>
                  <input  type="text" onChange={(e=> setUrl(e.target.value))} name="company-website" id="company-website" className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="www.example.com"/>
                </div>

            <div>
                <label className="text-white dark:text-gray-200" htmlFor="password">Price</label>
                <input min="1" max="5" onChange={(e=> setPrice(e.target.value))} type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

           
            <div>
                <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Select</label>
                <select onChange={(e)=> setCategory(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option>Gaming</option>
                    <option>Tech</option>
                    <option>Groceries</option>
                    <option>Clothes</option>
                </select>
            </div>
        
            <div>
                <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">previous price</label>
                <input  onChange={(e)=> setPrePrice(e.target.value)}  type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation"> Description </label>
                <textarea id="textarea" onChange={(e=> setDescription(e.target.value))} type="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>
            <div>
                <label className="block text-sm font-medium text-white">
                Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span className="">Upload a file</span>
                      <input  accept="image/png, image/jpeg, image/jpg"  id="file-upload" onChange={(event)=>uploadHandler (event)} multiple name="file-upload" type="file" className="sr-only"/>
                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
        </div>

        <div className="flex justify-end mt-6">
         

            <button disabled={!dataAllowed} className={` ${!dataAllowed && "cursor-progress"} px-6 py-2 leading-5 text-white transition-colors duration-200 transform ${!dataAllowed ? "bg-slate-500  rounded-md  focus:outline-none ": "bg-pink-500  rounded-md hover:bg-pink-700 focus:outline-none"}  focus:bg-gray-600`}  onClick={()=> sendData()} >Save</button> 

        </div>
    </div>
</section> */}
    </>
  );
};

export default PostForm;
