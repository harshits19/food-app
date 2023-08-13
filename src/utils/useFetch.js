import { useState, useEffect } from "react";
import {
  ALL_RESTAURANT_URL,
  RESTAURANT_MENU_URL,
  OFFERS_PAGE_URL,
  PAYMENTS_PAGE_URL,
  HOMEPAGE_REST_URL,
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
const getRestaurants = (options, page) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [otherRestInfo, setOtherRestInfo] = useState([]);
  const [carouselData, setCarouselData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRestaurantsAPI();
  }, [options, page]);

  const mediaQuery = window.matchMedia("(max-width: 767.98px)");

  async function fetchRestaurantsAPI() {
    let res, restData, json;
    if (page === -1) {
      // res = await fetch(ALL_RESTAURANT_URL + "&sortBy=" + options);
      res = await fetch(
        "https://dl.dropboxusercontent.com/scl/fi/d6i6o8a10i3fu6ouo2hx5/homepage.json?rlkey=efmu8drzc72rqwz47gec9sl49"
      );
      json = await res?.json();
      restData =
        options == "RELEVANCE"
          ? json?.data?.cards[2]?.data?.data
          : json?.data?.cards[0]?.data?.data;
      setAllRestaurants(restData?.cards);
      if (mediaQuery.matches) setCarouselData(json?.data?.cards[1]);
      else setCarouselData(json?.data?.cards[0]);
    } else {
      /*    res = await fetch(
        HOMEPAGE_REST_URL +
          "&offset=" +
          page +
          "&sortBy=" +
          options +
          "&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
      );
      json = await res?.json();
      restData = json?.data;
      // if (page < otherRestInfo.totalSize)
      setAllRestaurants((prev) => [...prev, ...restData?.cards]);
      // else setLoading(true); */
    }
    setLoading(false);
    setOtherRestInfo(restData);
  }
  return {
    allRestaurants,
    otherRestInfo,
    loading,
    setLoading,
    carouselData,
    setAllRestaurants,
  };
};

const getOfferRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [paymentOffers, setPaymentOffers] = useState([]);
  useEffect(() => {
    fetchRestaurantsAPI();
  }, []);

  async function fetchRestaurantsAPI() {
    const res = await fetch(OFFERS_PAGE_URL);
    const json = await res.json();
    const restwo = await fetch(PAYMENTS_PAGE_URL);
    const jsontwo = await restwo.json();

    setAllRestaurants(json);
    setPaymentOffers(jsontwo);
  }
  return { allRestaurants, paymentOffers };
};

export { useRestaurant, getRestaurants, getOfferRestaurants };
