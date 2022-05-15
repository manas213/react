import React, { useState, useEffect } from "react";
import Card from "../Card";
import { getSortedProducts } from "./productAPI";

const Products_in_UsersPage = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("CreatedAt");
  const [order, setOrder] = useState(-1);
  const [limit, setLimit] = useState(8);
  useEffect(() => {
    getSortedProducts(sortBy, order, limit)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setProducts(data);
        }
      })
      .catch((err) => console.log(err));
  }, [limit]);
  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 mt-5 w-75 mx-auto">
        {products.map((item) => (
          <Card props={item} />
        ))}
      </div>
      <div className="text-center">
        <div className="btn-group">
          <button
            className="btn btn-warning"
            onClick={() => setLimit(limit + 4)}
          >
            Show More
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setLimit(limit - 4)}
          >
            Show Less
          </button>
        </div>
      </div>
    </>
  );
};

export default Products_in_UsersPage;
