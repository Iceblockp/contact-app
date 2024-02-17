import React, { useEffect, useState } from 'react'
import ContainerComponents from '../components/Container.components'
import { ButtonComponent, FormComponents, LoadingComponent, PreventComponent } from '../components'
import {useNavigate} from 'react-router-dom';
import useApi from '../hook/useApi';
import { Register } from '../service/auth.service';
import ErrorComponents from '../components/Error.components';
import { RegisterAction } from '../store/action/auth.action';
import {useSelector, useDispatch} from 'react-redux'

const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({name:"",email:"",password:"",password_confirmation:""});
  const nav = useNavigate();
  const {auth,data,error,loading} = useSelector((store) => store.auth);


  
  useEffect(() => {
    if(data) {
      nav("/");
    }
  },[data]);

  const handleInputChange = (e) => {
    setFormData(pre => ({...pre,[e.target.name]:e.target.value}))
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    RegisterAction(dispatch,formData);
    
  }
  return (

    
   <PreventComponent check={localStorage.getItem('auth')} fail={"/home"} >
     <ContainerComponents>
      {loading ? (
        <LoadingComponent/>
      ) : (
        <div className="center ">
        <div className=" w-2/6 h-auto ">
          <h1 className=" font-serif  text-2xl text-center ">
            Register Your Account
          </h1>

          {error && <ErrorComponents>{error}</ErrorComponents>}

          <form onSubmit={handleSubmit} className=" space-y-7 " >
            <FormComponents value={formData.name} onChange={handleInputChange} label={"Enter Username"} type={"text"} name={"name"} />
            <FormComponents value={formData.email} onChange={handleInputChange}  name={"email"} type={"email"} label={"Enter Your Email"} placeholder={"example@email.com"} />
            <FormComponents value={formData.password} onChange={handleInputChange} name={"password"} type={"password"} label={"Password"} placeholder={""} />
            <FormComponents value={formData.password_confirmation} onChange={handleInputChange} label={"Confirm Your Password"} type={"password"} name={"password_confirmation"} placeholder={"Confirm password"} />

            <ButtonComponent style={"rounded-lg"} type="submit"  >Register</ButtonComponent>
          </form>
          <p>You have account. pls Login <button className=" text-blue-400 " onClick={() => nav("/")} >Login</button> </p>

        </div>
      </div>
      )}
      
    </ContainerComponents>
   </PreventComponent>


  )
}

export default RegisterPage