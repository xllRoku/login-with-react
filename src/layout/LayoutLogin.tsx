import { Outlet } from "react-router-dom";
import lg_image from "../assets/images/jonia-2.webp";

const LayoutLogin = () => {
  return (
    <main className=" lg:flex">
      <img src={lg_image} alt="" className="block w-full lg:w-[60%] " />
      <div className="w-full  bg-white flex p-4 pt-16 lg:p-10 max-w-screen-lg">
        <div className="w-full flex justify-center items-center">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default LayoutLogin;
