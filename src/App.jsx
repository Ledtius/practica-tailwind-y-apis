import Header from "./components/Day02/Layout/Header.jsx";

import Main from "./components/Day04/Layout/Main.jsx";

import Footer from "./components/Day02/Layout/Footer.jsx";

function App() {
  /* Async/Await form */
  const two = (resp) => {
    return resp.json();
  };

  async function proveSomething() {
    try {
      const one = await fetch("https://api.ipify.org?format=json");

      const ttwo = await two(one);

      console.log(ttwo);
    } catch (e) {
      console.error(e);
    }
  }

  proveSomething();

  /* Consumed promise only */
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((e) => console.error(e));

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
