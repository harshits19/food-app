const Carousel = () => {
  const carouselImg = [
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/yparhmxrby5lv0ubsel4",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/dpqcjrxwruipnt1wyqnh",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/lyn9at38gjithnogzfui",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/jmeoz6zu9fi0h9tw7xrb",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v",
  ];
  return (
    <div className="carouselContainer">
      <div className="carouselInnerContainer">
        <div className="carouselInnerBox" id="bbox">
          {carouselImg.map((imgid) => {
            return (
              <div className="carouselItem" id="box" key={imgid}>
                <img src={imgid} alt="" />
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
    </div>
  );
};
export default Carousel;
