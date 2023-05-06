import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../utils/config";
import GoToTop from "../utils/gotoTop";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const restDetails = useSelector(
    (reduxStore) => reduxStore.restro.restDetails
  );
  const restNo = restDetails?.length - 1;
  const dispatch = useDispatch();
  const addIntoCart = (item) => {
    dispatch(addItems(item));
  };
  const removeFromCart = (item) => {
    dispatch(removeItems(item));
  };
  let totalCost = 0;
  cartItems.map((items) => {
    totalCost +=
      (items.item.price
        ? items.item.price
        : items.item.finalPrice
        ? items.item.finalPrice
        : items.item.defaultPrice) * items.quantity;
  });
  function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("hiddenText");
    if (checkBox.checked == true) {
      text.innerText =
        "Our delivery partner will call to confirm. Please ensure that your address has all the required details.";
    } else {
      text.innerText =
        " Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)";
    }
  }

  return (
    <>
      <div className="cartContainer">
        {cartItems.length === 0 ? (
          <div className="cartInnerContainer">
            <div className="cartBGImage"></div>
            <div className="cartMsg">Your cart is empty</div>
            <div className="cartDesc">
              You can go to home page to view more restaurants
            </div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="goHomeBtn">restaurants near you</div>
            </Link>
          </div>
        ) : (
          <div className="cartFilled">
            <div className="checkOutSection">
              <Link
                to={"/restaurants/" + restDetails[restNo].id}
                style={{ textDecoration: "none" }}>
                <button className="cartRestroDetails">
                  <span className="cartRestroImgBox">
                    <img
                      className="cartRestroImg"
                      height="50"
                      width="50"
                      src={IMG_CDN_URL + restDetails[restNo].cloudinaryImageId}
                    />
                  </span>
                  <span className="cartRestroDesc">
                    <div className="cartRestroName">
                      {restDetails[restNo].name}
                    </div>
                    <div className="cartRestroArea">
                      {restDetails[restNo].areaName}
                    </div>
                  </span>
                </button>
              </Link>
              <div className="cartItemContainer">
                <div className="cartInnerItemContainer">
                  <div className="cartItemSection">
                    <div>
                      {cartItems.map((items) => {
                        return (
                          <div className="cartItems" key={items.item.id}>
                            <div className="cartItemInner">
                              <div className="cartItemName">
                                {items.item.isVeg ? (
                                  <img
                                    style={{ height: "17px", width: "17px" }}
                                    src="https://img.icons8.com/color/48/null/vegetarian-food-symbol.png"
                                  />
                                ) : (
                                  <img
                                    style={{ height: "17px", width: "17px" }}
                                    src="https://img.icons8.com/color/48/null/non-vegetarian-food-symbol.png"
                                  />
                                )}
                                <div>{items?.item?.name}</div>
                              </div>
                              <div className="cartItemRateSection">
                                <div className="cartQuantityBtn">
                                  {items.quantity == 0 ? (
                                    <div
                                      className="addBtn cartItemBtn"
                                      onClick={() => addIntoCart(items.item)}>
                                      ADD
                                    </div>
                                  ) : (
                                    <div className="itemCounter cartItemBtn">
                                      <span
                                        className="itemInnerBtn minusItemBtn"
                                        onClick={() =>
                                          removeFromCart(items.item)
                                        }>
                                        -
                                      </span>
                                      {items.quantity}
                                      <span
                                        className="itemInnerBtn plusItemBtn "
                                        onClick={() => addIntoCart(items.item)}>
                                        +
                                      </span>
                                    </div>
                                  )}
                                </div>
                                <div className="cartItemPrice">
                                  {"₹"}
                                  {(items.item.price
                                    ? items.item.price
                                    : items.item.finalPrice
                                    ? items.item.finalPrice
                                    : items.item.defaultPrice) / 100}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="beforeCheckContainer">
                <div className="beforeCheckInner">
                  <div className="beforeCheckBox">
                    <input
                      type="checkbox"
                      className="checkBoxInput"
                      id="myCheck"
                      onClick={() => myFunction()}
                    />
                  </div>
                  <div aria-hidden="true" className="checkBoxBody">
                    <div className="checkBoxInnerHeader">
                      Opt in for No-contact Delivery
                    </div>
                    <div className="checkBoxInnerBody" id="hiddenText">
                      Unwell, or avoiding contact? Please select no-contact
                      delivery. Partner will safely place the order outside your
                      door (not for COD)
                    </div>
                  </div>
                </div>
              </div>
              <div className="cartCostSection">
                <div className="billDetails">Bill Details</div>
                <div className="costnDelSection">
                  <div className="">Item Total</div>
                  <div>{totalCost / 100}</div>
                </div>
                <div className="costnDelSection">
                  <div className="">
                    Delivery Fee | {restDetails[restNo]?.sla?.lastMileTravel} Km{" "}
                  </div>
                  <div>
                    {"₹"}
                    {restDetails[restNo]?.feeDetails?.totalFee / 100}
                  </div>
                </div>
                <div className="otherCharges"></div>

                <div className="costnDelSection">
                  <div className="">Govt Taxes & Other Charges</div>
                  <div>
                    {"₹"}
                    {restDetails[restNo]?.feeDetails?.totalFee / 200}
                  </div>
                </div>
              </div>
              <div className="totalPayoutSec">
                <div className="totalPayoutInner">
                  <div>TO PAY</div>
                  <div>
                    {"₹"}
                    {Math.round(
                      (totalCost +
                        restDetails[restNo]?.feeDetails?.totalFee * 1.5) /
                        100
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <GoToTop />
    </>
  );
};
export default Cart;
