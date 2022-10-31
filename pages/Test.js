import React, { useState, useRef } from "react";
import Com from "./Com";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const Test = () => {
  const [input, setInput] = useState("");
  const [value, setValue] = useState([]);
  console.log(value.date);
  const getValue = (e) => {
    setInput(e.target.value);
  };

  const addValue = () => {
    if (input.length > 0) {
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
      <div className="flex items-start space-x-4 xl:mx-52 sm:mx-10 ">
        <div className="min-w-0  flex-1">
          <div action="#" className="relative">
            <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500  focus-within:ring-indigo-500">
              <label htmlFor="comment" className="sr-only">
                Add your comment
              </label>
              <textarea
                  value={input}
                  onChange={getValue}
                rows="3"
                name="comment"
                id="comment"
                className="block w-full py-3 border-0 resize-none focus:ring-0 sm:text-sm"
                placeholder="Add your comment..."
              ></textarea>

              {/* <!-- Spacer element to match the height of the toolbar --> */}
            
            </div>

            <div className="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between">
              <div className="flex items-center space-x-5">
                <div className="flex items-center"></div>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={() => addValue()}
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex mx-auto items-center justify-center shadow-sm  mt-20  mb-4 max-w-full">
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
      </div> */}

{value.map((ele) => (
        <Com
        key={uuidv4()}
        ele={ele}
        name={ele.name}
        date={ele.date}
        state={ele.state}
        text={ele.text}
        />
      ))}
    </>
  );
};

export default Test;
