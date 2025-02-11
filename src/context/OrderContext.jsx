/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderData, setOrderData] = useState({
    name: "",
    emailAddress: "",
    phoneNumber: "",
    province: "",
    city: "",
    address: "",
    cart: [],
  });

  const updateOrderData = (key, value) => {
    setOrderData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const cart = useSelector((state) => state.cart.value);

  useEffect(() => {
    setOrderData((prevData) => ({
      ...prevData,
      cart: cart,
    }));
  }, [cart]);

  return (
    <OrderContext.Provider value={{ orderData, updateOrderData }}>
      {children}
    </OrderContext.Provider>
  );
};
