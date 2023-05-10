import { Link } from "react-router-dom";
import HomePageShimmer from "./HomePageShimmer";
import RestCards from "./RestCards";
import { getRestaurants } from "../utils/useFetch";
import { useState, useEffect } from "react";
import filterIcons from "../assets/filterIcon.png";

const RestContainer = () => {
  const [filterType, setFilterType] = useState("RELEVANCE");
  const [page, setPage] = useState(-1);

  const { allRestaurants, otherRestInfo, loading, setLoading } = getRestaurants(
    filterType,
    page
  );

  const handleScrollEvents = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 500
      ) {
        setLoading(true);
        setPage((prev) => prev + 16);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvents);
  }, []);

  return (
    <>
      <div className="container">
        <div className="homepageContainer" id="homepageContainer">
          <div className="filterContainer">
            <div className="restFilters">
              <div>
                <h2>
                  {otherRestInfo?.totalOpenRestaurants
                    ? otherRestInfo?.totalOpenRestaurants
                    : otherRestInfo?.totalSize}{" "}
                  restaurants
                </h2>
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
                    setPage(-1);
                  }}>
                  Relevance
                </label>

                <input type="radio" id="delTime" name="select" value="2" />
                <label
                  htmlFor="delTime"
                  className="btnLabel"
                  onClick={() => {
                    setFilterType("DELIVERY_TIME");
                    setPage(-1);
                  }}>
                  Delivery Time
                </label>

                <input type="radio" id="rating" name="select" value="3" />
                <label
                  htmlFor="rating"
                  className="btnLabel"
                  onClick={() => {
                    setFilterType("RATING");
                    setPage(-1);
                  }}>
                  Rating
                </label>

                <input type="radio" id="lth" name="select" value="4" />
                <label
                  htmlFor="lth"
                  className="btnLabel"
                  onClick={() => {
                    setFilterType("COST_FOR_TWO");
                    setPage(-1);
                  }}>
                  Cost: Low to High
                </label>

                <input type="radio" id="htl" name="select" value="5" />
                <label
                  htmlFor="htl"
                  className="btnLabel"
                  onClick={() => {
                    setFilterType("COST_FOR_TWO_H2L");
                    setPage(-1);
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
                  return restaurant?.data?.data ? (
                    <Link
                      to={"/restaurants/" + restaurant?.data?.data?.id}
                      key={restaurant?.data?.data?.id}
                      style={{ textDecoration: "none" }}>
                      <RestCards {...restaurant?.data?.data} />
                    </Link>
                  ) : (
                    <Link
                      to={"/restaurants/" + restaurant?.data?.id}
                      key={restaurant?.data?.id}
                      style={{ textDecoration: "none" }}>
                      <RestCards {...restaurant?.data} />
                    </Link>
                  );
                })}
              </>
            )}
            {loading && <HomePageShimmer />}
          </div>
        </div>
      </div>
    </>
  );
};
export default RestContainer;
