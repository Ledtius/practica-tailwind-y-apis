const Main = () => {
  return (
    <>
      {/* <main className="grid mt-19 grid-cols-2 gap-2  bg-gray-800  w-full h-fit p-2.5 md:grid-cols-3 lg:grid-cols-4">
        <img
          className="w-ful h-96 object-cover  rounded-2xl transition-transform hover:scale-105 cursor-cell"
          src="https://images2.alphacoders.com/133/thumb-1920-1332614.jpeg"
          alt="Modekaiser"
        />
        <img
          className="w-full h-96 object-cover rounded-2xl transition-transform hover:scale-105 cursor-cell"
          src="https://images8.alphacoders.com/135/thumb-1920-1352312.jpeg"
          alt="Master Chief"
        />
        <img
          className="w-full h-96 object-cover rounded-2xl transition-transform hover:scale-105 cursor-cell"
          src="https://images3.alphacoders.com/135/thumb-1920-1353838.png"
          alt="Minecraft"
        />
        <img
          className="w-full h-96 object-cover rounded-2xl transition-transform hover:scale-105 cursor-cell"
          src="https://picfiles.alphacoders.com/469/thumb-1920-469372.jpg"
          alt="GtaIV"
        />
        <img
          className="w-full h-96 object-cover rounded-2xl transition-transform hover:scale-105 cursor-cell"
          src="https://images8.alphacoders.com/284/thumb-1920-284927.jpg"
          alt="Metro2033"
        />
        <img
          className="w-full h-96 object-cover rounded-2xl transition-transform hover:scale-105 cursor-cell"
          src="https://wallpapercave.com/wp/wp4884170.jpg"
          alt="Age of empires IV"
        />
        <img
          className="w-full h-96 object-cover object-top rounded-2xl transition-transform hover:scale-105 cursor-cell"
          src="https://wallpapercave.com/wp/wp14385704.jpg"
          alt="Age of mythology"
        />
        <img
          className="w-full h-96 object-cover object-top rounded-2xl transition-transform hover:scale-105 cursor-cell"
          src="https://wallpapercave.com/wp/wp13979590.jpg"
          alt="Gta San"
        />
      </main> */}

      <main className="h-fit mt-20 flex items-center justify-center flex-wrap w-full bg-amber-600 p-10 ">
        <section className="p-14 text-center h-fit bg-amber-200 w-fit rounded-2xl relative pt-10  flex flex-col items-center gap-4">
          <header className="flex flex-col items-center border-b-4 mb-3 w-full">
            <svg
              className="size-30"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M407 47c9.4-9.4 24.6-9.4 33.9 0l17.2 17.2c1.9-.1 3.9-.2 5.8-.2l32 0c11.2 0 21.9 2.3 31.6 6.5L543 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L564 101.9c7.6 12.2 12 26.7 12 42.1c0 10.2 7.4 18.8 16.7 23c27.9 12.5 47.3 40.5 47.3 73c0 26.2-12.6 49.4-32 64l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-16-64 0 0 16c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-17.6c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.7 26.2 83.2 64 101.2l0 10.8c0 17.7 14.3 32 32 32l32 0 0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-76c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12l0 76c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-118.9L45.9 369.7c-5.4 12.1-19.6 17.6-31.7 12.2S-3.3 362.4 2.1 350.3L24 300.9c5.3-11.9 8-24.7 8-37.7C32 155.7 117.2 68 223.8 64.1l.2-.1 7.2 0L256 64l32 0c41.7 0 83.4 12.1 117.2 25.7c1.7-1.8 3.5-3.6 5.3-5.2L407 81c-9.4-9.4-9.4-24.6 0-33.9zm73 185a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM480 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
            </svg>
            <section>
              <h3 className="font-bold text-4xl">$19.900</h3>
              <small>Por mes</small>
            </section>
          </header>

          <h2
            className="font-bold 
          text-2xl mb-7"
          >
            Caja básica
          </h2>

          <ul className="flex flex-col gap-2.5 ">
            <li>Acceso limitado a productos</li>
            <li>1 envío gratis al mes</li>
            <li>Soporte por correo</li>
            <li>Sin descuentos adicionales</li>
          </ul>
          <a
            href="#"
            className="bg-purple-600 pt-4 pb-4 rounded-4xl pr-15 pl-15  font-semibold mt-10 text-white"
          >
            Comprar
          </a>
        </section>
        <section className="h-96 bg-red-200 w-50"></section>
        <section className="h-96 bg-blue-200 w-50"></section>
      </main>
    </>
  );
};

export default Main;
