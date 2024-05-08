import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [searchBar, setSearchBar] = useState(false);

  const addSearchBar = () => {
    if (window.scrollY >= 242) {
      setSearchBar(true);
    } else {
      setSearchBar(false);
    }
  };

  window.addEventListener("scroll", addSearchBar);

  return (
    <>
      <div className="navbar">
        <img className="logo" src={assets.logo} alt="" />
        <div className={searchBar ? "search" : "searchNone"}>
          <input type="search" placeholder="🔍 Search" />
        </div>
        <ul className="nav-center">
          <li className="nav-1">Discover</li>
          <li className="nav-2">Trips</li>
          <li className="nav-3">Reviews</li>
          <li className="nav-4">More</li>
        </ul>
        <div className="nav-right">
          <button>Sign in</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
