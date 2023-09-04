import { IMG_CDN_URL } from "../utils/config";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../utils/cartSlice";
import vegFoodIcon from "../assets/vegFoodIcon.png";
import nonVegFoodIcon from "../assets/nonVegFoodIcon.png";

const ItemCont = ({ card }) => {
  const dispatch = useDispatch();
  // console.log(card);
  const addIntoCart = (item) => {
    dispatch(addItems(item));
  };
  const removeFromCart = (item) => {
    dispatch(removeItems(item));
  };
  const cartItems = useSelector((store) => store.cart.items);
  let qty = 0;
  cartItems.map((obj) => {
    if (obj.item.id === card.info.id) {
      qty = obj.quantity;
    }
  });

  return (
    <div className="itemContainer">
      <div className="itemBody">
        <div>
          {card?.info?.isVeg ? (
            <img className="vegNonvegClassifier" src={vegFoodIcon} />
          ) : (
            <img className="vegNonvegClassifier" src={nonVegFoodIcon} />
          )}
        </div>
        <div className="itemTitle">{card?.info?.name}</div>
        <div className="rateAndOffersBox">
          <span className="itemRate">
            <i
              className="fa-solid fa-indian-rupee-sign fa-xs"
              style={{ color: "#3e4152" }}></i>{" "}
            {card?.info?.price
              ? card?.info?.price / 100
              : card?.info?.finalPrice
              ? card?.info?.finalPrice / 100
              : card?.info?.defaultPrice / 100}
          </span>
        </div>
        <div className="itemDescription">{card?.info?.description}</div>
      </div>
      <div className="itemPic">
        {card?.info?.imageId && <img src={IMG_CDN_URL + card?.info?.imageId} />}
        {qty == 0 ? (
          <div
            className="itemOuterBtn addBtn"
            onClick={() => addIntoCart(card?.info)}>
            ADD
          </div>
        ) : (
          <div className="itemOuterBtn itemCounter">
            <span
              className="itemInnerBtn minusItemBtn"
              onClick={() => removeFromCart(card?.info)}>
              -
            </span>
            {qty}
            <span
              className="itemInnerBtn plusItemBtn"
              onClick={() => addIntoCart(card?.info)}>
              +
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default ItemCont;
