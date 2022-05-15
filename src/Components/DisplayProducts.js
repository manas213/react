import React, { useState } from "react";
import Card from "./Card";

const DisplayProducts = ({ products }) => {
  const [limit, setLimit] = useState(12);

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-4 mt-5 w-75 mx-auto">
        {products.map((item) => (
          <Card key={item._id} props={item} />
        ))}
      </div>
      <div className="text-center">
        {/* <div className="btn-group">
          <button
            className="btn btn-warning"
            onClick={() => setLimit(limit + 4)}
          >
            Show more
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setLimit(limit - 4)}
          >
            Show less
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default DisplayProducts;
