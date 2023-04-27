import { useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantShimmer from "./RestaurantShimmer";
import { useRestaurant } from "../utils/useRestaurant";
import { IMG_CDN_URL } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../utils/cartSlice";

const ItemCont = ({ card }) => {
  // console.log(card.info);
  const dispatch = useDispatch();
  const addIntoCart = (item) => {
    dispatch(addItems(item));
  };
  const removeFromCart = (item) => {
    dispatch(removeItems(item));
  };

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  let qty = 0;
  cartItems.map((obj) => {
    if (obj.item.id === card.info.id) {
      qty = obj.quantity;
    }
  });

  return (
    <div className="itemContainer">
      <div className="itemBody">
        <div className="itemTitle">{card.info.name}</div>
        <div className="rateAndOffersBox">
          <span className="itemRate">
            <i
              className="fa-solid fa-indian-rupee-sign fa-xs"
              style={{ color: "#3e4152" }}></i>
            {" " + card.info.price / 100}
          </span>
        </div>
        <div className="itemDescription">{card.info.description}</div>
      </div>
      <div className="itemPic">
        {card.info.imageId && <img src={IMG_CDN_URL + card.info.imageId} />}
        {qty == 0 ? (
          <div
            className="itemOuterBtn addBtn"
            onClick={() => addIntoCart(card.info)}>
            ADD
          </div>
        ) : (
          <div className="itemOuterBtn itemCounter">
            <span
              className="itemInnerBtn minusItemBtn"
              onClick={() => removeFromCart(card.info)}>
              -
            </span>
            {qty}
            <span
              className="itemInnerBtn plusItemBtn"
              onClick={() => addIntoCart(card.info)}>
              +
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const FoodItemsAccordion = ({ title, itemCards }) => {
  const [isAVisible, setIsAVisible] = useState(true);
  return (
    <div className="foodItemsAccordion">
      <div
        className="foodItemsHeader"
        onClick={() => {
          isAVisible ? setIsAVisible(false) : setIsAVisible(true);
        }}>
        {title + " " + "(" + itemCards?.length + ")"}
        <button>
          {isAVisible ? (
            <span>
              <i
                className="fa-solid fa-chevron-up fa-lg"
                style={{ color: "#000000" }}></i>
            </span>
          ) : (
            <span>
              <i
                className="fa-solid fa-chevron-down fa-lg"
                style={{ color: "#000000" }}></i>
            </span>
          )}
        </button>
      </div>
      {isAVisible && (
        <div className="foodItemsBody">
          {itemCards?.map((itemDetails, idx) => {
            return <ItemCont {...itemDetails} key={idx} />;
          })}
        </div>
      )}
    </div>
  );
};

const setBg = (avgRating) => {
  if (avgRating >= 4) {
    return "green";
  } else if (avgRating >= 3) {
    return "orange";
  } else if (avgRating >= 2) {
    return "yellow";
  } else if (avgRating >= 1) {
    return "red";
  } else {
    return "grey";
  }
};

const OffersBox = ({ header, couponCode, description, offerTag }) => {
  return (
    <div className="offerOuterContainer">
      {offerTag && (
        <div className="flatDeals">
          <span>{offerTag}</span>
        </div>
      )}
      <div className="offerBox">
        <p className="offerBoxHeader">{header}</p>
        <p className="offerBoxBody">
          {couponCode} | {description}
        </p>
      </div>
    </div>
  );
};

const RestaurantView = () => {
  const { resId } = useParams();
  // console.log(resId);

  const restaurantAPI = useRestaurant(resId); //created custom hook for fetching restaurant menu api
  const restaurants = restaurantAPI?.cards[0]?.card?.card?.info;
  const restroOffers =
    restaurantAPI?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
  const restaurantMenuItems =
    restaurantAPI?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  //console.log(restaurantAPI?.cards[1]?.card?.card?.gridElements?.infoWithStyle);
  // console.log(restaurantMenuItems);
  return !restaurants ? (
    <RestaurantShimmer />
  ) : (
    <div className="restoBody">
      <div className="restroHeaderContainer">
        <div className="leftHeaderContainer">
          <p className="restroName">{restaurants?.name}</p>
          <p className="restroCuisines">{restaurants?.cuisines.join(", ")}</p>
          <p className="restroCuisines">
            {restaurants?.areaName}, {restaurants?.sla?.lastMileTravelString}
          </p>
          <div className="restroDelCost">
            {restaurants?.expectationNotifiers[0]?.text}
          </div>
        </div>
        <div className="rightHeaderContainer">
          <div className="ratingBox">
            <div className="ratingIcons green">
              <i
                className="fa-solid fa-star fa-2xs"
                style={{ marginRight: "2px" }}></i>
              {restaurants?.avgRating}
            </div>
            <p className="totalRatings">{restaurants?.totalRatingsString}</p>
          </div>
        </div>
      </div>

      <ul className="restroTimeCostWrapper">
        <li className="restroTimeCostItem">
          <svg
            className="restroTimeCostIcon"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            fill="none">
            <circle
              r="8.35"
              transform="matrix(-1 0 0 1 9 9)"
              stroke="#3E4152"
              strokeWidth="1.3"></circle>
            <path
              d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
              fill="#3E4152"></path>
          </svg>
          <span>{restaurants?.sla?.slaString}</span>
        </li>
        <li className="restroTimeCostItem">
          <svg
            className="restroTimeCostIcon"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            fill="none">
            <circle
              cx="9"
              cy="9"
              r="8.25"
              stroke="#3E4152"
              strokeWidth="1.5"></circle>
            <path
              d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
              fill="#3E4152"></path>
          </svg>
          <span>{restaurants?.costForTwoMessage}</span>
        </li>
      </ul>
      <div className="restroOffersContainer">
        {restroOffers.offers?.map((offersData) => {
          return (
            <OffersBox {...offersData.info} key={offersData.info.offerIds} />
          );
        })}
      </div>
      <div className="restroFoodItemContainer">
        {restaurantMenuItems?.map((restObject, index) => {
          return <FoodItemsAccordion {...restObject?.card?.card} key={index} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantView;
