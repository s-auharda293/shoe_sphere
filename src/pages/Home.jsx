import Hero from "../assets/hero-1.jpg";
import Card from "../components/Card";
import Slider from "../components/Slider";
import Testimonials from "../components/ui/Testimonials";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [featureProduct, setfeatureProduct] = useState([]);
  const { data } = useContext(ProductContext);

  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const startIndex = Math.floor(Math.random() * 590);
    setfeatureProduct(data.slice(startIndex, startIndex + 8));
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setDisabled(true);
      const formData = new FormData();
      if (!name || !emailAddress || !phoneNumber) {
        toast.error("Please enter all details!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
      }
      formData.append("name", name);
      formData.append("emailAddress", emailAddress);
      formData.append("phoneNumber", phoneNumber);

      const formLink =
        "https://script.google.com/macros/s/AKfycbx5g9hNMOOs915wn1ssHMZ25mrYpK7YYXfgjVSmtTxnrEeZNk9aPCdLgxaShk-VPQQw/exec";

      const response = await fetch(formLink, {
        method: "POST",
        body: formData,
      });

      const message = await response.text();

      toast.success(message, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setDisabled(false);
      setName("");
      setEmailAddress("");
      setPhoneNumber("");
    } catch (err) {
      // console.log("Error occurred in submitting data", err);
      toast.error("Error occurred in submitting data", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <div className="mb-10">
        {/* hero-section */}
        <div>
          <div className="relative h-auto w-full">
            <div className="absolute left-9 top-[20rem] z-10 translate-x-[15%] transform md:top-[45rem] md:w-full lg:left-[-7rem] lg:top-60">
              <h1 className="w-[auto] bg-white/30 p-2 text-lg tracking-tight text-white/90 backdrop-blur-md transition-all duration-300 hover:rounded hover:bg-slate-500 md:w-[29rem] md:text-5xl">
                Find Your Sole Mate
              </h1>
              <h1 className="absolute right-52 top-96 hidden w-[36rem] bg-white/30 p-2 text-6xl tracking-tight text-white/90 backdrop-blur-md duration-300 hover:rounded hover:bg-slate-500 lg:inline-block">
                Explore our exclusive collection of stylish and comfortable
                shoes for every occasion.
              </h1>
              <button
                onClick={() => {
                  navigate("/products");
                }}
                className="absolute top-[3rem] rounded-full bg-green-400 px-3 py-2 text-xs transition-all duration-300 hover:bg-inherit hover:backdrop-blur-md md:left-[22rem] md:top-[5rem] md:text-lg"
              >
                Shop Now
              </button>
            </div>
            <img
              src={Hero}
              alt="hero-image"
              className="h-[30rem] w-full bg-fixed bg-center bg-no-repeat object-cover md:h-[70rem]"
            />
          </div>
        </div>
        {/* hero-section-ends */}
        {/* featured-product-section */}
        <div className="mx-4 my-20 flex flex-col items-center text-center">
          <h2 className="mb-6 text-xl font-semibold uppercase">
            Featured Products
          </h2>
          <div className="grid h-auto gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featureProduct.length > 0 ? (
              featureProduct.map((product) => (
                <Card
                  key={product.id}
                  images={product.images_list}
                  title={product.title}
                  price={product.price}
                  category={product.breadcrumbs.split(",")[0]}
                  brand={product.brand}
                  id={product.id}
                />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        {/* featured-product-section-ends */}
        {/* product-categories-section */}
        <div></div>
        {/* product-categories-section-ends */}
        {/* brand-section */}
        <div className="mx-4 mb-20">
          <p className="mb-6 text-sm font-semibold uppercase md:text-xl">
            Popular Brands we work with
          </p>
          {/* logos */}
          <Slider />
        </div>
      </div>
      {/* brand-section-ends */}
      {/* customer-testimonials-section */}
      <div className="mb-20 flex h-[33rem] flex-col items-center justify-center overflow-x-hidden text-sm shadow-l md:text-lg">
        <h1 className="mt-10 text-center text-sm font-bold uppercase md:mb-5 md:text-xl lg:mt-0">
          Customer Testimonials
        </h1>
        <div className="mb-8 mt-5 grid w-[90%] grid-cols-1 md:grid-cols-2 md:gap-5 lg:flex lg:gap-10">
          <Testimonials />
        </div>
      </div>
      {/* customer-testimonials-section-ends */}

      {/* find us section */}
      <div className="mx-auto mb-20 flex w-[85%] flex-col-reverse md:flex-row">
        <div className="relative h-[400px] w-full text-right">
          <div className="h-[400px] w-full overflow-hidden bg-transparent">
            <iframe
              className="gmap_iframe h-[400px] w-full"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Sanepa&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a
              href="https://sprunkiplay.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Sprunki
            </a>
          </div>
        </div>

        <div className="mb-3 w-full rounded-sm border p-2 md:mb-0 md:w-1/2">
          <h1 className="mb-3 mt-4 text-center text-sm font-bold uppercase md:mb-5 md:text-xl">
            Contact Us
          </h1>
          <form
            className="mx-auto flex w-auto flex-col items-center justify-center gap-3 pl-3"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-3 md:mt-5">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm lg:text-base">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="w-[90%] rounded-xl border-2 px-3 py-1 !text-sm outline-1 outline-blue-400 transition-all duration-300 placeholder:text-sm focus:ring-2 focus:ring-blue-500 md:w-64 lg:w-72 lg:text-base xl:w-[32rem]"
                  placeholder="Enter name"
                  id="name"
                  required
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm lg:text-base">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  className="w-[90%] rounded-xl border-2 px-3 py-1 !text-sm outline-1 outline-blue-400 transition-all duration-300 placeholder:text-sm focus:ring-2 focus:ring-blue-500 md:w-64 lg:w-72 lg:text-base xl:w-[32rem]"
                  placeholder="Enter email"
                  id="email"
                  required
                  name="emailAddress"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
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
                  className="w-[90%] rounded-xl border-2 px-3 py-1 !text-sm outline-1 outline-blue-400 transition-all duration-300 placeholder:text-sm focus:ring-2 focus:ring-blue-500 md:w-64 lg:w-72 lg:text-base xl:w-[32rem]"
                  placeholder="Enter phone"
                  id="phone"
                  name="phoneNumber"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="my-4 h-10 w-52 rounded-full bg-green-500 text-white disabled:bg-green-300 md:w-64 lg:w-72 xl:w-[32rem]"
              disabled={disabled}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
