/* eslint-disable react/prop-types */
import logo from "./../assets/logo.png";
const Footer = ({ footerRef }) => {
  return (
    <>
      <div
        ref={footerRef}
        className="flex gap-3 border-t-[1px] px-5 py-10 shadow-sm"
      >
        <div className="flex w-[60%] flex-col gap-10">
          <div className="flex items-center gap-2">
            <img className="h-20 w-20" src={logo} alt="logo" />
            <h2 className="hidden text-3xl font-bold tracking-widest text-slate-600 lg:block">
              ShoeSphere
            </h2>
          </div>
          <p className="hidden md:block">
            ShoeSphere: Stepping into Style, Elevating Comfort – Your Premier
            Destination for Unparalleled Footwear Exploration and Excellence.
          </p>
          <div className="hidden items-center gap-2 xl:flex">
            <span className="text-2xl">📧</span>
            <p>ShoeSphere@gmail.com</p>
          </div>
        </div>
        <div className="hidden w-[15%] flex-col gap-6 sm:flex">
          <p className="font-semibold">Sitemap</p>
          <div className="flex flex-col gap-1">
            <a href="/" className="text-gray-600 hover:text-gray-400">
              Home
            </a>
            <a href="/products" className="text-gray-600 hover:text-gray-400">
              Shop
            </a>
            <a href="" className="text-gray-600 hover:text-gray-400">
              About Us
            </a>
            <a href="" className="text-gray-600 hover:text-gray-400">
              Contact Us
            </a>
          </div>
        </div>
        <div className="hidden w-[20%] flex-col gap-6 lg:flex">
          <p className="font-semibold">Information</p>
          <div className="flex flex-col gap-1">
            <a href="" className="text-gray-600 hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="" className="text-gray-600 hover:text-gray-400">
              Terms & Conditions
            </a>
            <a href="" className="text-gray-600 hover:text-gray-400">
              Contact
            </a>
            <a href="" className="text-gray-600 hover:text-gray-400">
              FAQs
            </a>
          </div>
        </div>
        <div className="flex w-[25%] flex-col gap-6">
          <p className="font-semibold">Connect With Us</p>
          <div className="flex flex-col gap-1">
            <a
              href="https://www.linkedin.com/"
              className="text-black-200 text-3xl text-blue-700 hover:text-gray-400"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-3xl text-red-400 hover:text-gray-400"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a
              href="https://x.com/"
              className="text-3xl text-blue-300 hover:text-gray-400"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        © Copyright {new Date().getFullYear()} ShoeSphere. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
