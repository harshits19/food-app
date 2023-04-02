import { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL } from "../config";

//A custom hook
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    fetchAPI();
  }, []);
  async function fetchAPI() {
    const response = await fetch(RESTAURANT_MENU_URL + resId);
    const jsonData = await response.json();
    console.log(jsonData.data);
    setRestaurant(jsonData?.data?.cards[0]?.card?.card?.info);
  }
  return restaurant;
};
export default useRestaurant;
