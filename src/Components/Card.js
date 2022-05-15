import React from "react";
import { Link } from "react-router-dom";

const Card = ({ props }) => {
  return (
    <>
      <div className="col">
        <div className="card shadow-lg mb-5">
          <div className="card-image">
            <img
              src={`http://localhost:5000/${props.product_img}`}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="card-body">
            <div className="text-center">
              <h5 className="card-title">{props.product_name}</h5>
              <h6 className="card-title">Rs.{props.product_price}</h6>
              <p
                className="card-title text-truncate"
                style={{ height: "30px" }}
              >
                {props.product_desc}
              </p>
              <Link to={`/product/details/${props._id}`}>
                <button className="btn btn-warning">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
