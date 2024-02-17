import React, { useEffect } from "react";
import { useNavigate ,Outlet} from "react-router-dom";
import { PreventComponent } from "../components";
import { getProfile } from "../service/auth.service";

const HomePage = () => {
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    nav("/");
  };

  useEffect(() => {
    ( async () => {
      const res = await getProfile();
      console.log(res);
    })();
  },[])

  const handleAdd = () => {
    nav("/home/add");
  }

  return (
    <PreventComponent fail={"/"} check={!localStorage.getItem("auth")}>
      <div className=" font-serif container mx-auto h-screen">
     <div className=" w-[80%] mx-auto h-full ">
     <nav className=" flex justify-between px-2 py-3 shadow">
       <h1>Contact App</h1>
        <div className=" space-x-5">
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
       </nav>

       <Outlet />
     </div>
      </div>
    </PreventComponent>
  );
};

export default HomePage;
