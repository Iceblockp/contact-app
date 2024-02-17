import React, { useEffect, useState } from "react";
import ContainerComponents from "../components/Container.components";
import {
  ButtonComponent,
  FormComponents,
  LoadingComponent,
  PreventComponent,
} from "../components";
import { useNavigate } from "react-router-dom";
import { Login, Register } from "../service/auth.service";
import useApi from "../hook/useApi";
import ErrorComponents from "../components/Error.components";
import { useSelector, useDispatch } from "react-redux";
import { LoginAction } from "../store/action/auth.action";

const LoginPage = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { loading, error, data, auth } = useSelector((store) => store.auth);

  console.log(data);

  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    if (data?.token) {
      nav("/home");
    }
  }, [data]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    // handleDealApi(formData);
    LoginAction(dispatch,formData);
  };

  return (
    <PreventComponent fail={"/home"} check={localStorage.getItem("auth")}>
      <ContainerComponents>
        {loading ? (
          <LoadingComponent />
        ) : (
          <div className="center ">
            <div className=" w-2/6 h-auto ">
              <h1 className=" font-serif  text-2xl text-center ">
                Login Your Contact
              </h1>

              {error && <ErrorComponents>{error}</ErrorComponents>}

              <form onSubmit={handleSubmit} className=" space-y-7 ">
                <FormComponents
                  value={formData.email}
                  onChange={handleInputChange}
                  name={"email"}
                  type={"email"}
                  label={"Enter Your Email"}
                  placeholder={"example@email.com"}
                />
                <FormComponents
                  value={formData.password}
                  onChange={handleInputChange}
                  name={"password"}
                  type={"password"}
                  label={"Password"}
                  placeholder={""}
                />

                <ButtonComponent style={"rounded-lg"} type="submit">
                  Login
                </ButtonComponent>
              </form>
              <p>
                You haven't pls Register{" "}
                <button
                  className=" text-blue-400 "
                  onClick={() => nav("/register")}
                >
                  Register
                </button>{" "}
              </p>
            </div>
          </div>
        )}
      </ContainerComponents>
    </PreventComponent>
  );
};

export default LoginPage;
