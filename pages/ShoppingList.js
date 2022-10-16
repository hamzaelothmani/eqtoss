import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
// const data = [
//     { img: "pet.png", name: "express", desc: "pet", price: 999, id:2, category: 'Men'  },
//     { img: "resto.png", name: "mongoose", desc: "retsto", price: 888, id:1, category: 'Women' },
//     { img: "tech.png", name: "middleware", desc: "tech", price: 222, id:3, category: 'Children' },
//   ]

const ShoppingList = () => {
  // const [product, setProduct] = useState(data);
  const [input, setInput] = useState('')
  const [formData, setFormData] = useState([])
  const [pageCount, setPageCount] = useState(5)
  const [page, setPage] = useState(0)
  console.log(page, "pageeeeeeee");
  console.log(formData, "hahahahahahaha");

  // console.log(input,'hamza');
  const handlePrevious=()=>{
    setPage((p)=>{
      if(p=== 1) return p
      return p - 1
    })
  }
  const handleNext=()=>{
setPage((n)=>{
  if(n=== pageCount ) return n
  return n + 1

})
  }

  const filterResault=(item)=>{
    const resault = data.filter((pro)=>
      pro.category === item
    )
    setProduct(resault)
  }

// useEffect(()=>{
//   axios
//     .get("/api/server")
//     .then(function(response) {
//       setFormData(response.data.data)
//         console.log(response)
//     })
//     .catch(function(error) {
//         console.log((error))
//     });
// }, [])
useEffect(() => {
  ;(async () => {
    if (!input) {
      axios.get(`/api/server?page=${page}`)
          .then(function(response) {
            setFormData(response.data.data)
              console.log(response)
          })
          .catch(function(error) {
              console.log((error))
          });
      
    }else{

      const { data } = await axios.get('/api/server/search', {
        params: {
          title: input,
        },
      })
      setFormData(data)
    }

  })()

}, [input, page])



  return (
    <>
      <div className="w-full mt-4 md:w-2/3 shadow m-auto p-5 rounded-lg bg-white">
        <div className="relative">
          <div className="absolute flex items-center ml-2 h-full">
            <svg
              className="w-4 h-4 fill-current text-primary-gray-dark"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
            </svg>
          </div>

          <input
          onChange={(e)=> setInput(e.target.value)}
            type="text"
            placeholder="Search by listing, location, bedroom number..."
            className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="font-medium">Filters</p>

          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
            Reset Filter
          </button>
        </div>

        <div className="m-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
  
            
            <select onChange={()=>filterResault('Men')} className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">All Type</option>
              <option value="for-sale" >Clothes</option>
              <option value="for-sale">Pets</option>
              <option value="for-sale">Grocery</option>
              <option value="">Tech</option>
              <option value="for-sale" >Gaming</option>
              <option value="for-sale">Food</option>
              <option value="for-sale">Travel</option>
            </select>
          

            <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">Furnish Type</option>
              <option value="fully-furnished">Fully Furnished</option>
              <option value="partially-furnished">Partially Furnished</option>
              <option value="not-furnished">Not Furnished</option>
            </select>

           
          </div>
        </div>
      </div>

{
  formData.map((elements, index)=> (

    <Cards elements={elements} key={index} /> 
  )
  )
}
{/* <!-- This example requires Tailwind CSS v2.0+ --> */}

<nav class="border-t xl:mx-20 border-gray-200 px-4 flex items-center justify-between sm:px-0">
  <div class="-mt-px w-0 flex-1 flex">
    <button disabled={page === 1} onClick={handlePrevious} href="#" class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
      {/* <!-- Heroicon name: solid/arrow-narrow-left --> */}
      <svg class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
      Previous
    </button>
  </div>
  <div class="hidden md:-mt-px md:flex">
    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"> 1 </a>
    {/* <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" --> */}
    <a href="#" class="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium" aria-current="page"> 2 </a>
    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"> 3 </a>
    {/* <span class="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"> ... </span> */}
    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"> 8 </a>
    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"> 9 </a>
    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"> 10 </a>
  </div>
  <div class="-mt-px w-0 flex-1 flex justify-end">
    <button disabled={page === pageCount} onClick={handleNext} href="#" class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
      Next
      {/* <!-- Heroicon name: solid/arrow-narrow-right --> */}
      <svg class="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</nav>


      {/* {
      product.sort((a, b)=> b.price - a.price).sort((a, b)=> b.id - a.id ).filter((val)=>{
        if(input== "")return val
        else if(val.desc.toLowerCase().includes(input.toLowerCase()) || val.name.toLowerCase().includes(input.toLowerCase()) ) return val
       
      })
      .map((ele)=> (
        
       
        <Cards  price={ele.price} img={ele.img}  desc={ele.desc} />
  
      ))} */}
 <div>
  
 </div>
    </>
  );
};

export default ShoppingList;
