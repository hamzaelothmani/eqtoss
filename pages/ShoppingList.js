import React, { useState } from "react";
import Cards from "./Cards";
const data = [
    { img: "pet.png", name: "express", desc: "pet", price: 999, id:2, category: 'Men'  },
    { img: "resto.png", name: "mongoose", desc: "retsto", price: 888, id:1, category: 'Women' },
    { img: "tech.png", name: "middleware", desc: "tech", price: 222, id:3, category: 'Children' },
  ]

const ShoppingList = () => {
  const [product, setProduct] = useState(data);
  const [input, setInput] = useState('')
  console.log(input,'hamza');

  const filterResault=(item)=>{
    const resault = data.filter((pro)=>
      pro.category === item
    )
    setProduct(resault)
  }




  return (
    <>
      <div class="w-full md:w-2/3 shadow m-auto p-5 rounded-lg bg-white">
        <div class="relative">
          <div class="absolute flex items-center ml-2 h-full">
            <svg
              class="w-4 h-4 fill-current text-primary-gray-dark"
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
            class="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>

        <div class="flex items-center justify-between mt-4">
          <p class="font-medium">Filters</p>

          <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
            Reset Filter
          </button>
        </div>

        <div className="m-auto">
          <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            <button onClick={()=>setProduct(data)}>All Type</button>
            <button onClick={()=>filterResault('Men')}>Men</button>
            <button onClick={()=>filterResault('Women')}>Women</button>
            <button onClick={()=>filterResault('Children')}>Children</button>
            
            <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">All Type</option>
              <option value="for-sale" onClick={()=>filterResault('Men')} >Men</option>
              <option value="for-sale">Women</option>
              <option value="for-sale">Children</option>
            </select>
          

            <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">Furnish Type</option>
              <option value="fully-furnished">Fully Furnished</option>
              <option value="partially-furnished">Partially Furnished</option>
              <option value="not-furnished">Not Furnished</option>
            </select>

           
          </div>
        </div>
      </div>
      {product.sort((a, b)=> b.price - a.price).sort((a, b)=> b.id - a.id ).filter((val)=>{
        if(input== "")return val
        else if(val.desc.toLowerCase().includes(input.toLowerCase()) || val.name.toLowerCase().includes(input.toLowerCase()) ) return val
       
      }).map((ele)=> (
        <Cards key={ele.id} price={ele.price} img={ele.img}  desc={ele.desc} />
      ))}
      
    </>
  );
};

export default ShoppingList;
