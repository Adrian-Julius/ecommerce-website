//HOODIES Images
import hoodie1 from "./Images/hoodie1.jpg";
import hoodie2 from "./Images/hoodie2.jpg";
import hoodie3 from "./Images/hoodie3.jpg";
import hoodie4 from "./Images/hoodie4.jpg";
import hoodie5 from "./Images/hoodie5.jpg";
import hoodie6 from "./Images/hoodie6.jpg";
import hoodie7 from "./Images/hoodie7.jpg";
import hoodie8 from "./Images/hoodie8.jpg";
import hoodie9 from "./Images/hoodie9.jpg";

//JACKETS Images
import jacket1 from "./Images/jacket1.jpg";
import jacket2 from "./Images/jacket2.jpg";
import jacket3 from "./Images/jacket3.jpg";
import jacket4 from "./Images/jacket4.jpg";
import jacket5 from "./Images/jacket5.jpg";
import jacket6 from "./Images/jacket6.jpg";
import jacket7 from "./Images/jacket7.jpg";
import jacket8 from "./Images/jacket8.jpg";
import jacket9 from "./Images/jacket9.jpg";

// TSHIRTS Images
import tshirt1 from "./Images/tshirt1.jpg";
import tshirt2 from "./Images/tshirt2.jpg";
import tshirt3 from "./Images/tshirt3.jpg";
import tshirt4 from "./Images/tshirt4.jpg";
import tshirt5 from "./Images/tshirt5.jpg";
import tshirt6 from "./Images/tshirt6.jpg";
import tshirt7 from "./Images/tshirt7.jpg";
import tshirt8 from "./Images/tshirt8.jpg";
import tshirt9 from "./Images/tshirt9.jpg";

//POLO SHIRTS Images
import poloshirt1 from "./Images/poloshirt1.jpg";
import poloshirt2 from "./Images/poloshirt2.jpg";
import poloshirt3 from "./Images/poloshirt3.jpg";
import poloshirt4 from "./Images/poloshirt4.jpg";
import poloshirt5 from "./Images/poloshirt5.jpg";
import poloshirt6 from "./Images/poloshirt6.jpg";
import poloshirt7 from "./Images/poloshirt7.jpg";
import poloshirt8 from "./Images/poloshirt8.jpg";
import poloshirt9 from "./Images/poloshirt9.jpg";

import { createContext, useState, useEffect } from "react";

export const cartProductsContext = createContext();

function CartContext({ children }) {
  //INITIALIZATIONS
  const [addToCart, setAddToCart] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [itemNum, setItemNum] = useState(0);
  const [total, setTotal] = useState(0);
  const [category, setCategory] = useState("allItems");

  // ADD TO CART FUNCTION
  const settingAddToCart = (inputted) => {
    // Check if the item already exists in the cart
    const exists = addToCart.some((item) => item.id === inputted.id);

    if (exists) {
      setQuantities((quantities) => {
        const updatedQuantities = [...quantities];
        const index = addToCart.findIndex((item) => item.id === inputted.id);

        // Increment the quantity of the existing product
        updatedQuantities[index] += 1;
        return updatedQuantities;
      });
    } else {
      // Item does not exist, add it
      setAddToCart((prev) => [...prev, inputted]);
      setQuantities((prev) => [...prev, 1]);
    }

    //ITEM COUNTER - increment if Add to Cart was clicked
    setItemNum(itemNum + 1);
  };

  //CALCULATE THE TOTAL EVERYTIME addToCart and quantities change
  useEffect(() => {
    if (addToCart.length > 0) {
      const calculatedTotal = addToCart.reduce((prev, curr, index) => {
        const quantity = quantities[index];
        const price = curr.price;
        return prev + price * quantity; //default = 0 if undefined
      }, 0);

      setTotal(calculatedTotal);
    } else {
      setTotal(0);
    }
  }, [addToCart, quantities]);

  // QUANTITIES and PRICES
  const settingQuantities = (type, index) => {
    setQuantities((quantities) => {
      const updatedQuantities = [...quantities];

      if (type === "increment") {
        updatedQuantities[index] = (updatedQuantities[index] || 0) + 1;

        //ITEMS COUNTER - increment
        setItemNum(itemNum + 1);
      } else if (type === "decrement" && updatedQuantities[index] > 1) {
        updatedQuantities[index] -= 1;

        //ITEMS COUNTER - decrement
        if (itemNum > 1) {
          setItemNum(Math.max(itemNum - 1, 0));
        }
      }
      return updatedQuantities;
    });
  };

  //REMOVE ITEM FUNCTION
  const removingItem = (index) => {
    const updatedItems = addToCart.filter((product, i) => i !== index);
    setAddToCart(updatedItems);

    setQuantities((quantities) =>
      quantities.filter((product, i) => i !== index)
    );

    //ITEMS COUNTER - decrement if remove
    if (itemNum > 0) {
      setItemNum((item) => item - quantities[index]);
    }
  };

  //PRODUCT CATEGORY
  function settingCategory(categoryInput) {
    setCategory(categoryInput);
  }

  const categories = {
    // HOODIES INFO
    hoodies: [
      { id: 1, productImg: hoodie1, name: "Loose Grey Hoodie", price: 1299.99 },
      {
        id: 2,
        productImg: hoodie2,
        name: "Loose Black Hoodie",
        price: 959.99,
      },
      {
        id: 3,
        productImg: hoodie3,
        name: "Loose Coffee Hoodie",
        price: 1199.99,
      },
      {
        id: 4,
        productImg: hoodie4,
        name: "Loose Black Hoodie",
        price: 1099.99,
      },
      {
        id: 5,
        productImg: hoodie5,
        name: "Loose Printed Hoodie",
        price: 1259.99,
      },
      {
        id: 6,
        productImg: hoodie6,
        name: "Loose White Hoodie",
        price: 1499.99,
      },
      {
        id: 7,
        productImg: hoodie7,
        name: "Printed White Hoodie",
        price: 1199.99,
      },
      {
        id: 8,
        productImg: hoodie8,
        name: "Dark Blue Hoodie",
        price: 1999.99,
      },
      {
        id: 9,
        productImg: hoodie9,
        name: "Faded Brown Hoodie",
        price: 1489.99,
      },
    ],

    // JACKETS INFO
    jackets: [
      {
        id: 10,
        productImg: jacket1,
        name: "Regular Brown Jacket",
        price: 1599.99,
      },
      {
        id: 11,
        productImg: jacket2,
        name: "Regular Coffee Jacket",
        price: 1499.99,
      },
      {
        id: 12,
        productImg: jacket3,
        name: "Regular Black Jacket",
        price: 1559.99,
      },
      {
        id: 13,
        productImg: jacket4,
        name: "Regular Dark Jacket",
        price: 1349.99,
      },
      {
        id: 14,
        productImg: jacket5,
        name: "Regular Grey Jacket",
        price: 1699.99,
      },
      {
        id: 15,
        productImg: jacket6,
        name: "Regular Snow Jacket",
        price: 1759.99,
      },
      {
        id: 16,
        productImg: jacket7,
        name: "Leather Dark Jacket",
        price: 1449.99,
      },
      {
        id: 18,
        productImg: jacket8,
        name: "Coated Dark Jacket",
        price: 1489.99,
      },
      {
        id: 18,
        productImg: jacket9,
        name: "Regular Brown Jacket",
        price: 1559.99,
      },
    ],

    // TSHIRTS INFO
    tshirts: [
      { id: 19, productImg: tshirt1, name: "Loose Fit T-shirt", price: 799.99 },
      {
        id: 20,
        productImg: tshirt2,
        name: "Loose Fit Printed T-shirt",
        price: 859.99,
      },
      {
        id: 21,
        productImg: tshirt3,
        name: "Loose Fit Coffee T-shirt",
        price: 899.99,
      },
      {
        id: 22,
        productImg: tshirt4,
        name: "Loose Fit Metallic T-shirt",
        price: 959.99,
      },
      {
        id: 23,
        productImg: tshirt5,
        name: "Loose Fit Black T-shirt",
        price: 999.99,
      },
      {
        id: 24,
        productImg: tshirt6,
        name: "Loose Fit Jaws T-shirt",
        price: 1099.99,
      },
      {
        id: 25,
        productImg: tshirt7,
        name: "Loose Plain Black T-shirt",
        price: 939.99,
      },
      {
        id: 26,
        productImg: tshirt8,
        name: "Loose Fit Printed T-shirt",
        price: 959.99,
      },
      {
        id: 27,
        productImg: tshirt9,
        name: "Loose Fit Nirvana T-shirt",
        price: 1499.99,
      },
    ],

    // POLOSHIRTS INFO
    poloshirts: [
      {
        id: 28,
        productImg: poloshirt1,
        name: "Dark Blue Polo shirt",
        price: 659.99,
      },
      {
        id: 29,
        productImg: poloshirt2,
        name: "Slim Plain Polo shirt",
        price: 749.99,
      },
      {
        id: 30,
        productImg: poloshirt3,
        name: "Slim Brown Polo shirt",
        price: 899.99,
      },
      {
        id: 31,
        productImg: poloshirt4,
        name: "Slim Diamond Polo shirt",
        price: 999.99,
      },
      {
        id: 32,
        productImg: poloshirt5,
        name: "Slim Blue Polo shirt",
        price: 849.99,
      },
      {
        id: 33,
        productImg: poloshirt6,
        name: "Loose mose Polo Shirt",
        price: 949.99,
      },

      {
        id: 34,
        productImg: poloshirt7,
        name: "Fitted Blue Polo shirt",
        price: 1099.99,
      },
      {
        id: 35,
        productImg: poloshirt8,
        name: "Slim Faded Polo shirt",
        price: 1059.99,
      },
      {
        id: 36,
        productImg: poloshirt9,
        name: "Plain Blue Polo Shirt",
        price: 999.99,
      },
    ],

    allItems: function () {
      return [
        ...this.hoodies,
        ...this.jackets,
        ...this.tshirts,
        ...this.poloshirts,
      ];
    },
  };

  return (
    <cartProductsContext.Provider
      value={{
        category,
        settingCategory,
        categories,
        addToCart,
        quantities,
        itemNum,
        settingAddToCart,
        settingQuantities,
        removingItem,
        total,
      }}
    >
      {children}
    </cartProductsContext.Provider>
  );
}

export default CartContext;
