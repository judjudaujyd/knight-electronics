import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import logo from "/src/assets/logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {

  // ================LOGIC FOR TOGGLING MOBILE AND PC DISPLAYS=======================
  const [lScreen, setLScreen] = useState<boolean>(window.innerWidth > 1024);
  const [mToggle, setMToggle] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth > 1024 ? setLScreen(true) : setLScreen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="w-full h-[80px] bg-white transition-all duration-300 select-none">
        <nav className="w-full h-full flex justify-center relative">
          <div className="w-[95%] h-full flex">
            {/* ===============LOGO================ */}
            <div className="w-1/2 lg:w-1/3 flex items-center h-full justify-start">
              <img src={logo} alt="..." className="h-1/4" />
            </div>
            {/* ==============LINKS=============== */}
            <div className="relative lg:w-1/3 h-full hidden lg:block">
              <ul className="w-full h-full flex items-center justify-center gap-x-4">
                <li>
                  <Link
                    to="/"
                    className="font-semibold text-sm hover:opacity-50 hover:cursor-pointer hover:text-[var(--neon-orange)]"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-semibold text-sm hover:opacity-50 hover:cursor-pointer hover:text-[var(--neon-orange)]"
                  >
                    PRODUCTS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-semibold text-sm hover:opacity-50 hover:cursor-pointer hover:text-[var(--neon-orange)]"
                  >
                    SERVICES
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-semibold text-sm hover:opacity-50 hover:cursor-pointer hover:text-[var(--neon-orange)]"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
            {/* ==============AUTH================ */}
            <div className="h-full w-1/2 lg:w-1/3 flex items-center justify-end">
              <button className="px-2 py-2 text-sm text-[var(--neon-orange)] border-[var(--neon-orange)] border-solid border-2 font-semibold bg-white hover:opacity-50 hover:cursor-pointer hidden lg:block">
                SIGN IN
              </button>
              {!mToggle && (
                <MdOutlineMenu className="text-2xl lg:hidden hover:opacity-80 hover:cursor-pointer" onClick={() => setMToggle(true)}/>
              )}

              {mToggle && (
                <IoIosClose className="text-2xl lg:hidden hover:opacity-80 hover:cursor-pointer" onClick={() => setMToggle(false)}/>
              )}
            </div>
          </div>

          {/* ========FLOATING MENU============= */}

          {!lScreen && mToggle &&(
            <div className="absolute z-100 w-full h-[350px] top-[80px] lg:hidden bg-white">
            <div className=" w-full h-2/3">
              <ul className="w-full h-full flex flex-col items-start justify-evenly gap-x-4 px-4">
                <li>
                  <Link
                    to="/"
                    className="font-semibold text-sm hover:opacity-50 hover:cursor-pointer hover:text-[var(--neon-orange)]"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-semibold text-sm hover:opacity-50 hover:cursor-pointer hover:text-[var(--neon-orange)]"
                  >
                    PRODUCTS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-semibold text-sm hover:opacity-50 hover:cursor-pointer hover:text-[var(--neon-orange)]"
                  >
                    SERVICES
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-semibold text-sm hover:opacity-50 hover:cursor-pointer hover:text-[var(--neon-orange)]"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
            <div className="h-1/3 w-full px-4 flex items-center justify-center">
              <button className="px-2 py-2 text-sm text-[var(--neon-orange)] border-[var(--neon-orange)] border-solid border-2 font-semibold bg-white hover:opacity-50 hover:cursor-pointer">
                SIGN IN
              </button>
            </div>
          </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
