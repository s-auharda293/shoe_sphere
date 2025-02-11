import CartItem from "../components/CartItem";

const OrderedItems = () => {
  return (
    <>
      <h1 className="ml-8 mt-20 text-2xl font-semibold uppercase">
        Cart Details
      </h1>
      <div className="flex justify-between gap-4 p-8">
        <div className="h-[31rem] w-[80%] overflow-y-auto rounded-md p-4 shadow-md">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
    </>
  );
};

export default OrderedItems;
