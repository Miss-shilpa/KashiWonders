import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Menubar from "../Menubar/Menubar";
import Ways from "../Ways/Ways";
import ThingsToDo from "../ThingsToDo/ThingsToDo";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <Menubar />
      <Ways />
      <ThingsToDo />
    </div>
  );
};

export default Header;
