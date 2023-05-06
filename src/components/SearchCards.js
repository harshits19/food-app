import { IMG_CDN_URL } from "../utils/config";

const SearchCards = ({
  name,
  costForTwoString,
  slaString,
  cuisines,
  avgRating,
  cloudinaryImageId,
  aggregatedDiscountInfo,
}) => {
  return (
    <>
      <div className="searchCardsInner">
        <div className="searchCardHeader">
          <img src={IMG_CDN_URL + cloudinaryImageId} />
        </div>
        <div className="searchCardDesc">
          <p>{name}</p>
          <p className="typeofCard">Restaurant</p>
        </div>
      </div>
    </>
  );
};
export default SearchCards;
