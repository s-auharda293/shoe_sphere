import { useNavigate } from "react-router-dom";
// import StarRating from "./starRating";

/* eslint-disable react/prop-types */
const Card = ({ id, images, title, price }) => {
  const navigate = useNavigate();
  const sizes = [7.5, 8, 9, 9.5];

  return (
    <div className="relative h-auto w-[calc(9rem+10vw)] overflow-hidden rounded-lg border-[1px] bg-gray-200/10 shadow-md sm:w-[calc(15rem+12vw)] md:w-[calc(14rem+5%)] lg:h-[30rem] lg:w-[calc(20rem+5%)] xl:w-[19rem]">
      <div className="h-[55%] border-[1px] border-b-2 bg-white">
        <img
          src={images?.length > 0 ? images[0] : "No image"}
          className="z-10 h-full w-full scale-[0.9] transform rounded-lg bg-white object-contain"
          alt=""
        />
      </div>
      <div className="h-1/2 w-full p-2 text-center text-gray-800">
        <h1 className="mb-3 text-xs font-semibold uppercase md:text-sm lg:mb-0 lg:text-lg lg:font-semibold">
          {title
            ? title.length > 15
              ? title.split("").slice(0, 20).join("") + "..."
              : title
            : "No Title"}
        </h1>
        <div className="hidden lg:block">
          <h2 className="mb-1 mt-3 text-xs lg:text-sm">Available Sizes (UK)</h2>
          <div className="mb-4 flex justify-center gap-3">
            {sizes.map((size) => {
              return (
                <p
                  key={size}
                  className="hover:text-md w-[2.5rem] cursor-pointer rounded-full border-[1px] border-gray-400 p-2 text-center text-sm font-light hover:bg-gray-300"
                >
                  {size}
                </p>
              );
            })}
          </div>
        </div>
        <p className="mb-2 text-base font-normal md:text-lg">{price}</p>
        <button
          className="w-auto rounded-full bg-green-500 px-3 py-2 pb-2 text-xs transition-all duration-300 hover:bg-green-700 hover:text-white/90 lg:text-base"
          onClick={() => {
            navigate(`/productDetails/${id}`);
          }}
        >
          View Product
        </button>
        {/* <div className="absolute left-3 top-3">
          <StarRating size={20} />
        </div> */}
      </div>
    </div>
  );
};

export default Card;
