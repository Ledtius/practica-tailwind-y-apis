import Header from "./components/Day02/Layout/Header.jsx";

import Main from "./components/Day03/Layout/Main.jsx";

import Footer from "./components/Day02/Layout/Footer.jsx";

function App() {
  const users = [
    { id: 1, username: "calet", password: "1234" },
    { id: 2, username: "fer", password: "abcd" },
  ];

  const profiles = [
    { userId: 1, bio: "Soy Calet, aprendiz de React y JS", age: 23 },
    { userId: 2, bio: "Soy Fer, gamer y programadora", age: 25 },
  ];

  /* Callback form */

  const login = (userNameTyping, passwordTyping, callback) => {
    users.forEach(({ id, username, password }) => {
      if (username === userNameTyping && password === passwordTyping)
        callback(id);
      else return;
    });
  };

  const getProfile = (userIdFind) => {
    const profile = profiles.filter(({ userId }) => userId === userIdFind)[0];

    console.log(profile);
    const { userId, bio, age } = profile;

    console.log(`Profle\nuserId: ${userId}\nBio: ${bio}\nAge: ${age}`);
  };

  login("calet", "1234", getProfile);

  /* Promise form */

  const loginPromise = (userNameTyping, passwordTyping) => {
    return new Promise((resolve, reject) => {
      users.forEach(({ id, username, password }) => {
        if (username === userNameTyping && password === passwordTyping)
          resolve(id);
        else reject("Error - Wrong username or password");
      });
    });
  };

  const getProfilePromise = (userIdFind) => {
    return new Promise((resolve, reject) => {

      
    });
  };

  loginPromise("calet", "1234").then((id) => {});

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
