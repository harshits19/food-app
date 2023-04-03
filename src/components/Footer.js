const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerInner">
        <div className="footerRow">
          <div className="footerLeft">
            <h3>Company</h3>
            <ul className="footerUL">
              <li className="footerLi">
                <a className="footerLink" href="/about" alt="" target="_blank">
                  About us
                </a>
              </li>
              <li className="footerLi">
                <a className="footerLink" href="/about" alt="" target="_blank">
                  Team
                </a>
              </li>
              <li className="footerLi">
                <a className="footerLink" href="/about" alt="" target="_blank">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="footerCenter">
            <h3>Contact</h3>
            <ul className="footerUL">
              <li className="footerLi">
                <a className="footerLink" href="/about" alt="" target="_blank">
                  Help & Support
                </a>
              </li>
              <li className="footerLi">
                <a className="footerLink" href="/about" alt="" target="_blank">
                  Partner with Us
                </a>
              </li>
              <li className="footerLi">
                <a className="footerLink" href="/about" alt="" target="_blank">
                  Ride with Us
                </a>
              </li>
            </ul>
          </div>
          <div className="footerRight">
            <h3>Legal</h3>
            <ul className="footerUL">
              <li className="footerLi">
                <a className="footerLink" href="/about" alt="" target="_blank">
                  Terms and Conditions
                </a>
              </li>
              <li className="footerLi">
                <a className="footerLink" href="/about" alt="" target="_blank">
                  Refund and Cancellation
                </a>
              </li>
              <li className="footerLi">
                <a className="footerLink" href="/about" alt="" target="_blank">
                  Privacy Policy
                </a>
              </li>
              <li className="footerLi">
                <a className="footerLink" href="/about" alt="" target="_blank">
                  Cookie Policy
                </a>
              </li>
              <li className="footerLi">
                <a className="footerLink" href="/about" alt="" target="_blank">
                  Offer Terms
                </a>
              </li>
            </ul>
          </div>
          <div className="footerApps">
            <a href="#" target="_blank" className="appImg">
              <img
                alt=""
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
              />
            </a>
            <a href="#" target="_blank" className="appImg">
              <img
                alt=""
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
              />
            </a>
          </div>
        </div>
        <div className="footerStrip">
          <div className="stripLogo">
            <a href="#">
              <img
                width="142"
                alt=""
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
              />
            </a>
          </div>
          <div className="copyright">© 2023 FoodSimp</div>
          <div className="stripIcons">
            <i
              className="fa-brands fa-facebook-f fa-xl"
              style={{ color: "#ffffff" }}></i>
            <i
              className="fa-brands fa-pinterest fa-xl"
              style={{ color: "#ffffff" }}></i>
            <i
              className="fa-brands fa-instagram fa-xl"
              style={{ color: "#ffffff" }}></i>
            <i
              className="fa-brands fa-twitter fa-xl"
              style={{ color: "#ffffff" }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
