import { getRestaurants } from "../utils/useFetch";
import carouselShimmerIcon from "../assets/carouselShimmerIcon.webp";
import { CAROUSEL_IMG_URL } from "../utils/config";
import { useEffect } from "react";
const Carousel = () => {
  const { carouselData } = getRestaurants("RELEVANCE", -1);
  const carElements = carouselData?.data?.data?.cards;

  const moveLeft = () => {
    document.getElementById("bbox").scrollLeft -= 313;
  };
  const moveRight = () => {
    document.getElementById("bbox").scrollLeft += 313;
  };
  const handleNavBtn = async (ele) => {
    const leftBtn = document.getElementById("leftBtn");
    const rightBtn = document.getElementById("rightBtn");
    if (ele.scrollLeft === 0) leftBtn.style.display = "none";
    else if (ele.scrollLeft + ele.clientWidth + 1 > ele.scrollWidth)
      rightBtn.style.display = "none";
    else {
      leftBtn.style.display = "block";
      rightBtn.style.display = "block";
    }
  };

  useEffect(() => {
    const ele = document.getElementById("bbox");
    ele?.addEventListener("scroll", () => handleNavBtn(ele));
    return () => {
      ele?.removeEventListener("scroll", () => handleNavBtn(ele));
    };
  }, [carouselData]);
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
            id="rightBtn"
            onClick={() => {
              moveRight();
            }}>
            <i
              className="fa-solid fa-arrow-right fa-xl"
              style={{ color: "#282828" }}></i>
          </button>
          <button
            className="carouselBtn btnLeft"
            id="leftBtn"
            onClick={() => {
              moveLeft();
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
