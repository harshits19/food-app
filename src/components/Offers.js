import { useState } from "react";
import { Link } from "react-router-dom";
import { getOfferRestaurants } from "../utils/useRestaurant";
import RestCards from "./RestCards";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../utils/config";
const Offers = () => {
  const { allRestaurants, paymentOffers } = getOfferRestaurants();
  const [isVisible, setIsVisible] = useState(true);
  const [visibleSection, setVisibleSection] = useState("offerSection");
  const OffersContainer = ({ isVisible }) => {
    return (
      isVisible && (
        <>
          <div className="offerPageHeader">
            <div className="offerPageHeading">
              All offers ({allRestaurants?.data?.totalSize})
            </div>
            <div className="offerPageDesc">
              All offers and deals, from restaurants near you
            </div>
          </div>
          <div className="offersContainer">
            {allRestaurants?.length == 0 ? (
              <Shimmer />
            ) : (
              <>
                {allRestaurants?.data?.cards?.map((restaurant) => {
                  return !restaurant?.data?.data?.message ? (
                    <Link
                      to={"/restaurants/" + restaurant?.data?.data?.id}
                      key={restaurant?.data?.data?.id}
                      style={{ textDecoration: "none" }}>
                      <RestCards {...restaurant?.data?.data} />
                    </Link>
                  ) : (
                    <></>
                  );
                })}
              </>
            )}
          </div>
        </>
      )
    );
  };
  const PaymentsContainer = ({ isVisible }) => {
    return (
      isVisible && (
        <>
          <div className="offerPageHeader">
            <div className="offerPageHeading">Available Coupons</div>
          </div>
          <div className="paymentsContainer">
            {paymentOffers?.data?.cards?.map((coupon) => {
              return coupon.cardType === "couponCardV2" ? (
                <div className="couponCard">
                  <div className="couponCodeBox">
                    <div className="couponCodeInnerBox">
                      <span className="couponCodeImg">
                        <img src={IMG_CDN_URL + coupon?.data?.data?.logo} />
                      </span>
                      <span className="couponCode">
                        {coupon?.data?.data?.couponCode}
                        <span className="upperCone"></span>
                        <span className="lowerCone"></span>
                      </span>
                    </div>
                  </div>
                  <div className="couponBody">
                    <div className="couponHeading">
                      {coupon?.data?.data?.title}
                    </div>
                    <div className="couponDesc">
                      {coupon?.data?.data?.description}
                    </div>
                    <div className="couponMoreBtn">+ more</div>
                  </div>
                  <div className="copyBtn">copy code</div>
                </div>
              ) : (
                <></>
              );
            })}
          </div>
        </>
      )
    );
  };

  const setBtnOutline = (option) => {
    const tglRestroBtn = document.getElementById("tglRestroBtn");
    const tglPaymentBtn = document.getElementById("tglPaymentBtn");
    const outlineElement = document.getElementById("tglBtnOutline");
    if (option === "tglRestroBtn") {
      outlineElement.style.width = tglRestroBtn.scrollWidth + "px";
      outlineElement.style.transform = "translate3d(0px, 0px, 0px)";
      tglPaymentBtn.classList.remove("tglBtnActive");
      tglRestroBtn.classList.add("tglBtnActive");
    } else {
      outlineElement.style.width = tglPaymentBtn.scrollWidth + "px";
      outlineElement.style.transform =
        "translate3d(" + (tglRestroBtn.scrollWidth + 24) + "px, 0px, 0px)";
      tglPaymentBtn.classList.add("tglBtnActive");
      tglRestroBtn.classList.remove("tglBtnActive");
    }
  };
  return (
    <>
      <div className="offerBanner">
        <div className="offerBannerInner">
          <div>
            <div className="bannerLeftHeading">Offers for you</div>
            <div className="bannerLeftDesc">
              Explore top deals and offers exclusively for you!
            </div>
          </div>
          <div>
            <img
              className="bannerRightImg"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham"
            />
          </div>
        </div>
      </div>
      <div className="tglBtnContainer">
        <div className="tglBtnInner">
          <div
            id="tglRestroBtn"
            className="tglBtns tglBtnActive"
            onClick={() => {
              setVisibleSection("offerSection");
              setBtnOutline("tglRestroBtn");
            }}>
            Restaurant offers
          </div>
          <div
            id="tglPaymentBtn"
            className="tglBtns"
            onClick={() => {
              setVisibleSection("paymentSection");
              setBtnOutline("tglPaymentBtn");
            }}>
            Payment offers/Coupons
          </div>
          <div
            className="tglBtnOutline"
            id="tglBtnOutline"
            style={{
              width: "148px",
              transform: "translate3d(0px, 0px, 0px)",
            }}></div>
        </div>
      </div>
      <div className="offerPageContainer">
        {isVisible && (
          <OffersContainer isVisible={visibleSection === "offerSection"} />
        )}
        {isVisible && (
          <PaymentsContainer isVisible={visibleSection === "paymentSection"} />
        )}
      </div>
    </>
  );
};
export default Offers;
