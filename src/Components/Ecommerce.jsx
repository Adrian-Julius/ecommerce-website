import { NavLink, Outlet } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { cartProductsContext } from "./CartContext";

import "./Ecommerce.scss";
import logo from "./Images/logo-ecommerce.png";
import { Icon } from "semantic-ui-react";

function Ecommerce() {
  const { itemNum, settingCategory } = useContext(cartProductsContext);
  const [isActive, setIsActive] = useState(false);

  function showingNav() {
    setIsActive(!isActive);
  }

  // CHANGING isActive to false when screen size is large(lg)
  useEffect(() => {
    function resizing() {
      const largeScreen = window.matchMedia("(min-width: 1024px)");

      if (largeScreen.matches) {
        setIsActive(false);
      }
    }

    // Add event listener for screen resizing
    window.addEventListener("resize", resizing);
    resizing();

    return () => {
      window.removeEventListener("resize", resizing);
    };
  }, []);

  return (
    <>
      <div className="container font-serif flex flex-col min-h-screen min-w-full">
        <header className="header sticky top-0 z-50 flex-shrink-0  flex justify-end items-center h-28 p-[3vw] bg-slate-500">
          <div className="text-start text-4xl font-semibold w-screen text-green-500 ">
            <img
              src={logo}
              alt="website logo"
              className="w-[130px] p-0 float-start sm:w-[145px]"
            />
          </div>
          <button
            onClick={showingNav}
            className="lg:hidden float-right text-5xl z-50 hover:text-gray-300 duration-700"
          >
            {isActive ? <Icon name="close" /> : <Icon name="sidebar" />}
          </button>
          <nav>
            <ul
              className={`${
                isActive
                  ? " w-full md:w-1/2 h-screen absolute top-0 right-0 flex flex-col justify-center items-center gap-y-[10vh] bg-transparent backdrop-blur-[5px] md:backdrop-blur-[15px] z-40"
                  : " hidden gap-x-5 lg:flex"
              }`}
            >
              <li>
                <NavLink
                  to={"/"}
                  onClick={() => setIsActive(false)}
                  className=" text-white font-semibold py-4 bg-slate-600 px-6 rounded-3xl shadow-lg hover:bg-orange-600 duration-200 hover:shadow-md"
                >
                  HOME
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"about"}
                  onClick={() => setIsActive(false)}
                  className="text-white font-semibold py-4 bg-slate-600 px-6 rounded-3xl shadow-lg hover:bg-orange-600 duration-200 hover:shadow-md"
                >
                  ABOUT
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"products"}
                  onClick={() => {
                    settingCategory("allItems");
                    setIsActive(false);
                  }}
                  className="text-white font-semibold py-4 bg-slate-600 px-6 rounded-3xl shadow-lg hover:bg-orange-600 duration-200 hover:shadow-md"
                >
                  SHOP
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"contact"}
                  onClick={() => setIsActive(false)}
                  className="text-white font-semibold py-4 bg-slate-600 px-6 rounded-3xl shadow-lg hover:bg-orange-600 duration-200 hover:shadow-md"
                >
                  CONTACT
                </NavLink>
              </li>
              <li className="relative">
                <NavLink
                  to={"cart"}
                  onClick={() => setIsActive(false)}
                  className="text-white font-semibold py-4 bg-slate-600 px-6 rounded-3xl shadow-lg hover:bg-orange-600 duration-200 hover:shadow-md"
                >
                  <Icon
                    name="shopping cart"
                    size="large"
                    className="inline-block"
                  />
                </NavLink>
                <span
                  className={`${
                    itemNum == 0 ? "hidden" : "block"
                  } z-50 absolute top-[-30px] right-[-1.1em] text-2xl text-center w-[40px] py-1 rounded-full text-black font-extrabold bg-slate-300 lg:bg-slate-100 cursor-pointer`}
                >
                  {itemNum}
                </span>
              </li>
            </ul>
          </nav>
        </header>

        {/* CHILDREN COMPONENTS */}
        <div className="componentsContainer flex-1 p-[5vw]">
          <Outlet />
        </div>

        {/* FOOTER */}
        <footer className="footerContainer flex-shrink-0 flex justify-center items-center w-full text-xl text-center text-gray-100 p-[20px] bg-slate-500 h-[20vh] sm:text-2xl">
          © 2024 Adrian Julius Villaruel. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default Ecommerce;
