import Customer1 from "./../../assets/customer-testimonials/customer-1.jpg";
import Customer2 from "./../../assets/customer-testimonials/customer-2.jpg";
import Customer3 from "./../../assets/customer-testimonials/customer-3.jpg";
import Customer4 from "./../../assets/customer-testimonials/customer-4.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="h-82 flex w-full flex-col items-start justify-center rounded-lg p-5 shadow-l">
        <p className="mb-4 rounded-blob bg-red-400 p-1 text-white/90">5.0</p>
        <h3 className="text-l mb-2 font-bold text-gray-600">Awesome</h3>
        <p className="mb-5 text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, illum
          nesciunt quasi quisquam aspernatur doloremque provident
        </p>
        <div className="flex gap-2">
          <img
            src={Customer1}
            alt=""
            className="h-[5rem] w-[5rem] rounded-blob object-cover"
          />
          <p className="text-sm font-semibold text-gray-600">Harry Owens</p>
        </div>
      </div>
      <div className="h-82 flex w-full flex-col items-start rounded-lg p-5 shadow-l">
        <p className="mb-4 rounded-blob bg-red-400 p-1 text-white/90">5.0</p>
        <h3 className="text-l mb-2 font-bold text-gray-600">Nice</h3>
        <p className="mb-5 text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, illum
          nesciunt quasi quisquam aspernatur doloremque provident
        </p>
        <div className="flex gap-2">
          <img
            src={Customer3}
            alt=""
            className="h-[5rem] w-[5rem] rounded-blob object-cover"
          />
          <p className="text-sm font-semibold text-gray-600">Tim Smith</p>
        </div>
      </div>
      <div className="h-82 flex w-full flex-col items-start rounded-lg p-5 shadow-l">
        <p className="mb-4 rounded-blob bg-red-400 p-1 text-white/90">4.9</p>
        <h3 className="text-l mb-2 font-bold text-gray-600">Fabulous</h3>
        <p className="mb-5 text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, illum
          nesciunt quasi quisquam aspernatur doloremque provident
        </p>
        <div className="flex gap-2">
          <img
            src={Customer2}
            alt=""
            className="h-[5rem] w-[5rem] rounded-blob object-cover"
          />
          <p className="text-sm font-semibold text-gray-600">Shanon Horton</p>
        </div>
      </div>
      <div className="h-82 flex w-full flex-col items-start rounded-lg p-5 shadow-l">
        <p className="mb-4 rounded-blob bg-red-400 p-1 text-white/90">4.0</p>
        <h3 className="text-l mb-2 font-bold text-gray-600">Cool</h3>
        <p className="mb-5 text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, illum
          nesciunt quasi quisquam aspernatur doloremque provident
        </p>
        <div className="flex gap-2">
          <img
            src={Customer4}
            alt=""
            className="h-[5rem] w-[5rem] rounded-blob object-cover"
          />
          <p className="text-sm font-semibold text-gray-600">Ethan Maxwell</p>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
