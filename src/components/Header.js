import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="headers" id="myHeader">
      <nav>
        <Link className="navlogo" to="/">
          food-app
        </Link>
        <div className="navtoggle">
          <i className="fas fa-bars"></i>
        </div>
        <ul className="navlist">
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <Link to="/offers/">Offers</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <a href="#">SignIn</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
