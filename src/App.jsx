import Header from "./components/Day02/Layout/Header.jsx";

import Main from "./components/Day04/Layout/Main.jsx";

import Footer from "./components/Day02/Layout/Footer.jsx";

function App() {
  /* Consumed promise only */

  fetch("https://api.ipify.org?format=json")
    .then((response) => {
      if (!response.ok)
        throw new Error(`Error in the server: ${response.status}`);
      else return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((e) => console.error(e));

  /* Async/Await form */

  async function consumeAPI() {
    try {
      const response = await fetch("https://api.ipify.org?format=json");

      if (!response.ok)
        return new Error(`Error in the server ${response.status}`);

      const data = await response.json();

      console.log(data);
      return data;
    } catch (e) {
      console.error(e);
    }
  }

  async function appInit() {
    const value = await consumeAPI();
    console.log(value);
  }

  appInit();

  return (
    <>
      <div className="flex flex-col items-center relative h-dvh">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
