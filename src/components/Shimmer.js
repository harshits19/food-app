const Shimmer = () => {
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
      <ShimmerBox />
      <ShimmerBox />
      <ShimmerBox />
      <ShimmerBox />
      <ShimmerBox />
      <ShimmerBox />
      <ShimmerBox />
      <ShimmerBox />
    </>
  );
};
export default Shimmer;
