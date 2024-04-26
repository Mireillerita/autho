import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section className="bg-pink-700 border-yellow-300">
      <div>
        <Header />
      </div>
      <div className="flex justify-between mx-5">
        <Navbar />
        <div className="border p-48 border-yellow-700 rounded-md h-[87vh] w-[80%] mt-5 bg-blue-300">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Layout;
