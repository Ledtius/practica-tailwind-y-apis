import Header from "./components/Day02/Layout/Header.jsx";

import Main from "./components/Day02/Layout/Main.jsx";

import Footer from "./components/Day02/Layout/Footer.jsx";

function App() {
  const user = { id: 123, name: "Calet" };

  const getUser = (userObj) => {
    console.log("Finding the user...");
    return new Promise((resolves, reject) => {
      setTimeout(() => {
        resolves(userObj);
      }, 1000);
    });
  };

  const getPostsByUser = ({ id }) => {
    const posts = ["post1", "post2", "post3"];

    return new Promise((resolves, reject) => {
      setTimeout(() => {
        console.log(`ID of user: ${id}`);
        resolves(posts);
      }, 1500);
    });
  };

  const getPosts = (postElements) => {
    return new Promise((resolves, reject) => {
      resolves(postElements);
    });
  };

  getUser(user)
    .then((value) => {
      return getPostsByUser(value);
    })
    .then((value) => {
      return getPosts(value);
    })
    .then((value) => console.log(value));

  // getUser(user, (userReceive) => {
  //   getPostsByUser(userReceive, (postsUser) => {
  //     getPosts(postsUser);
  //   });
  // });

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
