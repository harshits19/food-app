import { resList, IMG_CDN_URL } from "../config";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
}

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

const RestCaraousal = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(resList);

  return (
    <>
      <div className="container">
        <div className="restCarousal">
          <h2>Top Restaurant Chains in Delhi</h2>
          <div className="searchBox">
            <input
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              onClick={() => {
                const data = filterData(searchText, restaurants);
                setRestaurants(data);
              }}>
              Search
            </button>
          </div>

          <div className="restContainer">
            {restaurants.map((restaurant) => {
              return <RestBox {...restaurant.data} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default RestCaraousal;
