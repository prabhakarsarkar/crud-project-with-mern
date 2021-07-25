import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  withRouter } from "react-router-dom";
import AddProduct from "../components/AddProduct.modal";
import EditProduct from "../components/EditPruductModal";

import {
  deleteProductAction,
  productAction,
} from "../Redux/Actions/product/product.action";

const Table = (props) => {
  const dispatch = useDispatch();
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [productData, setProductData] = React.useState();

  React.useEffect(() => {
    dispatch(productAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const product = useSelector((state) => state.product);
  const allProduct = product && product.product ? product.product : null;
  const deleteProductFun = (event, id) => {
    event.preventDefault();
    dispatch(deleteProductAction(id));
  };
  const updateProductFun = (e, id, name, quantity) => {
    setOpenEditModal(true);
    setProductData({ id, name, quantity });
  };
  const logoutFun = () => {
    localStorage.clear("token");
    const token = localStorage.getItem("token");
    console.log(token, "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj tokne");
    if (!token) {
      props.history.replace("/login");
    }

    //  return <Redirect to='/login' />
  };
  return (
    <>
      <div className="d-flex my-3 ml-5">
        <AddProduct />
        <button className="btn" onClick={logoutFun}>
          logout
        </button>
        
      </div>
       
      <table class="table table-bordered my-5">
        <thead>
          <tr>
            <th scope="col">N0</th>
            <th scope="col">name</th>
            <th scope="col">quantity</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {allProduct &&
            allProduct.lenght !== 0 &&
            allProduct.map((item, index) => {
              return (
                <tr>
                  <th key={index} scope="row">
                    {index + 1}
                  </th>
                  <td>{item.productName}</td>
                  <td>{item.Quantity}</td>
                  <td>
                    <td
                      className="btn"
                      onClick={(e) =>
                        updateProductFun(
                          e,
                          item._id,
                          item.productName,
                          item.Quantity
                        )
                      }
                    >
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#EditModal"
                      >
                        EDIT
                      </button>
                    </td>
                    <td
                      class="btn "
                      onClick={(e) => deleteProductFun(e, item._id)}
                    >
                      DELETE
                    </td>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {openEditModal ? <EditProduct data={productData} /> : null}
      
    </>
  );
};

export default withRouter(Table);
