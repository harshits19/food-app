import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestCards from "./RestCards";
import { getRestaurants } from "../utils/useRestaurant";

const RestContainer = () => {
  const { allRestaurants, otherRestInfo } = getRestaurants();

  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="container">
        <div className="restCarousal">
          <div className="restFilters">
            <div>
              <h2>{otherRestInfo.totalOpenRestaurants} restaurants</h2>
            </div>
            <div className="filterBtnContainer">
              <div className="filterBtn" id="rel">
                <a href="#rel">Relevance</a>
              </div>
              <div className="filterBtn" id="del">
                <a href="#del">Delivery Time</a>
              </div>
              <div className="filterBtn" id="rat">
                <a href="#rat">Rating</a>
              </div>
              <div className="filterBtn" id="lth">
                <a href="#lth">Cost: Low to High</a>
              </div>
              <div className="filterBtn" id="htl">
                <a href="#htl">Cost: High to Low</a>
              </div>
            </div>
          </div>
          <div className="restContainer">
            {allRestaurants.map((restaurant) => {
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
