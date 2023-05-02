import { getRestaurants } from "../utils/useRestaurant";

const Carousel = () => {
  const { carouselData } = getRestaurants("RELEVANCE");
  const carElements = carouselData?.data?.data?.cards;
  // console.log(carElements);

  return (
    <div className="carouselContainer">
      {carouselData.length == 0 ? (
        <div className="carouselShimmer">
          <div className="rotatingImgContainer">
            <div className="rotatingImgInnerContainer"></div>
            <img
              className="rotatingImg"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icecream_wwomsa"
            />
          </div>
          Looking for great food near you ...
        </div>
      ) : (
        <div className="carouselInnerContainer">
          <div className="carouselInnerBox" id="bbox">
            {carElements.map((item) => {
              return (
                <div
                  className="carouselItem"
                  id="box"
                  key={item?.data?.bannerId}>
                  <img
                    src={
                      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/" +
                      item?.data?.creativeId
                    }
                    alt=""
                  />
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
