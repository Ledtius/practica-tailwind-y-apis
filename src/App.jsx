import { useEffect } from "react";

import Header from "./components/Day02/Layout/Header.jsx";

import Main from "./components/Day02/Layout/Main.jsx";

import Footer from "./components/Day02/Layout/Footer.jsx";

import loaderStyles from "./styles/Loader.module.css";

function App() {
  // const receivedMessage = () => {
  //   let proptMessage = "default";

  //   while (proptMessage) {
  //     proptMessage = prompt("Writing a message");
  //     console.log(proptMessage);
  //   }

  // };

  // receivedMessage();

  const repeatMessage = (message = "Default Msg", repeat = 2, callback) => {
    const arrayMsgRepeat = [];
    for (let index = 1; index <= repeat; index++) {
      arrayMsgRepeat.push(message);
    }
    callback(arrayMsgRepeat);
  };

  const printMessage = (arrayMsg) => {
    arrayMsg.forEach((message, index) => {
      console.log(`${index + 1}) ${message}`);
    });
  };

  useEffect(() => {
    repeatMessage("Hola", 6, printMessage);
  }, []);

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
