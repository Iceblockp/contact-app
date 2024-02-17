import React, { useEffect, useState } from 'react'
import { ButtonComponent, FormComponents } from '../components'
import { addNewContact } from '../service/contact.service'
import {useNavigate,useLocation} from "react-router-dom";

const ContactAddPage = () => {

  const nav = useNavigate();
  const location = useLocation();

    const [formData, setFormData] = useState({
        name:"",
        phone:"",
        email:"",
        address:""
    })

    const handleFormDataChange = (e) => {
        setFormData( pre => ({...pre, [e.target.name]: e.target.value}) );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await addNewContact(formData);
        console.log(res);
        if(res){
          nav("/home");
        }
    }

    useEffect(() => {
      console.log(location);
    },[location])


  return (
    <div className=' center'>
        <div className=" w-3/5 h-auto">
        <div className="center ">
        <div className=" w-3/6 h-auto ">
          <h1 className=" font-serif  text-2xl text-center ">
            Create your Content
          </h1>

        
          <form onSubmit={handleSubmit} className=" space-y-7 " >
            <FormComponents value={formData.name} onChange={handleFormDataChange} label={"Name"} type={"text"} name={"name"} />
            <FormComponents value={formData.phone} onChange={handleFormDataChange} label={"Phone"} type={"number"} name={"phone"} />
            <FormComponents value={formData.email} onChange={handleFormDataChange} label={"Email"} type={"email"} name={"email"} />
            <FormComponents value={formData.address} onChange={handleFormDataChange} label={"Address"} type={"text"} name={"address"} />
            <ButtonComponent type="submit" >Create Contact</ButtonComponent>


            </form>

        </div>
      </div>
        </div>
        
    </div>
  )
}

export default ContactAddPage