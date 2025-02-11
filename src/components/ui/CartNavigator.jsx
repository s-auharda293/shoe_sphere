/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const CartNavigator = ({ active }) => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.value);

  return (
    <div className="relative mb-14 mt-10 hidden w-full items-center py-10 md:flex">
      <div className="z-10 mx-auto flex w-1/2 justify-between">
        <div
          onClick={() => {
            navigate(cart.length !== 0 ? "/cart" : "/products");
          }}
          className="cursor-pointer"
        >
          {active === "1" ? (
            <div className="flex flex-col">
              <p className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-900 bg-white p-1 font-semibold text-gray-900 transition duration-100 hover:bg-lime-500">
                01
              </p>
              <p className="absolute bottom-0 hidden -translate-x-1/4 transform text-sm font-medium text-gray-900">
                Shopping Cart
              </p>
            </div>
          ) : (
            <div className="flex flex-col">
              <p className="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white p-1 font-semibold text-gray-500 transition duration-100 hover:bg-lime-500 hover:text-gray-900">
                01
              </p>
              <p className="absolute bottom-0 hidden -translate-x-1/4 transform text-sm text-gray-500">
                Shopping Cart
              </p>
            </div>
          )}
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate(cart.length !== 0 ? "/shipping" : "/products");
          }}
        >
          {active === "2" ? (
            <div className="flex flex-col">
              <p className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-900 bg-white p-1 font-semibold text-gray-900 transition duration-100 hover:bg-lime-500">
                02
              </p>
              <p className="absolute bottom-0 hidden -translate-x-1/4 transform text-sm font-medium text-gray-900">
                Shipping
              </p>
            </div>
          ) : (
            <div className="flex flex-col">
              <p className="hover: flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white p-1 font-semibold text-gray-500 transition duration-100 hover:bg-lime-500 hover:text-gray-900">
                02
              </p>
              <p className="absolute bottom-0 hidden -translate-x-1/4 transform text-sm text-gray-500">
                Shipping
              </p>
            </div>
          )}
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate(cart.length !== 0 ? "/payment" : "/products");
          }}
        >
          {active === "3" ? (
            <div className="flex flex-col">
              <p className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-900 bg-white p-1 font-semibold text-gray-900 transition duration-100 hover:bg-lime-500">
                03
              </p>
              <p className="absolute bottom-0 hidden -translate-x-1/4 transform text-sm font-medium text-gray-900">
                Payment info
              </p>
            </div>
          ) : (
            <div className="flex flex-col">
              <p className="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white p-1 font-semibold text-gray-500 transition duration-100 hover:bg-lime-500 hover:text-gray-900">
                03
              </p>
              <p className="absolute bottom-0 hidden -translate-x-1/4 transform text-sm text-gray-500">
                Payment info
              </p>
            </div>
          )}
        </div>
      </div>
      {active === "1" ? (
        <>
          <div className="absolute left-[25%] right-[50%] top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-900"></div>
          <div className="absolute left-[50%] right-[25%] top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-300"></div>
        </>
      ) : active === "2" ? (
        <>
          <div className="absolute left-[50%] right-[25%] top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-900"></div>
          <div className="absolute left-[25%] right-[50%] top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-300"></div>
        </>
      ) : (
        <div className="absolute left-[25%] right-[25%] top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-300"></div>
      )}
    </div>
  );
};

export default CartNavigator;
