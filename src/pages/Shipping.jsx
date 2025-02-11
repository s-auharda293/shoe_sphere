import CartNavigator from "../components/ui/CartNavigator";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../context/useOrder.js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Shipping = () => {
  const navigate = useNavigate();
  const { orderData, updateOrderData } = useOrder();
  const [disabled, setDisabled] = useState(false);
  const cart = useSelector((state) => state.cart.value);

  const [name, setName] = useState(orderData?.name || "");
  const [emailAddress, setEmailAddress] = useState(
    orderData?.emailAddress || "",
  );
  const [phoneNumber, setPhoneNumber] = useState(orderData?.phoneNumber || "");
  const [province, setProvince] = useState(orderData?.province);
  const [city, setCity] = useState(orderData?.city || "");
  const [address, setAddress] = useState(orderData?.address || "");

  if (cart.length === 0) {
    navigate("/products");
    toast.error("Cart is empty!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  const handleSave = (e) => {
    setDisabled(true);
    e.preventDefault();

    if (
      name == "" ||
      emailAddress == "" ||
      phoneNumber == "" ||
      city == "" ||
      address == ""
    ) {
      toast.error("Please fill in all the required fields.", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setDisabled(false);
      return;
    }

    toast.success("Contact Information has been saved!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setDisabled(false);

    navigate("/payment");
  };
  return (
    <>
      <CartNavigator active="2" />
      <h1 className="mb-5 mt-10 text-center text-2xl font-semibold uppercase md:mb-2 md:mt-0">
        Shipping
      </h1>
      <div className="flex h-auto w-full flex-col gap-10 md:m-10 md:flex-row lg:p-8">
        <div className="w-full overflow-hidden rounded-md p-4 shadow-sm md:w-[50%] md:border">
          <p className="m-3 text-center text-lg font-medium uppercase lg:text-xl">
            Address
          </p>
          <form className="mx-auto flex w-auto flex-col items-center justify-center gap-3">
            <div className="flex flex-col gap-3 md:mt-10">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm lg:text-base">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="w-64 rounded-xl border-2 px-3 py-1 outline-1 outline-blue-400 transition-all duration-300 placeholder:text-sm focus:ring-2 focus:ring-blue-500 md:w-72 lg:w-[28rem] lg:text-base xl:w-[32rem]"
                  placeholder="Enter name"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => {
                    const value = e.target.value;
                    setName(value);
                    updateOrderData("name", value);
                  }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm lg:text-base">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  className="w-64 rounded-xl border-2 px-3 py-1 outline-1 outline-blue-400 transition-all duration-300 placeholder:text-sm focus:ring-2 focus:ring-blue-500 md:w-72 lg:w-[28rem] lg:text-base xl:w-[32rem]"
                  placeholder="Enter email"
                  id="email"
                  required
                  value={emailAddress}
                  onChange={(e) => {
                    const value = e.target.value;
                    setEmailAddress(value);

                    updateOrderData("emailAddress", value);
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-sm lg:text-base" htmlFor="phone">
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="w-64 rounded-xl border-2 px-3 py-1 outline-1 outline-blue-400 transition-all duration-300 placeholder:text-sm focus:ring-2 focus:ring-blue-500 md:w-72 lg:w-[28rem] lg:text-base xl:w-[32rem]"
                  placeholder="Enter phone"
                  id="phone"
                  required
                  value={phoneNumber}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPhoneNumber(value);

                    updateOrderData("phoneNumber", value);
                  }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm lg:text-base" htmlFor="phone">
                  Province <span className="text-red-600">*</span>
                </label>

                <select
                  className="w-64 rounded-xl border-2 px-3 py-1 outline-1 outline-blue-400 transition-all duration-300 placeholder:text-sm focus:ring-2 focus:ring-blue-500 md:w-72 lg:w-[28rem] lg:text-base xl:w-[32rem]"
                  value={province}
                  onChange={(e) => {
                    const value = e.target.value;
                    setProvince(value);

                    updateOrderData("province", value);
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-sm lg:text-base" htmlFor="city">
                  City <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="w-64 rounded-xl border-2 px-3 py-1 outline-1 outline-blue-400 transition-all duration-300 placeholder:text-sm focus:ring-2 focus:ring-blue-500 md:w-72 lg:w-[28rem] lg:text-base xl:w-[32rem]"
                  placeholder="Enter City"
                  id="city"
                  value={city}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCity(value);

                    updateOrderData("city", value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="address">
                Address <span className="text-red-600">*</span>
              </label>
              <textarea
                className="w-64 overflow-auto rounded-xl border-2 px-3 py-1 outline-1 outline-blue-400 transition-all duration-300 placeholder:text-sm focus:ring-2 focus:ring-blue-500 md:w-72 lg:w-[28rem] lg:text-base xl:w-[32rem]"
                name="address"
                id="address"
                rows={3}
                placeholder="Building name/street name/Land mark"
                cols={5}
                value={address}
                onChange={(e) => {
                  const value = e.target.value;
                  setAddress(value);

                  updateOrderData("address", value);
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              onClick={handleSave}
              className="my-4 h-10 w-64 rounded-full bg-green-500 text-white md:w-72 lg:w-[28rem] xl:w-[32rem]"
              disabled={disabled}
            >
              Save
            </button>
          </form>
        </div>
        <div className="mx-auto mb-10 h-2/3 w-3/4 rounded-lg border-2 border-gray-300 p-6 md:w-[30%] lg:w-[30%]">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold">Total</h2>
              <p className="mb-4 text-sm text-gray-500 lg:text-base">
                Includes VAT*
              </p>
            </div>
            <div>
              <p className="font-semibold">
                {" "}
                {`Rs.${cart.reduce((acc, curr) => {
                  const price = parseFloat(curr.price.replace(/[^\d.-]/g, ""));
                  return acc + price * curr.quantity;
                }, 0)}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
