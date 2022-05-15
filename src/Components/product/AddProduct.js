import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AdminSidebar from "../AdminSidebar";
import { getAllCategories } from "../category/categoryApi";
import { addProduct } from "./productAPI";

const Addproduct = () => {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({
    product_name: "",
    product_price: "",
    product_desc: "",
    product_img: "",
    count_In_Stock: "",
    category: "",
    formData: "",
  });
  const {
    product_name,
    product_price,
    product_desc,
    product_img,
    count_In_Stock,
    category,
    formData,
  } = product;

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getAllCategories()
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setCategories(data);
          setProduct({ ...product, formData: new FormData() });
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (name) => (event) => {
    if (name === "product_img") {
      setProduct({ ...product, [name]: event.target.files[0] });
      formData.set(name, event.target.files[0]);
    } else {
      setProduct({ ...product, [name]: event.target.value });
      formData.set(name, event.target.value);
    }
    console.log(product);
  };

  const clickSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    addProduct(formData)
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setProduct({
            product_name: "",
            product_price: "",
            product_desc: "",
            product_img: "",
            count_In_Stock: "",
            category: "",
          });
          setSuccess(true);
        }
      })
      .catch((err) => console.log(err));
  };

  // to show error
  const showError = () => {
    if (error) {
      return <div className="alert alert-danger">{error}</div>;
    }
  };

  // to show success
  const showSuccess = () => {
    if (success) {
      return (
        <div className="alert alert-success">
          New Product added successfully.
        </div>
      );
    }
  };
  return (
    <>
      <div className="container-fluid custom-row">
        <div className="row ">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9">
            <h3 className="my-3 text-center">Add Product</h3>
            <hr />
            {showError()}
            {showSuccess()}
            <div className="container p-5">
              <label htmlFor="product_name">Product Name:</label>
              <input
                className="form-control mb-2"
                type={"text"}
                id="product_name"
                onChange={handleChange("product_name")}
                value={product_name}
              />

              <label htmlFor="product_price">Product Price:</label>
              <input
                className="form-control mb-2"
                type="number"
                id="product_price"
                onChange={handleChange("product_price")}
                value={product_price}
              />

              <label htmlFor="product_desc">Product desc:</label>
              <textarea
                rows={5}
                className="form-control mb-2"
                id="product_desc"
                onChange={handleChange("product_desc")}
                value={product_desc}
              />

              <label htmlFor="count_In_Stock">Count in Stock:</label>
              <input
                className="form-control mb-2"
                type={"number"}
                id="count_In_Stock"
                onChange={handleChange("count_In_Stock")}
                value={count_In_Stock}
              />

              <label htmlFor="category">Category</label>
              <select
                id="category"
                className="form-control mb-2"
                onChange={handleChange("category")}
              >
                <option>Choose category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.category_name}
                  </option>
                ))}
              </select>

              <label htmlFor="product_img">img</label>
              <input
                type={"file"}
                id="product_img"
                accept="img/*"
                className="form-control mb-2"
                onChange={handleChange("product_img")}
                // onChange={event =>
                //     setProduct({ ...product, ['product_img']: event.target.files[0] })
                // }
              ></input>

              <button
                className="btn btn-warning form-control"
                onClick={clickSubmit}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addproduct;
