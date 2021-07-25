import React from "react";
import { useDispatch, } from "react-redux";
import { addProductAction } from "../Redux/Actions/product/product.action";
const AddProduct = () => {
    const dispatch = useDispatch()
    const [productName,setProductName]=React.useState('')
    const [Quantity,setQuantity]=React.useState('')

    const addProductFun =(event)=>{
        event.preventDefault()
        const data ={
            productName,
            Quantity
        }
        dispatch(addProductAction(data))
        
    }
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        AddProduct
      </button>

      <div
        class="modal fade"
        id="exampleModal"
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

export default AddProduct;
