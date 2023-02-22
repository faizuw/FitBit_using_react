import react from "react";
import classes from "./TopBar.module.css";
const TopBar = (props) => {
  return (
    <header>
      <nav className={classes.Topbar}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt="Amazon logo"
        />
      </nav>
    </header>
  );
};

export default TopBar;
