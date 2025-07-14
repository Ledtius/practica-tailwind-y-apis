const Main = () => {
  return (
    <>
      <main className="mt-30 h-dvh p-5 flex flex-col items-center justify-center gap-3 w-full bg-blue-400">
        <section className="flex flex-col items-center max-w-2xs shadow-2xl">
          <header className="bg-gray-100 w-full h-52 rounded-tl-2xl  rounded-tr-2xl flex justify-center relative ">
            <div className="absolute top-8 rounded-full p-1 ring-3 ring-red-400 shadow-xl">
              <img
                className="object-cover h-34 w-34 rounded-full  "
                src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </header>
          <article className="flex flex-col items-center justify-between max-w-2xs gap-5 p-5 bg-red-400 rounded-bl-2xl rounded-br-2xl">
            <header className="text-center">
              <h2 className="text-2xl font-bold ">Ana Liz</h2>
              <span className="text-md font-semibold ">
                Designer and artist
              </span>
            </header>

            <p className=" text-justify text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </article>
        </section>
      </main>
    </>
  );
};
export default Main;
