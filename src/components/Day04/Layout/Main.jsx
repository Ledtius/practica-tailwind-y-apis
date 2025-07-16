const Main = () => {
  return (
    <>
      <main className="mt-30 h-fit p-5 flex flex-col items-center justify-center gap-3 ">
        <section className="flex flex-col items-center shadow-2xl/20 rounded-bl-lg rounded-br-lg w-11/12 min-w-80 md:flex-row md:h-100 md:w-full">
          <img
            className="object-cover h-40 rounded-tl-lg rounded-tr-lg w-full md:h-full md:rounded-bl-lg md:rounded-tr-none md:w-96"
            src="https://images.unsplash.com/photo-1682685797439-a05dd915cee9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="bg-white pt-5 pb-5 rounded-bl-lg rounded-br-lg flex flex-col items-center gap-4 w-10/12 md:w-96 md:pr-10 md:pl-10 md:h-fit">
            <h2 className="text-2xl font-bold">Contact Us</h2>

            <form className="flex flex-col items-center w-full gap-4" action="">
              <div className="w-full flex flex-col gap-4">
                <div className="label-input w-full">
                  <input
                    className="input"
                    placeholder="First Name*"
                    id="name"
                    type="text"
                  />
                </div>

                <div className="label-input">
                  <input
                    className="input"
                    placeholder="Email*"
                    id="email"
                    type="email"
                  />
                </div>
              </div>

              <textarea
                className="input w-full"
                placeholder="Comment"
                name="comment"
                id="comment"
                maxLength={"200"}
              ></textarea>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};
export default Main;
