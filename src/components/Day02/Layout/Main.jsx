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

      <main className="h-fit mt-20 flex items-center justify-center flex-wrap w-full bg-white p-10 gap-7">
        <section className="p-10 text-center h-[619.987px] bg-white w-fit rounded-2xl shadow-2xl relative pt-10  flex flex-col items-center gap-4 select2-dropdown">
          <header className="flex flex-col items-center border-b-4 border-purple-400 mb-3 w-full">
            <svg
              className="size-30 fill-purple-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M407 47c9.4-9.4 24.6-9.4 33.9 0l17.2 17.2c1.9-.1 3.9-.2 5.8-.2l32 0c11.2 0 21.9 2.3 31.6 6.5L543 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L564 101.9c7.6 12.2 12 26.7 12 42.1c0 10.2 7.4 18.8 16.7 23c27.9 12.5 47.3 40.5 47.3 73c0 26.2-12.6 49.4-32 64l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-16-64 0 0 16c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-17.6c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.7 26.2 83.2 64 101.2l0 10.8c0 17.7 14.3 32 32 32l32 0 0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-76c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12l0 76c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-118.9L45.9 369.7c-5.4 12.1-19.6 17.6-31.7 12.2S-3.3 362.4 2.1 350.3L24 300.9c5.3-11.9 8-24.7 8-37.7C32 155.7 117.2 68 223.8 64.1l.2-.1 7.2 0L256 64l32 0c41.7 0 83.4 12.1 117.2 25.7c1.7-1.8 3.5-3.6 5.3-5.2L407 81c-9.4-9.4-9.4-24.6 0-33.9zm73 185a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM480 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
            </svg>
            <section className="mb-2.5">
              <h3 className="font-bold text-4xl text-purple-600">$19.900</h3>
              <small className="text-gray-600">Por mes</small>
            </section>
          </header>

          <h2
            className="font-bold 
          text-2xl mb-7 text-purple-600 font-mono"
          >
            CAJA BÁSICA
          </h2>

          <ul className="flex flex-col gap-2.5 font-semibold">
            <li>Acceso limitado a productos</li>
            <li>1 envío gratis al mes</li>
            <li>Soporte por correo</li>
            <li>Sin descuentos adicionales</li>
          </ul>
          <a
            href="#"
            className="bg-purple-500 pt-4 pb-4 rounded-4xl pr-15 pl-15  font-semibold mt-10 text-white transition-all hover:scale-105 hover:shadow-2xs/30"
          >
            Comprar
          </a>
        </section>
        <section className="p-10 text-center h-[619.987px] bg-gradient-to-b from-red-500 to-orange-500 w-[285.95px] rounded-2xl shadow-2xl relative pt-10 flex flex-col items-center gap-4">
          <header className="flex flex-col items-center h-[198px] border-b-4 border-white mb-3 w-full">
            <svg
              className="size-25 mb-5 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M459.1 52.4L442.6 6.5C440.7 2.6 436.5 0 432.1 0s-8.5 2.6-10.4 6.5L405.2 52.4l-46 16.8c-4.3 1.6-7.3 5.9-7.2 10.4c0 4.5 3 8.7 7.2 10.2l45.7 16.8 16.8 45.8c1.5 4.4 5.8 7.5 10.4 7.5s8.9-3.1 10.4-7.5l16.5-45.8 45.7-16.8c4.2-1.5 7.2-5.7 7.2-10.2c0-4.6-3-8.9-7.2-10.4L459.1 52.4zm-132.4 53c-12.5-12.5-32.8-12.5-45.3 0l-2.9 2.9C256.5 100.3 232.7 96 208 96C93.1 96 0 189.1 0 304S93.1 512 208 512s208-93.1 208-208c0-24.7-4.3-48.5-12.2-70.5l2.9-2.9c12.5-12.5 12.5-32.8 0-45.3l-80-80zM200 192c-57.4 0-104 46.6-104 104l0 8c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-8c0-75.1 60.9-136 136-136l8 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-8 0z" />
            </svg>
            <section className="mb-2.5">
              <h3 className="font-bold text-4xl text-white">$34.900</h3>
              <small className="text-gray-200">Por mes</small>
            </section>
          </header>

          <h2
            className="font-bold 
          text-2xl mb-7 text-white font-mono"
          >
            CAJA ESTÁNDAR
          </h2>

          <ul className="flex flex-col gap-2.5 font-semibold text-wrap max-h-[126px] overflow-auto text-white">
            <li>Acceso completo al catalogo general</li>
            <li>2 envío gratis al mes</li>
            <li>Soporte por chat horario laboral</li>
            <li>10% descuentos en productos seleccionados</li>
          </ul>
          <a
            href="#"
            className="bg-white pt-4 pb-4 rounded-4xl pr-15 pl-15  font-semibold mt-10 text-orange-500 transition-all hover:scale-105 hover:shadow-2xs/30"
          >
            Comprar
          </a>
        </section>
        <section className="p-10 text-center h-[619.987px] bg-gradient-to-b from-emerald-500 to-emerald-900 w-[285.95px] rounded-2xl shadow-2xl relative pt-10 flex flex-col items-center gap-4">
          <header className="flex flex-col items-center h-[198px] border-b-4 border-white mb-3 w-full">
            <svg
              className="size-25 fill-white mb-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2L0 192C0 86 86 0 192 0S384 86 384 192l0 270.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
            </svg>
            <section className="mb-2.5">
              <h3 className="font-bold text-4xl text-white">$79.900</h3>
              <small className="text-gray-200">Por mes</small>
            </section>
          </header>

          <h2
            className="font-bold 
          text-2xl mb-7 text-white font-mono"
          >
            CAJA FAMILIAR
          </h2>

          <ul className="flex flex-col gap-2.5 font-semibold text-wrap max-h-[126px] overflow-auto overflow-y-scroll h-64  scrollbar-width text-white">
            <li>Incluye beneficios para hasta 4 miembros</li>
            <li>Gestión de cuentas familiares</li>
            <li>Regalo sorpresa mensual</li>
            <li>Productos en cantidad doble</li>
          </ul>

          <a
            href="#"
            className="bg-white pt-4 pb-4 rounded-4xl pr-15 pl-15  font-semibold mt-10 text-emerald-500 transition-all hover:scale-105 hover:shadow-2xs/30"
          >
            Comprar
          </a>
        </section>
      </main>
    </>
  );
};

export default Main;
