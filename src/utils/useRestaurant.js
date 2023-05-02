import { useState, useEffect } from "react";
import { ALL_RESTAURANT_URL, RESTAURANT_MENU_URL } from "../config";

//A custom hook for Restraunt View API Fetching
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    fetchAPI();
  }, []);
  async function fetchAPI() {
    const response = await fetch(RESTAURANT_MENU_URL + resId);
    const jsonData = await response.json();
    // console.log(jsonData.data);
    // setRestaurant(jsonData?.data?.cards[0]?.card?.card?.info);
    setRestaurant(jsonData?.data);
  }
  return restaurant;
};

// Hook for Restraunt Cards for homepage fetching API requests

const getRestaurants = (options) => {
  const [allRestaurants, setAllRestaurants] = useState([]); //maintaining 2 variable for, so that if one is filtered out, others remains intact
  const [otherRestInfo, setOtherRestInfo] = useState([]);
  const [carouselData, setCarouselData] = useState([]);
  useEffect(() => {
    fetchRestaurantsAPI();
  }, [options]);

  async function fetchRestaurantsAPI() {
    const res = await fetch(ALL_RESTAURANT_URL + "&sortBy=" + options);
    const json = await res.json();

    const restData =
      options == "RELEVANCE"
        ? json?.data?.cards[2]?.data?.data
        : json?.data?.cards[0]?.data?.data;

    setAllRestaurants(restData?.cards);
    setOtherRestInfo(restData);
    setCarouselData(json?.data?.cards[0]);
  }
  return { allRestaurants, otherRestInfo, carouselData };
};
export { useRestaurant, getRestaurants };
