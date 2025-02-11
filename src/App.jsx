import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import ProductDetails from "./pages/ProductDetails";
import ProductGrid from "./pages/ProductGrid";
import Shipping from "./pages/Shipping";
// import OrderedItems from "./pages/OrderedItems";
import { ProductContext } from "./context/productContext";
import { OrderProvider } from "./context/OrderContext";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      // { path: "login", element: <Login /> },
      // { path: "register", element: <Register /> },
      { path: "cart", element: <Cart /> },
      { path: "payment", element: <Payment /> },
      { path: "productDetails/:id", element: <ProductDetails /> },
      { path: "products", element: <ProductGrid /> },
      { path: "shipping", element: <Shipping /> },
      // { path: "orderedItems", element: <OrderedItems /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage message="404 no page found" />,
  },
]);

const App = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/products`);
      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        console.error("Fetch error:", response.statusText);
      }
    } catch (error) {
      // console.log(error);
      toast.error(error, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <ToastContainer />
      <ProductContext.Provider value={{ data }}>
        <OrderProvider value={{ orderData: {}, updateOrderData: () => {} }}>
          <RouterProvider router={router} />
        </OrderProvider>
      </ProductContext.Provider>
    </>
  );
};

export default App;
