import { useState, useEffect } from "react";
import { IMG_CDN_URL, RESTAURANT_SEARCH_URL } from "../utils/config";
import { Link } from "react-router-dom";
import SearchShimmer from "./SearchShimmer";
import GoToTop from "../utils/gotoTop";
import useTitle from "../utils/useTitle";

const SearchCard = ({ data }) => {
  let resId = 0;
  return (
    <div className="search">
      {data?.suggestions?.map((restaurants) => {
        if (restaurants?.metadata) {
          var url = JSON.parse(restaurants?.metadata)?.data
            ?.primaryRestaurantId;
          if (url === undefined) resId = "";
          else resId = "/restaurants/" + url;
        }
        return (
          <Link
            to={resId}
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
    const data = await fetch(RESTAURANT_SEARCH_URL + searchText);
    const dataAPI = await data.json();
    // console.log(json);
    setAllRestaurants(dataAPI);
  }
  useTitle("Search for restaurants");
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
                if (e.target.value === "") setIsSearched(false);
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
            <></>
          ) : (
            <SearchCard {...allRestaurants} />
          )}
        </div>
      </div>
      <GoToTop />
    </>
  );
};
export default NewSearchComp;
