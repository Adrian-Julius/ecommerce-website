import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//CONTEXT COMPONENT
import CartContext from "./Components/CartContext";

// ECOMMERCE COMPONENTS
import Ecommerce from "./Components/Ecommerce";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import ContactUs from "./Components/ContactUs";
import Cart from "./Components/Cart";
import ErrorPath from "./Components/ErrorPath";

// REACT ROUTER
const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Ecommerce />,
    errorElement: <ErrorPath />,
    children: [
      { index: true, element: <Home /> }, //index: true     // render renders when the parent path matches exactly
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "contact", element: <ContactUs /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

function App() {
  return (
    <>
      <CartContext>
        <RouterProvider router={myRouter} />
      </CartContext>
    </>
  );
}

export default App;
