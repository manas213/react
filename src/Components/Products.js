import React from "react";
import './products.css'

const Products = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 mt-5 mx-auto g-4">
        <div className="col">
          <div className="card shadow-lg">
            <div className="card-image">
              <img src="./image/img4.jpg" className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <div className="text-center">
                <h5 className="card-title">Acer</h5>
                <button className="btn btn-warning">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-lg">
            <div className="card-image">
              <img src="./image/img5.webp" className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <div className="text-center">
                <h5 className="card-title">Dell</h5>
                <button className="btn btn-warning">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-lg">
            <div className="card-image">
              <img src="./image/img6.png" className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <div className="text-center">
                <h5 className="card-title">Lenovo</h5>
                <button className="btn btn-warning">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-lg">
            <div className="card-image">
              <img src="./image/img7.jpg" className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <div className="text-center">
                <h5 className="card-title">Razer Blade</h5>
                <button className="btn btn-warning">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
