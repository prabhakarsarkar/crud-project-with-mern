import { loginConstants } from "../../type/logintype";
const initstate = {
  authenticate: false,
};

const loginReducer = (state = initstate, action) => {
  console.log(action.payload);
  // eslint-disable-next-line default-case
  switch (action.type) {
    case loginConstants.LOGIN_SECCESS:
      state = {
        ...state,
        authenticate: true,
        
      };
      break;
    case loginConstants.LOGIN_FAILURE:
      state = {
        ...state,
        authenticate:false
      };
      break;
    // case signupConstants.LOGOUT_REQUEST:
    //   state = {
    //     ...state,
    //     loding: false,
    //   };
    //   break;
    // case signupConstants.LOGOUT_SECCESS:
    //   state = {
    //     ...initstate,
    //   };
    //   break;
    // case signupConstants.LOGOUT_FAILURE:
    //   state = {
    //     ...state,
    //     message: action.payload.error,
    //   };
  }

  return state;
};

export default loginReducer;
