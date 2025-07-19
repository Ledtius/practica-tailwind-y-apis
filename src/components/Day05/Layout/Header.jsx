import { useEffect, useState } from "react";
function Header() {
  const [showNav, setShowNav] = useState(false);

  let screenValue = window.innerWidth;

  useEffect(() => {
    if (screenValue > 1040) setShowNav(true);
  }, [screenValue]);

  return (
    <>
      <header className="flex flex-row-reverse bg-slate-900 justify-between w-full p-4 bg- shadow-2xl/5 relative lg:flex-row lg:items-center lg:justify-between">
        <a
          href="#"
          className="flex items-center size-fit"
          onClick={() => {
            setShowNav(false);
          }}
        >
          <svg
            className="stroke-green-400 stroke-2 size-12"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M11 17a2.5 2.5 0 0 0 2 0" />
            <path d="M12 3c-4.664 0 -7.396 2.331 -7.862 5.595a11.816 11.816 0 0 0 2 8.592a10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199 -3.064a11.89 11.89 0 0 0 2 -8.592c-.466 -3.265 -3.198 -5.595 -7.862 -5.595z" />
            <path d="M8 11l2 2" />
            <path d="M16 11l-2 2" />
          </svg>

          <h2 className="font-bold text-2xl text-green-100 hidden lg:block ">
            Ius
          </h2>
        </a>

        <nav
          className={
            showNav
              ? `fixed left-0 button-0 top-0 bg-slate-900 text-gray-200 w-5/6 h-screen text-2xl font-semibold pl-4 pt-4 flex flex-col gap-5 z-10 shadow-2xl/65 lg:h-fit lg:bg-transparent lg:z-0 lg:static lg:p-0 lg:w-fit`
              : `hidden`
          }
        >
          <button
            className="fill-gray-300 cursor-pointer lg:hidden"
            onClick={() => {
              console.log("Close");
              setShowNav(false);
            }}
          >
            <svg
              className="size-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>

          <ul className="flex flex-col gap-6 lg:flex-row lg:items-center lg:w-fit">
            <li className="">
              <a
                className="transition-color hover:text-green-500"
                href="#"
                onClick={() => {
                  if (window.innerWidth < 1024) setShowNav(false);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="transition-color hover:text-green-500"
                href="#"
                onClick={() => {
                  if (window.innerWidth < 1024) setShowNav(false);
                }}
              >
                Products
              </a>
            </li>
            <li>
              <a
                className="transition-color hover:text-green-500"
                href="#"
                onClick={() => {
                  if (window.innerWidth < 1024) setShowNav(false);
                }}
              >
                About us
              </a>
            </li>
            <li>
              <button
                className="bg-green-500 transition-color p-4 rounded-2xl shadow-2xs shadow-white hover:text-green-500 hover:bg-white lg:p-2"
                href="#"
                onClick={() => {
                  if (window.innerWidth < 1024) setShowNav(false);
                }}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>

        <button
          className="cursor-pointer lg:hidden"
          onClick={() => {
            console.log("Hamburger");
            setShowNav(true);
          }}
        >
          <svg
            className="size-10 fill-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </header>
    </>
  );
}

export default Header;
