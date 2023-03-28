const Header = () => {
  return (
    <header className="headers" id="myHeader">
      <nav>
        <a className="navlogo">food-app</a>
        <div className="navtoggle">
          <i className="fas fa-bars"></i>
        </div>
        <ul className="navlist">
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">Offers</a>
          </li>
          <li>
            <a href="#">Help</a>
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
