import { getRestaurants } from "../utils/useFetch";
import carouselShimmerIcon from "../assets/carouselShimmerIcon.webp";
const Carousel = () => {
  const { carouselData } = getRestaurants();
  const { banners, foodCards } = carouselData;
  return (
    <>
      {!banners ? (
        <div className="carouselShimmerContainer">
          <div className="carouselShimmer">
            <div className="rotatingImgContainer">
              <div className="rotatingImgInnerContainer"></div>
              <img className="rotatingImg" src={carouselShimmerIcon} />
            </div>
            Looking for great food near you ...
          </div>
        </div>
      ) : (
        <div className="carouselContainer">
          <div className="carouselBtnCont">
            <div className="carouselTitle">Best offers for you</div>
          </div>
          <div className="carouselInnerContainer">
            <div className="carouselInnerBox" id="bbox">
              {banners?.map((item) => {
                return (
                  <div className="carouselItem" id="box" key={item?.imageId}>
                    <img
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/" +
                        item?.imageId
                      }
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <div className="carouselContainer">
        <div className="carouselBtnCont">
          <div>What's on your mind?</div>
        </div>
        <div className="foodCardsContainer">
          {foodCards?.map((item, idx) => {
            if (idx < 9) return;
            return (
              <div className="foodCardItem" key={item?.id}>
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
                    item?.imageId
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Carousel;
