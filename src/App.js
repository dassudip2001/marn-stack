import React from "react";
import ReactDOM from "react-dom/client";
import Title from "./components/Title";
import Body from "./components/Body";
import Footer from "./components/Footer";

const title = <h1>hello world</h1>;

const HeaderComonent = () => {
  return (
    <>
      <Title />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComonent />);
