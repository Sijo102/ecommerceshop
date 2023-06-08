import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/action/actionCreator";

const Cart = () => {
  let totalCartPrice = 0;

  const state = useSelector((state) => state.handleCartReducer);
  console.log(state);

  const cartList = useSelector((state) => state.handleCartReducer);
  console.log(cartList);

  const handleAddQuantityButton = (cartItemId) => {
    console.log("Inside handle Add");
    dispatch(incrementQuantity(cartItemId));
  };

  const handleRemoveQuantityButton = (cartItemId) => {
    console.log("Inside handle Remove");
    dispatch(decrementQuantity(cartItemId));
  };

  // remove from cart

  const dispatch = useDispatch();

  const removeItemFromCart = (cartItemId) => {
    dispatch(removeFromCart(cartItemId));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light py-2 shadow-md">
            <a className="btn btn-white-outline-dark ms-2"> Cart ({state.length})</a>
          </nav>
        </div>
        <section className="h-100 h-custom shadow bg-info">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12">
                <div className="card card-registration card-registration-2">
                  <div className="card-body p-0">
                    <div className="row g-0">
                      <div className="col-lg-8">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <h1 className="fw-bold mb-0 text-black">
                              Shopping Cart
                            </h1>
                            <h6 className="mb-0 fw-bold">
                              Total Products - {cartList.length}
                            </h6>
                          </div>
                          <hr className="my-4" />
                          {cartList.map((cartItem) => {
                            totalCartPrice +=
                              cartItem.price * cartItem.quantity;

                            return (
                              <div key={cartItem.id}>
                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                  <div className="col-md-2 col-lg-2 col-xl-2 text-center">
                                    <img
                                      src={cartItem.image}
                                      className="img-fluid rounded-3"
                                      alt="Cotton T-shirt"
                                    />
                                    <a
                                      onClick={() =>
                                        removeItemFromCart(cartItem)
                                      }
                                    >
                                      <i className="fa-solid fa-trash mt-3"></i>
                                    </a>
                                  </div>
                                  <div className="col-md-3 col-lg-3 col-xl-3 mb-3">
                                    <h6 className="text-black mb-4">
                                      <b>Product Name -</b> {cartItem.title}
                                    </h6>
                                  </div>
                                  <div className="col-md-2 col-lg-2 col-xl-2 text-center mb-3">
                                    <h6>&#x20B9; {Math.round(cartItem.price)} / item</h6>
                                  </div>
                                  <div className="col-md-3 col-lg-3 col-xl-3 d-flex mb-4">
                                    <button
                                      className="btn btn-link px-2"
                                      onClick={() =>
                                        handleRemoveQuantityButton(cartItem.id)
                                      }
                                    >
                                      <i className="fas fa-minus"></i>
                                    </button>

                                    <input
                                      value={cartItem.quantity}
                                      onChange={() => {}}
                                      type="number"
                                      className="form-control text-center"
                                    />

                                    <button
                                      className="btn btn-link px-2"
                                      onClick={() =>
                                        handleAddQuantityButton(cartItem.id)
                                      }
                                    >
                                      <i className="fas fa-plus"></i>
                                    </button>
                                  </div>
                                  <div className="col-md-2 col-lg-2 col-xl-2 text-center mb-4">
                                    <h6 className="mb-0">
                                      &#x20B9;{" "}
                                      {Math.round(cartItem.quantity * cartItem.price)}
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                          <hr className="my-4" />

                          <div className="pt-5">
                            <h6 className="mb-0">
                              <Link to="/" className="text-body">
                                <i className="fas fa-long-arrow-alt-left me-2"></i>
                                Back to shop
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 bg-grey">
                        <div className="p-5">
                          <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                          {/* <hr className="my-4" /> */}

                          {/* <div className="d-flex justify-content-between mb-4">
                            <h5 className="fw-bold">
                              Items - {cartList.total}
                            </h5>
                            <h5>Total - {state.price}</h5>
                          </div> */}

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between mb-5">
                            <h5 className="fw-bold">Total Price</h5>
                            <h5>&#x20B9; {Math.round(totalCartPrice)}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
