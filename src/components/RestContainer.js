import { ALL_RESTAURANT_URL, IMG_CDN_URL } from "../config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestBox = ({
  name,
  costForTwoString,
  slaString,
  cuisines,
  avgRating,
  cloudinaryImageId,
  aggregatedDiscountInfo,
}) => {
  const setBg = (avgRating) => {
    if (avgRating >= 4) {
      return "green";
    } else if (avgRating >= 3) {
      return "orange";
    } else if (avgRating >= 2) {
      return "yellow";
    } else if (avgRating >= 1) {
      return "red";
    } else {
      return "grey";
    }
  };
  return (
    <div className="restbox">
      <div className="restimg">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt=""></img>
      </div>
      <div className="restdesc">
        <div className="restName">{name}</div>
        <div className="restCuisines">{cuisines.join(", ")}</div>
        <div className="restArea">
          <div className={setBg(avgRating) + " restRatings"}>
            <i
              className="fa-solid fa-star fa-2xs"
              style={{ color: "#f1f1f1", marginRight: "2px" }}></i>
            {avgRating}
          </div>
          <div>•</div>
          <div className="resDelTiming">{slaString}</div>
          <div>•</div>
          <div className="resCostppn">{costForTwoString}</div>
        </div>
        {/* {console.log(
          Object.values(aggregatedDiscountInfo.shortDescriptionList)[0].meta
        )} */}
        {/* <div className="restQuickView">QUICK VIEW</div> */}
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
                    key={restaurant.data.id}
                    style={{ textDecoration: "none" }}>
                    <RestBox {...restaurant?.data} />
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
