const Shimmer = () => {
  const ShimmerBox = () => {
    return (
      <div className="shimmerInnerContainer">
        <div className="shimmerBox shine"></div>
        <div className="shimmerLines">
          <div className="lines shine"></div>
          <div className="lines shine"></div>
          <div className="lines shine"></div>
        </div>
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
