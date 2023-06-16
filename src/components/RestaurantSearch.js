import { useState, useEffect } from "react";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
import { RESTAURANT_MENU_URL } from "../utils/config";
import { useParams, Link } from "react-router-dom";
import GoToTop from "../utils/gotoTop";
import ItemCont from "./ItemBox";

const RestaurantSearch = () => {
  const [searchText, setSearchText] = useState("");
  const allRestaurants = [];
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurantMenuItems, setRestaurantMenuItems] = useState(null);
  const [restName, setRestName] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const { resId } = useParams();
  useEffect(() => {
    fetchAPI();
  }, []);
  async function fetchAPI() {
    const response = await fetch(RESTAURANT_MENU_URL + resId);
    const jsonData = await response.json();
    setRestName(jsonData?.data?.cards[0]?.card?.card?.info?.name);
    setRestaurantMenuItems(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
        jsonData?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  }
  restaurantMenuItems?.map((items) => {
    items?.card?.card?.itemCards?.map((newItem) => {
      allRestaurants.push(newItem);
    });
  });
  const filterData = (searchText, allRestaurants) => {
    let filterData = allRestaurants.filter((restaurant) =>
      restaurant?.card?.info?.name
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
    if (searchText == "") filterData = [];
    return filterData;
  };

  return !allRestaurants ? (
    <RestaurantMenuShimmer />
  ) : (
    <div className="restoBody">
      <div className="searchMenuContainer">
        <div className="menuSearch">
          <button className="searchButton">
            <Link to={"/restaurants/" + resId}>
              <i
                className="fa-solid fa-arrow-left fa-xl"
                style={{ color: "#686b78" }}></i>
            </Link>
          </button>
          <input
            placeholder={"Search in " + restName}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              const data = filterData(e.target.value, allRestaurants);
              setFilteredRestaurants(data);
              setIsSearched(true);
              if (e.target.value === "") setIsSearched(false);
            }}
          />
          <button
            className="searchButton"
            onClick={() => {
              setSearchText("");
              setIsSearched(false);
              setFilteredRestaurants([]);
            }}>
            {!isSearched ? (
              <i
                className="fa-solid fa-magnifying-glass fa-xl"
                style={{ color: "#686b78" }}></i>
            ) : (
              <i
                className="fa-solid fa-xmark fa-2xl"
                style={{ color: "#686b78" }}></i>
            )}
          </button>
        </div>
      </div>
      <div className="foodItemsBody">
        {filteredRestaurants.map((restaurant, idx) => {
          return <ItemCont {...restaurant} key={idx} />;
        })}
      </div>
      <GoToTop />
    </div>
  );
};
export default RestaurantSearch;
