import { IMG_CDN_URL } from "../config";

const RestCards = ({
  name,
  costForTwoString,
  slaString,
  cuisines,
  avgRating,
  cloudinaryImageId,
  aggregatedDiscountInfo,
}) => {
  const setBg = (avgRating) => {
    if (avgRating >= 4) {
      return "greenbg";
    } else if (avgRating >= 3) {
      return "orangebg";
    } else if (avgRating >= 2) {
      return "yellowbg";
    } else if (avgRating >= 1) {
      return "redbg";
    } else {
      return "greybg";
    }
  };
  return (
    <div className="restbox">
      <div className="restimg">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt=""></img>
      </div>
      <div className="restdesc">
        <div className="restName">{name}</div>
        <div className="restCuisines">{cuisines.join(", ")}</div>
        <div className="restArea">
          <div className={setBg(avgRating) + " restRatings"}>
            <i
              className="fa-solid fa-star fa-2xs"
              style={{ color: "#f1f1f1", marginRight: "2px" }}></i>
            {avgRating}
          </div>
          <div>•</div>
          <div className="resDelTiming">{slaString}</div>
          <div>•</div>
          <div className="resCostppn">{costForTwoString}</div>
        </div>
        {/* {console.log(
            Object.values(aggregatedDiscountInfo.shortDescriptionList)[0].meta
          )} */}
        {/* <div className="restQuickView">QUICK VIEW</div> */}
      </div>
    </div>
  );
};
export default RestCards;
