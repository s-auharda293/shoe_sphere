import CartNavigator from "../components/ui/CartNavigator";
// import esewa from "../assets/payment/esewa.png";
// import stripe from "../assets/payment/stripe.png";
import cod from "../assets/payment/cash-on-delivery.png";
// import { useNavigate } from "react-router-dom";
import { OrderContext } from "../context/OrderContext";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../store/CartSlice";

const Payment = () => {
  const dispatch = useDispatch();
  const { orderData } = useContext(OrderContext);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart.value);
  if (cart.length === 0) {
    navigate("/products");
  }

  const handleSubmit = async (e) => {
    setDisabled(true);
    e.preventDefault();
    try {
      const formData = new FormData();

      if (!orderData) {
        toast.error("Cart is empty or contact information isn't filled!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setDisabled(false);
        navigate("/shipping");
        return;
      }
      let message;

      for (const item of orderData.cart) {
        formData.append("name", orderData.name);
        formData.append("emailAddress", orderData.emailAddress);
        formData.append("phoneNumber", orderData.phoneNumber);
        formData.append("province", orderData.province);
        formData.append("city", orderData.city);
        formData.append("address", orderData.address);
        formData.append("shoeName", item.name);
        formData.append("price", item.price);
        formData.append("size", item.size);
        formData.append("id", item.id);
        formData.append("quantity", item.quantity);
        formData.append("paymentMethod", paymentMethod);

        const formLink =
          "https://script.google.com/macros/s/AKfycbx_JQJhS7al5buyEvk3zfSLy4zdDdXQkJzyTkkWiVN34HZn0kBfSqbRW0kr_Iypze0/exec";

        const response = await fetch(formLink, {
          method: "POST",
          body: formData,
        });

        message = await response.text();
        message = JSON.parse(message);
        if (message.status === 400 || message.status === 500) {
          toast.error(message.message, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          setDisabled(false);
          navigate("/");
        }
      }
      if (message.status === 200) {
        toast.success(message.message, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setDisabled(false);
        navigate("/");
        dispatch(clearCart());
      }
    } catch (err) {
      // console.log("Error occurred in submitting data", err);
      toast.error("Error in submitting data to form", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setDisabled(false);
    }
  };

  return (
    <div className="mb-20">
      <CartNavigator active="3" />
      <h1 className="mb-5 mt-10 text-center text-2xl font-semibold uppercase md:mb-2 md:mt-0">
        Payment
      </h1>
      <div className="flex w-full flex-col gap-10 md:flex-row md:p-8">
        <div className="mx-auto h-3/4 w-3/4 rounded-md border p-4 shadow-sm md:w-1/2">
          <button
            className={`${paymentMethod === "COD" ? "border-green-400" : ""} mb-0 flex h-full w-full items-center justify-center gap-2 rounded-lg border-2 border-gray-300 p-2 text-gray-500 transition-all duration-300 hover:cursor-pointer hover:border-green-400`}
            onClick={() => setPaymentMethod("COD")}
          >
            <img src={cod} alt="" className="h-8 w-8" />
            <p>Cash on delivery</p>
          </button>
          {/* <div className="flex h-1/2 items-center justify-center gap-2 rounded-lg border-2 border-gray-300 p-2 text-gray-500 transition-all duration-300 hover:cursor-pointer hover:border-purple-900">
            <img src={stripe} alt="" className="h-8 w-8 rounded-md" />
            <p>Stripe</p>
          </div> */}
        </div>
        <div className="mx-auto w-3/4 rounded-md border-2 px-2 py-2 text-sm text-black/60 md:w-1/2 lg:w-[calc(50%-15rem)]">
          <div className="flex justify-between md:p-3">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">Total</h2>
              <p className="mb-4 text-sm text-gray-500">Includes VAT*</p>
            </div>
            <div>
              <p className="font-semibold">
                {" "}
                {`Rs.${cart.reduce((acc, curr) => {
                  let price = parseFloat(curr.price.replace(/^Rs\.\s*/, ""));
                  return acc + price * curr.quantity;
                }, 0)}`}
              </p>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full rounded-full bg-green-500 px-2 py-2 text-sm text-white disabled:bg-green-300"
            disabled={disabled}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
