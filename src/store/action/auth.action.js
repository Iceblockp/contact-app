import { api } from "../../lib/Api";
import { Login, Register } from "../../service/auth.service";

export const LoginAction = async (dispatch, formData) => {
  try{
    dispatch({type:"process"})
    const res = await Login(formData);
console.log(res);
    if(res.data) {
        dispatch({type:"login",payload: res.data});
    }else{
        dispatch({type:"error", payload:res.msg})
    }
  }catch (e) {
    dispatch({type:"error",payload:res.msg});
  }
}

export const RegisterAction = async (dispatch,dataForm) => {
  try{
    dispatch({type:"process"});
    const res = await Register(dataForm);

    if(res.data){
      dispatch({type:"register",payload: res.data});
    }else{
      dispatch({type:"error",payload:res.msg});
    }

  }catch(e){
    dispatch({type:"error",payload:res.msg});
  }
}