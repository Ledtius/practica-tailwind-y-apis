import { useEffect } from "react";

import Header from "./components/Day02/Layout/Header.jsx";

import Main from "./components/Day02/Layout/Main.jsx";

import Footer from "./components/Day02/Layout/Footer.jsx";

import loaderStyles from "./styles/Loader.module.css";

function App() {
  const sayHi = (name, callback) => {
    console.log("Waiting...");

    setTimeout(() => {
      callback(name);
    }, 1500);
  };

  const printName = (name) => {
    console.log(`¡Hey ${name}!\nHow are you? `);
  };

  sayHi("Calet", printName);
  useEffect(() => {}, []);

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
