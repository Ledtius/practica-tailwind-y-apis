const Header = () => {
  return (
    <>
      <header className="p-5  bg-gray-800 shadow-2xl w-full">
        <nav className="flex w-full justify-between gap-10">
          <a
            href="#"
            className="flex items-center justify-center gap-2.5 w-fit transition-transform hover:scale-105 hover:rotate-2 "
          >
            <svg
              className="size-10 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M192 64C86 64 0 150 0 256S86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32z" />
            </svg>
            <h2 className="font-bold text-white">Game Galery</h2>
          </a>
          <ul className="flex justify-between items-center p-1.5 text-white font-semibold w-full max-w-2xs">
            <li>
              <a className="transition-colors hover:text-amber-300" href="#">
                Link1
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-amber-300" href="#">
                Link2
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-amber-300" href="#">
                Link3
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-amber-300" href="#">
                Link4
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
