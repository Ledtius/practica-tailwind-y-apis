import Header from "./components/Day01/Layout/Header.jsx";

import Main from "./components/Day01/Layout/Main.jsx";

import Footer from "./components/Day01/Layout/Footer.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col bg-amber-200 h-dvh">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
