import { IMG_CDN_URL, RESTAURANT_MENU_URL } from "../config";
// import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantView = () => {
  // const { resId } = useParams();
  const params = useParams();
  const { resId } = params;
  // console.log(resId);

  const restaurants = useRestaurant(resId); //created custom hook for fetching restaurant menu api

  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="restoBody">
      <h1>{restaurants?.name}</h1>
      <h1>{restaurants?.id}</h1>
      <img src={IMG_CDN_URL + restaurants?.cloudinaryImageId} />
    </div>
  );
};

export default RestaurantView;
