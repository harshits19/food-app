import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestCards from "./RestCards";
import { getRestaurants } from "../utils/useRestaurant";

const RestContainer = () => {
  const { allRestaurants, filteredRestaurants, otherRestInfo } =
    getRestaurants();

  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="container">
        <div className="restCarousal">
          <h2>{otherRestInfo.totalOpenRestaurants} Restaurants</h2>
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
                    <RestCards {...restaurant?.data} />
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
