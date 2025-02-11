import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import StarRating from "../components/starRating";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/CartSlice.jsx";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const param = useParams();
  const [productImage, setProductImage] = useState("");
  const [singleProduct, setSingleProduct] = useState({});

  const [singleItemData, setSingleItemData] = useState({
    name: "",
    size: "7.5",
    image: "",
    price: "",
    id: "",
  });

  const sizes = [7.5, 8, 9, 9.5];

  const dispatch = useDispatch();

  const regex = /Visit the /gi;

  useEffect(() => {
    const getProductData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/products/${param.id}`,
        );
        if (response.ok) {
          const data = await response.json();
          setSingleProduct(data);
          setProductImage(data?.images_list[0]);
        } else {
          console.error("Fetch error:", response.statusText);
        }
      } catch (error) {
        toast.error(error, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    };

    getProductData();
  }, [param]);

  useEffect(() => {
    if (Object.keys(singleProduct).length > 0) {
      setSingleItemData({
        name: singleProduct.title || "",
        size: "7.5",
        image: singleProduct.images_list?.[0] || "",
        price: singleProduct.price || 0,
        id: singleProduct.id || "",
      });
    }
  }, [singleProduct]);

  const handleSize = (size) => {
    setSingleItemData((prevData) => {
      return { ...prevData, size: size };
    });
  };

  return (
    <>
      <div className="flex flex-col overflow-hidden border-2 xl:mx-auto xl:my-10 xl:h-[40rem] xl:w-5/6 xl:flex-row xl:rounded-xl xl:shadow-xl">
        <div className="mt-2 h-[30%] w-full border-b-2 xl:h-full xl:w-1/2">
          <div className="h-[80%] border-b-[1px] border-r-[1px] shadow-lg xl:h-4/5">
            <div className="m-auto h-[30rem] md:h-[20rem] xl:h-[26rem] xl:w-[26rem]">
              <img
                src={productImage}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div className="grid h-[7rem] grid-cols-4 grid-rows-1 justify-items-center gap-2 px-4 py-2 xl:h-1/5 xl:gap-3">
            {singleProduct?.images_list?.map((image, i) => {
              if (i < 4) {
                return (
                  <img
                    key={i}
                    src={image}
                    className="h-full w-full rounded-md border-2 object-contain shadow-md hover:cursor-pointer"
                    alt=""
                    onClick={() => setProductImage(image)}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className="flex w-full flex-col overflow-y-scroll p-9 xl:w-1/2">
          <h1 className="mb-5 text-2xl font-semibold">
            {singleProduct?.title?.length > 0
              ? singleProduct.title
              : "No title"}
          </h1>

          {/* <p className="mb-3">
            <StarRating />
          </p> */}
          <p className="mb-4 text-base font-normal md:text-xl lg:text-2xl">
            {singleProduct.price}
          </p>
          <h2 className="text-md mb-2 font-semibold">
            Brand:{" "}
            {singleProduct.brand?.length > 0
              ? singleProduct.brand.replace(regex, "")
              : "No brand"}
          </h2>
          <div className="mb-10 flex max-h-[50%] min-h-[30%] flex-col overflow-y-auto text-sm font-normal">
            {singleProduct?.features?.map((feature, i) => {
              return (
                <span key={i}>
                  {i < 11 &&
                    `${Object.keys(feature)}: ${Object.values(feature)}`}
                </span>
              );
            })}
          </div>
          <div>
            <h2 className="mb-3">Choose size (UK)</h2>
            <div className="mb-5 flex gap-3">
              {sizes.map((size) => {
                return (
                  <p
                    key={size}
                    className={`${singleItemData.size === size ? "border-0 bg-green-400 text-white" : ""} hover:text-md w-[2.5rem] cursor-pointer rounded-full border-[1px] border-gray-400 p-2 text-center text-sm font-light hover:bg-gray-300`}
                    onClick={() => handleSize(size)}
                  >
                    {size}
                  </p>
                );
              })}
            </div>
            <div className="flex gap-5">
              {/* <button className="w-1/3 rounded-lg bg-green-500 px-3 py-2 text-white/90 transition-all duration-300 hover:hover:bg-green-400/70 hover:text-gray-800 hover:backdrop-blur-lg">
                Buy Now
              </button> */}
              <button
                className="w-1/3 rounded-lg bg-orange-500 px-3 py-2 text-white/90 transition-all duration-300 hover:hover:bg-orange-400/70 hover:text-gray-800 hover:backdrop-blur-lg"
                onClick={() => {
                  dispatch(addToCart(singleItemData));
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
