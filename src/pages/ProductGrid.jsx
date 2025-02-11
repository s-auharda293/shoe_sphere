import Card from "../components/Card";
import { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";

const ProductGrid = () => {
  const { data } = useContext(ProductContext);
  const [productGridData, setProductGridData] = useState([]);
  const [showfilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setfilteredProducts] = useState(data);
  const [brandPagination, setBrandPagination] = useState(1);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const handleShowFilter = () => {
    setShowFilter((showfilter) => !showfilter);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  let allBrands = new Set(
    data.map((product) =>
      product.brand
        .toLowerCase()
        .replace(/visit the/gi, "")
        .replace(/store/gi, "")
        .trim()
        .replace(/^./, (char) => char.toUpperCase()),
    ),
  );

  let filteredBrands = [];
  for (const brand of allBrands) {
    filteredBrands.push(brand);
  }

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  const brandsToDisplay = filteredBrands.slice(
    (brandPagination - 1) * 10,
    (brandPagination - 1) * 10 + 10,
  );

  const handleBrandPagination = (command) => {
    if (command === "increment") {
      setBrandPagination((page) =>
        Math.min(page + 1, Math.ceil(filteredBrands.length / 10)),
      );
    }
    if (command === "decrement") {
      setBrandPagination((page) => Math.max(page - 1, 1));
    }
  };

  useEffect(() => {
    let updatedProducts = data;

    if (minPrice !== null && maxPrice !== null) {
      updatedProducts = updatedProducts.filter((product) => {
        let price = parseFloat(product.price.replace(/^Rs\.\s*/, ""));
        return price >= minPrice && price <= maxPrice;
      });
    }

    if (selectedBrands.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedBrands.includes(
          product.brand
            .toLowerCase()
            .replace(/visit the/gi, "")
            .replace(/store/gi, "")
            .trim()
            .replace(/^./, (char) => char.toUpperCase()),
        ),
      );
    }

    if (searchText) {
      updatedProducts = updatedProducts.filter((product) =>
        product.title
          .trim()
          .split(" ")
          .join("")
          .toLowerCase()
          .includes(searchText.toLowerCase().trim().split(" ").join("")),
      );
    }
    setfilteredProducts(updatedProducts);
  }, [searchText, data, selectedBrands, minPrice, maxPrice]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * 9;
    const endIndex = startIndex + 9;
    setProductGridData(filteredProducts.slice(startIndex, endIndex));
  }, [currentPage, filteredProducts]);

  return (
    <main className="h-auto w-full">
      <div className="mt-0 h-auto w-full bg-orange-600 p-2">
        <div className="relative m-auto w-[15rem] flex-row-reverse justify-center gap-3 text-2xl md:w-[30rem] lg:left-[30%] lg:m-3 lg:flex lg:w-[50%]">
          <form className="relative w-full">
            <input
              type="text"
              className="h-9 w-full rounded-lg border px-5 text-[1rem] outline-orange-700 placeholder:text-sm lg:h-[3rem] lg:placeholder:text-lg"
              placeholder="Search items..."
              value={searchText}
              onChange={handleSearchChange}
            />
          </form>
        </div>
      </div>

      <div className="my-5 flex h-auto flex-col gap-12 md:flex-row lg:px-4">
        <aside className="p-4 lg:pl-4">
          <h1 className="mb-5 text-xl font-semibold">Filters</h1>
          <div className="border-b-[1px] border-t-[1px] border-gray-500 px-2 py-3">
            <div className="mb-3 flex justify-center gap-36">
              <p className="text-md text-gray-800">Brands</p>
              <span onClick={handleShowFilter} className="cursor-pointer">
                {showfilter ? (
                  <span className="hover:text-orange-600">&uarr;</span>
                ) : (
                  <span className="hover:text-orange-600">&darr;</span>
                )}
              </span>
            </div>
            {showfilter && (
              <>
                <form className="flex flex-col items-start">
                  {brandsToDisplay.map((brand) => (
                    <div
                      key={brand}
                      className="flex flex-row-reverse justify-center gap-2"
                    >
                      <label className="text-sm" htmlFor={brand.toLowerCase()}>
                        {brand}
                      </label>
                      <input
                        type="checkbox"
                        name={brand.toLowerCase()}
                        id={brand.toLowerCase()}
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                      />
                    </div>
                  ))}
                </form>
                <span className="mt-5 flex justify-around">
                  {showfilter && (
                    <>
                      <button
                        className="text-lg font-semibold text-gray-600 hover:text-orange-600"
                        onClick={() => handleBrandPagination("decrement")}
                      >
                        &lt;
                      </button>
                      <button
                        className="text-lg font-semibold text-gray-600 hover:text-orange-600"
                        onClick={() => handleBrandPagination("increment")}
                      >
                        &gt;
                      </button>
                    </>
                  )}
                </span>
              </>
            )}
          </div>
          <div className="mt-2 border-b-[1px] border-t-[1px] border-gray-500 px-2 py-3">
            <div className="mb-3 flex flex-col">
              <p className="text-md text-gray-800">Price:</p>
              <form className="mt-2 flex w-36 flex-col md:w-48 md:flex-row">
                <input
                  type="Number"
                  className="bg-black/5 text-sm text-black md:w-1/2"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <span className="mr-2 ms-2 text-center">-</span>
                <input
                  type="Number"
                  className="bg-black/5 text-sm text-black md:w-1/2"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </form>
            </div>
          </div>
        </aside>
        <div className="h-[98rem] w-full lg:px-5 lg:py-4">
          <p className="mb-5 ml-5">{filteredProducts.length} results</p>
          <div className="mb-7 grid h-[100%] grid-cols-2 justify-items-center gap-x-2 gap-y-2 overflow-hidden px-1 lg:mb-16 lg:gap-y-8 xl:grid-cols-3">
            {productGridData.length > 0 ? (
              productGridData.map((product) => (
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
              <p className="w-full text-2xl text-red-700">
                Data not found. Please consider changing filters!
              </p>
            )}
          </div>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCount={filteredProducts.length}
      />
    </main>
  );
};

export default ProductGrid;
