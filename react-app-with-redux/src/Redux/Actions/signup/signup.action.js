import axiosInstance from '../../../Helper/config'
import { signupConstants } from '../../type/signupConstants';
export const signupAction=(user)=>{
    console.log(user,"kkkkkkkkkk");
    return async dispatch=>{
        axiosInstance.post("/signup",user)
        .then((data)=>{
            console.log(data.data.status );
            if(data.data.status !== 409){
                dispatch({
                    type:signupConstants.SIGNUP_SECCESS,
                   payload:data.data
               })
            }else{
                dispatch({
                    type:signupConstants.SIGNUP_FAILURE,
                    payload:data.data
                })
            }

            
         })
         .catch((err)=>{
            

         })
       
    }
} 

 