import Header from "./components/Day02/Layout/Header.jsx";

import Main from "./components/Day03/Layout/Main.jsx";

import Footer from "./components/Day02/Layout/Footer.jsx";

function App() {
  const products = [
    { id: 1, name: "mouse", price: 12000, category: "accessories" },
    { id: 2, name: "keyboard", price: 25000, category: "accessories" },
    { id: 3, name: "monitor", price: 75000, category: "screens" },
    { id: 4, name: "laptop", price: 220000, category: "computers" },
  ];

  /* Callback form */

  const getProduct = (productName, callback) => {
    const productFound = products.find(({ name }) => name === productName);

    console.log("Processing name...");

    setTimeout(() => {
      if (productName) callback(productFound);
      else callback(undefined);
    }, 1000);
  };

  const printProduct = (product) => {
    if (product)
      setTimeout(() => {
        const { name, category, price } = product;

        console.log(
          `Product found:\nProduct name: ${name}\nCategory: ${category}\nPrice: $${price} `
        );
      }, 1000);
    else console.log("Error found the product");
  };

  // getProduct("mouse", printProduct);

  /* Promise form */

  function getProductPromise(productName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const productFound = products.find(({ name }) => name === productName);

        if (productFound) resolve(productFound);
        else reject("Error, product not found");
      }, 1000);
    });
  }

  function printProductPromise(product) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (product) {
          const { name, category, price } = product;

          resolve(
            `Product found:\nProduct name: ${name}\nCategory: ${category}\nPrice: $${price}`
          );
        } else reject("Error printed the product");
      }, 1000);
    });
  }

  getProductPromise("monitor")
    .then((productFound) => {
      printProductPromise(productFound);
    })
    .catch((e) => console.error(e));

  /* Async / Await form */

  async function printProductAsyncAway(productName) {
    try {
      const findProduct = await getProductPromise(productName);

      const printProduct = await printProductPromise(findProduct);
      console.log(printProduct);
    } catch (e) {
      console.error(e);
    }
  }

  printProductAsyncAway("laptop");

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
