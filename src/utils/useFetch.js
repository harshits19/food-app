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
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    fetchAPI();
  }, []);
  async function fetchAPI() {
    const response = await fetch(
      "https://corsproxy.io/?" + RESTAURANT_MENU_URL + resId
    );
    const jsonData = await response.json();
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

  const mediaQuery = window.matchMedia("(min-width: 991.98px)");

  async function fetchRestaurantsAPI() {
    let res, restData, json;
    if (page === -1) {
      res = await fetch(
        "https://corsproxy.io/?" + ALL_RESTAURANT_URL + "&sortBy=" + options
      );
      json = await res?.json();
      restData =
        options == "RELEVANCE"
          ? json?.data?.cards[2]?.data?.data
          : json?.data?.cards[0]?.data?.data;
      setAllRestaurants(restData?.cards);
      if (mediaQuery.matches) setCarouselData(json?.data?.cards[0]);
      else setCarouselData(json?.data?.cards[1]);
    } else {
      res = await fetch(
        "https://corsproxy.io/?" +
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
      // else setLoading(true);
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
    const res = await fetch("https://corsproxy.io/?" + OFFERS_PAGE_URL);
    const json = await res.json();
    const restwo = await fetch("https://corsproxy.io/?" + PAYMENTS_PAGE_URL);
    const jsontwo = await restwo.json();

    setAllRestaurants(json);
    setPaymentOffers(jsontwo);
  }
  return { allRestaurants, paymentOffers };
};

export { useRestaurant, getRestaurants, getOfferRestaurants };
