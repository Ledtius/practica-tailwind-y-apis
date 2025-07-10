import Header from "./components/Day01/Layout/Header.jsx";

import Main from "./components/Day01/Layout/Main.jsx";

import Footer from "./components/Day01/Layout/Footer.jsx";

import loaderStyles from "./styles/Loader.module.css";

function App() {
  const user = { name: "Calet" };
  const greetUser = (user) => {
    console.log(user);
  };

  const verifyUser = (callback) => {
    const name = prompt("Taping your name");
    callback(name);
  };

  verifyUser(greetUser);
  return (
    <>
      <div className="flex flex-col items-center justify-between h-dvh">
        <Header />
        <Main />
        <section>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col gap-4 items-center m-10 shadow-2xs p-2"
            action=""
          >
            <label htmlFor="">Escribe el usuario</label>
            <input className="border-1" type="text" />
            <button className="rounded-full p-2 bg-red-500 text-white cursor-pointer">
              Submid
            </button>
            <h1>as</h1>
            <span className={loaderStyles.loader}></span>
          </form>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
