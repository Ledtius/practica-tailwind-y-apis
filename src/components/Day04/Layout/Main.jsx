const Main = () => {
  return (
    <>
      <main className="mt-30 h-dvh p-5 flex flex-col items-center justify-center gap-3 w-full">
        <section className="flex items-center bg-gray-200 h-fit w-fit flex-wrap shadow-2xl rounded-br-2xl rounded-tr-2xl">
          <img
            className="h-full w-96 object-cover rounded-tl-2xl rounded-bl-2xl"
            src="https://images.unsplash.com/photo-1752035680973-79d3836f317a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <form className="p-5 flex flex-col gap-0.5 " action="">
            <h2 className="font-bold text-2xl mb-4">Contactanos</h2>
            <section className="flex gap-4">
              <div className="">
                <div className="label-input">
                  <label className="label" htmlFor="">
                    Nombre <span className="label-necessary">*</span>
                  </label>
                  <input className="input" type="text" />
                </div>
                <small className="error">sss</small>
              </div>
              <div>
                <div className="label-input">
                  <label className="label" htmlFor="">
                    Email <span className="label-necessary">*</span>
                  </label>
                  <input className="input" type="email" />
                </div>
                <small className="error">sss</small>
              </div>
            </section>
            <section className="">
              <div className="label-input">
                <label className="label" htmlFor="">
                  Mensaje
                </label>
                <textarea
                  className="input"
                  name=""
                  id=""
                  placeholder="Comentario"
                ></textarea>
              </div>
              <small className="error">sf</small>
            </section>

            <button className="bg-sky-500 rounded-2xl text-white font-bold p-2 flex items-center justify-center gap-2 transition-all cursor-pointer hover:shadow-2xs">
              <svg
                className="size-5 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
              </svg>
              Enviar
            </button>
          </form>
        </section>
      </main>
    </>
  );
};
export default Main;
