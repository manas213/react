import { API } from "../../config";

// to add new products
export const addProduct = (product) => {
  return fetch(`${API}/addproduct`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      //   "Content-Type": "application/json",
    },
    body: product,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// to get products from backend
export const getAllProducts = () => {
  return fetch(`${API}/showproducts`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// to get sorted products
export const getSortedProducts = (sortBy, order, limit) => {
  return fetch(
    `${API}/showproducts?sortBy=${sortBy}&order=${order}&limit=${limit}`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// to get product details
export const getProductDetails = (id) => {
  return fetch(`${API}/productdetails/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// to get related products
export const getRelatedProducts = (id) => {
  return fetch(`${API}/getrelatedproducts/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// to get fitered products
export const getFilteredProducts = (sortBy, order, skip, limit, {filters}) => {
  let data = { skip, filters };
  return fetch(`${API}/getfilteredproducts?limit=${limit}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
