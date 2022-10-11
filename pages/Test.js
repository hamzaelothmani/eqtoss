import React, { useState, useRef } from "react";
import Com from "./Com";


const Test = () => {
  const [input, setInput] = useState("");
  const [value, setValue] = useState([]);
  console.log(value.date);
  const getValue = (e) => {
    setInput(e.target.value);
  };

  const addValue = () => {
    if(input.length > 0){
      setValue([
        ...value,
        {
          name: "hamza",
          text: input,
          id: Math.random() * 1000,
          state: false,
          date: new Date().toLocaleString(),
        },
      ]);
      setInput("");
    }
 
  };

  return (
    <>


      <div className="flex mx-auto items-center justify-center shadow-sm  mt-20  mb-4 max-w-full">
        <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
          <div className="flex flex-wrap -mx-3 mb-6">
            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
              Add a new comment
            </h2>
            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-10 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                autoFocus
                value={input}
                onChange={getValue}
                placeholder="Type Your Comment"
                required
              ></textarea>
            </div>
            <div className="w-full md:w-full flex items-start px-3">
              <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto"></div>
              <div className="-mr-1">
                <button
                  onClick={() => addValue()}
                  className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                >
                
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      
      {value.map((ele) => (
        <Com
          ele={ele}
          name={ele.name}
          date={ele.date}
          state={ele.state}
          text={ele.text}
          id={ele.id}
        />
      ))} 


    </>
  );
};

export default Test;
