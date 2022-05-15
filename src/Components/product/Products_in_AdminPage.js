import React from "react";
import { useEffect, useState } from "react";
import { API } from "../../config";
import AdminSidebar from "../AdminSidebar";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { getAllProducts, getSortedProducts } from "./productAPI";

const Products_in_Admin_page = () => {
  const [products, setProducts] = useState([]);
  // const [allproducts,setAllProducts] = useState([])
  const [limit, setLimit] = useState(8);

  // const [sortBy,setSortBy] = useState('product_name')
  // const [order,setOrder] = useState(1)

  useEffect(() => {
    getAllProducts()
      // getSortedProducts(sortBy,order)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          // setAllProducts(data)
          setProducts(data);
        }
      })
      .catch((error) => console.log(error));

    // getSortedProducts(sortBy,order,limit)
    //     .then(data => {
    //         if (data.error) {
    //             console.log(data.error)
    //         }
    //         else {
    //             setProducts(data)
    //             console.log(data)
    //         }
    //     })
    //     .catch(error => console.log(error))
    // }, [sortBy,order,limit])
  }, []);

  return (
    <>
      {/* <Navbar /> */}

      <div className="container-fluid custom-row">
        <div className="row ">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9">
            <h3 className="my-3 text-center">Products</h3>

            {/* <select onChange={(e)=>setSortBy(e.target.value)}>
                            <option value='product_name'>Name</option>
                            <option value='product_price'>Price</option>
                        </select>
                        <select onChange={e=>setOrder(e.target.value)}>
                            <option value='1'>Ascending</option>
                            <option value='-1'>Descending</option>
                        </select> */}
            <hr />
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Product Image</th>
                  <th>Product Details</th>
                  <th>Count in Stock</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.slice(0, limit).map((item, i) => {
                  return (
                    <tr key={item._id}>
                      <td>{i + 1}</td>
                      <td>
                        <img
                          src={`http://localhost:5000/${item.product_img}`}
                          alt={item.product_name}
                          style={{ height: "150px" }}
                        />
                      </td>
                      <td>
                        <h3>{item.product_name}</h3>
                        <h4>{item.product_price}</h4>
                        <p>{item.desc}</p>
                      </td>
                      <td>{item.count_In_Stock}</td>
                      <td>
                        <button className="btn btn-warning">
                          View Details
                        </button>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  {
                    // limit < allproducts.length ?
                    limit < products.length ? (
                      <td colSpan={5}>
                        <button
                          className="btn btn-warning"
                          onClick={() => setLimit(limit + 4)}
                        >
                          Load more
                        </button>
                      </td>
                    ) : (
                      <td colSpan={5}>
                        <h5>All Items Loaded</h5>
                      </td>
                    )
                  }
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Products_in_Admin_page;
