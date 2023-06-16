import { useState, useEffect } from "react";
import { IMG_CDN_URL, RESTAURANT_PRE_SEARCH } from "../utils/config";
const searchShimmer = () => {
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    getSearchAPI();
  }, []);
  async function getSearchAPI() {
    const response = await fetch(RESTAURANT_PRE_SEARCH);
    const dataAPI = await response.json();
    setSearchData(dataAPI?.data?.cards[1]?.card?.card?.imageGridCards?.info);
  }

  return (
    <div className="searchShimmer">
      <div className="innerSSContainer">
        <div className="ssHeader">Popular Cuisines</div>
        <div className="ssBody">
          {searchData.map((data) => {
            return <img src={IMG_CDN_URL + data.imageId} key={data.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default searchShimmer;
