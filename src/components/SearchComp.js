import { useState, useEffect } from "react";
import { ALL_RESTAURANT_URL } from "../config";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestCards from "./RestCards";

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

  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="container">
        <div className="searchInnerContainer">
          <div className="searchBox">
            <input
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              onClick={() => {
                const data = filterData(searchText, allRestaurants);
                setFilteredRestaurants(data);
              }}>
              Search
            </button>
          </div>
        </div>
        <div className="restContainer" style={{ justifyContent: "flex-start" }}>
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurants/" + restaurant.data.id}
                key={restaurant.data.id}
                style={{ textDecoration: "none" }}>
                <RestCards {...restaurant?.data} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default SearchComp;
/* 
  const [searchText, setSearchText] = useState("");
function filterData(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}
 <div className="searchBox">
            <input
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              onClick={() => {
                const data = filterData(searchText, allRestaurants);
                setFilteredRestaurants(data);
              }}>
              Search
            </button>
          </div>
*/
