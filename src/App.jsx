import Header from "./components/Day02/Layout/Header.jsx";

import Main from "./components/Day02/Layout/Main.jsx";

import Footer from "./components/Day02/Layout/Footer.jsx";

function App() {
  const arrayUsers = [
    { name: "Calet", age: 23 },
    { name: "Ronald", age: 20 },
    { name: "Sara", age: 14 },
  ];

  const receiveUsers = (users, callback) => {
    setTimeout(() => {
      console.log(callback(users));
    }, 1500);
    console.log("Processing data...");
  };

  const validateUsers = (arrayUsers) => {
    const greater18 = arrayUsers.filter((user) => user.age >= 18);

    return greater18;
  };

  receiveUsers(arrayUsers, validateUsers);

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
