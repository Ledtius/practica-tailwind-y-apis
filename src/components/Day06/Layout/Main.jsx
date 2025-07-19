const Main = () => {
  return (
    <>
      <main className="bg-red-200 w-full h-full flex items-center justify-center">
        <section className="h-56 w-4/5 max-w-96 rounded-tr-2xl rounded-tl-2xl bg-gray-100 h-fit">
          <img
            className="h-30 w-full object-cover rounded-tr-2xl rounded-tl-2xl"
            src="https://images.unsplash.com/photo-1534943441045-1009d7cb0bb9?q=80&w=808&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />

          <div className="p-5 text-center flex flex-col gap-5">
            <div>
              <span className="font-semibold">Hace una semana</span>
              <h2 className="font-bold text-2xl text-orange-400">Cartagena</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident, asperiores eligendi.
            </p>
          </div>
          <div></div>
        </section>
      </main>
    </>
  );
};

export default Main;
