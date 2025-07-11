import Header from "./components/Day02/Layout/Header.jsx";

import Main from "./components/Day02/Layout/Main.jsx";

import Footer from "./components/Day02/Layout/Footer.jsx";

function App() {
  const user = { id: 123, name: "Calet" };

  const getUser = (obj, callback) => {
    console.log("Finding the user...");
    setTimeout(() => {
      callback(obj);
    }, 1000);
  };

  const getPostsByUser = ({ id }, callback) => {
    const posts = ["post1", "post2", "post3"];

    setTimeout(() => {
      console.log(`ID of user: ${id}`);
      callback(posts);
      return posts;
    }, 1500);
  };

  const getPosts = (postElements) => {
    console.log(postElements);
  };

  getUser(user, (userReceive) => {
    getPostsByUser(userReceive, (postsUser) => {
      getPosts(postsUser);
    });
  });

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
