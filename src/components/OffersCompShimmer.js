import Shimmer from "./HomePageShimmer";
const OffersCompShimmer = () => {
  return (
    <>
      <div className="offerBanner">
        <div className="offerBannerInner"></div>
      </div>
      <div className="tglBtnContainer">
        <div className="tglBtnInner">
          <div id="tglRestroBtn" className="tglBtns tglBtnActive">
            Restaurant offers
          </div>
          <div id="tglPaymentBtn" className="tglBtns">
            Payment offers/Coupons
          </div>
        </div>
      </div>
      <div className="offerPageContainer">
        <div className="restContainer noTopBorder">
          <Shimmer />
        </div>
      </div>
    </>
  );
};
export default OffersCompShimmer;
