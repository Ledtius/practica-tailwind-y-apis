import Header from "./components/Day05/Layout/Header.jsx";

import Main from "./components/Day04/Layout/Main.jsx";

import Footer from "./components/Day02/Layout/Footer.jsx";

function App() {
  function greetUser(callback) {
    callback("Calet");
  }

  const functionGreet = (name) => {
    console.log(`Hello ${name}`);
  };

  // greetUser(functionGreet);

  function operation(a, b, callback) {
    callback(a, b);
  }

  function resolveOpe(num1, num2) {
    console.log(num1 + num2);
  }

  // operation(1, 2, resolveOpe);
  const numbers = [1, 232, 3, 45, 29, 18, 8, 5, 11, 4, 6, 23, 55, 19];

  function filterAndPrint(arr, callback) {
    const filterArray = arr.filter((number) => number > 10);

    for (const num of filterArray) {
      callback(num);
    }
  }

  function printFilterNumbers(numberFilter) {
    console.log(numberFilter);
  }

  // filterAndPrint(numbers, printFilterNumbers);

  const delayedMessage = (msg, delay, callback) => {
    setTimeout(() => callback(msg), delay);
  };

  // delayedMessage("I feel alone sometimes", 1000, (message) =>
  //   console.log(message)
  // );

  const users = [
    { id: "1", name: "Calet", posts: ["post1", "post2", "post3"] },
    { id: "2", name: "Ronald", posts: ["post1", "post2", "post3"] },
  ];

  function getUser(idUser, callback) {
    console.log("Processing id of the user...");

    const userFound = users.find(({ id }) => idUser === id);

    setTimeout(() => {
      callback(userFound);
    }, 1000);
  }

  function getPostByUser(user, callback) {
    console.log("Processing user posts...");
    setTimeout(() => callback(user.posts));
  }

  function showPosts(posts) {
    for (const post of posts) {
      console.log(post);
    }
  }

  // getUser("1", (userFound) => {
  //   getPostByUser(userFound, (posts) => {
  //     showPosts(posts);
  //   });
  // });

  const array2 = [444, 2, 4, 4, 3, 2323, true, false];

  const myMap = (arr, callback) => {
    arr.forEach((element) => {
      console.log(callback(element, "+ 1"));
    });
  };

  myMap(array2, (item, value) => {
    return eval(item + value);
  });

  // const result = myMap([1, 2, 3], (n) => n + 1);
  // console.log(result); // [2, 3, 4]

  return (
    <>
      <div className="flex flex-col items-center justify-between relative h-screen">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
