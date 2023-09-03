import { useState, useEffect } from "react";
import {
  ALL_RESTAURANT_URL,
  RESTAURANT_MENU_URL,
  PAYMENTS_PAGE_URL,
} from "./config";

//A custom hook for Fetching Restaurant Menu View
const useRestaurant = (resId) => {
  const [restaurantAPI, setRestaurantAPI] = useState(null);
  const [restaurantMenuItems, setRestaurantMenuItems] = useState(null);

  useEffect(() => {
    fetchAPI();
  }, []);
  async function fetchAPI() {
    const response = await fetch(RESTAURANT_MENU_URL + resId);
    const jsonData = await response.json();
    setRestaurantAPI(jsonData?.data);
    setRestaurantMenuItems(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
        jsonData?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    return { restaurantAPI, restaurantMenuItems };
  }
};

// Hook for fetching Homepage Restaurant Cards
const getRestaurants = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  useEffect(() => {
    fetchRestaurantsAPI();
  }, []);
  async function fetchRestaurantsAPI() {
    const url = await fetch(ALL_RESTAURANT_URL);
    const restData = await url?.json();
    setAllRestaurants(
      restData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    const newData = {
      banners:
        restData?.data?.cards[0].card?.card?.gridElements?.infoWithStyle?.info,
      foodCards:
        restData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info,
    };
    setCarouselData(newData);
  }
  return {
    allRestaurants,
    carouselData,
  };
};

const getOfferRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [paymentOffers, setPaymentOffers] = useState([]);
  useEffect(() => {
    fetchRestaurantsAPI();
  }, []);

  async function fetchRestaurantsAPI() {
    const res = await fetch(ALL_RESTAURANT_URL);
    const json = await res.json();
    const restwo = await fetch(PAYMENTS_PAGE_URL);
    const jsontwo = await restwo.json();

    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setPaymentOffers(jsontwo);
  }
  return { allRestaurants, paymentOffers };
};

export { useRestaurant, getRestaurants, getOfferRestaurants };
