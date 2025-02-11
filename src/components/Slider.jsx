import Nike from "../assets/slider/nike.svg";
import Adidas from "../assets/slider/adidas.svg";
import Converse from "../assets/slider/converse.svg";
import NewBalance from "../assets/slider/newbalance.svg";
import Puma from "../assets/slider/puma.svg";
import Vans from "../assets/slider/vans.svg";
import Timberland from "../assets/slider/timberland.svg";
import Gucci from "../assets/slider/gucci.svg";

const Slider = () => {
  return (
    <div className="relative flex h-28 items-center overflow-x-hidden md:h-48">
      {/* logos-slide */}
      <div className="flex h-28 w-[calc(75px*16)] animate-smallslider items-center gap-5 md:h-36 md:w-[calc(200px*16)] md:animate-slider md:gap-12">
        <div className="flex h-auto w-[75px] items-center justify-center md:w-[200px]">
          <img className="h-16 md:h-32" src={Nike} alt="" />
        </div>
        <div className="flex h-auto w-[75px] items-center justify-center md:w-[200px]">
          <img className="h-16 md:h-32" src={Adidas} alt="" />
        </div>
        <div className="flex h-auto w-[75px] items-center justify-center md:w-[200px]">
          <img className="h-16 md:h-32" src={Converse} alt="" />
        </div>
        <div className="flex h-auto w-[75px] items-center justify-center md:w-[200px]">
          <img className="h-16 md:h-32" src={NewBalance} alt="" />
        </div>
        <div className="flex h-auto w-[75px] items-center justify-center md:w-[200px]">
          <img className="h-16 md:h-32" src={Vans} alt="" />
        </div>
        <div className="flex h-auto w-[75px] items-center justify-center md:w-[200px]">
          <img className="h-16 md:h-32" src={Timberland} alt="" />
        </div>
        <div className="flex h-auto w-[75px] items-center justify-center md:w-[200px]">
          <img className="h-16 md:h-32" src={Puma} alt="" />
        </div>
        <div className="flex h-auto w-[75px] items-center justify-center md:w-[200px]">
          <img className="h-16 md:h-32" src={Gucci} alt="" />
        </div>
        {/* repeat images */}
        <div className="flex h-auto w-[75px] items-center justify-center md:w-[200px]">
          <img className="h-16 md:h-32" src={Nike} alt="" />
        </div>
        <div className="flex h-auto w-[75px] items-center justify-center md:w-[200px]">
          <img className="h-16 md:h-32" src={Adidas} alt="" />
        </div>
        <div className="flex h-auto w-[75px] items-center justify-center md:w-[200px]">
          <img className="h-16 md:h-32" src={Converse} alt="" />
        </div>
        <div className="flex h-auto w-[75px] items-center justify-center md:w-[200px]">
          <img className="h-16 md:h-32" src={NewBalance} alt="" />
        </div>
        <div className="flex h-auto w-[75px] items-center justify-center md:w-[200px]">
          <img className="h-16 md:h-32" src={Vans} alt="" />
        </div>
        <div className="flex h-auto w-[75px] items-center justify-center md:w-[200px]">
          <img className="h-16 md:h-32" src={Timberland} alt="" />
        </div>
        <div className="flex h-auto w-[75px] items-center justify-center md:w-[200px]">
          <img className="h-16 md:h-32" src={Puma} alt="" />
        </div>
        <div className="flex h-auto w-[75px] items-center justify-center md:w-[200px]">
          <img className="h-16 md:h-32" src={Gucci} alt="" />
        </div>
      </div>
      <div className="absolute -left-4 top-0 z-10 h-full w-1/5 bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute -right-4 top-0 z-10 h-full w-1/5 bg-gradient-to-l from-white to-transparent"></div>
    </div>
  );
};

export default Slider;
