import axiosInstance from '../../../Helper/config'
import { productConstants } from '../../type/productType';
import { signupConstants } from '../../type/signupConstants';
export const productAction=(user)=>{
    
    return async dispatch=>{
        axiosInstance.get("/product")
        .then((data)=>{
            console.log(data.data.data,'llllllllllll')
            if(data.data.status !== 404){
                dispatch({
                    type:productConstants.GET_PRODUCT_SECCESS,
                   payload:data.data.data
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

export const addProductAction=(data)=>{
    console.log(data,"kkkkkkkkkk");
    return async dispatch=>{
        axiosInstance.post("/product",{...data})
        .then((data)=>{
            
            console.log(data.data.data,'llllllllllll');
            if(data.data.status !== 409){
                dispatch({
                    type:productConstants.ADD_PRODUCT_SECCESS,
                   payload:data.data.data
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
 
export const deleteProductAction=(id)=>{
    console.log(id,"kkkkkkkkkk");
    return async dispatch=>{
        axiosInstance.delete(`/product/${id}`)
        .then((data)=>{
            console.log(data,"hhhhhhhhhhhhhh");
            if(data.data.status !== 404){
                dispatch({
                    type:productConstants.DELETE_PRODUCT_SECCESS,
                   payload:id
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

export const editProductAction=(data)=>{
    console.log(data.id,"kkkkkkkkkk");
    return async dispatch=>{
        axiosInstance.patch(`/product/${data.id}`,{...data})
        .then((datai)=>{
            console.log(data,"hhhhhhhhhhhhhh");
            if(datai.data.status !== 404){
                console.log("hhhhhhhhhhhhhhh");
                dispatch({
                    type:productConstants.EDIT_PRODUCT_SECCESS,
                   payload:data
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