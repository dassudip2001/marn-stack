import React, { useState, useEffect } from "react";
import axios from "axios";
const Body = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("rahul");
  const [data, setData] = useState(null);
  // fetch data from api
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  }, []);
  return (
    <>
      Hello Body
      <p>{count}</p>
      <p>{name}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <button onClick={() => setName("Sudip")}>cheange name</button>
    </>
  );
};

export default Body;
