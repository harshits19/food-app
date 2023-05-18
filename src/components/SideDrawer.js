import loginIcon from "../assets/loginDrawerIcon.png";
const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  let backdrop;
  if (props.open) {
    drawerClasses = "side-drawer open";
    backdrop = <div className="backdrop" onClick={props.toggle}></div>;
    document?.body?.classList?.add("drawerOpen");
  } else if (!props.open && document?.body?.classList?.contains("drawerOpen")) {
    document?.body?.classList?.remove("drawerOpen");
  }
  return (
    <>
      <div className={drawerClasses}>
        <div className="drawerContainer">
          <div className="drawerCloseBtn" onClick={props.toggle}>
            <i
              className="fa-solid fa-xmark fa-xl"
              style={{ color: "#000000" }}></i>
          </div>
          <div className="drawerLoginHead">
            <div className="loginHeading">Login</div>
            <div className="loginDesc">or create an account</div>
            <div className="loginBorder"></div>
            <img className="loginIcon" src={loginIcon} />
          </div>
          <div className="drawerLoginBody">
            <div className="drawerLoginInput">
              <input
                className="phoneInput"
                type="tel"
                name="mobile"
                maxLength="10"
                placeholder="Phone number"></input>
            </div>
            <div className="checkoutBtn">Login</div>
            <div className="policySection">
              By clicking on Login, I accept the
              <a>Terms & Conditions</a> & <a>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
      {backdrop}
    </>
  );
};
export default SideDrawer;
