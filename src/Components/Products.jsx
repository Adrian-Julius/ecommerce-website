import { useState, useContext } from "react";

// IMPORT VARIABLES
import { cartProductsContext } from "./CartContext";

function Products() {
  const { category, settingCategory, categories, settingAddToCart } =
    useContext(cartProductsContext);

  // ALL ITEMS COMPONENT
  const [page, setPage] = useState(1);

  const allItems = [
    ...categories.hoodies,
    ...categories.tshirts,
    ...categories.jackets,
    ...categories.poloshirts,
  ];

  //SETTING PAGES FUNCTION
  function settingPages(inputted) {
    setPage(inputted);
  }

  // INITIALIZING THE PAGES
  // (category === "allItems" ? allItems : categories[category]) // check if the inputted category is "allItems"
  const pages = (
    <div className="flex flex-wrap justify-center w-full">
      {[
        ...Array(
          Math.ceil(
            (category === "allItems" ? allItems : categories[category]).length /
              6
          )
        ),
      ].map((item, index) => (
        <button
          key={index}
          onClick={() => settingPages(index + 1)}
          className={`${
            page === index + 1
              ? "bg-orange-600 text-white"
              : " bg-slate-200 text-black"
          } text-lg sm:text-xl  font-semibold  px-6  py-3 m-2 rounded-2xl shadow-lg hover:text-white duration-200 hover:shadow-md`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );

  // INITIALIZING THE DISPLAYED ITEMS using slice() and map()
  const displayedItems = (
    category === "allItems" ? allItems : categories[category]
  )
    .slice(page * 6 - 6, page * 6)
    .map((item, index) => (
      <div
        key={index}
        className="itemContainer flex-shrink-0 min-w-[375px] h-[77vh] p-2 text-lg md:text-xl bg-gray-200 hover:bg-slate-300 duration-500"
      >
        <img
          src={item.productImg}
          alt=""
          className="w-full h-4/5 object-cover"
        />
        <h3>{item.name}</h3>
        <p>PHP {item.price}</p>
        <button
          className="px-3 my-2 py-1 border-[2px] border-[tomato] rounded-3xl hover:bg-[tomato] hover:text-white duration-300"
          onClick={() => settingAddToCart(item)}
        >
          ADD TO CART
        </button>
      </div>
    ));

  return (
    <>
      <div className="productContainer text-center">
        <div className="md:text-xl text-left mb-10">
          <ul className="flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-[1em] sm:gap-[1em]">
            <li>
              <button
                className={`${
                  category == "allItems"
                    ? "bg-orange-600 text-white"
                    : "text-black bg-slate-200 "
                } font-semibold px-6 py-4  shadow-lg rounded-3xl hover:text-white duration-200 hover:shadow-md`}
                onClick={() => {
                  settingCategory("allItems");
                  settingPages(1);
                }}
              >
                All
              </button>
            </li>
            <li>
              <button
                className={`${
                  category == "hoodies"
                    ? "bg-orange-600 text-white"
                    : "text-black bg-slate-200 "
                } font-semibold px-6 py-4  shadow-lg rounded-3xl hover:text-white duration-200 hover:shadow-md`}
                onClick={() => {
                  settingCategory("hoodies");
                  settingPages(1);
                }}
              >
                Hoodies
              </button>
            </li>
            <li>
              <button
                className={`${
                  category == "jackets"
                    ? "bg-orange-600 text-white"
                    : "text-black bg-slate-200 "
                } font-semibold px-6 py-4  shadow-lg rounded-3xl hover:text-white duration-200 hover:shadow-md`}
                onClick={() => {
                  settingCategory("jackets");
                  settingPages(1);
                }}
              >
                Jackets
              </button>
            </li>
            <li>
              <button
                className={`${
                  category == "tshirts"
                    ? "bg-orange-600 text-white"
                    : "text-black bg-slate-200 "
                } font-semibold px-6 py-4  shadow-lg rounded-3xl hover:text-white duration-200 hover:shadow-md`}
                onClick={() => {
                  settingCategory("tshirts");
                  settingPages(1);
                }}
              >
                T-Shirts
              </button>
            </li>
            <li>
              <button
                className={`${
                  category == "poloshirts"
                    ? "bg-orange-600 text-white"
                    : "text-black bg-slate-200 "
                } font-semibold px-6 py-4  shadow-lg rounded-3xl hover:text-white duration-200 hover:shadow-md`}
                onClick={() => {
                  settingCategory("poloshirts");
                  settingPages(1);
                }}
              >
                Polo Shirts
              </button>
            </li>
          </ul>
        </div>

        {/* CHILD COMPONENTS OF PRODUCTS.JSX */}
        <main className="flex flex-wrap gap-8 justify-center">
          {displayedItems}
          {pages}
        </main>
      </div>
    </>
  );
}
export default Products;
