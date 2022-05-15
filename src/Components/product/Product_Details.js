import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "./productAPI";
import { isAuthenticated } from "../auth";
import RelatedProducts from "./RelatedProducts";

const Product_Details = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const { user } = isAuthenticated();
  // console.log(user.role)

  useEffect(() => {
    getProductDetails(params.id)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setProduct(data);
        }
      })
      .catch((err) => console.log(err));
  }, [params]);

  return (
    <>
      <div className="container w-75 my-5 mx-auto shadow-lg p-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={`http://localhost:5000/${product.product_img}`}
              alt={product.product_name}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h3>{product.product_name}</h3>
            <h4>Rs. {product.product_price}</h4>
            <h5>
              Stock:{" "}
              {
                <input
                  type="text"
                  className="text-muted"
                  value={product.count_In_Stock}
                  disabled={true}
                />
              }
            </h5>
            <p>Description: {product.product_desc}</p>
            {/* {(!user || user.role === 0) && (
              <button className="btn btn-warning">Add to Cart</button>
            )} */}
            {user && user.role === 1 ? (
              <>
                <button className="btn btn-info">Edit Product</button>
                <button className="btn btn-danger">Remove Product</button>
              </>
            ) : (
              <button className="btn btn-warning">Add to Cart</button>
            )}
          </div>
        </div>
        {/* {console.log(product._id)} */}
      </div>
      <RelatedProducts id={product._id} />
    </>
  );
};

export default Product_Details;
