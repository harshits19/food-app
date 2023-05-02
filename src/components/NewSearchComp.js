import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";
import SearchShimmer from "./SearchShimmer";

const SearchCard = ({ data }) => {
  let resId = 0;
  return (
    <div className="search">
      {data?.suggestions?.map((restaurants) => {
        if (restaurants?.metadata) {
          resId = JSON.parse(restaurants?.metadata)?.data?.primaryRestaurantId;
        }
        return (
          <Link
            to={"/restaurants/" + resId}
            style={{ textDecoration: "none" }}
            key={restaurants?.cloudinaryId}>
            <div className="searchCardsInner">
              <div className="searchCardHeader">
                <img src={IMG_CDN_URL + restaurants?.cloudinaryId} />
              </div>
              <div className="searchCardDesc">
                <p>{restaurants.text}</p>
                <p className="typeofCard">{restaurants?.tagToDisplay}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

const NewSearchComp = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([
    {
      statusCode: 1,
      statusMessage: "Invalid query string",
      tid: "ABC",
      sid: "PQR",
      deviceId: "STU",
      csrfToken: "MNO",
    },
  ]);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    fetchRestaurantsAPI(searchText);
  }, [searchText]);

  async function fetchRestaurantsAPI(searchText) {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=26.4633953&lng=80.3554247&str=" +
        searchText
    );
    const dataAPI = await data.json();
    // console.log(json);
    setAllRestaurants(dataAPI);
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
                setIsSearched(true);
              }}
            />
            <button
              className="searchButton"
              onClick={() => {
                setIsSearched(false);
                setSearchText("");
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
        <div className="searchCardsContainer">
          {!isSearched ? (
            <SearchShimmer />
          ) : allRestaurants?.statusCode == 1 ? (
            <h2>No restaurants</h2>
          ) : (
            <SearchCard {...allRestaurants} />
          )}
        </div>
      </div>
    </>
  );
};
export default NewSearchComp;
