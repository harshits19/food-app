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
        <div className="restCuisines">{cuisines?.join(", ")}</div>
        <div className="restArea">
          <div className={setBg(avgRating) + " restRatings"}>
            <i
              className="fa-solid fa-star fa-2xs"
              style={{ marginRight: "2px" }}></i>
            {avgRating}
          </div>
          <div>•</div>
          <div className="resDelTiming">{slaString}</div>
          <div>•</div>
          <div className="resCostppn">{costForTwoString}</div>
        </div>
        {aggregatedDiscountInfo?.shortDescriptionList[0]?.meta && (
          <div className="restOffers">
            <span>
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart"
                className="restCardIcon"
              />
            </span>{" "}
            <span>{aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}</span>
          </div>
        )}
        <div className="restQuickView">QUICK VIEW</div>
      </div>
    </div>
  );
};
export default RestCards;
