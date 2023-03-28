import { IMG_CDN_URL } from "../config";
import { resList } from "../config";

// const RestBox = ({ name, area, cuisines, cloudinaryImageId }) => {
const RestBox = ({ restid }) => {
  const { name, cloudinaryImageId, cuisines, area } = restid.data;
  return (
    <div className="restbox">
      <div className="restimg">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt=""></img>
      </div>
      <div className="restdesc">
        <h3>{name}</h3>
        <p>Rating</p>
        <p>{cuisines.join(" , ")}</p>
        <p>{area}</p>
      </div>
    </div>
  );
};
const RestCaraousal = () => {
  return (
    <>
      <div className="container">
        <div className="restCarousal">
          <h2>Top Restaurant Chains in Delhi</h2>
          <div className="restContainer">
            {/*  <RestBox
              name={resList[1].data.name}
              area={resList[1].data.area}
              cuisines={resList[1].data.cuisines}
              cloudinaryImageId={resList[1].data.cloudinaryImageId}
            /> */}
            <RestBox restid={resList[0]} />
            <RestBox restid={resList[1]} />
            <RestBox restid={resList[2]} />
            <RestBox restid={resList[3]} />
            <RestBox restid={resList[4]} />
            <RestBox restid={resList[5]} />
          </div>
        </div>
      </div>
    </>
  );
};
export default RestCaraousal;
