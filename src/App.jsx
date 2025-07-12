import Header from "./components/Day02/Layout/Header.jsx";

import Main from "./components/Day02/Layout/Main.jsx";

import Footer from "./components/Day02/Layout/Footer.jsx";

function App() {
  const user = { id: 1, name: "Calet" };
  const posts = [
    { userId: 1, title: "Post 1" },
    { userId: 1, title: "Post 2" },
    { userId: 2, title: "Otro post" },
  ];

  const getUserData = ({ id, name }, arrayPosts, callback) => {
    console.log(`Passing your data...${name}`);
    setTimeout(() => callback(id, name, arrayPosts), 1500);
  };

  const getPosts = (userId, userName, arrayPosts, callback) => {
    const userPosts = arrayPosts.filter(({ userId: id }) => id === userId);

    console.log(`Finding posts... wait...`);
    setTimeout(() => callback(userName, userPosts), 2000);
  };

  const printPosts = (name, post) => {
    console.log("Printing the posts...");
    setTimeout(() => {
      for (const { title } of Object.values(post)) {
        console.log(`${name} posts: ${title}`);
      }
    }, 1500);
  };

  getUserData(user, posts, (userId, userName, arrayPosts) => {
    getPosts(userId, userName, arrayPosts, (userName, userPosts) => {
      printPosts(userName, userPosts);
    });
  });

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
