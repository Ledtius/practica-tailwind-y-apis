import { useState } from "react";

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }
  function openModal() {
    setShowModal(true);
  }

  return (
    <>
      <main className="bg-red-200 w-full h-full flex flex-col items-center justify-center relative">
        <section
          className={`bg-white p-5 rounded-2xl flex flex-col items-center gap-6 absolute z-20 transition-all duration-500 ease-in-out ${
            showModal
              ? "opacity-100 translate-y-2 pointer-events-auto"
              : "opacity-0 -translate-y-0 pointer-events-none duration-300"
          }`}
        >
          <h2 className="font-bold">Do you want to accept Charges?</h2>
          <nav className="flex items-center justify-between w-full">
            <button
              className="modal-btn bg-gray-300 transition-all hover:text-gray-300 hover:bg-black"
              onClick={closeModal}
            >
              Yes
            </button>
            <button
              className="modal-btn bg-red-500 text-white transition-all hover:text-red-500 hover:bg-gray-200"
              onClick={closeModal}
            >
              No
            </button>
          </nav>
        </section>
        <button
          className="modal-btn bg-sky-400 transition-transform hover:scale-105"
          onClick={openModal}
        >
          Modal Btn ⭐
        </button>
      </main>
    </>
  );
};

export default Main;
