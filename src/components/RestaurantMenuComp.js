import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
import { RESTAURANT_MENU_URL } from "../utils/config";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../utils/restroSlice";
import OfferIconCart from "../assets/offerIconCart.png";
import checkOutCart from "../assets/checkOutCart.png";
import GoToTop from "../utils/gotoTop";
import leafIcon from "../assets/leaf.png";
import ItemCont from "./ItemBox";
import RestMenuNav from "./RestMenuNav";

const FoodItemsAccordion = ({
  itemCards,
  title,
  isVeg,
  setIsVeg,
  vegDetails,
  isPureVeg,
}) => {
  const [isAVisible, setIsAVisible] = useState(true);
  return title ? (
    <div className="foodItemsAccordion" id={title}>
      <div
        className="foodItemsHeader"
        onClick={() => {
          isAVisible ? setIsAVisible(false) : setIsAVisible(true);
        }}>
        {itemCards ? title + " " + "(" + itemCards?.length + ")" : title}
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
            if (itemDetails.itemCards) {
              return (
                <FoodItemsAccordion
                  itemCards={itemDetails.itemCards}
                  title={itemDetails.title}
                  key={idx}
                  isVeg={isVeg}
                  setIsVeg={setIsVeg}
                />
              );
            } else {
              return isVeg ? (
                itemDetails?.card?.info?.isVeg && (
                  <ItemCont {...itemDetails} key={idx} />
                )
              ) : (
                <ItemCont {...itemDetails} key={idx} />
              );
            }
          })}
        </div>
      )}
    </div>
  ) : vegDetails ? (
    isPureVeg ? (
      <div className="vegSection">
        <img src={leafIcon} className="leafIcon" />
        PURE VEG
      </div>
    ) : (
      <div className="vegOnlySection">
        Veg Only
        <label className="switch">
          <input
            type="checkbox"
            onClick={() => {
              isVeg ? setIsVeg(false) : setIsVeg(true);
            }}
          />
          <span className="slider"></span>
        </label>
      </div>
    )
  ) : (
    <></>
  );
};

const OffersBox = ({ header, couponCode, description, offerTag }) => {
  return (
    <div className="offerBoxOuterContainer">
      <div className="offerBoxInnerContainer">
        {offerTag && (
          <div className="flatDeals">
            <span>{offerTag}</span>
          </div>
        )}
        <div className="offerBox">
          <p className="offerBoxHeader">
            <img src={OfferIconCart} className="RestaurantOfferIcon" />
            {header}
          </p>
          <p className="offerBoxBody">
            {couponCode} | {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const RestaurantView = () => {
  const { resId } = useParams();
  const [restaurantAPI, setRestaurant] = useState(null);
  const [restaurantMenuItems, setRestaurantMenuItems] = useState(null);
  const [isVeg, setIsVeg] = useState(false);
  useEffect(() => {
    fetchAPI();
  }, []);
  async function fetchAPI() {
    const response = await fetch(
      "https://corsproxy.io/?" + RESTAURANT_MENU_URL + resId
    );
    const jsonData = await response.json();
    setRestaurant(jsonData?.data);
    setRestaurantMenuItems(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
        jsonData?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  }

  const restaurants = restaurantAPI?.cards[0]?.card?.card?.info;
  const restroOffers =
    restaurantAPI?.cards[1]?.card?.card?.gridElements?.infoWithStyle;

  const dispatch = useDispatch();
  setTimeout(() => dispatch(getDetails(restaurants)), 3000);
  const cartDetails = useSelector((store) => store.cart.items);
  let totalCost = 0;
  cartDetails.map((items) => {
    totalCost +=
      (items.item.price
        ? items.item.price
        : items.item.finalPrice
        ? items.item.finalPrice
        : items.item.defaultPrice) * items.quantity;
  });
  var cartBottomMenu = document.getElementById("stickyBottomMenu");
  var restMenuBtnContainer = document.getElementById("restMenuBtnContainer");
  if (cartDetails.length > 0) {
    cartBottomMenu?.classList?.add("stickyBottomMenuVisible");
    restMenuBtnContainer?.classList?.add("restMenuVisible");
  } else if (
    cartBottomMenu?.classList?.contains("stickyBottomMenuVisible") &&
    cartDetails.length == 0
  ) {
    cartBottomMenu?.classList?.remove("stickyBottomMenuVisible");
    restMenuBtnContainer?.classList?.remove("restMenuVisible");
  }

  const [menuNavState, setMenuNavState] = useState(false);
  const menuNavToggleClickHandler = () => {
    setMenuNavState(!menuNavState);
  };

  return !restaurants ? (
    <RestaurantMenuShimmer />
  ) : (
    <div className="restoBody">
      <div className="breadcrumbContainer">
        <div>
          <span>
            <Link to={"/"}>Home</Link>
          </span>
          <span>{" / " + restaurants?.city}</span>
          <span>{" / " + restaurants?.areaName}</span>
          <span>{" / " + restaurants?.name}</span>
        </div>
        <div style={{ cursor: "pointer" }}>
          <Link to="./search=true">
            <i
              className="fa-solid fa-magnifying-glass fa-2xl"
              style={{
                color: "#3d4152",
                marginRight: "16px",
                fontSize: "18px",
              }}></i>
          </Link>
        </div>
      </div>
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
        {restroOffers?.offers?.map((offersData) => {
          return (
            <OffersBox {...offersData?.info} key={offersData?.info?.offerIds} />
          );
        })}
      </div>
      <div className="restroFoodItemContainer">
        {restaurantMenuItems?.map((restObject, index) => {
          return (
            <FoodItemsAccordion
              itemCards={
                restObject?.card?.card?.itemCards ||
                restObject?.card?.card?.categories
              }
              title={restObject?.card?.card?.title}
              key={index}
              isVeg={isVeg}
              setIsVeg={setIsVeg}
              vegDetails={restObject?.card?.card?.vegOnlyDetails}
              isPureVeg={restObject?.card?.card?.isPureVeg}
            />
          );
        })}
      </div>
      {
        <div className="stickyBottomMenuContainer">
          <div className="restMenuBtnInnerContainer" id="restMenuBtnContainer">
            <div className="restMenuBtnContainer">
              <div
                className="restMenuBtn"
                onClick={() => menuNavToggleClickHandler()}>
                <i
                  className="fa-solid fa-utensils fa-2xs"
                  style={{ color: "#ffffff", marginRight: "2px" }}></i>
                Browse Menu
              </div>
            </div>
          </div>
          <div className="stickyBottomMenu" id="stickyBottomMenu">
            <Link to="/cart/" style={{ textDecoration: "none" }}>
              <button className="stickyMenuStyleContainer">
                <span className="stickyMenuInnerBody">
                  <span>
                    {(cartDetails.length > 1
                      ? cartDetails.length + " Items"
                      : cartDetails.length + " Item") +
                      " | ₹" +
                      totalCost / 100}
                  </span>
                  <span className="bottomMenuRight">
                    view cart
                    <img
                      className="bottomMenuCartImg"
                      height="14"
                      width="14"
                      src={checkOutCart}></img>
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      }
      <RestMenuNav
        open={menuNavState}
        toggle={menuNavToggleClickHandler}
        data={restaurantMenuItems}
      />
      <GoToTop />
    </div>
  );
};

export default RestaurantView;
