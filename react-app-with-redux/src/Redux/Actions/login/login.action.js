import axiosInstance from "../../../Helper/config";
import { loginConstants } from "../../type/logintype";

export const loginAction = (data) => {
    console.log(data);
    return async dispatch=>{
        axiosInstance.post("/login",{...data})
        .then((data)=>{
            console.log(data.data.data.token ); 
            if(data.data.status !== 404){
                const { token } = data.data.data
                console.log(token, "token");
                localStorage.setItem("token", token)
                dispatch({
                    type:loginConstants.LOGIN_SECCESS,
                   payload:data.data
               })
            }else{
                dispatch({
                    type:loginConstants.LOGIN_FAILURE,
                    payload:data.data
                })
            }

            
         })
         .catch((err)=>{
            

         })
       
    }
}


// export const checkLoginUser = () => {
//     const dispatch = async (dispatch) => {
//         const token =localStorage.getItem('token')
//         if (token) {
//             const user = JSON.parse(localStorage.getItem('user'))
//             dispatch({
//                 type: authConstants.LOGIN_SECCESS,
//                 payload: {
//                     user, token
//                 }
//             })
//         }
//         else {
//             dispatch({
//                 type: authConstants.USER_LOGIN_FAILURE,
//                 payload: {
//                     error: "you need to login "
//                 }
//             })
//         }
//     }
//     return dispatch;
// }



 
// export const signOut = () => {
//     const dispatch =async (dispatch) => {
//         dispatch({ type: authConstants.LOGOUT_REQUEST })
//         const res = await axios.post("/signout/admin")
//         if (res.status === 200) {
//             window.localStorage.clear()
//             dispatch({
//                 type: authConstants.LOGOUT_SECCESS,

//             })
//         }else{
//             dispatch({
//                 type:authConstants.LOGOUT_FAILURE,
//                 payload:{error:res.data.error}
//             })
//         }
//     }
//     return dispatch
// }
