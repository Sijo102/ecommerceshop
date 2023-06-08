import React, { useState } from "react";
import axios from "axios";
import "./product.css";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "../redux/action/actionCreator";
import PriceFilter from "./pricefilter";

const baseURL = "https://fakestoreapi.com/products";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [filter, setFilter] = useState({ sortOption: '' });
  const [filteredProducts, setFilteredProducts] = useState(productList);

  const dispatch = useDispatch();

  const state = useSelector((state) => state.handleCartReducer);
    const handleFilterChange = (newFilter) => {
    setFilter({ ...filter, ...newFilter });
  };

  const applyFilter = () => {

    // Apply the filter logic based on the sortOption
    // Update the product list accordingly

    let filteredList = [...productList];

    if (filter.sortOption === 'lowToHigh') {
      filteredList = sortByLowToHigh(filteredList);
    }if (filter.sortOption === 'highToLow') {
      filteredList = sortByHighToLow(filteredList);
    }
    setFilteredProducts(filteredList);
  };

  const sortByLowToHigh = (productList) => {
    // Sort the product list by price in ascending order
    // Update the product list accordingly
    return productList.sort((a, b) => a.price - b.price);
  };

  const sortByHighToLow = (productList) => {
    // Sort the product list by price in descending order
    // Update the product list accordingly
    return productList.sort((a, b) => b.price - a.price);
  };


  const addProductToCart = (product) => {
    dispatch(addToCart(product));
  };

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProductList(response.data);
    });
  }, []);

  console.log(productList);

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-2">
          <div className="col-md-2">
            <Link to="/Cart" className="btn btn-white text-dark ms-2">
              <i className="fa fa-shopping-cart"></i> Cart ({state.length})
            </Link>
          </div>
          <div className="col-md-8"></div>
          <div className="col-md-2 mb-2">
            <PriceFilter sortOption={filter.sortOption} onFilterChange={handleFilterChange}/>
            <button className="btn btn-warning btn-sm rounded" onClick={applyFilter}>Apply Filter</button>
          </div>
          {productList.map((product) => {
            return (
              <div className="col-md-3 mb-3" key={product.id}>
                <div className="card h-100 shadow text-center product_card">
                  <img
                    className="card-img-top rounded mx-auto d-block product_img"
                    src={product.image}
                    alt="card_image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-price">
                      <b>&#x20B9; {Math.round(product.price)}</b>
                    </p>
                    <NavLink
                      to="/Cart"
                      className="btn btn-outline-success btn-md"
                    >
                      Go To Cart
                    </NavLink>
                    <button
                      className="btn btn-primary rounded btn-md"
                      onClick={() => addProductToCart(product)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
};

export default ProductList;