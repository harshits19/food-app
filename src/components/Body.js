import useOnline from "../utils/useOnline";
import Carousel from "./Carousel";
import HomePageComp from "./HomePageComp";
import GoToTop from "../utils/gotoTop";
const Body = () => {
  const isOnline = useOnline();
  if (!isOnline) {
    //if user is not online (then isOnline is false)
    return <h1>Seems like you have no Internet Connection</h1>;
  }
  return (
    <>
      <Carousel />
      <HomePageComp />
      <GoToTop />
    </>
  );
};
export default Body;
