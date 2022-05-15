import React, { useState, useEffect } from "react";
import Categories from "../Components/Categories";
import DisplayProducts from "../Components/DisplayProducts";
import { prices } from "../Components/Price";
import { getFilteredProducts } from "../Components/product/productAPI";
import Radio from "../Components/Radio";

const Deals = () => {
  const [sortBy, setSortBy] = useState("CreatedAt");
  const [order, setOrder] = useState(-1);
  const [limit, setLimit] = useState(8);
  const [skip, setSkip] = useState(0);
  const [filteredResult, setFilteredResult] = useState([]);
  const [size, setSize] = useState(0);
  const [myfilters, setMyFilters] = useState({
    filters: { category: [], product_price: [] },
  });

  useEffect =
    (() => {
      getFilteredProducts(sortBy, order, limit, skip, myfilters)
        .then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            setFilteredResult(data.filterProduct);
            setSize(data.size);
            setSkip(0);
          }
        })
        .catch((err) => console.log(err));
    },
    [myfilters]);

  const handlePrice = (index) => {
    const data = prices;
    let result = [];
    // for (let key in data) {
    //   if (data[key]._id == parseInt(index)) {
    //     result = data[key].value;
    //   }
    // }
    // return result;
    result = data.find((item) => item._id == index);
    return result.value;
  };

  const handleFilters = (filters, filterBy) => {
    const newFilter = { ...myfilters };
    newFilter.filters[filterBy] = filters;
    if (filterBy === "product_price") {
      let priceValue = handlePrice(filters);
      newFilter.filters[filterBy] = priceValue;
    }
    setMyFilters(newFilter);
  };

  const loadMore = () => {
    let toskip = skip + limit;
    getFilteredProducts(sortBy, order, limit, toskip, myfilters)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setFilteredResult([...filteredResult, ...data.filterProduct]);
          setSize(data.size);
          setSkip(toskip);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            Categories
            <Categories
              passing_handleFilters={(filters) =>
                handleFilters(filters, "category")
              }
            />
            Prices
            <Radio
              passing_handleFilters={(filters) =>
                handleFilters(filters, "product_price")
              }
            />
          </div>
          <div className="col-md-9">
            <DisplayProducts products={filteredResult} />
          </div>
        </div>
        <button className="btn btn-warning" onClick={loadMore}>
          Load More
        </button>
      </div>
    </>
  );
};

export default Deals;
