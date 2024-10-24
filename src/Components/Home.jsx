import { useContext } from "react";
import { cartProductsContext } from "./CartContext";
import { NavLink } from "react-router-dom";

function Home() {
  const { settingAddToCart, categories } = useContext(cartProductsContext);
  const newArrivals = [
    categories.hoodies[0],
    categories.jackets[0],
    categories.tshirts[0],
    categories.poloshirts[0],
  ];

  return (
    <div className="homeContainer text-center bg-no-repeat bg-cover bg-center">
      <div className="flex flex-wrap mb-9">
        <div className="leftContainer hidden lg:flex lg:w-[50%] justify-center items-center min-h-[75vh] ">
          <h1 className="lg:text-7xl xl:text-[5.5rem] text-orange-500 font-extrabold ">
            WELCOME
          </h1>
        </div>

        <div className="rightContainer w-[100%] lg:w-[50%] h-[75vh] lg:h-[75vh] flex flex-wrap justify-center bg-slate-300 hover:bg-slate-500">
          <h1 className="self-end w-full lg:hidden text-7xl md:text-8xl lg:text-6xl text-orange-500 font-extrabold">
            WELCOME
          </h1>
          <br />
          <NavLink
            to={"/products"}
            onClick={() => settingCategory("allItems")}
            className="self-start lg:self-center text-2xl md:text-3xl lg:text-5xl text-white px-5 py-3 my-3 border-[3px] border-[tomato] rounded-3xl bg-orange-400 hover:bg-[tomato] duration-300"
          >
            SHOP NOW!
          </NavLink>
        </div>
      </div>

      <h1 className=" clear-both text-4xl md:text-6xl text-orange-500 font-bold mb-5">
        NEW ARRIVAL
      </h1>

      {/* NEW ARRIVAL */}
      <main className="flex flex-wrap justify-center items-center gap-8 place-items-center">
        {newArrivals.length > 0 ? (
          newArrivals.map((item, index) => (
            <div
              key={index}
              className="itemContainer flex-shrink-0 min-w-[350px] md:w-[450px] h-[75vh] p-2 text-lg bg-gray-200 hover:bg-gray-300 duration-500"
            >
              <img
                src={item.productImg}
                alt=""
                className="w-full h-4/5 object-cover"
              />
              <h3 className="">{item.name}</h3>
              <p>PHP {item.price}</p>
              <button
                className="px-3 py-1 my-1 md:my-3 border-[2px] border-[tomato] rounded-3xl hover:bg-[tomato] hover:text-white duration-300"
                onClick={() => settingAddToCart(item)}
              >
                ADD TO CART
              </button>
            </div>
          ))
        ) : (
          <>FAILED TO LOAD</>
        )}
      </main>
    </div>
  );
}

export default Home;
