import {combineReducers } from "redux";

// import productReducer from "../Reducer/productReducer";
import signupReducer from "../reducer/signup/signup.reducer";
import loginReducer from "./login/login.reducer";
import productReducer from "./product/product.reducer";


const rootReducer = combineReducers({
  
    signup:signupReducer,
    login:loginReducer,
    product:productReducer
    
    // Product:productReducer,
    

})


export default rootReducer;