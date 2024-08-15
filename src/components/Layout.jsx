// src/components/Layout.jsx
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
// import Congratulation from "../routes/Congratulation.jsx";
import { useEffect, useState } from "react";
// import { useState } from "react";

const Layout = () => {
  // const [isOpacityNeeded, setIsOpacityNeeded] = useState(false);
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   if (pathname === "/congratulations") {
  //     setIsOpacityNeeded(true);
  //   }
  // }, [pathname]);

  // console.log("isOpacityNeeded", isOpacityNeeded);

  return (
    <div>
      {/* // <div className="relative  md:min-h-screen bg-custom-bg bg-cover bg-center overflowauto"> */}
      <div
        className={` relative min-h-svh md:min-h-screen bg-custom-bg-2 md:bg-custom-bg bg-cover bg-center  `}
      >
        <Sidebar />
        <Outlet />
        <Footer />
      </div>
    </div>

    // <div>
    //   {/* // <div className="relative  md:min-h-screen bg-custom-bg bg-cover bg-center overflowauto"> */}
    //   <div className="relative min-h-screen md:min-h-screen bg-custom-bg-2 md:bg-custom-bg bg-cover bg-center overflow-y-scroll  ">
    //     <Sidebar />
    //     <Outlet />
    //     <Footer />
    //   </div>
    // </div>
  );
};

export default Layout;
