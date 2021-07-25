import { productConstants } from "../../type/productType";



const initiState = {
  message: null,
  product:[]
};

const productReducer = (state = initiState, action) => {
    // console.log(action,"hgggggggggg" );
  // eslint-disable-next-line default-case
  switch (action.type) {
    case productConstants.GET_PRODUCT_SECCESS:
        // console.log("llllllllllllllllllmmmmmmmmmmm");
      state = {
        ...state,
        product: action.payload,
      };
      break;
    case productConstants.ADD_PRODUCT_SECCESS:
      state = {
        ...state,
        product:[ ...state.product,action.payload]
      };
      break;
      case productConstants.DELETE_PRODUCT_SECCESS:
        state = {
          ...state,
          product:state.product.filter(state=> state._id !==action.payload)
        };
        break;
        case productConstants.EDIT_PRODUCT_SECCESS:
            // eslint-disable-next-line eqeqeq
            return Object.assign({}, state, {
                product: state.product.map(item => {
                    console.log(item._id,"nnnnnnnnnnnnnnnnnnnn");
                    return item._id === action.payload.id ? action.payload : item;
                })
             });
       
  }
  return state;
};

export default productReducer;
