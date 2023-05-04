import { useState, useEffect } from "react";
import { ALL_RESTAURANT_URL, RESTAURANT_MENU_URL } from "../config";

//A custom hook for Fetching Restaurant Menu View
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

// Hook for fetching Homepage Restaurant Cards

const getRestaurants = (options, page) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [otherRestInfo, setOtherRestInfo] = useState([]);
  const [carouselData, setCarouselData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRestaurantsAPI();
  }, [options, page]);

  async function fetchRestaurantsAPI() {
    let res, restData, json;
    if (page === -1) {
      res = await fetch(ALL_RESTAURANT_URL + "&sortBy=" + options);
      json = await res.json();
      restData =
        options == "RELEVANCE"
          ? json?.data?.cards[2]?.data?.data
          : json?.data?.cards[0]?.data?.data;
      setAllRestaurants(restData?.cards);
      setCarouselData(json?.data?.cards[0]);
    } else {
      res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4633953&lng=80.3554247" +
          "&offset=" +
          page +
          "&sortBy=" +
          options +
          "&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
      );
      json = await res.json();
      restData = json?.data;
      setAllRestaurants((prev) => [...prev, ...restData?.cards]);
    }

    setOtherRestInfo(restData);
    setLoading(false);
  }
  return { allRestaurants, otherRestInfo, loading, setLoading, carouselData };
};

export { useRestaurant, getRestaurants };
/* const getRestaurants = (options) => {
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
}; */
