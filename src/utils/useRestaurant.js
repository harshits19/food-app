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

const getRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]); //maintaining 2 variable for, so that if one is filtered out, others remains intact
  const [otherRestInfo, setOtherRestInfo] = useState([]);

  useEffect(() => {
    fetchRestaurantsAPI();
  }, []);

  async function fetchRestaurantsAPI() {
    const data = await fetch(ALL_RESTAURANT_URL);
    const dataAPI = await data.json();
    // console.log(json);
    const restData = dataAPI?.data?.cards[2]?.data?.data;
    setAllRestaurants(restData?.cards); //initially we have to fill both objects with API data
    setOtherRestInfo(restData);
  }
  return { allRestaurants, otherRestInfo };
};
export { useRestaurant, getRestaurants };
