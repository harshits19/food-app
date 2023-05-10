import { getRestaurants } from "../utils/useFetch";
import carouselShimmerIcon from "../assets/carouselShimmerIcon.webp";
import { CAROUSEL_IMG_URL } from "../utils/config";

const Carousel = () => {
  const { carouselData } = getRestaurants("RELEVANCE", -1);
  const carElements = carouselData?.data?.data?.cards;

  return (
    <div className="carouselContainer">
      {carouselData?.length == 0 ? (
        <div className="carouselShimmer">
          <div className="rotatingImgContainer">
            <div className="rotatingImgInnerContainer"></div>
            <img className="rotatingImg" src={carouselShimmerIcon} />
          </div>
          Looking for great food near you ...
        </div>
      ) : (
        <div className="carouselInnerContainer">
          <div className="carouselInnerBox" id="bbox">
            {carElements?.map((item) => {
              return (
                <div
                  className="carouselItem"
                  id="box"
                  key={item?.data?.bannerId}>
                  <img src={CAROUSEL_IMG_URL + item?.data?.creativeId} alt="" />
                </div>
              );
            })}
          </div>
          <button
            className="carouselBtn btnRight"
            onClick={() => {
              document.getElementById("bbox").scrollLeft += 310;
            }}>
            <i
              className="fa-solid fa-arrow-right fa-xl"
              style={{ color: "#282828" }}></i>
          </button>
          <button
            className="carouselBtn btnLeft"
            onClick={() => {
              document.getElementById("bbox").scrollLeft -= 310;
            }}>
            <i
              className="fa-solid fa-arrow-left fa-xl"
              style={{ color: "#282828" }}></i>
          </button>
        </div>
      )}
    </div>
  );
};
export default Carousel;
