import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRef } from "react";

const Layout = () => {
  const footerRef = useRef(null);
  return (
    <div className="h-auto w-full overflow-x-hidden bg-gray-100/20">
      <Navbar footerRef={footerRef} />
      <Outlet />
      <Footer footerRef={footerRef} />
    </div>
  );
};

export default Layout;
