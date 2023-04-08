import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../config";
const searchShimmer = () => {
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    getSearchAPI();
  }, []);
  async function getSearchAPI() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=26.4633953&lng=80.3554247"
    );
    const dataAPI = await response.json();
    console.log(dataAPI);
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
