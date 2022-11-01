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


{value.sort((a, b)=> b - a).map((ele) => (
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
