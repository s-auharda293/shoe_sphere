import CartNavigator from "../components/ui/CartNavigator";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.value);

  return (
    <>
      <CartNavigator active="1" />
      <h1 className="mb-5 mt-10 text-center text-2xl font-semibold uppercase md:my-0">
        Cart Details
      </h1>
      <div className="flex h-screen w-full flex-col gap-10 md:mt-10 md:h-[30rem] md:flex-row md:p-5 lg:p-8">
        {cart.length === 0 ? (
          <>
            <p className="font-lg w-full overflow-y-auto">CART IS EMPTY</p>
            {navigate("/products")}
          </>
        ) : (
          <div className="w-full overflow-y-auto border-t-2">
            {cart.map((cartItem) => {
              return <CartItem key={cartItem.id} item={cartItem} />;
            })}
          </div>
        )}

        <div className="mx-auto mb-10 w-3/4 rounded-lg border-2 border-gray-300 p-6 md:h-[40%]">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">Total</h2>
              <p className="mb-4 text-sm text-gray-500">Includes VAT*</p>
            </div>
            <div>
              <p className="font-semibold">
                {" "}
                {`£${cart.reduce((acc, curr) => {
                  const price = parseFloat(curr.price.replace(/[^\d.-]/g, ""));
                  return acc + price * curr.quantity;
                }, 0)}`}
              </p>
            </div>
          </div>
          <a
            onClick={() => {
              cart.length !== 0 ? navigate("/shipping") : navigate("/products");
            }}
            className="w-full cursor-pointer rounded-full bg-green-500 px-2 py-2 text-sm text-white/85"
          >
            Next
          </a>
        </div>
      </div>
    </>
  );
};

export default Cart;
