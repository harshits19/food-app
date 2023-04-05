//import { IMG_CDN_URL, RESTAURANT_MENU_URL } from "../config";
// import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useRestaurant } from "../utils/useRestaurant";

const RestaurantView = () => {
  const { resId } = useParams();
  // console.log(resId);
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

  const restaurants = useRestaurant(resId); //created custom hook for fetching restaurant menu api
  console.log(restaurants);
  return !restaurants ? (
    <Shimmer />
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
            <div className={"ratingIcons " + setBg(restaurants?.avgRating)}>
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
        <ul className="restroOffersList"></ul>
      </div>
    </div>
  );
};

export default RestaurantView;

{
  /* <h1>{restaurants?.name}</h1>
<h1>{restaurants?.id}</h1>
<img src={IMG_CDN_URL + restaurants?.cloudinaryImageId} /> */
}