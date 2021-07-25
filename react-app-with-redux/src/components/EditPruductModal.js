import React from "react";
import { useDispatch } from "react-redux";
import {editProductAction} from "../Redux/Actions/product/product.action";
const EditPoduct = (props) => {
    console.log(props.data.name,"props,,,,,,,,,,,,,,,,,,");
    const dispatch = useDispatch()
    const [productName,setProductName]=React.useState(props.data.name)
    const [Quantity,setQuantity]=React.useState(props.data.quantity)
    // eslint-disable-next-line no-unused-vars
    const [id,setId]=React.useState(props.data.id)
    const addProductFun =(event)=>{
        event.preventDefault()
        const data ={
            productName,
            Quantity,
            id
            
        }
        console.log(data);
        dispatch(editProductAction(data))
        
    }
  return (
    <>
     

      <div
        class="modal fade"
        id="EditModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

            <form className="form">
          <div className="form-group">
            <input type="text" 
            placeholder="product name" 
            
            value={productName} 
            required 
            onChange={(e)=>setProductName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Quantity"
              
              value={Quantity}
              required
              onChange={(e)=>setQuantity(e.target.value)}
              
            />
          </div>
        </form>
            </div>
            <div class="modal-footer">
              <button 
              onClick={(e)=>addProductFun(e)}
              class="btn btn-primary"  data-dismiss="modal">
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPoduct;
