import { IMG_CDN_URL, RESTAURANT_MENU_URL } from "../config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantView = () => {
  // const { resId } = useParams();
  const params = useParams();
  const { resId } = params;
  // console.log(resId);
  const [restaurants, setRestaurants] = useState(null);
  useEffect(() => {
    fetchAPI();
  }, []);
  async function fetchAPI() {
    const response = await fetch(RESTAURANT_MENU_URL + resId);
    const jsonData = await response.json();
    // console.log(jsonData.data);
    setRestaurants(jsonData?.data?.cards[0]?.card?.card?.info);
  }
  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="restoBody">
      <h1>{restaurants.name}</h1>
      <h1>{restaurants.id}</h1>
      <img src={IMG_CDN_URL + restaurants?.cloudinaryImageId} />
    </div>
  );
};

export default RestaurantView;
