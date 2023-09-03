import { useState } from "react";
import { getRestaurants } from "../utils/useFetch";
import { Link } from "react-router-dom";
import HomePageShimmer from "./HomePageShimmer";
import RestCards from "./RestCards";
import filterIcons from "../assets/filterIcon.png";

const RestContainer = () => {
  const [filterType, setFilterType] = useState("");
  const { allRestaurants } = getRestaurants();

  if (filterType === "DELIVERY_TIME") {
    allRestaurants?.sort(
      (a, b) => a?.info?.sla?.deliveryTime - b?.info?.sla?.deliveryTime
    );
  } else if (filterType === "RATING") {
    allRestaurants.sort((a, b) => b?.info?.avgRating - a?.info?.avgRating);
  } else if (filterType === "COST_FOR_TWO") {
    allRestaurants.sort((a, b) => {
      let priceA = Number(a?.info?.costForTwo?.split(" ")[0].slice(1));
      let priceB = Number(b?.info?.costForTwo?.split(" ")[0].slice(1));
      return priceA - priceB;
    });
  } else if (filterType === "COST_FOR_TWO_H2L") {
    allRestaurants.sort((a, b) => {
      let priceA = Number(a?.info?.costForTwo?.split(" ")[0].slice(1));
      let priceB = Number(b?.info?.costForTwo?.split(" ")[0].slice(1));
      return priceB - priceA;
    });
  } else if (filterType === "RELEVANCE") {
  }

  return (
    <div className="container">
      <div className="homepageContainer" id="homepageContainer">
        <div className="filterContainer">
          <div className="restFilters">
            <div>
              <h2>{allRestaurants.length + " restaurants"}</h2>
            </div>
            <div className="filterBtnContainer">
              <input
                type="radio"
                id="relevance"
                name="select"
                value="1"
                defaultChecked
              />
              <label
                htmlFor="relevance"
                className="btnLabel"
                onClick={() => {
                  setFilterType("RELEVANCE");
                }}>
                Relevance
              </label>

              <input type="radio" id="delTime" name="select" value="2" />
              <label
                htmlFor="delTime"
                className="btnLabel"
                onClick={() => {
                  setFilterType("DELIVERY_TIME");
                }}>
                Delivery Time
              </label>

              <input type="radio" id="rating" name="select" value="3" />
              <label
                htmlFor="rating"
                className="btnLabel"
                onClick={() => {
                  setFilterType("RATING");
                }}>
                Rating
              </label>

              <input type="radio" id="lth" name="select" value="4" />
              <label
                htmlFor="lth"
                className="btnLabel"
                onClick={() => {
                  setFilterType("COST_FOR_TWO");
                }}>
                Cost: Low to High
              </label>

              <input type="radio" id="htl" name="select" value="5" />
              <label
                htmlFor="htl"
                className="btnLabel"
                onClick={() => {
                  setFilterType("COST_FOR_TWO_H2L");
                }}>
                Cost: High to Low
              </label>
              <div className="btnLabel">
                <div className="filterBtn">Filters</div>
                <div className="filterBtnInner">
                  <img className="filterIcon" src={filterIcons} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="restContainer">
          {allRestaurants?.length == 0 ? (
            <HomePageShimmer />
          ) : (
            <>
              {allRestaurants?.map((restaurant) => {
                return (
                  <Link
                    to={"/restaurants/" + restaurant?.info?.id}
                    key={restaurant?.info?.id}
                    style={{ textDecoration: "none" }}>
                    <RestCards {...restaurant?.info} />
                  </Link>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default RestContainer;
