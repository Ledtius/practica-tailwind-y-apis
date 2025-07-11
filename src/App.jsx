import Header from "./components/Day02/Layout/Header.jsx";

import Main from "./components/Day02/Layout/Main.jsx";

import Footer from "./components/Day02/Layout/Footer.jsx";

function App() {
  const simulateRequest = (nameResource, callback) => {
    console.log("Loading...");
    setTimeout(() => {
      callback(nameResource);
    }, Math.round(Math.random() * 3000));
  };

  const resultRequest = (value) => {
    console.log(`Resource ${value} loaded`);
  };

  simulateRequest("Name", resultRequest);

  // console.log();
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
