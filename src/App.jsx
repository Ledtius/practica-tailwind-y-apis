import Header from "./components/Day02/Layout/Header.jsx";

import Main from "./components/Day02/Layout/Main.jsx";

import Footer from "./components/Day02/Layout/Footer.jsx";

function App() {
  const user = { id: 123, name: "Calet" };

  const getUser = (userObj) => {
    console.log("Finding the user...");
    return new Promise((resolves, reject) => {
      const answer = true;

      setTimeout(() => {
        if (answer) resolves(userObj);
        else reject("Error finding user");
      }, 1000);
    });
  };

  const getPostsByUser = ({ id }) => {
    const posts = ["post1", "post2", "post3"];

    return new Promise((resolves, reject) => {
      console.log(`ID of user: ${id}`);

      console.log("Getting the post of the user...");
      const answer = true;
      setTimeout(() => {
        if (answer) resolves(posts);
        else reject("Error finding posts");
      }, 1500);
    });
  };

  const getPosts = (postElements) => {
    return new Promise((resolves, reject) => {
      const answer = false;

      if (answer) resolves(postElements);
      else reject("Error printing the posts");
    });
  };

  getUser(user)
    .then((value) => {
      return getPostsByUser(value);
    })
    .then((value) => {
      return getPosts(value);
    })
    .then((value) => console.log(value))
    .catch((e) => console.error(e));

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
