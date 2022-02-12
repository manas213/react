import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-3">
        <table className="table table-dark table-striped table-hover mytable">
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Product Image</th>
              <th scope="col">Product Details</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <img src="./image/img4.jpg" alt="" height={"100px"} width={"132px"} />
              </td>
              <td>
                <h4>Acer</h4>
                <p>i7 processor, 8gb Ram, Rs.1,05,000</p>
              </td>
              <td>
                <button className="btn btn-warning">Update</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                <img src="./image/img5.webp" alt="" height={"100px"} width={"132px"} />
              </td>
              <td>
                <h4>Dell</h4>
                <p>i7 processor, 8gb Ram, Rs.1,29,000</p>
              </td>
              <td>
                <button className="btn btn-warning">Update</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                <img src="./image/img6.png" alt="" height={"100px"} width={"132px"} />
              </td>
              <td>
                <h4>Lenovo</h4>
                <p>i7 processor, 8gb Ram, Rs.1,09,000</p>
              </td>
              <td>
                <button className="btn btn-warning">Update</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
