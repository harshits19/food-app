const Shimmer = () => {
  // console.log("Shimmer");
  const ShimmerBox = () => {
    return (
      <div className="shimmerInnerContainer">
        <div className="shimmerBox shine"></div>
        <div className="lines shine"></div>
        <div className="lines shine"></div>
        <div className="lines shine"></div>
      </div>
    );
  };
  return (
    <>
      <div className="container">
        <div className="restCarousal">
          <h2>Open Restaurants</h2>
          <div className="shimmerContainer">
            <ShimmerBox />
            <ShimmerBox />
            <ShimmerBox />
            <ShimmerBox />
            <ShimmerBox />
            <ShimmerBox />
            <ShimmerBox />
            <ShimmerBox />
          </div>
        </div>
      </div>
    </>
  );
};
export default Shimmer;
