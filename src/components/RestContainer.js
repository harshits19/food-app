import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestCards from "./RestCards";
import { getRestaurants } from "../utils/useRestaurant";
import { useState } from "react";

const RestContainer = () => {
  const [filterType, setFilterType] = useState("RELEVANCE");
  const { allRestaurants, otherRestInfo } = getRestaurants(filterType);

  return allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="container">
        <div className="homepageContainer">
          <div className="filterContainer">
            <div className="restFilters">
              <div>
                <h2>{otherRestInfo?.totalOpenRestaurants} restaurants</h2>
              </div>
              <div className="filterBtnContainer">
                <div className="filterBtn" id="rel">
                  <a href="#rel" onClick={() => setFilterType("RELEVANCE")}>
                    Relevance
                  </a>
                </div>
                <div className="filterBtn" id="del">
                  <a href="#del" onClick={() => setFilterType("DELIVERY_TIME")}>
                    Delivery Time
                  </a>
                </div>
                <div className="filterBtn" id="rat">
                  <a href="#rat" onClick={() => setFilterType("RATING")}>
                    Rating
                  </a>
                </div>
                <div className="filterBtn" id="lth">
                  <a href="#lth" onClick={() => setFilterType("COST_FOR_TWO")}>
                    Cost: Low to High
                  </a>
                </div>
                <div className="filterBtn" id="htl">
                  <a
                    href="#htl"
                    onClick={() => setFilterType("COST_FOR_TWO_H2L")}>
                    Cost: High to Low
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="restContainer">
            {allRestaurants?.map((restaurant) => {
              return (
                <Link
                  to={"/restaurants/" + restaurant?.data?.id}
                  key={restaurant?.data?.id}
                  style={{ textDecoration: "none" }}>
                  <RestCards {...restaurant?.data} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default RestContainer;
