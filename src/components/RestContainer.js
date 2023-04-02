import { ALL_RESTAURANT_URL, IMG_CDN_URL } from "../config";
import { useEffect, useState } from "react";
import useOnline from "../utils/useOnline";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestBox = ({ name, area, cuisines, cloudinaryImageId }) => {
  return (
    <div className="restbox">
      <div className="restimg">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt=""></img>
      </div>
      <div className="restdesc">
        <h3>{name}</h3>
        <p>Rating</p>
        <p>{cuisines.join(" , ")}</p>
        <p>{area}</p>
      </div>
    </div>
  );
};

const RestContainer = () => {
  const [allRestaurants, setAllRestaurants] = useState([]); //maintaining 2 variable for, so that if one is filtered out, others remains intact
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [otherRestInfo, setOtherRestInfo] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4589193&lng=80.3540325&page_type=DESKTOP_WEB_LISTING"
    );
    const dataAPI = await data.json();
    // console.log(json);
    const restData = dataAPI?.data?.cards[2]?.data?.data;
    setAllRestaurants(restData?.cards); //initially we have to fill both objects with API data
    setFilteredRestaurants(restData?.cards);
    setOtherRestInfo(restData);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Seems like you have no internet Connection</h1>;
  }

  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="container">
        <div className="restCarousal">
          <h2>{otherRestInfo.totalOpenRestaurants} Restaurant</h2>

          <div className="restContainer">
            {filteredRestaurants.length == 0 ? (
              <h1>No Restaurants</h1>
            ) : (
              filteredRestaurants.map((restaurant) => {
                return (
                  <Link
                    to={"/restaurants/" + restaurant.data.id}
                    key={restaurant.data.id}>
                    <RestBox {...restaurant.data} />
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default RestContainer;
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
