import React from "react";
import axios from "axios";

const Poster = () => {
  const sendShit = async () => {
    await axios
      .patch(
        "/api/6351b8a2193ff6fcd8bd887a",
        { savePro: "6351b8a2193ff6fcd8bd887a" },
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
  };
  return (
    <>
      <h1>hello</h1>
      <button onClick={() => sendShit()}> click shiiit </button>
    </>
  );
};

export default Poster;
