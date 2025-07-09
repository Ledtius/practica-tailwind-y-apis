const Main = () => {
  return (
    <>
      <main className="p-2 flex justify-center gap-4 h-full w-full bg-amber-500">
        <section className="min-h-80 min-w-80 max-h-96 max-w-96">
          <header className="size-full">
            <img
              className="size-full rounded-tl-2xl rounded-tr-2xl"
              src="https://curiosfera-historia.com/wp-content/uploads/nacimiento-y-juventud-Gengis-Kan.jpg"
              alt="Imagen de samurai"
            />
          </header>
          <footer className="p-4  bg-gray-500 text-center text-justify rounded-bl-2xl rounded-br-2xl">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem quo maiores minima, eveniet porro dolore et magni ut
              sed ea non asperiores repellendus saepe impedit repellat nesciunt
              necessitatibus qui nam.
            </p>
          </footer>
        </section>
        <section className="max-h-96 max-w-96 min-w-80 min-h-80">
          <header className="size-full">
            <img
              className="size-full rounded-tl-2xl rounded-tr-2xl"
              src="https://i.pinimg.com/736x/cb/e8/99/cbe899cbff2afb869e595b5058d9e6db.jpg"
              alt="Imagen de samurai"
            />
          </header>
          <footer className="text-center text-justify p-4 bg-gray-500 rounded-bl-2xl rounded-br-2xl">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem quo maiores minima, eveniet porro dolore et magni ut
              sed ea non asperiores repellendus saepe impedit repellat nesciunt
              necessitatibus qui nam.
            </p>
          </footer>
        </section>
      </main>
    </>
  );
};

export default Main;
