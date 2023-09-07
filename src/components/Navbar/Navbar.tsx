import "./Navbar.css";
import Logo from "../../assets/logo.png";
import Cart from "../../assets/shopCart.png";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="website_logo" />
      </div>
      <ul className="menu">
        <li>Home</li>
        <li>Explore</li>
        <li>Market Place</li>
        <li>Investor</li>
        <li>News</li>
      </ul>
      <div className="flex gap-4">
        <div className="cart">
          <img src={Cart} alt="shopping_cart" />
        </div>
        <div className="buynow">
          <button>Buy Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
