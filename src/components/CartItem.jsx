/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/CartSlice.jsx";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="mt-5 flex w-[full] gap-3 border-b-[1px] border-gray-300 p-2">
      <img
        src={item.image}
        alt=""
        className="h-28 w-28 border-b-[1px] border-t-[1px] border-gray-500 object-contain p-2"
      />
      <div className="flex w-[70%] gap-5">
        <div className="flex w-[80%] flex-col">
          <h1 className="text-l mb-5 w-full font-medium">{item.name}</h1>
          <p className="mb-3 text-sm text-gray-500">Size: {item.size}</p>

          <div className="mb-6 flex gap-5">
            <button
              className="rounded-full bg-green-500 px-2 py-1 text-sm text-white/85"
              onClick={() => dispatch(addToCart(item))}
            >
              Add
            </button>
            <button
              className="rounded-full bg-red-500 px-2 py-1 text-sm text-white/90"
              onClick={() => dispatch(removeFromCart(item))}
            >
              Remove
            </button>
          </div>
        </div>
        <div className="flex w-[20%] flex-col gap-8">
          <p>
            Rs.
            {(
              parseFloat(item.price.replace(/^Rs\.\s*/, "")) * item.quantity
            ).toFixed(2)}
          </p>

          <p className="mb- text-sm text-gray-500">Quantity:{item.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
