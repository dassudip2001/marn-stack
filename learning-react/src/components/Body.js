import React, { useState, useEffect } from "react";
import Create from "./Create";
import axios from "axios";
const Body = () => {
  const [loading, setLoading] = useState(false);
  const URI = "'https://jsonplaceholder.typicode.com/todos";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Create />
      <div className="container">
        <h1>Todos</h1>
        {/* {loading ? (
          <p>Loading...</p>
        ) : ( */}
        <ul>
          {data.map((todo) => (
            <li key={todo.id}>
              <strong>{todo.title}</strong>
              <p>{todo.completed ? "Completed" : "Not Completed"}</p>
            </li>
          ))}
        </ul>
        {/* // )} */}
      </div>
    </>
  );
};

export default Body;
