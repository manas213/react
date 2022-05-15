import React, { useState, useEffect } from "react";
import Card from "../Card";
import { getRelatedProducts } from "./productAPI";
import { useParams } from "react-router-dom";

const RelatedProducts = () => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [limit, setLimit] = useState(4);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    // console.log(props)
    getRelatedProducts(id)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setRelatedProducts(data);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <div className="container mx-auto p-5 my-5">
        <div className="row row-cols-1 row-cols-md-4 mt-5 mx-auto">
          {relatedProducts.slice(0, limit).map((item) => (
            <Card props={item} />
          ))}
        </div>
        {limit < relatedProducts.length && (
          <button
            className="btn btn-warning"
            onClick={() => {
              setLimit(limit + 4);
            }}
          >
            Show More
          </button>
        )}
      </div>
    </>
  );
};

export default RelatedProducts;
