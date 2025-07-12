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

  /* Callback form  */
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

  // getUserData(user, posts, (userId, userName, arrayPosts) => {
  //   getPosts(userId, userName, arrayPosts, (userName, userPosts) => {
  //     printPosts(userName, userPosts);
  //   });
  // });

  /* Promise form */
  const getUserData2 = (userProfile) => {
    /* Por que no puedo destructurar aqui dentro?, porque userProfile me devulve [object, Object]  y arrayPosts [object Object],[object Object],[object Object]?
    const { userId, title } = userProfile;

    console.log(userId, title);
    console.log(userProfile);
    console.log(arrayPosts);
    */

    return new Promise((resolve, reject) => {
      console.log(`Passing your data... ${userProfile.name}`);

      console.log(userProfile);

      const hypotheticError = true;
      if (hypotheticError) {
        setTimeout(() => {
          /* Por que cuando hago  resolve({ userId, name }, arrayPosts), el userId sale undefined? */

          resolve(userProfile);
        }, 1500);
      } else reject("Error processing your data");
    });
  };

  const getPosts2 = (userProfile, arrayPosts) => {
    // console.log(userId, name);
    console.log(arrayPosts);
    return new Promise((resolve, reject) => {
      const hypotheticError = false;

      if (hypotheticError) {
        const userPosts = arrayPosts.filter(
          ({ userId }) => userId === userProfile.id
        );
        console.log("Getting the posts...");

        setTimeout(() => resolve([userProfile.name, userPosts]), 2500);
      } else reject("Error to finding posts");
    });
  };

  const printPosts2 = ([name, arrayUser]) => {
    console.log(name, arrayUser);
    // console.log(profilePosts);
    for (const { title } of Object.values(arrayUser)) {
      console.log(title);
      setTimeout(() => console.log(`${name} posts: ${title}`), 1500);
    }
  };

  // getUserData2(user)
  //   .then((userProfile, userPosts) => {

  //     console.log(userProfile, userPosts);
  //     return getPosts2(userProfile, posts);
  //   })
  //   .then((namePosts) => {
  //     return printPosts2(namePosts);
  //   })
  //   .catch((e) => {
  //     console.error(e);
  //   });

  /* Async/Await form */
  async function postManager(user, posts) {
    try {
      const resultGetUserData2 = await getUserData2(user, posts);

      const resultGetPosts2 = await getPosts2(resultGetUserData2, posts);

      const resultPrintPosts2 = printPosts2(resultGetPosts2);
    } catch (e) {
      console.error(e);
    }
    // console.log(resultGetUserData2);
    // console.log(resultGetPosts2);

    // console.log(resultPrintPosts2);
  }

  postManager(user, posts);

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
