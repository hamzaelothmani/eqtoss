import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import Router from 'next/router';
import { useSession } from "next-auth/react";
import { BsArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs";


const ShoppingList = ({result}) => {
  

  // const [product, setProduct] = useState(data);
  const { data: session, status } = useSession();
  const [input, setInput] = useState("");
  const [formData, setFormData] = useState([]);
  const [pageCount, setPageCount] = useState(5);
  const [page, setPage] = useState(0);
  const [sortt, setSortt] = useState("Date");
  const [filterr, setFilterr] = useState("All");
  const [orderBy, setOrderBy] = useState(-1);
  const [patch, setPatch] = useState([]);
  const [putin, setPutin] = useState()
  console.log(putin, "putinnnnnnnnn");
  // console.log(patch, "zzzzzzzzzzzz");
  // console.log(page, "pageeeeeeee");
  // console.log(formData, "hahahahahahaha");
  // console.log(session?.user.email, "hamza hamza");
  useEffect(()=>{
    if(session){

      const filerDatix = result.data.filter((ele=>ele.saveEmail == session?.user.email))
      // console.log(filerDatix, "filtriiiiix");
              const done = filerDatix.map((item)=> item.savePro)
              setPutin(...done)
    }
  }, [result, session])
  const handlePrevious = () => {
    setPage((p) => {
      if (p === 0) return p;
      return p - 1;
    });
  };
  const handleNext = () => {
    setPage((n) => {
      if (n === pageCount) return n;
      return n + 1;
    });
  };

  const filterResault = (item) => {
    const resault = data.filter((pro) => pro.category === item);
    setProduct(resault);
  };




  useEffect(() => {
    (async () => {
      if (!input) {
        axios
          .get(
            `/api/server?page=${page}&filterr=${filterr}&sortt=${sortt}&orderBy=${orderBy}`
          )
          .then(function (response) {
            setFormData(response.data.data);
            console.log(response.pagination.pageCount, 'hawhawhaw');
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        const { data } = await axios.get("/api/server/search", {
          params: {
            title: input,
          },
        });
        setFormData(...data);
      }
     
    })();
  }, [input, page, filterr, sortt, orderBy]);


console.log(formData.map(ele=> ele.commt), 'comments');
      

  const patchData = async (id) => {
    console.log("patchiiiiix");
    if(session){

      await axios
        .patch(
          `/api/${session?.user.email}`,
          { id },
          {
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error, "ffffff");
        });
    }

    
  };
  const deleteData = async (id) => {
  
    if(session){

      await axios
        .put(
          `/api/${session?.user.email}`,
          { id },
          {
            headers: { "Content-type": "application/json" },
          }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error, "ffffff");
        });
    }
    
  };
  return (
    <>
      <div id="carts" className="w-full mt-4 md:w-2/3 shadow m-auto p-5 rounded-lg bg-white">
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
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search by listing, location, bedroom number..."
            className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="font-medium">Filters</p>

         
        </div>

        <div className="m-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            <select
              onChange={(e) => setFilterr(e.target.value)}
              className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            >
              <option>All</option>
              <option>Clothes</option>
              <option>Pets</option>
              <option>Grocery</option>
              <option>Tech</option>
              <option>Gaming</option>
              <option>Food</option>
              <option>Travel</option>
            </select>

            <select
              onChange={(e) => setSortt(e.target.value)}
              className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            >
              <option>Date</option>
              <option>price</option>
            </select>
            <select
              onChange={(e) => setOrderBy(e.target.value)}
              className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            >
              <option value={1}>lowest {sortt} </option>
              <option value={-1}>highest {sortt} </option>
            </select>
          </div>
        </div>
      </div>

      { formData.map((elements, index) => (
        <Cards
          elements={elements}
          patch={patch}
          id={elements._id}
          key={index}
          patchData={patchData}
          deleteData={deleteData}
          putin={putin}
          // boolix={boolix}
          session={session}
        />
      ))}
   

      <nav className="border-t xl:mx-20 border-gray-200 px-4 flex items-center justify-between sm:px-0">
        <div className="-mt-px w-0 flex-1 flex">
          <button
            disabled={page === 0}
            onClick={handlePrevious}
            href="#"
            className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          >
            {/* <!-- Heroicon name: solid/arrow-narrow-left --> */}
            <svg
              className="mr-3 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Previous
          </button>
        </div>
        {/* <div className="hidden md:-mt-px md:flex">
        
          <a
            href="#"
            className="border-transparent  opacity-50 text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          >
            
           {page > 1 ? page - 1 : ""}
          </a>
          <a
            href="#"
            className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          >
            
           {page}
          </a>
          <a
            href="#"
            className="border-transparent opacity-50 text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          >
            
            {page + 1 }
          </a>
         
        </div> */}
        <div className="-mt-px w-0 flex-1 flex justify-end">
          <button
            disabled={page === pageCount}
            onClick={handleNext}
            href="#"
            className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          >
            Next
            {/* <!-- Heroicon name: solid/arrow-narrow-right --> */}
            <svg
              className="ml-3 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>

    </>
  );
};

export default ShoppingList;

export const getServerSideProps = async (context) => {
  const res = await fetch('http://localhost:3000/api/server/saveProduct')
  const result = await res.json()
  
  return {props: {result}}
}
