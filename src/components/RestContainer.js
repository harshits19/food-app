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
                  onClick={() => setFilterType("RELEVANCE")}>
                  Relevance
                </label>

                <input type="radio" id="delTime" name="select" value="2" />
                <label
                  htmlFor="delTime"
                  className="btnLabel"
                  onClick={() => setFilterType("DELIVERY_TIME")}>
                  Delivery Time
                </label>

                <input type="radio" id="rating" name="select" value="3" />
                <label
                  htmlFor="rating"
                  className="btnLabel"
                  onClick={() => setFilterType("RATING")}>
                  Rating
                </label>

                <input type="radio" id="lth" name="select" value="4" />
                <label
                  htmlFor="lth"
                  className="btnLabel"
                  onClick={() => setFilterType("COST_FOR_TWO")}>
                  Cost: Low to High
                </label>

                <input type="radio" id="htl" name="select" value="5" />
                <label
                  htmlFor="htl"
                  className="btnLabel"
                  onClick={() => setFilterType("COST_FOR_TWO_H2L")}>
                  Cost: High to Low
                </label>
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
