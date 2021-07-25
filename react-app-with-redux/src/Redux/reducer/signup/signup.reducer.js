import { signupConstants } from "../../type/signupConstants";


const initiState = {
  verify: false,
  userExist:false,
  signupErr: "",
  message: null,
  
};

const signupReducer = (state = initiState, action) => {
  console.log(action.payload, "action");
  // eslint-disable-next-line default-case
  switch (action.type) {
    case signupConstants.SIGNUP_SECCESS:
      state = {
        ...state,
        verify: true,
        userExist:false,
        message: action.payload,
      };
      break;
    case signupConstants.SIGNUP_FAILURE:
      state = {
        ...initiState,
        userExist: true,
        signupErr: action.payload,
      };
      break;
  }
  return state;
};

export default signupReducer;
