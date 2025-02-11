/* eslint-disable react/prop-types */
import { useState } from "react";
import logo from "./../assets/logo.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = ({ footerRef }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const cartitems = useSelector((state) => state.cart.value);

  const scrollToFooter = (e) => {
    e.preventDefault();
    if (footerRef && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      footerRef?.current?.scrollIntoView({ behavior: "smooth" });
    }, 2000);
  };

  const handleCartClick = (e) => {
    if (cartitems.length === 0) {
      e.preventDefault();
      toast.error("Cart is empty!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      navigate("/cart");
    }
  };
  return (
    <div
      className={`flex h-auto w-[full] lg:w-full ${menu ? "flex-col" : ""} items-center justify-around p-3 px-4 lg:mb-0 lg:flex-row lg:border-b-[1px]`}
    >
      <div className="flex items-center gap-2 p-3 lg:p-0">
        <img className="h-20 w-20" src={logo} alt="logo" />
        <h2 className="hidden font-bold tracking-widest text-slate-600 lg:text-3xl xl:block xl:text-xl">
          ShoeSphere
        </h2>
      </div>
      <div className="hidden lg:flex lg:gap-32">
        <div className="items-center gap-20 lg:flex">
          <a
            href="/"
            className="border-red-600 text-lg hover:border-b-2 hover:py-1 hover:text-slate-700"
          >
            Home
          </a>
          <a
            href="/products"
            className="border-red-600 text-lg hover:border-b-2 hover:py-1 hover:text-slate-700"
          >
            Shop
          </a>
          <a
            href=""
            onClick={scrollToFooter}
            className="border-red-600 text-lg hover:border-b-2 hover:py-1 hover:text-slate-700"
          >
            About Us
          </a>
          <a
            href=""
            onClick={handleContactClick}
            className="border-red-600 text-lg hover:border-b-2 hover:py-1 hover:text-slate-700"
          >
            Contact Us
          </a>
        </div>
        <div className="items-center gap-8 lg:flex">
          <div>
            <a
              className="relative text-3xl hover:text-slate-400"
              onClick={handleCartClick}
            >
              <ion-icon name="cart-outline"></ion-icon>
              <span className="absolute -right-[40%] -top-[30%] flex h-6 w-6 items-center justify-center rounded-full bg-orange-700 p-2 text-sm text-white">
                {cartitems.length}
              </span>
            </a>
          </div>
          {/* <a href="/orderedItems" className="text-2xl hover:text-slate-400">
            <ion-icon name="person-outline"></ion-icon>
          </a> */}
        </div>
      </div>
      <div className="lg:hidden">
        {menu ? (
          <>
            <div className="relative flex flex-col items-center justify-center gap-4">
              <p
                onClick={() => {
                  setMenu((menu) => {
                    return !menu;
                  });
                }}
                className="text-xl text-red-500"
              >
                X
              </p>
              <a
                href="/"
                className="border-red-600 hover:border-b-2 hover:py-1 hover:text-slate-700"
              >
                Home
              </a>
              <a
                href="/products"
                className="border-red-600 hover:border-b-2 hover:py-1 hover:text-slate-700"
              >
                Shop
              </a>
              <a
                href=""
                onClick={scrollToFooter}
                className="border-red-600 hover:border-b-2 hover:py-1 hover:text-slate-700"
              >
                About Us
              </a>
              <a
                href=""
                onClick={scrollToFooter}
                className="border-red-600 hover:border-b-2 hover:py-1 hover:text-slate-700"
              >
                Contact Us
              </a>
            </div>
          </>
        ) : (
          <div className="w-30 flex items-center gap-7">
            <span
              onClick={() => {
                setMenu((menu) => !menu);
              }}
            >
              ☰
            </span>
            <div>
              <a
                href={cartitems.length !== 0 ? "/cart" : "#"}
                className="relative text-3xl hover:text-slate-400"
              >
                <ion-icon name="cart-outline"></ion-icon>
                <span className="absolute -right-[40%] -top-[30%] flex h-6 w-6 items-center justify-center rounded-full bg-orange-700 p-2 text-sm text-white">
                  {cartitems.length}
                </span>
              </a>
            </div>
            <a href="" className="text-2xl hover:text-slate-400">
              <ion-icon name="person-outline"></ion-icon>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
