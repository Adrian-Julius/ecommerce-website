import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { cartProductsContext } from "./CartContext";

function Cart() {
  // IMPORTED VARIABLE
  const { addToCart, quantities, settingQuantities, removingItem, total } =
    useContext(cartProductsContext);

  return (
    <div className="cartContainer text-center px-3">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-9">
        MY SHOPPING CART
      </h1>
      <div>
        <div className="text-2xl sm:text-3xl text-orange-500 font-bold mb-10">
          Total: PHP {total.toFixed(2)}
        </div>

        {/* ADDED PRODUCTS */}
        <div>
          <ul className="text-center">
            {addToCart?.length > 0 ? (
              <>
                {/* Headers for Quantity, Products, and Prices */}
                {/* Map through products */}
                {addToCart.map((product, index) => (
                  <li
                    key={index}
                    className=" sm:w-4/5 mx-auto h-[30vh]  my-5 border-black border-[3px] rounded-lg"
                  >
                    {/* Product image and name */}
                    <div className="hidden sm:block float-left w-[170px] h-full mr-10 text-center border-black border-r-2">
                      <img
                        src={product.productImg}
                        alt="product Image"
                        className="w-full h-full"
                      />
                    </div>

                    <div className="text-center">
                      <span className="block py-3 text-xl font-semibold text-orange-600 underline underline-offset-8">
                        {product.name}
                      </span>
                      <span className="block text-lg  mx-5">
                        <button
                          onClick={() => settingQuantities("decrement", index)}
                          className="px-4 py-2 text-lg rounded-2xl bg-slate-200 hover:bg-orange-600 hover:text-white duration-200"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={quantities[index]}
                          readOnly
                          className="w-14 text-center text-3xl rounded-xl mx-2"
                        />
                        <button
                          onClick={() => settingQuantities("increment", index)}
                          className="px-4 py-2 text-lg rounded-2xl bg-slate-200 hover:bg-orange-600 hover:text-white duration-200 "
                        >
                          +
                        </button>
                      </span>

                      {/* Total */}
                      <span className="block py-2 mx-5 text-xl">
                        PHP {(product.price * quantities[index]).toFixed(2)}
                      </span>

                      <button
                        onClick={() => removingItem(index)}
                        className=" px-5 py-2 mx-5 text-lg rounded-2xl bg-orange-600 text-white duration-200 "
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </>
            ) : (
              <div>
                <h1 className="text-4xl my-12">"No items in your cart yet."</h1>
                <NavLink
                  to={"/products"}
                  onClick={() => settingCategory("allItems")}
                  className="text-2xl lg:text-4xl text-black px-5 py-3 my-3 border-[3px] border-[tomato] rounded-3xl hover:bg-[tomato] duration-300"
                >
                  SHOP NOW!
                </NavLink>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cart;
