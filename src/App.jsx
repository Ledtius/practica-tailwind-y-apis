import { useEffect } from "react";

import Header from "./components/Day02/Layout/Header.jsx";

import Main from "./components/Day02/Layout/Main.jsx";

import Footer from "./components/Day02/Layout/Footer.jsx";

import loaderStyles from "./styles/Loader.module.css";

function App() {
  const calculate = (n1, n2, callback) => {
    console.log(`Processing the operation between ${n1} and ${n2}`);

    setTimeout(() => {
      callback(n1, n2);
    }, 1500);
  };

  const result = (v1, v2) => {
    const operations = {
      sum: v1 + v2,
      subtract: v1 - v2,
      multi: v1 * v2,
      div: v1 / v2,
    };

    console.log(`The result of the operation is: ${operations.subtract}`);
  };

  calculate(1,2 ,result)

  return (
    <>
      <div className="flex flex-col items-center  h-dvh">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
