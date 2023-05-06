import { useState, useEffect } from "react";
import { ALL_RESTAURANT_URL } from "../utils/config";
import { Link } from "react-router-dom";
import SearchShimmer from "./SearchShimmer";
import SearchCards from "./SearchCards";

function filterData(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const SearchComp = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    fetchRestaurantsAPI();
  }, []);

  async function fetchRestaurantsAPI() {
    const data = await fetch(ALL_RESTAURANT_URL);
    const dataAPI = await data.json();
    // console.log(json);
    const restData = dataAPI?.data?.cards[2]?.data?.data;
    setAllRestaurants(restData?.cards); //initially we have to fill both objects with API data
    setFilteredRestaurants(restData?.cards);
  }

  return (
    <>
      <div className="searchContainer">
        <div className="searchInnerContainer">
          <div className="searchBox">
            <input
              placeholder="Search for restaurants and food"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                const data = filterData(e.target.value, allRestaurants);
                setFilteredRestaurants(data);
                setIsSearched(true);
              }}
            />
            <button
              className="searchButton"
              onClick={() => {
                const data = filterData(searchText, allRestaurants);
                setFilteredRestaurants(data);
                setIsSearched(true);
              }}>
              <i
                className="fa-solid fa-magnifying-glass fa-xl"
                style={{ color: "#686b78" }}></i>
            </button>
          </div>
        </div>
        <div className="searchCardsContainer">
          {!isSearched ? (
            <SearchShimmer />
          ) : (
            filteredRestaurants.map((restaurant) => {
              return (
                <Link
                  to={"/restaurants/" + restaurant.data.id}
                  key={restaurant.data.id}
                  style={{ textDecoration: "none" }}>
                  <SearchCards {...restaurant?.data} />
                </Link>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
export default SearchComp;
